import type { MetadataRoute } from "next";
import { siteContact } from "@/lib/site-contact";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/neighborhoods/lone-mountain", changeFrequency: "monthly", priority: 0.75 },
  { path: "/amenities", changeFrequency: "monthly", priority: 0.78 },
  { path: "/area-map", changeFrequency: "monthly", priority: 0.72 },
  { path: "/schools/lone-mountain", changeFrequency: "monthly", priority: 0.68 },
  { path: "/zip-codes/89129", changeFrequency: "weekly", priority: 0.8 },
  { path: "/open-houses", changeFrequency: "weekly", priority: 0.72 },
  { path: "/area-photography", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "weekly", priority: 0.7 },
  { path: "/search", changeFrequency: "daily", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
