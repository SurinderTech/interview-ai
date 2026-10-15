"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import clsx from "clsx";

/* ─── Nav structure ─────────────────────────────────────────────── */
const NAV_LINKS = [
  {
    label: "Features",
    href: "#features",
    dropdown: [
      { label: "AI Mock Interviews", href: "#features", icon: "🎤" },
      { label: "Exam Practice", href: "#categories", icon: "📝" },
      { label: "Analytics", href: "#features", icon: "📊" },
    ],
  },
  {
    label: "For Students",
    href: "#categories",
    dropdown: [
      { label: "JEE / NEET / CUET", href: "#categories", icon: "🎓" },
      { label: "UPSC / State PSC", href: "#categories", icon: "🏛️" },
      { label: "SSC / Banking", href: "#categories", icon: "🏛" },
    ],
  },
  {
    label: "For Job Seekers",
    href: "#categories",
    dropdown: [
      { label: "Campus Placements", href: "#categories", icon: "🎓" },
      { label: "Technical Interviews", href: "#categories", icon: "💻" },
      { label: "HR & Behavioral", href: "#categories", icon: "🤝" },
    ],
  },
  { label: "How It Works", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Blog", href: "#", icon: "📰" },
      { label: "FAQ", href: "#faq", icon: "❓" },
      { label: "Community", href: "#", icon: "💬" },
    ],
  },
];

/* ─── Logo ────────────────────────────────────────────────────────── */
function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight text-white transition-opacity hover:opacity-85"
    >
      {/* Chart-bars icon matching screenshot */}
      <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="14" width="4" height="8" rx="1" fill="white"/>
          <rect x="9" y="9" width="4" height="13" rx="1" fill="white" opacity="0.8"/>
          <rect x="16" y="4" width="4" height="18" rx="1" fill="white" opacity="0.6"/>
        </svg>
      </span>
      InterviewAI
    </a>
  );
}

/* ─── Single nav item (with optional dropdown) ────────────────────── */
function NavItem({
  link,
}: {
  link: (typeof NAV_LINKS)[number];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!link.dropdown) {
    return (
      <a
        href={link.href}
        className="flex items-center text-[13.5px] font-medium text-white/55 transition-colors hover:text-white"
      >
        {link.label}
      </a>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[13.5px] font-medium text-white/55 transition-colors hover:text-white"
      >
        {link.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={clsx("transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-50 min-w-[220px] rounded-[16px] border border-white/10 bg-[#0d0d14] p-2 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          {link.dropdown.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[13px] font-medium text-white/55 transition-all hover:bg-white/[0.05] hover:text-white"
            >
              <span className="text-[16px]">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Navbar ─────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-6">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.label} link={link} />
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode((v) => !v)}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-white/40 transition-all hover:bg-white/[0.05] hover:text-white"
          >
            {darkMode ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            )}
          </button>

          <a
            href="/login"
            className="rounded-[10px] px-4 py-2 text-[13.5px] font-medium text-white/55 transition-all hover:bg-white/[0.05] hover:text-white"
          >
            Log in
          </a>

          <a
            href="/register"
            className="inline-flex items-center gap-1.5 rounded-[11px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] px-5 py-2 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.55)] transition-all hover:shadow-[0_12px_32px_-8px_rgba(124,58,237,0.7)] hover:scale-[1.02]"
          >
            Get Started Free
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-[9px] text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6L18 18M6 18L18 6"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7H20M4 12H20M4 17H20"/>
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#09090B]/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-[10px] px-3 py-3 text-[15px] font-medium text-white/55 hover:bg-white/[0.04] hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-1">
              <a href="/login" className="rounded-[12px] border border-white/10 py-2.5 text-center text-[15px] font-medium text-white hover:bg-white/[0.04]">
                Log in
              </a>
              <a href="/register" className="rounded-[12px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] py-2.5 text-center text-[15px] font-semibold text-white">
                Get Started Free
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
