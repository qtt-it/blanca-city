"use client"
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SlideDirection = "left" | "right" | "bottom";

type Props = {
  children: ReactNode;
  type?: SlideDirection;
  duration?: number;
  delay?: number;
};

const getInitial = (type: SlideDirection) => {
  switch (type) {
    case "left":
      return { opacity: 0.5, x: -50 };
    case "right":
      return { opacity: 0.5, x: 50 };
    case "bottom":
      return { opacity: 0.5, y: 50 };
    default:
      return { opacity: 0 };
  }
};

export const SlideInAnimation = ({
  children,
  type = "left",
  duration = 1,
  delay = 0.5,
}: Props) => {
  return (
    <motion.div
      initial={getInitial(type)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      style={{ width: "100%", height: "auto" }}
    >
      {children}
    </motion.div>
  );
};
