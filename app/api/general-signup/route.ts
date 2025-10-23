import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ENABLE_R2 =
  process.env.ENABLE_R2_UPLOAD === "true" &&
  !!process.env.R2_ACCOUNT_ID &&
  !!process.env.R2_ACCESS_KEY_ID &&
  !!process.env.R2_SECRET_ACCESS_KEY &&
  !!process.env.R2_BUCKET;

const r2 = ENABLE_R2
  ? new S3Client({
      region: "auto",
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
      },
      forcePathStyle: true,
    })
  : null;

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let fullName = "",
      email = "",
      phone = "",
      linkedin = "",
      notes = "",
      program = "",
      graduationYear = "",
      universitySlug = "",
      universityName = "";
    let cv: File | null = null;

    // Handle both JSON and FormData
    if (contentType.includes("application/json")) {
      const body = await req.json();
      fullName = (body.fullName || "").toString().trim();
      email = (body.email || "").toString().trim();
      phone = (body.phone || "").toString().trim();
      linkedin = (body.linkedin || "").toString().trim();
      notes = (body.notes || "").toString().trim();
      program = (body.program || "").toString().trim();
      graduationYear = (body.graduationYear || "").toString().trim();
      universitySlug = (body.universitySlug || "").toString().trim();
      universityName = (body.universityName || "").toString().trim();
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const form = await req.formData();
      fullName = (form.get("fullName") || "").toString().trim();
      email = (form.get("email") || "").toString().trim();
      phone = (form.get("phone") || "").toString().trim();
      linkedin = (form.get("linkedin") || "").toString().trim();
      notes = (form.get("notes") || "").toString().trim();
      program = (form.get("program") || "").toString().trim();
      graduationYear = (form.get("graduationYear") || "").toString().trim();
      universitySlug = (form.get("universitySlug") || "").toString().trim();
      universityName = (form.get("universityName") || "").toString().trim();
      cv = form.get("cv") as File | null;
    } else {
      return NextResponse.json(
        {
          ok: false,
          stage: "validate",
          error: `Unsupported content-type: ${contentType}`,
        },
        { status: 400 }
      );
    }

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        {
          ok: false,
          stage: "validate",
          error: "Missing fullName/email/phone.",
        },
        { status: 400 }
      );
    }

    // Upload CV (optional)
    let cvUrl: string | null = null;
    let cvOriginalName: string | null = null;
    let cvSize: number | null = null;

    if (cv) {
      try {
        cvOriginalName = cv.name || "cv";
        cvSize = cv.size || null;

        if (!r2) throw new Error("R2 disabled or not configured.");
        const allowed = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowed.includes(cv.type))
          throw new Error("CV must be PDF/DOC/DOCX.");
        if (cv.size > 15 * 1024 * 1024)
          throw new Error("CV too large (max 15MB).");

        const key = `cv/${randomUUID()}-${safeName(cvOriginalName)}`;
        const arrayBuffer = await cv.arrayBuffer();

        await r2.send(
          new PutObjectCommand({
            Bucket: process.env.R2_BUCKET!,
            Key: key,
            Body: Buffer.from(arrayBuffer),
            ContentType: cv.type || "application/octet-stream",
            ContentDisposition: `inline; filename="${safeName(
              cvOriginalName
            )}"`,
          })
        );

        const base = process.env.R2_PUBLIC_BASE_URL;
        if (base) cvUrl = `${base}/${key}`;
      } catch (e: any) {
        console.error("[R2 upload skipped]", e?.message || e);
      }
    }

    // Send to Make
    const webhook = process.env.MAKE_WEBHOOK_URL;
    if (!webhook?.startsWith("http")) {
      return NextResponse.json(
        { ok: false, stage: "env", error: "MAKE_WEBHOOK_URL missing/invalid." },
        { status: 500 }
      );
    }

    const payload = {
      submittedAt: new Date().toISOString(),
      type: universitySlug ? "university" : "general",
      universitySlug: universitySlug || null,
      universityName: universityName || null,
      fullName,
      email,
      phone,
      linkedin: linkedin || null,
      notes: notes || null,
      program: program || null,
      graduationYear: graduationYear || null,
      cvOriginalName,
      cvSize,
      cvUrl, // <- will be null if R2 disabled or upload failed, still sends
    };

    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.MAKE_SHARED_SECRET
          ? { "X-Intake-Secret": process.env.MAKE_SHARED_SECRET }
          : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const details = await res.text();
      return NextResponse.json(
        {
          ok: false,
          stage: "make",
          error: "Make failed",
          details: details.slice(0, 400),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, cvUploaded: !!cvUrl, cvUrl });
  } catch (err: any) {
    console.error("[university-signup] fatal", err);
    return NextResponse.json(
      { ok: false, stage: "fatal", error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
