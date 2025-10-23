// lib/seo-config.ts

export const SEO_CONFIG = {
  siteName: "ShortlistOn",
  description: "Job discovery platform connecting candidates with employers",
  domain: "https://shortliston.com",
  socialLinks: {
    instagram: "https://instagram.com/shortlistonai",
    facebook: "https://www.facebook.com/61571011697596",
    linkedin: "https://www.linkedin.com/company/shortliston",
    twitter: "https://twitter.com/shortlistonai",
  },
  contact: {
    email: "support@shortliston.com",
    phone: "+1-XXX-XXX-XXXX",
  },
};

export const PAGE_METADATA = {
  home: {
    title: "ShortlistOn – Get Discovered by Top Employers Today",
    description:
      "Skip endless job applications. ShortlistOn connects you with employers actively seeking talent. Create your free profile and get discovered.",
    keywords: [
      "job discovery",
      "career platform",
      "get hired",
      "employer matching",
      "job search",
      "talent discovery",
    ],
  },
  about: {
    title: "About ShortlistOn – Revolutionizing Job Discovery",
    description:
      "Learn how ShortlistOn is fixing the broken job market. Our mission: connect serious candidates with employers who value talent.",
    keywords: ["about shortliston", "job market", "recruitment revolution"],
  },
  howItWorks: {
    title: "How ShortlistOn Works – Job Discovery in 4 Steps",
    description:
      "Learn how ShortlistOn connects you with employers. Step-by-step guide to getting discovered.",
    keywords: [
      "how shortliston works",
      "job discovery process",
      "create profile",
    ],
  },
  pricing: {
    title: "ShortlistOn Pricing – Free & Premium Plans",
    description:
      "Choose the perfect plan for your job search. Free basic profile or upgrade to Premium.",
    keywords: ["shortliston pricing", "job search pricing", "candidate plans"],
  },
  faq: {
    title: "FAQ – ShortlistOn Help Center",
    description:
      "Find answers to your questions about ShortlistOn features and how to get discovered.",
    keywords: ["faq", "frequently asked questions", "help", "support"],
  },
  signup: {
    title: "Create Your Profile – Join ShortlistOn",
    description:
      "Get discovered by top employers. Create your free profile on ShortlistOn.",
    keywords: ["sign up", "create profile", "job profile", "register"],
  },
};

// Image metadata for Open Graph
export const IMAGE_CONFIG = {
  ogImage: {
    url: "https://shortliston.com/og-shortliston.png",
    width: 1200,
    height: 630,
    type: "image/png",
  },
  logo: {
    url: "https://shortliston.com/logo.png",
    width: 512,
    height: 512,
    type: "image/png",
  },
  favicon: "https://shortliston.com/logo.png",
};

// Structured data helpers
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ShortlistOn",
  url: "https://shortliston.com",
  logo: "https://shortliston.com/logo.png",
  description: "Job discovery platform connecting candidates with employers",
  sameAs: [
    "https://instagram.com/shortlistonai",
    "https://www.facebook.com/61571011697596",
    "https://www.linkedin.com/company/shortliston",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "support@shortliston.com",
  },
};

export const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ShortlistOn",
  description: "Job discovery platform for candidates",
  url: "https://shortliston.com",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
