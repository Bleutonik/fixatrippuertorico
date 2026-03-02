import { Link, useLocation } from "react-router-dom";
import { Ship, UtensilsCrossed, Car, Heart, Map, Phone } from "lucide-react";

interface CrossLink {
  path: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const allLinks: CrossLink[] = [
  {
    path: "/tours",
    label: "Tours & Experiences",
    description: "Explore El Yunque, bioluminescent bays, Culebra Island, Old San Juan, and more guided adventures across Puerto Rico.",
    icon: <Map className="h-5 w-5" />,
  },
  {
    path: "/fix-a-boat",
    label: "Private Boat Charters",
    description: "Luxury catamarans, yachts, and powerboats for snorkeling, sunset cruises, and island hopping from Fajardo.",
    icon: <Ship className="h-5 w-5" />,
  },
  {
    path: "/fix-a-chef",
    label: "Private Chef Service",
    description: "Gourmet private dining at your vacation rental with professional chefs, custom menus, and full table service.",
    icon: <UtensilsCrossed className="h-5 w-5" />,
  },
  {
    path: "/fix-a-transport",
    label: "Luxury Transportation",
    description: "Executive airport transfers, VIP ground transport, private chauffeur service in Mercedes-Benz vehicles.",
    icon: <Car className="h-5 w-5" />,
  },
  {
    path: "/fix-a-wellness",
    label: "Wellness & Spa",
    description: "In-villa massage therapy, yoga, sound healing, reiki, and holistic wellness experiences across Puerto Rico.",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    path: "/contact",
    label: "Contact Us",
    description: "Get personalized travel recommendations and book your Puerto Rico adventure. WhatsApp, phone, or email.",
    icon: <Phone className="h-5 w-5" />,
  },
];

const SEOCrossLinks = () => {
  const { pathname } = useLocation();

  const links = allLinks.filter((link) => link.path !== pathname);

  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-3 text-center">
          Explore More Fix a Trip Services
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Discover everything Puerto Rico has to offer with our curated experiences — from thrilling tours and private boat charters to gourmet dining, luxury transport, and rejuvenating wellness retreats.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group liquid-glass rounded-2xl p-5 sm:p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                  {link.label}
                </h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOCrossLinks;
