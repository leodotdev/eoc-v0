import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Events & Office Consultants - Personalized Staffing Experience",
  description:
    "We connect exceptional talent with extraordinary events. Our woman-owned business provides personalized staffing solutions for businesses and organizations.",
  generator: "v0.dev",
  metadataBase: new URL("https://eoc-v0.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Events & Office Consultants - Personalized Staffing Experience",
    description:
      "We connect exceptional talent with extraordinary events. Our woman-owned business provides personalized staffing solutions for businesses and organizations.",
    url: "https://eoc-v0.vercel.app",
    siteName: "Events & Office Consultants",
    images: [
      {
        url: "api/og",
        width: 1200,
        height: 630,
        alt: "Events & Office Consultants - Social Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Office Consultants - Personalized Staffing Experience",
    description:
      "We connect exceptional talent with extraordinary events. Our woman-owned business provides personalized staffing solutions.",
    images: ["api/og"],
    creator: "@eventsandoffice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: {
      rel: "icon",
      url: "/favicon.png",
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https:; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src https://www.youtube-nocookie.com https://www.youtube.com"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <NavBar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
