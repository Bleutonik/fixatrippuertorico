import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

const SEOHead = ({
  title,
  description,
  canonicalPath = "",
  ogImage = "https://fixatrippuertorico.com/wp-content/uploads/2026/01/1-3-1.webp",
  ogType = "website",
  jsonLd,
}: SEOHeadProps) => {
  const baseUrl = "https://fixatrippuertorico.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:site_name", "Fix a Trip Puerto Rico", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // JSON-LD
    const existingScript = document.querySelector("script[data-seo-jsonld]");
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector("script[data-seo-jsonld]");
      if (script) script.remove();
    };
  }, [title, description, fullUrl, ogImage, ogType, jsonLd]);

  return null;
};

export default SEOHead;
