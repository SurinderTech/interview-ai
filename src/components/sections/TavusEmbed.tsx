"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

interface TavusEmbedProps {
  deploymentId?: string;
  personaId?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * TavusEmbed — safely loads the Tavus @tavus/embed custom element on the
 * client side only.  Uses a script-loading ref so the <script> is never
 * inserted twice (HMR-safe) and never runs on the server (SSR-safe).
 */
export function TavusEmbed({
  deploymentId = "d52984b7-a661-42b8-a956-69ac7d268d1d",
  personaId,
  className = "",
  style,
}: TavusEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle"
  );

  useEffect(() => {
    const SCRIPT_SRC = "https://unpkg.com/@tavus/embed@latest";
    const SCRIPT_ID = "tavus-embed-script";

    // Avoid duplicate script injection across HMR reloads
    if (document.getElementById(SCRIPT_ID)) {
      setStatus("ready");
      return;
    }

    setStatus("loading");

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;

    script.onload = () => setStatus("ready");
    script.onerror = () => setStatus("error");

    document.head.appendChild(script);

    return () => {
      // Do NOT remove the script on cleanup — the custom element registry
      // is global and re-registration would throw.
    };
  }, []);

  if (status === "error") {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/5 p-8 text-center ${className}`}
        style={style}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="mb-3 text-red-400"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 8v4M12 16h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-[14px] font-medium text-red-400">
          Could not load the AI Avatar
        </p>
        <p className="mt-1 text-[12px] text-white/40">
          Check your connection and try refreshing
        </p>
      </div>
    );
  }

  if (status === "idle" || status === "loading") {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.03] ${className}`}
        style={style}
      >
        {/* Animated pulse skeleton */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-[#7c3aed]/20" />
          <span className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]" />
        </div>
        <p className="mt-4 text-[14px] font-medium text-white/60">
          Connecting to Margo…
        </p>
        <p className="mt-1 text-[12px] text-white/30">AI Avatar is loading</p>
      </div>
    );
  }

  // Script loaded — render the Tavus custom element
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* @ts-expect-error — custom element not in JSX type defs */}
      <tavus-embed
        deployment-id={deploymentId}
        {...(personaId ? { "persona-id": personaId } : {})}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
