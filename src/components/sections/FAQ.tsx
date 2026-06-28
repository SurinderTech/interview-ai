"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FAQS = [
  {
    q: "How realistic is the AI interviewer?",
    a: "It runs full voice conversations, asks follow-up questions based on what you say, and adapts difficulty in real time — the same way a real interviewer would push on a vague answer.",
  },
  {
    q: "Do I need a technical background to use this?",
    a: "No. InterviewAI covers technical, behavioral, and field-specific tracks, including non-technical roles like UPSC, teaching, banking, and law.",
  },
  {
    q: "What happens after each interview?",
    a: "You get a full breakdown — technical score, confidence, communication — plus a roadmap of what to practice before your next session.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Pro is month-to-month with no lock-in. You can cancel from your account settings at any time.",
  },
  {
    q: "Is my interview data private?",
    a: "Your interviews, transcripts, and scores are visible only to you unless you explicitly share them — for example with an Enterprise cohort administrator.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="blue">FAQ</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Questions, answered.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[680px] divide-y divide-white/[0.07] rounded-[var(--radius-panel)] border-subtle bg-[var(--color-card)]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-6">
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] font-medium text-white">
                    {item.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-text-muted)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="pb-5 text-[14.5px] leading-[1.6] text-[var(--color-text-secondary)]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
