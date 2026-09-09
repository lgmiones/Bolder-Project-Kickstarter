"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BolderLogo from "./BolderLogo";

const TABS = [
  { label: "Story", href: "/" },
  { label: "Rewards", href: "/rewards" },
];

export default function ProjectNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-ksr-border-soft bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 sm:gap-8">
        <ul className="flex items-center gap-6 overflow-x-auto">
          {TABS.map((tab) => {
            const active = pathname === tab.href;
            return (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-block whitespace-nowrap py-4 text-[15px] font-medium transition-colors ${
                    active
                      ? "text-ksr-text after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-ksr-text after:content-['']"
                      : "text-ksr-text/60 hover:text-ksr-text"
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/"
          aria-label="Bolder Adventure Park — home"
          className="shrink-0 py-2"
        >
          <BolderLogo width={96} priority />
        </Link>
      </div>
    </nav>
  );
}
