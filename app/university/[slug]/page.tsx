"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, CheckCircle, GraduationCap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// University configuration data
const universityData = {
  psut: {
    name: "Princess Sumaya University for Technology",
    logo: "/PSUT_Logo.png",
    endorsement:
      "Princess Sumaya University for Technology Career Education is excited to partner with ShortlistOn to offer you an exclusive 3 months subscription to provide our students with priority access to quality career opportunities.",
    primaryColor: "#04ace4",
    programs: [
      "Computer Science",
      "Engineering",
      "Business",
      "Medicine",
      "Law",
      "Liberal Arts",
      "Other",
    ],
  },
  htu: {
    name: "AlHussein Technical University",
    logo: "/HTU_Logo.png",
    endorsement:
      "HTU Career Advising & Professional Development is proud to offer our students priority access to ShortlistOn's innovative career platform.",
    primaryColor: "#A31F34",
    programs: [
      "Engineering",
      "Computer Science",
      "Management",
      "Science",
      "Architecture",
      "Other",
    ],
  },
} as const;

type UniversityKey = keyof typeof universityData;

export default function UniversitySignUpPage() {
  // ✅ Use the client-safe hook for route params
  const params = useParams();
  const slug = (params?.slug as string) as UniversityKey;

  const university = universityData[slug as UniversityKey];
  if (!university) return notFound();

  const currentYear = new Date().getFullYear();
  const yearOptions = useMemo(
    () => Array.from({ length: 7 }, (_, i) => String(currentYear + i)).concat("Graduate"),
    [currentYear]
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    programOther: "",
    graduationYear: "",
    cvFile: null as File | null,
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailValid = useMemo(() => /.+@.+\..+/.test(formData.email), [formData.email]);
  const phoneValid = useMemo(() => formData.phone.replace(/\D/g, "").length >= 8, [formData.phone]);
  const nameValid = useMemo(() => formData.fullName.trim().length >= 2, [formData.fullName]);

  const programValue =
    formData.program === "Other" && formData.programOther.trim()
      ? formData.programOther.trim()
      : formData.program;

  const formValid = nameValid && emailValid && phoneValid && formData.consent;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({ ...prev, cvFile: "Please upload a PDF or Word document (PDF/DOC/DOCX)." }));
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, cvFile: "File is too large. Max size is 15MB." }));
      return;
    }
    setErrors((prev) => ({ ...prev, cvFile: "" }));
    setFormData((prev) => ({ ...prev, cvFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!nameValid) nextErrors.fullName = "Please enter your full name.";
    if (!emailValid) nextErrors.email = "Please enter a valid email.";
    if (!phoneValid) nextErrors.phone = "Please enter a valid phone number.";
    if (!formData.consent) nextErrors.consent = "Please agree to be contacted.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      if (programValue) data.append("program", programValue);
      if (formData.graduationYear) data.append("graduationYear", formData.graduationYear);
      if (formData.cvFile) data.append("cv", formData.cvFile);
      data.append("universitySlug", slug);
      data.append("universityName", university.name);

      const res = await fetch("/api/university-signup", { method: "POST", body: data });
      if (!res.ok) throw new Error("Submission failed");

      setIsSubmitted(true);
    } catch (err) {
      setErrors((prev) => ({ ...prev, submit: "Something went wrong. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 pb-[env(safe-area-inset-bottom)]">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-serif text-2xl">Thank You!</CardTitle>
            <CardDescription className="text-base">
              Your {university.name} signup has been received.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 text-left">
              <h4 className="font-semibold font-serif mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Your profile is tagged for {university.name}</li>
                <li>• You’ll get launch updates and intake status</li>
                <li>• Your profile will be ready on launch day</li>
              </ul>
            </div>
            <div className="text-xs text-muted-foreground bg-muted/30 rounded p-3">
              This partnership between {university.name} and ShortlistOn helps you be discovered by employers faster.
            </div>
            <div className="pt-1">
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto">Back to homepage</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-[env(safe-area-inset-bottom)]">
      {/* Header with University Branding */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-3xl px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-bold text-lg md:text-xl font-sans whitespace-nowrap">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Shortlist</span>
                <span className="text-foreground">On.</span>
              </span>
            </div>
            {/* University logo now shows on mobile too */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={university.logo || "/placeholder.svg"}
              alt={`${university.name} logo`}
              className="h-8 md:h-12 w-auto object-contain shrink-0"
            />
          </div>
        </div>
      </header>

      {/* University Partnership Banner */}
      <div
        className="py-3 md:py-4 px-4 text-center text-white"
        style={{ backgroundColor: university.primaryColor }}
      >
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
            {/* <GraduationCap className="h-4 w-4 md:h-5 md:w-5" /> */}
            <span className="font-semibold text-sm md:text-base">Exclusive {university.name} Partnership</span>
          </div>
          <p className="text-xs md:text-sm/6 opacity-90 max-w-2xl mx-auto px-1 break-words">
            {university.endorsement}
          </p>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="py-8 md:py-12 px-4">
        <div className="mx-auto w-full max-w-xl md:max-w-2xl">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold font-sans mb-2 md:mb-4 break-words">
              {university.name} Priority Signup
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-prose mx-auto">
              Build your profile now. Upload a CV to auto‑sync your skills, education, experience, and projects — or enter them manually. Recruiters will search and discover you.
            </p>
          </div>

          <Card className="shadow-sm">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="font-serif text-lg md:text-xl">Create Your Profile</CardTitle>
              <CardDescription className="text-sm md:text-base">
                We’ll prep your profile for launch and tag it for {university.name}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      inputMode="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      aria-invalid={!nameValid}
                      required
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+962 7x xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      aria-invalid={!phoneValid}
                      required
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    aria-invalid={!emailValid}
                    required
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  <p className="text-xs text-muted-foreground">
                    We'll use this to send you launch updates and intake status.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program">Program/Major</Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, program: value }))}
                    >
                      <SelectTrigger id="program">
                        <SelectValue placeholder="Select your program" />
                      </SelectTrigger>
                      <SelectContent>
                        {university.programs.map((program) => (
                          <SelectItem key={program} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.program === "Other" && (
                      <div className="mt-2">
                        <Input
                          placeholder="Type your program"
                          value={formData.programOther}
                          onChange={(e) => setFormData((prev) => ({ ...prev, programOther: e.target.value }))}
                        />
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">Helps us tailor opportunities to your field.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Expected Graduation Year</Label>
                    <Select
                      value={formData.graduationYear}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, graduationYear: value }))}
                    >
                      <SelectTrigger id="graduationYear">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {yearOptions.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Gives employers your availability timeline.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">Upload Your CV (optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 md:p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                      className="hidden"
                      aria-describedby="cv-help"
                    />
                    <label htmlFor="cv" className="cursor-pointer block">
                      <Upload className="h-7 w-7 md:h-8 md:w-8 text-muted-foreground mx-auto mb-2" />
                      {formData.cvFile ? (
                        <div>
                          <p className="font-medium text-primary truncate max-w-full">{formData.cvFile.name}</p>
                          <p className="text-xs text-muted-foreground">Tap to change file (max 15MB)</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium">Tap to upload your CV</p>
                          <p className="text-xs text-muted-foreground">PDF or DOC files, max 15MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                  {errors.cvFile && <p className="text-xs text-red-600 mt-1">{errors.cvFile}</p>}
                  <p id="cv-help" className="text-xs text-muted-foreground">
                    Uploading helps auto‑sync your skills, education, experience, and projects. You can also add them manually later.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked as boolean }))}
                    required
                    className="border-primary w-5 h-5 mt-0.5"
                  />
                  <div className="text-sm">
                    <label htmlFor="consent" className="cursor-pointer">
                      I agree to be contacted about launch and intake status. This application is part of the {university.name} partnership and will be processed according to our {" "}
                      <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">Privacy Policy</Link>.
                    </label>
                    {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent}</p>}
                  </div>
                </div>

                {errors.submit && <p className="text-sm text-red-600">{errors.submit}</p>}

                <div className="pt-1">
                  <Button type="submit" className="w-full text-base md:text-lg py-5 md:py-6" disabled={!formValid || isSubmitting}>
                    {isSubmitting ? "Submitting..." : `Join Us`}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6 md:mt-8">
            <p className="text-xs md:text-sm text-muted-foreground">
              This exclusive link is provided through {university.name} Career Services.

              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
