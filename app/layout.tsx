import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import ProjectNav from "@/components/ProjectNav";
import Footer from "@/components/Footer";

/**
 * GA4 measurement ID, e.g. "G-XXXXXXXXXX".
 *
 * Set NEXT_PUBLIC_GA_ID in Vercel (and .env.local for local runs). When it is
 * absent the tag is not rendered at all, so local and preview builds stay out
 * of the analytics property.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bolder Project: See the fun, support the fun",
  description:
    "See the fun, support the fun. Back Bolder Adventure Park at Epic Central and help bring new attractions to life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ProjectNav />
        <main>{children}</main>
        <Footer />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
