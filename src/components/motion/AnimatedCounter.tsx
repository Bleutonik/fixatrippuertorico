import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  // Extract numeric part, prefix, and suffix
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] || "";
  const numStr = match?.[2] || "0";
  const suffix = match?.[3] || "";
  const target = parseFloat(numStr.replace(/,/g, ""));
  const hasDecimal = numStr.includes(".");
  const hasComma = numStr.includes(",");

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      let formatted: string;
      if (hasDecimal) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.round(current).toString();
      }

      if (hasComma) {
        formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      setDisplay(formatted);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, hasDecimal, hasComma]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
