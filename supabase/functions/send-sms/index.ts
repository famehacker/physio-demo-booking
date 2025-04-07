
// This file needs to be deployed to your Supabase project as an Edge Function

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID");
const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");
const TWILIO_PHONE_NUMBER = Deno.env.get("TWILIO_PHONE_NUMBER");

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { phone, message } = await req.json();
    
    if (!phone || !message) {
      return new Response(
        JSON.stringify({ error: "Phone number and message are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    // Format phone number to international format if not already
    const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;
    
    // Send SMS via Twilio
    const twilioEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
    
    const twilioParams = new URLSearchParams();
    twilioParams.append("To", formattedPhone);
    twilioParams.append("From", TWILIO_PHONE_NUMBER);
    twilioParams.append("Body", message);
    
    const auth = btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`);
    
    const twilioResponse = await fetch(twilioEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${auth}`,
      },
      body: twilioParams.toString(),
    });
    
    const twilioData = await twilioResponse.json();
    
    if (!twilioResponse.ok) {
      console.error("Twilio error:", twilioData);
      return new Response(
        JSON.stringify({ error: "Failed to send SMS", details: twilioData }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ success: true, message: "SMS sent successfully", data: twilioData }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
