"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const SIDE_LINKS = [
  { icon: "⊞", label: "Dashboard", active: true, href: "#" },
  { icon: "▶", label: "Practice", href: "#" },
  { icon: "🎤", label: "Mock Interview", href: "#" },
  { icon: "📝", label: "Tests", href: "#" },
  { icon: "📊", label: "Analytics", href: "#" },
  { icon: "📅", label: "Study Plan", href: "#" },
];

const QUICK_CARDS = [
  { icon: "🔵", color: "#818cf8", label: "Continue Practice", sub: "Physics - Mechanics", detail: "60% completed", cta: "Resume" },
  { icon: "🎤", color: "#a78bfa", label: "Mock Interview", sub: "UPSC - Personality Test", detail: "Start Now", cta: "Start" },
  { icon: "⚡", color: "#fb923c", label: "Current Affairs", sub: "Daily Quiz", detail: "10 Questions", cta: "Begin" },
  { icon: "📈", color: "#34d399", label: "Performance", sub: "Your Analytics", detail: "+12% this week", cta: "View" },
];

const RECENT_SESSIONS = [
  { subject: "Physics", topic: "Kinematics & Laws of Motion", score: 78, time: "2 hours ago", track: "JEE Main" },
  { subject: "Chemistry", topic: "Organic Chemistry - Reactions", score: 85, time: "Yesterday", track: "JEE Main" },
  { subject: "Mathematics", topic: "Calculus - Derivatives", score: 91, time: "2 days ago", track: "JEE Main" },
];

const RECOMMENDED = [
  { title: "Thermodynamics Practice", desc: "30 MCQs · 45 min", tag: "Weak Area", tagColor: "#ef4444" },
  { title: "Chemical Bonding Quiz", desc: "25 MCQs · 30 min", tag: "Recommended", tagColor: "#7c3aed" },
  { title: "Quadratic Equations", desc: "20 MCQs · 25 min", tag: "New", tagColor: "#10b981" },
];

export default function DashboardPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#09090b] text-white">
      {/* Sidebar */}
      <aside className={`${mobileNavOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 w-[220px] flex-col border-r border-white/[0.06] bg-[#0d0d0f] transition-transform duration-300 lg:relative lg:translate-x-0 lg:flex`}>
        <div className="flex h-[64px] items-center gap-2.5 border-b border-white/[0.06] px-5">
          <a href="/" className="flex items-center gap-2 text-[16px] font-semibold text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="white" strokeWidth="1.8"/></svg>
            </span>
            InterviewAI
          </a>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {SIDE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[13px] font-medium transition-all duration-150 ${
                link.active
                  ? "bg-[#7c3aed]/15 text-white"
                  : "text-white/45 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <span className="text-[14px]">{link.icon}</span>
              {link.label}
              {link.active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/[0.06] p-4">
          <div className="flex items-center gap-2.5 rounded-[10px] bg-white/[0.03] px-3 py-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-[11px] font-bold text-white">P</div>
            <div>
              <p className="text-[12px] font-semibold text-white">Priya Sharma</p>
              <p className="text-[10px] text-white/40">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setMobileNavOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Top bar */}
        <header className="flex h-[64px] items-center justify-between border-b border-white/[0.06] bg-[#09090b]/80 px-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="rounded-[8px] p-2 text-white/50 hover:bg-white/5 hover:text-white lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7H20M4 12H20M4 17H20"/></svg>
            </button>
            <div className="relative hidden sm:block">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input
                type="text"
                placeholder="Search for tests, interviews, or topics..."
                className="w-[280px] rounded-[10px] border border-white/[0.06] bg-white/[0.03] py-2 pl-9 pr-4 text-[13px] text-white placeholder-white/25 focus:border-white/15 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-[10px] p-2.5 text-white/50 hover:bg-white/5 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#7c3aed]" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] text-[12px] font-bold text-white">P</div>
          </div>
        </header>

        {/* Page */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h1 className="text-[22px] font-bold text-white">Good Morning, Priya! 👋</h1>
            <p className="mt-0.5 text-[14px] text-white/50">Your Personalized Preparation Journey</p>
          </motion.div>

          {/* Quick cards */}
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {QUICK_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="cursor-pointer rounded-[16px] border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[16px]"
                    style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    style={{ background: `${card.color}18`, color: card.color }}
                  >
                    {card.cta}
                  </span>
                </div>
                <p className="mt-3 text-[13px] font-semibold text-white">{card.label}</p>
                <p className="text-[12px] text-white/40">{card.sub}</p>
                <p className="mt-1 text-[11px]" style={{ color: card.color }}>{card.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Body grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
            {/* Left: Recent sessions + Recommended */}
            <div className="space-y-6">
              {/* Recent sessions */}
              <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-semibold text-white">Recent Sessions</h2>
                  <a href="#" className="text-[13px] text-[#a78bfa] hover:opacity-80">View All →</a>
                </div>
                <div className="mt-4 space-y-3">
                  {RECENT_SESSIONS.map((s) => (
                    <div key={s.topic} className="flex items-center justify-between rounded-[12px] border border-white/[0.04] bg-white/[0.02] p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#7c3aed]/15 text-[13px] font-bold text-[#a78bfa]">
                          {s.subject.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-white">{s.topic}</p>
                          <p className="text-[11px] text-white/40">{s.track} · {s.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[15px] font-bold text-white">{s.score}%</p>
                        <p className="text-[11px] text-white/40">Score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended */}
              <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-semibold text-white">Recommended for You</h2>
                  <a href="#" className="text-[13px] text-[#a78bfa] hover:opacity-80">View All →</a>
                </div>
                <div className="mt-4 space-y-3">
                  {RECOMMENDED.map((r) => (
                    <div key={r.title} className="flex items-center justify-between rounded-[12px] border border-white/[0.04] bg-white/[0.02] p-3.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-medium text-white">{r.title}</p>
                          <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                            style={{ background: `${r.tagColor}18`, color: r.tagColor }}
                          >
                            {r.tag}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11px] text-white/40">{r.desc}</p>
                      </div>
                      <button className="rounded-[10px] border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-white/70 hover:bg-white/[0.08] hover:text-white transition-all">
                        Start
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Progress + Change track */}
            <div className="space-y-5">
              {/* Progress */}
              <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
                <h2 className="text-[15px] font-semibold text-white">Your Progress</h2>
                <div className="mt-4 space-y-4">
                  {[
                    { subject: "Physics", percent: 68, color: "#818cf8" },
                    { subject: "Chemistry", percent: 55, color: "#f472b6" },
                    { subject: "Mathematics", percent: 81, color: "#34d399" },
                  ].map((p) => (
                    <div key={p.subject}>
                      <div className="flex justify-between text-[13px]">
                        <span className="text-white/70">{p.subject}</span>
                        <span className="font-semibold text-white">{p.percent}%</span>
                      </div>
                      <div className="mt-1.5 h-2 rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${p.percent}%` }}
                          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                          className="h-2 rounded-full"
                          style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}99)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming */}
              <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-5">
                <h2 className="text-[15px] font-semibold text-white">Today&apos;s Plan</h2>
                <div className="mt-4 space-y-2.5">
                  {[
                    { time: "10:00 AM", task: "Physics MCQ Practice", done: true },
                    { time: "12:00 PM", task: "Current Affairs Quiz", done: false },
                    { time: "3:00 PM", task: "Mock Test - Chem", done: false },
                  ].map((t) => (
                    <div key={t.task} className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.done ? "bg-[#10b981]" : "border border-white/20"}`}>
                        {t.done && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                      </div>
                      <div>
                        <p className={`text-[13px] font-medium ${t.done ? "line-through text-white/35" : "text-white"}`}>{t.task}</p>
                        <p className="text-[11px] text-white/35">{t.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Change track banner */}
              <div className="rounded-[20px] border border-[#7c3aed]/25 bg-[#7c3aed]/08 p-4">
                <p className="text-[13px] font-semibold text-white">Preparing for something else?</p>
                <p className="mt-1 text-[12px] text-white/50">You can change your preparation track any time from your profile — without losing progress.</p>
                <a href="/onboarding" className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#a78bfa] hover:opacity-80">
                  Change track →
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
