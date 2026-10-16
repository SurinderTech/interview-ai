"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: "How realistic is the AI interviewer?",
    a: "It runs full voice conversations, asks follow-up questions based on what you say, and adapts difficulty in real time — the same way a real interviewer would push on a vague answer. Most users can't tell the difference within two minutes.",
  },
  {
    q: "Will the AI tell me where I'm weak?",
    a: "Yes — that's one of our core features. After every session, the AI maps your weak topics, shows you which areas dragged your score down, and generates a practice plan focused on exactly those gaps.",
  },
  {
    q: "Can I see my confidence score live during the interview?",
    a: "Absolutely. Your confidence, clarity, technical depth, and overall score update in real time during the session — not just at the end. You can watch yourself improve question by question.",
  },
  {
    q: "Do I need a technical background to use this?",
    a: "No. InterviewAI covers technical, behavioral, and field-specific tracks, including non-technical roles like UPSC, teaching, banking, and law. Every track has its own AI interviewer personality.",
  },
  {
    q: "What happens after each interview session?",
    a: "You get a full breakdown — confidence score, weak area map, topic-level feedback — plus a specific roadmap of what to practice next. Your progress dashboard tracks every session over time.",
  },
  {
    q: "Is my interview data private?",
    a: "Your interviews, transcripts, and scores are visible only to you. We never share or sell your data. Enterprise cohort features require your explicit opt-in.",
  },
];

export function FAQNew() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
      gsap.from(".faq-item", {
        opacity: 0, y: 24, stagger: 0.08, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: listRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#a78bfa]/40 to-transparent" />

      <Container>
        <div ref={headRef} className="mx-auto max-w-[640px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#a78bfa]">
            FAQ
          </span>
          <h2 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[50px]">
            Questions,{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent">
              answered.
            </span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#a1a1aa]">
            Everything you need to know before your first session.
          </p>
        </div>

        <div ref={listRef} className="mx-auto mt-14 max-w-[760px] space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="faq-item overflow-hidden rounded-[20px] border transition-all duration-300"
                style={{
                  borderColor: isOpen ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.07)",
                  background: isOpen ? "rgba(124,58,237,0.07)" : "rgba(12,12,20,0.9)",
                }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] font-semibold text-white leading-snug">{item.q}</span>
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "#7c3aed" : "rgba(255,255,255,0.12)",
                      background: isOpen ? "rgba(124,58,237,0.2)" : "transparent",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#a78bfa" : "#71717a"} strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? "300px" : "0px" }}
                >
                  <p className="px-6 pb-6 text-[14.5px] leading-[1.7] text-[#a1a1aa]">
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
