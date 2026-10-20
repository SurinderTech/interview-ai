<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=800&size=40&duration=3000&pause=1000&color=7C3AED&center=true&vCenter=true&width=700&height=80&lines=InterviewAI+%F0%9F%A4%96;Practice+interviews+with+AI;Land+your+dream+job!" alt="InterviewAI" />

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tavus](https://img.shields.io/badge/Tavus-AI_Avatar-7C3AED?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r185-000000?style=for-the-badge&logo=three.js&logoColor=white)

> **The world's most realistic AI interview practice platform â€” powered by a live video avatar that speaks, listens, and adapts in real time.**

</div>

---

## ðŸŽ™ï¸ Meet Priya â€” Your Live AI Interviewer

<div align="center">

<br/>

<img src="https://cdn.replica.tavus.io/61269/thumbnail.jpg" alt="Priya â€” AI Interviewer" width="340" style="border-radius:24px; box-shadow: 0 0 60px #7c3aed55;" />

<br/><br/>

> **ðŸŒ¸ Priya** Â· Powered by [Tavus](https://tavus.io) `phoenix-4.5` Â· Real-time video AI Â· Speaks Â· Listens Â· Adapts

<br/>

[![ðŸŽ™ï¸ LAUNCH LIVE INTERVIEW WITH PRIYA â†’](https://img.shields.io/badge/ðŸŽ™ï¸%20LAUNCH%20LIVE%20INTERVIEW%20WITH%20PRIYA%20â†’-7C3AED?style=for-the-badge&labelColor=1a0533&color=7C3AED&logoColor=white)](https://interview-ai-n.vercel.app)

<br/>

> **No sign-up needed.** Click above â†’ Priya appears on screen, greets you, and starts the interview live.

<br/>

| ðŸŽ¥ Live video avatar | Real-time WebRTC â€” she's on screen, face-to-face |
|:---|:---|
| ðŸŽ¤ She actually hears you | Speaks and listens exactly like a real interviewer |
| ðŸ§  Fully adaptive | Every follow-up question depends on your last answer |
| ðŸ“Š Live scoring | Confidence Â· Clarity Â· Accuracy updated mid-session |
| ðŸ—ºï¸ Post-session roadmap | Know exactly what to fix after every interview |

<br/>

</div>

---

## ðŸ“‹ Table of Contents

- [What is InterviewAI?](#-what-is-interviewai)
- [Features](#-features)
- [Architecture](#-architecture)
- [How It Works](#-how-it-works)
- [User Journey](#-user-journey)
- [AI Interviewers](#-ai-interviewers)
- [Who Is It For?](#-who-is-it-for)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Tavus Embed Code](#-tavus-avatar-embed-code)
- [Scoring System](#-scoring-system)
- [Pricing](#-pricing)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)

---

## ðŸŽ¯ What is InterviewAI?

**InterviewAI** is an AI-powered interview practice platform that uses **live photorealistic video avatars** (powered by [Tavus](https://tavus.io) `phoenix-4.5`) to simulate hyper-realistic interview experiences.

Unlike text-based chatbots, InterviewAI's avatars:

- ðŸ—£ï¸ **Speak aloud** in a natural human voice
- ðŸ‘ï¸ **Maintain eye contact** and realistic facial expressions
- ðŸ§  **Adapt dynamically** â€” every follow-up depends on your last answer
- ðŸ“Š **Score you in real-time** on Confidence Â· Clarity Â· Accuracy
- ðŸ—ºï¸ **Generate personalised roadmaps** to fix your exact weak spots

---

## âœ¨ Features

| Feature | Description |
|---|---|
| ðŸŽ¤ **Voice Interview** | Speak naturally; AI evaluates like a real panel |
| ðŸ¤– **Live AI Avatar (Priya)** | Photorealistic interviewer via Tavus phoenix-4.5 |
| ðŸ“„ **Resume Review** | Strengths and gap analysis before you even start |
| ðŸ’¼ **LinkedIn Review** | See exactly how recruiters read your profile |
| âš¡ **Adaptive Questions** | Every follow-up depends on what you just said |
| ðŸ¢ **Company-Specific** | Practice the exact format used by top companies |
| ðŸ“ˆ **Progress Tracking** | Every session logged, scored, and compared |
| ðŸ—ºï¸ **Weak Area Roadmaps** | Precise next steps â€” not generic advice |
| ðŸ¤– **AI Coach** | Always-on assistant reviewing cross-session patterns |
| ðŸ“Š **Live Scoring** | Confidence, clarity and accuracy â€” updated mid-interview |

---

## ðŸ—ï¸ Architecture

```mermaid
graph TB
    subgraph Client["ðŸŒ Next.js 16 Frontend (React 19)"]
        LP[Landing Page Hero + Sections]
        DASH[Dashboard Progress and Analytics]
        EMB[TavusEmbed Web Component]
    end

    subgraph API["âš¡ Next.js API Routes"]
        CONV["POST /api/tavus/conversation â€” Server-side session creator"]
    end

    subgraph Tavus["ðŸ¤– Tavus Platform"]
        REP["Priya Replica r4dc9377a68e"]
        PER["Priya Persona pa588c2dce7b"]
        PHX["phoenix-4.5 Model â€” Real-time video AI"]
    end

    subgraph External["ðŸ“¦ External"]
        CDN["unpkg CDN @tavus/embed"]
        AI["Scoring Engine Confidence Â· Clarity Â· Accuracy"]
    end

    LP -->|"User clicks Talk to Priya"| EMB
    EMB -->|"Script injection"| CDN
    EMB -->|"POST conversation"| CONV
    CONV -->|"x-api-key header"| Tavus
    REP --> PHX
    PER --> PHX
    PHX -->|"WebRTC stream"| EMB
    EMB -->|"Live video and audio"| LP
    PHX -->|"Transcript and events"| AI
    AI -->|"Real-time feedback"| DASH
```

---

## ðŸ”„ How It Works â€” Sequence Diagram

```mermaid
sequenceDiagram
    participant U as ðŸ‘¤ User
    participant UI as ðŸŒ Next.js App
    participant API as âš¡ API Route
    participant TV as ðŸ¤– Tavus API
    participant PR as ðŸŒ¸ Priya phoenix-4.5

    U->>UI: Clicks Talk to Priya
    UI->>API: POST /api/tavus/conversation
    Note over API: TAVUS_API_KEY stays server-side â€” never exposed
    API->>TV: POST /v2/conversations with replica_id and persona_id
    TV->>PR: Spin up live session
    PR-->>TV: conversation_url ready
    TV-->>API: conversation_id and conversation_url
    API-->>UI: Returns session URL only
    UI->>PR: WebRTC handshake via @tavus/embed
    PR-->>U: ðŸŽ¥ Live video stream begins
    U->>PR: ðŸŽ¤ Speaks answer
    PR->>U: ðŸ¤” Adaptive follow-up question
    PR->>UI: ðŸ“Š Real-time scoring events
    UI->>U: Live confidence and clarity and accuracy scores
    Note over PR,UI: Max session 10 min â€” Closed captions ON
```

---

## ðŸ”„ User Journey â€” 5 Steps to Confidence

```mermaid
flowchart LR
    S1["Step 01\nPick Your Track\nJEE - NEET - UPSC\nCorporate - Custom"]
    S2["Step 02\nReal Conversation\nAI speaks listens\nand adapts on the fly"]
    S3["Step 03\nSee Your Live Score\nConfidence - Clarity\nAccuracy mid-session"]
    S4["Step 04\nWeak Area Map\nBlind spots by topic\nskill and pattern"]
    S5["Step 05\nRepeat Until Confident\nWatch scores climb\nand weak areas shrink"]

    S1 -->|"Matched to AI interviewer"| S2
    S2 -->|"Real-time analysis"| S3
    S3 -->|"Post-session breakdown"| S4
    S4 -->|"Targeted practice"| S5
    S5 -->|"Next session"| S2

    style S1 fill:#7c3aed22,stroke:#7c3aed,color:#c4b5fd
    style S2 fill:#818cf822,stroke:#818cf8,color:#c7d2fe
    style S3 fill:#60a5fa22,stroke:#60a5fa,color:#bfdbfe
    style S4 fill:#f472b622,stroke:#f472b6,color:#fbcfe8
    style S5 fill:#34d39922,stroke:#34d399,color:#a7f3d0
```

---

## ðŸ¤– AI Interviewers

```mermaid
graph LR
    subgraph Panel["ðŸŽ­ AI Interview Panel"]
        PR["ðŸŒ¸ Priya\nLive Video Avatar\nTavus phoenix-4.5\nGeneral Practice and Onboarding"]
        AL["ðŸ”µ Alex\nFrontend Engineering Lead\nReact - State Mgmt\nPerformance - Deep dives"]
        SA["ðŸ’œ Sarah\nBehavioral and Leadership\nPressure - Communication\nAmbiguity - Team dynamics"]
        MI["ðŸŸ¢ Michael\nSystems and Backend\nArchitecture - Scalability\nTrade-offs - System design"]
    end

    style PR fill:#7c3aed33,stroke:#7c3aed,color:#c4b5fd
    style AL fill:#818cf833,stroke:#818cf8,color:#c7d2fe
    style SA fill:#a78bfa33,stroke:#a78bfa,color:#ddd6fe
    style MI fill:#34d39933,stroke:#34d399,color:#a7f3d0
```

> **Priya** is the only fully photorealistic, real-time video AI â€” she literally sees and speaks with you via WebRTC.

---

## ðŸ‘¥ Who Is It For?

```mermaid
mindmap
  root((InterviewAI))
    Students and Exam Warriors
      JEE and NEET
      UPSC and State PSC
      SSC and Banking
      Defence and Police
    Job Seekers and Freshers
      Campus Placements
      HR Rounds
      Technical Panels
      Group Discussions
    Experienced Professionals
      Lateral Hiring
      Leadership Rounds
      System Design
      Salary Negotiation
```

---

## ðŸ§© Tech Stack

```mermaid
graph TB
    subgraph FE["ðŸŽ¨ Frontend"]
        NX["Next.js 16.2.9 App Router"]
        RC["React 19"]
        TS["TypeScript 5"]
        TW["Tailwind CSS 4"]
        FM["Framer Motion 12 â€” Micro-animations"]
        GS["GSAP 3 â€” Scroll animations"]
        THR["Three.js r185 â€” 3D particle backgrounds"]
    end

    subgraph AI["ðŸ¤– AI and Avatar Layer"]
        TVS["Tavus Platform phoenix-4.5"]
        EMB["@tavus/embed Custom Web Component"]
        WRT["WebRTC Live video and audio"]
    end

    subgraph INF["ðŸ—ï¸ Infrastructure"]
        VRL["Vercel Deployment"]
        ENV["Next.js API Routes â€” Server-side API key guard"]
    end

    NX --> RC --> TS
    NX --> FM
    NX --> GS
    NX --> THR
    NX --> ENV
    ENV -->|"x-api-key server only"| TVS
    TVS --> EMB --> WRT
```

---

## ðŸ“ Project Structure

```
interview-ai/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ app/
â”‚   â”‚   â”œâ”€â”€ api/
â”‚   â”‚   â”‚   â””â”€â”€ tavus/
â”‚   â”‚   â”‚       â””â”€â”€ conversation/
â”‚   â”‚   â”‚           â””â”€â”€ route.ts        â† Server-side Tavus session creator
â”‚   â”‚   â”œâ”€â”€ dashboard/
â”‚   â”‚   â”‚   â””â”€â”€ page.tsx                â† User progress dashboard
â”‚   â”‚   â”œâ”€â”€ login/                      â† Auth pages
â”‚   â”‚   â”œâ”€â”€ register/
â”‚   â”‚   â”œâ”€â”€ onboarding/                 â† Onboarding flow
â”‚   â”‚   â”œâ”€â”€ layout.tsx
â”‚   â”‚   â””â”€â”€ page.tsx                    â† Landing page assembly
â”‚   â”‚
â”‚   â””â”€â”€ components/
â”‚       â”œâ”€â”€ sections/
â”‚       â”‚   â”œâ”€â”€ Hero.tsx                â† Main hero with Priya embed
â”‚       â”‚   â”œâ”€â”€ TavusEmbed.tsx          â† Tavus web component wrapper
â”‚       â”‚   â”œâ”€â”€ Features.tsx            â† 8-feature grid
â”‚       â”‚   â”œâ”€â”€ HowItWorks.tsx          â† 5-step GSAP timeline
â”‚       â”‚   â”œâ”€â”€ ForWhom.tsx             â† Audience cards
â”‚       â”‚   â”œâ”€â”€ AIInterviewers.tsx      â† Interviewer profiles
â”‚       â”‚   â”œâ”€â”€ Pricing.tsx             â† 3-tier pricing
â”‚       â”‚   â”œâ”€â”€ Testimonials.tsx        â† Social proof
â”‚       â”‚   â”œâ”€â”€ SkillsTracker.tsx       â† Skills visualization
â”‚       â”‚   â”œâ”€â”€ AnalyticsPreview.tsx    â† Dashboard preview
â”‚       â”‚   â”œâ”€â”€ CareerCategories.tsx    â† Exam/career categories
â”‚       â”‚   â”œâ”€â”€ Interviewshowcase.tsx   â† Live demo showcase
â”‚       â”‚   â”œâ”€â”€ ThreeBackground.tsx     â† Three.js particle bg
â”‚       â”‚   â”œâ”€â”€ Navbar.tsx              â† Navigation
â”‚       â”‚   â””â”€â”€ Footer.tsx              â† Footer
â”‚       â”‚
â”‚       â””â”€â”€ ui/
â”‚           â”œâ”€â”€ PriyaLiveAvatar.tsx     â† Priya portrait component
â”‚           â”œâ”€â”€ Button.tsx
â”‚           â”œâ”€â”€ Container.tsx
â”‚           â””â”€â”€ Eyebrow.tsx
â”‚
â”œâ”€â”€ public/
â”œâ”€â”€ avatar-engine/
â”œâ”€â”€ tavus-interviewer/
â”œâ”€â”€ .env.local                          â† Environment variables (git-ignored)
â”œâ”€â”€ next.config.ts
â””â”€â”€ package.json
```

---

## ðŸš€ Getting Started

### Prerequisites

- **Node.js** `>=18.0.0`
- A [Tavus](https://platform.tavus.io) account and API key

### 1. Clone

```bash
git clone https://github.com/SurinderTech/interview-ai.git
cd interview-ai
```

### 2. Install

```bash
npm install
```

### 3. Configure `.env.local`

```env
# Server-side only â€” never expose this to the client
TAVUS_API_KEY=your_tavus_api_key_here

# Priya identifiers (safe to expose as NEXT_PUBLIC_)
NEXT_PUBLIC_TAVUS_REPLICA_ID=r4dc9377a68e
NEXT_PUBLIC_TAVUS_PERSONA_ID=pa588c2dce7b
```

### 4. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) â€” Priya will be live!

### 5. Build for Production

```bash
npm run build
npm start
```

---

## ðŸ”Œ Tavus Avatar Embed Code

### Plain HTML â€” works on any website

```html
<!-- Load Tavus embed script once per page -->
<script src="https://unpkg.com/@tavus/embed@latest" async></script>

<!-- Place the avatar anywhere -->
<tavus-embed
  deployment-id="d52984b7-a661-42b8-a956-69ac7d268d1d"
  style="width:100%;max-width:780px;height:500px;display:block;border-radius:24px;"
></tavus-embed>
```

### React / Next.js Component

```tsx
import { TavusEmbed } from "@/components/sections/TavusEmbed";

// Uses Priya's deployment ID by default
<TavusEmbed className="w-full h-[500px] rounded-3xl" />

// Explicit IDs
<TavusEmbed
  deploymentId="d52984b7-a661-42b8-a956-69ac7d268d1d"
  personaId="pa588c2dce7b"
  className="w-full h-[500px] rounded-3xl"
/>
```

### Priya's IDs

| Field | Value |
|---|---|
| Deployment ID | `d52984b7-a661-42b8-a956-69ac7d268d1d` |
| Replica ID | `r4dc9377a68e` |
| Persona ID | `pa588c2dce7b` |
| Model | `phoenix-4.5` |
| Max Session | 10 minutes |
| Closed Captions | Enabled |

---

## ðŸ“Š Scoring System

```mermaid
graph LR
    ANS["Your Answer"]

    ANS --> CF["Confidence\nVoice tone\nFiller words\nPacing\nHesitation"]
    ANS --> CL["Clarity\nStructure\nVocabulary\nConciseness\nCoherence"]
    ANS --> AC["Accuracy\nFactual correctness\nDomain knowledge\nDepth of answer\nFollow-up handling"]

    CF --> SC["Live Score\nUpdated mid-session"]
    CL --> SC
    AC --> SC

    SC --> RM["Weak Area Roadmap\nGenerated post-session"]

    style ANS fill:#7c3aed33,stroke:#7c3aed,color:#c4b5fd
    style CF fill:#818cf833,stroke:#818cf8,color:#c7d2fe
    style CL fill:#60a5fa33,stroke:#60a5fa,color:#bfdbfe
    style AC fill:#34d39933,stroke:#34d399,color:#a7f3d0
    style SC fill:#f472b633,stroke:#f472b6,color:#fbcfe8
    style RM fill:#fbbf2433,stroke:#fbbf24,color:#fef3c7
```

---

## ðŸ’° Pricing

| Plan | Price | Interviews | Highlights |
|---|---|---|---|
| Free | $0 / forever | 3 per month | Basic scoring, 1 AI interviewer |
| Pro | $24 / month | Unlimited | Full analytics, all AIs, resume and LinkedIn review, company-specific |
| Enterprise | Custom | Unlimited | Everything in Pro plus team dashboards, cohort analytics, dedicated support |

---

## ðŸŒ Environment Variables

| Variable | Required | Client-Safe | Description |
|---|---|---|---|
| `TAVUS_API_KEY` | Yes | No â€” server only | Your Tavus platform API key |
| `NEXT_PUBLIC_TAVUS_REPLICA_ID` | Yes | Yes | Priya replica ID (phoenix-4.5) |
| `NEXT_PUBLIC_TAVUS_PERSONA_ID` | Yes | Yes | Priya persona/character ID |

> `TAVUS_API_KEY` is handled in `/api/tavus/conversation` (server-side only) and never forwarded to the browser.

---

## ðŸ¤ Contributing

```bash
git checkout -b feat/your-feature
git commit -m "feat: describe your change"
git push origin feat/your-feature
```

Commit convention: `feat:` `fix:` `docs:` `chore:` `refactor:`

---

<div align="center">

**Stop reading. Start practicing.**

[![Talk to Priya Now](https://img.shields.io/badge/%F0%9F%8C%B8%20Talk%20to%20Priya%20Now%20%E2%86%92-7C3AED?style=for-the-badge&labelColor=1a0533&color=7C3AED)](https://interview-ai-n.vercel.app)

*Built for students, job seekers and professionals who refuse to walk into an interview unprepared.*

</div>
