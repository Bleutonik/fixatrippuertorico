import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 p-3 rounded-xl bg-card/90 backdrop-blur-xl text-foreground shadow-elevated border border-border/50 hover:bg-primary hover:text-primary-foreground active:scale-90 transition-all duration-300"
      aria-label="Go to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
