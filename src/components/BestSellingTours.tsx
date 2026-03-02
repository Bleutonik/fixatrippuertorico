import { tours } from "@/data/tours";
import TourCard from "./TourCard";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { motion } from "framer-motion";

const BestSellingTours = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <FadeIn className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Top Picks</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight">
            {t("bestselling.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-md mx-auto">
            {t("bestselling.subtitle")}
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" stagger={0.06}>
          {tours.map((tour) => (
            <motion.div key={tour.id} variants={staggerItemVariants}>
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default BestSellingTours;
