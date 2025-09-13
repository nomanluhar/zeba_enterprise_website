import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_F6vZo93C_7xDFSDbSDcPgA37VbB7re19J");

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, country, company, productInterest, message, subject } = data;

    const html = `
      <h2>New Contact/Enquiry Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Product Interest:</strong> ${productInterest || "-"}</p>
      <p><strong>Subject:</strong> ${subject || "-"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;
    console.log({html})
    console.log("Sending email with data:", data);
    await resend.emails.send({
      from: "admin@zeba-enterprise.com", // must be a verified sender
      to: ["info@zeba-enterprise.com"],
      subject: subject || "New Enquiry from Zeba Enterprise Website",
      html,
      replyTo: email || undefined, // ✅ so you can reply directly
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
