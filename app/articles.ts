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
  updatedDate?: string;
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
    title: "Vivir en Cabecera del Llano y Altos de Cabecera: guía local",
    description: "Cómo es vivir en Cabecera del Llano y Altos de Cabecera: recorridos a pie, cercanía a la UNAB, parques, servicios y movilidad cotidiana.",
    intro: "Cabecera del Llano concentra buena parte del comercio y los servicios del sector. Altos de Cabecera permite tenerlos cerca y conservar un entorno principalmente residencial. Esta guía explica la diferencia desde la experiencia cotidiana de quienes vivimos aquí.",
    readingTime: "8 minutos",
    updatedDate: "2026-09-09",
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
          "También es una referencia práctica para docentes, profesionales vinculados a la universidad y compradores que quieran comprobar qué servicios tienen alrededor antes de elegir vivienda."
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
        heading: "Una ubicación útil para la vida diaria",
        paragraphs: [
          "Para una familia, la ubicación puede simplificar actividades diarias. Para un profesional independiente, la distribución de una casa amplia puede permitir separar vivienda y trabajo, siempre que la actividad sea compatible con la normativa aplicable.",
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
    description: "Qué revisar antes de comprar una casa para remodelar en Bucaramanga: distribución, inspección técnica, instalaciones, permisos y presupuesto.",
    intro: "Comprar una casa para remodelar permite decidir los acabados y adaptar los espacios, pero la decisión debe partir de una revisión técnica y documental. Esta guía reúne los puntos que conviene estudiar antes de calcular la obra.",
    readingTime: "10 minutos",
    updatedDate: "2026-09-09",
    heroImage: "/casa/entrada-luces-calidas.webp",
    heroAlt: "Entrada y terraza de Casa 41-111 en Bucaramanga",
    sections: [
      {
        heading: "Comenzar por el uso que se quiere dar",
        paragraphs: [
          "No existe una única remodelación correcta. Una familia puede priorizar habitaciones, cocina, accesibilidad y zonas comunes. Un profesional puede necesitar una oficina independiente y una circulación que mantenga la privacidad de la vivienda.",
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
        heading: "Distinguir actualización de intervención estructural",
        paragraphs: [
          "Pintura, iluminación y algunos acabados no plantean las mismas exigencias que demoler muros, modificar redes, redistribuir áreas o ampliar la construcción. Antes de diseñar, un profesional debe identificar qué elementos pueden cambiarse y cuáles hacen parte de la estructura.",
          "Casa 41·111 tiene siete habitaciones y una distribución desarrollada en varios niveles. Esa amplitud permite estudiar alternativas, pero no debe prometerse una nueva distribución sin planos, revisión técnica y validación normativa."
        ]
      },
      {
        heading: "Revisar permisos antes de comenzar",
        paragraphs: [
          "Las obras que cambian el diseño arquitectónico o estructural, aumentan el área construida o modifican el uso pueden requerir una modalidad específica de licencia. El alcance debe consultarse con un arquitecto y la curaduría urbana antes de iniciar trabajos.",
          "También conviene comparar la distribución actual con los planos y documentos disponibles. Si existen diferencias, deben estudiarse antes de firmar una promesa de compraventa."
        ]
      },
      {
        heading: "Estudiar apartaestudios o estadías cortas como posibilidad",
        paragraphs: [
          "Por su amplitud, sus cinco niveles y la existencia de áreas con distintos grados de independencia, una casa como esta también puede interesar a quien quiera estudiar un proyecto de apartaestudios, alojamiento boutique o renta de corta estancia.",
          "La familia propietaria ha identificado al menos tres alojamientos cercanos publicados en Airbnb que ofrecen unidades pequeñas creadas mediante la remodelación de casas. Es una referencia local útil, pero no demuestra que el mismo uso esté aprobado para esta propiedad ni garantiza ocupación o rentabilidad.",
          "Antes de hacer una proyección deben verificarse uso del suelo, licencias, requisitos de seguridad, parqueaderos, operación, impuestos y costos de adecuación con profesionales y autoridades competentes."
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
        heading: "Preparar un presupuesto por etapas",
        paragraphs: [
          "No existe un costo por metro cuadrado que sirva para todas las casas. El valor depende del estado de las redes, cubiertas, baños, cocina, estructura, materiales y alcance de la intervención. Por eso es preferible solicitar presupuestos después de la inspección y reservar un margen para hallazgos no visibles.",
          "También puede estudiarse una ejecución por etapas: primero reparaciones necesarias e instalaciones, luego espacios prioritarios y finalmente acabados. La ubicación y el tamaño importan, pero no sustituyen una evaluación técnica y financiera independiente."
        ]
      }
    ],
    sources: [
      { label: "Ministerio de Vivienda — Modalidades de licencia de construcción", url: "https://www.minvivienda.gov.co/node/1361" },
      { label: "Ministerio de Vivienda — Licencia en modalidad de modificación", url: "https://www.minvivienda.gov.co/node/1365" },
      { label: "Superintendencia de Notariado y Registro — Trámites y servicios", url: "https://www.supernotariado.gov.co/atencion-servicios-ciudadania/tramites-y-servicios/" }
    ]
  },
  {
    lang: "es",
    slug: "es-segura-bucaramanga",
    alternateSlug: "is-bucaramanga-safe",
    category: "Mudarse a la ciudad",
    title: "¿Es segura Bucaramanga? Cómo evaluar la ciudad antes de mudarte",
    description: "Cómo evaluar la seguridad de Bucaramanga y de un barrio antes de comprar o mudarte, usando visitas, contexto local y datos oficiales.",
    intro: "La respuesta responsable no es un sí o un no para toda la ciudad. La seguridad cambia según el barrio, la cuadra, la hora y los hábitos personales. Esta guía propone una forma práctica de evaluar Bucaramanga antes de comprar o mudarte.",
    readingTime: "7 minutos",
    updatedDate: "2026-09-09",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Casa familiar en Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "La seguridad se evalúa por sector, no por una etiqueta",
        paragraphs: [
          "Una cifra general de Bucaramanga no describe lo que ocurre en cada barrio. Para tomar una decisión de vivienda conviene revisar información reciente por zona y combinarla con visitas presenciales, porque la actividad comercial, la iluminación, el transporte y el movimiento peatonal pueden cambiar incluso entre cuadras cercanas.",
          "Los datos abiertos y los informes de las autoridades sirven como punto de partida, pero no constituyen una garantía individual. También importa cómo será tu rutina: horarios de llegada, recorridos a pie, uso del automóvil y cercanía a los lugares que visitarás con frecuencia."
        ]
      },
      {
        heading: "Cómo revisar un barrio antes de comprar",
        paragraphs: [
          "Visita la zona de día y después del anochecer. Recorre las rutas que usarías hacia supermercados, parques, transporte y servicios; observa la iluminación, la visibilidad de los accesos y el movimiento real de la calle.",
          "Habla con residentes, administradores y comerciantes cercanos, haciendo preguntas concretas sobre la cuadra. Después contrasta esas impresiones con los datos del municipio y con información reciente de las autoridades."
        ],
        bullets: [
          "Haz más de una visita y cambia la hora y el día.",
          "Prueba el trayecto que realizarías habitualmente.",
          "Pregunta por iluminación, accesos, transporte y actividad nocturna.",
          "Consulta datos oficiales recientes y evita decidir por rankings antiguos."
        ]
      },
      {
        heading: "Altos de Cabecera desde la experiencia cotidiana",
        paragraphs: [
          "La familia propietaria conoce Altos de Cabecera como un sector residencial consolidado, cercano a comercio y servicios. Esa experiencia ayuda a explicar la vida cotidiana alrededor de la casa, pero no reemplaza la evaluación independiente de cada comprador.",
          "Si estás considerando Casa 41·111, podemos coordinar una visita o un recorrido en video para mostrar sus accesos y alrededores. Recomendamos que cada interesado verifique personalmente el sector y consulte información oficial actualizada antes de decidir."
        ]
      },
      {
        heading: "Una conclusión responsable",
        paragraphs: [
          "Bucaramanga puede funcionar muy bien para algunas personas y no para otras. La mejor respuesta surge de combinar datos recientes, observación directa y compatibilidad con tu rutina, no de promesas generales sobre una ciudad completa.",
          "Este contenido es informativo y no ofrece garantías de seguridad. Las condiciones pueden cambiar; ante una emergencia en Colombia, utiliza los canales oficiales de atención."
        ]
      }
    ],
    sources: [
      { label: "Datos Abiertos Colombia — Información delictiva de Bucaramanga", url: "https://www.datos.gov.co/" },
      { label: "Alcaldía de Bucaramanga — Seguridad y Convivencia Ciudadana", url: "https://www.bucaramanga.gov.co/" }
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
    title: "Mudarse a Colombia: visas, salud y pasos que debes verificar",
    description: "Guía inicial para entender visas, compra de vivienda y afiliación en salud al mudarse a Colombia, con fuentes oficiales para verificar requisitos.",
    intro: "Mudarse a Colombia implica coordinar asuntos migratorios, vivienda, salud y finanzas. Las reglas dependen de la situación de cada persona y pueden cambiar, así que esta guía explica el marco general y señala qué debe verificarse en fuentes oficiales antes de tomar decisiones.",
    readingTime: "8 minutos",
    updatedDate: "2026-09-09",
    sections: [
      {
        heading: "Comprar una propiedad y obtener una visa son procesos distintos",
        paragraphs: [
          "Una persona extranjera puede estudiar la compra de un inmueble sin suponer que esa operación le concede automáticamente permiso para vivir en Colombia. La compraventa, el registro de la inversión y la solicitud de visa tienen requisitos y autoridades diferentes.",
          "Si la decisión de compra depende de obtener una visa, conviene confirmar primero la categoría aplicable con la Cancillería y recibir asesoría jurídica independiente. No debe firmarse ni transferirse dinero basándose únicamente en una cifra vista en una guía comercial."
        ]
      },
      {
        heading: "Las categorías V, M y R, en términos generales",
        paragraphs: [
          "La Cancillería organiza las visas en tres grupos generales: Visitante (V), Migrante (M) y Residente (R). Dentro de cada grupo existen tipos específicos con actividades autorizadas, vigencias, documentos y restricciones propias.",
          "La visa V está pensada para diferentes visitas y no equivale por sí sola a residencia. Las visas M cubren varias situaciones de permanencia de mediano plazo, y las visas R corresponden a supuestos específicos de residencia. El nombre de una categoría no permite concluir que una persona califica: debe revisarse el tipo exacto."
        ]
      },
      {
        heading: "Cuando una inversión inmobiliaria puede ser relevante",
        paragraphs: [
          "La regulación contempla tipos de visa relacionados con inversión, incluida la inversión inmobiliaria cuando se cumplen las condiciones vigentes. Esto no convierte cualquier compra en una ruta migratoria ni garantiza la aprobación de una solicitud.",
          "Los umbrales, documentos, registros y condiciones deben consultarse directamente en la ficha oficial del tipo de visa el día de preparar la operación. Además, el comprador debe revisar por separado el título, los impuestos, la forma de pago y las obligaciones cambiarias de la compraventa."
        ]
      },
      {
        heading: "Salud: la afiliación depende de tu situación migratoria",
        paragraphs: [
          "El acceso y la afiliación al Sistema General de Seguridad Social en Salud dependen, entre otros factores, de la condición migratoria, los documentos válidos y la situación laboral o económica de la persona. El Ministerio de Salud publica orientaciones para población extranjera y migrante.",
          "Antes de viajar, confirma qué cobertura tendrás durante la transición y qué documentos necesitarás para afiliarte. Los seguros privados y planes complementarios tienen condiciones, exclusiones y precios propios que deben compararse directamente con cada entidad."
        ]
      },
      {
        heading: "Lista práctica antes de mudarte",
        paragraphs: [
          "Verifica tu categoría migratoria, vigencia del pasaporte, cobertura de salud, tratamiento tributario y procedimiento para transferir fondos. Si vas a comprar desde otro país, revisa también nuestra guía dedicada a la compra de propiedad en Colombia desde el exterior.",
          "Este artículo ofrece información general y no reemplaza asesoría migratoria, jurídica, tributaria o médica. Consulta siempre las páginas oficiales y profesionales independientes para tu caso."
        ]
      }
    ],
    sources: [
      { label: "Cancillería de Colombia — Tipos de visa", url: "https://www.cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/visa/tipos-de-visa" },
      { label: "Cancillería de Colombia — Resolución 5477 de 2022", url: "https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_minrelaciones_5477_2022.htm" },
      { label: "Ministerio de Salud — Afiliación de extranjeros al sistema de salud", url: "https://www2.minsalud.gov.co/proteccionsocial/Paginas/afiliacion-al-sistema-de-seguridad-social-en-salud-de-extranjeros-y-colombianos-retornados.aspx" }
    ]
  },
  {
    lang: "es",
    slug: "comprar-propiedad-en-colombia-desde-el-exterior",
    alternateSlug: "buying-property-in-colombia-from-abroad",
    category: "Comprar desde el exterior",
    title: "Comprar propiedad en Colombia desde el exterior: guía inicial",
    description: "Guía para colombianos y extranjeros que desean comprar propiedad en Colombia desde otro país: revisión legal, poderes, pagos y registro.",
    intro: "Comprar una propiedad en Colombia viviendo en otro país requiere coordinación jurídica, notarial y cambiaria. Esta guía explica el proceso general y las preguntas que conviene resolver antes de enviar dinero o firmar documentos.",
    readingTime: "7 minutos",
    updatedDate: "2026-09-09",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Casa en venta en Bucaramanga, Colombia, vista desde la calle",
    sections: [
      {
        heading: "Primero: confirma quién compra y desde dónde llegan los fondos",
        paragraphs: [
          "Ser colombiano no significa necesariamente ser residente en Colombia para efectos cambiarios o tributarios. Antes de estructurar la operación conviene determinar si el comprador actúa como residente o no residente y desde qué país se transferirá el dinero.",
          "Cuando un no residente adquiere un inmueble en Colombia, la operación puede tener obligaciones de registro como inversión internacional. El Banco de la República mantiene las instrucciones y formularios aplicables; el banco o intermediario cambiario debe recibir la información correcta desde el inicio."
        ]
      },
      {
        heading: "Revisa la propiedad antes de comprometerte",
        paragraphs: [
          "Una videollamada y las fotografías sirven para conocer la casa, pero no sustituyen la revisión documental. Un abogado independiente puede estudiar el certificado de tradición y libertad, la escritura, la situación tributaria, las limitaciones al dominio y cualquier condición relevante para la compraventa.",
          "También es importante confirmar que las áreas, los usos posibles y las características anunciadas coincidan con los documentos y con lo que puede verificarse físicamente. Las ideas de remodelación o cambio de uso requieren sus propios estudios y permisos."
        ]
      },
      {
        heading: "Si no puedes viajar, pregunta por el poder adecuado",
        paragraphs: [
          "La Cancillería de Colombia ofrece trámites consulares para poderes, reconocimiento de firmas y autenticación de documentos. El tipo de poder y sus formalidades dependen del acto que se vaya a realizar, por lo que debe prepararlo o revisarlo un abogado o la notaría que intervendrá.",
          "No entregues un poder más amplio de lo necesario. Debe identificar con precisión a la persona autorizada, la propiedad y las facultades otorgadas."
        ]
      },
      {
        heading: "Organiza el pago y conserva los soportes",
        paragraphs: [
          "No envíes fondos a cuentas de terceros sin que la estructura de pago haya sido revisada. El precio, la moneda, las fechas y las condiciones deben quedar documentados en la promesa de compraventa y en los demás documentos de la operación.",
          "Conserva comprobantes bancarios, declaraciones de cambio y comunicaciones relacionadas con el origen y destino de los fondos. Un intermediario del mercado cambiario puede indicar cómo canalizar la operación según la condición del comprador."
        ]
      },
      {
        heading: "Cómo conocer Casa 41·111 desde otro país",
        paragraphs: [
          "Casa 41·111 está en Altos de Cabecera, Bucaramanga, y se ofrece directamente por la familia propietaria. Podemos realizar un recorrido privado por videollamada, responder preguntas sobre la distribución y coordinar una visita con una persona de confianza del comprador.",
          "La información de esta página es general y no reemplaza asesoría jurídica, tributaria, notarial o cambiaria. Cada comprador debe recibir orientación independiente según su residencia, nacionalidad y forma de pago."
        ]
      }
    ],
    sources: [
      { label: "Banco de la República — Inversión extranjera en Colombia", url: "https://www.banrep.gov.co/es/politica-monetaria-cambiaria/regulacion-operaciones-cambiarias/inversion-extranjera-colombia-colombiana-exterior" },
      { label: "Banco de la República — Generalidades de inversiones internacionales", url: "https://www.banrep.gov.co/es/politica-monetaria-cambiaria/regulacion-operaciones-cambiarias/inversiones-internacionales-generalidades" },
      { label: "Cancillería de Colombia — Escrituras públicas y poderes en el exterior", url: "https://www.cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/tramites-en-el-exterior/escrituras-publicas" },
      { label: "Superintendencia de Notariado y Registro — Trámites y servicios", url: "https://www.supernotariado.gov.co/atencion-servicios-ciudadania/tramites-y-servicios/" }
    ]
  },
  {
    lang: "es",
    slug: "casas-grandes-en-venta-en-bucaramanga",
    alternateSlug: "large-houses-for-sale-in-bucaramanga",
    category: "Comprar en Bucaramanga",
    title: "Casas grandes en venta en Bucaramanga: qué revisar antes de comprar",
    description: "Guía para buscar una casa grande en Bucaramanga: distribución, niveles, instalaciones, documentos, accesibilidad y espacios independientes.",
    intro: "Buscar una casa grande exige mirar más allá del número total de metros cuadrados. La forma en que se distribuyen, el estado de las instalaciones, la accesibilidad y la documentación determinan si el espacio realmente responde a las necesidades del comprador.",
    readingTime: "7 minutos",
    updatedDate: "2026-09-09",
    heroImage: "/casa/sala-principal.webp",
    heroAlt: "Sala amplia de una casa familiar en Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "Definir cuánto espacio se necesita",
        paragraphs: [
          "Una familia numerosa puede necesitar habitaciones, zonas de estudio y áreas comunes separadas. Un profesional que trabaja desde casa puede valorar una oficina con acceso independiente. Antes de comparar propiedades conviene escribir qué espacios son indispensables y cuáles podrían adaptarse después.",
          "El área construida por sí sola no responde esas preguntas. Dos casas con una superficie similar pueden sentirse muy distintas según el tamaño de las habitaciones, la cantidad de pasillos, la entrada de luz y la relación entre los niveles."
        ]
      },
      {
        heading: "Revisar niveles y accesibilidad",
        paragraphs: [
          "En una casa de varios niveles, las escaleras forman parte de la vida diaria. El comprador debe pensar quién utilizará cada piso, si hay adultos mayores o niños y si la distribución permite concentrar las actividades principales en los niveles más cómodos.",
          "Una visita debe incluir el recorrido completo, no solo las habitaciones más atractivas. También conviene observar descansos, barandas, pendientes, iluminación y posibilidades reales de adaptación."
        ]
      },
      {
        heading: "Solicitar una revisión técnica y documental",
        paragraphs: [
          "En una propiedad usada deben examinarse cubiertas, humedades, redes eléctricas e hidráulicas, ventilación y elementos estructurales visibles. Esa observación inicial no reemplaza la inspección de un arquitecto o ingeniero independiente.",
          "También es necesario comparar la realidad física con la escritura, el certificado de tradición y libertad, la información catastral y los planos o licencias disponibles. Cualquier diferencia debe entenderse antes de comprometer dinero."
        ]
      },
      {
        heading: "Entender los espacios independientes",
        paragraphs: [
          "Algunas casas incluyen una oficina, local o zona que puede funcionar con cierta independencia. Si el espacio está arrendado, el comprador debe revisar el contrato, el canon, la vigencia y las condiciones de continuidad o terminación.",
          "Tener un área independiente puede ser útil para estudiar una vivienda con trabajo, apartaestudios o un alojamiento de corta estancia. Esto no autoriza por sí solo ninguna actividad: el uso permitido y las adecuaciones necesarias deben confirmarse según la normativa aplicable al inmueble."
        ]
      },
      {
        heading: "Una casa amplia disponible en Altos de Cabecera",
        paragraphs: [
          "Casa 41·111 tiene aproximadamente 540 m² construidos, siete habitaciones, cinco baños, terraza, patios interiores y un local independiente actualmente arrendado. Su distribución se desarrolla en cinco niveles y no cuenta con garaje privado interior.",
          "La propiedad se ofrece directamente por la familia propietaria por COP $1.800 millones. Las fotografías, características completas y la opción de solicitar una visita presencial o por videollamada están disponibles en Live Bucaramanga."
        ]
      }
    ],
    sources: [
      { label: "Superintendencia de Notariado y Registro — Trámites y servicios", url: "https://www.supernotariado.gov.co/atencion-servicios-ciudadania/tramites-y-servicios/" },
      { label: "Ministerio de Vivienda — Modalidades de licencia de construcción", url: "https://www.minvivienda.gov.co/node/1361" }
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
    title: "Living in Cabecera del Llano and Altos de Cabecera: A Local Guide",
    description: "A practical guide to Cabecera del Llano and Altos de Cabecera, including walkability, UNAB university, parks, services and everyday mobility.",
    intro: "Cabecera del Llano brings together many of the area’s shops and services. Altos de Cabecera keeps them nearby while retaining a mainly residential setting. This guide explains the difference from the perspective of people who live here.",
    readingTime: "8 min read",
    updatedDate: "2026-09-09",
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
          "It is also a practical reference point for faculty, university staff and buyers who want to verify which services are nearby before choosing a home."
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
        heading: "A practical location for daily life",
        paragraphs: [
          "For a family, the location can simplify daily routines. For an independent professional, a large house may make it possible to separate home and work, provided the activity complies with applicable rules.",
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
    description: "What to review before buying a house to renovate in Bucaramanga: layout, technical inspection, utilities, permits and budgeting.",
    intro: "Buying a house to renovate allows the owner to choose finishes and adapt the layout, but the decision should begin with technical and documentary review. This guide covers the points to examine before estimating the work.",
    readingTime: "10 min read",
    updatedDate: "2026-09-09",
    heroImage: "/casa/entrada-luces-calidas.webp",
    heroAlt: "Entrance and terrace at Casa 41-111 in Bucaramanga",
    sections: [
      {
        heading: "Begin with the intended use",
        paragraphs: [
          "There is no single correct renovation. A family may prioritize bedrooms, kitchen, accessibility and shared spaces. A professional may need an independent office and circulation that protects the privacy of the home.",
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
        heading: "Separate updating from structural work",
        paragraphs: [
          "Painting, lighting and some finishes do not raise the same questions as removing walls, changing utilities, redistributing rooms or expanding the building. A qualified professional should identify what can change and what forms part of the structure before design begins.",
          "Casa 41·111 has seven bedrooms and a multilevel layout. Its size allows alternatives to be studied, but a new layout should not be promised without drawings, technical review and confirmation of applicable rules."
        ]
      },
      {
        heading: "Check permits before work begins",
        paragraphs: [
          "Work that changes architectural or structural design, increases the built area or changes the authorized use may require a specific type of construction permit. The scope should be reviewed with an architect and the local planning authority before work begins.",
          "The current layout should also be compared with available plans and property documents. Any difference should be understood before a purchase agreement is signed."
        ]
      },
      {
        heading: "Study apartments or short stays as a possibility",
        paragraphs: [
          "Because of its size, five-level layout and areas with varying degrees of independence, a house like this may also interest a buyer who wants to study a serviced-apartment, boutique accommodation or short-term rental concept.",
          "The owning family has identified at least three nearby Airbnb listings offering small units created by remodeling houses. This is a useful local reference, but it does not show that the same use is approved for this property or guarantee occupancy or returns.",
          "Before preparing projections, the buyer should verify land use, permits, safety requirements, parking, operations, taxes and renovation costs with qualified professionals and the relevant authorities."
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
        heading: "Prepare a phased budget",
        paragraphs: [
          "There is no single cost per square meter that applies to every house. Cost depends on the condition of utilities, roofs, bathrooms, kitchen, structure, materials and the scope of work. Estimates should follow the inspection and include an allowance for concealed conditions.",
          "Work can also be planned in stages: necessary repairs and utilities first, priority rooms next and finishes afterward. Location and size matter, but they do not replace independent technical and financial review."
        ]
      }
    ],
    sources: [
      { label: "Colombian Ministry of Housing — Types of construction permits", url: "https://www.minvivienda.gov.co/node/1361" },
      { label: "Colombian Ministry of Housing — Modification permits", url: "https://www.minvivienda.gov.co/node/1365" },
      { label: "Superintendence of Notaries and Registration — Services", url: "https://www.supernotariado.gov.co/atencion-servicios-ciudadania/tramites-y-servicios/" }
    ]
  },
  {
    lang: "en",
    slug: "is-bucaramanga-safe",
    alternateSlug: "es-segura-bucaramanga",
    category: "Moving to the city",
    title: "Is Bucaramanga Safe? How to Evaluate the City Before Moving",
    description: "How to assess safety in Bucaramanga and a specific neighborhood before buying or moving, using visits, local context and official data.",
    intro: "The responsible answer is not a simple yes or no for an entire city. Safety varies by neighborhood, block, time of day and personal routine. This guide offers a practical way to evaluate Bucaramanga before buying or moving.",
    readingTime: "7 min read",
    updatedDate: "2026-09-09",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "Family home in Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "Assess the area, not a citywide label",
        paragraphs: [
          "A citywide statistic cannot describe every part of Bucaramanga. A housing decision calls for recent information at neighborhood level and in-person visits, because lighting, commercial activity, transit and pedestrian traffic may change between nearby blocks.",
          "Official data is a useful starting point, but it is not an individual guarantee. Your expected routine also matters: arrival times, walking routes, transportation and proximity to the places you will use regularly."
        ]
      },
      {
        heading: "How to evaluate a neighborhood before buying",
        paragraphs: [
          "Visit during the day and after dark. Walk the routes you would use to reach supermarkets, parks, transportation and services; observe lighting, entrance visibility and actual street activity.",
          "Speak with residents, building managers and nearby businesses, asking specific questions about the block. Then compare those impressions with municipal data and current information from authorities."
        ],
        bullets: [
          "Visit more than once and vary the time and day.",
          "Test the route you would normally travel.",
          "Ask about lighting, access, transportation and nighttime activity.",
          "Use current official data rather than old rankings."
        ]
      },
      {
        heading: "Altos de Cabecera in everyday life",
        paragraphs: [
          "The owning family knows Altos de Cabecera as an established residential area near shops and services. That experience helps describe daily life around the house, but it does not replace each buyer's independent assessment.",
          "If you are considering Casa 41·111, we can arrange a visit or live video tour showing its access points and surroundings. We recommend that every buyer evaluate the area personally and consult current official information before deciding."
        ]
      },
      {
        heading: "A responsible conclusion",
        paragraphs: [
          "Bucaramanga may suit some people very well and others less so. The best answer combines recent data, direct observation and compatibility with your routine, rather than broad promises about an entire city.",
          "This content is informational and does not guarantee safety. Conditions may change; use official emergency channels when assistance is required in Colombia."
        ]
      }
    ],
    sources: [
      { label: "Colombia Open Data — Bucaramanga crime information", url: "https://www.datos.gov.co/" },
      { label: "Bucaramanga City Government — Safety and coexistence", url: "https://www.bucaramanga.gov.co/" }
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
    title: "Moving to Colombia: Visas, Healthcare and What to Verify",
    description: "A starting guide to visas, home purchases and healthcare enrollment when moving to Colombia, with official sources for current requirements.",
    intro: "Moving to Colombia involves coordinating immigration, housing, healthcare and finances. Rules depend on each person's circumstances and may change, so this guide explains the general framework and what to verify in official sources before making decisions.",
    readingTime: "8 min read",
    updatedDate: "2026-09-09",
    sections: [
      {
        heading: "Buying property and obtaining a visa are separate processes",
        paragraphs: [
          "A foreign buyer may explore purchasing real estate without assuming that the transaction automatically grants permission to live in Colombia. The purchase, investment registration and visa application involve different requirements and authorities.",
          "If a purchase decision depends on obtaining a visa, first confirm the applicable category with Colombia's Ministry of Foreign Affairs and obtain independent legal advice. Do not sign or transfer funds based only on a figure published in a commercial guide."
        ]
      },
      {
        heading: "The V, M and R categories in general terms",
        paragraphs: [
          "Colombia's Ministry of Foreign Affairs organizes visas into three broad groups: Visitor (V), Migrant (M) and Resident (R). Each group contains specific visa types with their own authorized activities, validity periods, documentation and restrictions.",
          "A V visa covers different kinds of visits and does not by itself amount to resident status. M visas cover several medium-term circumstances, while R visas apply to specific residence cases. A category name alone does not show that someone qualifies; the exact visa type must be reviewed."
        ]
      },
      {
        heading: "When a real-estate investment may be relevant",
        paragraphs: [
          "Colombian regulations include visa types connected to investment, including real-estate investment when current conditions are met. This does not make every purchase an immigration route or guarantee approval.",
          "Thresholds, documents, registrations and conditions should be checked on the official visa page when preparing the transaction. The buyer must separately review title, taxes, payment structure and foreign-exchange obligations for the purchase."
        ]
      },
      {
        heading: "Healthcare enrollment depends on immigration status",
        paragraphs: [
          "Access to and enrollment in Colombia's General Social Security Health System depend, among other factors, on immigration status, valid identification and the person's employment or financial circumstances. The Ministry of Health publishes guidance for foreign and migrant residents.",
          "Before traveling, confirm what coverage you will have during the transition and which documents you will need for enrollment. Private insurance and supplementary plans have their own eligibility rules, exclusions and prices that should be compared directly with each provider."
        ]
      },
      {
        heading: "A practical checklist before moving",
        paragraphs: [
          "Confirm your immigration category, passport validity, healthcare coverage, tax treatment and procedure for transferring funds. If you plan to buy from another country, also read our dedicated guide to buying property in Colombia from abroad.",
          "This article provides general information and does not replace immigration, legal, tax or medical advice. Always consult official pages and independent professionals about your circumstances."
        ]
      }
    ],
    sources: [
      { label: "Colombian Ministry of Foreign Affairs — Visa types", url: "https://www.cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/visa/tipos-de-visa" },
      { label: "Colombian Ministry of Foreign Affairs — Resolution 5477 of 2022", url: "https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_minrelaciones_5477_2022.htm" },
      { label: "Ministry of Health — Health-system enrollment for foreigners", url: "https://www2.minsalud.gov.co/proteccionsocial/Paginas/afiliacion-al-sistema-de-seguridad-social-en-salud-de-extranjeros-y-colombianos-retornados.aspx" }
    ]
  },
  {
    lang: "en",
    slug: "buying-property-in-colombia-from-abroad",
    alternateSlug: "comprar-propiedad-en-colombia-desde-el-exterior",
    category: "Buying from abroad",
    title: "Buying Property in Colombia From Abroad: A Starting Guide",
    description: "A practical starting guide for Colombians abroad and foreign buyers: legal review, powers of attorney, international payments and registration.",
    intro: "Buying property in Colombia while living in another country involves legal, notarial and foreign-exchange steps. This guide explains the general process and the questions to resolve before transferring funds or signing documents.",
    readingTime: "7 min read",
    updatedDate: "2026-09-09",
    heroImage: "/casa/fachada-cielo-azul.webp",
    heroAlt: "House for sale in Bucaramanga, Colombia, viewed from the street",
    sections: [
      {
        heading: "Start by confirming who is buying and where the funds originate",
        paragraphs: [
          "Citizenship and residency are not always the same for Colombian foreign-exchange or tax purposes. Before structuring the purchase, determine whether the buyer is treated as a resident or non-resident and from which country the funds will be transferred.",
          "When a non-resident acquires real estate in Colombia, international investment registration requirements may apply. Banco de la República maintains the applicable instructions, and the bank or foreign-exchange intermediary should receive accurate information from the beginning."
        ]
      },
      {
        heading: "Review the property before making a commitment",
        paragraphs: [
          "Video calls and photographs help you understand a property, but they do not replace document review. An independent Colombian lawyer can examine the title certificate, deed, tax position, limitations affecting ownership and other conditions relevant to the transaction.",
          "Confirm that the areas, possible uses and advertised characteristics match the documents and the physical property. Renovations or changes of use require separate professional assessments and approvals."
        ]
      },
      {
        heading: "If you cannot travel, ask which power of attorney is appropriate",
        paragraphs: [
          "Colombian consulates provide services related to powers of attorney, signature recognition and document authentication. The correct document and formalities depend on the transaction, so a Colombian lawyer or the notary involved should prepare or review it.",
          "Avoid granting broader powers than necessary. The document should clearly identify the authorized person, the property and the specific authority being granted."
        ]
      },
      {
        heading: "Plan the payment and keep every record",
        paragraphs: [
          "Do not transfer funds to unrelated third-party accounts without professional review. The price, currency, dates and conditions should be documented in the purchase agreement and the other transaction documents.",
          "Keep bank receipts, foreign-exchange declarations and communications showing the origin and destination of the funds. A Colombian foreign-exchange intermediary can explain the correct process for the buyer's circumstances."
        ]
      },
      {
        heading: "How to view Casa 41·111 from another country",
        paragraphs: [
          "Casa 41·111 is located in Altos de Cabecera, Bucaramanga, and is offered directly by the owning family. We can provide a private live video tour, answer questions about the layout and coordinate an in-person visit with someone the buyer trusts.",
          "This page provides general information and does not replace legal, tax, notarial or foreign-exchange advice. Each buyer should obtain independent guidance based on residency, nationality and method of payment."
        ]
      }
    ],
    sources: [
      { label: "Banco de la República — Foreign investment in Colombia", url: "https://www.banrep.gov.co/es/politica-monetaria-cambiaria/regulacion-operaciones-cambiarias/inversion-extranjera-colombia-colombiana-exterior" },
      { label: "Banco de la República — International investment overview", url: "https://www.banrep.gov.co/es/politica-monetaria-cambiaria/regulacion-operaciones-cambiarias/inversiones-internacionales-generalidades" },
      { label: "Colombian Ministry of Foreign Affairs — Public deeds and powers of attorney abroad", url: "https://www.cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/tramites-en-el-exterior/escrituras-publicas" },
      { label: "Superintendence of Notaries and Registration — Services", url: "https://www.supernotariado.gov.co/atencion-servicios-ciudadania/tramites-y-servicios/" }
    ]
  },
  {
    lang: "en",
    slug: "large-houses-for-sale-in-bucaramanga",
    alternateSlug: "casas-grandes-en-venta-en-bucaramanga",
    category: "Buying in Bucaramanga",
    title: "Large Houses for Sale in Bucaramanga: What to Review Before Buying",
    description: "A guide to finding a large house in Bucaramanga: layout, levels, utilities, documents, accessibility and independent spaces.",
    intro: "Searching for a large house requires more than comparing total floor area. Layout, utilities, accessibility and property documents determine whether that space actually fits the buyer’s needs.",
    readingTime: "7 min read",
    updatedDate: "2026-09-09",
    heroImage: "/casa/sala-principal.webp",
    heroAlt: "Spacious living room in a family house in Altos de Cabecera, Bucaramanga",
    sections: [
      {
        heading: "Define how much space is needed",
        paragraphs: [
          "A large family may need bedrooms, study areas and separate shared spaces. A professional working from home may value an office with an independent entrance. Before comparing properties, buyers should identify which rooms are essential and which could be adapted later.",
          "Built area alone cannot answer those questions. Two houses with a similar floor area can feel very different depending on bedroom sizes, corridors, daylight and how the floors connect."
        ]
      },
      {
        heading: "Review levels and accessibility",
        paragraphs: [
          "In a multilevel house, stairs are part of everyday life. Buyers should consider who will use each floor, whether children or older adults will live there and whether essential activities can be concentrated on the most convenient levels.",
          "A viewing should cover the entire property, not only its most attractive rooms. Landings, handrails, slopes, lighting and realistic adaptation options also deserve attention."
        ]
      },
      {
        heading: "Request technical and documentary review",
        paragraphs: [
          "A used property should be checked for roof condition, moisture, electrical and water systems, ventilation and visible structural concerns. This initial observation does not replace an inspection by an independent architect or engineer.",
          "The physical property should also be compared with the deed, title certificate, cadastral information and available plans or permits. Any difference should be understood before funds are committed."
        ]
      },
      {
        heading: "Understand independent spaces",
        paragraphs: [
          "Some houses include an office, shop or other area with a degree of independence. If that space is rented, buyers should review the lease, rent, term and conditions for continuation or termination.",
          "An independent area can be useful when studying a home-and-work arrangement, small apartments or short-term accommodation. It does not automatically authorize any activity: permitted use and required alterations must be confirmed under the rules that apply to the property."
        ]
      },
      {
        heading: "A large house available in Altos de Cabecera",
        paragraphs: [
          "Casa 41·111 has approximately 540 m² of built area, seven bedrooms, five bathrooms, a terrace, internal patios and an independent commercial unit that is currently rented. The house is arranged over five levels and does not have a private internal garage.",
          "The property is offered directly by the owning family for COP $1.8 billion. Photographs, full details and the option to request an in-person or live video viewing are available through Live Bucaramanga."
        ]
      }
    ],
    sources: [
      { label: "Superintendence of Notaries and Registration — Services", url: "https://www.supernotariado.gov.co/atencion-servicios-ciudadania/tramites-y-servicios/" },
      { label: "Colombian Ministry of Housing — Types of construction permits", url: "https://www.minvivienda.gov.co/node/1361" }
    ]
  }
];

export function getArticle(lang: "es" | "en", slug: string) {
  return (lang === "es" ? spanishArticles : englishArticles).find(article => article.slug === slug);
}
