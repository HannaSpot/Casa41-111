"use client";

// Seguimiento de conversiones GA4.
// Reglas: respeta el consentimiento de cookies, evita eventos duplicados y
// NUNCA envía datos personales (nombres, teléfonos, correos ni mensajes).

const CONSENT_KEY = "livebucaramanga-analytics-consent";
const DEDUPE_WINDOW_MS = 1200;

// Guarda el último instante en que se disparó cada evento+ubicación para
// evitar conteos duplicados por doble clic, burbujeo o doble render en dev.
const lastFired = new Map<string, number>();

type PageLanguage = "es" | "en";

function hasAnalyticsConsent(): boolean {
  try {
    return (
      typeof window !== "undefined" &&
      window.localStorage.getItem(CONSENT_KEY) === "accepted"
    );
  } catch {
    return false;
  }
}

function fire(name: string, params: Record<string, string>): void {
  // 5) No enviar nada si el visitante no aceptó Analytics.
  if (!hasAnalyticsConsent()) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  // 4) Evitar eventos duplicados dentro de una ventana corta.
  const key = `${name}:${params.location ?? ""}`;
  const now = Date.now();
  const previous = lastFired.get(key);
  if (previous !== undefined && now - previous < DEDUPE_WINDOW_MS) return;
  lastFired.set(key, now);

  window.gtag("event", name, params);
}

// 1) Envío del formulario que abre WhatsApp.
// lead_interest es una categoría fija del formulario (no es dato personal).
export function trackGenerateLead(input: {
  location: string;
  leadInterest?: string;
  pageLanguage: PageLanguage;
}): void {
  fire("generate_lead", {
    method: "whatsapp",
    location: input.location,
    page_language: input.pageLanguage,
    ...(input.leadInterest ? { lead_interest: input.leadInterest } : {}),
  });
}

// 2) Clics en botones de WhatsApp, con su ubicación en la página.
export function trackWhatsAppClick(location: string, pageLanguage: PageLanguage): void {
  fire("whatsapp_click", { location, page_language: pageLanguage });
}

// 3) Clics en "Conversemos" / "Contact".
export function trackContactClick(location: string, pageLanguage: PageLanguage): void {
  fire("contact_click", { location, page_language: pageLanguage });
}
