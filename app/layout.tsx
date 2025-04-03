import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Events & Office Consultants - Personalized Staffing Experience",
  description:
    "We connect exceptional talent with extraordinary events. Our woman-owned business provides personalized staffing solutions for businesses and organizations.",
  generator: "v0.dev",
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
    icon: "/eoc-logo.png",
    shortcut: "/eoc-logo.png",
    apple: "/eoc-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <NavBar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
