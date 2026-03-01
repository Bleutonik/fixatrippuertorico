import { tours } from "@/data/tours";
import TourCard from "./TourCard";
import { useLanguage } from "@/contexts/LanguageContext";

const BestSellingTours = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Top Picks</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight">
            {t("bestselling.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-md mx-auto">
            {t("bestselling.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingTours;
