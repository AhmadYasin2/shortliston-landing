"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { FAQSchema } from "@/components/structured-data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Getting Started",
      faqs: [
        {
          question: "What is ShortlistOn?",
          answer:
            "ShortlistOn is a revolutionary job discovery platform that connects serious candidates with employers who want to hire. Instead of endless applications, employers search for candidates like you.",
        },
        {
          question: "How do I sign up?",
          answer:
            "Click on 'Register Now' and fill out your basic info. You can upload your CV or add your details manually. It takes about 5-10 minutes to get started.",
        },
        {
          question: "Is there a cost to use ShortlistOn?",
          answer:
            "ShortlistOn is completely free for candidates. Employers pay for access. We believe you shouldn't have to pay to find your dream job.",
        },
        {
          question: "Do I need a CV to sign up?",
          answer:
            "No, but it helps. You can upload a CV to auto-fill your profile or enter your details manually. Either way works great.",
        },
      ],
    },
    {
      category: "Your Profile",
      faqs: [
        {
          question: "How do I edit my profile?",
          answer:
            "You can edit your profile anytime after signing up. Add or remove skills, update experience, change your preferences, and more.",
        },
        {
          question: "Can I hide my profile from certain employers?",
          answer:
            "Yes. You have full control. Set your profile to private, visible to all, or visible to specific recruiters. You're always in charge.",
        },
        {
          question: "How do I upload my CV?",
          answer:
            "After signing up, go to your profile and select 'Upload CV'. We accept PDF and Word documents. It auto-fills your profile information.",
        },
        {
          question: "What information should I include?",
          answer:
            "Include your skills, work experience, education, projects, and any certifications. The more complete your profile, the better matches you'll get.",
        },
        {
          question: "Can I have multiple profiles?",
          answer:
            "Currently, each account has one profile. If you want multiple roles, you can update your profile and preferences as needed.",
        },
      ],
    },
    {
      category: "Getting Discovered",
      faqs: [
        {
          question: "How do employers find me?",
          answer:
            "Employers search our database for candidates matching specific skills, experience, and qualifications. When your profile matches their criteria, they can reach out to you.",
        },
        {
          question: "How long until I get contacted?",
          answer:
            "It depends on your field and the employers searching. Some candidates hear from employers within days, others within weeks. The more complete your profile, the better your chances.",
        },
        {
          question: "Why aren't I getting contacted?",
          answer:
            "Make sure your profile is complete with skills, experience, and a clear professional summary. Consider what employers are actually looking for and adjust accordingly.",
        },
        {
          question: "Can I search for jobs myself?",
          answer:
            "ShortlistOn is a discovery platform, not a job board. Employers come to you when they need your skills. This ensures quality matches, not quantity.",
        },
      ],
    },
    {
      category: "Communication & Safety",
      faqs: [
        {
          question: "How do employers contact me?",
          answer:
            "Employers send you messages through the platform. You'll get notifications via email and SMS (if enabled). All communication is within the platform for safety.",
        },
        {
          question: "Is my information safe?",
          answer:
            "Yes. We use industry-standard encryption and privacy practices. Your data is never shared with third parties without your consent.",
        },
        {
          question: "Can I see who's viewing my profile?",
          answer:
            "Premium members get access to profile analytics showing who viewed your profile and what they searched for. This helps you understand recruiter interest.",
        },
        {
          question: "What if I get inappropriate messages?",
          answer:
            "You can report or block any user. Our team reviews reports and takes action against violations of our community guidelines.",
        },
      ],
    },
    {
      category: "Account Management",
      faqs: [
        {
          question: "How do I deactivate or delete my account?",
          answer:
            "Go to Account Settings and select 'Deactivate' or 'Delete'. Deactivation hides your profile temporarily; deletion removes everything permanently.",
        },
        {
          question: "Can I reactivate my account?",
          answer:
            "Yes. You can reactivate a deactivated account within 30 days. After 30 days, you'll need to create a new account.",
        },
        {
          question: "How do I change my email or password?",
          answer:
            "Go to Account Settings and update your email or password. For security, we'll send a confirmation link to your current email.",
        },
        {
          question: "What if I forgot my password?",
          answer:
            "Click 'Forgot Password' on the login page. Enter your email and we'll send you a link to reset it.",
        },
      ],
    },
    {
      category: "Premium & Plans",
      faqs: [
        {
          question: "What's included in Premium?",
          answer:
            "Premium includes priority support, profile analytics, career insights, interview prep resources, and more visibility to recruiters.",
        },
        {
          question: "Is Premium worth it?",
          answer:
            "That depends on your goals. Free is great for getting discovered. Premium adds tools and support to maximize your chances of landing interviews.",
        },
        {
          question: "Can I try Premium for free?",
          answer:
            "Yes! New members get a free profile review. You can also reach out to support to see if you qualify for a trial.",
        },
        {
          question: "Can I upgrade or downgrade anytime?",
          answer:
            "Yes. Upgrade or downgrade your plan anytime. Changes take effect immediately, and we prorate any charges or refunds.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight font-bold mb-6 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Got Questions? We've Got Answers.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Everything you need to know about ShortlistOn.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 1000 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <Card
                        key={faqIndex}
                        className="glass-card overflow-hidden transition-all"
                      >
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : globalIndex)
                          }
                          className="w-full text-left p-6 flex items-start justify-between hover:bg-muted/50 transition-colors"
                        >
                          <h3 className="font-bold text-lg flex-1 pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="border-t border-border px-6 py-4 bg-muted/20">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <Link href="mailto:support@shortliston.com">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop applying into the void. Start getting discovered instead.
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
              Sign Up Now
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
