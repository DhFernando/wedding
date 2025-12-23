import type { Metadata } from "next";
import "./globals.css";
import { weddingConfig } from "./config/wedding.config";

export const metadata: Metadata = {
  title: `${weddingConfig.couple.groomShort} & ${weddingConfig.couple.brideShort} - Wedding Invitation`,
  description: `You're invited to celebrate the wedding of ${weddingConfig.couple.groom} and ${weddingConfig.couple.bride} on ${weddingConfig.date.displayDate}`,
  keywords: ["wedding", "invitation", "celebration", "love", "Sri Lanka", weddingConfig.couple.hashtag],
  openGraph: {
    title: `${weddingConfig.couple.groomShort} & ${weddingConfig.couple.brideShort}'s Wedding`,
    description: `Join us on ${weddingConfig.date.displayDate} to celebrate our special day`,
    type: "website",
    images: [weddingConfig.heroImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Great+Vibes&family=Lato:wght@300;400;700&family=Pinyon+Script&display=swap" 
          rel="stylesheet" 
        />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="antialiased bg-wedding-background text-wedding-text">
        {children}
      </body>
    </html>
  );
}
