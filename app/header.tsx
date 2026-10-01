"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "MASTER PLAN", href: "#master-plan" },
  { label: "FLOOR PLAN", href: "#floor-plan" },
  { label: "PRICE", href: "#price" },
  { label: "GALLERY", href: "#gallery" },
  { label: "SITE VISIT", href: "#site-visit" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#e8e8e4]">
      {/* Bottom thin border line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#e8e8e4]" />

      <div className="mx-auto flex items-center justify-between px-8 py-3 max-w-screen-2xl">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* 5 thin vertical tower pillars */}
          <svg
            width="30"
            height="48"
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Outer left */}
            <rect x="0"    y="18" width="3" height="30" fill="#C5963C" />
            {/* Inner left */}
            <rect x="6"    y="12" width="3" height="36" fill="#C5963C" />
            {/* Center tallest */}
            <rect x="13.5" y="0"  width="3" height="48" fill="#C5963C" />
            {/* Inner right */}
            <rect x="21"   y="12" width="3" height="36" fill="#C5963C" />
            {/* Outer right */}
            <rect x="27"   y="18" width="3" height="30" fill="#C5963C" />
          </svg>

          <div className="leading-[1.2]">
            <p className="text-[9px] font-bold tracking-[0.3em] text-[#C5963C] uppercase">
              TRUMP
            </p>
            <p className="text-[12px] font-bold tracking-[0.35em] text-[#1c2b4a] uppercase">
              TOWERS
            </p>
            <p className="text-[6.5px] tracking-[0.2em] text-[#666] uppercase mt-[3px]">
              NOIDA
            </p>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-5 py-2 text-[11.5px] font-bold tracking-[0.13em] text-[#1c2b4a] hover:text-[#C5963C] transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Phone CTA — split icon | number ── */}
        <a
          href="tel:+9196673 94175"
          className="hidden lg:inline-flex items-center shrink-0 overflow-hidden rounded-[3px] hover:brightness-110 transition-all duration-200"
          style={{ background: "linear-gradient(135deg, #a8762a 0%, #c9943e 40%, #a8762a 100%)" }}
        >
          {/* Icon half */}
          <span className="flex items-center justify-center px-3 py-[10px] border-r border-[#ffffff30]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"
                fill="white"
              />
            </svg>
          </span>
          {/* Number half */}
          <span className="px-4 py-[10px] text-white text-[13px] font-bold tracking-wide">
            096673 94175
          </span>
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden p-2 text-[#1c2b4a]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-[#e8e8e4] px-6 pb-5"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[11px] font-bold tracking-[0.13em] text-[#1c2b4a] hover:text-[#C5963C] transition-colors border-b border-[#e8e8e4] last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+910935513367"
              className="mt-4 inline-flex items-center justify-center gap-3 rounded-[3px] overflow-hidden"
              style={{ background: "linear-gradient(135deg, #a8762a 0%, #c9943e 40%, #a8762a 100%)" }}
            >
              <span className="flex items-center gap-2 px-5 py-3 text-white text-[12px] font-bold tracking-wide">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z" fill="white" />
                </svg>
                093551 33367
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
