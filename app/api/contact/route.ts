import { NextResponse } from "next/server";

// This is a stub. Wire it up to a real email service before going live —
// see the README section "Making the contact form actually send email".
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // TODO: replace this with a real provider, e.g. Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@your-domain.com",
    //   to: "your.email@example.com",
    //   subject: `New message from ${name}`,
    //   text: message,
    //   reply_to: email,
    // });

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
