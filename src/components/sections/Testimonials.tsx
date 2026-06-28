import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const TESTIMONIALS = [
  {
    quote:
      "I did six mock interviews in a week. By the real one, the questions barely surprised me.",
    name: "Priya N.",
    role: "Software Engineer",
    company: "hired at a Series B startup",
    color: "var(--color-purple)",
  },
  {
    quote:
      "The roadmap told me exactly what to fix after every session. That's what actually moved my score.",
    name: "Daniel K.",
    role: "Product Manager",
    company: "hired at a mid-size SaaS company",
    color: "var(--color-blue)",
  },
  {
    quote:
      "Saying my answers out loud to an AI that pushed back was uncomfortable at first — then it just worked.",
    name: "Meera S.",
    role: "Data Analyst",
    company: "hired at a financial services firm",
    color: "var(--color-green)",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="purple">From the candidates</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Practice that actually shows up.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-[var(--radius-card)] glass p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-warning)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-[1.6] text-white">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.name}</p>
                  <p className="text-[12.5px] text-[var(--color-text-muted)]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
