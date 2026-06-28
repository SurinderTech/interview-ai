import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const METRICS = [
  { label: "Technical score", value: 91, color: "var(--color-green)" },
  { label: "Confidence", value: 78, color: "var(--color-purple)" },
  { label: "Communication", value: 86, color: "var(--color-blue)" },
  { label: "Problem solving", value: 92, color: "var(--color-warning)" },
];

export function AnalyticsPreview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="blue">Measurable improvement</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Watch your score, not just your nerves.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Every session feeds the same dashboard, so you can see exactly
            where you&rsquo;re improving — and where to focus next.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
          {/* Metric cards grid */}
          <div className="grid grid-cols-2 gap-5">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-[var(--radius-card)] border-subtle bg-[var(--color-card)] p-5"
              >
                <p className="text-[13px] font-medium text-[var(--color-text-muted)]">
                  {m.label}
                </p>
                <p className="mt-2 text-[32px] font-bold text-white">
                  {m.value}
                  <span className="text-[16px] text-[var(--color-text-muted)]">%</span>
                </p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-white/[0.06]">
                  <div
                    className="h-1.5 rounded-full transition-all duration-700"
                    style={{ width: `${m.value}%`, background: m.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skill graph / improvement chart card */}
          <div className="rounded-[var(--radius-panel)] border-subtle bg-[var(--color-card)] p-6">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-medium text-white">
                Skill graph over time
              </p>
              <span className="rounded-full bg-[var(--color-green)]/10 px-2.5 py-1 text-[12px] font-medium text-[var(--color-green)]">
                +24% this month
              </span>
            </div>

            <svg viewBox="0 0 360 160" className="mt-6 w-full">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-green)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--color-green)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points="0,130 40,120 80,100 120,108 160,80 200,86 240,55 280,62 320,30 360,38"
                fill="none"
                stroke="var(--color-green)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon
                points="0,130 40,120 80,100 120,108 160,80 200,86 240,55 280,62 320,30 360,38 360,160 0,160"
                fill="url(#chartFill)"
              />
            </svg>

            <div className="mt-2 flex justify-between text-[11.5px] text-[var(--color-text-muted)]">
              <span>Interview #1</span>
              <span>Interview #5</span>
              <span>Interview #12</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
