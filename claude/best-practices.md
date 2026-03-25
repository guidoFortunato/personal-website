# SteelClover Frontend Rules (Next.js)

## Core Principles

- Always prioritize SSR and Server Components
- Minimize client-side JavaScript
- Build fast, accessible, SEO-friendly UI
- Keep design minimal, premium, and conversion-focused
- Avoid unnecessary complexity

---

## Rendering Rules

- Default to Server Components
- Only use 'use client' when strictly required:
  - forms
  - interactive UI (menu, accordion)
  - animations if necessary
- Never convert entire pages to client components without reason

---

## Performance Rules

- No heavy libraries unless justified
- Use next/image for images
- Lazy load non-critical components
- Keep bundle size minimal
- Avoid unnecessary re-renders

---

## SEO Rules

- Every page must include:
  - title
  - meta description
- Use semantic HTML (header, main, section, footer)
- Only one <h1> per page
- Maintain proper heading hierarchy
- All images must include alt text

---

## Responsive Rules

- Mobile-first approach
- No horizontal overflow
- Use flexible layouts (flex/grid)
- Ensure readable typography
- Buttons must be touch-friendly

---

## UI Rules

- Minimalist, clean, premium design
- Consistent spacing system
- Avoid visual clutter
- Use subtle animations only
- Clear CTA hierarchy

---

## Component Rules

- Components must be:
  - reusable
  - small
  - focused
- Avoid deeply nested structures
- Keep props simple and typed

---

## Code Quality Rules

- Use TypeScript everywhere
- Clear naming conventions
- Avoid magic values
- Keep files clean and readable
- Separate logic from UI when needed

---

## Accessibility Rules

- Keyboard navigation required
- Visible focus states
- Proper labels for inputs
- Good color contrast

---

## Security Rules

- Validate all inputs
- Do not trust client-only validation
- Sanitize user input
- Do not expose sensitive data

---

## Conversion Rules

- Always include a clear CTA
- Above-the-fold must explain:
  - what we do
  - who it's for
  - why it matters
- Keep user flow simple
- Reduce friction in forms

---

## Visual Identity Rules

- Dark premium UI preferred
- Use green accent carefully
- Strong typography
- Clean layout with whitespace
- Avoid generic template look

---

## Anti-Patterns (DO NOT)

- Do not overuse 'use client'
- Do not add unnecessary animations
- Do not use heavy UI frameworks
- Do not clutter the UI
- Do not break responsive layout
- Do not ignore SEO basics