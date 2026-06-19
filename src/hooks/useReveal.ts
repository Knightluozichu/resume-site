"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useReveal(threshold = 0.15, once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setRevealed(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, revealed };
}

export function useNumberCounter(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const animate = useCallback(
    (startTime: number) => {
      function update(timestamp: number) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(Math.floor(eased * target));
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    },
    [target, duration]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(performance.now());
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return { value, ref };
}
