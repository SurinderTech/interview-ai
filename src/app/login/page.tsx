"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const EXAM_BADGES = [
  { label: "JEE", sub: "Engineering" },
  { label: "NEET", sub: "Medical" },
  { label: "UPSC", sub: "Civil Services" },
  { label: "SSC", sub: "Government Jobs" },
  { label: "Corporate", sub: "Interviews" },
  { label: "Skills &\nCerts", sub: "" },
];

const STATS = [
  { value: "1M+", label: "Students & Professionals" },
  { value: "500K+", label: "Practice Questions" },
  { value: "95%", label: "Reported Improvement" },
  { value: "4.8/5", label: "Average Rating", icon: "⭐" },
];

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Realistic AI Interviews",
    desc: "Talk to AI like a real interviewer and get detailed feedback.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: "Personalized Practice",
    desc: "Questions and study plans based on your goals.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Track Your Progress",
    desc: "Identify weak areas and improve with focused practice.",
  },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    window.location.href = "/dashboard";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/ai-interview-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/70 to-[#09090b]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(124,58,237,0.15),transparent)]" />

      <div className="relative z-10 flex min-h-screen">
        {/* Left panel */}
        <div className="hidden lg:flex lg:flex-1 flex-col justify-between px-16 py-12">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 text-[18px] font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] shadow-[0_8px_24px_-8px_rgba(124,58,237,0.6)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M9 22V12h6v10" stroke="white" strokeWidth="1.8"/>
                </svg>
              </span>
              InterviewAI
            </a>
            <div className="flex items-center gap-2 text-[13px] text-white/55">
              New to InterviewAI?
              <a href="/register" className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/15 bg-white/[0.04] px-3.5 py-2 font-medium text-white hover:bg-white/[0.08] transition-all">
                Create Account →
              </a>
            </div>
          </div>

          {/* Center content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              AI-Powered Preparation for Every Goal
            </div>

            <h1 className="mt-4 text-[42px] font-bold leading-[1.1] tracking-tight text-white">
              One Platform.{" "}
              <span className="bg-gradient-to-r from-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent">
                Limitless
              </span>{" "}
              Possibilities.
            </h1>

            <p className="mt-5 max-w-[400px] text-[16px] leading-[1.7] text-white/65">
              Practice interviews, competitive exams and professional assessments with AI. Get personalized questions, real-time feedback and a clear improvement plan — all in one place.
            </p>

            <div className="mt-8 space-y-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.06] text-[var(--color-purple)]">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-[13px] text-white/55">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exam badge row */}
            <div className="mt-10 flex flex-wrap gap-3">
              {EXAM_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-1 rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-[13px] font-semibold text-white whitespace-pre-line text-center">{b.label}</span>
                  {b.sub && <span className="text-[11px] text-white/45">{b.sub}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-[14px] border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                <p className="text-[20px] font-bold text-white">{s.icon}{s.value}</p>
                <p className="mt-0.5 text-[11px] text-white/45">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-[480px] lg:px-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="w-full max-w-[420px] rounded-[28px] border border-white/10 bg-[#111827]/80 p-8 backdrop-blur-2xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)]"
          >
            {/* Mobile logo */}
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <a href="/" className="flex items-center gap-2 text-[16px] font-semibold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="white" strokeWidth="1.8"/></svg>
                </span>
                InterviewAI
              </a>
              <a href="/register" className="text-[13px] text-white/55 hover:text-white">New? <span className="text-[#a78bfa]">Create Account →</span></a>
            </div>

            <h2 className="text-[24px] font-bold text-white">Welcome Back</h2>
            <p className="mt-1.5 text-[14px] text-white/55">Sign in to continue your preparation journey.</p>

            {/* Social buttons */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-[14px] border border-white/15 bg-white py-3 text-[14px] font-semibold text-gray-800 transition-all hover:bg-gray-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] py-3 text-[14px] font-semibold text-white transition-all hover:bg-white/[0.08]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.2-2.403.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.08]" />
              <span className="text-[13px] text-white/35">OR</span>
              <div className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-white/80">Email Address</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
                  </svg>
                  <input
                    type="email"
                    id="login-email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full rounded-[12px] border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-[14px] text-white placeholder-white/30 transition-all focus:border-[#7c3aed]/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-white/80">Password</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="login-password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    className="w-full rounded-[12px] border border-white/10 bg-white/[0.04] py-3 pl-10 pr-11 text-[14px] text-white placeholder-white/30 transition-all focus:border-[#7c3aed]/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-white/20 bg-white/[0.04] accent-[#7c3aed]"
                  />
                  <span className="text-[13px] text-white/60">Remember me</span>
                </label>
                <a href="#" className="text-[13px] text-[#a78bfa] hover:opacity-80 transition-opacity">Forgot password?</a>
              </div>

              <button
                type="submit"
                id="login-submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_32px_-8px_rgba(124,58,237,0.6)] transition-all hover:shadow-[0_16px_40px_-8px_rgba(124,58,237,0.75)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                ) : null}
                {loading ? "Signing in..." : "Sign In →"}
              </button>
            </form>

            <p className="mt-5 text-center text-[13px] text-white/45">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-[#a78bfa] hover:opacity-80 font-medium">Create one now →</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
