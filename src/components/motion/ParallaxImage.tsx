import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

const ParallaxImage = ({ src, alt, className = "", speed = -40 }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -1, speed]);

  return (
    <div ref={ref} className={cn("overflow-hidden relative", className)}>
      {/* Shimmer placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-700 z-10",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      />
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-[120%] object-cover transition-all duration-700",
          isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        )}
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
