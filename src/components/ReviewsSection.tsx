import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { motion } from "framer-motion";

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <FadeIn className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight">
            {t("reviews.title")}
          </h2>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" stagger={0.1}>
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={staggerItemVariants}
              className="liquid-glass p-6 sm:p-7 rounded-2xl space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-[15px]">{review.text}</p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="pt-3 border-t border-border/50">
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{review.tour}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ReviewsSection;
