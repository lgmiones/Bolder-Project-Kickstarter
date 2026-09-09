"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to the #hash target after a cross-page navigation.
 *
 * Next's App Router does not reliably restore hash position when arriving from
 * another route (the global `scroll-behavior: smooth` cancels its attempt, and
 * it can fire before layout settles), so the jump is done explicitly here once
 * the page has painted. Same-page anchor clicks are left to the browser, which
 * still animates them smoothly.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    let raf2 = 0;

    // Two frames: one to commit the render, one to measure a settled layout.
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  return null;
}
