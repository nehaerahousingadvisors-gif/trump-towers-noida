"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const allImages = [
  { src: "/trump9.webp",  alt: "Trump Tower Exterior",         span: "col-span-2 row-span-2" },
  { src: "/trump1.webp",  alt: "Luxury Bedroom",               span: "col-span-1 row-span-1" },
  { src: "/trump2.jpg",   alt: "Master Suite View",            span: "col-span-1 row-span-1" },
  { src: "/trump3.jpg",   alt: "Trump Tower Facade",           span: "col-span-1 row-span-2" },
  { src: "/trump5.jpg",   alt: "Grand Lobby",                  span: "col-span-1 row-span-1" },
  { src: "/trump6.webp",  alt: "Infinity Pool",                span: "col-span-1 row-span-1" },
  { src: "/trump7.webp",  alt: "Entrance Lobby",               span: "col-span-1 row-span-1" },
  { src: "/trump8.jpeg",  alt: "Clubhouse Interior",           span: "col-span-1 row-span-1" },
  { src: "/trump9.jpg",   alt: "Twin Towers Aerial View",      span: "col-span-2 row-span-1" },
];

function Lightbox({
  images,
  index,
  onClose,
}: {
  images: typeof allImages;
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-[13px] font-semibold tracking-widest">
        {current + 1} / {images.length}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative mx-16 sm:mx-24 max-w-5xl w-full"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current}
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-contain rounded-xl shadow-2xl"
          style={{ maxHeight: "85vh", animation: "lbFade 0.25s ease both" }}
        />
        {/* Caption */}
        <p className="mt-3 text-center text-white/80 text-[13px] font-semibold tracking-widest uppercase">
          {img.alt}
        </p>
      </div>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        @keyframes lbFade {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  return (
    <main className="min-h-screen bg-[#f9f9f7]">

      {/* Lightbox — rendered at top of main, above everything */}
      {isOpen && (
        <Lightbox
          images={allImages}
          index={lightboxIndex!}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* ── Header bar ── */}
      <div className={`sticky top-0 bg-white shadow-sm border-b border-[#e8e8e4] transition-all duration-200 ${isOpen ? "invisible" : ""}`}
        style={{ zIndex: isOpen ? 0 : 50 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#C5963C" }}>
              Trump Towers Noida
            </p>
            <h1 className="text-[22px] font-black text-[#0a0a0a] leading-tight">
              Photo Gallery
            </h1>
          </div>
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#1c2b4a] text-[#1c2b4a] text-[13px] font-bold tracking-widest uppercase hover:bg-[#1c2b4a] hover:text-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-10 py-10">

        {/* Count badge */}
        <p className="text-[13px] text-[#888] mb-6 font-medium">
          Showing <span className="text-[#1c2b4a] font-bold">{allImages.length}</span> photos
        </p>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} relative rounded-2xl overflow-hidden cursor-pointer group bg-[#e0e0d8]`}
              style={{ animation: `fadeInUp 0.5s ease ${idx * 60}ms both` }}
              onClick={() => setLightboxIndex(idx)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-[12px] font-bold tracking-widest uppercase drop-shadow">
                  {img.alt}
                </p>
                <div className="w-5 h-[2px] mt-1 rounded-full" style={{ background: "#C5963C" }} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
