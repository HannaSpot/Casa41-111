"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const measurementId = "G-4DQWX5SKH1";
const consentKey = "livebucaramanga-analytics-consent";
const consentEvent = "livebucaramanga-consent-change";

type Consent = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const subscribe = (callback: () => void) => {
  window.addEventListener(consentEvent, callback);
  return () => window.removeEventListener(consentEvent, callback);
};

const getConsent = (): Consent => {
  const storedConsent = window.localStorage.getItem(consentKey);
  return storedConsent === "accepted" || storedConsent === "declined"
    ? storedConsent
    : null;
};

const getServerConsent = (): Consent => null;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const english = pathname.startsWith("/en");
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);

  const saveConsent = (choice: Exclude<Consent, null>) => {
    window.localStorage.setItem(consentKey, choice);
    window.gtag?.("consent", "update", {
      analytics_storage: choice === "accepted" ? "granted" : "denied",
    });
    window.dispatchEvent(new Event(consentEvent));
  };

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var analyticsConsent = null;
          try {
            analyticsConsent = window.localStorage.getItem('${consentKey}');
          } catch (error) {}
          gtag('consent', 'default', {
            analytics_storage: analyticsConsent === 'accepted' ? 'granted' : 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>

      {consent === null && (
        <aside className="analyticsConsent" aria-label={english ? "Analytics preferences" : "Preferencias de analítica"}>
          <p>
            {english
              ? "We use analytics cookies to understand visits and improve this website."
              : "Usamos cookies de analítica para entender las visitas y mejorar esta página."}
          </p>
          <div>
            <button type="button" onClick={() => saveConsent("declined")}>
              {english ? "Decline" : "Rechazar"}
            </button>
            <button className="accept" type="button" onClick={() => saveConsent("accepted")}>
              {english ? "Accept" : "Aceptar"}
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
