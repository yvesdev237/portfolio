import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
}>;

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
