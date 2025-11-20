export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Moydus",
      url: "https://moydus.com",
      logo: "https://docs.moydus.com/logo/Docs-moydus.png",
      sameAs: [
        "https://x.com/moydus",
        "https://instagram.com/moydus",
        "https://facebook.com/moydus",
        "https://linkedin.com/company/moydus"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Moydus Docs",
      url: "https://docs.moydus.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://docs.moydus.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: "https://docs.moydus.com",
      name: "Moydus Docs",
      description: "Documentation for web development, SaaS, automation and SEO.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://docs.moydus.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Moydus Docs",
      description: "Technical documentation for Moydus: SaaS, automation, panel management, SEO and development.",
      about: [
        "Web Development",
        "SaaS",
        "Automation",
        "UI/UX",
        "SEO",
        "Panel Management"
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
