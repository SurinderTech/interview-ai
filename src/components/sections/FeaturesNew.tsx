"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
    title: "Live Voice Interviews",
    desc: "Speak naturally — our AI listens, understands context and asks intelligent follow-up questions, just like a real panel.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Adaptive Question Engine",
    desc: "Every question evolves based on your last answer. Struggle on a topic? The AI drills deeper. Nail it? It moves on.",
    color: "#818cf8",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M3 3v18h18M7 14l4-4 4 4 5-6" />
      </svg>
    ),
    title: "Live Performance Score",
    desc: "Watch your confidence, clarity and technical accuracy update in real time — not just after the session ends.",
    color: "#60a5fa",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Weak Area Detection",
    desc: "After every session, AI maps out exactly which topics cost you points — so you never waste time on what you already know.",
    color: "#f472b6",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M9 12h6m-6 4h6m-7 5h8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Resume & LinkedIn Review",
    desc: "Get an AI assessment of how your profile reads to a recruiter — and what to fix before you even send an application.",
    color: "#34d399",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M3 21h18M5 21V7l8-4 8 4v14" />
      </svg>
    ),
    title: "Company-Specific Prep",
    desc: "Practice in the exact format used by Google, Amazon, Infosys, UPSC, and 200+ other organizations and exams.",
    color: "#fb923c",
  },
];

export function FeaturesNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%", toggleActions: "play none none none" },
      });

      const items = gridRef.current?.querySelectorAll(".feature-item");
      if (items) {
        gsap.from(items, {
          opacity: 0, y: 50, stagger: 0.1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 78%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#818cf8]/40 to-transparent" />

      <Container>
        <div ref={headRef} className="mx-auto max-w-[680px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#818cf8]/30 bg-[#818cf8]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#818cf8]">
            Everything you need
          </span>
          <h2 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[50px]">
            Features that{" "}
            <span className="bg-gradient-to-r from-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent">
              actually move the needle
            </span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#a1a1aa]">
            Not just a question bank — a full preparation system that thinks, adapts, and improves with every session.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="feature-item group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0c0c14] p-7 cursor-default transition-all duration-400 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                boxShadow: hoveredIdx === i ? `0 24px 60px -16px ${f.color}30, 0 0 0 1px ${f.color}25` : "none",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse 55% 40% at 50% 0%, ${f.color}18, transparent 70%)` }}
              />

              <div className="relative">
                {/* Icon container */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[16px] transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${f.color}15`,
                    border: `1px solid ${f.color}30`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>

                <h3 className="mt-5 text-[16.5px] font-bold text-white">{f.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#a1a1aa]">{f.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-16"
                  style={{ background: f.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
