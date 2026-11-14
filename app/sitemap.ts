import type { MetadataRoute } from "next";

import { newsArticleSlugs } from "@/lib/news/articles";

const siteUrl = "https://ajoracle.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/news",
    "/releases",
    "/videos",
  ];

  return [
    ...staticRoutes.map((path) => ({ url: `${siteUrl}${path}` })),
    ...newsArticleSlugs.map((slug) => ({
      url: `${siteUrl}/news/${slug}`,
    })),
  ];
}
