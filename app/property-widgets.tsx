"use client";

import { useEffect, useState } from "react";

const ASKING_PRICE_COP = 1_800_000_000;
const currencies = ["USD", "EUR", "CHF", "GBP", "CAD"] as const;
type Currency = (typeof currencies)[number];

const weatherLabels: Record<number, { es: string; en: string; icon: string }> = {
  0: { es: "Despejado", en: "Clear", icon: "☀" },
  1: { es: "Mayormente despejado", en: "Mostly clear", icon: "🌤" },
  2: { es: "Parcialmente nublado", en: "Partly cloudy", icon: "⛅" },
  3: { es: "Nublado", en: "Overcast", icon: "☁" },
  45: { es: "Neblina", en: "Fog", icon: "🌫" },
  48: { es: "Neblina", en: "Fog", icon: "🌫" },
  51: { es: "Llovizna", en: "Drizzle", icon: "🌦" },
  53: { es: "Llovizna", en: "Drizzle", icon: "🌦" },
  55: { es: "Llovizna", en: "Drizzle", icon: "🌦" },
  61: { es: "Lluvia ligera", en: "Light rain", icon: "🌧" },
  63: { es: "Lluvia", en: "Rain", icon: "🌧" },
  65: { es: "Lluvia fuerte", en: "Heavy rain", icon: "🌧" },
  80: { es: "Lluvias aisladas", en: "Rain showers", icon: "🌦" },
  81: { es: "Lluvias", en: "Rain showers", icon: "🌧" },
  82: { es: "Lluvias fuertes", en: "Heavy showers", icon: "⛈" },
  95: { es: "Tormenta", en: "Thunderstorm", icon: "⛈" },
};

export default function PropertyWidgets({ lang = "es" }: { lang?: "es" | "en" }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [rates, setRates] = useState<Partial<Record<Currency, number>>>({});
  const [weather, setWeather] = useState<{ temperature: number; apparent: number; code: number } | null>(null);

  useEffect(() => {
    fetch("https://api.frankfurter.dev/v2/rates?base=COP&quotes=USD,EUR,CHF,GBP,CAD")
      .then(response => response.ok ? response.json() : Promise.reject())
      .then((data: Array<{ quote: Currency; rate: number }>) => {
        setRates(Object.fromEntries(data.map(item => [item.quote, item.rate])));
      })
      .catch(() => setRates({}));

    fetch("https://api.open-meteo.com/v1/forecast?latitude=7.1254&longitude=-73.1198&current=temperature_2m,apparent_temperature,weather_code&timezone=America%2FBogota")
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => setWeather({
        temperature: Math.round(data.current.temperature_2m),
        apparent: Math.round(data.current.apparent_temperature),
        code: data.current.weather_code,
      }))
      .catch(() => setWeather(null));
  }, []);

  const converted = rates[currency] ? ASKING_PRICE_COP * rates[currency]! : null;
  const condition = weather ? weatherLabels[weather.code] ?? { es: "Condiciones actuales", en: "Current conditions", icon: "🌤" } : null;
  const locale = lang === "es" ? "es-CO" : "en-US";

  return <section className="propertyWidgets" aria-label={lang === "es" ? "Conversor de moneda y clima" : "Currency converter and weather"}>
    <div className="shell propertyWidgetsGrid">
      <div className="compactWidget currencyWidget">
        <div className="widgetIcon" aria-hidden="true">$</div>
        <div className="widgetBody">
          <span>{lang === "es" ? "Precio convertido" : "Converted price"}</span>
          <strong>{converted ? new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(converted) : (lang === "es" ? "Consultando tasa…" : "Loading rate…")}</strong>
          <small>{lang === "es" ? "Referencia para COP $1.800 millones" : "Reference for COP $1.8 billion"}</small>
        </div>
        <label>
          <span className="srOnly">{lang === "es" ? "Moneda" : "Currency"}</span>
          <select value={currency} onChange={event => setCurrency(event.target.value as Currency)}>
            {currencies.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="compactWidget weatherWidget">
        <div className="widgetIcon weatherIcon" aria-hidden="true">{condition?.icon ?? "◌"}</div>
        <div className="widgetBody">
          <span>{lang === "es" ? "Ahora en Bucaramanga" : "Bucaramanga now"}</span>
          <strong>{weather ? `${weather.temperature} °C` : (lang === "es" ? "Consultando clima…" : "Loading weather…")}</strong>
          <small>{weather && condition ? `${condition[lang]} · ${lang === "es" ? "Sensación" : "Feels like"} ${weather.apparent} °C` : (lang === "es" ? "Datos meteorológicos actuales" : "Current weather data")}</small>
        </div>
      </div>
    </div>
    <p className="widgetNote shell">{lang === "es" ? "Valores orientativos. El precio de venta se fija en COP." : "Indicative values. The asking price is set in COP."}</p>
  </section>;
}
