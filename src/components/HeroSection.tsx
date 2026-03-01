import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/tours?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative h-[70vh] sm:h-[85vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://fixatrippuertorico.com/wp-content/uploads/2026/01/1-3-1.webp)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 font-display leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
          {t("hero.subtitle")}
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto px-2">
          <div className="flex items-center bg-white dark:bg-card rounded-full overflow-hidden shadow-2xl">
            <Search className="h-5 w-5 text-muted-foreground ml-4 sm:ml-5 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("hero.search")}
              className="flex-1 px-3 sm:px-4 py-3.5 sm:py-4 text-foreground bg-transparent focus:outline-none text-sm sm:text-base min-w-0"
            />
            <button
              type="submit"
              className="m-1.5 p-2.5 sm:p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors flex-shrink-0"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
