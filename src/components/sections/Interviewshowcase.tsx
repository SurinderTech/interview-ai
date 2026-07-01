"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Session = {
  id: string;
  src: string;
  interviewer: string;
  role: string;
  purpose: string;
  category: string;
  accent: string;
  accentSoft: string;
  avatar: string;
  questionPill: string;
  questions: string[];
  transcript: string[];
  durationMs: number;
  metrics: {
    confidence: number;
    technical: number;
    communication: number;
    resumeMatch: number;
  };
};

const SESSIONS: Session[] = [
  {
    id: "hr",
    src: "/media/AI_HR_interviews_student_on_202607010120.mp4",
    interviewer: "Sara",
    role: "AI HR Interviewer",
    purpose: "Welcome new users. Behavioural interview. General interview questions.",
    category: "General HR Interview",
    accent: "#8b5cf6",
    accentSoft: "rgba(139, 92, 246, 0.18)",
    avatar: "S",
    questionPill: "General Interview",
    questions: [
      "Tell me about yourself.",
      "Why should we hire you?",
      "What are your strengths?",
      "Describe a challenge you solved recently.",
    ],
    transcript: [
      "I’m a product-minded engineer who likes turning ambiguity into shippable systems.",
      "At my last team, I reduced onboarding friction by simplifying the first-run experience.",
      "I tend to lead with structure, communication, and measurable outcomes.",
    ],
    durationMs: 11800,
    metrics: { confidence: 91, technical: 84, communication: 93, resumeMatch: 95 },
  },
  {
    id: "engineering",
    src: "/media/A_modern_Silicon_Valley_style.mp4",
    interviewer: "Ananya",
    role: "Senior Technical Interviewer",
    purpose:
      "Frontend. Backend. AI Engineering. Machine Learning. DevOps. Cloud. Cyber Security. Data Analyst. Product Engineering. System Design.",
    category: "Software Engineering Interview",
    accent: "#3b82f6",
    accentSoft: "rgba(59, 130, 246, 0.16)",
    avatar: "A",
    questionPill: "Technical Interview",
    questions: [
      "Explain React Hooks.",
      "What is Retrieval-Augmented Generation?",
      "Difference between CNN and Transformers.",
      "Explain REST APIs.",
      "Explain SQL Injection.",
      "Explain Docker.",
      "Explain EC2 vs Lambda.",
      "Explain LEFT JOIN.",
    ],
    transcript: [
      "I’d separate the UI state from the data fetching layer and keep the hook boundaries explicit.",
      "For RAG, I’d index the source corpus, retrieve the most relevant context, and ground the response.",
      "The tradeoff is usually latency versus fidelity, so I’d tune for the interview goal.",
    ],
    durationMs: 12400,
    metrics: { confidence: 89, technical: 96, communication: 86, resumeMatch: 92 },
  },
  {
    id: "government",
    src: "/media/A_premium_government_interview.mp4",
    interviewer: "Dr. Mehta",
    role: "Civil Services Interviewer",
    purpose: "UPSC. SSC. Government Jobs. Public Administration.",
    category: "Government Interview",
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.16)",
    avatar: "M",
    questionPill: "Government Interview",
    questions: [
      "Explain Directive Principles.",
      "What is a Fundamental Duty?",
      "Explain Article 32.",
      "Explain Parliamentary Democracy.",
    ],
    transcript: [
      "Directive Principles guide the state toward social and economic justice.",
      "Article 32 protects constitutional remedies and strengthens enforcement.",
      "I’d answer with a balanced view of policy, governance, and public accountability.",
    ],
    durationMs: 11800,
    metrics: { confidence: 92, technical: 82, communication: 90, resumeMatch: 94 },
  },
];

export function InterviewShowcase() {
  const frameRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const current = SESSIONS[activeIndex];
    const id = window.setTimeout(() => {
      setActiveIndex((i) => (i + 1) % SESSIONS.length);
    }, current.durationMs);
    return () => window.clearTimeout(id);
  }, [activeIndex]);

  const activeSession = SESSIONS[activeIndex];

  const [scores, setScores] = useState(activeSession.metrics);
  useEffect(() => {
    const resetTimer = window.setTimeout(() => {
      setScores(activeSession.metrics);
    }, 0);

    const interval = window.setInterval(() => {
      setScores((current) => ({
        confidence: clampScore(current.confidence + jitter(2)),
        technical: clampScore(current.technical + jitter(2)),
        communication: clampScore(current.communication + jitter(2)),
        resumeMatch: clampScore(current.resumeMatch + jitter(1)),
      }));
    }, 2400);

    return () => {
      window.clearTimeout(resetTimer);
      window.clearInterval(interval);
    };
  }, [activeSession.id, activeSession.metrics]);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 120, damping: 18 });
  const glowX = useTransform(rotateY, [-6, 6], [30, 70]);
  const glowY = useTransform(rotateX, [-6, 6], [70, 30]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(px * 8);
    rotateXRaw.set(-py * 8);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  const scoreEntries = [
    { label: "Confidence", value: scores.confidence, accent: "#8b5cf6" },
    { label: "Technical", value: scores.technical, accent: "#3b82f6" },
    { label: "Communication", value: scores.communication, accent: "#10b981" },
    { label: "Resume Match", value: scores.resumeMatch, accent: "#f59e0b" },
  ];

  return (
    <div className="relative isolate">
      <motion.div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          backgroundImage: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(560px circle at ${gx}% ${gy}%, ${activeSession.accentSoft}, transparent 62%)`
          ),
        }}
        className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0a0a0f] shadow-[0_54px_140px_-40px_rgba(0,0,0,0.72),0_24px_60px_-24px_rgba(124,58,237,0.35)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_16%)] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)] opacity-70" />
        <div className="pointer-events-none absolute -inset-x-24 top-10 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] blur-3xl" />

        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.025] px-5 py-4 backdrop-blur-xl sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[12px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.8)]"
              style={{ backgroundImage: `linear-gradient(135deg, ${activeSession.accent}, #111827)` }}
            >
              {activeSession.avatar}
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0a0f] bg-[var(--color-green)]" />
            </div>

            <div className="min-w-0 leading-tight">
              <div className="flex items-center gap-2">
                <p className="truncate text-[13px] font-semibold text-white sm:text-[14px]">
                  {activeSession.interviewer}
                </p>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/65">
                  {activeSession.category}
                </span>
              </div>
              <p className="truncate text-[11px] text-[var(--color-text-muted)] sm:text-[12px]">
                {activeSession.role}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
            AI Interview Showcase
          </div>
        </div>

        <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#06060a] px-3 pb-4 pt-3 sm:px-4 sm:pt-4">
          <div className="mx-auto grid w-full max-w-[1240px] gap-6 md:grid-cols-3">
            {SESSIONS.map((session, index) => (
              <VideoCard
                key={session.id}
                session={session}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
            Live interview sessions rotating across the platform
          </div>
        </div>

        <div className="grid gap-px border-t border-white/[0.06] bg-white/[0.05] md:grid-cols-2 xl:grid-cols-4">
          {scoreEntries.map((entry) => (
            <ScoreCell key={entry.label} label={entry.label} value={entry.value} accent={entry.accent} />
          ))}
        </div>
      </motion.div>

    </div>
  );
}

function ScoreCell({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="bg-[#0a0a0f] px-4 py-3.5 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {label}
          </p>
          <p className="mt-1 text-[17px] font-semibold tabular-nums text-white transition-all duration-500">
            {value}%
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/70">
          <span style={{ color: accent }}>↗</span>
          <span className="text-white/50">trend</span>
        </div>
      </div>

      <div className="mt-3 flex h-7 items-end gap-1.5">
        {[0.42, 0.6, 0.5, 0.78, 0.66, 0.84, 0.72].map((height, index) => (
          <span
            key={`${label}-${index}`}
            className="flex-1 rounded-full"
            style={{
              height: `${Math.max(5, height * 28)}px`,
              background: `linear-gradient(180deg, ${accent}, rgba(255,255,255,0.16))`,
              opacity: 0.55 + index * 0.05,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function jitter(range = 2) {
  return Math.round((Math.random() - 0.5) * range * 2);
}

function clampScore(v: number) {
  return Math.min(98, Math.max(82, v));
}

function VideoCard({
  session,
  active,
  onClick,
}: {
  session: Session;
  active: boolean;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    void video.play().catch(() => {});
  }, [session.src]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[22px] border bg-[#090910] text-left transition-all duration-300 hover:-translate-y-0.5 ${
        active
          ? "border-white/20 shadow-[0_26px_70px_-28px_rgba(124,58,237,0.48)]"
          : "border-white/10 shadow-[0_18px_44px_-30px_rgba(0,0,0,0.8)]"
      }`}
    >
      <div className="relative overflow-hidden border-b border-white/[0.08] bg-[#05050a]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.video
            ref={videoRef}
            className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.03]"
            initial={false}
            animate={active ? { scale: 1.01 } : { scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            muted
            loop
            playsInline
            preload="auto"
            autoPlay
          >
            <source src={session.src} type="video/mp4" />
          </motion.video>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.08)_54%,rgba(0,0,0,0.52)_100%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{ backgroundImage: `radial-gradient(520px circle at 50% 16%, ${session.accentSoft}, transparent 60%)` }}
          />

          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/88 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: session.accent }} />
            {session.category}
          </div>
        </div>

        <div className="px-4 pb-4 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[16px] font-semibold leading-tight text-white">
                {session.category}
              </p>
              <p className="mt-1 truncate text-[13px] text-white/70">with {session.interviewer}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}