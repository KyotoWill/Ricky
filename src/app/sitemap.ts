import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/office", "/contact", "/career", "/quote", "/en", "/zh-cn"].map((path) => ({ url: `https://www.anantalog.com${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 }));
}
