"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#generator", label: "Generator" },
  { href: "#symbols", label: "Symbols" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ed-bg/95 backdrop-blur-sm border-b border-ed-border">
      <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif italic text-xl font-bold text-ed-charcoal tracking-tight">
            GoFancyFont
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-petal-100 text-petal-500
                           font-semibold border border-petal-200 leading-none">
            ✦ free
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[13px] tracking-wide text-ed-muted
                         hover:text-petal-500 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden flex items-center justify-center
                     w-8 h-8 rounded-lg hover:bg-petal-100
                     transition-colors duration-150"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="#C96B8A" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="#9E7E88" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="7"  x2="20" y2="7"  />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`sm:hidden overflow-hidden transition-all duration-200 ease-in-out
                       ${menuOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-5 pb-3 bg-white border-t border-ed-borderLight">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[13px] tracking-wide text-ed-muted
                         hover:text-petal-500
                         py-2.5 border-b border-ed-borderLight last:border-0
                         transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
