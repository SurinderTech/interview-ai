"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

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

const STATS = [
  { value: "100K+", label: "Students & Professionals" },
  { value: "500K+", label: "Practice Questions" },
  { value: "95%", label: "Reported Improvement" },
  { value: "4.8/5", label: "Average User Rating", icon: "⭐" },
];

export function CareerCategories() {
  return (
    <section id="categories" className="py-24 md:py-32">
      <Container>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-[32px] font-bold tracking-tight text-white sm:text-[40px]">
              Choose Your Preparation Path
            </h2>
            <p className="mt-3 max-w-[520px] text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
              Whether it&apos;s exams, interviews or professional assessments — we&apos;ve got you covered.
            </p>
          </div>
          <a
            href="/register"
            className="hidden items-center gap-1.5 text-[14px] font-medium text-[var(--color-purple)] hover:opacity-80 transition-opacity sm:flex"
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

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-14 grid grid-cols-2 gap-6 rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[28px] font-bold text-white">{stat.icon}{stat.value}</p>
              <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
