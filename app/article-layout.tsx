import Link from "next/link";
import type { Article } from "./articles";
import { siteUrl } from "./site-config";

export default function ArticleLayout({ article }: { article: Article }) {
  const isSpanish = article.lang === "es";
  const indexHref = isSpanish ? "/vida-en-bucaramanga" : "/en/living-in-bucaramanga";
  const alternateHref = isSpanish
    ? `/en/living-in-bucaramanga/${article.alternateSlug}`
    : `/vida-en-bucaramanga/${article.alternateSlug}`;
  const canonicalPath = `${indexHref}/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${siteUrl}${canonicalPath}#article`,
        url: `${siteUrl}${canonicalPath}`,
        headline: article.title,
        description: article.description,
        inLanguage: isSpanish ? "es-CO" : "en",
        datePublished: "2026-09-01",
        dateModified: "2026-09-03",
        author: { "@type": "Person", name: "Familia propietaria de Casa 41·111" },
        publisher: { "@type": "Organization", name: "Live Bucaramanga", url: siteUrl },
        mainEntityOfPage: `${siteUrl}${canonicalPath}`,
        image: article.heroImage ? `${siteUrl}${article.heroImage}` : `${siteUrl}/casa/fachada-cielo-azul.webp`
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Live Bucaramanga", item: `${siteUrl}${isSpanish ? "/" : "/en"}` },
          { "@type": "ListItem", position: 2, name: isSpanish ? "Vida en Bucaramanga" : "Living in Bucaramanga", item: `${siteUrl}${indexHref}` },
          { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}${canonicalPath}` }
        ]
      }
    ]
  };

  return <main className="articlePage" lang={article.lang}>
    <header className="articleNav shell">
      <Link className="brand" href={isSpanish ? "/" : "/en"}>Live Bucaramanga</Link>
      <nav aria-label={isSpanish ? "Navegación del artículo" : "Article navigation"}>
        <Link href={indexHref}>{isSpanish ? "Vida en Bucaramanga" : "Living in Bucaramanga"}</Link>
        <Link className="langSwitch" href={alternateHref}>{isSpanish ? "EN" : "ES"}</Link>
        <Link className="navCta" href={isSpanish ? "/#contacto" : "/en/#contact"}>{isSpanish ? "Conversemos" : "Contact"}</Link>
      </nav>
    </header>

    <article>
      <header className="articleHero">
        <div className="shell articleHeroInner">
          <div>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="articleIntro">{article.intro}</p>
            <div className="articleMeta"><span>{isSpanish ? "Actualizado el 1 de septiembre de 2026" : "Updated September 1, 2026"}</span><span>{article.readingTime}</span></div>
          </div>
          {article.heroImage && <figure className="articleHeroImage"><img src={article.heroImage} alt={article.heroAlt || ""} loading="eager" fetchPriority="high" decoding="async"/></figure>}
        </div>
      </header>

      <div className="shell articleBody">
        <div className="articleContent">
          {article.sections.map(section => <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
          </section>)}

          {article.sources.length > 0 && <section className="articleSources">
            <h2>{isSpanish ? "Fuentes consultadas" : "Sources"}</h2>
            <ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
          </section>}
        </div>

        <aside className="articleAside">
          <p className="eyebrow">{isSpanish ? "Casa 41·111" : "Casa 41·111"}</p>
          <h2>{isSpanish ? "Conoce la propiedad en Altos de Cabecera." : "See the property in Altos de Cabecera."}</h2>
          <p>{isSpanish ? "Una casa familiar amplia, en venta directa por sus propietarios." : "A spacious family home offered directly by its owners."}</p>
          <Link className="button primary" href={isSpanish ? "/#espacios" : "/en/#spaces"}>{isSpanish ? "Ver la casa" : "View the house"}</Link>
          <Link className="asideWhatsapp" href={`https://wa.me/573126084753?text=${encodeURIComponent(isSpanish ? "Hola, quisiera información sobre la Casa 41-111" : "Hello, I would like information about Casa 41-111")}`} target="_blank">WhatsApp</Link>
        </aside>
      </div>
    </article>

    <section className="articleNext"><div className="shell"><p className="eyebrow">{isSpanish ? "Sigue explorando" : "Keep exploring"}</p><h2>{isSpanish ? "Conoce Bucaramanga desde la vida cotidiana." : "Discover Bucaramanga through everyday life."}</h2><Link className="button outline" href={indexHref}>{isSpanish ? "Ver todos los artículos" : "View all articles"}</Link></div></section>
    <footer className="shell"><span>Live Bucaramanga · Casa 41·111</span><span>{isSpanish ? "Venta directa por sus propietarios · Bucaramanga" : "For sale directly by its owners · Bucaramanga"}</span></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main>;
}
