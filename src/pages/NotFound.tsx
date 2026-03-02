import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Page Not Found | Fix a Trip Puerto Rico"
        description="The page you're looking for doesn't exist. Browse our Puerto Rico tours, private boat charters, chef services, luxury transportation, and wellness experiences. Visit fixatrippuertorico.com to discover unforgettable Caribbean adventures with expert local guides."
        canonicalPath={location.pathname}
      />
      <Header />
      <main className="flex items-center justify-center py-32">
        <div className="text-center">
          <h1 className="text-7xl font-bold gradient-text font-display mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {lang === "es" ? "¡Oops! Página no encontrada" : "Oops! Page not found"}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            {lang === "es" ? "Volver al Inicio" : "Return to Home"}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
