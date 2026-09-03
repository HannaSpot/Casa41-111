"use client";

import { FormEvent, useState } from "react";

const options = {
  es: ["VIVIR", "RENOVAR", "TU OFICINA", "ALOJAMIENTO BOUTIQUE", "INVERSIÓN", "OTROS"],
  en: ["LIVE HERE", "RENOVATE", "YOUR OFFICE", "BOUTIQUE STAY", "INVESTMENT", "OTHER"],
};

export default function ContactForm({ lang = "es" }: { lang?: "es" | "en" }) {
  const interests = options[lang];
  const [interest, setInterest] = useState(interests[0]);
  const [name, setName] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = lang === "es"
      ? `Hola, soy ${name || "un comprador interesado"}. Me interesa la Casa 41-111 para: ${interest}. Quisiera recibir más información.`
      : `Hello, I am ${name || "an interested buyer"}. I am considering Casa 41-111 for: ${interest}. I would like more information.`;
    window.open(`https://wa.me/573126084753?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <form className="interestForm" onSubmit={submit}>
    <fieldset><legend>{lang === "es" ? "¿Qué te imaginas hacer aquí?" : "What do you imagine doing here?"}</legend><div className="interestOptions">{interests.map(option => <button type="button" className={interest === option ? "selected" : ""} aria-pressed={interest === option} onClick={() => setInterest(option)} key={option}>{option}</button>)}</div></fieldset>
    <label htmlFor={`contact-name-${lang}`}>{lang === "es" ? "Tu nombre" : "Your name"}</label>
    <input id={`contact-name-${lang}`} name="name" value={name} onChange={event => setName(event.target.value)} placeholder={lang === "es" ? "Escribe tu nombre" : "Enter your name"} autoComplete="name"/>
    <button className="formSubmit" type="submit">{lang === "es" ? "Escribir por WhatsApp" : "Write on WhatsApp"}</button>
  </form>;
}
