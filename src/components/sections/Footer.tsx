import { Container } from "@/components/ui/Container";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "How it works"],
  },
  {
    title: "Company",
    links: ["Documentation", "Blog", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-[17px] font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--color-purple)] to-[var(--color-blue)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="white" strokeWidth="1.8" />
                </svg>
              </span>
              InterviewAI
            </div>
            <p className="mt-4 max-w-[260px] text-[13.5px] leading-[1.6] text-[var(--color-text-muted)]">
              Practice smarter. Interview better.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-[var(--color-text-muted)]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[var(--color-text-secondary)] transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-[13px] text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} InterviewAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[13px] text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
