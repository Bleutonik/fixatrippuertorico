import { Link } from "react-router-dom";
import { categories } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display mb-2 sm:mb-3">
            {t("categories.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t("categories.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/tours?category=${cat.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-[3/2] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3">
                <p className="text-white font-bold text-xs sm:text-sm lg:text-base">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
