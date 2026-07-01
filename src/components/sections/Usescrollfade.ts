"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Fades + lifts a section out of view as the user scrolls past it.
 * Respects prefers-reduced-motion (skips entirely, section stays static/visible).
 */
export function useScrollFade(
  ref: RefObject<HTMLElement | null>,
  options?: { fadeOpacityTo?: number; liftPx?: number; scaleTo?: number }
) {
  const { fadeOpacityTo = 0.15, liftPx = 70, scaleTo = 0.97 } = options ?? {};

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        opacity: fadeOpacityTo,
        y: -liftPx,
        scale: scaleTo,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, fadeOpacityTo, liftPx, scaleTo]);
}