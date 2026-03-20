import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://rvitalinoadvogados.com.br";
const SITE_NAME = "Rodrigo Vitalino Advogados";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface PageSEOProps {
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function PageSEO({ title, description, ogImage, noIndex, jsonLd }: PageSEOProps) {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const fullTitle = pathname === "/" ? title : `${title} | ${SITE_NAME}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "pt_BR");

    // Twitter
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-page-seo="true"]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-page-seo", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-page-seo="true"]').forEach((s) => s.remove());
    };
  }, [fullTitle, description, canonicalUrl, image, noIndex, jsonLd]);

  return null;
}

// Reusable JSON-LD schemas
export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description: "Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente. Atuação no Brasil e Portugal.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Paulista, 1636 – Conj. 4 – Pavimento 15",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01310-200",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Av. da República, 6 – 1º Esq.",
      addressLocality: "Lisboa",
      addressCountry: "PT",
    },
  ],
  telephone: ["+55 11 97408-3838", "+351 910 385 021"],
  areaServed: ["BR", "PT"],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/rvitalinoadvogados",
    "https://www.linkedin.com/company/rvitalinoadvogados",
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`,
  })),
});
