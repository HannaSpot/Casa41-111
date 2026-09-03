import Link from "next/link";
import type { Article } from "./articles";

export default function ArticleIndex({ lang, articles }: { lang: "es" | "en"; articles: Article[] }) {
  const isSpanish = lang === "es";
  return <main className="articleIndexPage" lang={lang}>
    <header className="articleNav shell">
      <Link className="brand" href={isSpanish ? "/" : "/en"}>Live Bucaramanga</Link>
      <nav aria-label={isSpanish ? "Navegación principal" : "Main navigation"}>
        <Link href={isSpanish ? "/" : "/en"}>{isSpanish ? "La casa" : "The house"}</Link>
        <Link className="langSwitch" href={isSpanish ? "/en/living-in-bucaramanga" : "/vida-en-bucaramanga"}>{isSpanish ? "EN" : "ES"}</Link>
        <Link className="navCta" href={isSpanish ? "/#contacto" : "/en/#contact"}>{isSpanish ? "Conversemos" : "Contact"}</Link>
      </nav>
    </header>
    <section className="articleIndexHero"><div className="shell"><p className="eyebrow">{isSpanish ? "Guía local" : "A local guide"}</p><h1>{isSpanish ? "Vida en Bucaramanga" : "Living in Bucaramanga"}</h1><p>{isSpanish ? "Historias y guías prácticas sobre Altos de Cabecera, mercados, caminatas, comida y la experiencia cotidiana de vivir en la ciudad." : "Practical guides to Altos de Cabecera, food markets, walking routes, local food and everyday life in the city."}</p></div></section>
    <section className="shell articleCards">
      {articles.map((article, index) => <article className="articleCard" key={article.slug}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <p className="eyebrow">{article.category}</p>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <Link href={`${isSpanish ? "/vida-en-bucaramanga" : "/en/living-in-bucaramanga"}/${article.slug}`}>{isSpanish ? "Leer artículo" : "Read article"}</Link>
      </article>)}
    </section>
    <section className="indexPropertyCta"><div className="shell"><p className="eyebrow">Casa 41·111</p><h2>{isSpanish ? "Una casa amplia para vivirla, renovarla o imaginar un nuevo proyecto." : "A spacious home to live in, renovate or shape into a new project."}</h2><Link className="button primary" href={isSpanish ? "/" : "/en"}>{isSpanish ? "Conocer la propiedad" : "View the property"}</Link></div></section>
    <footer className="shell"><span>Live Bucaramanga · Casa 41·111</span><span>{isSpanish ? "Altos de Cabecera · Bucaramanga" : "Altos de Cabecera · Bucaramanga"}</span></footer>
  </main>;
}
