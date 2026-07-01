"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Metric = {
  label: string;
  value: string;
  accent: string;
  className: string;
};

const METRICS: Metric[] = [
  {
    label: "Confidence",
    value: "91%",
    accent: "var(--color-green)",
    className: "-top-6 -right-4",
  },
  {
    label: "Technical",
    value: "94%",
    accent: "#818CF8",
    className: "top-[38%] -right-10",
  },
  {
    label: "Communication",
    value: "89%",
    accent: "#38BDF8",
    className: "-bottom-8 -left-10",
  },
  {
    label: "Resume Match",
    value: "96%",
    accent: "var(--color-green)",
    className: "bottom-[8%] -left-16",
  },
];

export function FloatingScoreCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cards = Array.from(
      container.querySelectorAll<HTMLDivElement>("[data-float-card]")
    );

    if (prefersReducedMotion) return;

    const toX = cards.map((card) =>
      gsap.quickTo(card, "x", { duration: 0.7, ease: "power3.out" })
    );
    const toY = cards.map((card) =>
      gsap.quickTo(card, "y", { duration: 0.7, ease: "power3.out" })
    );

    const tweens = cards.map((card, i) =>
      gsap.to(card, {
        y: i % 2 === 0 ? -14 : 12,
        x: i % 2 === 0 ? 6 : -8,
        duration: 4.1 + i * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.35,
      })
    );

    const handleMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      cards.forEach((_, index) => {
        const drift = index % 2 === 0 ? 1 : -1;
        toX[index](px * 18 * drift);
        toY[index](py * 14 * (index < 2 ? -1 : 1));
      });
    };

    const handleLeave = () => {
      cards.forEach((_, index) => {
        toX[index](0);
        toY[index](0);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      tweens.forEach((tw) => tw.kill());
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0">
      {METRICS.map((m) => (
        <div
          key={m.label}
          data-float-card
          className={`absolute hidden select-none rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-3 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-transform duration-300 sm:block ${m.className}`}
        >
          <p className="text-[11px] font-medium text-[var(--color-text-muted)]">
            {m.label}
          </p>
          <p
            className="mt-0.5 text-[20px] font-bold tracking-[-0.03em]"
            style={{ color: m.accent }}
          >
            {m.value}
          </p>
          <div
            className="mt-2 h-1.5 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${m.accent}, rgba(255,255,255,0.12))`,
              boxShadow: `0 0 18px ${m.accent}40`,
            }}
          />
        </div>
      ))}
    </div>
  );
}