"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "py-2 backdrop-blur-xl bg-background/80 shadow-lg"
          : "py-4 backdrop-blur-sm bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="ShortlistOn Home">
          <span className="font-bold font-lexend text-xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shortlist
            </span>
            <span className="text-foreground">On.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <a
          href="https://search.shortliston.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          aria-label="Search ShortlistOn"
        >
          <Button
            variant="outline"
            size="lg"
            className={`transition-all ${
              isScrolled ? "opacity-80" : "opacity-100"
            }`}
          >
            Register Now
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://search.shortliston.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
