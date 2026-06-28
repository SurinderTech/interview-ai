import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PROBLEMS = [
  {
    title: "Interview anxiety",
    description:
      "Your mind goes blank the moment a real interviewer asks a question you didn't expect.",
    color: "var(--color-danger)",
    icon: (
      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "No practice partner",
    description:
      "Friends get tired of mock interviews. Recording yourself in a mirror only goes so far.",
    color: "var(--color-warning)",
    icon: <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8" />,
  },
  {
    title: "No real feedback",
    description:
      "You walk out of every interview wondering what actually went wrong — with no way to check.",
    color: "var(--color-blue)",
    icon: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.97-4.03 9-9 9-1.5 0-2.9-.37-4.13-1.02L3 21l1.05-3.16A8.93 8.93 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />,
  },
  {
    title: "No progress tracking",
    description:
      "Without a record of past interviews, you can't tell if you're actually getting better.",
    color: "var(--color-purple)",
    icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm10 0v-9a2 2 0 00-2-2h-2a2 2 0 00-2 2v9a2 2 0 002 2h2a2 2 0 002-2zm-5-13V5a2 2 0 00-2-2H10a2 2 0 00-2 2v1" />,
  },
];

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow color="purple">The problem</Eyebrow>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px]">
            Preparing alone doesn&rsquo;t work.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Most candidates walk into interviews undertrained, because real
            practice is hard to come by.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="group rounded-[var(--radius-card)] border-subtle bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-[12px] transition-transform duration-300 group-hover:rotate-6"
                style={{ background: `${p.color}1A` }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={p.color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {p.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--color-text-secondary)]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
