import { MetadataRoute } from "next";
import { source } from "@/lib/source"; // Fumadocs source
import { baseUrl } from "@/lib/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = source.getPages(); // tüm docs sayfaları otomatik

  const docUrls = docs.map((page) => ({
    url: `${baseUrl}/docs/${page.slugs.join("/")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Ana sayfa
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  return [...staticUrls, ...docUrls];
}
