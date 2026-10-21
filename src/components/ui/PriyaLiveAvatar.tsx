"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   PriyaLiveAvatar — clean static portrait preview.
   No blink animation, no SVG eyelid overlay, no head-sway.
   Matches the clean Tavus dashboard "Charlie" style.
   ──────────────────────────────────────────────────────────────────────────── */

export function PriyaLiveAvatar({
  imageSrc = "https://cdn.replica.tavus.io/61269/thumbnail.jpg",
  className = "",
}: {
  imageSrc?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      style={{ minHeight: "400px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt="Priya — AI Interviewer"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
        draggable={false}
      />
    </div>
  );
}
