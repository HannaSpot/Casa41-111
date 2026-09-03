import type { MetadataRoute } from "next";
import { englishArticles, spanishArticles } from "./articles";
import { siteUrl } from "./site-config";

const base = siteUrl;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-03T00:00:00-05:00");
  return [
    { url: `${base}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en/`, lastModified: updated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/vida-en-bucaramanga/`, lastModified: updated, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/en/living-in-bucaramanga/`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
    ...spanishArticles.map(article => ({ url: `${base}/vida-en-bucaramanga/${article.slug}/`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...englishArticles.map(article => ({ url: `${base}/en/living-in-bucaramanga/${article.slug}/`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
