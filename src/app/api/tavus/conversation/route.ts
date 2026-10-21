import { NextResponse } from "next/server";

const TAVUS_API_BASE = "https://tavusapi.com";

// Priya - Office (phoenix-4.5)
const PRIYA_REPLICA_ID = process.env.NEXT_PUBLIC_TAVUS_REPLICA_ID ?? "r4dc9377a68e";
const PRIYA_PERSONA_ID = process.env.NEXT_PUBLIC_TAVUS_PERSONA_ID ?? "pa588c2dce7b";

export async function POST() {
  const apiKey = process.env.TAVUS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "TAVUS_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${TAVUS_API_BASE}/v2/conversations`, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        replica_id: PRIYA_REPLICA_ID,
        persona_id: PRIYA_PERSONA_ID,
        conversation_name: "InterviewAI Live Demo",
        properties: {
          max_call_duration: 600,
          enable_closed_captions: true,
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("[tavus/conversation] Tavus error:", data);
      return NextResponse.json(
        { error: data?.message ?? data?.error ?? "Tavus API error", detail: data },
        { status: res.status }
      );
    }

    // Return only what the client needs — never forward the API key
    return NextResponse.json({
      conversation_id: data.conversation_id,
      conversation_url: data.conversation_url,
      status: data.status,
    });
  } catch (err) {
    console.error("[tavus/conversation] fetch failed:", err);
    return NextResponse.json({ error: "Failed to reach Tavus API." }, { status: 502 });
  }
}
