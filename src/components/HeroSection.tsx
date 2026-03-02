import { useState } from "react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

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
    <section className="relative h-[75vh] sm:h-[88vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(https://fixatrippuertorico.com/wp-content/uploads/2026/01/1-3-1.webp)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/15 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
          <span className="text-xs font-medium text-white/90 tracking-wide">Puerto Rico's #1 Experience Concierge</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-5 font-display leading-[1.1] tracking-tight"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed font-light"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          onSubmit={handleSearch}
          className="max-w-lg mx-auto px-2"
        >
          <div className="flex items-center liquid-glass-elevated rounded-2xl overflow-hidden bg-white/90 dark:bg-card/80">
            <Search className="h-5 w-5 text-muted-foreground ml-5 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("hero.search")}
              className="flex-1 px-4 py-4 sm:py-[18px] text-foreground bg-transparent focus:outline-none text-sm min-w-0"
            />
            <button
              type="submit"
              className="m-2 p-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity flex-shrink-0 shadow-soft"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </button>
          </div>
        </motion.form>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
