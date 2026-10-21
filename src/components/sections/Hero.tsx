"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TavusEmbed } from "./TavusEmbed";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Tavus config ────────────────────────────────────────────────── */
// Priya's IDs are managed server-side in /api/tavus/conversation
// No deployment ID or persona ID needed here — TavusEmbed handles it.

/* ─── Avatar personas ─────────────────────────────────────────────── */
const AVATARS = [
  {
    id: "priya",
    name: "Priya",
    indianName: "प्रिया",
    role: "Career & Tech Interviews",
    description: "Real conversations, real feedback — try a live AI interview on any role or exam right now.",
    accent: "#7c3aed",
    accentSoft: "rgba(124,58,237,0.18)",
    badge: "●",
    video: "/media/A_modern_Silicon_Valley_style.mp4",
  },
  {
    id: "ananya",
    name: "Ananya",
    indianName: "अनन्या",
    role: "Exam Mentor (JEE/NEET/UPSC)",
    description: "Your expert guide for competitive exam prep — personalized question sessions with instant feedback.",
    accent: "#818cf8",
    accentSoft: "rgba(129,140,248,0.18)",
    badge: "●",
    video: "/media/AI_HR_interviews_student_on_202607010120.mp4",
  },
  {
    id: "kavya",
    name: "Kavya",
    indianName: "काव्या",
    role: "Guidance & Study Coach",
    description: "Helping you build clarity, confidence and a roadmap for long-term success.",
    accent: "#f472b6",
    accentSoft: "rgba(244,114,182,0.18)",
    badge: "●",
    video: "/media/A_premium_government_interview.mp4",
  },
];



/* ─── Waveform bars ──────────────────────────────────────────────── */
function WaveformBars({ color }: { color: string }) {
  return (
    <div className="flex h-4 items-end gap-[2px]">
      {[3, 7, 5, 10, 7, 12, 5, 8, 4, 9, 6].map((h, i) => (
        <span
          key={i}
          className="w-[2px] rounded-full wave-bar"
          style={{
            height: `${h}px`,
            background: color,
            animationDelay: `${i * 70}ms`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [activeAvatar, setActiveAvatar] = useState(0);
  const [embedStarted, setEmbedStarted] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const avatar = AVATARS[activeAvatar];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#080818] pt-24 pb-0"
    >
      {/* ── Ambient gradients ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-5%,rgba(124,58,237,0.18),transparent)]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.08),transparent_70%)]" />
      </div>

      <Container className="relative">
        {/* ── Top badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5 text-[13px] font-medium text-[#a78bfa]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
            Talk to our AI Interviewer Live
          </div>
          <span className="text-[12px] text-white/30 font-medium">Powered by Tavus</span>
        </motion.div>

        {/* ── Main two-column layout ── */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-12">

          {/* ════ LEFT COLUMN ════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col pb-12 lg:pb-24"
          >
            {/* Headline */}
            <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-[52px] lg:text-[56px]">
              Meet Your AI{" "}
              <span className="bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent">
                Interview Partner
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-5 max-w-[480px] text-[16px] leading-[1.72] text-[#a1a1aa]">
              Have a real conversation with our AI avatars, get guidance, try a{" "}
              <span className="text-[#818cf8] underline decoration-[#818cf8]/40 underline-offset-2 cursor-pointer hover:decoration-[#818cf8]">
                live demo
              </span>
              , and experience how InterviewAI helps you prepare for exams, interviews and real-world opportunities.
            </p>

            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                { icon: "✓", text: "Real-time conversation" },
                { icon: "✓", text: "Natural voice & video" },
                { icon: "✓", text: "No sign up required" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12.5px] text-white/60"
                >
                  <span className="text-[#10b981] font-bold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* ── Avatar selector ── */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {AVATARS.map((av, i) => (
                <button
                  key={av.id}
                  onClick={() => { setActiveAvatar(i); setEmbedStarted(false); }}
                  className={`group relative flex flex-col items-center overflow-hidden rounded-[20px] border text-center transition-all duration-300 ${
                    i === activeAvatar
                      ? "border-[#818cf8]/60 shadow-[0_0_24px_-4px_rgba(129,140,248,0.4)]"
                      : "border-white/[0.08] hover:border-white/20"
                  }`}
                  style={{ background: i === activeAvatar ? av.accentSoft : "rgba(255,255,255,0.02)" }}
                >
                  {/* Video thumbnail — auto-plays silently like a GIF */}
                  <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                    <video
                      src={av.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                      style={{ borderRadius: "20px 20px 0 0" }}
                    />
                    {/* Active ring overlay */}
                    {i === activeAvatar && (
                      <div
                        className="absolute inset-0 rounded-t-[20px]"
                        style={{ boxShadow: `inset 0 0 0 2px ${av.accent}` }}
                      />
                    )}
                    {/* Online dot */}
                    <span
                      className="absolute bottom-2 right-2 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a12] bg-[#10b981]"
                    />
                  </div>

                  {/* Name & role */}
                  <div className="px-3 py-2.5 w-full">
                    <p className="text-[13px] font-semibold text-white leading-tight">{av.name}</p>
                    <p className="text-[9.5px] text-white/40 leading-tight mt-0.5 truncate">{av.role}</p>
                    {/* Waveform indicator */}
                    <div className={`mt-1.5 flex justify-center transition-opacity duration-300 ${i === activeAvatar ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}>
                      <WaveformBars color={av.accent} />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* ── CTAs ── */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEmbedStarted(true)}
                className="inline-flex items-center gap-2.5 rounded-[14px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_16px_40px_-12px_rgba(124,58,237,0.65)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.8)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="1.6"/>
                  <path d="M9 8l7 4-7 4V8z" fill="white"/>
                </svg>
                Talk to {avatar.name} ({avatar.indianName}) Live
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-[14px] border border-white/15 bg-white/[0.02] px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.05]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 5.5V18.5L19 12L8 5.5Z" fill="currentColor"/></svg>
                Watch 1-Min Demo
              </motion.button>
            </div>

            <p className="mt-3 text-[12px] text-white/30">
              Live demo available. Have a real conversation and ask anything about InterviewAI.
            </p>


          </motion.div>

          {/* ════ RIGHT COLUMN — Tavus embed ════ */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            {/* Glow halo */}
            <div
              className="pointer-events-none absolute -inset-6 rounded-[48px] blur-2xl opacity-40"
              style={{ background: `radial-gradient(ellipse at center, ${avatar.accentSoft}, transparent 70%)` }}
            />

            {/* Card shell */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a12] shadow-[0_48px_120px_-40px_rgba(0,0,0,0.8),0_24px_60px_-24px_rgba(124,58,237,0.28)]">

              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-3.5">
                <div className="flex items-center gap-3">
                  {/* Avatar status dot */}
                  <div
                    className="relative flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${avatar.accent}, #111827)` }}
                  >
                    {avatar.name[0]}
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a12] bg-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-tight">{avatar.name} is online</p>
                    <p className="text-[11px] text-white/40">AI Interviewer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/30 font-medium">Powered by</span>
                  <span className="text-[13px] font-bold tracking-[0.15em] text-white/70 uppercase">TAVUS</span>
                  {/* Fullscreen icon */}
                  <button className="ml-1 flex h-7 w-7 items-center justify-center rounded-[8px] text-white/30 hover:bg-white/[0.06] hover:text-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* ── Embed area ── */}
              <AnimatePresence mode="wait">
                {embedStarted ? (
                  <motion.div
                    key="embed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                    style={{ minHeight: "540px" }}
                  >
                    <TavusEmbed
                      className="h-full w-full"
                      style={{ minHeight: "540px" }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex flex-col"
                    style={{ minHeight: "540px" }}
                  >
                    {/* ── Full-bleed video preview — auto-plays like a GIF ── */}
                    <div className="relative w-full flex-1" style={{ minHeight: "400px" }}>
                      <video
                        ref={previewVideoRef}
                        key={avatar.video}
                        src={avatar.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {/* Gradient overlay so bottom info is readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />

                      {/* Top-left name badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse"
                        />
                        <span className="text-[13px] font-semibold text-white drop-shadow">
                          {avatar.name} ({avatar.indianName}) — Online
                        </span>
                      </div>

                      {/* Bottom overlay — name, description, CTA */}
                      <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                        <p className="text-[18px] font-bold text-white leading-tight">
                          {avatar.name}
                          <span className="ml-2 text-[14px] font-normal text-white/50">{avatar.indianName}</span>
                        </p>
                        <p className="text-[12px] text-white/50 mt-0.5">{avatar.role}</p>

                        {/* Chat bubble */}
                        <div className="mt-3 rounded-[14px] border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-md">
                          <p className="text-[13px] leading-[1.6] text-white/80">
                            👋 Hi! I&apos;m {avatar.name}.{" "}
                            <span className="text-white/50">{avatar.description}</span>
                          </p>
                        </div>

                        {/* Start button */}
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setEmbedStarted(true)}
                          className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-[14px] px-7 py-3.5 text-[15px] font-semibold text-white transition-all shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${avatar.accent}, #6d28d9)`,
                            boxShadow: `0 16px 40px -12px ${avatar.accent}80`,
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="1.6"/>
                            <path d="M9 8l7 4-7 4V8z" fill="white"/>
                          </svg>
                          Talk to {avatar.name} ({avatar.indianName}) Live Now
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </motion.button>
                      </div>

                      {/* Listening waveform bottom-left corner */}
                      <div className="absolute bottom-[130px] left-6 flex items-center gap-2">
                        <div className="flex h-6 items-end gap-[3px]">
                          {[3, 6, 4, 8, 5, 10, 4, 7, 3, 6].map((h, idx) => (
                            <span
                              key={idx}
                              className="w-[2.5px] rounded-full wave-bar"
                              style={{
                                height: `${h}px`,
                                background: avatar.accent,
                                animationDelay: `${idx * 80}ms`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-white/40">Listening…</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Controls bar */}
              <div className="flex items-center justify-center gap-4 border-t border-white/[0.06] bg-[#080810] px-5 py-4">
                {/* Mic */}
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:bg-white/[0.08] hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>
                  </svg>
                </button>
                {/* End call */}
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/90 text-white shadow-lg transition-all hover:bg-red-500">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </button>
                {/* Camera */}
                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:bg-white/[0.08] hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M23 7l-7 5 7 5V7z"/>
                    <rect x="1" y="5" width="15" height="14" rx="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Trusted by ── */}
        <div className="mt-12 border-t border-white/[0.05] pb-8 pt-8">
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/25">
            Trusted by learners from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {["IIT", "NIT", "AIIMS", "UPSC", "Google", "Microsoft", "Amazon", "Infosys", "TCS", "Mahindra"].map((name) => (
              <span
                key={name}
                className="text-[14px] font-bold text-white/20 transition-colors hover:text-white/50"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>


    </section>
  );
}