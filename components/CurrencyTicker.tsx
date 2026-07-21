"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/lib/useCountUp";

/**
 * Hero moment: $297 USD (≈ $1.000.000 COP) "melts" into the Agencia reseller
 * plan at $190.000 COP/mes — same 20 subcuentas, a fraction of the cost.
 */
export default function CurrencyTicker() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const percent = useCountUp(80, isInView, {
    duration: 1600,
    instant: !!shouldReduceMotion,
  });

  return (
    <div
      ref={ref}
      className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-4">
        {/* USD - the expensive, direct plan */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -14, rotateX: 40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : shouldReduceMotion
                ? {}
                : { opacity: 0, y: -14, rotateX: 40 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-1 sm:items-start"
        >
          <span className="text-xs uppercase tracking-[0.14em] text-mist">
            Plan directo
          </span>
          <span className="font-data text-3xl sm:text-4xl font-semibold text-gold">
            $297 USD
          </span>
          <span className="font-data text-xs text-mist">
            ≈ $1.000.000 COP/mes
          </span>
        </motion.div>

        {/* Arrow / melt indicator */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 1, scale: 1 } : shouldReduceMotion ? {} : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-1 text-accent"
          aria-hidden="true"
        >
          <svg
            className="h-6 w-8 rotate-90 sm:rotate-0"
            viewBox="0 0 32 24"
            fill="none"
          >
            <path
              d="M2 12H28M28 12L19 3M28 12L19 21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* COP - the cheap, reseller plan */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14, rotateX: -40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : shouldReduceMotion
                ? {}
                : { opacity: 0, y: 14, rotateX: -40 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center gap-1 sm:items-end"
        >
          <span className="text-xs uppercase tracking-[0.14em] text-mist">
            Con nosotros
          </span>
          <span className="font-data text-3xl sm:text-4xl font-semibold text-accent">
            $190.000
          </span>
          <span className="font-data text-xs text-mist">
            20 subcuentas · COP/mes
          </span>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center">
        <p className="font-display text-lg font-semibold text-paper sm:text-xl">
          Ahorra más del{" "}
          <span className="font-data text-accent">{percent}%</span> y escala sin
          límites
        </p>
      </div>

      {/* Ambient accent glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-accent/10 blur-3xl"
      />
    </div>
  );
}
