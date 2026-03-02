import { Link } from "react-router-dom";
import { Facebook, Instagram, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="group mb-4">
              <img
                src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
                alt="Fix a Trip Puerto Rico"
                className="h-10 sm:h-12 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-background/60 text-sm text-center md:text-left leading-relaxed">
              Puerto Rico's premier boutique travel concierge. Tours, boat charters, private chefs, luxury transport &amp; wellness.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-background/90 mb-4 text-center md:text-left">{t("footer.copyright").includes("Fix") ? "Our Services" : "Nuestros Servicios"}</h3>
            <nav className="flex flex-col items-center md:items-start gap-2.5">
              <Link to="/tours" className="text-sm text-background/60 hover:text-primary transition-colors">Tours &amp; Experiences</Link>
              <Link to="/fix-a-boat" className="text-sm text-background/60 hover:text-primary transition-colors">Private Boat Charters</Link>
              <Link to="/fix-a-chef" className="text-sm text-background/60 hover:text-primary transition-colors">Private Chef Service</Link>
              <Link to="/fix-a-transport" className="text-sm text-background/60 hover:text-primary transition-colors">Luxury Transportation</Link>
              <Link to="/fix-a-wellness" className="text-sm text-background/60 hover:text-primary transition-colors">Wellness &amp; Spa</Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-background/90 mb-4 text-center md:text-left">Contact</h3>
            <div className="flex flex-col items-center md:items-start gap-2.5 mb-5">
              <a href="tel:+17874880202" className="text-sm text-background/60 hover:text-primary transition-colors">+1 787 488 0202</a>
              <a href="mailto:bookings@fixatrippr.com" className="text-sm text-background/60 hover:text-primary transition-colors">bookings@fixatrippr.com</a>
              <Link to="/contact" className="text-sm text-background/60 hover:text-primary transition-colors">Contact Page</Link>
            </div>
            <div className="flex justify-center md:justify-start gap-3">
              <a
                href="https://www.facebook.com/fixatrippr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl liquid-glass-btn hover:bg-primary hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl liquid-glass-btn hover:bg-primary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 text-background/50 text-sm">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
            <span>in Puerto Rico</span>
          </div>
          <p className="text-xs text-background/40">{t("footer.copyright")} © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
