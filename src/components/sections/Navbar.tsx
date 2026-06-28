"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          ? "bg-[#09090B]/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-[17px] font-semibold tracking-tight transition-transform duration-300 hover:scale-105"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--color-purple)] to-[var(--color-blue)] shadow-glow-purple">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="white" strokeWidth="1.8" />
            </svg>
          </span>
          InterviewAI
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-[var(--color-text-secondary)] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="md">
            Log in
          </Button>
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-[10px] text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7H20M4 12H20M4 17H20" />
            </svg>
          )}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#09090B]/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[10px] px-3 py-3 text-[15px] font-medium text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3">
              <Button variant="secondary" size="md" className="w-full">
                Log in
              </Button>
              <Button variant="primary" size="md" className="w-full">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
