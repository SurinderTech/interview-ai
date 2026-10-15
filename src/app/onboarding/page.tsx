"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Types ─────────────────────────────────────────────────────────────────────
type TrackId = "jee" | "neet" | "upsc" | "ssc" | "corporate" | "skills" | null;
type PrimaryGoal = "crack_exam" | "get_job" | "build_skills" | "career_growth" | "other" | null;
type LearningStyle = "video" | "practice" | "notes" | "interactive" | null;

interface OnboardingState {
  // Step 1
  track: TrackId;
  // Step 2
  name: string; ageGroup: string; education: string; year: string;
  stream: string; location: string; userType: string; language: string; timezone: string;
  // Step 3
  coreSubjects: string[]; techSkills: string[]; otherInterests: string[];
  // Step 4
  primaryGoal: PrimaryGoal; targetExam: string; targetTimeline: string;
  targetOutcome: string; additionalGoals: string[];
  // Step 5
  learningStyle: LearningStyle; dailyTime: string; studySchedule: string;
  practicePrefs: Record<string, boolean>; notifications: string[];
}

const INITIAL: OnboardingState = {
  track: null,
  name: "", ageGroup: "", education: "", year: "", stream: "", location: "India", userType: "", language: "English", timezone: "Asia/Kolkata (IST)",
  coreSubjects: [], techSkills: [], otherInterests: [],
  primaryGoal: null, targetExam: "", targetTimeline: "12 months", targetOutcome: "", additionalGoals: [],
  learningStyle: null, dailyTime: "2 - 4 hours", studySchedule: "Morning",
  practicePrefs: { timedMocks: true, dailyQuestions: true, detailedFeedback: false, weakAreaFocus: true },
  notifications: ["Daily Reminders"],
};

// ─── Step 1 data ────────────────────────────────────────────────────────────────
const TRACKS = [
  { id: "jee" as TrackId, emoji: "🎓", title: "JEE", subtitle: "Engineering Entrance Exams", desc: "JEE Main, JEE Advanced, BITSAT, VIT, CUET (Engineering)", color: "#818cf8", bg: "rgba(129,140,248,0.1)", border: "rgba(129,140,248,0.35)" },
  { id: "neet" as TrackId, emoji: "🩺", title: "NEET", subtitle: "Medical Entrance Exams", desc: "NEET, AIIMS, JIPMER, State Medical Exams", color: "#f472b6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.3)" },
  { id: "upsc" as TrackId, emoji: "🏛️", title: "UPSC", subtitle: "Civil Services", desc: "UPSC CSE, State PSC, IAS, IPS, IFS & Other Exams", color: "#fb923c", bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.3)" },
  { id: "ssc" as TrackId, emoji: "📋", title: "SSC & Government Jobs", subtitle: "Government Recruitment", desc: "SSC, Banking, Railways, Defence, Police, Teaching and Other Govt. Exams", color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.3)" },
  { id: "corporate" as TrackId, emoji: "💼", title: "Corporate Interviews", subtitle: "Jobs & Career", desc: "Software Engineering, Product, Data, Design, Management & More", color: "#60a5fa", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.3)" },
  { id: "skills" as TrackId, emoji: "</>", title: "Skills & Certifications", subtitle: "Professional Growth", desc: "Coding, Aptitude, Language, Professional Certifications and General Skill Growth", color: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.3)" },
];

// ─── Step 2 data ────────────────────────────────────────────────────────────────
const AGE_GROUPS = ["Under 16", "16 – 18 years", "18 – 22 years", "22 – 26 years", "26 – 30 years", "30+ years"];
const EDUCATION_LEVELS = ["Class 10 (SSC)", "Class 11 – 12 (HSC)", "Undergraduate (B.Tech / B.E.)", "Undergraduate (MBBS / BDS)", "Undergraduate (B.Sc / BA / BCom)", "Post Graduate", "Working Professional", "Other"];
const YEAR_STAGES = ["1st Year", "2nd Year", "3rd Year", "4th Year / Final Year", "Appearing", "Dropper / Repeater", "Not Applicable"];
const STREAMS = ["Science (PCM)", "Science (PCB)", "Science (PCMB)", "Commerce", "Arts / Humanities", "Computer Science & Engineering", "Electronics & Communication", "Other Engineering", "Medical / MBBS", "Other"];
const LANGUAGES = ["English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati", "Kannada", "Other"];
const TIMEZONES = ["Asia/Kolkata (IST)", "Asia/Dubai (GST)", "Europe/London (GMT)", "America/New_York (EST)", "America/Los_Angeles (PST)", "Other"];
const USER_TYPES = ["Student", "Job Seeker", "Working Professional", "Other"];

// ─── Step 3 data ────────────────────────────────────────────────────────────────
const CORE_SUBJECTS = [
  { label: "Mathematics", icon: "⊞" }, { label: "Physics", icon: "⚛" }, { label: "Chemistry", icon: "⚗" },
  { label: "Biology", icon: "🧬" }, { label: "Political Science", icon: "🏛" }, { label: "History", icon: "📜" },
  { label: "Geography", icon: "🌍" }, { label: "Economics", icon: "📊" }, { label: "Reasoning", icon: "🧠" },
  { label: "English", icon: "A" },
];
const TECH_SKILLS = [
  { label: "Python", icon: "🐍" }, { label: "C++", icon: "</>" }, { label: "Java", icon: "☕" },
  { label: "JavaScript", icon: "JS" }, { label: "React", icon: "⚛" }, { label: "Next.js", icon: "N" },
  { label: "Node.js", icon: "⬡" }, { label: "SQL", icon: "🗄" },
  { label: "Data Structures & Algorithms", icon: "🌳" }, { label: "System Design", icon: "🏗" },
  { label: "AI / Machine Learning", icon: "🤖" },
];
const OTHER_INTERESTS = [
  { label: "Competitive Programming", icon: "🏆" }, { label: "Aptitude", icon: "📈" },
  { label: "Communication Skills", icon: "💬" }, { label: "Resume Building", icon: "📄" },
  { label: "Mock Interviews", icon: "🎤" }, { label: "Career Guidance", icon: "🧭" },
];

// ─── Step 4 data ────────────────────────────────────────────────────────────────
const PRIMARY_GOALS = [
  { id: "crack_exam" as PrimaryGoal, icon: "🎓", title: "Crack the Exam", desc: "Get into a top college or institution" },
  { id: "get_job" as PrimaryGoal, icon: "💼", title: "Get a Job", desc: "Prepare for placements and interviews" },
  { id: "build_skills" as PrimaryGoal, icon: "📊", title: "Build Skills", desc: "Learn specific skills and technologies" },
  { id: "career_growth" as PrimaryGoal, icon: "🚀", title: "Career Growth", desc: "Advance in your current career" },
  { id: "other" as PrimaryGoal, icon: "···", title: "Other", desc: "Something else" },
];
const TARGET_TIMELINES = ["3 months", "6 months", "12 months", "2 years", "Not sure"];
const TARGET_EXAMS: Record<string, string[]> = {
  jee: ["JEE Main & Advanced", "JEE Main only", "JEE Advanced only", "BITSAT", "VIT Engineering", "CUET (Engineering)"],
  neet: ["NEET UG", "NEET PG", "AIIMS MBBS", "JIPMER", "State Medical Exam"],
  upsc: ["UPSC CSE Prelims", "UPSC CSE Mains", "UPSC IFS", "State PSC", "UPSC Personality Test"],
  ssc: ["SSC CGL", "SSC CHSL", "IBPS PO", "SBI PO", "RRB NTPC", "NDA / CDS"],
  corporate: ["Software Engineering Role", "Product Manager", "Data Scientist", "UX / Design", "Management", "Sales & Marketing"],
  skills: ["DSA & Competitive Coding", "System Design", "AWS Certification", "Google Cloud", "PMP", "IELTS / TOEFL"],
};

// ─── Step 5 data ────────────────────────────────────────────────────────────────
const LEARNING_STYLES = [
  { id: "video" as LearningStyle, icon: "▶", title: "Video Lessons", desc: "Learn with structured video content" },
  { id: "practice" as LearningStyle, icon: "✏", title: "Practice Questions", desc: "Learn by solving questions" },
  { id: "notes" as LearningStyle, icon: "📖", title: "Notes & Documents", desc: "Prefer reading notes and PDFs" },
  { id: "interactive" as LearningStyle, icon: "👥", title: "Interactive Sessions", desc: "Live/AI interactive learning" },
];
const DAILY_TIMES = ["< 1 hour", "1 - 2 hours", "2 - 4 hours", "4 - 6 hours", "6+ hours"];
const STUDY_SCHEDULES = [
  { label: "Morning", sub: "6 AM – 12 PM", icon: "🌅" },
  { label: "Afternoon", sub: "12 PM – 6 PM", icon: "☀" },
  { label: "Evening", sub: "6 PM – 12 AM", icon: "🌙" },
  { label: "Flexible", sub: "No fixed time", icon: "📅" },
];
const PRACTICE_PREFS = [
  { key: "timedMocks", label: "Timed Mock Tests", desc: "Practice with real exam conditions", icon: "⏱" },
  { key: "dailyQuestions", label: "Daily Practice Questions", desc: "Get a personalized question set daily", icon: "📝" },
  { key: "detailedFeedback", label: "Detailed AI Feedback", desc: "Get in-depth performance analysis", icon: "📊" },
  { key: "weakAreaFocus", label: "Weak Area Focus", desc: "More practice on my weak topics", icon: "🎯" },
];
const NOTIFICATION_OPTIONS = ["Daily Reminders", "Weekly Progress", "Motivational Tips", "Exam Updates"];

// ─── Sidebar step labels ────────────────────────────────────────────────────────
function getSidebarSteps(state: OnboardingState, step: number) {
  const track = TRACKS.find((t) => t.id === state.track);
  const interestLabels = [...state.coreSubjects, ...state.techSkills].slice(0, 3).join(", ");
  const goalLabel = PRIMARY_GOALS.find((g) => g.id === state.primaryGoal)?.title;
  return [
    { step: 1, title: "Your Goal", desc: step > 1 ? `${track?.title ?? ""} - ${track?.subtitle ?? ""}` : "What are you preparing for?" },
    { step: 2, title: "About You", desc: step > 2 ? `${state.education}${state.year ? " • " + state.year : ""}` : "Basic information" },
    { step: 3, title: "Your Interests", desc: step > 3 && interestLabels ? interestLabels : "Subjects & Skills" },
    { step: 4, title: "Your Goals", desc: step > 4 && goalLabel ? `${goalLabel} • ${state.targetTimeline}` : "Target & Timeline" },
    { step: 5, title: "Study Preferences", desc: step > 5 ? `${state.dailyTime} • ${state.studySchedule}` : "Your learning style" },
    { step: 6, title: "Complete", desc: "Review & Get Your Plan" },
  ];
}

// ─── Main component ─────────────────────────────────────────────────────────────
export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [state, setState] = useState<OnboardingState>(INITIAL);

  function go(n: number) { setDirection(n > step ? 1 : -1); setStep(n); }
  function next() { if (step < 6) go(step + 1); }
  function back() { if (step > 1) go(step - 1); }

  function toggle<K extends keyof OnboardingState>(key: K, value: string) {
    setState((p) => {
      const arr = p[key] as string[];
      return { ...p, [key]: arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value] };
    });
  }

  const canNext = (() => {
    if (step === 1) return state.track !== null;
    if (step === 2) return state.name !== "" && state.education !== "";
    if (step === 3) return state.coreSubjects.length > 0 || state.techSkills.length > 0;
    if (step === 4) return state.primaryGoal !== null;
    return true;
  })();

  const sidebarSteps = getSidebarSteps(state, step);
  const activeTrack = TRACKS.find((t) => t.id === state.track);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 32, y: 8 }),
    center: { opacity: 1, x: 0, y: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -32, y: -8 }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b]">
      {/* Full-page background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/media/ai-interview-bg.jpg')" }} />
      <div className="absolute inset-0 bg-[#09090b]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_60%,rgba(124,58,237,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_30%,rgba(59,130,246,0.1),transparent)]" />

      <div className="relative z-10 flex min-h-screen">
        {/* ── Left sidebar ───────────────────────────────────────────────────── */}
        <div className="hidden lg:flex w-[280px] shrink-0 flex-col justify-between px-8 py-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 text-[17px] font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] shadow-[0_8px_20px_-6px_rgba(124,58,237,0.5)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="white" strokeWidth="1.8"/></svg>
            </span>
            InterviewAI
          </a>

          {/* Middle */}
          <div>
            <h2 className="text-[24px] font-bold leading-tight text-white">Welcome to<br />InterviewAI</h2>
            <p className="mt-2 text-[13px] leading-[1.65] text-white/50">
              Let&apos;s personalize your preparation journey. This will help us create a roadmap tailored just for you.
            </p>

            <div className="mt-8 space-y-4">
              {sidebarSteps.map((sl) => (
                <button
                  key={sl.step}
                  onClick={() => sl.step < step ? go(sl.step) : undefined}
                  className="flex w-full items-start gap-3 text-left"
                >
                  <div
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold transition-all duration-300"
                    style={{
                      background: step > sl.step
                        ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                        : step === sl.step
                        ? "linear-gradient(135deg,#7c3aed,#6d28d9)"
                        : "rgba(255,255,255,0.07)",
                      color: step >= sl.step ? "white" : "rgba(255,255,255,0.3)",
                      boxShadow: step === sl.step ? "0 0 0 3px rgba(124,58,237,0.3)" : "none",
                    }}
                  >
                    {step > sl.step ? (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    ) : sl.step}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[13px] font-semibold leading-tight ${step >= sl.step ? "text-white" : "text-white/30"}`}>{sl.title}</p>
                    <p className="mt-0.5 truncate text-[11px] leading-tight text-white/35">{sl.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom badge */}
          <div className="rounded-[16px] border border-[#7c3aed]/25 bg-[#7c3aed]/10 p-4">
            <div className="flex items-center gap-2">
              <span className="text-[16px]">🎯</span>
              <p className="text-[13px] font-semibold text-white">Takes only 2 minutes</p>
            </div>
            <p className="mt-1 text-[12px] text-white/45">Get a personalized roadmap, practice plan and AI insights.</p>
          </div>
        </div>

        {/* ── Main content card ───────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col p-4 lg:py-6 lg:pr-8">
          <div className="flex flex-1 flex-col rounded-[28px] border border-white/10 bg-[#0e0e18]/85 backdrop-blur-2xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-8 py-5">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-medium text-white/50">Step {step} of 6</span>
                <div className="flex gap-1.5">
                  {[1,2,3,4,5,6].map((s) => (
                    <div
                      key={s}
                      className="h-1.5 rounded-full transition-all duration-400"
                      style={{
                        width: s === step ? 32 : 14,
                        background: s < step ? "#7c3aed" : s === step ? "linear-gradient(90deg,#7c3aed,#a78bfa)" : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => window.location.href = "/dashboard"}
                className="text-[13px] text-white/35 hover:text-white/70 transition-colors"
              >
                {step === 6 ? "Finish later →" : "Skip for now →"}
              </button>
            </div>

            {/* Step content (scrollable) */}
            <div className="flex-1 overflow-y-auto px-8 py-7">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  {step === 1 && <Step1 state={state} setState={setState} />}
                  {step === 2 && <Step2 state={state} setState={setState} />}
                  {step === 3 && <Step3 state={state} toggle={toggle} />}
                  {step === 4 && <Step4 state={state} setState={setState} toggle={toggle} />}
                  {step === 5 && <Step5 state={state} setState={setState} toggle={toggle} />}
                  {step === 6 && <Step6 state={state} activeTrack={activeTrack} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-between border-t border-white/[0.06] px-8 py-5">
              <button
                onClick={back}
                disabled={step === 1}
                className="flex items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.03] px-7 py-3 text-[14px] font-medium text-white/60 transition-all hover:bg-white/[0.07] hover:text-white disabled:opacity-25 disabled:cursor-not-allowed"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back
              </button>
              <button
                onClick={step === 6 ? () => window.location.href = "/dashboard" : next}
                disabled={!canNext && step !== 5 && step !== 6}
                className="flex items-center gap-2 rounded-[14px] px-10 py-3 text-[14px] font-semibold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                  boxShadow: "0 12px 32px -8px rgba(124,58,237,0.55)",
                }}
              >
                {step === 6 ? "Start My Journey" : "Next Step"}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 1: Track selection ────────────────────────────────────────────────────
function Step1({ state, setState }: { state: OnboardingState; setState: React.Dispatch<React.SetStateAction<OnboardingState>> }) {
  return (
    <div>
      <h1 className="text-[34px] font-bold text-white">What are you preparing for?</h1>
      <p className="mt-2 text-[15px] text-white/50">Select your primary goal. You can always change this later.</p>
      <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
        {TRACKS.map((track) => {
          const active = state.track === track.id;
          return (
            <motion.button
              key={track.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setState((p) => ({ ...p, track: track.id }))}
              className="relative flex flex-col items-center gap-3 rounded-[18px] border p-5 text-center transition-all duration-200"
              style={{ background: active ? track.bg : "rgba(255,255,255,0.02)", borderColor: active ? track.color : "rgba(255,255,255,0.07)", boxShadow: active ? `0 12px 36px -12px ${track.color}50` : "none" }}
            >
              <div className="absolute right-3.5 top-3.5 flex h-5 w-5 items-center justify-center rounded-full" style={{ background: active ? track.color : "rgba(255,255,255,0.06)", border: active ? "none" : "1px solid rgba(255,255,255,0.14)" }}>
                {active && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5"><path d="M20 6L9 17l-5-5"/></svg>}
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] text-[28px]" style={{ background: `${track.color}18`, border: `1px solid ${track.color}28` }}>
                {track.emoji === "</>" ? <span style={{ color: track.color, fontFamily: "monospace", fontSize: "16px", fontWeight: 700 }}>{"</>"}</span> : track.emoji}
              </div>
              <div>
                <p className="text-[16px] font-bold text-white">{track.title}</p>
                <p className="text-[12px] font-medium" style={{ color: track.color }}>{track.subtitle}</p>
                <p className="mt-1 text-[12px] leading-[1.5] text-white/40">{track.desc}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── STEP 2: About you ─────────────────────────────────────────────────────────
function Step2({ state, setState }: { state: OnboardingState; setState: React.Dispatch<React.SetStateAction<OnboardingState>> }) {
  const set = (k: keyof OnboardingState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setState((p) => ({ ...p, [k]: e.target.value }));
  const selClass = "w-full appearance-none rounded-[12px] border border-white/10 bg-white/[0.04] py-3 pl-10 pr-8 text-[14px] text-white focus:border-[#7c3aed]/60 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/15";
  const inpClass = "w-full rounded-[12px] border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-[14px] text-white placeholder-white/25 focus:border-[#7c3aed]/60 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/15";
  const labelClass = "mb-1.5 block text-[13px] font-medium text-white/70";
  const Arr = () => <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/30" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>;
  return (
    <div>
      <h1 className="text-[34px] font-bold text-white">Tell us about yourself</h1>
      <p className="mt-2 text-[15px] text-white/50">This helps us understand your background and create a better plan.</p>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full Name</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><input type="text" placeholder="Your full name" value={state.name} onChange={set("name")} className={inpClass} /></div>
        </div>
        <div>
          <label className={labelClass}>Age Group</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><select value={state.ageGroup} onChange={set("ageGroup")} className={selClass}><option value="" className="bg-[#111827]">Select age group</option>{AGE_GROUPS.map((a) => <option key={a} value={a} className="bg-[#111827]">{a}</option>)}</select><Arr /></div>
        </div>
        <div>
          <label className={labelClass}>Current Education Level</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg><select value={state.education} onChange={set("education")} className={selClass}><option value="" className="bg-[#111827]">Select level</option>{EDUCATION_LEVELS.map((a) => <option key={a} value={a} className="bg-[#111827]">{a}</option>)}</select><Arr /></div>
        </div>
        <div>
          <label className={labelClass}>Current Year / Stage</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg><select value={state.year} onChange={set("year")} className={selClass}><option value="" className="bg-[#111827]">Select year</option>{YEAR_STAGES.map((a) => <option key={a} value={a} className="bg-[#111827]">{a}</option>)}</select><Arr /></div>
        </div>
        <div>
          <label className={labelClass}>Stream / Course</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg><select value={state.stream} onChange={set("stream")} className={selClass}><option value="" className="bg-[#111827]">Select stream</option>{STREAMS.map((a) => <option key={a} value={a} className="bg-[#111827]">{a}</option>)}</select><Arr /></div>
        </div>
        <div>
          <label className={labelClass}>Location (Country)</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg><input type="text" value={state.location} onChange={set("location")} className={inpClass} /></div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Are you currently a student or preparing for a job?</label>
          <div className="flex flex-wrap gap-2.5 mt-1">
            {USER_TYPES.map((ut) => (
              <button key={ut} type="button" onClick={() => setState((p) => ({ ...p, userType: ut }))}
                className="flex items-center gap-2 rounded-[12px] border px-4 py-2.5 text-[13px] font-medium transition-all duration-200"
                style={{ background: state.userType === ut ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: state.userType === ut ? "#7c3aed" : "rgba(255,255,255,0.08)", color: state.userType === ut ? "white" : "rgba(255,255,255,0.5)" }}>
                {state.userType === ut && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                {ut}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className={labelClass}>Language Preference</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg><select value={state.language} onChange={set("language")} className={selClass}>{LANGUAGES.map((l) => <option key={l} value={l} className="bg-[#111827]">{l}</option>)}</select><Arr /></div>
        </div>
        <div>
          <label className={labelClass}>Timezone</label>
          <div className="relative"><svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><select value={state.timezone} onChange={set("timezone")} className={selClass}>{TIMEZONES.map((t) => <option key={t} value={t} className="bg-[#111827]">{t}</option>)}</select><Arr /></div>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 3: Interests ─────────────────────────────────────────────────────────
function Step3({ state, toggle }: { state: OnboardingState; toggle: <K extends keyof OnboardingState>(key: K, value: string) => void }) {
  function Chip({ item, active, stateKey }: { item: { label: string; icon: string }; active: boolean; stateKey: keyof OnboardingState }) {
    return (
      <button
        type="button"
        onClick={() => toggle(stateKey, item.label)}
        className="flex items-center gap-2.5 rounded-[12px] border px-3.5 py-2.5 text-left transition-all duration-200"
        style={{ background: active ? "rgba(124,58,237,0.14)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)" }}
      >
        <span className="text-[15px] shrink-0" style={{ fontFamily: item.icon.length <= 2 && /^[A-Z/]/.test(item.icon) ? "monospace" : undefined, color: active ? "#a78bfa" : "rgba(255,255,255,0.5)", fontSize: item.icon.length > 1 ? "13px" : undefined, fontWeight: item.icon.length > 1 ? 700 : undefined }}>{item.icon}</span>
        <span className={`text-[13px] font-medium flex-1 ${active ? "text-white" : "text-white/60"}`}>{item.label}</span>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all" style={{ background: active ? "#7c3aed" : "rgba(255,255,255,0.06)", border: active ? "none" : "1px solid rgba(255,255,255,0.14)" }}>
          {active && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5"><path d="M20 6L9 17l-5-5"/></svg>}
        </span>
      </button>
    );
  }

  return (
    <div>
      <h1 className="text-[34px] font-bold text-white">What are your interests?</h1>
      <p className="mt-2 text-[15px] text-white/50">Select the subjects, skills or areas you want to focus on. You can choose multiple options.</p>

      {/* Core Subjects */}
      <div className="mt-7">
        <div className="flex items-center gap-2.5">
          <span className="text-[16px]">📚</span>
          <h3 className="text-[15px] font-semibold text-white">Core Subjects</h3>
          <span className="text-[12px] text-white/40">(Select relevant)</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {CORE_SUBJECTS.map((item) => (
            <Chip key={item.label} item={item} active={state.coreSubjects.includes(item.label)} stateKey="coreSubjects" />
          ))}
        </div>
      </div>

      {/* Skills & Technologies */}
      <div className="mt-7">
        <div className="flex items-center gap-2.5">
          <span className="text-[16px]">⚙</span>
          <h3 className="text-[15px] font-semibold text-white">Skills &amp; Technologies</h3>
          <span className="text-[12px] text-white/40">(For job seekers / professionals)</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {TECH_SKILLS.map((item) => (
            <Chip key={item.label} item={item} active={state.techSkills.includes(item.label)} stateKey="techSkills" />
          ))}
        </div>
      </div>

      {/* Other Interests */}
      <div className="mt-7">
        <div className="flex items-center gap-2.5">
          <span className="text-[18px]">⭐</span>
          <h3 className="text-[15px] font-semibold text-white">Other Interests</h3>
          <span className="text-[12px] text-white/40">(Optional)</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {OTHER_INTERESTS.map((item) => (
            <Chip key={item.label} item={item} active={state.otherInterests.includes(item.label)} stateKey="otherInterests" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── STEP 4: Set goals ─────────────────────────────────────────────────────────
function Step4({ state, setState, toggle }: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
  toggle: <K extends keyof OnboardingState>(key: K, value: string) => void;
}) {
  const [goalInput, setGoalInput] = useState("");
  const trackExams = state.track ? TARGET_EXAMS[state.track] ?? [] : [];

  function addGoal() {
    const v = goalInput.trim();
    if (v && !state.additionalGoals.includes(v)) {
      setState((p) => ({ ...p, additionalGoals: [...p.additionalGoals, v] }));
      setGoalInput("");
    }
  }

  return (
    <div>
      <h1 className="text-[34px] font-bold text-white">Set Your Goals</h1>
      <p className="mt-2 text-[15px] text-white/50">Tell us what you want to achieve. We&apos;ll create a personalized roadmap to help you get there.</p>

      {/* Primary Goal */}
      <div className="mt-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[15px]">🎯</span>
          <h3 className="text-[14px] font-semibold text-white">Your Primary Goal</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PRIMARY_GOALS.map((g) => {
            const active = state.primaryGoal === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setState((p) => ({ ...p, primaryGoal: g.id }))}
                className="relative flex flex-col items-center gap-2 rounded-[16px] border p-4 text-center transition-all duration-200"
                style={{ background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)", boxShadow: active ? "0 8px 24px -8px rgba(124,58,237,0.4)" : "none" }}
              >
                {active && (
                  <div className="absolute right-2.5 top-2.5 flex h-4.5 w-4.5 h-[18px] w-[18px] items-center justify-center rounded-full bg-[#7c3aed]">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                )}
                <span className="text-[22px]">{g.icon === "···" ? <span className="text-[18px] font-bold text-white/50">···</span> : g.icon}</span>
                <p className="text-[12px] font-semibold text-white leading-tight">{g.title}</p>
                <p className="text-[11px] text-white/40 leading-tight">{g.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Target exam dropdown */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <h3 className="text-[14px] font-semibold text-white">Your Target Exam / Opportunity</h3>
        </div>
        <div className="relative">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <select
            value={state.targetExam}
            onChange={(e) => setState((p) => ({ ...p, targetExam: e.target.value }))}
            className="w-full appearance-none rounded-[12px] border border-white/10 bg-white/[0.04] py-3 pl-10 pr-8 text-[14px] text-white focus:border-[#7c3aed]/60 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/15"
          >
            <option value="" className="bg-[#111827]">Select target exam or opportunity</option>
            {trackExams.map((e) => <option key={e} value={e} className="bg-[#111827]">{e}</option>)}
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/30" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>

      {/* Target Timeline */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <h3 className="text-[14px] font-semibold text-white">Target Timeline</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {TARGET_TIMELINES.map((t) => {
            const active = state.targetTimeline === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setState((p) => ({ ...p, targetTimeline: t }))}
                className="flex items-center gap-2 rounded-[12px] border px-5 py-2.5 text-[13px] font-medium transition-all duration-200"
                style={{ background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)", color: active ? "white" : "rgba(255,255,255,0.55)" }}
              >
                {t}
                {active && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Outcome textarea */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[15px]">🏆</span>
          <h3 className="text-[14px] font-semibold text-white">Your Target Outcome</h3>
        </div>
        <div className="relative">
          <textarea
            value={state.targetOutcome}
            onChange={(e) => setState((p) => ({ ...p, targetOutcome: e.target.value.slice(0, 300) }))}
            placeholder="e.g. Get into IIT with Computer Science branch"
            rows={3}
            className="w-full rounded-[12px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white placeholder-white/25 resize-none focus:border-[#7c3aed]/60 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/15"
          />
          <span className="absolute right-3 bottom-3 text-[11px] text-white/25">{state.targetOutcome.length}/300</span>
        </div>
      </div>

      {/* Additional Goals */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          <h3 className="text-[14px] font-semibold text-white">Additional Goals <span className="text-white/40 font-normal">(Optional)</span></h3>
        </div>
        <div className="flex flex-wrap gap-2.5 mb-3">
          {state.additionalGoals.map((goal) => (
            <span key={goal} className="flex items-center gap-1.5 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/12 px-3.5 py-1.5 text-[13px] font-medium text-white">
              {goal}
              <button type="button" onClick={() => setState((p) => ({ ...p, additionalGoals: p.additionalGoals.filter((g) => g !== goal) }))} className="text-white/40 hover:text-white ml-0.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addGoal(); } }}
            placeholder="Add another goal..."
            className="flex-1 rounded-[12px] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder-white/25 focus:border-[#7c3aed]/60 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/15"
          />
          <button type="button" onClick={addGoal} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 5: Study Preferences ─────────────────────────────────────────────────
function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-all duration-200"
      style={{ background: on ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "rgba(255,255,255,0.12)" }}
      aria-checked={on}
      role="switch"
    >
      <span
        className="inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{ transform: on ? "translate(21px,2px)" : "translate(2px,2px)" }}
      />
    </button>
  );
}

function Step5({ state, setState, toggle }: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
  toggle: <K extends keyof OnboardingState>(key: K, value: string) => void;
}) {
  return (
    <div>
      <h1 className="text-[34px] font-bold text-white">Study Preferences</h1>
      <p className="mt-2 text-[15px] text-white/50">Help us understand your learning style and availability so we can create a plan that actually works for you.</p>

      {/* 1. Learning Style */}
      <div className="mt-7">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[15px]">🎓</span>
          <h3 className="text-[14px] font-semibold text-white">1. Learning Style</h3>
          <span className="text-[12px] text-white/40">How do you learn best?</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LEARNING_STYLES.map((ls) => {
            const active = state.learningStyle === ls.id;
            return (
              <button
                key={ls.id}
                type="button"
                onClick={() => setState((p) => ({ ...p, learningStyle: ls.id }))}
                className="relative flex flex-col items-center gap-2 rounded-[16px] border p-4 text-center transition-all duration-200"
                style={{ background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)", boxShadow: active ? "0 8px 24px -8px rgba(124,58,237,0.4)" : "none" }}
              >
                {active && (
                  <div className="absolute right-2.5 top-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#7c3aed]">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                )}
                <span className="text-[20px]">{ls.icon}</span>
                <p className="text-[12px] font-semibold text-white">{ls.title}</p>
                <p className="text-[11px] text-white/40 leading-tight">{ls.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Daily Study Time */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <h3 className="text-[14px] font-semibold text-white">2. Daily Study Time</h3>
          <span className="text-[12px] text-white/40">How much time can you dedicate daily?</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {DAILY_TIMES.map((t) => {
            const active = state.dailyTime === t;
            return (
              <button key={t} type="button" onClick={() => setState((p) => ({ ...p, dailyTime: t }))}
                className="flex items-center gap-2 rounded-[12px] border px-5 py-2.5 text-[13px] font-medium transition-all duration-200"
                style={{ background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)", color: active ? "white" : "rgba(255,255,255,0.55)" }}>
                {t}
                {active && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Study Schedule */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <h3 className="text-[14px] font-semibold text-white">3. Preferred Study Schedule</h3>
          <span className="text-[12px] text-white/40">When do you usually study?</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {STUDY_SCHEDULES.map((s) => {
            const active = state.studySchedule === s.label;
            return (
              <button key={s.label} type="button" onClick={() => setState((p) => ({ ...p, studySchedule: s.label }))}
                className="flex items-center gap-2.5 rounded-[12px] border px-4 py-3 transition-all duration-200"
                style={{ background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)" }}>
                <span className="text-[16px]">{s.icon}</span>
                <div className="text-left">
                  <p className={`text-[13px] font-semibold ${active ? "text-white" : "text-white/60"}`}>{s.label}</p>
                  <p className="text-[11px] text-white/35">{s.sub}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Practice & Feedback Preferences */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 16v.01M12 8v4"/></svg>
          <h3 className="text-[14px] font-semibold text-white">4. Practice &amp; Feedback Preferences</h3>
          <span className="text-[12px] text-white/40">How would you like to practice and receive feedback?</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PRACTICE_PREFS.map((pref) => (
            <div key={pref.key} className="flex items-center justify-between rounded-[14px] border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="text-[16px]">{pref.icon}</span>
                <div>
                  <p className="text-[13px] font-semibold text-white">{pref.label}</p>
                  <p className="text-[11px] text-white/40">{pref.desc}</p>
                </div>
              </div>
              <Toggle
                on={state.practicePrefs[pref.key] ?? false}
                onToggle={() => setState((p) => ({ ...p, practicePrefs: { ...p.practicePrefs, [pref.key]: !p.practicePrefs[pref.key] } }))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 5. Notifications */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
          <h3 className="text-[14px] font-semibold text-white">5. Notifications &amp; Reminders</h3>
          <span className="text-[12px] text-white/40">Stay consistent with smart reminders.</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {NOTIFICATION_OPTIONS.map((n) => {
            const active = state.notifications.includes(n);
            return (
              <button key={n} type="button" onClick={() => toggle("notifications", n)}
                className="flex items-center gap-2 rounded-[12px] border px-4 py-2.5 text-[13px] font-medium transition-all duration-200"
                style={{ background: active ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)", borderColor: active ? "#7c3aed" : "rgba(255,255,255,0.08)", color: active ? "white" : "rgba(255,255,255,0.55)" }}>
                {active && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                {n}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── STEP 6: You're Almost Ready! ──────────────────────────────────────────────
function Step6({ state, activeTrack }: { state: OnboardingState; activeTrack: typeof TRACKS[number] | undefined }) {
  const goalLabel = PRIMARY_GOALS.find((g) => g.id === state.primaryGoal)?.title ?? "—";
  const interestsList = [...state.coreSubjects, ...state.techSkills].slice(0, 5).join(", ") || "—";
  const prefsList = Object.entries(state.practicePrefs).filter(([, v]) => v).map(([k]) => PRACTICE_PREFS.find((p) => p.key === k)?.label ?? k).join(", ");

  const summaryCards = [
    { icon: "🎓", title: "Primary Goal", lines: [goalLabel, activeTrack?.subtitle ?? "—", "Engineering Entrance Exam"] },
    { icon: "👤", title: "About You", lines: [state.name || "—", state.education || "—", state.year ? `Age: ${state.ageGroup}` : state.ageGroup || "—"] },
    { icon: "📚", title: "Interests", lines: [interestsList] },
    { icon: "🎯", title: "Target & Timeline", lines: [state.targetExam || "—", state.targetTimeline, state.targetOutcome ? state.targetOutcome.slice(0, 40) + (state.targetOutcome.length > 40 ? "…" : "") : ""] },
    { icon: "⚙", title: "Study Preferences", lines: [`${state.dailyTime} daily`, `${state.studySchedule} (6 AM – 12 PM)`, prefsList.slice(0, 40)] },
    { icon: "🔔", title: "Notifications", lines: state.notifications.length > 0 ? state.notifications : ["—"] },
  ];

  const PHASES = [
    { phase: "1", months: "Months 1–3", label: "Build Fundamentals", color: "#818cf8", tasks: ["Revise core concepts", "Practice questions", "Weekly mock tests"] },
    { phase: "2", months: "Months 4–6", label: "Strengthen & Practice", color: "#a78bfa", tasks: ["Advanced topics", "Chapter-wise tests", "Performance analysis"] },
    { phase: "3", months: "Months 7–9", label: "Full Syllabus & Mocks", color: "#f472b6", tasks: ["Complete syllabus", "Full-length mock tests", "Weak area focus"] },
    { phase: "4", months: "Months 10–12", label: "Revision & Final Prep", color: "#fb923c", tasks: ["Previous year papers", "Final mock series", "Exam strategy & tips"] },
  ];

  const AI_INSIGHTS = [
    { icon: "👤", title: "Personalized Roadmap", desc: "A step-by-step plan based on your goal and timeline." },
    { icon: "📊", title: "Smart Practice Plan", desc: "Adaptive questions based on your progress." },
    { icon: "💡", title: "Continuous AI Support", desc: "Get insights, feedback and motivation throughout." },
  ];

  return (
    <div>
      <h1 className="text-[34px] font-bold text-white">🎉 You&apos;re Almost Ready!</h1>
      <p className="mt-2 text-[15px] text-white/50">Here&apos;s a summary of your information. Review and make changes if needed.<br />We&apos;ll create your personalized roadmap based on this.</p>

      {/* Summary cards */}
      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {summaryCards.map((card) => (
          <div key={card.title} className="group relative rounded-[16px] border border-white/[0.06] bg-white/[0.03] p-4">
            <button className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity text-white/30 hover:text-white">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[15px]">{card.icon}</span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/40">{card.title}</p>
            </div>
            {card.lines.map((line, i) => (
              <p key={i} className={`leading-snug ${i === 0 ? "text-[14px] font-semibold text-white" : "text-[12px] text-white/45 mt-0.5"}`}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Plan Preview */}
      <div className="mt-6 rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[15px]">✨</span>
            <h3 className="text-[14px] font-semibold text-white">Your Personalized Plan Preview</h3>
          </div>
          <button className="text-[13px] text-[#a78bfa] hover:opacity-80 transition-opacity">View Sample Plan →</button>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <div key={phase.phase} className="rounded-[14px] border p-3.5" style={{ borderColor: `${phase.color}30`, background: `${phase.color}0a` }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: phase.color }}>
                  {phase.phase}
                </div>
                <div>
                  <p className="text-[10px] text-white/40 leading-none">{phase.months}</p>
                  <p className="text-[12px] font-semibold text-white leading-tight">{phase.label}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {phase.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-1.5 text-[11px] text-white/50">
                    <svg className="mt-0.5 shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={phase.color} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-4 rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[15px]">✨</span>
          <h3 className="text-[14px] font-semibold text-white">AI Insights for You</h3>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {AI_INSIGHTS.map((ins) => (
            <div key={ins.title} className="flex flex-col items-center gap-2 rounded-[14px] border border-white/[0.06] bg-white/[0.02] p-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#7c3aed]/15 text-[18px]">{ins.icon}</div>
              <p className="text-[13px] font-semibold text-white">{ins.title}</p>
              <p className="text-[12px] text-white/45 leading-[1.5]">{ins.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
