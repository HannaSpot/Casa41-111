import type { Metadata } from "next";
import ArticleIndex from "../article-index";
import { spanishArticles } from "../articles";

export const metadata: Metadata = {
  title: "Vida en Bucaramanga | Guía local de Casa 41·111",
  description: "Guías sobre cómo es vivir en Bucaramanga y Altos de Cabecera: mercados, caminatas, comida, movilidad y renovación de vivienda.",
  alternates: { canonical: "/vida-en-bucaramanga", languages: { "es-CO": "/vida-en-bucaramanga", en: "/en/living-in-bucaramanga" } },
  openGraph: { title: "Vida en Bucaramanga | Casa 41·111", description: "Una guía local para conocer Bucaramanga y Altos de Cabecera.", url: "/vida-en-bucaramanga", locale: "es_CO", type: "website" }
};

export default function VidaEnBucaramangaPage() {
  return <ArticleIndex lang="es" articles={spanishArticles}/>;
}
