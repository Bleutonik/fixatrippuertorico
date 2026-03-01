import { Link } from "react-router-dom";
import { categories } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Explore</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight">
            {t("categories.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-md mx-auto">
            {t("categories.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/tours?category=${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/2] shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 active:scale-[0.97]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <p className="text-white font-bold text-sm sm:text-base tracking-tight">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
