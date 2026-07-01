import type { MetadataRoute } from "next";
import { siteContact } from "@/lib/site-contact";

export default function robots(): MetadataRoute.Robots {
  const base = siteContact.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/visit-api", "/message/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, ""),
  };
}
