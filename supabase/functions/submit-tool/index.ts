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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ToolSubmission = await req.json();
    console.log("Received tool submission:", submission);

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

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "AI Web Tools <onboarding@resend.dev>",
      to: ["contact@ai-webtools.com"],
      subject: `New AI Tool Submission: ${submission.name}`,
      html: `
        <h1>New Tool Submission</h1>
        <h2>Submitter Information</h2>
        <p><strong>Name:</strong> ${submission.submitterName || "Not provided"}</p>
        <p><strong>Email:</strong> ${submission.submitterEmail}</p>
        
        <h2>Tool Information</h2>
        <p><strong>Tool Name:</strong> ${submission.name}</p>
        <p><strong>Category:</strong> ${submission.category}</p>
        <p><strong>URL:</strong> <a href="${submission.url}">${submission.url}</a></p>
        
        <h3>Description</h3>
        <p>${submission.description}</p>
        
        ${submission.videoUrl ? `<p><strong>Video URL:</strong> <a href="${submission.videoUrl}">${submission.videoUrl}</a></p>` : ""}
        ${submission.imageUrl ? `<p><strong>Image URL:</strong> <a href="${submission.imageUrl}">${submission.imageUrl}</a></p>` : ""}
        
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
        <p>Hi${submission.submitterName ? ` ${submission.submitterName}` : ""},</p>
        <p>We've received your submission for <strong>${submission.name}</strong> and will review it within 5-7 business days.</p>
        
        <h2>What's Next?</h2>
        <ul>
          <li>Our team will review your tool for quality and appropriateness</li>
          <li>You may receive feedback or requests for changes</li>
          <li>Once approved, your tool will be added to the AI Web Tools Directory</li>
          <li>You'll receive a notification when your tool is live</li>
        </ul>
        
        <h3>Submission Details</h3>
        <p><strong>Tool Name:</strong> ${submission.name}</p>
        <p><strong>Category:</strong> ${submission.category}</p>
        <p><strong>URL:</strong> <a href="${submission.url}">${submission.url}</a></p>
        
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
