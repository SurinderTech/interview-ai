import { Container } from "@/components/ui/Container";

const COMPANIES = [
  "Stripe",
  "Vercel",
  "Linear",
  "Notion",
  "Figma",
  "Airbnb",
];

export function TrustedCompanies() {
  return (
    <section className="border-y border-white/[0.06] py-10">
      <Container>
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          Candidates land roles at companies like
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {COMPANIES.map((name) => (
            <span
              key={name}
              className="text-[19px] font-semibold text-white/30 transition-colors hover:text-white/60"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
