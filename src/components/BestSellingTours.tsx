import { tours } from "@/data/tours";
import TourCard from "./TourCard";
import { useLanguage } from "@/contexts/LanguageContext";

const BestSellingTours = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display mb-2 sm:mb-3">
            {t("bestselling.title").split("best-selling").length > 1 ? (
              <>
                {t("bestselling.title").split("best-selling")[0]}
                <span className="text-primary">best-selling</span>
                {t("bestselling.title").split("best-selling")[1]}
              </>
            ) : (
              <>
                {t("bestselling.title").split("más vendidos")[0]}
                <span className="text-primary">{t("bestselling.title").includes("más vendidos") ? "más vendidos" : t("bestselling.title")}</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t("bestselling.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingTours;
