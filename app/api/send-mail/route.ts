import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create Zoho transporter
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, purpose, company, solution, teamSize, type } =
      body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Prepare email content based on form type
    let subject = "";
    let htmlContent = "";

    if (type === "contact") {
      subject = `New Contact Form Submission from ${name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Purpose:</strong> ${purpose || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `;
    } else if (type === "demo") {
      subject = `New Demo Request from ${name}`;
      htmlContent = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not specified"}</p>
        <p><strong>Solution Interest:</strong> ${
          solution || "Not specified"
        }</p>
        <p><strong>Team Size:</strong> ${teamSize || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `;
    }

    // Send email using Nodemailer with Zoho
    const result = await transporter.sendMail({
      from: `"Harakat Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_RECIPIENT_EMAIL || "talktous@harakat.tech",
      replyTo: `${name} <${email}>`,
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
