"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const AUDIENCES = [
  {
    icon: "🎓",
    title: "Students & Exam Warriors",
    desc: "Crack JEE, NEET, UPSC, SSC and 50+ exams with AI-powered mock sessions that adapt to your knowledge gaps in real time.",
    tags: ["JEE / NEET", "UPSC / State PSC", "SSC / Banking", "Defence / Police"],
    color: "#818cf8",
    glow: "rgba(129,140,248,0.15)",
  },
  {
    icon: "💼",
    title: "Job Seekers & Freshers",
    desc: "Land your first role or switch careers confidently. Practice real HR, technical and behavioural rounds used by top companies.",
    tags: ["Campus Placements", "HR Rounds", "Technical Panels", "Group Discussions"],
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    icon: "🚀",
    title: "Experienced Professionals",
    desc: "Sharpen negotiation, leadership communication and senior-level technical depth. Level up for promotions and lateral moves.",
    tags: ["Lateral Hiring", "Leadership Rounds", "System Design", "Salary Negotiation"],
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.15)",
  },
];

export function ForWhom() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headRef.current, {
        opacity: 0,
        y: 48,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Cards stagger slide-up
      const cards = cardsRef.current?.querySelectorAll(".audience-card");
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 64,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="for-whom" className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle section divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      <Container>
        <div ref={headRef} className="mx-auto max-w-[680px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#a78bfa]">
            Built for everyone
          </span>
          <h2 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[52px]">
            Who is InterviewAI{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent">
              for?
            </span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#a1a1aa]">
            Whether you&apos;re cracking an entrance exam, landing your first job, or aiming for the C-suite — we&apos;ve designed every session for exactly where you are.
          </p>
        </div>

        <div ref={cardsRef} className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <div
              key={a.title}
              className="audience-card group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0d16] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/15"
              style={{ boxShadow: `0 0 0 0 ${a.glow}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 32px 80px -20px ${a.glow}, 0 0 0 1px ${a.color}30`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
              }}
            >
              {/* Glow bg on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${a.glow}, transparent 70%)` }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-[18px] text-[28px]"
                  style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}
                >
                  {a.icon}
                </div>

                <h3 className="mt-5 text-[20px] font-bold text-white">{a.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[#a1a1aa]">{a.desc}</p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {a.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[12px] font-medium"
                      style={{
                        background: `${a.color}12`,
                        border: `1px solid ${a.color}28`,
                        color: a.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA arrow */}
                <div className="mt-6 flex items-center gap-2 text-[13.5px] font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: a.color }}>
                  Start practicing
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Index number */}
              <span
                className="absolute right-6 top-6 text-[72px] font-black leading-none opacity-[0.04] select-none"
                style={{ color: a.color }}
              >
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
