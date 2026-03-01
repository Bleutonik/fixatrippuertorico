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
