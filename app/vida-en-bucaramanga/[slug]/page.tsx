import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../article-layout";
import { getArticle, spanishArticles } from "../../articles";

export function generateStaticParams() {
  return spanishArticles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("es", slug);
  if (!article) return {};
  const path = `/vida-en-bucaramanga/${article.slug}`;
  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: path, languages: { "es-CO": path, en: `/en/living-in-bucaramanga/${article.alternateSlug}`, "x-default": path } },
    openGraph: { title: article.title, description: article.description, url: path, siteName: "Live Bucaramanga", locale: "es_CO", type: "article", images: article.heroImage ? [{ url: article.heroImage, alt: article.heroAlt }] : undefined },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: article.heroImage ? [article.heroImage] : undefined }
  };
}

export default async function SpanishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle("es", slug);
  if (!article) notFound();
  return <ArticleLayout article={article}/>;
}
