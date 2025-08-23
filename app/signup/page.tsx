"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cvFile: null as File | null,
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ok =
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (ok) {
      setFormData((prev) => ({ ...prev, cvFile: file }));
    } else {
      alert("Please upload a PDF or Word document (.pdf, .doc, .docx).");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      // general signup: no universitySlug / universityName
      if (formData.cvFile) data.append("cv", formData.cvFile);

      const res = await fetch("/api/university-signup", {
        method: "POST",
        body: data,
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Submission failed");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      alert(`Submission failed: ${err?.message || "please try again."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-serif text-2xl">Thanks! You’re on the list.</CardTitle>
            <CardDescription className="text-base">
              We’ll create your profile at launch and notify you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 text-left">
              <h4 className="font-semibold font-serif mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Your profile will be prepped for launch day</li>
                <li>• You’ll get launch updates and next steps</li>
                <li>• No spam — just important notifications</li>
              </ul>
            </div>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" aria-label="Home">
            <span className="font-bold font-lexend text-xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shortlist
              </span>
              <span className="text-foreground">On.</span>
            </span>
            </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      {/* Sign Up Form */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4">Sign up before launch</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We’ll create your profile at launch and notify you. Uploading your CV helps auto-fill your
              profile (skills, education, experience, projects) — or you can add these manually later.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Create Your Profile</CardTitle>
              <CardDescription>
                We’ll only contact you about launch and your signup status. Your data stays private.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+962 7X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    We’ll use this for launch updates and important notifications.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">Upload Your CV *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <label htmlFor="cv" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      {formData.cvFile ? (
                        <div>
                          <p className="font-medium text-primary">{formData.cvFile.name}</p>
                          <p className="text-xs text-muted-foreground">Click to change file</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium">Click to upload your CV</p>
                          <p className="text-xs text-muted-foreground">PDF or DOC files only, max 15MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    CV upload is just to speed up profile creation. You can edit details later.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold font-serif mb-2">How we use your information:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Prepare your profile for launch day</li>
                    <li>• Send you important launch updates</li>
                    <li>• No data sharing without your consent</li>
                  </ul>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked as boolean }))}
                    required
                  />
                  <div className="text-sm">
                    <label htmlFor="consent" className="cursor-pointer">
                      I agree to receive communications about launch updates and understand my data will be processed
                      according to the{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full text-lg py-6" disabled={!formData.consent || isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Sign up before launch"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
