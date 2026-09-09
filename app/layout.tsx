import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./google-analytics";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Casa en venta en Bucaramanga, Colombia | 540 m²",
    template: "%s | Live Bucaramanga",
  },
  description: "Casa en venta en Bucaramanga, Colombia, directamente por sus propietarios: 540 m², 7 habitaciones, 5 baños, patios, terraza y local arrendado.",
  alternates: {
    canonical: "/",
    languages: { "es-CO": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Casa en venta en Bucaramanga, Colombia | 540 m²",
    description: "Venta directa: 7 habitaciones, 5 baños, patios, terraza y local arrendado en Altos de Cabecera.",
    url: "/",
    siteName: "Live Bucaramanga",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/casa/compartir-fachada.jpg", width: 1200, height: 630, alt: "Fachada de Casa 41-111 en Altos de Cabecera", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa en venta en Bucaramanga, Colombia | 540 m²",
    description: "Casa amplia en venta directa por sus propietarios en Altos de Cabecera.",
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
