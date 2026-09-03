"use client";

import type { MouseEvent } from "react";

export default function ContactNavLink({ lang = "es" }: { lang?: "es" | "en" }) {
  const targetId = lang === "es" ? "contacto" : "contact";
  const href = lang === "es" ? "/#contacto" : "/en/#contact";

  function goToContact(event: MouseEvent<HTMLAnchorElement>) {
    const contactSection = document.getElementById(targetId);
    if (!contactSection) return;

    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  }

  return <a className="navCta" href={href} onClick={goToContact}>
    {lang === "es" ? "Conversemos" : "Contact"}
  </a>;
}
