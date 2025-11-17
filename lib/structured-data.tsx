export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Moydus",
          url: "https://moydus.com",
          logo: "https://docs.moydus.com/logo/Docs-moydus.png",
          sameAs: [
            "https://x.com/moydus",
            "https://instagram.com/moydus",
            "https://facebook.com/moydus",
            "https://linkedin.com/company/moydus",
          ],
        }),
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Moydus Docs",
          url: "https://docs.moydus.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://docs.moydus.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}

export function WebPageSchema({
  url = "https://docs.moydus.com",
  name = "Moydus Docs",
  description = "Full-service documentation for web development, SaaS, automation, SEO, branding, panel management, and custom software.",
}: {
  url?: string;
  name?: string;
  description?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url,
          name,
          description,
          isPartOf: {
            "@type": "WebSite",
            url: "https://docs.moydus.com",
          },
        }),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  );
}

export function AIPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://aipage.org/schema",
          "@type": "AIPage",
          name: "Moydus Docs",
          description:
            "Technical documentation for Moydus covering web development, SaaS, marketing, automation, and software architecture.",
          topics: [
            "Web Development",
            "SaaS",
            "Automation",
            "UI/UX",
            "SEO",
            "Panel Management",
          ],
        }),
      }}
    />
  );
}

