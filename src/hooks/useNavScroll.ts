"use client";

import { useEffect, useState } from "react";

export function useNavScroll() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let ticking = false;

    function update() {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsSticky(heroBottom < 100);
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isSticky;
}

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      let current: string | null = null;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 150) {
            current = id;
          }
        }
      }

      setActiveSection(current);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return activeSection;
}
