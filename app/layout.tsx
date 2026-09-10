import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import ProjectNav from "@/components/ProjectNav";
import Footer from "@/components/Footer";

/**
 * Google Tag Manager container.
 *
 * GA4 is configured *inside* this container, so loading GTM is all that is
 * needed — there is deliberately no separate GoogleAnalytics tag here. Adding
 * one would double count every pageview.
 *
 * Defaults to Shoab's container so the tag is live without extra configuration.
 * Set NEXT_PUBLIC_GTM_ID to override it, or to "off" (or an empty string) to
 * disable GTM entirely — which is what to do when this page moves under
 * bolderadventurepark.com, since the main site already loads its own GTM.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-P3H64KXM";
const gtmEnabled = GTM_ID !== "" && GTM_ID.toLowerCase() !== "off";

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
      {gtmEnabled && <GoogleTagManager gtmId={GTM_ID} />}
      <body className="antialiased">
        {/* The GoogleTagManager component injects gtm.js but emits no noscript
            fallback, so it is added here by hand as Shoab specified. It only
            runs when scripting is off, so it cannot double count. */}
        {gtmEnabled && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <ProjectNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
