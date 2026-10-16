"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

// Simulated live session metrics
const WEAK_AREAS = [
  { topic: "System Design", score: 38, trend: "down", color: "#ef4444" },
  { topic: "Data Structures", score: 52, trend: "up", color: "#f59e0b" },
  { topic: "Communication", score: 71, trend: "up", color: "#10b981" },
  { topic: "Behavioural (STAR)", score: 44, trend: "down", color: "#ef4444" },
  { topic: "Problem Solving", score: 83, trend: "up", color: "#10b981" },
  { topic: "DBMS Concepts", score: 29, trend: "down", color: "#ef4444" },
];

const LIVE_METRICS = [
  { label: "Confidence", value: 74, color: "#818cf8", icon: "🧠" },
  { label: "Clarity", value: 82, color: "#60a5fa", icon: "🎯" },
  { label: "Technical Depth", value: 61, color: "#f472b6", icon: "⚡" },
  { label: "Overall Score", value: 69, color: "#34d399", icon: "📈" },
];

function AnimatedBar({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    gsap.from(barRef.current, {
      width: "0%",
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: { trigger: barRef.current, start: "top 85%" },
    });
  }, [delay]);

  return (
    <div className="h-2 w-full rounded-full bg-white/[0.07]">
      <div
        ref={barRef}
        className="h-2 rounded-full transition-all"
        style={{ width: `${value}%`, background: color, boxShadow: `0 0 8px ${color}80` }}
      />
    </div>
  );
}

export function SkillsTracker() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [isLive, setIsLive] = useState(true);
  const [liveMetrics, setLiveMetrics] = useState(LIVE_METRICS);

  // Simulate live score updates
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setLiveMetrics(prev =>
        prev.map(m => ({
          ...m,
          value: Math.max(20, Math.min(99, m.value + (Math.random() > 0.5 ? 1 : -1))),
        }))
      );
    }, 1800);
    return () => clearInterval(interval);
  }, [isLive]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });

      gsap.from(".tracker-left", {
        opacity: 0, x: -50, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".tracker-left", start: "top 80%" },
      });
      gsap.from(".tracker-right", {
        opacity: 0, x: 50, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".tracker-right", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills-tracker" className="relative py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#f472b6]/40 to-transparent" />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(124,58,237,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(244,114,182,0.06),transparent)]" />
      </div>

      <Container>
        <div ref={headRef} className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f472b6]/30 bg-[#f472b6]/10 px-4 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#f472b6]">
            AI Skill Intelligence
          </span>
          <h2 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[50px]">
            The AI tells you exactly{" "}
            <span className="bg-gradient-to-r from-[#f472b6] to-[#818cf8] bg-clip-text text-transparent">
              where you&apos;re weak
            </span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#a1a1aa]">
            Most tools give you a score. We give you a diagnostic — live confidence tracking, topic-by-topic breakdown, and a precise plan to fix your gaps before the real thing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* LEFT: Live session panel */}
          <div className="tracker-left relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0c0c14]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[14px] font-semibold text-white">Live Session — Mock Interview</span>
              </div>
              <button
                onClick={() => setIsLive(v => !v)}
                className={`rounded-full px-3 py-1 text-[11.5px] font-semibold transition-all ${isLive ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30" : "bg-white/[0.05] text-white/40 border border-white/10"}`}
              >
                {isLive ? "● LIVE" : "PAUSED"}
              </button>
            </div>

            <div className="p-6 space-y-5">
              {liveMetrics.map((m, i) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[16px]">{m.icon}</span>
                      <span className="text-[13.5px] font-medium text-white/70">{m.label}</span>
                    </div>
                    <span
                      className="text-[18px] font-bold tabular-nums transition-all duration-700"
                      style={{ color: m.color }}
                    >
                      {Math.round(m.value)}
                      <span className="text-[12px] text-white/30 ml-0.5">%</span>
                    </span>
                  </div>
                  <AnimatedBar value={m.value} color={m.color} delay={i * 0.1} />
                </div>
              ))}

              {/* AI Tip */}
              <div className="mt-6 rounded-[16px] border border-[#818cf8]/20 bg-[#818cf8]/08 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#818cf8]/20 text-[13px]">🤖</div>
                  <div>
                    <p className="text-[12.5px] font-semibold text-[#818cf8] mb-1">AI Coach Note</p>
                    <p className="text-[12.5px] text-white/55 leading-[1.6]">
                      Your technical depth dropped on the last system design question. Try structuring with scalability → availability → consistency next time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Weak area map */}
          <div className="tracker-right relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0c0c14]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
              <span className="text-[14px] font-semibold text-white">Weak Area Map — Last 5 Sessions</span>
              <span className="rounded-full bg-[#ef4444]/10 border border-[#ef4444]/25 px-3 py-1 text-[11.5px] font-semibold text-[#ef4444]">
                3 gaps found
              </span>
            </div>

            <div className="p-6 space-y-4">
              {WEAK_AREAS.map((area, i) => (
                <div
                  key={area.topic}
                  className="group flex items-center gap-4 rounded-[14px] border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                >
                  {/* Topic rank */}
                  <span className="text-[13px] font-bold text-white/20 w-5 shrink-0">#{i + 1}</span>

                  {/* Bar + label */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13.5px] font-medium text-white truncate">{area.topic}</span>
                      <div className="flex items-center gap-1.5 ml-3">
                        <span
                          className="text-[12.5px] font-bold"
                          style={{ color: area.color }}
                        >
                          {area.score}%
                        </span>
                        <span className="text-[11px]" style={{ color: area.color }}>
                          {area.trend === "up" ? "↑" : "↓"}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
                      <div
                        className="h-1.5 rounded-full transition-all duration-700"
                        style={{
                          width: `${area.score}%`,
                          background: area.color,
                          boxShadow: `0 0 8px ${area.color}60`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div
                    className="shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-semibold"
                    style={{
                      background: `${area.color}15`,
                      border: `1px solid ${area.color}30`,
                      color: area.color,
                    }}
                  >
                    {area.score < 50 ? "Focus here" : area.score < 70 ? "Improving" : "Strong"}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer action */}
            <div className="border-t border-white/[0.05] px-6 py-4">
              <button className="w-full rounded-[14px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] py-3 text-[13.5px] font-semibold text-white transition-all hover:shadow-[0_12px_32px_-8px_rgba(124,58,237,0.6)] hover:scale-[1.01]">
                Generate My Practice Plan →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom proof statement */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: "📉", text: "Average weak areas reduced from 4.2 to 1.1 topics after 10 sessions" },
            { icon: "📈", text: "Users who practice 3+ sessions/week see 2.8× faster score improvement" },
            { icon: "🎯", text: "AI correctly predicts interview outcome with 89% accuracy by session 5" },
          ].map(item => (
            <div key={item.text} className="flex items-start gap-3 rounded-[18px] border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="text-[22px] shrink-0">{item.icon}</span>
              <p className="text-[13px] leading-[1.6] text-[#a1a1aa]">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
