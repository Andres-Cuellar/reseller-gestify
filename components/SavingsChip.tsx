"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SavingsChipProps {
  className?: string;
}

/** Compact reuse of the currency-conversion motif: a pulsing "90%+ ahorro" chip. */
export default function SavingsChip({ className = "" }: SavingsChipProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-data text-xs font-medium text-accent ${className}`}
    >
      <motion.span
        className="h-1.5 w-1.5 rounded-full bg-accent"
        animate={
          shouldReduceMotion
            ? {}
            : { opacity: [1, 0.4, 1], scale: [1, 0.85, 1] }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      90%+ ahorro
    </span>
  );
}
