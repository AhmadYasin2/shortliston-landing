// components/meta-tags.tsx
import { Metadata } from "next";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCreator?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical = "https://shortliston.com",
  ogImage = "https://shortliston.com/og-shortliston.png",
  ogType = "website",
  twitterCreator = "@shortlistonai",
  noindex = false,
}: MetaTagsProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical,
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
    openGraph: {
      title,
      description,
      url: canonical,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: twitterCreator,
    },
  };
}
