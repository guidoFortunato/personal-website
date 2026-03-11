# Checklist: Next.js Best Practices for a Personal Website

## 🚀 1. Performance and Loading

- **Static Rendering:** The landing page should be statically rendered to achieve instant loading.
- **Lightweight Components:** Keep the page as lightweight as possible. Load only the necessary JavaScript.
- **Lazy Loading:** The particle animation should be loaded lazily so it does not block the initial render.
- **Resource Optimization:** Minimize external scripts and avoid heavy dependencies.

---

## 🎨 2. UI and User Experience (UX)

- **Minimalist Design:** Modern, clean, and premium interface.
- **Centered Form:** The email form must be perfectly centered on the screen.
- **Clear Visual Hierarchy:**
  - title
  - subtitle
  - email input
  - submit button
- **Micro-interactions:**
  - button hover animation
  - input focus animation
  - smooth transitions for toast notifications
- **Animated Background:** Subtle animated particles that react to mouse movement.

---

## 🏗️ 3. Next.js Architecture (App Router)

- **Server Components (RSC):** Use Server Components by default to reduce client-side JavaScript.
- **Client Components (`'use client'`):** Only for:
  - email form
  - particle animation
  - toast notifications
  <!-- * **Server Actions:** Use them to securely send the email to Supabase. -->

---

## 📬 4. Email Form

- **Email input:** With a clear placeholder.
- **Validation with Zod:** Validate the email format before submitting.
- **Form states:**
  - default
  - focus
  - error
  - success
- **User feedback:** Show toast notifications after form submission.

Expected messages:

Success:  
Email sent successfully

Error:  
Something went wrong

---

## 💡 5. Core Functionality

The main functionality of the site is to capture emails.

Expected flow:

1. User enters their email
2. Validation with Zod
   <!-- 3. If valid, send it to Supabase -->
   <!-- 4. Store it in the database -->
3. Show a success or error toast notification

---

## 🎯 6. Design Based on Reference

The interface must be implemented following the design located in:

`resources/home-screen`

This directory contains the visual reference generated previously.

Rules:

- Replicate the design as faithfully as possible
- Do not add new sections
- Do not modify the layout unnecessarily

---

## 🛡️ 7. Security

- **Strict validation:** Use Zod to validate the email.
<!-- * **Spam prevention:** Properly handle errors when sending data to Supabase. -->
- **Input sanitization:** Ensure the input only accepts valid email addresses.

---

## 🎯 Final Goal

Implement a minimal landing page for a personal website that:

- replicates the design in `resources/home-screen`
- allows users to enter an email
- validates the email with Zod
<!-- - stores it in Supabase -->
- shows feedback using toast notifications

For now, do not implement any Supabase integration; focus only on the frontend UI and form interactions.
