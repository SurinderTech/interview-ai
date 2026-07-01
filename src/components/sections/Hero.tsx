"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InterviewShowcase } from "./Interviewshowcase";
import { FloatingScoreCards } from "./Floatingscorecards";
import { ParticleField } from "./Particlefield";
import { useScrollFade } from "./Usescrollfade";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  // Fades + lifts the whole hero as the visitor scrolls into the next section
  useScrollFade(fadeRef, { fadeOpacityTo: 0.1, liftPx: 90, scaleTo: 0.96 });

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="aurora-bg pointer-events-none absolute inset-0" />
      <ParticleField />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_42%_at_70%_42%,rgba(124,58,237,0.2),transparent_72%),radial-gradient(ellipse_35%_28%_at_68%_50%,rgba(59,130,246,0.1),transparent_68%)]" />

      <div ref={fadeRef} className="relative w-full">
        <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[4.4fr_5.6fr] lg:gap-14 xl:gap-20">
          {/* Left: copy — 40% */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-[560px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-text-secondary)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
              Real AI interviews, scored in real time
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              className="mt-5 flex flex-wrap items-center gap-2"
            >
              {[
                "HR",
                "Software Engineering",
                "Government",
                "Live AI analysis",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-[12px] font-medium tracking-[-0.01em] text-[var(--color-text-secondary)]"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
              className="mt-8 text-[42px] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]"
            >
              Practice interviews
              <br />
              like the real thing.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-6 max-w-[470px] text-[18px] leading-[1.72] text-[var(--color-text-secondary)]"
            >
              InterviewAI runs live mock interviews with an AI interviewer,
              scores every answer, and builds you a roadmap back to your next
              offer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="group rounded-full shadow-[0_0_0_0_rgba(124,58,237,0)] transition-shadow duration-300 hover:shadow-[0_18px_52px_-12px_rgba(124,58,237,0.6)]"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="border border-white/10 bg-[linear-gradient(135deg,#8b5cf6_0%,#7c3aed_55%,#9333ea_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_-12px_rgba(124,58,237,0.72)] transition-transform duration-300 group-hover:translate-y-[-1px] group-hover:scale-[1.02]"
                >
                  Start practicing free
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="group relative overflow-hidden rounded-full"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/15 bg-white/[0.02] transition-all duration-500 group-hover:border-white/35 group-hover:bg-white/[0.06]" />
                <Button variant="secondary" size="lg" className="relative border-white/20 bg-white/[0.015] backdrop-blur-md transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/[0.065]">
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    animate={{ x: [0, 1.5, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 1.9, repeat: Infinity, ease: EASE }}
                  >
                    <path d="M8 5.5V18.5L19 12L8 5.5Z" fill="currentColor" />
                  </motion.svg>
                  Watch demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
              className="mt-12 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  { initials: "AR", from: "#8b5cf6", to: "#c084fc" },
                  { initials: "MN", from: "#2563eb", to: "#60a5fa" },
                  { initials: "JS", from: "#0f766e", to: "#34d399" },
                  { initials: "PK", from: "#b45309", to: "#fbbf24" },
                ].map((avatar) => (
                  <span
                    key={avatar.initials}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold tracking-[0.06em] text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.55)]"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})`,
                    }}
                  />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-medium text-white">
                  40,000+ interviews practiced this month
                </p>
                <p className="mt-1 text-[13px] text-[var(--color-text-muted)]">
                  Trusted by candidates across product, engineering, and public service.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: product visual — 60% */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative justify-self-end lg:pr-2 xl:pr-4"
          >
            <div className="relative mx-auto w-full max-w-[760px]">
              <div className="pointer-events-none absolute inset-[-8%] rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_58%)] blur-2xl" />
              <InterviewShowcase />
              <FloatingScoreCards />
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}