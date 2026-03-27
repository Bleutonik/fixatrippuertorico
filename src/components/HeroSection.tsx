import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/motion/TextReveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const stats = [
    { value: "2,500+", label: "Happy Travelers" },
    { value: "50+", label: "Unique Experiences" },
    { value: "4.9★", label: "Average Rating" },
  ];

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/1-3-1.webp"
          alt="Puerto Rico aerial view"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full pt-16 lg:pt-28 xl:pt-32 pb-16 sm:pb-24 lg:pb-28">
        <div className="container">
          <div className="max-w-3xl">
            {/* Main Title - Letter by Letter Reveal */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-display leading-[0.95] tracking-tighter mb-3" style={{ perspective: "600px" }}>
              <TextReveal text={t("hero.title")} delay={0.5} staggerDelay={0.025} />
            </h1>

            <motion.p
              className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Puerto Rico's #1 Concierge
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-xl sm:text-2xl text-white/80 max-w-lg leading-relaxed font-light mb-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/tours"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-elevated"
              >
                {t("about.explore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                {t("nav.contact")}
              </Link>
            </motion.div>

          </div>

          {/* Stats Bar with Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-14 sm:mt-20 flex items-center gap-8 sm:gap-14"
          >
            {stats.map((stat, i) => (
              <div key={i} className="relative">
                {i > 0 && (
                  <div className="absolute -left-4 sm:-left-7 top-1/2 -translate-y-1/2 h-8 w-px bg-white/20" />
                )}
                <AnimatedCounter
                  value={stat.value}
                  className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight block"
                />
                <p className="text-[11px] sm:text-xs text-white/50 mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
