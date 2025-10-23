"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Sparkles, Heart, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Candidate-First",
      description:
        "We believe candidates deserve better. No more endless applications into the void.",
    },
    {
      icon: Target,
      title: "Quality Matches",
      description:
        "We connect serious candidates with employers who actively want to hire them.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Save time. Skip the gatekeeping. Get real conversations with decision-makers.",
    },
    {
      icon: BarChart3,
      title: "Transparency",
      description:
        "Know where you stand. Clear feedback. Real opportunities. No ghosting.",
    },
  ];

  const team = [
    {
      name: "Ahmad",
      role: "Founder & CEO",
      description: "Building the future of talent discovery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> About ShortlistOn.
          </Badge>
          <h1 className="text-4xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight font-bold mb-6 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            We're Fixing the Broken Job Market
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Founded on the belief that talented people deserve better than
            endless rejection and ghosting.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ShortlistOn was born from frustration. We watched talented
                people apply to hundreds of jobs, only to face silence,
                ghosting, and rejection without real feedback.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Meanwhile, employers struggled to find genuine talent and wasted
                time sorting through irrelevant applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We decided to flip the script. Instead of candidates chasing
                jobs, we bring jobs to candidates who deserve them. Real
                matching. Real conversations. Real opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-medium">
                      Candidate-first platform
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-medium">Quality over quantity</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-medium">No hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-medium">Real human connections</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at ShortlistOn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Change Your Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of candidates who are getting discovered instead of
            getting lost in the application void.
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
              Sign Up Today
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
