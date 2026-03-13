import { Link } from "react-router-dom";
import { Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const services = [
    { label: "Tours & Experiences", href: "/tours" },
    { label: "Private Boat Charters", href: "/fix-a-boat" },
    { label: "Private Chef Service", href: "/fix-a-chef" },
    { label: "Luxury Transportation", href: "/fix-a-transport" },
    { label: "Wellness & Spa", href: "/fix-a-wellness" },
    { label: "Travel Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group inline-block mb-6">
              <img
                src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
                alt="Fix a Trip Puerto Rico"
                className="h-10 sm:h-12 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-background/40 text-sm leading-relaxed max-w-sm mb-8">
              Puerto Rico's premier boutique travel concierge. Curated tours, boat charters, private chefs, luxury transport & wellness.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/fixatrippr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-background/40 mb-6">Services</h3>
            <nav className="flex flex-col gap-3">
              {services.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-background/60 hover:text-primary transition-colors duration-300 w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-background/40 mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+17874880202" className="block text-xl font-display font-bold text-background/80 hover:text-primary transition-colors tracking-tight">
                +1 787 488 0202
              </a>
              <a href="mailto:bookings@fixatrippr.com" className="block text-sm text-background/50 hover:text-primary transition-colors">
                bookings@fixatrippr.com
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full border border-background/20 text-sm font-semibold text-background/80 hover:border-primary hover:text-primary transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/8">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Fix a Trip Puerto Rico. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-background/30 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <p className="text-xs text-background/30">
              Made with passion in Puerto Rico 🇵🇷
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
