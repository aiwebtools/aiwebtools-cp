import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FeedbackRequest {
  name: string;
  email: string;
  feedbackType: string;
  message: string;
  toolName: string;
  toolUrl: string;
  toolCategory: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, feedbackType, message, toolName, toolUrl, toolCategory }: FeedbackRequest = await req.json();

    // Send feedback email to AI Web Tools team
    const feedbackEmailResponse = await resend.emails.send({
      from: "AI Web Tools Feedback <noreply@resend.dev>",
      to: ["contact@ai-webtools.com"],
      replyTo: email,
      subject: `${feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)} Feedback: ${toolName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #0ea5e9; margin-bottom: 20px; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
              New ${feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)} Feedback
            </h1>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #334155; margin-top: 0;">Tool Information:</h3>
              <p style="margin: 5px 0;"><strong>Tool Name:</strong> ${toolName}</p>
              <p style="margin: 5px 0;"><strong>Category:</strong> ${toolCategory}</p>
              <p style="margin: 5px 0;"><strong>URL:</strong> <a href="${toolUrl}" style="color: #0ea5e9;">${toolUrl}</a></p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #334155; margin-top: 0;">User Information:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Feedback Type:</strong> ${feedbackType.charAt(0).toUpperCase() + feedbackType.slice(1)}</p>
            </div>
            
            <div style="background-color: #fefefe; padding: 20px; border-left: 4px solid #0ea5e9; margin-bottom: 20px;">
              <h3 style="color: #334155; margin-top: 0;">Message:</h3>
              <div style="white-space: pre-wrap; line-height: 1.6; color: #475569;">${message}</div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This feedback was sent through the AI Web Tools feedback system.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    const confirmationEmailResponse = await resend.emails.send({
      from: "AI Web Tools <noreply@resend.dev>",
      to: [email],
      subject: `Thank you for your feedback about ${toolName}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #0ea5e9; margin-bottom: 20px; text-align: center;">
              🚀 Thank You for Your Feedback!
            </h1>
            
            <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 20px;">
              Hi ${name},
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 20px;">
              Thank you for taking the time to provide feedback about <strong>${toolName}</strong>. 
              We really appreciate your input and will review your ${feedbackType} carefully.
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
              <p style="margin: 0; font-weight: 600; color: #0369a1;">Your feedback helps us improve!</p>
              <p style="margin: 10px 0 0 0; color: #0369a1;">We're constantly working to make our AI tools better, and user feedback like yours is invaluable.</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 20px;">
              If your feedback requires a response, we'll get back to you as soon as possible at this email address.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${toolUrl}" style="display: inline-block; background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                Visit ${toolName} Again
              </a>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 10px;">
              Best regards,<br>
              <strong>The AI Web Tools Team</strong>
            </p>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Visit us at <a href="https://aiwebtools.ai" style="color: #0ea5e9;">aiwebtools.ai</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Feedback email sent successfully:", feedbackEmailResponse);
    console.log("Confirmation email sent successfully:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        feedbackEmailId: feedbackEmailResponse.data?.id,
        confirmationEmailId: confirmationEmailResponse.data?.id
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
    console.error("Error in send-feedback function:", error);
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