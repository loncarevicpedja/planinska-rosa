"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport">;

export function Reveal({
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: defaultVariants.hidden,
        visible: {
          ...defaultVariants.visible,
          transition: {
            ...defaultVariants.visible.transition,
            delay,
          },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
