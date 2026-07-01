import type { MetadataRoute } from "next";

/** Single source of truth for indexable routes — keep in sync with app router pages. */
export type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
};

export const sitemapRoutes: SitemapRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/open-houses", changeFrequency: "weekly", priority: 0.78 },
  { path: "/zip-codes/89129", changeFrequency: "weekly", priority: 0.8 },
  { path: "/neighborhoods/lone-mountain", changeFrequency: "monthly", priority: 0.75 },
  { path: "/amenities", changeFrequency: "monthly", priority: 0.78 },
  { path: "/area-map", changeFrequency: "monthly", priority: 0.72 },
  { path: "/schools/lone-mountain", changeFrequency: "monthly", priority: 0.68 },
  { path: "/tour", changeFrequency: "weekly", priority: 0.74 },
  { path: "/contact", changeFrequency: "weekly", priority: 0.7 },
  { path: "/search", changeFrequency: "daily", priority: 0.7 },
  { path: "/area-photography", changeFrequency: "monthly", priority: 0.65 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];
