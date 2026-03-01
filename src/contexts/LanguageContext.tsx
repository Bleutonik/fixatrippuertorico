import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.experiences": { en: "EXPERIENCES", es: "EXPERIENCIAS" },
  "nav.boat": { en: "FIX A BOAT", es: "FIX A BOAT" },
  "nav.chef": { en: "FIX A CHEF", es: "FIX A CHEF" },
  "nav.transport": { en: "FIX A TRANSPORT", es: "FIX A TRANSPORT" },
  "nav.wellness": { en: "FIX A WELLNESS", es: "FIX A WELLNESS" },
  "nav.contact": { en: "CONTACT", es: "CONTACTO" },

  // Hero
  "hero.title": { en: "Book Unique Experiences", es: "Reserva Experiencias Únicas" },
  "hero.subtitle": { en: "Explore, connect, and enjoy—anytime, anywhere.", es: "Explora, conecta y disfruta—en cualquier momento, en cualquier lugar." },
  "hero.search": { en: "Search experiences, tours, or activities...", es: "Buscar experiencias, tours o actividades..." },

  // About
  "about.title": { en: "Fix a Trip to Puerto Rico: Enjoy the Perfect Vacation.", es: "Fix a Trip a Puerto Rico: Disfruta las Vacaciones Perfectas." },
  "about.subtitle": { en: "Seamless travel planning for your Island of Enchantment.", es: "Planificación de viajes sin complicaciones para la Isla del Encanto." },
  "about.experts": { en: "Expert Travel Agents", es: "Agentes de Viaje Expertos" },
  "about.experts.desc": { en: "Experienced local experts to craft a perfect and personalized itinerary.", es: "Expertos locales con experiencia para crear un itinerario perfecto y personalizado." },
  "about.guidelines": { en: "Travel Guidelines", es: "Guías de Viaje" },
  "about.guidelines.desc": { en: "Essential tips and updated information for your journey.", es: "Consejos esenciales e información actualizada para tu viaje." },
  "about.callus": { en: "Call Us", es: "Llámanos" },
  "about.explore": { en: "Explore Activities", es: "Explorar Actividades" },

  // Categories
  "categories.title": { en: "Search by Categories", es: "Buscar por Categorías" },
  "categories.subtitle": { en: "Explore the tours chosen and recommended by a multitude of travelers.", es: "Explora los tours elegidos y recomendados por multitud de viajeros." },

  // Featured
  "featured.price": { en: "Price From:", es: "Precio Desde:" },
  "featured.duration": { en: "Duration", es: "Duración" },
  "featured.age": { en: "Age", es: "Edad" },
  "featured.discover": { en: "Discover More", es: "Descubrir Más" },
  "featured.rating": { en: "rating", es: "valoraciones" },

  // Best selling
  "bestselling.title": { en: "Our best-selling tours", es: "Nuestros tours más vendidos" },
  "bestselling.subtitle": { en: "Explore the tours chosen and recommended by a multitude of travelers.", es: "Explora los tours elegidos y recomendados por multitud de viajeros." },

  // Popular places
  "popular.title": { en: "Popular Places", es: "Lugares Populares" },
  "popular.tour": { en: "Tour", es: "Tour" },
  "popular.tours": { en: "Tours", es: "Tours" },

  // Reviews
  "reviews.title": { en: "Real reviews from real travelers", es: "Opiniones reales de viajeros reales" },

  // Tour card
  "card.ages": { en: "Ages", es: "Años" },

  // Tour detail
  "detail.back": { en: "Back to Tours", es: "Volver a Tours" },
  "detail.about": { en: "About this Experience", es: "Sobre esta Experiencia" },
  "detail.highlights": { en: "Tour Highlights", es: "Puntos Destacados" },
  "detail.experience": { en: "The Experience", es: "La Experiencia" },
  "detail.included": { en: "What's Included", es: "Qué Incluye" },
  "detail.notincluded": { en: "What's Not Included", es: "Qué No Incluye" },
  "detail.pricefrom": { en: "Price From", es: "Precio Desde" },
  "detail.perperson": { en: "per person", es: "por persona" },
  "detail.duration": { en: "Duration", es: "Duración" },
  "detail.location": { en: "Location", es: "Ubicación" },
  "detail.agerequirement": { en: "Age Requirement", es: "Edad Mínima" },
  "detail.booknow": { en: "Book Now", es: "Reservar Ahora" },
  "detail.freecancel": { en: "Free cancellation available", es: "Cancelación gratuita disponible" },
  "detail.reviews": { en: "reviews", es: "opiniones" },
  "detail.notfound": { en: "Tour not found", es: "Tour no encontrado" },
  "detail.related": { en: "You might also like", es: "También te puede gustar" },

  // Tours page
  "tours.title": { en: "Experiences", es: "Experiencias" },
  "tours.subtitle": { en: "Explore all our tours and activities in Puerto Rico.", es: "Explora todos nuestros tours y actividades en Puerto Rico." },
  "tours.results": { en: "Results for", es: "Resultados para" },
  "tours.all": { en: "All", es: "Todos" },
  "tours.notours": { en: "No tours found.", es: "No se encontraron tours." },
  "tours.locationresults": { en: "Tours in", es: "Tours en" },
  "tours.filters": { en: "Filters", es: "Filtros" },
  "tours.sortdefault": { en: "Sort by: Default", es: "Ordenar: Predeterminado" },
  "tours.sortpriceasc": { en: "Price: Low to High", es: "Precio: Menor a Mayor" },
  "tours.sortpricedesc": { en: "Price: High to Low", es: "Precio: Mayor a Menor" },
  "tours.sortrating": { en: "Best Rated", es: "Mejor Valorados" },
  "tours.sortduration": { en: "Duration: Shortest", es: "Duración: Más Cortos" },
  "tours.clearall": { en: "Clear All", es: "Limpiar Todo" },
  "tours.filterlocation": { en: "Location", es: "Ubicación" },
  "tours.alllocs": { en: "All Locations", es: "Todas las Ubicaciones" },
  "tours.filterprice": { en: "Price Range", es: "Rango de Precio" },

  // Booking modal
  "booking.title": { en: "Book This Experience", es: "Reservar Esta Experiencia" },
  "booking.date": { en: "Select Date", es: "Seleccionar Fecha" },
  "booking.selectdate": { en: "Pick a date", es: "Elige una fecha" },
  "booking.guests": { en: "Guests", es: "Huéspedes" },
  "booking.adults": { en: "Adults", es: "Adultos" },
  "booking.children": { en: "Children", es: "Niños" },
  "booking.each": { en: "each", es: "c/u" },
  "booking.estimated": { en: "Estimated Total", es: "Total Estimado" },
  "booking.gueststotal": { en: "guests", es: "huéspedes" },
  "booking.whatsapp": { en: "Book via WhatsApp", es: "Reservar por WhatsApp" },
  "booking.call": { en: "Call to Book", es: "Llamar para Reservar" },

  // Contact
  "contact.title": { en: "We'd Love to Hear From You", es: "Nos Encantaría Saber de Ti" },
  "contact.subtitle": { en: "Fix a Trip Puerto Rico is a boutique experience concierge, created to help travelers discover the island in a more personal, authentic, and seamless way. Tell us about your trip, your group, and what you'd like to experience in Puerto Rico.", es: "Fix a Trip Puerto Rico es un concierge boutique de experiencias, creado para ayudar a los viajeros a descubrir la isla de una manera más personal, auténtica y sin complicaciones. Cuéntanos sobre tu viaje, tu grupo y qué te gustaría experimentar en Puerto Rico." },
  "contact.getintouch": { en: "Get in Touch", es: "Contáctanos" },
  "contact.team": { en: "We're a small team with years of experience designing tailor-made itineraries for families, couples, and groups of friends—always focused on quality, trust, and local insight.", es: "Somos un equipo pequeño con años de experiencia diseñando itinerarios a la medida para familias, parejas y grupos de amigos, siempre enfocados en calidad, confianza y conocimiento local." },
  "contact.callback": { en: "Request a Call Back", es: "Solicitar Llamada" },
  "contact.emailus": { en: "Email Us", es: "Envíanos un Email" },
  "contact.location": { en: "Location", es: "Ubicación" },
  "contact.send": { en: "Send Us a Message", es: "Envíanos un Mensaje" },
  "contact.name": { en: "Your Name", es: "Tu Nombre" },
  "contact.email": { en: "Your Email", es: "Tu Email" },
  "contact.message": { en: "Your Message", es: "Tu Mensaje" },
  "contact.placeholder": { en: "Tell us about your trip, your group, and what you'd like to experience...", es: "Cuéntanos sobre tu viaje, tu grupo y qué te gustaría experimentar..." },
  "contact.submit": { en: "Send Message", es: "Enviar Mensaje" },
  "contact.sent": { en: "Message sent!", es: "¡Mensaje enviado!" },
  "contact.sentdesc": { en: "We'll get back to you soon.", es: "Te responderemos pronto." },

  // Footer
  "footer.copyright": { en: "Copyright", es: "Derechos Reservados" },

  // Theme
  "theme.light": { en: "Light", es: "Claro" },
  "theme.dark": { en: "Dark", es: "Oscuro" },

  // Fix a Boat
  "boat.badge": { en: "Private Charters", es: "Charters Privados" },
  "boat.title": { en: "Choose Your Boat", es: "Elige Tu Bote" },
  "boat.subtitle": { en: "Your adventure starts here. Browse our fleet of private boats, yachts, and catamarans available in Puerto Rico.", es: "Tu aventura comienza aquí. Explora nuestra flota de botes privados, yates y catamaranes disponibles en Puerto Rico." },
  "boat.chat": { en: "Chat With Us", es: "Chatea Con Nosotros" },
  "boat.choose": { en: "Choose Your Boat", es: "Elige Tu Bote" },
  "boat.inquire": { en: "Inquire for Pricing →", es: "Consultar Precio →" },

  // Fix a Chef
  "chef.badge": { en: "The New Fix a Trip Service", es: "El Nuevo Servicio de Fix a Trip" },
  "chef.subtitle": { en: "The new Fix a Trip service", es: "El nuevo servicio de Fix a Trip" },
  "chef.tagline": { en: "Enjoy a high-end personalized culinary experience, with a private chef, created for your budget. All in the tranquility, privacy and comfort of your home!", es: "¡Disfruta de una experiencia culinaria personalizada de alto nivel, con un chef privado, creada para tu presupuesto. Todo en la tranquilidad, privacidad y comodidad de tu hogar!" },
  "chef.packages": { en: "Fix A Chef Private Chef Packages", es: "Paquetes de Chef Privado" },
  "chef.packagesdesc": { en: "Custom menus designed to fit your event and budget. Discounts available for multiple meals/days of service – just ask us!", es: "Menús personalizados diseñados para tu evento y presupuesto. ¡Descuentos disponibles para múltiples comidas/días de servicio, solo pregúntanos!" },
  "chef.step1title": { en: "We will cook excellent dishes from your home kitchen.", es: "Cocinaremos platos excelentes desde la cocina de tu hogar." },
  "chef.step1desc": { en: "Before your private dinner, your personal chef will arrive and begin to organize and prepare the agreed menu. You will be able to watch, learn and enjoy new recipes from your professional chef.", es: "Antes de tu cena privada, tu chef personal llegará y comenzará a organizar y preparar el menú acordado. Podrás observar, aprender y disfrutar nuevas recetas de tu chef profesional." },
  "chef.step2title": { en: "We will be preparing and serving each agreed dish", es: "Prepararemos y serviremos cada plato acordado" },
  "chef.step2desc": { en: "The chef and his team will take care of everything. Table service, order, cleanliness and they will guide you through all the details involved in each dish.", es: "El chef y su equipo se encargarán de todo. Servicio de mesa, orden, limpieza y te guiarán a través de todos los detalles de cada plato." },
  "chef.step3title": { en: "Your kitchen will be left impeccable!", es: "¡Tu cocina quedará impecable!" },
  "chef.step3desc": { en: "Before departing, the chef and his team will ensure that all equipment and crockery involved in the service are left as you found them.", es: "Antes de irse, el chef y su equipo se asegurarán de que todo el equipo y la vajilla queden como los encontraron." },
  "chef.cta": { en: "Fix a Chef Inquiry", es: "Consulta Fix a Chef" },
  "chef.ctadesc": { en: "Tell us about your event, your group size, and what kind of culinary experience you'd like. We'll create a custom proposal for you.", es: "Cuéntanos sobre tu evento, el tamaño de tu grupo y qué tipo de experiencia culinaria te gustaría. Crearemos una propuesta personalizada para ti." },
  "chef.chatbook": { en: "Book via WhatsApp", es: "Reservar por WhatsApp" },

  // Fix a Transport
  "transport.badge": { en: "Transportation Services", es: "Servicios de Transporte" },
  "transport.subtitle": { en: "Reliable, comfortable transportation across Puerto Rico. Airport transfers, private tours, and custom itineraries.", es: "Transporte confiable y cómodo por todo Puerto Rico. Traslados al aeropuerto, tours privados e itinerarios personalizados." },
  "transport.chat": { en: "Chat With Us", es: "Chatea Con Nosotros" },
  "transport.our": { en: "Our Transportation Services", es: "Nuestros Servicios de Transporte" },
  "transport.airport": { en: "Airport Transfers", es: "Traslados al Aeropuerto" },
  "transport.airportdesc": { en: "Comfortable and punctual transfers to and from San Juan International Airport (SJU).", es: "Traslados cómodos y puntuales hacia y desde el Aeropuerto Internacional de San Juan (SJU)." },
  "transport.private": { en: "Private Tours", es: "Tours Privados" },
  "transport.privatedesc": { en: "Explore Puerto Rico at your own pace with a dedicated driver and customized itinerary.", es: "Explora Puerto Rico a tu propio ritmo con un conductor dedicado e itinerario personalizado." },
  "transport.hourly": { en: "Hourly Rental", es: "Renta por Hora" },
  "transport.hourlydesc": { en: "Need a driver for a few hours? Book by the hour for flexible scheduling.", es: "¿Necesitas un conductor por unas horas? Reserva por hora para horarios flexibles." },
  "transport.vip": { en: "VIP Service", es: "Servicio VIP" },
  "transport.vipdesc": { en: "Premium vehicles and professional chauffeurs for special occasions and executive needs.", es: "Vehículos premium y choferes profesionales para ocasiones especiales y necesidades ejecutivas." },
  "transport.cta": { en: "Ready to Book Your Ride?", es: "¿Listo para Reservar tu Transporte?" },
  "transport.ctadesc": { en: "Contact us with your travel details and we'll arrange the perfect transportation for your Puerto Rico trip.", es: "Contáctanos con los detalles de tu viaje y organizaremos el transporte perfecto para tu viaje a Puerto Rico." },
  "transport.chatbook": { en: "Book via WhatsApp", es: "Reservar por WhatsApp" },

  // Fix a Wellness
  "wellness.badge": { en: "The New Fix a Trip Service", es: "El Nuevo Servicio de Fix a Trip" },
  "wellness.subtitle": { en: "The new Fix a Trip service", es: "El nuevo servicio de Fix a Trip" },
  "wellness.tagline": { en: "Enjoy a high-end personalized relax experience. All the relaxation Body-Soul in Fix a Wellness.", es: "Disfruta una experiencia de relajación personalizada de alto nivel. Toda la relajación Cuerpo-Alma en Fix a Wellness." },
  "wellness.services": { en: "Our Services", es: "Nuestros Servicios" },
  "wellness.cta": { en: "Booking Fix a Wellness Now!", es: "¡Reserva Fix a Wellness Ahora!" },
  "wellness.ctadesc": { en: "Tell us about the service you'd like and we'll arrange a personalized wellness experience for you.", es: "Cuéntanos sobre el servicio que te gustaría y organizaremos una experiencia de bienestar personalizada para ti." },
  "wellness.chatbook": { en: "Book via WhatsApp", es: "Reservar por WhatsApp" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("fixatrip-lang");
    return (saved === "es" || saved === "en") ? saved : "en";
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("fixatrip-lang", l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
