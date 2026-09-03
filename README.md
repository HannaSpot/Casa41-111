# Casa 41·111

Website bilingüe para presentar la propiedad Casa 41·111 en Altos de Cabecera, Bucaramanga.

## Contenido

- Página principal en español e inglés.
- Galería de fotografías y recorrido en video.
- Seis artículos en español y seis en inglés.
- Formulario que abre una conversación por WhatsApp.
- Metadatos, sitemap, robots.txt y datos estructurados para SEO.
- Configuración para publicación en Netlify.

## Abrir el proyecto en el computador

Instala Node.js 22. Luego abre una terminal dentro de esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

La website estará disponible en `http://localhost:3000`.

## Publicar desde GitHub en Netlify

1. Sube esta carpeta a un repositorio de GitHub.
2. En Netlify selecciona **Add new site** y luego **Import an existing project**.
3. Conecta el repositorio.
4. Netlify leerá automáticamente `netlify.toml` y publicará la carpeta `out`.
5. En la configuración de variables de Netlify agrega:

   `NEXT_PUBLIC_SITE_URL=https://direccion-definitiva-del-sitio.com`

6. Vuelve a publicar para que los enlaces canónicos, el sitemap y las imágenes compartidas usen la dirección definitiva.

## Cambios importantes antes de publicar

Confirma el precio, el área construida, el área del lote, la cantidad de habitaciones y baños, y la descripción del espacio exterior. La website usa actualmente los datos provisionales acordados durante su preparación.

## Contacto

El formulario y los botones de contacto abren WhatsApp en el número configurado dentro de `app/contact-form.tsx`, `app/page.tsx`, `app/en/page.tsx` y `app/article-layout.tsx`.
