# 💍 Wedding Invitation Web Application

A beautiful, calm, and emotionally engaging wedding invitation website built with **Next.js**, **Tailwind CSS**, **DaisyUI**, and **Framer Motion**.

## ✨ Features

- **Hero Section** - Stunning introduction with couple's names, wedding date, and elegant call-to-action
- **Love Story** - Share your romantic journey with guests
- **Countdown Timer** - Real-time countdown to your special day
- **Event Details** - Ceremony and reception information with venue details
- **Photo Gallery** - Beautiful gallery with soft hover effects
- **RSVP Form** - Elegant form for guest responses
- **Responsive Design** - Mobile-first, works beautifully on all devices
- **Smooth Animations** - Subtle fade, slide, and scale effects

## 🎨 Design Philosophy

- **Calm & Elegant** - Soft color palette with warm neutrals and pastels
- **Romantic & Modern** - Clean typography with beautiful serif fonts
- **Subtle Animations** - Smooth transitions that enhance without overwhelming

## 🏗️ Architecture (Atomic Design)

```
app/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Text.tsx
│   │   ├── Image.tsx
│   │   ├── Icon.tsx
│   │   └── Divider.tsx
│   ├── molecules/       # Combinations of atoms
│   │   ├── CountdownItem.tsx
│   │   ├── InfoCard.tsx
│   │   ├── GalleryItem.tsx
│   │   └── FormField.tsx
│   ├── organisms/       # Complex UI sections
│   │   ├── HeroSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── EventDetails.tsx
│   │   ├── GallerySection.tsx
│   │   ├── RSVPForm.tsx
│   │   └── Footer.tsx
│   └── templates/       # Page layouts
│       └── WeddingLayout.tsx
├── config/
│   └── wedding.config.ts  # Easy customization
└── page.tsx               # Main wedding page
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone or download the project
cd wedding-invitation

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the invitation.

### Build for Production

```bash
pnpm build
pnpm start
```

## ⚙️ Customization

All customization is done in a single file: `app/config/wedding.config.ts`

### Couple Information

```typescript
couple: {
  bride: "Isabella",
  groom: "Sebastian",
  hashtag: "#IsabellaAndSebastian2025",
}
```

### Wedding Date & Time

```typescript
date: {
  wedding: new Date("2025-06-21T15:00:00"),
  displayDate: "June 21, 2025",
  displayTime: "3:00 PM",
}
```

### Venue Details

```typescript
venue: {
  ceremony: {
    name: "Rosewood Garden Estate",
    address: "1234 Blossom Lane, Napa Valley, CA 94558",
    time: "3:00 PM",
  },
  reception: {
    name: "The Grand Vineyard Ballroom",
    address: "1234 Blossom Lane, Napa Valley, CA 94558",
    time: "5:30 PM",
  },
  googleMapsUrl: "https://www.google.com/maps/...",
}
```

### Your Love Story

```typescript
story: {
  title: "Our Love Story",
  content: "Your beautiful story here...",
  quote: "In all the world, there is no heart for me like yours.",
}
```

### Theme Colors

```typescript
theme: {
  primary: "#c9a87c",    // Warm gold
  secondary: "#8b7355",  // Muted brown
  accent: "#d4a5a5",     // Dusty rose
  background: "#faf8f5", // Warm cream
  text: "#4a4a4a",       // Soft charcoal
}
```

### Gallery Images

Add your own images to the gallery array:

```typescript
gallery: [
  {
    src: "https://your-image-url.com/image.jpg",
    alt: "Description of the image",
    credit: "Photo credit",
  },
  // ... more images
]
```

## 🖼️ Image Sources

This template uses royalty-free images from **Unsplash**:

- [Jeremy Wong](https://unsplash.com/@jeremywongweddings) - Wedding photography
- [Álvaro CvG](https://unsplash.com/@alvarocvg) - Romantic moments
- [Samantha Gades](https://unsplash.com/@srosinger3997) - Couple portraits
- [Thomas William](https://unsplash.com/@thomaswm) - Venue exteriors
- [Beatriz Pérez Moya](https://unsplash.com/@beatriz_moya) - Floral arrangements
- [Foto Pettine](https://unsplash.com/@fotopettine) - Nature portraits

Replace with your own photos for a personal touch!

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4 + DaisyUI 5
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## 🌐 Deployment

Deploy easily to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any Node.js hosting**

```bash
# Build and export
pnpm build
```

## 📝 RSVP Backend (Optional)

The RSVP form currently uses a mock API. To connect to a real backend:

1. Create an API route in `app/api/rsvp/route.ts`
2. Connect to your database (MongoDB, PostgreSQL, etc.)
3. Update the form submission in `RSVPForm.tsx`

Example API route:

```typescript
// app/api/rsvp/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Save to database
  // Send confirmation email
  return Response.json({ success: true });
}
```

## 💖 Credits

Made with love for couples everywhere.

---

**License**: MIT - Feel free to use for your own wedding!
