"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Mail,
  FileText,
  Target,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".scroll-animate")
      .forEach((el) => observerRef.current?.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <header
        className={`glass-header sticky top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "py-2 backdrop-blur-xl bg-background/80 shadow-lg"
            : "py-4 backdrop-blur-sm bg-background/60"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" aria-label="Home">
            <span className="font-bold font-lexend text-xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shortlist
              </span>
              <span className="text-foreground">On.</span>
            </span>
            </Link>
          </div>
          <Link href="/signup" aria-label="Sign up">
            <Button
              variant="outline"
              size="lg"
              className={`transition-all ${
                scrolled ? "opacity-80" : "opacity-100"
              }`}
            >
              Register Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-2 relative scroll-animate">
        <div className="container mx-auto max-w-4xl text-center z-10">
          {/* <Badge
            variant="secondary"
            className="mb-6"
          >
            <Sparkles className="w-8 h-8 mr-2" /> Pre-Launch • Sign up before
            launch
          </Badge> */}
          <h1 className="text-4xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight font-bold mb-6 pb-1 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skip the endless apply–wait–ghost loop
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Forget endless applications and randomness — you deserve better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary"
              >
                <Mail className="mr-2 h-5 w-5" /> Sign up Pre-launch
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Early signups get profiles auto-created at launch + an exclusive
              trial month for free.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Intro */}
      <section className="min-h-screen flex items-center px-4 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 scroll-animate">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              How Shortlist
            </span>
            <span className="text-foreground">On.</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A revolutionary approach connecting your talent to the opportunity
            it deserves.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section className="min-h-screen flex items-center px-4 scroll-animate">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary" className="glass-card">
                Step 1
              </Badge>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Create Your Profile
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Register on Shortlist
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                On.
              </span>{" "}
              and start building your profile. Tell us about yourself — your
              skills, education, experience, and projects. You can upload your
              CV to automatically sync your details or enter them manually.
            </p>
            <div className="space-y-4">
              {[
                "Register and set up your account",
                "Add your skills, education, and experience",
                "Upload a CV to auto-fill or enter details manually",
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/30 transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="glass-card p-8">
            <div className="space-y-6">
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <FileText className="h-16 w-16 text-primary/50" />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Step 2 */}
      <section className="min-h-screen flex items-center px-4 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 scroll-animate">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <Card className="glass-card p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                  <div>
                    <div className="h-3 bg-muted rounded w-24 mb-2"></div>
                    <div className="h-2 bg-muted rounded w-16"></div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Found You</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Recruiters are searching for profiles like yours.
              </p>
            </div>
          </Card>
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary" className="glass-card">
                Step 2
              </Badge>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Get Discovered
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Instead of applying endlessly, recruiters now come to you. Your
              profile is searchable by employers actively looking for skills,
              experience, and talent like yours.
            </p>
            <div className="space-y-4">
              {[
                "Recruiters search directly for candidates",
                "You appear in results when your skills match",
                "No more one-way applications — opportunities come to you",
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/30 transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="min-h-screen flex items-center px-4 scroll-animate">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary" className="glass-card">
                Step 3
              </Badge>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Start Conversations
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Skip the black hole of applications. Connect directly with hiring
              managers who want to meet you.
            </p>
          </div>
          <Card className="glass-card p-8">
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm">
                  "Hi! I reviewed your profile and would love to discuss our
                  Senior Developer role."
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary"
                >
                  Reply
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How it Works Intro */}
      <section className="min-h-screen flex items-center px-4 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5 scroll-animate">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            With ShortlistOn.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            It’s that Simple
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    S
                  </span>
                </div>
                <span className="font-bold text-xl font-sans">
                  ShortlistOn.
                </span>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Connecting serious candidates with employers who actually want
                to hire.
              </p>
            </div>

            <div>
              <h4 className="font-bold font-serif mb-4"></h4>
              <ul className="space-y-2 text-primary-foreground/80">

              </ul>
            </div>

            <div>
              <h4 className="font-bold font-serif mb-4">Follow</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="https://instagram.com/shortlistonai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/61571011697596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/shortliston"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 ShortlistOn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
