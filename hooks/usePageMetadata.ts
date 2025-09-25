import { useEffect } from 'react';

const SEO_SCRIPT_ID = 'seo-structured-data';

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    site_name?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const useSeo = (props: SeoProps) => {
  useEffect(() => {
    const { title, description, canonical, keywords, og, twitter, schema } = props;

    // --- Standard Meta Tags ---
    document.title = title;
    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }

    // --- Link Tags ---
    setLink('canonical', canonical);

    // --- Open Graph (Facebook, etc.) ---
    setMeta('og:title', og?.title || title, 'property');
    setMeta('og:description', og?.description || description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', og?.type || 'website', 'property');
    setMeta('og:site_name', og?.site_name || 'GINocchi - GGC', 'property');
    if (og?.image) {
      setMeta('og:image', og.image, 'property');
    }

    // --- Twitter Card ---
    setMeta('twitter:card', twitter?.card || 'summary_large_image');
    setMeta('twitter:title', twitter?.title || title);
    setMeta('twitter:description', twitter?.description || description);
    if (twitter?.image || og?.image) {
        setMeta('twitter:image', twitter?.image || og!.image!);
    }
    
    // --- Structured Data (JSON-LD) ---
    const scriptElement = document.getElementById(SEO_SCRIPT_ID) as HTMLScriptElement | null;
    if (schema) {
      if (scriptElement) {
        scriptElement.textContent = JSON.stringify(schema);
      } else {
        const newScript = document.createElement('script');
        newScript.id = SEO_SCRIPT_ID;
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(schema);
        document.head.appendChild(newScript);
      }
    } else if (scriptElement) {
      // If no schema is provided but the script tag exists, remove it.
      scriptElement.remove();
    }
    
  }, [props]);
};

// Helper function to set or create meta tags
function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attr}='${name}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

// Helper function to set or create link tags
function setLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel='${rel}']`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}
