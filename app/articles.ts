export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  lang: "es" | "en";
  slug: string;
  alternateSlug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  readingTime: string;
  heroImage?: string;
  heroAlt?: string;
  sections: ArticleSection[];
  sources: { label: string; url: string }[];
};

export const spanishArticles: Article[] = [
  {
    lang: "es",
    slug: "vivir-en-bucaramanga",
    alternateSlug: "living-in-bucaramanga",
    category: "Vida en la ciudad",
    title: "¿Cómo es vivir en Bucaramanga? Una mirada desde quienes vivimos aquí",
    description: "Una guía honesta sobre cómo es vivir en Bucaramanga: ritmo cotidiano, servicios, movilidad, mercados, parques y aspectos que una familia debe considerar.",
    intro: "Bucaramanga conserva algo que muchas ciudades grandes han ido perdiendo: es posible organizar buena parte de la vida diaria sin recorrer distancias enormes. Esta guía reúne nuestra experiencia viviendo aquí y datos que conviene revisar antes de elegir la ciudad.",
    readingTime: "8 minutos",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Casa familiar en Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "Una ciudad de escala manejable",
        paragraphs: [
          "Bucaramanga y su área metropolitana ofrecen universidades, clínicas, comercio, restaurantes y servicios especializados, pero conservan distancias más manejables que las de una gran capital. La experiencia cambia según el barrio: no es lo mismo vivir en el centro, Cabecera, el norte o desplazarse diariamente desde Floridablanca y Piedecuesta.",
          "Para quienes trabajan, estudian o realizan la mayor parte de sus actividades en Bucaramanga, escoger una ubicación dentro de la meseta puede reducir muchos desplazamientos. Esa es una de las razones por las que sectores como Altos de Cabecera siguen siendo prácticos para familias y profesionales."
        ]
      },
      {
        heading: "¿Por qué se le ha llamado un buen vividero?",
        paragraphs: [
          "Durante años se ha utilizado la expresión “buen vividero” para hablar de Bucaramanga. No significa que la ciudad no tenga problemas. Describe una combinación de servicios, vida de barrio, clima cálido, comercio cercano y posibilidades de moverse sin que cada actividad se convierta en un viaje largo.",
          "La Encuesta de Percepción Ciudadana Comparada de 2025 ubicó al área metropolitana entre los territorios con mejores percepciones del país en varias dimensiones de calidad de vida. Al mismo tiempo, la seguridad y la movilidad siguen siendo asuntos que deben evaluarse con información reciente y según el sector."
        ]
      },
      {
        heading: "Vida cotidiana para una familia",
        paragraphs: [
          "Una familia puede encontrar universidades, colegios, atención médica, parques, mercados tradicionales, centros comerciales y una oferta amplia de alimentos. Las plazas de mercado siguen formando parte de la rutina: permiten comprar frutas, verduras, carnes, quesos y productos regionales sin depender únicamente de grandes supermercados.",
          "También hay una cultura fuerte de salir temprano a caminar. En sectores del oriente de la ciudad, antes de amanecer ya se ven grupos de vecinos haciendo ejercicio y conectando parques urbanos con rutas hacia Pan de Azúcar y los cerros orientales."
        ]
      },
      {
        heading: "Lo que también conviene considerar",
        paragraphs: [
          "Bucaramanga no debe presentarse como una ciudad perfecta. Hay congestión en horas pico, especialmente en corredores metropolitanos; la seguridad requiere las precauciones normales de una ciudad colombiana; y algunas oportunidades laborales especializadas pueden ser más limitadas que en Bogotá o Medellín.",
          "La decisión depende del estilo de vida. Para una familia, un profesional independiente o una persona que trabaja de forma remota, puede resultar atractiva la combinación de servicios urbanos y una escala más contenida. Para alguien que necesita viajar diariamente al sur del área metropolitana, la ruta y el horario deben estudiarse antes de escoger vivienda."
        ]
      },
      {
        heading: "Conocer la ciudad desde un barrio real",
        paragraphs: [
          "La mejor manera de entender Bucaramanga no es quedarse únicamente con rankings. Conviene caminar el barrio, probar los recorridos en diferentes horarios, visitar las plazas, mirar dónde están los servicios y calcular cuánto tiempo toma llegar a los lugares que forman parte de la rutina.",
          "Casa 41·111 está en Altos de Cabecera, cerca de la UNAB, parques y recorridos peatonales. Desde esa ubicación se puede observar una versión cotidiana de Bucaramanga: residentes que caminan temprano, estudiantes, comercios de barrio y conexiones rápidas con Cabecera."
        ]
      }
    ],
    sources: [
      { label: "Bucaramanga Metropolitana Cómo Vamos — Encuestas de percepción ciudadana", url: "https://www.bucaramangacomovamos.org/encuestasdepercepcionciudadana" },
      { label: "Alcaldía de Bucaramanga — División político-urbana", url: "https://www.bucaramanga.gov.co/division-politico-urbana/" }
    ]
  },
  {
    lang: "es",
    slug: "vivir-en-altos-de-cabecera",
    alternateSlug: "living-in-altos-de-cabecera",
    category: "El barrio",
    title: "Vivir en Altos de Cabecera: ubicación, movilidad y vida cotidiana",
    description: "Cómo es vivir en Altos de Cabecera, Bucaramanga: conexión caminando con Cabecera, cercanía a la UNAB, parques, servicios y rutas de movilidad.",
    intro: "Altos de Cabecera permite estar cerca de la actividad de Cabecera y, al mismo tiempo, conservar una vida más residencial. Desde Casa 41·111 se puede caminar hacia universidades, parques, comercios y rutas de ejercicio.",
    readingTime: "8 minutos",
    heroImage: "/casa/mapa-senderos-altos-cabecera.webp",
    heroAlt: "Mapa con varias rutas para caminar, parques y senderos cerca de Casa 41-111",
    sections: [
      {
        heading: "Una ubicación dentro de Bucaramanga",
        paragraphs: [
          "Una de las ventajas de Altos de Cabecera es estar dentro de Bucaramanga y cerca de los servicios de Cabecera. Para quienes estudian, trabajan o hacen la mayor parte de su vida en la ciudad, esta ubicación puede evitar la dependencia diaria del corredor que conecta Bucaramanga con Floridablanca y Piedecuesta.",
          "Esto no significa que nunca haya tráfico. Significa que muchos destinos cotidianos se encuentran en el mismo sector o a trayectos cortos, lo que permite escoger entre caminar, tomar un taxi o utilizar el automóvil."
        ]
      },
      {
        heading: "Cabecera a pie",
        paragraphs: [
          "Desde Casa 41·111 se puede bajar caminando hacia Cabecera por la carrera 40 hasta Quinta Etapa o conectar con la carrera 39 y continuar desde allí. Según el ritmo y el punto de destino, el recorrido hacia Cabecera toma aproximadamente entre diez y quince minutos.",
          "Es una caminata urbana que permite llegar a restaurantes, cafés, parques, bancos, comercio y servicios médicos sin sacar el automóvil. Antes de publicar tiempos exactos para cada destino, conviene medir las rutas y recorrerlas en diferentes horarios."
        ]
      },
      {
        heading: "La UNAB a pocos minutos",
        paragraphs: [
          "El Campus El Jardín de la Universidad Autónoma de Bucaramanga está en Altos de Cabecera. Desde la casa, el recorrido habitual puede hacerse caminando en pocos minutos. Esta proximidad interesa a familias con hijos universitarios, estudiantes de posgrado, docentes y profesionales vinculados a la institución.",
          "La cercanía universitaria también puede ser útil para un proyecto de alojamiento de pocas habitaciones, porque ofrece a los huéspedes un punto de referencia claro y servicios alrededor del campus."
        ]
      },
      {
        heading: "Movimiento desde temprano",
        paragraphs: [
          "Desde aproximadamente las cuatro de la mañana comienza a verse a residentes caminando y haciendo ejercicio por el sector. Algunos terminan sus recorridos en el Parque de Los Leones o en el parque Enrique Viviescas, conocido localmente como el Parque de los Perros. Otros continúan hacia la UNAB, Pan de Azúcar y el Bosque de los Caminantes.",
          "Al final de la tarde vuelve a aumentar el movimiento de peatones y vehículos. Esta circulación forma parte de la vida del sector y también da visibilidad al local ubicado frente a la propiedad."
        ]
      },
      {
        heading: "Una ubicación útil para distintos proyectos",
        paragraphs: [
          "Para una familia, la ubicación simplifica actividades diarias. Para un profesional, permite combinar vivienda y trabajo. Para quien evalúa un alojamiento boutique, ofrece a los huéspedes acceso caminando a parques, universidad, restaurantes y comercio.",
          "La casa no cuenta actualmente con parqueaderos privados porque el espacio frontal fue convertido en un local comercial que hoy está arrendado. Frente a la propiedad hay espacio para estacionar dos vehículos de tamaño estándar o uno grande sin obstruir la visibilidad del local; ese espacio no debe presentarse como estacionamiento privado o exclusivo."
        ]
      }
    ],
    sources: [
      { label: "UNAB — Campus El Jardín", url: "https://unab.edu.co/la-universidad/" },
      { label: "Alcaldía de Bucaramanga — Comuna 12 Cabecera del Llano", url: "https://www.bucaramanga.gov.co/division-politico-urbana/" }
    ]
  },
  {
    lang: "es",
    slug: "caminatas-parques-y-senderos",
    alternateSlug: "walks-parks-and-trails",
    category: "Vida al aire libre",
    title: "Caminatas, parques y senderos cerca de Altos de Cabecera",
    description: "Rutas para caminar desde Altos de Cabecera hacia Los Leones, la UNAB, Pan de Azúcar y el Bosque de los Caminantes en Bucaramanga.",
    intro: "Salir a caminar temprano forma parte de la rutina del sector. Desde Casa 41·111 se conectan recorridos urbanos cortos y rutas más largas hacia los cerros orientales de Bucaramanga.",
    readingTime: "7 minutos",
    heroImage: "/casa/mapa-senderos-altos-cabecera.webp",
    heroAlt: "Mapa con varias rutas para caminar, parques y senderos próximos a Casa 41-111",
    sections: [
      {
        heading: "El barrio antes de amanecer",
        paragraphs: [
          "Desde muy temprano empiezan a aparecer caminantes, corredores y vecinos que hacen ejercicio. A las cuatro de la mañana ya hay movimiento en algunas calles y, a medida que aclara, se forman recorridos hacia parques y senderos cercanos.",
          "La sensación de la mañana es distinta a la del resto del día: baja la temperatura, hay menos tráfico y el movimiento de otras personas hace que varias rutas se sientan acompañadas. Esto es una observación de quienes vivimos en el sector, no una garantía de seguridad; siempre conviene mantener las precauciones habituales."
        ]
      },
      {
        heading: "Parque de Los Leones y Enrique Viviescas",
        paragraphs: [
          "Para una salida corta, el Parque de Los Leones funciona como punto de llegada, descanso o ejercicio. Tiene espacios para caminar y realizar actividad física. El parque Enrique Viviescas, conocido por muchos vecinos como el Parque de los Perros, es otro destino cercano para pasear y encontrarse con la vida de barrio.",
          "Ambos recorridos pueden hacerse sin automóvil desde la propiedad. La duración depende del ritmo, la ruta elegida y la pendiente; para una primera salida conviene comenzar con un trayecto corto y reconocer el regreso con luz de día."
        ]
      },
      {
        heading: "UNAB y Pan de Azúcar",
        paragraphs: [
          "Quienes quieren caminar más pueden continuar hacia el Campus El Jardín de la UNAB y Pan de Azúcar. La Alcaldía describe una ruta de aproximadamente cinco kilómetros, ida y regreso, con un mirador sobre la ciudad y alternativas para caminantes principiantes o experimentados.",
          "Ir temprano ayuda a evitar el sol más fuerte. Es aconsejable llevar agua, calzado con buena suela y mantenerse en las rutas conocidas. Después de lluvia, las condiciones del terreno pueden cambiar."
        ]
      },
      {
        heading: "Bosque de los Caminantes y cerros orientales",
        paragraphs: [
          "El mapa elaborado desde la casa muestra conexiones hacia el Bosque de los Caminantes, el sendero de la vía Bucaramanga–Cúcuta y varios puntos elevados. Algunas rutas son urbanas; otras entran en terreno natural y exigen más preparación.",
          "Para visitantes o nuevos residentes, lo recomendable es comenzar por los parques y recorridos cortos, y hacer los senderos largos con personas que conozcan la zona o con grupos organizados."
        ]
      },
      {
        heading: "Una rutina que también interesa a los huéspedes",
        paragraphs: [
          "La cercanía a parques y senderos aporta valor a una vivienda familiar, pero también a un alojamiento boutique. Un huésped puede comenzar el día caminando, tomar café cerca de la UNAB, bajar a Cabecera y regresar sin depender siempre de un vehículo.",
          "La experiencia no requiere grandes atracciones construidas: nace de la ubicación y de la posibilidad de participar en una rutina local."
        ]
      }
    ],
    sources: [
      { label: "Alcaldía de Bucaramanga — Ruta ecológica de Pan de Azúcar", url: "https://www.bucaramanga.gov.co/noticias/tres-rutas-ecologicas-que-puedes-hacer-este-fin-de-semana-en-bucaramanga/" },
      { label: "Alcaldía de Bucaramanga — Caminatas urbanas y rurales", url: "https://www.bucaramanga.gov.co/wp-content/uploads/2023/02/INFORME-GESTION-ACUMULADO-INDERBU-2022-4TO-TRIMESTRE-.pdf" }
    ]
  },
  {
    lang: "es",
    slug: "plazas-de-mercado-de-bucaramanga",
    alternateSlug: "food-markets-in-bucaramanga",
    category: "Mercados locales",
    title: "Plazas de mercado de Bucaramanga: una guía local para comprar fresco",
    description: "Guía local de las plazas Guarín, La Rosita, La Concordia, San Francisco y Central de Bucaramanga, con horarios aproximados y consejos de visita.",
    intro: "En Bucaramanga todavía es posible comprar frutas, verduras, carnes, quesos y productos regionales en plazas ubicadas dentro de la ciudad. Esta guía se basa en nuestra experiencia haciendo mercado y en información pública que debe verificarse antes de cada visita.",
    readingTime: "9 minutos",
    sections: [
      {
        heading: "Plaza Guarín: mejor temprano",
        paragraphs: [
          "La Plaza Guarín es una opción práctica para quienes viven en Cabecera y sectores cercanos. Funciona principalmente durante la mañana y suele cerrar alrededor de la una de la tarde. Según nuestra experiencia, el mejor momento para llegar es entre las seis y las siete de la mañana.",
          "A esa hora suele haber mejor disponibilidad de carnes y una oferta más completa de frutas, verduras, quesos y otros productos frescos. La Alcaldía registra aproximadamente 240 puestos y la presenta como un punto donde se encuentran el campo y la ciudad."
        ]
      },
      {
        heading: "La Rosita: el mercado de la tarde y la noche",
        paragraphs: [
          "La Plaza La Rosita es una de nuestras favoritas. Aunque empieza a funcionar durante el día, el mejor momento para visitarla es alrededor de las seis o siete de la noche. A esa hora se siente fresca, activa y con buena variedad de frutas, verduras y carnes.",
          "Nos gusta por su limpieza, la diversidad de producto y los precios cómodos que solemos encontrar. También permite hacer mercado cuando las plazas tradicionales ya están cerrando. Los horarios pueden cambiar, así que deben confirmarse antes de una visita especial."
        ]
      },
      {
        heading: "La Concordia",
        paragraphs: [
          "La Concordia es una plaza tradicional ubicada en la calle 50 con carrera 20. Los directorios actuales muestran actividad desde muy temprano y cierre durante la tarde, con horarios más madrugadores de miércoles a sábado.",
          "Antes de ir conviene confirmar el horario del día y decidir cómo llegar, porque la actividad y las opciones de estacionamiento cambian según la hora. La visita permite comparar precios y productos con otras plazas de la ciudad."
        ]
      },
      {
        heading: "San Francisco",
        paragraphs: [
          "San Francisco es una de las plazas más grandes de Bucaramanga. La información municipal reporta cientos de locales distribuidos entre verduras, frutas, carnes, productos variados y restaurantes. Es un lugar para recorrer con tiempo y conocer una parte tradicional del abastecimiento de la ciudad.",
          "Conviene llegar temprano, especialmente si se buscan productos frescos o se quiere desayunar antes de que aumente el movimiento."
        ]
      },
      {
        heading: "Plaza Central: variedad y precios populares",
        paragraphs: [
          "La Plaza Central, en el centro de Bucaramanga, reúne alimentos y muchos otros productos. Se encuentran frutas, verduras, carnes, especias, utensilios, ropa, artículos para el hogar y restaurantes en varios niveles.",
          "Es más concurrida y tiene un ambiente distinto al de Guarín o La Rosita, pero destaca por el surtido y por precios que suelen resultar económicos. Ir temprano ayuda a encontrar producto fresco y recorrerla con mayor comodidad."
        ]
      },
      {
        heading: "Consejos para visitar las plazas",
        paragraphs: [
          "Los horarios publicados en internet no siempre reflejan la actividad real de cada puesto. Es mejor confirmar el día anterior, llevar bolsas reutilizables, preguntar por productos de temporada y comparar precios antes de hacer una compra grande.",
          "Para nuevos residentes y visitantes, una plaza es también una forma de entender la ciudad: permite reconocer productos regionales, conversar con vendedores y observar cómo se abastecen las familias de Bucaramanga."
        ]
      }
    ],
    sources: [
      { label: "Alcaldía de Bucaramanga — Plaza Guarín", url: "https://www.bucaramanga.gov.co/noticias/plaza-guarin-un-bien-publico-que-les-garantiza-el-abastecimiento-a-los-bumangueses/" },
      { label: "Alcaldía de Bucaramanga — Plazas municipales", url: "https://www.bucaramanga.gov.co/noticias/transformamos-las-plazas-de-mercado-en-espacios-sostenibles/" }
    ]
  },
  {
    lang: "es",
    slug: "comida-restaurantes-y-cafes",
    alternateSlug: "food-restaurants-and-cafes",
    category: "Comer en la ciudad",
    title: "Comida, restaurantes y cafés de Bucaramanga: una guía para empezar",
    description: "Una introducción a las comidas rápidas, cocina santandereana, restaurantes, cafés y mercados que forman parte de la vida cotidiana en Bucaramanga.",
    intro: "La relación de Bucaramanga con la comida no se limita a los platos tradicionales de Santander. La ciudad tiene una cultura marcada de comidas rápidas, cafés, restaurantes familiares, carnes, jugos y mercados donde el producto fresco sigue siendo protagonista.",
    readingTime: "8 minutos",
    sections: [
      {
        heading: "La comida rápida como cultura local",
        paragraphs: [
          "En Bucaramanga hay una afición especial por las hamburguesas, perros calientes, pizzas, salchipapas, pollo y combinaciones creadas por negocios locales. Decir que son “las mejores del país” es una opinión, no un dato medible; lo que sí puede observarse es una oferta amplia y una clientela que conoce y compara este tipo de comida.",
          "Una buena guía debe ir más allá de un ranking. Puede explicar qué distingue a cada lugar, qué porciones ofrece, si funciona para familias, cuáles son sus horarios y cuánto puede costar una salida."
        ]
      },
      {
        heading: "Sabores de Santander",
        paragraphs: [
          "La cocina santandereana incluye carnes, arepas, mute, cabro, pepitoria y productos que cambian según el municipio y la tradición familiar. En las plazas también aparecen quesos, frutas, harinas, hierbas y preparaciones que permiten conocer la región más allá de un restaurante formal.",
          "Para una persona que llega de otra ciudad o país, probar estos alimentos ayuda a entender la relación de Bucaramanga con el campo santandereano."
        ]
      },
      {
        heading: "Cabecera: restaurantes y cafés cerca de casa",
        paragraphs: [
          "Cabecera concentra restaurantes, cafés, panaderías y opciones para diferentes presupuestos. Desde Altos de Cabecera se puede bajar caminando hacia varias de estas zonas, lo que permite salir a comer sin depender siempre del automóvil.",
          "En lugar de publicar una lista permanente que quede desactualizada, construiremos recorridos revisables: café de mañana, almuerzo santandereano, comida familiar y opciones nocturnas. Cada recomendación tendrá fecha de actualización."
        ]
      },
      {
        heading: "Mercados, jugos y producto fresco",
        paragraphs: [
          "Las plazas Guarín, La Rosita, La Concordia, San Francisco y Central complementan la oferta de restaurantes. Allí se consiguen frutas para jugos, verduras, carnes, quesos, especias y comidas preparadas.",
          "Para alguien que piensa vivir varios meses en Bucaramanga o desarrollar un alojamiento pequeño, conocer estos mercados puede ser tan importante como conocer los centros comerciales."
        ]
      },
      {
        heading: "Cómo elegir dónde comer",
        paragraphs: [
          "Para elegir conviene mirar la distancia desde el barrio, el horario real, el tipo de comida y el presupuesto. Una recomendación útil debe explicar por qué vale la pena ir y cuándo fue comprobada, no limitarse a repetir publicidad.",
          "La intención es que una familia o un huésped pueda decidir dónde desayunar, dónde comprar y qué probar durante sus primeros días en la ciudad."
        ]
      }
    ],
    sources: [
      { label: "Alcaldía de Bucaramanga — Plazas de mercado", url: "https://www.bucaramanga.gov.co/noticias/transformamos-las-plazas-de-mercado-en-espacios-sostenibles/" }
    ]
  },
  {
    lang: "es",
    slug: "comprar-y-renovar-una-casa-en-bucaramanga",
    alternateSlug: "buying-and-renovating-a-house-in-bucaramanga",
    category: "Comprar y renovar",
    title: "Comprar y renovar una casa amplia en Bucaramanga: qué revisar",
    description: "Aspectos que conviene revisar al comprar y renovar una casa amplia en Bucaramanga para vivienda, oficina o alojamiento boutique.",
    intro: "Una casa amplia y vivida ofrece posibilidades que no aparecen en una propiedad nueva, pero exige mirar más allá de las fotografías. Distribución, estructura, instalaciones, normativa y presupuesto deben estudiarse antes de decidir.",
    readingTime: "10 minutos",
    heroImage: "/casa/entrada-luces-calidas.webp",
    heroAlt: "Entrada y terraza de Casa 41-111 en Bucaramanga",
    sections: [
      {
        heading: "Comenzar por el uso que se quiere dar",
        paragraphs: [
          "No existe una única remodelación correcta. Una familia puede priorizar habitaciones, cocina, accesibilidad y zonas comunes. Un profesional puede necesitar oficina independiente. Un proyecto de alojamiento boutique requiere pensar en circulación, privacidad, baños, operación, lavandería y atención a huéspedes.",
          "Definir el uso antes de diseñar evita gastar en cambios que después deben deshacerse."
        ]
      },
      {
        heading: "Medir antes de imaginar",
        paragraphs: [
          "El primer paso técnico es un levantamiento arquitectónico que muestre medidas y distribución actual. Después deben revisarse estructura, redes eléctricas, acueducto, desagües, ventilación, iluminación y estado de cubiertas.",
          "En una casa de varios niveles, también es importante estudiar escaleras y accesibilidad. Las soluciones pueden ir desde reorganizar los usos por piso hasta evaluar intervenciones mayores con profesionales competentes."
        ]
      },
      {
        heading: "Espacios desaprovechados y nuevas habitaciones",
        paragraphs: [
          "Casa 41·111 tiene siete habitaciones en su configuración actual y áreas que hoy no aprovechan todo su potencial. Un arquitecto podría estudiar cómo redistribuirlas para crear habitaciones adicionales, suites, baños o zonas de apoyo.",
          "No es responsable prometer un número exacto sin planos, revisión estructural y validación normativa. El valor está en que existe espacio para explorar alternativas, no en presentar una ampliación como si ya estuviera aprobada."
        ]
      },
      {
        heading: "Vivienda, oficina o alojamiento boutique",
        paragraphs: [
          "La distribución por niveles permite pensar en áreas con distintos grados de independencia. Eso puede servir para una familia de varias generaciones, una vivienda con oficina o un hospedaje de pocas habitaciones con espacios comunes.",
          "Los usos turísticos y comerciales deben verificarse ante las autoridades y cumplir los registros, condiciones de seguridad y obligaciones tributarias aplicables. Una revisión previa del uso del suelo es indispensable antes de calcular ingresos."
        ]
      },
      {
        heading: "El local y el frente de la propiedad",
        paragraphs: [
          "El espacio que anteriormente funcionaba como parqueadero fue convertido en un local comercial para producir un ingreso para la propietaria. Actualmente está arrendado. Un comprador deberá revisar el contrato, el canon, su vigencia y las condiciones de terminación o continuidad.",
          "Frente a la propiedad hay espacio para estacionar dos vehículos estándar o uno grande sin bloquear la visibilidad del local, pero no se ofrece como parqueadero privado. Si el proyecto futuro requiere estacionamiento formal, ese punto debe estudiarse con el arquitecto y la normativa urbana."
        ]
      },
      {
        heading: "Construir una proyección financiera prudente",
        paragraphs: [
          "Para evaluar un alojamiento no basta con multiplicar habitaciones por una tarifa. Deben considerarse obra, mobiliario, licencias, plataformas, personal, limpieza, servicios, mantenimiento, impuestos y una ocupación realista.",
          "Un buen estudio debe presentar escenarios conservador, medio y alto. La ubicación, la cercanía a la UNAB, Cabecera y los senderos son ventajas, pero no sustituyen una evaluación técnica y financiera."
        ]
      }
    ],
    sources: []
  },
  {
    lang: "es",
    slug: "es-segura-bucaramanga",
    alternateSlug: "is-bucaramanga-safe",
    category: "Mudarse a la ciudad",
    title: "¿Es segura Bucaramanga? Una mirada honesta desde quienes vivimos aquí",
    description: "Una mirada franca a la seguridad, la vida diaria y qué esperar al vivir en Bucaramanga, Colombia, para quienes piensan mudarse.",
    intro: "Casi todas las guías sobre mudarse a Colombia apuntan a Medellín o Cartagena. Bucaramanga rara vez aparece, y esa es justo la razón por la que quienes la descubren tienden a quedarse. Respondamos la pregunta que de verdad importa, sin discurso de venta.",
    readingTime: "7 minutos",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Casa familiar en Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "¿Es segura Bucaramanga?",
        paragraphs: [
          "Dentro de Colombia, Bucaramanga es reconocida como una de las ciudades intermedias más tranquilas y ordenadas del país. Es la capital de Santander, tiene clima templado la mayor parte del año y se le conoce como la Ciudad de los Parques por la cantidad de zonas verdes repartidas por sus barrios.",
          "Como en cualquier ciudad, la seguridad depende mucho del sector donde se viva y de los hábitos de cada quien. Lo que sorprende a muchos recién llegados es lo normal que se siente la vida diaria: la gente camina a la panadería en la mañana, las familias usan los parques en la tarde, y barrios residenciales como Cabecera tienen un ritmo de vecindario, no de zona turística."
        ]
      },
      {
        heading: "El contexto que casi nadie menciona",
        paragraphs: [
          "La reputación de Colombia quedó anclada en los años 80 y 90, pero las cifras cambiaron de forma drástica. Para dar perspectiva: Medellín —alguna vez la ciudad más violenta del mundo— hoy tiene una tasa de homicidios más baja que varias ciudades de Estados Unidos como Indianápolis, y la de Bogotá es más baja que la de Filadelfia. Bucaramanga aparece de forma consistente entre las ciudades intermedias más tranquilas, lejos de las zonas que salen en las noticias.",
          "Nada de esto significa apagar el sentido común. Como en cualquier ciudad, hay sectores y zonas de vida nocturna donde el hurto es más frecuente, y conviene saber que Bucaramanga está en zona sísmica. Pero para la vida residencial cotidiana en un barrio consolidado, la mayoría de residentes la describe como calmada, en el mejor sentido."
        ]
      },
      {
        heading: "Hábitos de sentido común (los mismos de cualquier lugar)",
        paragraphs: [
          "La seguridad que de verdad se siente no viene de una estadística, sino de lo pequeño y cotidiano: vecinos que uno reconoce, comercios a distancia caminable y calles con vida."
        ],
        bullets: [
          "Elige bien el barrio: importa más que el nombre de la ciudad.",
          "Conoce tu cuadra; un sector donde te reconocen es la mejor seguridad.",
          "Usa la misma atención que usarías en cualquier ciudad que no conoces aún.",
          "Infórmate con fuentes recientes y oficiales antes de decidir."
        ]
      },
      {
        heading: "El resumen honesto",
        paragraphs: [
          "Bucaramanga no deslumbra en un fin de semana; recompensa a quien se queda. Si tu prioridad es una ciudad segura, verde y de buen valor, con vida diaria real, y no necesitas estar en un lugar famoso, merece una mirada seria.",
          "Esta guía comparte impresiones generales e información pública, no garantías de seguridad. Las condiciones cambian y varían por zona: consulta siempre fuentes oficiales y usa tu propio criterio antes de viajar o mudarte."
        ]
      }
    ],
    sources: [
      { label: "Live and Invest Overseas — Bucaramanga", url: "https://www.liveandinvestoverseas.com/country-hub/colombia/bucaramanga/" }
    ]
  },
  {
    lang: "es",
    slug: "bucaramanga-vs-medellin",
    alternateSlug: "bucaramanga-vs-medellin",
    category: "Mudarse a la ciudad",
    title: "Bucaramanga vs. Medellín: por qué algunos eligen la ciudad más tranquila",
    description: "Una comparación honesta entre Bucaramanga y Medellín: costo, seguridad, ritmo de vida y para quién es cada ciudad.",
    intro: "Si investigaste sobre mudarte a Colombia, seguro te dijeron que fueras a Medellín. Es la respuesta por defecto, y tiene sentido: más comunidad expat, más inglés, aterrizaje más fácil. Pero “fácil para llegar” y “mejor para quedarse” no siempre son lo mismo.",
    readingTime: "7 minutos",
    sections: [
      {
        heading: "Costo",
        paragraphs: [
          "Es la diferencia más clara. Bucaramanga aparece de forma consistente entre las ciudades de mejor relación calidad-precio de Colombia, notablemente más económica que Medellín en arriendo, comida y vida diaria. El dinero simplemente rinde más."
        ]
      },
      {
        heading: "Multitudes y precios",
        paragraphs: [
          "La popularidad de Medellín tiene un costo: arriendos al alza en las zonas expat, barrios que a veces se sienten más como un enclave internacional que como Colombia, y precios inflados por el turismo en las áreas más populares. Bucaramanga no ha sido “descubierta” de esa manera, y por eso sigue sintiéndose local y asequible."
        ]
      },
      {
        heading: "Ritmo y vida diaria",
        paragraphs: [
          "Medellín es más grande, más movida, más vida nocturna, más cosas por hacer. Bucaramanga es más tranquila, más verde, más residencial: una ciudad para vivir más que un destino. Si prefieres una rutina real sobre una postal, eso es una ventaja."
        ]
      },
      {
        heading: "Inglés y comunidad",
        paragraphs: [
          "Aquí gana Medellín. Tiene muchos más servicios en inglés y una red expat más grande. En Bucaramanga te apoyarás antes en el español, algo que muchos terminan viendo como un beneficio, no una barrera."
        ]
      },
      {
        heading: "Para quién es cada ciudad",
        paragraphs: [
          "La verdad honesta: para mucha gente, Medellín es un gran lugar para llegar y Bucaramanga un gran lugar para quedarse."
        ],
        bullets: [
          "Elige Medellín si quieres el aterrizaje más fácil, la mayor escena expat y más infraestructura en inglés.",
          "Elige Bucaramanga si quieres menores costos, una vida más tranquila y auténtica, barrios reales y una ciudad que no ha sido encarecida por su propia fama."
        ]
      }
    ],
    sources: []
  },
  {
    lang: "es",
    slug: "costo-de-vida-en-bucaramanga",
    alternateSlug: "cost-of-living-bucaramanga",
    category: "Mudarse a la ciudad",
    title: "El costo real de vivir en Bucaramanga (2026)",
    description: "Cuánto cuesta de verdad vivir en Bucaramanga en 2026: arriendo, comida, servicios y transporte, con rangos honestos.",
    intro: "Casi todas las guías te citan precios de Medellín. Bucaramanga es más económica —a menudo bastante— pero usemos rangos reales y honestos en lugar de una cifra de fantasía.",
    readingTime: "7 minutos",
    sections: [
      {
        heading: "La versión corta",
        paragraphs: [
          "Los estimados para una persona sola en Bucaramanga en 2026 van desde unos USD 575 hasta USD 965 al mes sin arriendo, según el estilo de vida y la fuente. Una familia de cuatro suele ubicarse entre USD 1.100 y 2.000 sin arriendo. En general, vivir aquí cuesta una fracción de una ciudad comparable en Norteamérica o Europa."
        ]
      },
      {
        heading: "Arriendo",
        paragraphs: [
          "Un apartamento de una habitación en zona central promedia entre USD 178 y 388 al mes según la fuente y la ubicación exacta; uno de tres habitaciones cuesta más. Barrios consolidados y apetecidos como Cabecera se ubican en el extremo más alto y cómodo: se paga por ubicación, poder caminar a todo y cercanía a servicios."
        ]
      },
      {
        heading: "Servicios, comida y transporte",
        paragraphs: [
          "Los servicios básicos (luz, agua, aseo) de un apartamento mediano promedian unos USD 105 al mes. Internet y celular son económicos para estándares norteamericanos. El mercado es barato, sobre todo si se compra en las plazas en lugar de productos importados, y un pasaje de bus urbano cuesta menos de USD 1."
        ]
      },
      {
        heading: "Por qué importa si piensas comprar",
        paragraphs: [
          "Si eres dueño de tu vivienda, tu costo mensual baja muchísimo: sin arriendo, solo servicios, comida y vida diaria. Para muchos, ese es justo el sentido de comprar aquí: un costo de vida bajo y predecible en una ciudad segura y verde.",
          "Tu costo real depende por completo de cómo vivas: plazas vs. marcas importadas, un barrio vs. otro, arrendar vs. ser dueño. Las cifras anteriores son puntos de partida, no promesas."
        ]
      }
    ],
    sources: [
      { label: "Wise — Costo de vida en Bucaramanga", url: "https://wise.com/us/cost-of-living/colombia/bucaramanga" },
      { label: "LivingCost — Bucaramanga", url: "https://livingcost.org/cost/colombia/bucaramanga" }
    ]
  },
  {
    lang: "es",
    slug: "mudarse-a-colombia-visas-y-salud",
    alternateSlug: "moving-to-colombia-visas-healthcare",
    category: "Mudarse a la ciudad",
    title: "Mudarse a Colombia: visas, salud y lo básico",
    description: "Un panorama sencillo de las visas, la salud y los pasos prácticos para mudarse a Colombia, y por qué comprar propiedad puede ser parte del camino.",
    intro: "Colombia se ha vuelto uno de los países más acogedores de la región para extranjeros que quieren vivir, jubilarse o invertir, con un camino legal bastante claro entre “probar” y “quedarse a vivir”. Este es el panorama en palabras simples.",
    readingTime: "8 minutos",
    sections: [
      {
        heading: "Las principales rutas de visa (simplificado)",
        paragraphs: [
          "El sistema colombiano de visas se organiza en unas pocas categorías grandes que cubren desde estadías cortas hasta la residencia."
        ],
        bullets: [
          "Visa de Visitante (V): turismo, estadías cortas y nómadas digitales; en general hasta unos 180 días al año.",
          "Visa de Migrante (M): el camino de mediano plazo para establecer residencia, incluyendo por inversión, matrimonio o pensión.",
          "Visa de Residente (R): el estatus de largo plazo que lleva con el tiempo a la ciudadanía."
        ]
      },
      {
        heading: "La ruta de inversión (relevante si vas a comprar)",
        paragraphs: [
          "Una compra de vivienda que califique puede dar acceso a la visa de inversión (M-10), un paso reconocido hacia la residencia permanente y, con el tiempo, la ciudadanía. Para 2026 el umbral es de 350 salarios mínimos (SMMLV), fijado en pesos en unos COP 612.816.750 desde el 1 de enero de 2026, lo que equivale aproximadamente a USD 155.000–170.000 según el cambio del día.",
          "Dos cosas clave: migración evalúa el valor registrado en la escritura, no un valor informal, así que el precio escriturado es el que debe superar el umbral. Y comprar no otorga la visa automáticamente: hay que registrar la inversión ante el Banco de la República y solicitar la visa por separado.",
          "Verifica el umbral vigente antes de contar con él: se recalcula cada enero con el salario mínimo, se mueve con el cambio y el salario mínimo de 2026 está bajo revisión legal. Confirma con Cancillería o un abogado de inmigración."
        ]
      },
      {
        heading: "Derechos de propiedad para extranjeros",
        paragraphs: [
          "Una de las verdaderas fortalezas de Colombia: los extranjeros tienen prácticamente los mismos derechos de propiedad que los ciudadanos, sin restricciones por nacionalidad ni zonas prohibidas en la mayoría de vivienda residencial, y ni siquiera hace falta ser residente —ni estar en el país— para comprar. Colombia además permite la doble nacionalidad."
        ]
      },
      {
        heading: "Salud e idioma",
        paragraphs: [
          "Colombia es reconocida por una atención en salud de buena calidad y bajo costo, sobre todo en las ciudades grandes; los seguros privados y la medicina prepagada son asequibles para estándares norteamericanos. No se exige examen de idioma para la residencia, aunque el español sí es requisito para la naturalización. En una ciudad como Bucaramanga, aprender español no es opcional en la vida diaria y es lo que más ayuda a sentirse en casa."
        ]
      }
    ],
    sources: [
      { label: "Colombia Visas — Requisitos 2026", url: "https://colombiavisas.com/important-colombian-visa-requirement-updates-for-2026/" }
    ]
  }
];

export const englishArticles: Article[] = [
  {
    lang: "en",
    slug: "living-in-bucaramanga",
    alternateSlug: "vivir-en-bucaramanga",
    category: "City life",
    title: "What Is It Like to Live in Bucaramanga? A Local Perspective",
    description: "An honest guide to living in Bucaramanga, Colombia: daily life, services, mobility, markets, parks and considerations for families and remote workers.",
    intro: "Bucaramanga offers universities, healthcare, shops and restaurants within a city that can still feel manageable. This guide combines our experience of living here with practical points that families and international buyers should verify for themselves.",
    readingTime: "8 min read",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Family house in Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "A manageable urban scale",
        paragraphs: [
          "Bucaramanga and its metropolitan area provide universities, specialist healthcare, shopping and a broad range of services without the dimensions of Colombia’s largest cities. Daily life varies considerably by neighborhood and by whether a person needs to commute to Floridablanca or Piedecuesta.",
          "For people whose work, study and routines are based in Bucaramanga itself, living on the plateau can reduce travel time. This is one reason neighborhoods such as Altos de Cabecera remain practical for families, independent professionals and remote workers."
        ]
      },
      {
        heading: "Why locals call it a good place to live",
        paragraphs: [
          "Bucaramanga has often been described in Colombia as a “buen vividero”: a comfortable place for everyday life. The expression does not mean that the city is free from problems. It points to a combination of services, neighborhood life, warm weather, commerce and relatively contained distances.",
          "A 2025 comparative citizen perception survey placed metropolitan Bucaramanga among the Colombian territories with stronger perceptions across several quality-of-life dimensions. Security and mobility still require current, neighborhood-specific research."
        ]
      },
      {
        heading: "Daily life for a family",
        paragraphs: [
          "Families can find schools, universities, medical services, parks, traditional food markets and shopping centers. Public markets remain part of local life and make it possible to buy fresh fruit, vegetables, meat, cheese and regional ingredients without relying only on supermarkets.",
          "Early-morning walking is also common in the eastern neighborhoods. Before sunrise, residents begin exercising in urban parks and along routes that connect the city with Pan de Azúcar and the eastern hills."
        ]
      },
      {
        heading: "What should also be considered",
        paragraphs: [
          "Bucaramanga should not be marketed as perfect. Traffic can be difficult at peak times, particularly on metropolitan corridors. Normal urban safety precautions are necessary, and highly specialized career opportunities may be narrower than in Bogotá or Medellín.",
          "The fit depends on lifestyle. The city may suit a family, an independent professional or someone working remotely. Anyone commuting daily to the southern metropolitan area should test the route at the hours they would actually travel."
        ]
      },
      {
        heading: "Understand the city through a real neighborhood",
        paragraphs: [
          "Rankings are not enough. A prospective resident should walk the neighborhood, test routes at different times, visit markets and calculate the distance to the places that shape daily life.",
          "Casa 41·111 is in Altos de Cabecera, near the UNAB university, parks and walking routes. It offers a view of everyday Bucaramanga: early walkers, students, neighborhood commerce and quick connections with Cabecera."
        ]
      }
    ],
    sources: [
      { label: "Bucaramanga Metropolitana Cómo Vamos — Citizen perception surveys", url: "https://www.bucaramangacomovamos.org/encuestasdepercepcionciudadana" },
      { label: "Bucaramanga City Hall — Urban divisions", url: "https://www.bucaramanga.gov.co/division-politico-urbana/" }
    ]
  },
  {
    lang: "en",
    slug: "living-in-altos-de-cabecera",
    alternateSlug: "vivir-en-altos-de-cabecera",
    category: "The neighborhood",
    title: "Living in Altos de Cabecera: Location, Walkability and Daily Life",
    description: "A practical guide to Altos de Cabecera in Bucaramanga, including walkability, UNAB university, parks, services and connections to Cabecera.",
    intro: "Altos de Cabecera sits close to the restaurants and services of Cabecera while retaining a more residential daily rhythm. From Casa 41·111, residents can walk to a university campus, parks, local businesses and exercise routes.",
    readingTime: "8 min read",
    heroImage: "/casa/mapa-senderos-altos-cabecera.webp",
    heroAlt: "Map showing several walking routes, parks and trails near Casa 41-111",
    sections: [
      {
        heading: "A location within Bucaramanga",
        paragraphs: [
          "Altos de Cabecera is within Bucaramanga and close to Cabecera’s main services. People whose work, study and social life are based in the city may avoid depending every day on the busy corridor linking Bucaramanga with Floridablanca and Piedecuesta.",
          "This does not mean the area never experiences traffic. It means that many daily destinations are nearby and residents can choose between walking, a short taxi journey and driving."
        ]
      },
      {
        heading: "Walking to Cabecera",
        paragraphs: [
          "From Casa 41·111, residents can walk down Carrera 40 toward Quinta Etapa or connect with Carrera 39 and continue into Cabecera. Depending on pace and destination, the walk generally takes about ten to fifteen minutes.",
          "Restaurants, cafés, parks, banks, shops and medical services can be reached without taking the car every time. Exact routes and travel times should always be checked for the buyer’s own destinations."
        ]
      },
      {
        heading: "UNAB university nearby",
        paragraphs: [
          "The El Jardín campus of Universidad Autónoma de Bucaramanga is located in Altos de Cabecera. The usual route from the house can be walked in a few minutes. This is relevant to families with university-age children, postgraduate students, faculty and university staff.",
          "For a small hospitality project, the campus also provides guests with a recognizable landmark and nearby services."
        ]
      },
      {
        heading: "A neighborhood that starts early",
        paragraphs: [
          "Residents begin walking and exercising from the early hours of the morning. Some routes lead to Los Leones Park or Enrique Viviescas Park, locally known as the Dog Park. Others continue toward UNAB, Pan de Azúcar and the Bosque de los Caminantes.",
          "Pedestrian and vehicle movement increases again in the late afternoon. This everyday circulation also gives visibility to the commercial unit at the front of the property."
        ]
      },
      {
        heading: "Useful for several ways of living",
        paragraphs: [
          "For a family, the location can simplify routines. For a professional, it may support a combined home and office. For someone considering a boutique stay, guests could walk to parks, the university, restaurants and shops.",
          "The house does not currently have private parking because the former front parking area was converted into a rented commercial unit. There is exterior space in front for two standard vehicles or one larger vehicle without blocking the shop’s visibility, but it should not be represented as private or exclusive parking."
        ]
      }
    ],
    sources: [
      { label: "UNAB — El Jardín campus", url: "https://unab.edu.co/la-universidad/" },
      { label: "Bucaramanga City Hall — Comuna 12 Cabecera del Llano", url: "https://www.bucaramanga.gov.co/division-politico-urbana/" }
    ]
  },
  {
    lang: "en",
    slug: "walks-parks-and-trails",
    alternateSlug: "caminatas-parques-y-senderos",
    category: "Outdoor life",
    title: "Morning Walks, Parks and Trails near Altos de Cabecera",
    description: "Walking routes from Altos de Cabecera to Los Leones Park, UNAB, Pan de Azúcar and the eastern hills of Bucaramanga.",
    intro: "Early-morning walking is part of the neighborhood routine. From Casa 41·111, short urban walks connect with longer routes toward Bucaramanga’s eastern hills.",
    readingTime: "7 min read",
    heroImage: "/casa/mapa-senderos-altos-cabecera.webp",
    heroAlt: "Map showing several walking routes, parks and trails near Casa 41-111",
    sections: [
      {
        heading: "The neighborhood before sunrise",
        paragraphs: [
          "Walkers, runners and residents exercising begin to appear very early. Some people are already outside around four in the morning, and the routes become busier as daylight arrives.",
          "The cooler temperature and reduced traffic make the morning feel different from the rest of the day. The presence of other walkers can make common routes feel active and accompanied, but it is not a guarantee of safety. Visitors should use normal city precautions."
        ]
      },
      {
        heading: "Los Leones and Enrique Viviescas parks",
        paragraphs: [
          "Los Leones Park is a practical destination for a shorter walk, a rest or exercise. Enrique Viviescas Park, known by many residents as the Dog Park, is another nearby point for walking and experiencing neighborhood life.",
          "Both can be reached from the property without driving. Walking time depends on pace, route and incline; newcomers should begin with a shorter circuit and learn the return route in daylight."
        ]
      },
      {
        heading: "UNAB and Pan de Azúcar",
        paragraphs: [
          "Longer walks can continue past the UNAB campus toward Pan de Azúcar. Bucaramanga City Hall describes an approximately five-kilometer return route with a viewpoint and options for both newer and experienced walkers.",
          "Early morning is usually more comfortable before the strongest sun. Water, shoes with good grip and familiar routes are advisable, and trail conditions can change after rain."
        ]
      },
      {
        heading: "Bosque de los Caminantes and the eastern hills",
        paragraphs: [
          "The map prepared from the house shows connections toward Bosque de los Caminantes and trails near the Bucaramanga–Cúcuta road. Some routes remain urban; others enter natural terrain and require more preparation.",
          "New residents and visitors should begin with parks and shorter routes, then approach longer trails with people or organized groups that know the area."
        ]
      },
      {
        heading: "A local routine for future guests",
        paragraphs: [
          "Nearby parks and trails are valuable for a family home and for a small hospitality concept. A guest could begin the day with a walk, stop for coffee near UNAB, continue into Cabecera and return without using a vehicle for every activity.",
          "The experience comes from the location and the ability to take part in an ordinary local routine."
        ]
      }
    ],
    sources: [
      { label: "Bucaramanga City Hall — Pan de Azúcar ecological route", url: "https://www.bucaramanga.gov.co/noticias/tres-rutas-ecologicas-que-puedes-hacer-este-fin-de-semana-en-bucaramanga/" },
      { label: "Bucaramanga City Hall — Walking programs", url: "https://www.bucaramanga.gov.co/wp-content/uploads/2023/02/INFORME-GESTION-ACUMULADO-INDERBU-2022-4TO-TRIMESTRE-.pdf" }
    ]
  },
  {
    lang: "en",
    slug: "food-markets-in-bucaramanga",
    alternateSlug: "plazas-de-mercado-de-bucaramanga",
    category: "Local markets",
    title: "Bucaramanga Food Markets: A Local Guide to Fresh Produce",
    description: "A local guide to Guarín, La Rosita, La Concordia, San Francisco and Central markets in Bucaramanga, with practical visiting advice.",
    intro: "Bucaramanga still has food markets within the city where residents buy fresh fruit, vegetables, meat, cheese and regional ingredients. This guide combines our shopping experience with public information that should be checked before visiting.",
    readingTime: "9 min read",
    sections: [
      {
        heading: "Guarín: arrive early",
        paragraphs: [
          "Guarín Market is practical for residents of Cabecera and nearby neighborhoods. It operates mainly in the morning and often winds down around 1 p.m. In our experience, the best time to arrive is between 6 and 7 a.m.",
          "At that hour there is usually a fuller choice of meat, fruit, vegetables, cheese and other fresh products. City Hall records approximately 240 stalls and describes the market as a meeting point between the countryside and the city."
        ]
      },
      {
        heading: "La Rosita: an evening market",
        paragraphs: [
          "La Rosita is one of our favorite markets. Although it begins operating during the day, we prefer visiting around 6 or 7 p.m., when the air is cooler and the market feels active.",
          "We value its cleanliness, variety of fruit, vegetables and meat, and the accessible prices we often find. It is especially useful when traditional morning markets are already closing. Opening times can change and should be confirmed."
        ]
      },
      {
        heading: "La Concordia",
        paragraphs: [
          "La Concordia is a traditional market near Calle 50 and Carrera 20. Current listings show early opening and afternoon closing, with the earliest activity from Wednesday through Saturday.",
          "Opening times and parking conditions vary during the week, so it is worth confirming them before a special trip. Visiting in person also makes it easier to compare products and prices with the city’s other markets."
        ]
      },
      {
        heading: "San Francisco",
        paragraphs: [
          "San Francisco is one of Bucaramanga’s largest markets. Municipal information describes hundreds of stalls divided among vegetables, fruit, meat, other products and small restaurants.",
          "It is worth allowing time to explore. Arriving early is preferable for fresh products and for breakfast before the market becomes busier."
        ]
      },
      {
        heading: "Central Market: range and popular prices",
        paragraphs: [
          "Bucaramanga’s Central Market sells much more than food. Shoppers can find fruit, vegetables, meat, spices, household items, clothing and restaurants across several levels.",
          "It is busier and less calm than Guarín or La Rosita, but it stands out for variety and often economical prices. An early visit provides the best chance to see the produce before the busiest hours."
        ]
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "Online hours do not always reflect the rhythm of individual stalls. Confirm times, bring reusable bags, ask what is in season and compare prices before a large purchase.",
          "For a new resident, a market is more than a place to shop. It is a way to learn regional ingredients, speak with vendors and understand how local households buy food."
        ]
      }
    ],
    sources: [
      { label: "Bucaramanga City Hall — Guarín Market", url: "https://www.bucaramanga.gov.co/noticias/plaza-guarin-un-bien-publico-que-les-garantiza-el-abastecimiento-a-los-bumangueses/" },
      { label: "Bucaramanga City Hall — Municipal markets", url: "https://www.bucaramanga.gov.co/noticias/transformamos-las-plazas-de-mercado-en-espacios-sostenibles/" }
    ]
  },
  {
    lang: "en",
    slug: "food-restaurants-and-cafes",
    alternateSlug: "comida-restaurantes-y-cafes",
    category: "Eating in the city",
    title: "Food, Restaurants and Cafés in Bucaramanga: Where to Begin",
    description: "An introduction to Bucaramanga’s fast-food culture, Santander cuisine, cafés, restaurants and traditional food markets.",
    intro: "Food in Bucaramanga extends well beyond traditional Santander dishes. The city has a strong culture of casual food, cafés, family restaurants, grilled meat, fruit drinks and markets where fresh produce remains central.",
    readingTime: "8 min read",
    sections: [
      {
        heading: "A local fast-food culture",
        paragraphs: [
          "Bucaramanga has a particular enthusiasm for burgers, hot dogs, pizza, loaded fries, chicken and combinations developed by local businesses. Calling them “the best in Colombia” is an opinion rather than a measurable fact, but the range of businesses and the engaged local audience are easy to observe.",
          "A useful guide should go beyond rankings. It should explain portions, atmosphere, suitability for families, opening times and the approximate cost of a meal."
        ]
      },
      {
        heading: "Flavors of Santander",
        paragraphs: [
          "Santander cooking includes meat, arepas, mute soup, goat and pepitoria, with recipes that vary by town and family. Markets also offer cheese, fruit, grains, herbs and preparations that introduce the region beyond formal restaurants.",
          "For someone arriving from another country or another part of Colombia, these foods reveal Bucaramanga’s continuing relationship with rural Santander."
        ]
      },
      {
        heading: "Cabecera: restaurants and cafés near home",
        paragraphs: [
          "Cabecera brings together restaurants, cafés and bakeries across several price points. From Altos de Cabecera, residents can walk toward many of these areas instead of driving for every meal.",
          "A useful way to explore is by purpose: morning coffee, a Santander lunch, a family meal or an evening option. Check recent opening information before traveling, because restaurant hours and availability change."
        ]
      },
      {
        heading: "Markets, fruit drinks and fresh ingredients",
        paragraphs: [
          "Guarín, La Rosita, La Concordia, San Francisco and Central markets complement the restaurant scene. They supply fruit for juices, vegetables, meat, cheese, spices and prepared meals.",
          "For someone planning to live in Bucaramanga for several months or operate a small guesthouse, understanding these markets can be as useful as knowing the shopping centers."
        ]
      },
      {
        heading: "A guide built from real visits",
        paragraphs: [
          "This article will grow with original photographs, observed prices and places we actually visit. It will not become an unexplained collection of paid listings.",
          "The goal is to help a family or guest decide where to eat, shop and begin exploring during their first days in the city."
        ]
      }
    ],
    sources: [
      { label: "Bucaramanga City Hall — Municipal markets", url: "https://www.bucaramanga.gov.co/noticias/transformamos-las-plazas-de-mercado-en-espacios-sostenibles/" }
    ]
  },
  {
    lang: "en",
    slug: "buying-and-renovating-a-house-in-bucaramanga",
    alternateSlug: "comprar-y-renovar-una-casa-en-bucaramanga",
    category: "Buying and renovating",
    title: "Buying and Renovating a Large House in Bucaramanga: What to Review",
    description: "A practical guide to assessing a large house in Bucaramanga for family living, a home office or a boutique accommodation project.",
    intro: "A large, lived-in house offers possibilities that a new apartment may not, but buyers need to look beyond the photographs. Layout, structure, utilities, local rules and renovation costs should be reviewed before making a decision.",
    readingTime: "10 min read",
    heroImage: "/casa/entrada-luces-calidas.webp",
    heroAlt: "Entrance and terrace at Casa 41-111 in Bucaramanga",
    sections: [
      {
        heading: "Begin with the intended use",
        paragraphs: [
          "There is no single correct renovation. A family may prioritize bedrooms, kitchen, accessibility and shared spaces. A professional may need an independent office. A boutique stay requires circulation, privacy, bathrooms, operations, laundry and guest service.",
          "Defining the use before design begins reduces the risk of paying for work that later needs to be undone."
        ]
      },
      {
        heading: "Measure before imagining",
        paragraphs: [
          "The first technical step is a measured architectural survey showing the current layout. Structure, electrical systems, water supply, drainage, ventilation, daylight and roofs should then be assessed.",
          "In a multilevel house, stairs and accessibility also matter. Solutions may range from reorganizing how each floor is used to more substantial interventions designed by qualified professionals."
        ]
      },
      {
        heading: "Underused areas and additional rooms",
        paragraphs: [
          "Casa 41·111 currently has seven bedrooms and areas that do not yet use their full potential. An architect could explore additional rooms, suites, bathrooms or operational spaces through a new internal layout.",
          "No exact room count should be promised without drawings, structural review and planning confirmation. The opportunity lies in having space to study, not in treating an unapproved expansion as certain."
        ]
      },
      {
        heading: "Home, office or boutique accommodation",
        paragraphs: [
          "The multilevel layout may support areas with different degrees of independence. This can suit a multigenerational family, a home with professional workspace or a small guest accommodation concept.",
          "Tourism and commercial uses must be checked with the relevant authorities and may require registrations, safety conditions and tax compliance. Land-use review should come before financial projections."
        ]
      },
      {
        heading: "The commercial unit and the property frontage",
        paragraphs: [
          "A former front parking area was converted into a commercial unit to provide income for the owner. It is currently rented. A buyer should review the lease, rent, term and conditions for continuation or termination.",
          "There is exterior space in front for two standard vehicles or one larger vehicle without blocking the unit’s visibility, but it is not offered as private parking. A future project that requires formal parking should address this during architectural and planning review."
        ]
      },
      {
        heading: "Build a cautious financial model",
        paragraphs: [
          "A hospitality projection cannot simply multiply bedrooms by a nightly rate. Renovation, furniture, permits, platforms, staff, cleaning, utilities, maintenance, taxes and realistic occupancy all need to be included.",
          "A useful model should show conservative, middle and stronger scenarios. Location near UNAB, Cabecera and walking routes is an advantage, but it does not replace technical and financial due diligence."
        ]
      }
    ],
    sources: []
  },
  {
    lang: "en",
    slug: "is-bucaramanga-safe",
    alternateSlug: "es-segura-bucaramanga",
    category: "Moving to the city",
    title: "Is Bucaramanga Safe? An Honest Look at Living in Colombia's City of Parks",
    description: "A candid look at safety, daily life, and what to expect as a foreigner living in Bucaramanga, Colombia — from someone who lives here.",
    intro: "Almost every article about moving to Colombia points you to Medellín or Cartagena. Bucaramanga rarely comes up — and that's exactly why the people who do find it tend to stay. Let's answer the question you actually came here for, without the sales pitch.",
    readingTime: "7 min read",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Family home in Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "Is Bucaramanga safe?",
        paragraphs: [
          "Within Colombia, Bucaramanga is widely known as one of the calmer, more orderly mid-sized cities in the country. It's the capital of Santander, has spring-like weather most of the year, and is nicknamed the City of Parks for the green spaces woven through its neighborhoods.",
          "Like any city, safety depends heavily on where you live and the habits you keep. What surprises most newcomers is how normal daily life feels: people walk to the bakery in the morning, families use the parks in the evening, and residential neighborhoods like Cabecera have a real neighborhood rhythm rather than a tourist one."
        ]
      },
      {
        heading: "The context most people miss",
        paragraphs: [
          "Colombia's reputation is stuck in the 1980s and 90s, but the numbers have moved on dramatically. For perspective: Medellín — once the world's murder capital — now has a homicide rate lower than several U.S. cities like Indianapolis, and Bogotá's is lower than Philadelphia's. Bucaramanga is consistently described as one of the calmer mid-sized cities, well away from the areas that make headlines.",
          "None of this means switching off your judgment. As in any city, there are areas and nightlife zones where petty theft is more common, and it's worth knowing Bucaramanga sits in a seismic zone. But for everyday residential life in an established neighborhood, most residents find it calm — in the best way."
        ]
      },
      {
        heading: "Common-sense habits (the same anywhere)",
        paragraphs: [
          "The safety you actually feel doesn't come from a statistic — it comes from the small and daily: neighbors you recognize, shops within walking distance, and streets with life."
        ],
        bullets: [
          "Choose your neighborhood carefully — it matters more than the city name.",
          "Get to know your block; a place where people know you is the best security there is.",
          "Use the same street awareness you'd use in any city you don't yet know.",
          "Check current, official sources before deciding."
        ]
      },
      {
        heading: "The honest summary",
        paragraphs: [
          "Bucaramanga won't dazzle you in a weekend; it rewards people who stay. If your priority is a safe, green, good-value city with real daily life — and you don't need to be somewhere famous — it deserves a serious look.",
          "This article shares general impressions and publicly available information, not safety guarantees. Conditions change and vary by area: always check official sources and use your own judgment before traveling or relocating."
        ]
      }
    ],
    sources: [
      { label: "Live and Invest Overseas — Bucaramanga", url: "https://www.liveandinvestoverseas.com/country-hub/colombia/bucaramanga/" }
    ]
  },
  {
    lang: "en",
    slug: "bucaramanga-vs-medellin",
    alternateSlug: "bucaramanga-vs-medellin",
    category: "Moving to the city",
    title: "Bucaramanga vs. Medellín: Why Some People Choose the Quieter City",
    description: "An honest comparison of Bucaramanga and Medellín — cost, safety, pace of life, and who each city is really for.",
    intro: "If you've researched moving to Colombia, you've been told to move to Medellín. It's the default answer, and for good reason: more expat community, more English, an easier landing. But 'easiest to land in' and 'best to live in' aren't always the same thing.",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Cost",
        paragraphs: [
          "This is the clearest difference. Bucaramanga is consistently ranked among the best-value cities in Colombia, noticeably cheaper than Medellín for rent, food, and daily life. Your money simply stretches further."
        ]
      },
      {
        heading: "Crowds and prices",
        paragraphs: [
          "Medellín's popularity has a cost: rising rents in expat zones, neighborhoods that can feel more like an international enclave than Colombia, and tourist-inflated prices in the most popular areas. Bucaramanga hasn't been discovered the same way — which is exactly why it still feels local and affordable."
        ]
      },
      {
        heading: "Pace and daily life",
        paragraphs: [
          "Medellín is bigger, busier, more nightlife, more to do. Bucaramanga is calmer, greener, more residential — a city to live in rather than a destination. If you'd take a real routine over a highlight reel, that's a feature."
        ]
      },
      {
        heading: "English and community",
        paragraphs: [
          "Here Medellín wins. It has far more English-speaking services and a larger expat network. In Bucaramanga you'll lean on Spanish sooner — which many people come to see as a benefit, not a barrier."
        ]
      },
      {
        heading: "Who each city is for",
        paragraphs: [
          "The honest truth: for a lot of people, Medellín is a great place to arrive and Bucaramanga is a great place to stay."
        ],
        bullets: [
          "Choose Medellín for the easiest first landing, the biggest expat scene, and the most English-speaking infrastructure.",
          "Choose Bucaramanga for lower costs, a quieter and more authentic daily life, real neighborhoods, and a city not priced up by its own fame."
        ]
      }
    ],
    sources: []
  },
  {
    lang: "en",
    slug: "cost-of-living-bucaramanga",
    alternateSlug: "costo-de-vida-en-bucaramanga",
    category: "Moving to the city",
    title: "The Real Cost of Living in Bucaramanga (2026)",
    description: "What it actually costs to live in Bucaramanga in 2026 — rent, food, utilities, transport — with honest ranges, not a sales pitch.",
    intro: "Most articles quote you Medellín prices. Bucaramanga is cheaper — often meaningfully so — but let's use real, honest ranges rather than a fantasy number.",
    readingTime: "7 min read",
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "Estimates for a single person in Bucaramanga in 2026 range from roughly USD 575 to USD 965 per month excluding rent, depending on lifestyle and source. A family of four typically lands around USD 1,100 to 2,000 excluding rent. Overall, living here runs at a fraction of a comparable North American or European city."
        ]
      },
      {
        heading: "Rent",
        paragraphs: [
          "A one-bedroom apartment in a central area averages somewhere in the USD 178–388/month range depending on source and location; a three-bedroom runs higher. Established, desirable neighborhoods like Cabecera sit toward the higher, more comfortable end — you pay for location, walkability, and services."
        ]
      },
      {
        heading: "Utilities, food and transport",
        paragraphs: [
          "Basic utilities (electricity, water, garbage) for a mid-sized apartment average around USD 105/month. Internet and mobile are inexpensive by North American standards. Groceries are cheap, especially from the local markets rather than imported goods, and a local bus ride costs under USD 1."
        ]
      },
      {
        heading: "Why it matters if you're buying",
        paragraphs: [
          "If you own your home outright, your monthly cost drops dramatically — no rent, just utilities, food, and daily life. For many people that's the whole point of buying here: a low, predictable cost of living in a safe, green city.",
          "Your real cost depends entirely on how you live: markets vs. imported brands, one neighborhood vs. another, renting vs. owning. The numbers above are starting points, not promises."
        ]
      }
    ],
    sources: [
      { label: "Wise — Cost of Living in Bucaramanga", url: "https://wise.com/us/cost-of-living/colombia/bucaramanga" },
      { label: "LivingCost — Bucaramanga", url: "https://livingcost.org/cost/colombia/bucaramanga" }
    ]
  },
  {
    lang: "en",
    slug: "moving-to-colombia-visas-healthcare",
    alternateSlug: "mudarse-a-colombia-visas-y-salud",
    category: "Moving to the city",
    title: "Moving to Colombia: Visas, Healthcare & the Basics",
    description: "A plain-English overview of the visas, healthcare, and practical steps for moving to Colombia — and why buying property can be part of the path.",
    intro: "Colombia has become one of the more welcoming countries in the region for foreigners who want to live, retire, or invest, with a fairly clear legal path from 'trying it out' to 'permanent home.' Here's the plain-language overview.",
    readingTime: "8 min read",
    sections: [
      {
        heading: "The main visa paths (simplified)",
        paragraphs: [
          "Colombia's visa system is organized into a few broad categories covering everything from short stays to residency."
        ],
        bullets: [
          "Visitor (V) visa: tourists, short stays and digital nomads; generally up to around 180 days per year.",
          "Migrant (M) visa: the medium-term path to residency, including through investment, marriage, or a pension.",
          "Resident (R) visa: the long-term status that leads, in time, to citizenship."
        ]
      },
      {
        heading: "The investment route (relevant if you're buying)",
        paragraphs: [
          "A qualifying home purchase can open the investment (M-10) visa, a recognized step toward permanent residency and, in time, citizenship. For 2026 the threshold is 350 monthly minimum salaries (SMMLV), fixed in pesos at about COP 612,816,750 as of January 1, 2026 — roughly USD 155,000–170,000 depending on the exchange rate.",
          "Two key things: immigration evaluates the value registered on the deed (escritura), not any informal figure, so the registered price is what must exceed the threshold. And buying does not grant the visa automatically: you must register the investment through the Banco de la República and apply for the visa separately.",
          "Verify the current threshold before relying on it — it's recalculated every January with the minimum wage, moves with the exchange rate, and the 2026 minimum wage is under legal review. Confirm with Cancillería or an immigration lawyer."
        ]
      },
      {
        heading: "Property rights for foreigners",
        paragraphs: [
          "One of Colombia's real strengths: foreigners have essentially the same property rights as citizens, with no nationality restrictions or restricted zones on most residential property, and you don't even need to be a resident — or in the country — to buy. Colombia also allows dual citizenship."
        ]
      },
      {
        heading: "Healthcare and language",
        paragraphs: [
          "Colombia is known for good-quality, low-cost healthcare, especially in major cities; private insurance and prepaid plans are affordable by North American standards. No language test is required for residency, though Spanish is required for naturalization. In a city like Bucaramanga, learning Spanish isn't optional in daily life — and it's the single biggest thing that will make you feel at home."
        ]
      }
    ],
    sources: [
      { label: "Colombia Visas — 2026 requirements", url: "https://colombiavisas.com/important-colombian-visa-requirement-updates-for-2026/" }
    ]
  }
];

export function getArticle(lang: "es" | "en", slug: string) {
  return (lang === "es" ? spanishArticles : englishArticles).find(article => article.slug === slug);
}
