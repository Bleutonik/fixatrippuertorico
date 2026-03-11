import { Link } from "react-router-dom";
import { categories } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-36 bg-background">
      <div className="container">
        <FadeIn className="mb-14 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Explore</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
                {t("categories.title")}
              </h2>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
              {t("categories.subtitle")}
            </p>
          </div>
        </FadeIn>

        {/* Cinematic Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <FadeIn key={cat.slug} delay={i * 0.08}>
              <Link
                to={`/tours?category=${cat.slug}`}
                className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-white font-bold text-sm sm:text-lg font-display tracking-tight leading-tight">
                    {cat.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-white/70 text-xs">Explore</span>
                    <ArrowUpRight className="h-3 w-3 text-primary" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
