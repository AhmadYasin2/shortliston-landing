"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          purpose: formData.subject,
          message: formData.message,
          type: "contact",
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["talk-to-us@shortliston", "support@shortliston.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+962 (077) 932-2179"],
      description: "Sunday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "King Hussein Business Park, Building 15",
        "King Abdullah II Street",
        "Amman, Jordan",
      ],
      description: "Visit us for a coffee meeting",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["Email: 24 hours", "Phone: 2-4 hours"],
      description: "We prioritize quick responses",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl leading-[1.15] md:leading-[1.1] tracking-tight font-bold mb-6 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Have questions? We'd love to hear from you. Get in touch and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground">
                  Reach out to us through any of these channels. We're here to
                  help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={index}
                      className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1 mb-3">
                            {info.details.map((detail, i) => (
                              <p
                                key={i}
                                className="text-foreground font-medium"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: "LinkedIn",
                      url: "https://linkedin.com",
                      icon: "🔗",
                    },
                    { name: "Twitter", url: "https://twitter.com", icon: "𝕏" },
                    {
                      name: "Instagram",
                      url: "https://instagram.com",
                      icon: "📸",
                    },
                    {
                      name: "Facebook",
                      url: "https://facebook.com",
                      icon: "f",
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:from-primary/40 hover:to-secondary/40 transition-all text-lg font-bold"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="glass-card p-8 sticky top-24">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you as
                      soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-base mb-2 block">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-base mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject" className="text-base mb-2 block">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-base mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-base py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center pt-4">
                      We'll never share your email address and will only use it
                      to respond to your inquiry.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
