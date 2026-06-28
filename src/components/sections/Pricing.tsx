import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get a feel for the platform with limited practice.",
    features: ["3 mock interviews / month", "Basic scoring", "1 AI interviewer"],
    cta: "Start free",
    variant: "secondary" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/ month",
    description: "Full access for anyone actively interviewing.",
    features: [
      "Unlimited mock interviews",
      "Full analytics & roadmap",
      "All AI interviewers",
      "Resume & LinkedIn review",
      "Company-specific interviews",
    ],
    cta: "Start free trial",
    variant: "primary" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For bootcamps, universities, and career teams.",
    features: [
      "Everything in Pro",
      "Team dashboards",
      "Cohort analytics",
      "Dedicated support",
    ],
    cta: "Contact sales",
    variant: "secondary" as const,
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="purple">Pricing</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Simple, honest pricing.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.highlighted
                  ? "relative rounded-[var(--radius-panel)] border border-[var(--color-purple)]/40 bg-gradient-to-b from-[var(--color-purple)]/[0.08] to-transparent p-7 shadow-glow-purple lg:-translate-y-3"
                  : "relative rounded-[var(--radius-panel)] border-subtle bg-[var(--color-card)] p-7"
              }
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-[var(--color-purple)] px-3 py-1 text-[12px] font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-[18px] font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-[13.5px] text-[var(--color-text-secondary)]">
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-[40px] font-bold text-white">{tier.price}</span>
                {tier.period && (
                  <span className="text-[14px] text-[var(--color-text-muted)]">
                    {tier.period}
                  </span>
                )}
              </div>

              <Button variant={tier.variant} size="md" className="mt-6 w-full">
                {tier.cta}
              </Button>

              <ul className="mt-7 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-[var(--color-text-secondary)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-green)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
