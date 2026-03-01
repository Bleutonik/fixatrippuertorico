import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container text-center space-y-6">
        <Link to="/">
          <img
            src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
            alt="Fix a Trip Puerto Rico"
            className="h-10 mx-auto brightness-0 invert"
          />
        </Link>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/fixatrippr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-background/60">Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
