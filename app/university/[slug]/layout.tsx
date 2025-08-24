import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { universityData, type UniversityKey } from "@/lib/universities";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug as UniversityKey;
  const uni = universityData[slug];
  if (!uni) {
    return { title: "University not found – ShortlistOn", robots: { index: false, follow: false } };
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://shortliston.com";
  const title = `${uni.name} – Priority Signup | ShortlistOn`;
  const description = `Priority access for ${uni.name} students via the ShortlistOn partnership. Build your profile and get discovered by employers.`;
  const ogImage = `/og/${slug}.png`; // put per-university images in /public/og/<slug>.jpg

  return {
    metadataBase: new URL(base),
    title,
    description,
    alternates: { canonical: `/${slug}` },
    themeColor: uni.primaryColor,
    openGraph: {
      type: "website",
      url: `/${slug}`,
      siteName: "ShortlistOn",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  // You can wrap in a section/div, add shared styles, etc.
  return <>{children}</>;
}

// (Optional) speed up builds by only generating known slugs
export function generateStaticParams() {
  return Object.keys(universityData).map((slug) => ({ slug }));
}
