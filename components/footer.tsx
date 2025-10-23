"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  S
                </span>
              </div>
              <span className="font-bold text-xl font-lexend">
                ShortlistOn.
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Connecting serious candidates with employers who actually want to
              hire.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:support@shortliston.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/shortlistonai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/61571011697596"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/shortliston"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold font-serif mb-4">Product</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-primary-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-serif mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} ShortlistOn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
