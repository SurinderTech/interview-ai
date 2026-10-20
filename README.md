<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=800&size=36&duration=3000&pause=1000&color=7C3AED&center=true&vCenter=true&width=700&height=70&lines=InterviewAI;AI+Mock+Interviews+with+Live+Avatar;Land+Your+Dream+Job!" alt="InterviewAI" />

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tavus](https://img.shields.io/badge/Tavus-phoenix--4.5-7C3AED?style=for-the-badge)
![Framer](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r185-000000?style=for-the-badge&logo=three.js&logoColor=white)

> **The world's most realistic AI interview practice platform — powered by live video avatars that speak, listen, and adapt in real time.**

</div>

---

## Meet the AI Interviewers

<div align="center">
<br/>

<table>
  <tr>
    <td align="center" width="33%">
      <img src="https://raw.githubusercontent.com/SurinderTech/interview-ai/main/public/media/priya-avatar.jpg" width="220" alt="Priya" style="border-radius:20px" />
      <br/><br/>
      <strong>Priya</strong><br/>
      <em>Career and Tech Interviews</em><br/>
      <sub>Powered by Tavus phoenix-4.5</sub><br/><br/>
      <img src="https://img.shields.io/badge/LIVE%20VIDEO%20AI-7C3AED?style=flat-square&labelColor=1a0533" />
    </td>
    <td align="center" width="33%">
      <img src="https://raw.githubusercontent.com/SurinderTech/interview-ai/main/public/media/Confident%20Corporate%20Woman%20in%20Modern%20Office.png" width="220" alt="Ananya" style="border-radius:20px" />
      <br/><br/>
      <strong>Ananya</strong><br/>
      <em>Exam Mentor — JEE, NEET, UPSC</em><br/>
      <sub>Adaptive question sessions</sub><br/><br/>
      <img src="https://img.shields.io/badge/EXAM%20SPECIALIST-818cf8?style=flat-square&labelColor=0f1133" />
    </td>
    <td align="center" width="33%">
      <br/><br/><br/><br/>
      <strong>Kavya</strong><br/>
      <em>Guidance and Study Coach</em><br/>
      <sub>Clarity, confidence and roadmaps</sub><br/><br/>
      <img src="https://img.shields.io/badge/STUDY%20COACH-f472b6?style=flat-square&labelColor=1a0020" />
    </td>
  </tr>
</table>

<br/>

[![LAUNCH LIVE INTERVIEW WITH PRIYA](https://img.shields.io/badge/LAUNCH%20LIVE%20INTERVIEW%20WITH%20PRIYA%20%E2%86%92-7C3AED?style=for-the-badge&labelColor=0d0018&color=7C3AED)](https://interview-ai-n.vercel.app)

<br/>

**No sign-up needed.** Click above — Priya appears on screen and the interview starts live.

</div>

---

## Table of Contents

- [What is InterviewAI?](#what-is-interviewai)
- [Features](#features)
- [Architecture](#architecture)
- [How It Works](#how-it-works)
- [User Journey](#user-journey)
- [Scoring System](#scoring-system)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Tavus Embed Code](#tavus-avatar-embed-code)
- [Pricing](#pricing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

---

## What is InterviewAI?

**InterviewAI** uses **live photorealistic video avatars** (Tavus phoenix-4.5) to simulate hyper-realistic interview experiences.

- Speaks aloud in a natural human voice
- Maintains eye contact and realistic facial expressions  
- Adapts dynamically — every follow-up depends on your last answer
- Scores you in real-time on Confidence, Clarity and Accuracy
- Generates personalised roadmaps to fix your exact weak spots

---

## Features

| Feature | Description |
|---|---|
| Voice Interview | Speak naturally; AI evaluates like a real panel |
| Live AI Avatar (Priya) | Photorealistic interviewer via Tavus phoenix-4.5 |
| Resume Review | Strengths and gap analysis before you start |
| LinkedIn Review | See exactly how recruiters read your profile |
| Adaptive Questions | Every follow-up depends on what you just said |
| Company-Specific Prep | Practice the exact format used by top companies |
| Progress Tracking | Every session logged, scored and compared |
| Weak Area Roadmaps | Precise next steps, not generic advice |
| AI Coach | Always-on assistant reviewing cross-session patterns |
| Live Scoring | Confidence, clarity and accuracy updated mid-interview |

---

## Architecture

```mermaid
graph TB
    subgraph Client["Next.js 16 Frontend"]
        LP["Landing Page and Hero"]
        DASH["Dashboard and Analytics"]
        EMB["TavusEmbed Component"]
    end

    subgraph API["Next.js API Routes"]
        CONV["POST /api/tavus/conversation"]
    end

    subgraph Tavus["Tavus Platform"]
        REP["Priya Replica r4dc9377a68e"]
        PER["Priya Persona pa588c2dce7b"]
        PHX["phoenix-4.5 Real-time Video AI"]
    end

    LP -->|"User clicks Talk to Priya"| EMB
    EMB -->|"POST session"| CONV
    CONV -->|"x-api-key header"| Tavus
    REP --> PHX
    PER --> PHX
    PHX -->|"WebRTC stream"| EMB
    EMB -->|"Live video and audio"| LP
    PHX -->|"Scores and transcript"| DASH
```

---

## How It Works

```mermaid
sequenceDiagram
    participant U as User
    participant UI as Next.js App
    participant API as API Route
    participant TV as Tavus API
    participant PR as Priya

    U->>UI: Clicks Talk to Priya
    UI->>API: POST /api/tavus/conversation
    Note over API: API key stays server-side only
    API->>TV: POST /v2/conversations
    TV->>PR: Spin up live session
    PR-->>UI: conversation_url returned
    UI->>PR: WebRTC handshake
    PR-->>U: Live video stream begins
    U->>PR: Speaks answer
    PR->>U: Adaptive follow-up question
    PR->>UI: Real-time scoring events
```

---

## User Journey

```mermaid
flowchart LR
    S1["Step 01\nPick Your Track\nJEE NEET UPSC\nCorporate Custom"]
    S2["Step 02\nReal Conversation\nAI speaks and listens\nadapts on the fly"]
    S3["Step 03\nLive Score\nConfidence Clarity\nAccuracy mid-session"]
    S4["Step 04\nWeak Area Map\nBlind spots by topic"]
    S5["Step 05\nRepeat\nWatch scores climb"]

    S1 --> S2 --> S3 --> S4 --> S5 --> S2

    style S1 fill:#7c3aed22,stroke:#7c3aed,color:#c4b5fd
    style S2 fill:#818cf822,stroke:#818cf8,color:#c7d2fe
    style S3 fill:#60a5fa22,stroke:#60a5fa,color:#bfdbfe
    style S4 fill:#f472b622,stroke:#f472b6,color:#fbcfe8
    style S5 fill:#34d39922,stroke:#34d399,color:#a7f3d0
```

---

## Scoring System

```mermaid
graph LR
    ANS["Your Answer"]
    ANS --> CF["Confidence\nVoice tone\nFiller words\nPacing"]
    ANS --> CL["Clarity\nStructure\nVocabulary\nConciseness"]
    ANS --> AC["Accuracy\nFactual depth\nDomain knowledge"]
    CF --> SC["Live Score\nMid-session"]
    CL --> SC
    AC --> SC
    SC --> RM["Weak Area Roadmap\nPost-session"]

    style ANS fill:#7c3aed33,stroke:#7c3aed,color:#c4b5fd
    style CF fill:#818cf833,stroke:#818cf8,color:#c7d2fe
    style CL fill:#60a5fa33,stroke:#60a5fa,color:#bfdbfe
    style AC fill:#34d39933,stroke:#34d399,color:#a7f3d0
    style SC fill:#f472b633,stroke:#f472b6,color:#fbcfe8
    style RM fill:#fbbf2433,stroke:#fbbf24,color:#fef3c7
```

---

## Tech Stack

```mermaid
graph LR
    NX["Next.js 16"] --> RC["React 19"]
    NX --> TS["TypeScript 5"]
    NX --> TW["Tailwind CSS 4"]
    NX --> FM["Framer Motion 12"]
    NX --> GS["GSAP 3"]
    NX --> THR["Three.js r185"]
    NX --> ENV["API Routes"]
    ENV -->|"server-side only"| TVS["Tavus phoenix-4.5"]
    TVS --> EMB["tavus-embed"]
    EMB --> WRT["WebRTC"]
```

---

## Project Structure

```
interview-ai/
├── src/
│   ├── app/
│   │   ├── api/tavus/conversation/route.ts   ← Session creator
│   │   ├── dashboard/page.tsx                ← Progress dashboard
│   │   ├── login/ register/ onboarding/
│   │   └── page.tsx                          ← Landing page
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx                      ← Hero + Priya embed
│       │   ├── TavusEmbed.tsx                ← Tavus web component
│       │   ├── HowItWorks.tsx
│       │   ├── Features.tsx
│       │   └── Pricing.tsx
│       └── ui/
│           └── PriyaLiveAvatar.tsx
└── public/media/
    ├── priya-avatar.jpg                      ← Priya (Tavus replica)
    └── Confident Corporate Woman...png       ← Ananya
```

---

## Getting Started

```bash
git clone https://github.com/SurinderTech/interview-ai.git
cd interview-ai
npm install
```

Create `.env.local`:

```env
TAVUS_API_KEY=your_tavus_api_key_here
NEXT_PUBLIC_TAVUS_REPLICA_ID=r4dc9377a68e
NEXT_PUBLIC_TAVUS_PERSONA_ID=pa588c2dce7b
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tavus Avatar Embed Code

### Plain HTML

```html
<script src="https://unpkg.com/@tavus/embed@latest" async></script>

<tavus-embed
  deployment-id="d52984b7-a661-42b8-a956-69ac7d268d1d"
  style="width:100%;max-width:780px;height:500px;border-radius:24px;display:block;"
></tavus-embed>
```

### React

```tsx
import { TavusEmbed } from "@/components/sections/TavusEmbed";

<TavusEmbed
  deploymentId="d52984b7-a661-42b8-a956-69ac7d268d1d"
  personaId="pa588c2dce7b"
  className="w-full h-[500px] rounded-3xl"
/>
```

| Field | Value |
|---|---|
| Deployment ID | `d52984b7-a661-42b8-a956-69ac7d268d1d` |
| Replica ID | `r4dc9377a68e` |
| Persona ID | `pa588c2dce7b` |
| Model | `phoenix-4.5` |
| Max Session | 10 minutes |

---

## Pricing

| Plan | Price | Interviews | What You Get |
|---|---|---|---|
| Free | $0 / forever | 3 per month | Basic scoring, 1 AI |
| Pro | $24 / month | Unlimited | Full analytics, all AIs, resume and LinkedIn review |
| Enterprise | Custom | Unlimited | Team dashboards, cohort analytics, dedicated support |

---

## Environment Variables

| Variable | Server-Only | Description |
|---|---|---|
| `TAVUS_API_KEY` | Yes | Tavus platform API key |
| `NEXT_PUBLIC_TAVUS_REPLICA_ID` | No | Priya replica ID |
| `NEXT_PUBLIC_TAVUS_PERSONA_ID` | No | Priya persona ID |

---

## Contributing

```bash
git checkout -b feat/your-feature
git commit -m "feat: your change"
git push origin feat/your-feature
```

Commit convention: `feat` `fix` `docs` `chore` `refactor`

---

<div align="center">

**Stop reading. Start practicing.**

[![Talk to Priya Now](https://img.shields.io/badge/Talk%20to%20Priya%20Now%20%E2%86%92-7C3AED?style=for-the-badge&labelColor=0d0018&color=7C3AED)](https://interview-ai-n.vercel.app)

*Built for students, job seekers and professionals who refuse to walk into an interview unprepared.*

</div>
