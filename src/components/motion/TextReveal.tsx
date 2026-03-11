import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const TextReveal = ({ text, className, delay = 0, staggerDelay = 0.03 }: TextRevealProps) => {
  // Split into words to avoid breaking mid-word
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay * 4, delayChildren: delay },
        },
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
