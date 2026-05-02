import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: {
    default: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.metaDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: RESUME_DATA.name,
    title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    description: RESUME_DATA.metaDescription,
    images: [{ url: RESUME_DATA.avatarUrl, alt: RESUME_DATA.name }],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    description: RESUME_DATA.metaDescription,
    images: [RESUME_DATA.avatarUrl],
  },
  robots: { index: true, follow: true },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
