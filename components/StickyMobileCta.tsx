"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import SavingsChip from "./SavingsChip";

/** Sticky bottom CTA bar for mobile — slides in once the hero has scrolled out of view. */
export default function StickyMobileCta() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setVisible(latest > (typeof window !== "undefined" ? window.innerHeight * 0.85 : 700));
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur-md sm:hidden"
        >
          <SavingsChip />
          <a
            href="#precios"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform active:scale-95"
          >
            Ver planes →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
