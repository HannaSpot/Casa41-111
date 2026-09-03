const faqContent = {
  es: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo esencial, antes de visitarla.",
    items: [
      ["¿La venta es directa?", "Sí. La casa se ofrece directamente por la familia propietaria, sin intermediarios."],
      ["¿Dónde está ubicada?", "En la Carrera 40 # 41-111, Altos de Cabecera, Bucaramanga: un sector residencial cercano a Cabecera, la UNAB, parques, comercios y rutas para caminar."],
      ["¿Cuántas habitaciones y baños tiene?", "Tiene siete habitaciones y seis baños en total, incluida una habitación de servicio con baño independiente."],
      ["¿Cuenta con parqueadero privado?", "Actualmente no tiene garaje privado. Frente a la propiedad hay espacio exterior para dos vehículos de tamaño estándar o uno grande, sin obstruir la visibilidad del local."],
      ["¿Qué posibilidades de renovación ofrece?", "Puede renovarse como una vivienda familiar amplia, combinar vivienda y oficina o estudiar un proyecto de alojamiento boutique. Cualquier cambio de uso o ampliación debe validarse mediante estudios técnicos y los permisos correspondientes."],
      ["¿Cómo puedo solicitar una visita?", "Selecciona en el formulario el uso que imaginas, escribe tu nombre y toca “Escribir por WhatsApp”. Conversarás directamente con la familia propietaria."],
    ],
  },
  en: {
    eyebrow: "Frequently asked questions",
    title: "The essentials, before your visit.",
    items: [
      ["Is this a direct sale?", "Yes. The house is offered directly by the owning family, without intermediaries."],
      ["Where is the property located?", "At Carrera 40 # 41-111 in Altos de Cabecera, Bucaramanga: a residential area close to Cabecera, UNAB, parks, shops and walking routes."],
      ["How many bedrooms and bathrooms are there?", "The property has seven bedrooms and six bathrooms in total, including a separate service bedroom and bathroom."],
      ["Is there private parking?", "There is currently no private garage. The exterior area in front of the property can accommodate two standard-sized vehicles or one large vehicle without obstructing the storefront’s visibility."],
      ["What renovation possibilities does it offer?", "It could be renovated as a spacious family home, combine living and office space, or be studied as a boutique accommodation project. Any change of use or expansion must be reviewed through the appropriate technical studies and permits."],
      ["How can I arrange a viewing?", "Choose the use you imagine in the contact form, enter your name and tap “Write on WhatsApp”. You will speak directly with the owning family."],
    ],
  },
} as const;

export default function FaqSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const content = faqContent[lang];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <section className="faqSection">
    <div className="shell faqInner">
      <div className="faqHeading"><p className="eyebrow">{content.eyebrow}</p><h2>{content.title}</h2></div>
      <div className="faqList">{content.items.map(([question, answer], index) => <details key={question} open={index === 0}>
        <summary>{question}<span aria-hidden="true">+</span></summary>
        <p>{answer}</p>
      </details>)}</div>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
  </section>;
}
