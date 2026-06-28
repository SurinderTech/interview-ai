# InterviewAI — Landing Page

Built with Next.js 16 (App Router) + Tailwind CSS v4, following the InterviewAI Product Design System spec exactly (dark-first palette, Inter/Geist type, 8pt spacing, semantic color rules).

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Structure

```
src/
  app/
    layout.tsx       — fonts (self-hosted Inter + Geist), global metadata
    globals.css       — design tokens (colors, radii, shadows) derived from spec
    page.tsx          — assembles all 16 sections in architecture-doc order
  components/
    ui/               — Button, Container, Eyebrow (shared primitives)
    sections/         — one file per landing page section
public/
  media/              — processed hero/demo videos (mp4 + webm + poster + gif fallback)
```

## Media assets

Source videos were AI-generated concept b-roll (not real product captures — on-screen
body text is AI-generated and not meant to be read closely). They're used as ambient
texture/proof rather than literal product screenshots. The actual "product" visual in
the hero is a custom-built dashboard mockup matching the real design tokens.

- `hero-card.mp4/webm` — floating glass card loop (desk/laptop), used in Hero + Interactive Demo
- `categories-loop.mp4/webm` — cosmic dashboard + category cards, used in Career Categories
- `progress-loop.mp4/webm` — score-climbing tablet UI, used in Improvement Timeline
- `*-poster.jpg` — poster frames for fast paint before video loads
- `hero-card.gif` — GIF fallback (much larger than mp4/webm; included since it was
  requested, but webm/mp4 are the primary source — far smaller + sharper)

## Next steps (not built yet)

- FastAPI backend — none of this page needs one yet, it's static marketing content.
  Wire up when you build auth/signup (the "Get Started" / "Start practicing free" CTAs).
- Remaining interactive states: mobile nav close-on-link-click is wired, but real
  routing for Login / pricing checkout is stubbed.
