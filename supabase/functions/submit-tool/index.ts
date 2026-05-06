import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ToolSubmission {
  name: string;
  description: string;
  url: string;
  category: string;
  videoUrl?: string;
  imageUrl?: string;
  submitterName?: string;
  submitterEmail: string;
}

// Basic HTML escape to prevent injection in admin/user emails
const escapeHtml = (str: string): string =>
  String(str ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string
  ));

// Only allow http/https URLs in href attributes
const safeUrl = (url: string): string => {
  try {
    const u = new URL(url);
    if (u.protocol !== "http:" && u.protocol !== "https:") return "#";
    return escapeHtml(u.toString());
  } catch {
    return "#";
  }
};

// Simple in-memory IP rate limiting: max 5 submissions per IP per hour
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const ipHits = new Map<string, number[]>();
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  return false;
};

const MAX_LEN = { name: 200, description: 2000, category: 100, submitterName: 200, submitterEmail: 320, url: 2048 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const submission: ToolSubmission = await req.json();
    console.log("Received tool submission for:", submission?.name);

    // Validate required fields
    if (!submission.name || !submission.description || !submission.url || !submission.category || !submission.submitterEmail) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Length + format validation
    if (
      submission.name.length > MAX_LEN.name ||
      submission.description.length > MAX_LEN.description ||
      submission.category.length > MAX_LEN.category ||
      submission.url.length > MAX_LEN.url ||
      submission.submitterEmail.length > MAX_LEN.submitterEmail ||
      (submission.submitterName && submission.submitterName.length > MAX_LEN.submitterName)
    ) {
      return new Response(
        JSON.stringify({ error: "One or more fields exceed allowed length." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    if (!EMAIL_RE.test(submission.submitterEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const safeName = escapeHtml(submission.name);
    const safeDescription = escapeHtml(submission.description);
    const safeCategory = escapeHtml(submission.category);
    const safeSubmitterName = escapeHtml(submission.submitterName || "Not provided");
    const safeSubmitterEmail = escapeHtml(submission.submitterEmail);
    const safeToolUrl = safeUrl(submission.url);
    const safeVideoUrl = submission.videoUrl ? safeUrl(submission.videoUrl) : "";
    const safeImageUrl = submission.imageUrl ? safeUrl(submission.imageUrl) : "";

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "AI Web Tools <onboarding@resend.dev>",
      to: ["contact@ai-webtools.com"],
      subject: `New AI Tool Submission: ${submission.name.slice(0, 200)}`,
      html: `
        <h1>New Tool Submission</h1>
        <h2>Submitter Information</h2>
        <p><strong>Name:</strong> ${safeSubmitterName}</p>
        <p><strong>Email:</strong> ${safeSubmitterEmail}</p>
        
        <h2>Tool Information</h2>
        <p><strong>Tool Name:</strong> ${safeName}</p>
        <p><strong>Category:</strong> ${safeCategory}</p>
        <p><strong>URL:</strong> <a href="${safeToolUrl}">${safeToolUrl}</a></p>
        
        <h3>Description</h3>
        <p>${safeDescription}</p>
        
        ${safeVideoUrl ? `<p><strong>Video URL:</strong> <a href="${safeVideoUrl}">${safeVideoUrl}</a></p>` : ""}
        ${safeImageUrl ? `<p><strong>Image URL:</strong> <a href="${safeImageUrl}">${safeImageUrl}</a></p>` : ""}
        
        <hr>
        <p><em>Review this submission and add it to the directory if approved.</em></p>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation email to submitter
    const confirmationEmailResponse = await resend.emails.send({
      from: "AI Web Tools <onboarding@resend.dev>",
      to: [submission.submitterEmail],
      subject: "We received your AI tool submission!",
      html: `
        <h1>Thank you for your submission!</h1>
        <p>Hi${submission.submitterName ? ` ${safeSubmitterName}` : ""},</p>
        <p>We've received your submission for <strong>${safeName}</strong> and will review it within 5-7 business days.</p>
        
        <h2>What's Next?</h2>
        <ul>
          <li>Our team will review your tool for quality and appropriateness</li>
          <li>You may receive feedback or requests for changes</li>
          <li>Once approved, your tool will be added to the AI Web Tools Directory</li>
          <li>You'll receive a notification when your tool is live</li>
        </ul>
        
        <h3>Submission Details</h3>
        <p><strong>Tool Name:</strong> ${safeName}</p>
        <p><strong>Category:</strong> ${safeCategory}</p>
        <p><strong>URL:</strong> <a href="${safeToolUrl}">${safeToolUrl}</a></p>
        
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Best regards,<br>The AI Web Tools Team</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Tool submission received successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-tool function:", error);
    return new Response(
      JSON.stringify({ error: "Submission failed. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
