export function DashboardMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-[var(--radius-panel)] border-subtle bg-[var(--color-card)] shadow-soft">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white/[0.04] px-3 text-[12px] text-[var(--color-text-muted)]">
          app.interviewai.com/dashboard
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-[1.3fr_1fr]">
        {/* Live interview card */}
        <div className="rounded-[var(--radius-card)] border-subtle bg-white/[0.02] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-danger)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-danger)]" />
              </span>
              <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">
                Live Interview
              </span>
            </div>
            <span className="text-[12px] text-[var(--color-text-muted)]">04:12</span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-[var(--color-purple)] to-[var(--color-blue)]" />
            <div>
              <p className="text-[14px] font-semibold text-white">Alex · AI Interviewer</p>
              <p className="text-[12.5px] text-[var(--color-text-muted)]">
                Frontend Engineering Lead
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-[14px] bg-black/30 p-4">
            <p className="text-[15px] font-medium leading-snug text-white">
              &ldquo;What&rsquo;s the difference between useEffect and
              useLayoutEffect?&rdquo;
            </p>
            <div className="mt-3 flex items-end gap-[3px]">
              {[6, 14, 9, 18, 11, 20, 8, 15, 10, 17, 7, 13, 9, 16, 6, 12, 8, 14].map(
                (h, i) => (
                  <span
                    key={i}
                    className="w-[3px] rounded-full bg-[var(--color-green)]/70"
                    style={{ height: `${h}px` }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Score ring + weak areas */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-[var(--radius-card)] border-subtle bg-white/[0.02] p-4">
            <svg width="64" height="64" viewBox="0 0 64 64" className="shrink-0 -rotate-90">
              <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="var(--color-green)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 27 * 0.91} ${2 * Math.PI * 27}`}
              />
            </svg>
            <div>
              <p className="text-[22px] font-bold text-white leading-none">91%</p>
              <p className="mt-1 text-[12.5px] text-[var(--color-text-muted)]">
                Technical score
              </p>
            </div>
          </div>

          <div className="flex-1 rounded-[var(--radius-card)] border-subtle bg-white/[0.02] p-4">
            <p className="text-[12.5px] font-medium text-[var(--color-text-secondary)]">
              Skill graph
            </p>
            <div className="mt-3 space-y-2.5">
              {[
                { label: "Communication", value: 86, color: "var(--color-blue)" },
                { label: "Confidence", value: 78, color: "var(--color-purple)" },
                { label: "Problem solving", value: 92, color: "var(--color-green)" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1 flex justify-between text-[11.5px] text-[var(--color-text-muted)]">
                    <span>{row.label}</span>
                    <span className="font-medium text-[var(--color-text-secondary)]">
                      {row.value}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${row.value}%`, background: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
