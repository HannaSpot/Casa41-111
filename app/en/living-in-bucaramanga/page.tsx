import type { Metadata } from "next";
import ArticleIndex from "../../article-index";
import { englishArticles } from "../../articles";

export const metadata: Metadata = {
  title: { absolute: "Living in Bucaramanga: Local Guide | Live Bucaramanga" },
  description: "Local guides to living in Bucaramanga and Altos de Cabecera, including food markets, walks, mobility, restaurants and home renovation.",
  alternates: { canonical: "/en/living-in-bucaramanga", languages: { "es-CO": "/vida-en-bucaramanga", en: "/en/living-in-bucaramanga", "x-default": "/vida-en-bucaramanga" } },
  openGraph: { title: "Living in Bucaramanga | Live Bucaramanga", description: "A local guide to Bucaramanga and Altos de Cabecera.", url: "/en/living-in-bucaramanga", siteName: "Live Bucaramanga", locale: "en_US", type: "website" }
};

export default function LivingInBucaramangaPage() {
  return <ArticleIndex lang="en" articles={englishArticles}/>;
}
