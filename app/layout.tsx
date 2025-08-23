import type React from "react";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
  title: "ShortlistOn – Get Seen by Employers",
  description:
    "Skip the endless apply-wait-ghost loop. ShortlistOn helps serious candidates get noticed by employers.",
  openGraph: {
    type: "website",
    url: "https://shortliston.com/",
    siteName: "ShortlistOn",
    title: "Get Seen by Employers – ShortlistOn",
    description:
      "Skip the endless apply-wait-ghost loop. ShortlistOn helps serious candidates get noticed by employers.",
    images: [
      {
        url: "/og-shortliston.png", // relative is fine because metadataBase makes it absolute
        width: 1200,
        height: 630,
        alt: "ShortlistOn – Get Seen by Employers",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Seen by Employers – ShortlistOn",
    description:
      "Skip the endless apply-wait-ghost loop. ShortlistOn helps serious candidates get noticed by employers.",
    images: ["/og-shortliston.png"],
  },
  robots: { index: true, follow: true },
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
      <body>{children}</body>
    </html>
  );
}
