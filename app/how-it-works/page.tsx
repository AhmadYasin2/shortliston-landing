"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  Target,
  Users,
  Sparkles,
  Clock,
  MessageSquare,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Create Your Profile",
      description:
        "Register and build your profile. Tell us about your skills, education, experience, and projects. Upload your CV to auto-fill your details.",
      features: [
        "Register and set up your account",
        "Add your skills, education, and experience",
        "Upload a CV to auto-fill or enter details manually",
        "Complete your professional summary",
      ],
    },
    {
      number: 2,
      icon: Target,
      title: "Get Discovered",
      description:
        "Your profile becomes searchable by employers actively looking for candidates like you. No more cold applications.",
      features: [
        "Recruiters search directly for candidates",
        "You appear in results when your skills match",
        "No endless applications needed",
        "Opportunities come to you",
      ],
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Start Conversations",
      description:
        "Connect directly with hiring managers who want to meet you. Skip the black hole of applications.",
      features: [
        "Receive direct messages from recruiters",
        "Real conversations with decision-makers",
        "Schedule calls directly on the platform",
        "Get feedback and next steps",
      ],
    },
    {
      number: 4,
      icon: Rocket,
      title: "Land Your Dream Role",
      description:
        "Move from conversation to offer. With quality matches and real engagement, success is closer than you think.",
      features: [
        "Navigate interviews with confidence",
        "Get salary insights and negotiation support",
        "Receive offer details clearly",
        "Start your new role",
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description:
        "No more endless applications. Get matched with relevant opportunities.",
    },
    {
      icon: CheckCircle,
      title: "No Ghosting",
      description:
        "Real feedback and clear communication from employers who want you.",
    },
    {
      icon: MessageSquare,
      title: "Direct Access",
      description:
        "Talk to hiring managers, not automated systems. Get your voice heard.",
    },
    {
      icon: Sparkles,
      title: "Better Matches",
      description:
        "Quality over quantity. Every opportunity is genuinely relevant to you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> How It Works
          </Badge>
          <h1 className="text-4xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight font-bold mb-6 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Your Path to Landing the Right Role
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            A revolutionary approach connecting your talent to the opportunity
            it deserves.
          </p>
        </div>
      </section>

      {/* Step-by-Step Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1
                      ? "lg:grid-cols-2 lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="glass-card text-lg px-4 py-2"
                      >
                        Step {step.number}
                      </Badge>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-4">
                      {step.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-card/30 transition-all"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="glass-card p-8 hover-lift">
                    <div className="space-y-6">
                      <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-24 w-24 text-primary/30" />
                      </div>
                      <div className="bg-secondary/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why ShortlistOn Is Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've reimagined how candidates and employers connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Quick Questions
          </h2>

          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-2">
                How quickly can I get discovered?
              </h3>
              <p className="text-muted-foreground">
                Once your profile is complete, employers can start searching for
                candidates like you immediately. Many candidates get contacted
                within the first week.
              </p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-2">
                Is there a cost to use ShortlistOn?
              </h3>
              <p className="text-muted-foreground">
                ShortlistOn is completely free for candidates. We only make
                money when employers find their perfect match.
              </p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-2">
                Can I edit my profile after signing up?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. You can update your profile anytime—add new skills,
                update your experience, or change your preferences.
              </p>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-2">
                What if I'm not ready to share my profile?
              </h3>
              <p className="text-muted-foreground">
                You have full control. Set your profile to private or visible
                only to specific recruiters. You're always in charge.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Discovered?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join candidates who are getting real opportunities instead of
            collecting rejections.
          </p>
          <a
            href="https://search.shortliston.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary"
            >
              Start Your Journey
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
