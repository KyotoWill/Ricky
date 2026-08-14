import { originalPageSlugs } from "@/lib/original-page";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPaths = [
    "",
    "/en",
    "/zh-cn",
    ...originalPageSlugs.flatMap((slug) => [`/${slug}`, `/en/${slug}`, `/zh-cn/${slug}`]),
  ];

  return localizedPaths.map((pathname) => ({
    url: `https://www.anantalog.com${pathname}`,
    changeFrequency: "monthly" as const,
    priority: pathname === "" ? 1 : 0.8,
  }));
}
