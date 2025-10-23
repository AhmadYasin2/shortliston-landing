"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, User, Briefcase, PlusCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";

export default function PricingPage() {
  const plans = [
    {
      type: "Candidate",
      icon: User,
      name: "Candidate Plan",
      price: "$15/mo",
      description:
        "For professionals who want visibility, skill growth, and AI support.",
      features: [
        "Active profile listing in recruiter searches",
        "AI-driven resume optimization",
        "Interview preparation tools",
        "Course and skill recommendations",
      ],
      cta: "Activate Profile",
      highlightColor: "from-primary/10 to-primary/5",
    },
    {
      type: "Business",
      icon: Briefcase,
      name: "B2B Growth Plan",
      price: "$45/mo",
      description:
        "For growing businesses hiring regularly and wanting predictable costs.",
      features: [
        "Unlimited candidate searches",
        "500 monthly credits (1 full profile = 50 credits)",
        "View candidate AI chat summaries",
        "Access to verified contact details",
        "Team collaboration tools",
      ],
      cta: "Get Started",
      highlighted: true,
      highlightColor: "from-secondary/10 to-secondary/5",
    },
    {
      type: "Business",
      icon: Briefcase,
      name: "B2B Enterprise Plan",
      price: "$140/mo",
      description: "For agencies and large teams hiring at scale.",
      features: [
        "Unlimited candidate searches",
        "Unlimited credits (fair use policy applies)",
        "Advanced analytics & reporting",
        "Priority support & API access",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlightColor: "from-secondary/10 to-secondary/5",
    },
  ];

  //   const addOn = {
  //     type: "Add-on",
  //     icon: PlusCircle,
  //     name: "Credit Add-on Package",
  //     price: "$14",
  //     description: "200 additional credits for businesses that need more candidate unlocks.",
  //     features: [
  //       "200 additional credits per purchase",
  //       "Each full candidate profile = 50 credits",
  //       "Equivalent to 4 full candidate unlocks",
  //       "Works with Growth and Enterprise plans",
  //       "Effective rate: $3.50 per unlocked candidate",
  //     ],
  //     cta: "Buy Credits",
  //     highlightColor: "from-amber-50 to-amber-100",
  //   }

  const faqs = [
    {
      question: "How do credits work?",
      answer:
        "Credits represent how many full candidate profiles your business can access. Each full profile (including contact info and AI insights) costs 50 credits. The Growth Plan includes 500 monthly credits (about 10 full unlocks).",
    },
    {
      question: "Can I buy extra credits?",
      answer:
        "Yes. You can purchase an add-on of 200 credits for $14 at any time. That’s roughly $3.50 per fully unlocked candidate. Credits roll over for 30 days after your billing cycle.",
    },
    {
      question: "What’s the difference between Growth and Enterprise?",
      answer:
        "Growth is built for SMBs recruiting a few roles per month. Enterprise is designed for large-scale teams that need unlimited access, analytics, and integrations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> How It Works
          </Badge>
          <h1 className="text-4xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight font-bold mb-6 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Pay for real results — visibility, verified candidates, and
            AI-powered recruiting.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 border-2 hover:border-primary/50 bg-gradient-to-br ${
                    plan.highlightColor
                  } transition-all duration-300 ${
                    plan.highlighted
                      ? "ring-2 ring-primary shadow-md shadow-primary/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary/80 uppercase tracking-wide">
                      {plan.type}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-5xl font-bold">
                        {plan.price.split("/")[0]}
                      </span>
                      {plan.price.includes("/") && (
                        <span className="text-muted-foreground">
                          /{plan.price.split("/")[1]}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <a
                    href="https://search.shortliston.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-8"
                  >
                    <Button
                      className={`w-full text-base py-6 ${
                        plan.highlighted ? "bg-primary text-white" : ""
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </a>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Add-on Card */}
          {/* <div className="mt-12 max-w-md mx-auto">
            <Card className="p-8 border-2 hover:border-amber-400 bg-gradient-to-br from-amber-50 to-amber-100 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <addOn.icon className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
                  {addOn.type}
                </span>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{addOn.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold">{addOn.price}</span>
                </div>
                <p className="text-muted-foreground">{addOn.description}</p>
              </div>
              <Link href="/signup" className="block mb-8">
                <Button className="w-full text-base py-6 bg-amber-500 text-white hover:bg-amber-600">
                  {addOn.cta}
                </Button>
              </Link>
              <div className="space-y-3">
                {addOn.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div> */}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-6 border-b last:border-b-0">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Recruit Smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the AI-powered hiring revolution today.
          </p>
          <a
            href="https://search.shortliston.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-base px-10 py-6">
              Get Started
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
