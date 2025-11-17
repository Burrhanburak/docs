import type { Metadata } from "next/types";
import { InferPageType } from "fumadocs-core/source";
import { source } from "./source";

export function createMetadata(override: Metadata): Metadata {
  const baseUrl = "https://docs.moydus.com";
  const defaultTitle =
    override.title?.toString() ||
    "Moydus Docs – Complete Guide to Web Design, SaaS Development & Automation Services";
  const defaultDescription =
    override.description?.toString() ||
    "Discover Moydus Docs – your comprehensive resource for web development, custom SaaS platforms, automation solutions, panel management, UI/UX design, SEO services, and digital transformation.";

  return {
    ...override,
    metadataBase: new URL(baseUrl),
    title: defaultTitle,
    description: defaultDescription,
    keywords: [
      "Moydus",
      "Moydus Docs",
      "Moydus Documentation",
      "Moydus Agency",
      "Web Design Agency",
      "SaaS Development",
      "Panel Management",
      "Custom Software",
      "Automation Services",
      "Marketing & SEO",
      "Branding UI/UX",
      "Moydus Guide",
      ...(override.keywords ? (Array.isArray(override.keywords) ? override.keywords : [override.keywords]) : []),
    ],
    authors: [{ name: "Moydus" }],
    creator: "Moydus",
    publisher: "Moydus",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: "Moydus Docs",
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: `${baseUrl}/logo/Docs-moydus.png`,
          width: 1200,
          height: 630,
          alt: "Moydus Docs Logo",
        },
      ],
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@moydus",
      site: "@moydus",
      title: defaultTitle,
      description: defaultDescription,
      images: [`${baseUrl}/logo/Docs-moydus.png`],
      ...override.twitter,
    },
    alternates: {
      canonical: baseUrl,
      types: {
        "application/rss+xml": [
          {
            title: "Moydus Blog",
            url: "https://moydus.com/blog/rss.xml",
          },
        ],
      },
      ...override.alternates,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  };
}

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.webp"];

  return {
    segments,
    url: `/og/${segments.join("/")}`,
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development" ||
  !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
