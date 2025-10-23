import type React from "react";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

// Direct favicon link for explicit loading
import { Fragment } from "react";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shortliston.com"),
  title: "ShortlistOn – Get Seen by Top Employers | Job Discovery Platform",
  description:
    "ShortlistOn connects serious candidates with employers seeking top talent. Skip endless applications and get discovered by hiring managers. Free job discovery platform.",
  keywords: [
    "job search platform",
    "career platform",
    "talent discovery",
    "employer matching",
    "job opportunities",
    "career opportunities",
    "recruitment platform",
    "candidate discovery",
    "get hired",
    "job discovery",
    "employment",
    "careers",
    "hiring platform",
  ],
  authors: [{ name: "ShortlistOn Team", url: "https://shortliston.com" }],
  creator: "ShortlistOn",
  publisher: "ShortlistOn",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    url: "https://shortliston.com/",
    siteName: "ShortlistOn",
    title: "Get Discovered by Top Employers – ShortlistOn",
    description:
      "The job discovery platform that connects serious candidates with employers actively seeking talent. Free profile creation, real opportunities.",
    images: [
      {
        url: "/og-shortliston.png",
        width: 1200,
        height: 630,
        alt: "ShortlistOn – Get Seen by Top Employers",
        type: "image/png",
      },
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ShortlistOn Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Discovered by Top Employers – ShortlistOn",
    description:
      "ShortlistOn: Skip the application loop. Get discovered by employers seeking your skills.",
    images: ["/og-shortliston.png"],
    creator: "@shortlistonai",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://shortliston.com/",
  },
  category: "Employment",
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#2d5ee9",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${montserrat.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
            },
            error: {
              duration: 4000,
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
