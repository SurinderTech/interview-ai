"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

interface TavusEmbedProps {
  /** Unused — kept for API compatibility but Priya's IDs come from the server */
  deploymentId?: string;
  personaId?: string;
  className?: string;
  style?: CSSProperties;
}

type EmbedStatus = "idle" | "loading" | "ready" | "error";

/**
 * TavusEmbed — creates a live Tavus conversation for Priya via the
 * /api/tavus/conversation route and renders it in a full-bleed iframe.
 *
 * Uses the Conversation API (not the @tavus/embed widget) so the avatar
 * is always Priya (replica r4dc9377a68e) and is never tied to any
 * third-party deployment widget.
 */
export function TavusEmbed({
  className = "",
  style,
}: TavusEmbedProps) {
  const [status, setStatus] = useState<EmbedStatus>("idle");
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    setStatus("loading");

    fetch("/api/tavus/conversation", { method: "POST" })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error ?? "Tavus API error");
        setConversationUrl(data.conversation_url);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("[TavusEmbed] Failed to create conversation:", err);
        setStatus("error");
      });
  }, []);

  if (status === "error") {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/5 p-8 text-center ${className}`}
        style={style}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mb-3 text-red-400">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p className="text-[14px] font-medium text-red-400">Could not connect to Priya</p>
        <p className="mt-1 text-[12px] text-white/40">Check your connection and try refreshing</p>
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
        <p className="mt-4 text-[14px] font-medium text-white/60">Connecting to Priya…</p>
        <p className="mt-1 text-[12px] text-white/30">AI Avatar is loading</p>
      </div>
    );
  }

  // Conversation created — render Priya in an iframe
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <iframe
        src={conversationUrl!}
        allow="camera; microphone; display-capture; autoplay; fullscreen"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        title="Priya — AI Interviewer Live"
      />
    </div>
  );
}
