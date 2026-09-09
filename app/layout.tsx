import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProjectNav from "@/components/ProjectNav";
import Footer from "@/components/Footer";

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
    </html>
  );
}
