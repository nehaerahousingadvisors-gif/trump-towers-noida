"use client";

import { useState } from "react";
import Link from "next/link";
import { Raleway } from "next/font/google";

// Raleway — elegant geometric sans for nav
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "Floor Plan",  href: "#floor-plan" },
  { label: "Price",       href: "#price" },
  { label: "Gallery",     href: "#gallery" },
  { label: "Site Visit",  href: "#site-visit" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.3)]" style={{ background: "#1c2b4a" }}>

      <div className="mx-auto flex items-center justify-between px-4 lg:px-10 py-1.5 lg:py-3 max-w-screen-2xl">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logotrump-removebg-preview.png"
            alt="Trump Towers Noida"
            className="h-8 lg:h-[54px] w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav — Raleway ── */}
        <nav
          aria-label="Main navigation"
          className={`${raleway.className} hidden lg:flex items-center gap-1`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-[12.5px] font-semibold tracking-[0.12em] text-white transition-colors duration-200 whitespace-nowrap group hover:text-[#c9a84c]"
            >
              {link.label}
              {/* Animated gold underline */}
              <span
                className="absolute bottom-0 left-4 right-4 h-[1.5px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "#c9a84c" }}
              />
            </Link>
          ))}
        </nav>

        {/* ── Phone CTA ── */}
        <a
          href="tel:+919667394175"
          className={`${raleway.className} hidden lg:inline-flex items-center shrink-0 rounded-lg overflow-hidden hover:brightness-105 active:scale-95 transition-all duration-200`}
          style={{ background: "#c9a84c" }}
        >
          <span className="flex items-center justify-center px-3 py-[10px] border-r border-white/30">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"
                fill="white"
              />
            </svg>
          </span>
          <span className="px-4 py-[10px] text-white text-[13px] font-semibold tracking-[0.06em]">
            096673 94175
          </span>
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4"  y1="4"  x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4"  x2="4"  y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-white/10 px-6 pb-6" style={{ background: "#1c2b4a" }}>
          <nav
            aria-label="Mobile navigation"
            className={`${raleway.className} flex flex-col pt-2`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 text-[13px] font-semibold tracking-[0.12em] text-white hover:text-[#c9a84c] transition-colors border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919667394175"
              className={`${raleway.className} mt-5 inline-flex items-center justify-center gap-2 rounded-lg py-3 px-5 text-white text-[13px] font-semibold tracking-[0.06em]`}
              style={{ background: "#c9a84c" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"
                  fill="white"
                />
              </svg>
              096673 94175
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
