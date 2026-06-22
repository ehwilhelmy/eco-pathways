import { Resend } from "resend";

// Where estimate requests are delivered.
const TO_EMAIL = "fhopf47@gmail.com";
// Until eco-pathways.com is verified in Resend, send from their shared sender.
// Once the domain is verified, switch this to e.g. "Eco-Pathways <noreply@eco-pathways.com>".
const FROM_EMAIL = "Eco-Pathways Website <onboarding@resend.dev>";

type EstimatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  projectType?: string;
  details?: string;
  company?: string; // honeypot — real users never fill this
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { success: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let data: EstimatePayload;
  try {
    data = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: a bot filled the hidden "company" field. Pretend success so it
  // doesn't retry, but send nothing.
  if (data.company && data.company.trim() !== "") {
    return Response.json({ success: true });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  if (!name || !email) {
    return Response.json(
      { success: false, error: "Name and email are required." },
      { status: 400 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${data.phone?.trim() || "—"}`,
    `Project location: ${data.location?.trim() || "—"}`,
    `Project type: ${data.projectType?.trim() || "—"}`,
    "",
    "Project details:",
    data.details?.trim() || "—",
  ];

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New estimate request — ${name}`,
      text: lines.join("\n"),
    });

    if (error) {
      return Response.json(
        { success: false, error: "Could not send your request." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Could not send your request." },
      { status: 502 }
    );
  }
}
