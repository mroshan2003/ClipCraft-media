# ClipCraft Media — Premium Creative Digital Marketing Agency Website

A visually stunning, high-performance, conversion-focused single-page website built with modern **Angular Standalone Components**, **TypeScript**, and **Pure Vanilla CSS**.

Inspired by the visual direction, typography, and section flow of modern digital agency leaders (like *The Growth Secret*), while establishing an original, distinguished brand identity tailored for **ClipCraft Media**.

---

## 🎨 Brand Identity & Color System

- **Primary Burgundy:** `#620000` (Core brand color, hero highlights, active states & primary CTAs)
- **Deep Burgundy:** `#3B0000` (Footer, dark sections & marquee ticker)
- **Soft Rose:** `#A34A4A` (Subtle accents, category tags, badges & hover states)
- **Warm Off-White:** `#FAF8F6` (Editorial background & smooth contrast)
- **Pure White:** `#FFFFFF` (Card surfaces & modals)
- **Charcoal:** `#181616` (Body typography, high-contrast dark sections)
- **Muted Grey:** `#777777` (Subheadings, captions & helper notes)

---

## 🚀 Key Features

1. **Sticky & Dynamic Navigation (`app-navbar`)**:
   - Transparent floating style on hero, transitioning smoothly to a frosted glass background on scroll.
   - Smooth-scroll section navigation with active state indicators.
   - Responsive mobile slide-in navigation drawer with accessible keyboard toggle.
   - Direct CTA: *"Let's Talk"*.

2. **High-Impact Hero Section**:
   - Editorial typography: *"Your Brand Deserves More Than Just Attention."*
   - Multi-layer visual collage featuring video production mockups, floating metric pills (*3.4x Engagement Lift*, *12M+ Views*), and client trust avatars.
   - Dual high-converting CTAs: *"Explore Our Work"* & *"Book a Free Consultation"*.

3. **Expertise Marquee Ticker**:
   - Infinite horizontal CSS marquee highlighting core agency capabilities without fabricating false metrics.

4. **Editorial About Section**:
   - Two-column asymmetric layout showcasing agency mission, 4 strategic pillars, and studio imagery from Mumbai.

5. **Services Section (8 Core Offerings)**:
   - Dedicated editorial cards with image headers, deliverable checklists, and direct *"Discuss This Service"* inquiry buttons.
   - Services: Social Media Management, Personal Branding, Video Editing & Reels, Content Creation, Digital Marketing Strategy, Brand Identity Design, Photography & Videography, Campaign Creative Production.

6. **Interactive Featured Work / Portfolio**:
   - Filter tabs: *All Projects*, *Social Media*, *Personal Branding*, *Reels & Video Editing*, *Healthcare*, *Brand Campaigns*, *Creative Design*.
   - 12 realistic demo case studies with client tags, objectives, and metric badges.
   - Interactive **Project Case Study Modal** with high-resolution imagery, creative breakdowns, and inquiry triggers.

7. **Our Creative Process ("From First Idea to Final Frame")**:
   - Interactive 4-step timeline: *01 Discover*, *02 Strategize*, *03 Create*, *04 Launch & Improve* with milestone checklists.

8. **Behind the Scenes (BTS) Section**:
   - Instagram/TikTok reels-inspired 9:16 vertical cards with play button pulse overlays and duration tags.
   - Filter by *Video Shoots*, *Editing Bay*, *Team Sessions*, and *Creative Process*.
   - Interactive **9:16 Video Reel Modal Viewer** with playback toggles, mute controls, and gear metadata.

9. **Client Testimonials Carousel**:
   - Premium burgundy-tinted slider with verified client roles, 5-star ratings, metric badges, and smooth prev/next navigation.

10. **Why Choose ClipCraft Media**:
    - 6 core pillars highlighting strategic thinking, cinema craft, and reliable communication.

11. **Interactive FAQ Accordion**:
    - Concise, editable answers addressing shoot logistics, client onboarding, and bespoke scopes.

12. **High-Converting Contact & Consultation Booking**:
    - Complete frontend lead form with real-time validation.
    - **Instant WhatsApp Consultation Button**: Generates a prefilled WhatsApp deep-link (`https://wa.me/...`) with user parameters.
    - **Email Consultation Button**: Generates a formatted `mailto:` message.
    - Prepared inquiry summary card acknowledging frontend submission.

13. **Luxury Dark Footer (`app-footer`)**:
    - Pre-footer conversion card, agency story, quick links, service links, studio address, social channels, and dynamically generated copyright year.

---

## 🛠️ Technology Stack

- **Framework**: Angular 22 (Standalone Components)
- **Language**: TypeScript (Strict typing with interfaces)
- **Styling**: Pure Vanilla CSS (CSS variables, responsive `clamp()`, zero Bootstrap/Tailwind)
- **Icons**: Custom vector Lucide SVG icon system (`<app-icon>`)
- **Backend / Database**: None (100% frontend with static typed data arrays)

---

## 📁 Directory Architecture

```text
src/
├── app/
│   ├── core/
│   │   ├── data/                 # Easy-to-edit TypeScript data arrays
│   │   │   ├── agency.data.ts    # Agency name, phone, email, WhatsApp, address, social links
│   │   │   ├── services.data.ts  # 8 service definitions & deliverables
│   │   │   ├── projects.data.ts  # 12 portfolio case studies
│   │   │   ├── pricing.data.ts   # Basic, Influence, Dominate packages
│   │   │   ├── testimonials.data.ts # Client testimonials & avatars
│   │   │   ├── bts.data.ts       # Behind-the-scenes 9:16 reels & photos
│   │   │   └── faqs.data.ts      # FAQ items & answers
│   │   ├── models/               # TypeScript interface definitions
│   │   │   ├── project.model.ts
│   │   │   ├── service.model.ts
│   │   │   ├── pricing.model.ts
│   │   │   ├── testimonial.model.ts
│   │   │   ├── bts.model.ts
│   │   │   └── faq.model.ts
│   │   └── services/
│   │       ├── navigation.service.ts # Scrolling, mobile drawer, modal state
│   │       └── contact.service.ts    # WhatsApp/mailto generators, form handling
│   ├── shared/
│   │   └── components/
│   │       ├── icon/                 # Vector SVG Lucide icon renderer
│   │       ├── navbar/               # Sticky responsive header & mobile drawer
│   │       ├── footer/               # Footer & pre-footer banner
│   │       ├── project-modal/        # Case study detail modal
│   │       ├── video-modal/          # 9:16 BTS vertical reel viewer
│   │       └── consultation-modal/   # Quick consultation popup
│   ├── pages/
│   │   └── home/                     # Main home page component (all 14 sections)
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── index.html                        # SEO meta tags, Google Fonts, brand SVG favicon
└── styles.css                        # Global CSS variables, reset & typography system
```

---

## ⚙️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
# or specify port:
npm start -- --port 4300
```
Navigate to `http://localhost:4300/` or `http://localhost:4200/`.

### 3. Build for Production
```bash
npm run build
```
Production assets will be output to `dist/clipcraft-media/browser`.

---

## ✏️ How to Customize & Replace Content

All website content is managed in simple, isolated TypeScript files inside `src/app/core/data/`:

### 1. Update Contact Details, WhatsApp Number & Socials
Open `src/app/core/data/agency.data.ts`:
```typescript
export const AGENCY_INFO = {
  name: 'ClipCraft Media',
  email: 'hello@clipcraftmedia.com',      // Update your agency email
  whatsappNumber: '919876543210',         // Update with your country code + phone
  displayPhone: '+91 98765 43210',
  address: 'Suite 402, Creative Arts Hub, Bandra West',
  city: 'Mumbai, Maharashtra',
  socials: {
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://linkedin.com/company/yourhandle',
    youtube: 'https://youtube.com/@yourhandle',
    twitter: 'https://x.com/yourhandle',
  }
};
```

### 2. Add or Edit Portfolio Projects
Open `src/app/core/data/projects.data.ts`:
Add new case studies with custom thumbnail URLs, gallery images, deliverables, and metric tags.

### 4. Replace BTS Footage or Workstation Photos
Open `src/app/core/data/bts.data.ts`:
Point `thumbnailUrl` and `videoUrl` to your own media files (stored in `public/` or on an external CDN/Vimeo/S3).

### 5. Update FAQs or Testimonials
- FAQs: Edit `src/app/core/data/faqs.data.ts`.
- Testimonials: Edit `src/app/core/data/testimonials.data.ts`.

---

## 📱 Responsive & Accessibility Standards

- **Mobile First & Responsive Layouts**: Tested across mobile (375px+), tablet (768px), and widescreen desktop (1440px+).
- **Smooth Navigation**: Accessible focus rings, semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), ARIA attributes, and keyboard Escape listener for all modals.
- **Performance Optimized**: Sub-second bundle load, zero external stylesheet libraries, native vector SVGs, and responsive font clamping.
