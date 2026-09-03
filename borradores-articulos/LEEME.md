# Borradores de artículos — Casa 41·111

Esta carpeta conserva borradores en formato Markdown que no se publican en la
website. Los artículos activos están integrados en `app/articles.ts`.

## Estructura

- `en/` → artículos en inglés (público expat / internacional)
- `es/` → artículos en español (diáspora / público local)

## Frontmatter

Cada archivo `.md` empieza con un bloque de metadatos entre `---`:

- `title` → título del artículo (aparece en la página y en la pestaña)
- `description` → meta description para SEO (lo que Google muestra)
- `slug` → identificador propuesto para una futura URL (ej. `is-bucaramanga-safe`)
- `lang` → idioma (en / es), útil para hreflang
- `date` → fecha de publicación

## Estado de estos archivos

Los `.md` no generan páginas ni URLs. Se conservan solamente como material de
trabajo para artículos futuros o para comparar versiones.

## Enlaces internos

Dentro de los artículos, los enlaces a la página de la casa apuntan a `/` como
marcador. Cambiar a la ruta real cuando esté definida.

## Pendientes antes de publicar

- Verificar y actualizar TODA cifra de costo de vida, visa o umbral de inversión
  con la fuente oficial más reciente (están marcadas con comentarios <!-- -->).
- No prometer Airbnb / alojamiento hasta tener el concepto de uso del suelo por
  escrito de la alcaldía, específico para el predial.
- Etiquetar cualquier render como "idea de remodelación, no estado actual".
