import { Link } from "react-router-dom";
import { Facebook, Instagram, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container">
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className="group">
            <img
              src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
              alt="Fix a Trip Puerto Rico"
              className="h-10 sm:h-12 mx-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <div className="flex justify-center gap-3">
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
