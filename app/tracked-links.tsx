"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackContactClick, trackWhatsAppClick } from "./analytics-events";

type PageLanguage = "es" | "en";

// Enlace de WhatsApp con seguimiento de clic (evento whatsapp_click).
export function WhatsAppLink({
  href,
  location,
  lang,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  location: string;
  lang: PageLanguage;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(location, lang)}
    >
      {children}
    </a>
  );
}

// Enlace "Conversemos" / "Contact" con seguimiento (evento contact_click).
export function ContactLink({
  href,
  location,
  lang,
  className,
  children,
}: {
  href: string;
  location: string;
  lang: PageLanguage;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link className={className} href={href} onClick={() => trackContactClick(location, lang)}>
      {children}
    </Link>
  );
}
