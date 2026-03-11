import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/motion/TextReveal";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  backgroundImage: string;
}

const ServiceHero = ({ title, subtitle, eyebrow, backgroundImage }: ServiceHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full pb-14 sm:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[0.95] tracking-tighter mb-4"
              style={{ perspective: "600px" }}
            >
              <TextReveal text={title} delay={0.4} staggerDelay={0.025} />
              <motion.span
                className="block text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0, type: "spring", stiffness: 300 }}
              >
                .
              </motion.span>
            </h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed font-light"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
