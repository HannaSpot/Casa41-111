import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./google-analytics";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Casa en venta en Altos de Cabecera | Live Bucaramanga",
    template: "%s | Live Bucaramanga",
  },
  description: "Casa familiar amplia en venta directa en Altos de Cabecera, Bucaramanga: 7 habitaciones, 5 baños y posibilidades de renovación.",
  alternates: {
    canonical: "/",
    languages: { "es-CO": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Casa en venta en Altos de Cabecera | Live Bucaramanga",
    description: "Una casa familiar amplia para vivirla, renovarla o imaginar un nuevo proyecto en Bucaramanga.",
    url: "/",
    siteName: "Live Bucaramanga",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/casa/compartir-fachada.jpg", width: 1200, height: 630, alt: "Fachada de Casa 41-111 en Altos de Cabecera", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa en venta en Bucaramanga | Live Bucaramanga",
    description: "Casa familiar amplia en venta directa por sus propietarios.",
    images: ["/casa/compartir-fachada.jpg"],
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
      <body className="antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
