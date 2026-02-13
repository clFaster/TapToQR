"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that watches every element with a
 * `data-sr` attribute and adds the `sr-visible` class when it scrolls into
 * view. Works entirely on server-rendered HTML — no wrapper components needed.
 *
 * Usage in any Server Component:
 *   <div className="sr-init sr-fade-up" data-sr>…</div>
 *   <div className="sr-init sr-slide-left" data-sr data-sr-delay="200">…</div>
 *
 * Place <ScrollRevealInit /> once in the page (renders nothing).
 */
export function ScrollRevealInit() {
  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>("[data-sr]");

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("sr-visible"));
      return;
    }

    // Apply stagger delays from data attributes
    targets.forEach((el) => {
      const delay = el.dataset.srDelay;
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
