"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: "01",
    title: "Pick your track",
    desc: "Choose your goal — JEE, NEET, UPSC, corporate interview, or a custom practice session. We match you to the right AI interviewer and question set.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.85V8.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: "#7c3aed",
  },
  {
    step: "02",
    title: "Have a real conversation",
    desc: "Your AI interviewer speaks, listens, and adapts on the fly — asking follow-ups, probing weak spots and challenging you exactly like a human panel would.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    color: "#818cf8",
  },
  {
    step: "03",
    title: "See your live score",
    desc: "Watch confidence, clarity and accuracy scores update in real time during the session — not just at the end. Know where you stand, mid-interview.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M3 3v18h18M7 14l4-4 4 4 5-6" />
      </svg>
    ),
    color: "#60a5fa",
  },
  {
    step: "04",
    title: "Get your weak area map",
    desc: "After every session, AI identifies your blind spots by topic, skill, and pattern. You get a precise roadmap — not generic advice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v3l2 2" />
      </svg>
    ),
    color: "#f472b6",
  },
  {
    step: "05",
    title: "Repeat until confident",
    desc: "Each session feeds the same progress dashboard. Watch your scores climb, your weak areas shrink, and your confidence become visible data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M23 4v6h-6M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    color: "#34d399",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });

      // Animated line drawing
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: stepsRef.current, start: "top 75%" },
        });
      }

      // Step cards
      const cards = stepsRef.current?.querySelectorAll(".step-card");
      if (cards) {
        cards.forEach((card, i) => {
          const isLeft = i % 2 === 0;
          gsap.from(card, {
            opacity: 0,
            x: isLeft ? -60 : 60,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#60a5fa]/40 to-transparent" />

      <Container>
        <div ref={headRef} className="mx-auto max-w-[680px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/30 bg-[#60a5fa]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#60a5fa]">
            How it works
          </span>
          <h2 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[50px]">
            From signup to{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
              confident
            </span>{" "}
            in 5 steps
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#a1a1aa]">
            No setup friction. No generic questions. Just a structured system that builds real interview confidence.
          </p>
        </div>

        {/* Steps — vertical timeline */}
        <div ref={stepsRef} className="relative mt-20">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block" style={{ width: "2px" }}>
            <div ref={lineRef} className="h-full w-full rounded-full" style={{ background: "linear-gradient(to bottom, #7c3aed, #60a5fa, #34d399)" }} />
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={s.step}
                  className={`step-card relative flex items-center gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col`}
                >
                  {/* Card */}
                  <div className="group w-full lg:w-[calc(50%-48px)] relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0c0c14] p-7 transition-all duration-400 hover:-translate-y-1 hover:border-white/[0.12]"
                    style={{ boxShadow: `0 0 0 0 ${s.color}` }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px -16px ${s.color}35`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${s.color}18, transparent 70%)` }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-[16px]"
                          style={{ background: `${s.color}18`, border: `1px solid ${s.color}30`, color: s.color }}
                        >
                          {s.icon}
                        </div>
                        <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: `${s.color}80` }}>
                          Step {s.step}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[19px] font-bold text-white">{s.title}</h3>
                      <p className="mt-2.5 text-[14px] leading-[1.7] text-[#a1a1aa]">{s.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 z-10"
                    style={{ background: "#09090b", borderColor: s.color, boxShadow: `0 0 20px ${s.color}50` }}>
                    <span className="text-[14px] font-black" style={{ color: s.color }}>{s.step}</span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[calc(50%-48px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
