import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Casa en venta en Altos de Cabecera, Bucaramanga | Casa 41·111",
    template: "%s | Casa 41·111",
  },
  description: "Casa familiar amplia en venta directa en Altos de Cabecera, Bucaramanga: 7 habitaciones, 6 baños y posibilidades de renovación.",
  alternates: {
    canonical: "/",
    languages: { "es-CO": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Casa 41·111 | Casa en venta en Altos de Cabecera",
    description: "Una casa familiar amplia para vivirla, renovarla o imaginar un nuevo proyecto en Bucaramanga.",
    url: "/",
    siteName: "Casa 41·111",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/casa/fachada-atardecer.webp", width: 1600, height: 1067, alt: "Fachada de Casa 41-111 en Altos de Cabecera" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa 41·111 | Altos de Cabecera, Bucaramanga",
    description: "Casa familiar amplia en venta directa por sus propietarios.",
    images: ["/casa/fachada-atardecer.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className="antialiased">{children}</body>
    </html>
  );
}
