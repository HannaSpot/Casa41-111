import type { Metadata } from "next";
import ArticleIndex from "../article-index";
import { spanishArticles } from "../articles";

export const metadata: Metadata = {
  title: { absolute: "Vivir en Bucaramanga: guía local | Live Bucaramanga" },
  description: "Guías sobre cómo es vivir en Bucaramanga y Altos de Cabecera: mercados, caminatas, comida, movilidad y renovación de vivienda.",
  alternates: { canonical: "/vida-en-bucaramanga", languages: { "es-CO": "/vida-en-bucaramanga", en: "/en/living-in-bucaramanga", "x-default": "/vida-en-bucaramanga" } },
  openGraph: { title: "Vivir en Bucaramanga | Live Bucaramanga", description: "Una guía local para conocer Bucaramanga y Altos de Cabecera.", url: "/vida-en-bucaramanga", siteName: "Live Bucaramanga", locale: "es_CO", type: "website" }
};

export default function VidaEnBucaramangaPage() {
  return <ArticleIndex lang="es" articles={spanishArticles}/>;
}
