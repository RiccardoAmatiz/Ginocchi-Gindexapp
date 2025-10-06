import { useEffect, useMemo } from 'react';
import { Ginocchio } from '../types';
import { slugify } from '../utils';

const BASE_URL = 'https://www.ginocchi-ggc.it';
const SITE_NAME = 'GINocchi - Gioco di Gin Collezionabili';
const DEFAULT_DESCRIPTION = 'GINocchi - GGC | Il gioco di gin collezionabili. Un mondo distorto dove il gin tonic è l\'unica arma contro la tirannia dell\'IA. Colleziona, bevi, combatti!';
const DEFAULT_KEYWORDS = 'Ginocchi, GINocchi - GGC, GGC, Gioco di gin collezionabili, Gin collezionabili, Vaffanculo miserabili, gin, distilled gin, gin premium, gin italiano';
const DEFAULT_IMAGE = `${BASE_URL}/images/og_image.png`; // Immagine generica per la condivisione social

interface Metadata {
  title: string;
  description: string;
  keywords: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
}

// Hook principale per aggiornare i metadati su qualsiasi pagina
const usePageMetadata = (metadata: Metadata) => {
  useEffect(() => {
    // --- Tag SEO Standard ---
    document.title = metadata.title;
    
    // Funzione di utilità per impostare il contenuto di un meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    };
    
    // Funzione di utilità per i tag link
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute('href', href);
      }
    };

    setMetaTag('name', 'description', metadata.description);
    setMetaTag('name', 'keywords', metadata.keywords);
    
    // Poiché si tratta di una SPA con HashRouter, l'URL canonico dovrebbe essere pulito
    const canonicalUrl = metadata.og?.url ? metadata.og.url.split('#')[0] : window.location.href.split('#')[0];
    setLinkTag('canonical', canonicalUrl);

    // --- Open Graph (per Facebook, WhatsApp, ecc.) ---
    setMetaTag('property', 'og:title', metadata.og?.title || metadata.title);
    setMetaTag('property', 'og:description', metadata.og?.description || metadata.description);
    setMetaTag('property', 'og:url', metadata.og?.url || window.location.href);
    setMetaTag('property', 'og:image', metadata.og?.image || DEFAULT_IMAGE);
    setMetaTag('property', 'og:site_name', 'GINocchi');
    setMetaTag('property', 'og:type', 'website');

    // --- Twitter Card ---
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', metadata.og?.title || metadata.title);
    setMetaTag('name', 'twitter:description', metadata.og?.description || metadata.description);
    setMetaTag('name', 'twitter:image', metadata.og?.image || DEFAULT_IMAGE);

  }, [metadata]);
};

// Hook specializzato per la pagina di dettaglio del Ginocchio per metadati dinamici
export const useGinocchioMetadata = (ginocchio: Ginocchio | undefined, description: string | undefined) => {
    const metadata = useMemo(() => {
        if (!ginocchio || !description) {
            return {
                title: SITE_NAME,
                description: DEFAULT_DESCRIPTION,
                keywords: DEFAULT_KEYWORDS,
                og: {
                    url: BASE_URL,
                    image: DEFAULT_IMAGE,
                }
            };
        }

        const pageTitle = `${ginocchio.nome} | ${SITE_NAME}`;
        const ginocchioSlug = `${slugify(ginocchio.nome)}-${ginocchio.id}`;

        return {
            title: pageTitle,
            description: `Scheda di ${ginocchio.nome}, Ginocchio di tipo ${ginocchio.categoria}. Scopri attacchi, PV e la sua storia nel gioco da tavolo GINocchi.`,
            keywords: `${ginocchio.nome}, ${ginocchio.categoria}, GINocchi - GGC, Gin collezionabili, ${DEFAULT_KEYWORDS}`,
            og: {
                title: pageTitle,
                description: `Scopri ${ginocchio.nome}, il Ginocchio di tipo ${ginocchio.categoria} del gioco da tavolo GINocchi.`,
                image: `${BASE_URL}${ginocchio.immagine}`,
                url: `${BASE_URL}/#/personaggi/${ginocchioSlug}`,
            },
        };
    }, [ginocchio, description]);

    usePageMetadata(metadata);
};

export default usePageMetadata;
