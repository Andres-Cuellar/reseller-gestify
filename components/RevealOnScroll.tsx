"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades/slides a section up into view once, when it enters the viewport. */
export default function RevealOnScroll({
  children,
  className,
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={shouldReduceMotion ? undefined : fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
