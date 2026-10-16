"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTANew() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0, y: 50, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 82%" },
      });
      gsap.from(".cta-btn", {
        opacity: 0, y: 20, scale: 0.96, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-btn", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 md:py-44">
      {/* Layered aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(124,58,237,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(244,114,182,0.08),transparent_60%)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative">
        <div ref={contentRef} className="mx-auto max-w-[780px] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/35 bg-[#7c3aed]/12 px-5 py-2 text-[13px] font-semibold text-[#a78bfa] mb-8">
            <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
            Free to start. No credit card.
          </div>

          <h2 className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[66px]">
            Your interview
            <br />
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent">
              starts right now.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[520px] text-[18px] leading-[1.65] text-[#a1a1aa]">
            Talk to an AI interviewer live, get your first weak-area map, and walk out with a practice plan — all in under 10 minutes.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/register"
              className="cta-btn group inline-flex items-center gap-2.5 rounded-[16px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] px-8 py-4 text-[16px] font-bold text-white shadow-[0_20px_50px_-14px_rgba(124,58,237,0.7)] transition-all hover:shadow-[0_24px_60px_-14px_rgba(124,58,237,0.85)] hover:scale-[1.02]"
            >
              Start Your Free Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="cta-btn inline-flex items-center gap-2.5 rounded-[16px] border border-white/15 bg-white/[0.04] px-8 py-4 text-[16px] font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.07]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 5.5V18.5L19 12L8 5.5Z" fill="currentColor" />
              </svg>
              See how it works
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: "✓", text: "No credit card needed" },
              { icon: "✓", text: "3 free mock interviews" },
              { icon: "✓", text: "Instant feedback & score" },
              { icon: "✓", text: "Cancel anytime" },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2 text-[13.5px] text-white/40">
                <span className="font-bold text-[#10b981]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
