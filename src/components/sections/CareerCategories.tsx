"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

const CATEGORIES = [
  {
    id: "engineering",
    icon: "🎓",
    title: "Engineering Entrance Exams",
    subtitle: "JEE, BITSAT, VIT, CUET...",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.25)",
    href: "/register?track=jee",
  },
  {
    id: "medical",
    icon: "🩺",
    title: "Medical Entrance Exams",
    subtitle: "NEET, AIIMS, JIPMER...",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.25)",
    href: "/register?track=neet",
  },
  {
    id: "civil",
    icon: "🏛️",
    title: "Civil Services & State PSC",
    subtitle: "UPSC, State PSC...",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.25)",
    href: "/register?track=upsc",
  },
  {
    id: "government",
    icon: "🏛",
    title: "Government Jobs & Recruitment",
    subtitle: "SSC, Banking, Railways, Defence, Police...",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.25)",
    href: "/register?track=ssc",
  },
  {
    id: "corporate",
    icon: "💼",
    title: "Corporate Jobs & Placements",
    subtitle: "Campus, Fresher, Experienced...",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.25)",
    href: "/register?track=corporate",
  },
  {
    id: "skills",
    icon: "</>",
    title: "Skills & Certifications",
    subtitle: "Coding, Aptitude, Language, Others...",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.25)",
    href: "/register?track=skills",
  },
];


export function CareerCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="categories" className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#34d399]/40 to-transparent" />
      <Container>
        <div ref={headRef} className="mb-4 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#34d399]/30 bg-[#34d399]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#34d399] mb-5 block w-fit">
              Preparation Paths
            </span>
            <h2 className="text-[32px] font-extrabold tracking-[-0.03em] text-white sm:text-[44px]">
              Choose Your Path
            </h2>
            <p className="mt-3 max-w-[520px] text-[16px] leading-[1.65] text-[#a1a1aa]">
              Whether it&apos;s exams, interviews or professional assessments — pick your track and start today.
            </p>
          </div>
          <a
            href="/register"
            className="hidden items-center gap-1.5 text-[14px] font-medium text-[#7c3aed] hover:opacity-80 transition-opacity sm:flex"
          >
            View All Categories
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>


        {/* Category grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={cat.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group flex items-center gap-4 rounded-[20px] border p-5 transition-all duration-300"
              style={{
                background: cat.bg,
                borderColor: cat.border,
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-[22px]"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
              >
                {cat.icon === "</>" ? (
                  <span style={{ color: cat.color, fontFamily: "monospace", fontSize: "14px", fontWeight: 700 }}>
                    {"</>"}
                  </span>
                ) : (
                  cat.icon
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white leading-tight">{cat.title}</p>
                <p className="mt-0.5 text-[13px] text-[var(--color-text-muted)] truncate">{cat.subtitle}</p>
              </div>
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:translate-x-1"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cat.color} strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

      </Container>
    </section>
  );
}
