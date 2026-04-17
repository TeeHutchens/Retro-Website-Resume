# TaylorHutchens.com — Retro Website Resume

A personal resume and portfolio site built with a retro macOS aesthetic. Windows pop open from the dock, minimize with spring animations, and maximize to fullscreen — all in the browser.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **React 18**
- **Plain CSS** (no CSS modules, component-scoped files)
- Deployed at [TaylorHutchens.com](https://taylorhutchens.com)

## Features

- **Bio window** — opens automatically on load with a typing animation and ASCII art header
- **Projects window** — lists personal projects and hobbies with tag chips
- **Resume window** — PDF viewer in a mac window chrome, opens from the dock
- **Easter egg** — closing all windows triggers a warning dialog: "You have deleted all of Taylor's work!"
- **Dock** — persistent glassmorphism pill with links to Resume, LinkedIn, GitHub, Gmail, and window toggles
- **Spring animations** — all windows use `cubic-bezier(0.34, 1.56, 0.64, 1)` with a `visibility` delay trick to prevent z-index clipping mid-animation
- **Maximize** — green traffic light button on each window toggles true fullscreen (`100vw × 100vh`)
- **Mobile responsive** — windows reflow to full-width at `≤640px`

## Project Structure

```
src/app/
  page.tsx                    # Root — manages all window states
  globals.css                 # Body background, layout, dock, mobile breakpoints
  components/
    macWindow.tsx / .css      # Bio window
    ProjectsWindow.tsx / .css # Projects window
    ResumeWindow.tsx / .css   # PDF resume window
    WarningWindow.tsx / .css  # Easter egg dialog
    asciiArt.tsx              # ASCII name art
    TypingText.tsx            # Typing animation
    PdfIcon.tsx               # Dock PDF icon
    LinkedIn.tsx              # Dock LinkedIn icon
    GitHub.tsx                # Dock GitHub icon
    GmailMe.tsx               # Dock Gmail icon
  constants/
    string.jsx                # GREETING and BIO text
    projects.ts               # PROJECTS array (name, description, tags, category)
    banner.tsx                # ASCII banner art (->->->)
public/
  TaylorHutchensResume.pdf    # Resume PDF served at /TaylorHutchensResume.pdf
```

## Key CSS Patterns

**Spring animation (all popup windows):**
```css
.some-window {
  position: fixed !important;   /* !important — beats .mac-window { position: relative } in bundle order */
  transform: translate(-50%, -50%) scale(0.08);
  transform-origin: center center;
  opacity: 0; visibility: hidden; pointer-events: none;
  min-height: unset !important; /* beats .mac-window { min-height: 50vh } */
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.3s ease, visibility 0s linear 0.45s;
}
.some-window.visible {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1; visibility: visible; pointer-events: auto;
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.3s ease, visibility 0s linear 0s; /* visibility delay = 0 on open */
}
```

The `visibility 0s linear 0.45s` delay on close lets the scale animation finish before the element is hidden — without it, z-index collapses and clips the animation early.

**Per-window mac-content overrides:**  
`.mac-window` globally sets `min-width: 50rem` and `min-height: 38.438rem`. Every popup window overrides these:
```css
.warning-window .mac-content { min-width: unset; min-height: unset; width: 100%; }
.resume-window .mac-content  { min-width: unset; min-height: unset; }
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To update content, edit:
- `src/app/constants/string.jsx` — bio text
- `src/app/constants/projects.ts` — project cards
- `public/TaylorHutchensResume.pdf` — resume (also update the path in `ResumeWindow.tsx`)
