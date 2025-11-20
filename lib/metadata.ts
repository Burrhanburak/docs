import type { Metadata } from "next/types";
import { InferPageType } from "fumadocs-core/source";
import { source } from "./source";

export const baseUrl = "https://docs.moydus.com";

export function createMetadata(override: Metadata): Metadata {

  const defaultTitle =
    override.title?.toString() ||
    "Moydus Docs – Complete Guide to Web Design, SaaS Development & Automation Services";

  const defaultDescription =
    override.description?.toString() ||
    "Discover Moydus Docs – your comprehensive resource for web development, SaaS platforms, automation solutions, panel management, UI/UX, SEO and digital transformation.";

  return {
    ...override,
    metadataBase: new URL(baseUrl),
    title: defaultTitle,
    description: defaultDescription,
    keywords: [
      "Moydus",
      "Moydus Docs",
      "Web Design",
      "SaaS Development",
      "Automation",
      "UI/UX",
      "SEO",
      ...(override.keywords
        ? Array.isArray(override.keywords)
          ? override.keywords
          : [override.keywords]
        : []),
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
      ...override.alternates,
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
