import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const ProgressiveImage = ({ src, alt, className, imgClassName }: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden bg-muted", className)}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-md",
            imgClassName
          )}
        />
      )}
      {/* Blur placeholder shimmer */}
      <div
        className={cn(
          "absolute inset-0 bg-muted animate-pulse transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
};

export default ProgressiveImage;
