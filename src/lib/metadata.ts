import type { Metadata } from "next";
import { defaultOgImagePath } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

/**
 * Set `GOOGLE_SITE_VERIFICATION` in Vercel (or `.env.local`) to the content value
 * Google Search Console shows for the HTML tag method (not the full tag).
 */
export function rootMetadata(): Metadata {
  const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const ogImageUrl = new URL(defaultOgImagePath, siteContact.siteUrl).toString();

  return {
    metadataBase: new URL(siteContact.siteUrl),
    robots: { index: true, follow: true },
    title: {
      default: `${siteContact.siteName} | Lone Mountain Las Vegas 89129`,
      template: `%s | ${siteContact.siteName}`,
    },
    description: `Lone Mountain & 89129 homes for sale, open houses, and northwest Las Vegas buyer guidance with ${siteContact.businessName}. Call ${siteContact.phoneDisplay}.`,
    ...(googleSiteVerification
      ? { verification: { google: googleSiteVerification } }
      : {}),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteContact.siteUrl,
      siteName: siteContact.siteName,
      title: `${siteContact.siteName} | Lone Mountain Las Vegas 89129`,
      description: `Hyperlocal focus on Lone Mountain, the 215 beltway, and Skye Canyon / Centennial Hills access—search homes and open houses in northwest Las Vegas with ${siteContact.businessName}.`,
      images: [
        {
          url: ogImageUrl,
          alt: "Lone Mountain and northwest Las Vegas neighborhood context",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteContact.siteName} | Lone Mountain 89129`,
      description: `Homes and open houses around Lone Mountain and northwest Las Vegas. ${siteContact.businessName}.`,
      images: [ogImageUrl],
    },
  };
}
