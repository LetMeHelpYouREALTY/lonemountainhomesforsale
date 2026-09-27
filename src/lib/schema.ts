import type { CuratedNearbyPlace } from "@/lib/curated-nearby-places";
import { loneMountainPeakGeo } from "@/lib/lone-mountain-local";
import { siteContact } from "@/lib/site-contact";

const agentId = `${siteContact.siteUrl}/#agent`;

/**
 * Default OG / Twitter / agent schema image. Must resolve in production (same file as gallery index).
 * Rich Results Test: confirm https://www.lonemountainhomesforsale.com/assets/photo_001.jpg returns 200.
 */
export const defaultOgImagePath = "/assets/photo_001.jpg";

export function websiteJsonLd(): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: `${siteContact.siteName} | Lone Mountain Las Vegas 89129`,
    url: base,
    description:
      "Homes for sale, open houses, and neighborhood context focused on Lone Mountain and ZIP 89129 in northwest Las Vegas.",
    publisher: { "@id": `${base}/#agent` },
    inLanguage: "en-US",
    about: {
      "@type": "Place",
      name: "Lone Mountain, Las Vegas, NV 89129",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89129",
        addressCountry: "US",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function realEstateAgentJsonLd(): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": agentId,
    name: siteContact.businessName,
    url: siteContact.siteUrl,
    telephone: siteContact.phoneE164,
    email: siteContact.email,
    image: `${base}${defaultOgImagePath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContact.streetAddress,
      addressLocality: siteContact.addressLocality,
      addressRegion: siteContact.addressRegion,
      postalCode: siteContact.postalCode,
      addressCountry: siteContact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteContact.geo.latitude,
      longitude: siteContact.geo.longitude,
    },
    areaServed: [
      { "@type": "Place", name: siteContact.primaryArea },
      {
        "@type": "Place",
        name: "Lone Mountain, Las Vegas, NV 89129",
        geo: {
          "@type": "GeoCoordinates",
          latitude: loneMountainPeakGeo.latitude,
          longitude: loneMountainPeakGeo.longitude,
        },
      },
      { "@type": "City", name: "Las Vegas" },
    ],
    worksFor: {
      "@type": "Organization",
      name: siteContact.legalBrokerage,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Nevada real estate license",
      value: siteContact.license,
    },
    openingHoursSpecification: siteContact.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

/** Geo anchor for Lone Mountain butte — supports local Place / AEO citations */
export function loneMountainPlaceJsonLd(): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${base}/#lone-mountain-place`,
    name: "Lone Mountain, Las Vegas, NV 89129",
    description:
      "Northwest Las Vegas neighborhood anchored by the Lone Mountain butte, perimeter trails, and ZIP 89129 residential pockets.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.23833,
      longitude: -115.31639,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89129",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "City",
      name: "Las Vegas",
      addressRegion: "NV",
    },
  };
}

type ServiceOffer = { name: string; description: string; url: string };

export function serviceCatalogJsonLd(services: ServiceOffer[]): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real estate brokerage — Lone Mountain & northwest Las Vegas",
    provider: { "@id": `${base}/#agent` },
    areaServed: {
      "@type": "Place",
      name: siteContact.primaryArea,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lone Mountain real estate services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: s.url.startsWith("http") ? s.url : `${base}${s.url}`,
        },
      })),
    },
  };
}

type ItemListEntry = { name: string; description: string; url?: string };

/** ItemList of verified nearby places with schema.org Place subtypes */
export function verifiedNearbyPlacesItemListJsonLd(
  places: CuratedNearbyPlace[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured amenities near Lone Mountain, Las Vegas",
    itemListElement: places.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address,
          addressLocality: place.locality,
          addressRegion: place.region,
          postalCode: place.postalCode,
          addressCountry: "US",
        },
        ...(place.geo
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: place.geo.latitude,
                longitude: place.geo.longitude,
              },
            }
          : {}),
      },
    })),
  };
}

export function itemListJsonLd(name: string, items: ItemListEntry[]): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      ...(item.url ? { url: item.url.startsWith("http") ? item.url : `${base}${item.url}` } : {}),
    })),
  };
}
