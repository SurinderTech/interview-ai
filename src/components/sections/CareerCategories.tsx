"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import clsx from "clsx";

const CATEGORIES = [
  { label: "Software Engineering", color: "var(--color-purple)" },
  { label: "AI Engineering", color: "var(--color-blue)" },
  { label: "UPSC", color: "var(--color-warning)" },
  { label: "Corporate", color: "var(--color-green)" },
  { label: "Healthcare", color: "var(--color-danger)" },
  { label: "Teaching", color: "var(--color-blue)" },
  { label: "Banking", color: "var(--color-green)" },
  { label: "Law", color: "var(--color-purple)" },
];

export function CareerCategories() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow color="blue">Built for everyone</Eyebrow>
            <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[42px]">
              Whatever you&rsquo;re interviewing for.
            </h2>
            <p className="mt-4 max-w-[440px] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              InterviewAI adapts its questions and scoring to your field —
              from technical screens to civil service interviews.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {CATEGORIES.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActive(i)}
                  className={clsx(
                    "rounded-[14px] border px-4 py-3 text-left text-[14px] font-medium transition-all duration-200",
                    active === i
                      ? "border-white/20 bg-white/[0.06] text-white"
                      : "border-white/[0.06] text-[var(--color-text-secondary)] hover:border-white/15 hover:text-white"
                  )}
                >
                  <span
                    className="mb-1.5 block h-1.5 w-1.5 rounded-full"
                    style={{ background: active === i ? cat.color : "rgba(255,255,255,0.2)" }}
                  />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="overflow-hidden rounded-[var(--radius-video)] glass shadow-soft">
              <video
                key={active}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/categories-loop-poster.jpg"
              >
                <source src="/media/categories-loop.webm" type="video/webm" />
                <source src="/media/categories-loop.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-[var(--radius-card)] glass px-4 py-3 shadow-soft">
              <p className="text-[13px] font-semibold text-white">
                {CATEGORIES[active].label}
              </p>
              <p className="text-[11.5px] text-[var(--color-text-muted)]">
                Tailored question bank
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
