import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../../article-layout";
import { englishArticles, getArticle } from "../../../articles";

export function generateStaticParams() {
  return englishArticles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("en", slug);
  if (!article) return {};
  const path = `/en/living-in-bucaramanga/${article.slug}`;
  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: path, languages: { "es-CO": `/vida-en-bucaramanga/${article.alternateSlug}`, en: path, "x-default": `/vida-en-bucaramanga/${article.alternateSlug}` } },
    openGraph: { title: article.title, description: article.description, url: path, siteName: "Live Bucaramanga", locale: "en_US", type: "article", images: article.heroImage ? [{ url: article.heroImage, alt: article.heroAlt }] : undefined },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: article.heroImage ? [article.heroImage] : undefined }
  };
}

export default async function EnglishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle("en", slug);
  if (!article) notFound();
  return <ArticleLayout article={article}/>;
}
