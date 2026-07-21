"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `target` using a numeric tween (rAF loop),
 * starting only once `active` becomes true. Respects reduced-motion by
 * jumping straight to the target when `instant` is set.
 */
export function useCountUp(
  target: number,
  active: boolean,
  options?: { duration?: number; instant?: boolean }
) {
  const { duration = 1400, instant = false } = options ?? {};
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;

    let raf: number;

    if (instant) {
      raf = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(raf);
    }

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for a snappy "counter" feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, instant]);

  return value;
}
