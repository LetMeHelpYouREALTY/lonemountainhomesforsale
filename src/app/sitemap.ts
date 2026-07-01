import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/lib/sitemap-routes";
import { siteContact } from "@/lib/site-contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return sitemapRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
