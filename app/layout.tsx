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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
