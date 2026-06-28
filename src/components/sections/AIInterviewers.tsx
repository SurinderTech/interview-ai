"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const INTERVIEWERS = [
  {
    name: "Alex",
    role: "Frontend Engineering Lead",
    intro: "Sharp on React internals, state management, and performance — expect deep follow-ups.",
    color: "var(--color-purple)",
    initial: "A",
  },
  {
    name: "Sarah",
    role: "Behavioral & Leadership",
    intro: "Focused on how you think under pressure, communicate, and lead through ambiguity.",
    color: "var(--color-blue)",
    initial: "S",
  },
  {
    name: "Michael",
    role: "Systems & Backend",
    intro: "Pushes on architecture trade-offs, scalability, and the 'why' behind your decisions.",
    color: "var(--color-green)",
    initial: "M",
  },
];

export function AIInterviewers() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="green">Meet the interviewers</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Three personalities. One standard.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Every AI interviewer has a distinct style, so you can practice
            for the kind of conversation you&rsquo;ll actually have.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {INTERVIEWERS.map((person) => (
            <div
              key={person.name}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border-subtle bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "none",
              }}
            >
              <div
                className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: person.color }}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-[20px] font-bold text-white"
                    style={{ background: person.color }}
                  >
                    {person.initial}
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                    Available
                  </span>
                </div>

                <h3 className="mt-4 text-[18px] font-semibold text-white">
                  {person.name}
                </h3>
                <p className="text-[13.5px] text-[var(--color-text-muted)]">
                  {person.role}
                </p>

                {/* voice waveform — animates on hover */}
                <div className="mt-4 flex h-7 items-end gap-[3px]">
                  {[5, 11, 7, 14, 9, 16, 6, 12, 8, 14, 5, 10, 7].map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full transition-all duration-300 group-hover:animate-pulse"
                      style={{
                        height: `${h}px`,
                        background: person.color,
                        opacity: 0.55,
                        animationDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                </div>

                <p className="mt-4 text-[14px] leading-[1.55] text-[var(--color-text-secondary)] opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[80px]">
                  {person.intro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
