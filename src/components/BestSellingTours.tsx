import { useTours } from "@/hooks/useTours";
import TourCard from "./TourCard";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BestSellingTours = () => {
  const { t } = useLanguage();
  const { data: tours = [] } = useTours();
  const featured = tours.filter(t => t.featured).slice(0, 4);
  const displayed = featured.length > 0 ? featured : tours.slice(0, 8);

  return (
    <section className="py-24 sm:py-36 relative overflow-hidden glass-section" style={{ background: 'linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--secondary)/0.5) 50%, hsl(var(--background)) 100%)' }}>
      {/* Decorative glass orbs */}
      <div className="glass-orb w-96 h-96 bg-primary/20 -top-20 -left-20" />
      <div className="glass-orb w-64 h-64 bg-primary/10 bottom-10 right-10" />
      <div className="container relative z-10">
        <FadeIn className="mb-14 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Top Picks</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
                {t("bestselling.title")}
              </h2>
            </div>
            <Link
              to="/tours"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              View all experiences
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayed.map((tour, i) => (
            <FadeIn key={tour.id} delay={i * 0.06}>
              <TourCard tour={tour} />
            </FadeIn>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingTours;
