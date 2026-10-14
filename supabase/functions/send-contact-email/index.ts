import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  submissionId: string;
}

const RECIPIENT_EMAIL = Deno.env.get("RECIPIENT_EMAIL") || "f.bjorgaas@gmail.com";
const FROM_EMAIL = "Kontakt formuler <info@contact.bgbygger.se>";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const SERVICE_LABELS: Record<string, string> = {
  gravning: "Schaktning",
  byggnation: "Markanläggning",
  betong: "Grundläggning",
  maskinforare: "Maskintjänster",
  annat: "Övrigt / Annat arbete",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSwedishDateTime(date: Date): string {
  const months = [
    "januari", "februari", "mars", "april", "maj", "juni",
    "juli", "augusti", "september", "oktober", "november", "december",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day} ${month} ${year} kl. ${hours}:${minutes}`;
}

function buildEmailHtml(data: ContactPayload): string {
  const now = new Date();
  const datumOchTid = formatSwedishDateTime(now);
  const tjanst = data.service ? (SERVICE_LABELS[data.service] || data.service) : "Ej specificerad";
  const subject = `Offertförfrågan: ${data.service ? SERVICE_LABELS[data.service] || data.service + " – " : ""}${data.name}`;

  const html = `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ny offertförfrågan</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); overflow: hidden;">
          <tr>
            <td style="padding: 40px;">
              <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #000000;">Ny offertförfrågan</h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280;">${escapeHtml(datumOchTid)}</p>

              <table role="presentation" style="width: 100%; background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">

                <!-- NAMN -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Namn:</span>
                    <span style="color: #1f2937;">${escapeHtml(data.name)}</span>
                  </td>
                </tr>

                <!-- E-POST -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">E-post:</span>
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>

                <!-- TELEFON -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Telefon:</span>
                    <a href="tel:${escapeHtml(data.phone)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.phone)}</a>
                  </td>
                </tr>

                <!-- TJÄNST -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Tjänst:</span>
                    <span style="color: #1f2937;">${escapeHtml(tjanst)}</span>
                  </td>
                </tr>

                <!-- MEDDELANDE -->
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Meddelande:</span>
                    <p style="margin: 0; color: #1f2937; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(data.message)}</p>
                  </td>
                </tr>

              </table>

              <!-- SUBMISSION ID -->
              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>Submission ID:</strong> ${escapeHtml(data.submissionId)}
                </p>
              </div>

              <!-- SIDFOT -->
              <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                Detta meddelande skickades automatiskt från kontaktformuläret på din webbplats.
                Svara direkt på detta e-postmeddelande för att kontakta kunden.
              </p>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return html;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const data: ContactPayload = await req.json();

    if (!data.name || !data.email || !data.phone || !data.message) {
      return new Response(
        JSON.stringify({ error: "Saknade obligatoriska fält." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" } },
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY secret is not configured.");
      return new Response(
        JSON.stringify({ error: "E-posttjänsten är inte konfigurerad." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" } },
      );
    }

    const tjanstLabel = data.service ? (SERVICE_LABELS[data.service] || data.service) : "";
    const subject = `Offertförfrågan: ${data.service ? tjanstLabel + " – " : ""}${data.name}`;
    const html = buildEmailHtml(data);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        reply_to: data.email,
        subject: subject,
        html: html,
      }),
    });

    if (!emailResponse.ok) {
      const errText = await emailResponse.text();
      console.error("Resend API error:", emailResponse.status, errText);
      return new Response(
        JSON.stringify({ error: "Kunde inte skicka e-post.", details: errText }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" } },
      );
    }

    const result = await emailResponse.json();

    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Ett oväntat fel uppstod." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" } },
    );
  }
});
