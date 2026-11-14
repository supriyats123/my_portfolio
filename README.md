# Supriya T S: Video Portfolio

Next.js 14 + Tailwind + GSAP + Framer Motion + Lenis.
Loader → full-screen video hero → About with portrait → Projects → scrolling tagline → Contact → Footer. Light and dark theme.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000

## Files you must add to `public/`

| File | Notes |
|---|---|
| `hero-bg-video.mp4` | Your background video (already added on your PC; keep it) |
| `portrait.jpg` | Included in this zip |

## Change your content: edit ONE file

`lib/site.js` holds your name, email, LinkedIn, GitHub, tagline, intro text, skills cards and projects.
Save the file and the whole site updates.

## Structure

```
app/            layout.js (fonts, SEO, theme), page.js (page order), globals.css (colors + section styles)
components/
  Navbar/       top bar, menu, theme button
  HeroSection/  loader + video hero
  Featured/     About: headline, portrait, expertise cards
  Projects/     selected work list
  HorizontalScroll/  big tagline that scrolls sideways
  Contact/      email + LinkedIn + GitHub
  SiteFooter/   footer
  GradualBlur/  soft blur at the bottom edge while scrolling
  SmoothScroll.jsx  Lenis smooth scrolling
lib/site.js     YOUR details and content
public/         video and images
```

## Deploy free

Push to GitHub, then import the repo at vercel.com and click Deploy.
