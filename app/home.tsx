"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "Yes, I am interested in site visit..*",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // handle form submission here
    alert("Message sent!");
  }

  return (
    <>
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4a5568 0%, #6b7280 25%, #9ca3af 50%, #6b7280 75%, #4a5568 100%)",
      }}
    >
      {/* Background overlay — dark gradient from left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Cloudy sky texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(100,116,139,0.5) 0%, transparent 60%), radial-gradient(ellipse at 70% 10%, rgba(71,85,105,0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(30,41,59,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-screen-xl px-8 py-20 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">

        {/* ── Left: Hero Text ── */}
        <div className="flex flex-col gap-5 max-w-xl">
          {/* Main heading */}
          <h1 className="text-white text-[42px] md:text-[52px] font-bold leading-tight tracking-tight drop-shadow-lg">
            Trump Towers Noida
          </h1>

          {/* Location badge */}
          <span
            className="inline-block w-fit px-4 py-2 text-white text-[13px] font-semibold tracking-wide rounded-sm"
            style={{ background: "linear-gradient(135deg, #1c2b4a 0%, #1c2b4a 50%, #1c2b4a 100%)" }}
          >
            Sector 94, Noida Expressway
          </span>

          {/* Subtitle */}
          <p className="text-[#d0c8bc] text-[16px] font-medium tracking-wide">
            4 &amp; 5 BHK Ultra-Luxury Branded Residence
          </p>

          {/* Feature bullets */}
          <ul className="flex flex-col gap-2 mt-1">
            <li className="flex items-center gap-2 text-[#ccc] text-[14px]">
              <span className="text-[16px]">🏢</span>
              Iconic Twin Towers Landmark
            </li>
            <li className="flex items-center gap-2 text-[#ccc] text-[14px]">
              <span className="text-[16px]">🏠</span>
              Under Construction
            </li>
          </ul>

          {/* Price button */}
          <button
            className="mt-3 w-fit px-6 py-3 bg-transparent border border-white text-white text-[14px] font-semibold tracking-wide rounded-sm hover:bg-white hover:text-black transition-all duration-200"
          >
            Price Starts : ₹19.70 Cr*
          </button>
        </div>

        {/* ── Right: Contact Form ── */}
        <div
          className="w-full max-w-[370px] rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(160deg, #1a1610 0%, #2a1f0a 50%, #1a1610 100%)" }}
        >
          {/* Form header */}
          <div
            className="px-6 py-5"
            style={{ background: "linear-gradient(135deg, #1c2b4a 0%, #1c2b4a 50%, #1c2b4a 100%)" }}
          >
            <h2 className="text-white text-[16px] font-bold text-center tracking-wide">
              Interested in Trump Towers Noida?
            </h2>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-6 py-6">
            {/* Name */}
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-[11px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="#999"/>
              </svg>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="flex-1 text-[13px] text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-[11px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z" fill="#999"/>
              </svg>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone No"
                required
                className="flex-1 text-[13px] text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-[11px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#999"/>
              </svg>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Id"
                required
                className="flex-1 text-[13px] text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 bg-white rounded-lg px-4 py-[11px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5" aria-hidden="true">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#1c2b4a"/>
              </svg>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="flex-1 text-[13px] text-gray-500 placeholder-gray-400 outline-none bg-transparent resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-[14px] bg-white text-black text-[14px] font-bold tracking-wide rounded-full hover:bg-[#f0e8d8] transition-colors duration-200 mt-1"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>

    {/* ── Quick Overview Section ── */}
    <OverviewSection />

    {/* ── Project Highlight Section ── */}
    <HighlightSection />
    {/* ── Project Amenities Section ── */}
    <AmenitiesSection />
    {/* ── Price List Section ── */}
    <PriceSection />
    {/* ── Floor Plan Section ── */}
    <section id="floor-plan" className="w-full py-16 px-4 sm:px-10" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f0f4ff 100%)" }}>
      <div className="mx-auto max-w-5xl">

        {/* Top label */}
        <p className="text-center text-[12px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: "#1c2b4a" }}>
          — EXPLORE LAYOUTS —
        </p>

        {/* Heading */}
        <h2 className="text-center text-[44px] md:text-[56px] font-black leading-none tracking-tight mb-2" style={{ color: "#c9a84c" }}>
          Project Floor Plan
        </h2>

        {/* Subheading */}
        <p className="text-center text-[14px] text-[#666] mb-10">
          Spacious and well-designed floor plans for modern living
        </p>

        {/* Two floor plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── 4 BHK Card ── */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e8eef8]">
            {/* Card header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-2">
              <div>
                <p className="text-[22px] font-bold text-[#1c2b4a]">4 BHK</p>
                <p className="text-[13px] text-[#888]">Floor Plan</p>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold text-[#1c2b4a] border border-[#1c2b4a] bg-[#e8eef8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#1c2b4a" strokeWidth="1.6" fill="none"/>
                  <path d="M9 21V12h6v9" stroke="#1c2b4a" strokeWidth="1.6"/>
                </svg>
                4 Bedrooms
              </span>
            </div>

            {/* Floor plan image placeholder */}
            <div className="mx-3 my-2 rounded-xl overflow-hidden bg-[#f5f0e8]" style={{ height: "130px" }}>
              <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Outer boundary */}
                <rect x="20" y="10" width="360" height="200" rx="4" fill="#e8dfc8" stroke="#b0976a" strokeWidth="2"/>
                {/* Room 1 — Master bedroom */}
                <rect x="20" y="10" width="130" height="90" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="85" y="60" textAnchor="middle" fontSize="9" fill="#7a6040">Master</text>
                <text x="85" y="72" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom</text>
                {/* Room 2 — Living */}
                <rect x="150" y="10" width="140" height="110" fill="#c8dce8" stroke="#8ab0c4" strokeWidth="1.5"/>
                <text x="220" y="65" textAnchor="middle" fontSize="9" fill="#3a6080">Living /</text>
                <text x="220" y="77" textAnchor="middle" fontSize="9" fill="#3a6080">Dining</text>
                {/* Room 3 — Bedroom 2 */}
                <rect x="20" y="110" width="110" height="80" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="75" y="155" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom 2</text>
                {/* Kitchen */}
                <rect x="290" y="10" width="90" height="80" fill="#e8d0b0" stroke="#c09060" strokeWidth="1.5"/>
                <text x="335" y="55" textAnchor="middle" fontSize="9" fill="#7a5030">Kitchen</text>
                {/* Bathroom */}
                <rect x="290" y="90" width="90" height="50" fill="#b8d4e0" stroke="#7aaac0" strokeWidth="1.5"/>
                <text x="335" y="120" textAnchor="middle" fontSize="9" fill="#3a6880">Bath</text>
                {/* Bedroom 3 */}
                <rect x="130" y="130" width="160" height="80" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="210" y="175" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom 3 / Balcony</text>
                {/* Bedroom 4 */}
                <rect x="20" y="160" width="100" height="50" fill="#ddd0b8" stroke="#b0976a" strokeWidth="1.5" opacity="0.8"/>
                <text x="70" y="190" textAnchor="middle" fontSize="8" fill="#7a6040">Bedroom 4</text>
              </svg>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 px-4 py-2 border-t border-[#f0f0f0]">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3" stroke="#1c2b4a" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#999]">Carpet Area</p>
                  <p className="text-[12px] font-bold text-[#1c2b4a]">~1800 Sq. Ft.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1c2b4a" strokeWidth="1.8" fill="none"/>
                  <path d="M3 9h18M9 3v18" stroke="#1c2b4a" strokeWidth="1.2"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#999]">Configuration</p>
                  <p className="text-[12px] font-bold text-[#1c2b4a]">4 BHK + 4T</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="8" width="18" height="13" rx="1" stroke="#1c2b4a" strokeWidth="1.8" fill="none"/>
                  <path d="M8 8V5a4 4 0 018 0v3" stroke="#1c2b4a" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#999]">Balcony</p>
                  <p className="text-[12px] font-bold text-[#1c2b4a]">3 Balconies</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-5 pb-6">
              <button
                className="w-full py-3.5 rounded-xl text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "#1c2b4a" }}
              >
                View 4 BHK Floor Plan →
              </button>
            </div>
          </div>

          {/* ── 5 BHK Card ── */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e8eef8]">
            {/* Card header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-2">
              <div>
                <p className="text-[22px] font-bold text-[#1c2b4a]">5 BHK</p>
                <p className="text-[13px] text-[#888]">Floor Plan</p>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold text-[#1c2b4a] border border-[#1c2b4a] bg-[#e8eef8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="#1c2b4a" strokeWidth="1.6" fill="none"/>
                  <path d="M9 21V12h6v9" stroke="#1c2b4a" strokeWidth="1.6"/>
                </svg>
                5 Bedrooms
              </span>
            </div>

            {/* Floor plan image placeholder */}
            <div className="mx-3 my-2 rounded-xl overflow-hidden bg-[#f5f0e8]" style={{ height: "130px" }}>
              <svg width="100%" height="100%" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="10" y="10" width="380" height="200" rx="4" fill="#e8dfc8" stroke="#b0976a" strokeWidth="2"/>
                {/* Room 1 */}
                <rect x="10" y="10" width="110" height="80" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="65" y="55" textAnchor="middle" fontSize="9" fill="#7a6040">Master Bed</text>
                {/* Room 2 */}
                <rect x="120" y="10" width="130" height="100" fill="#c8dce8" stroke="#8ab0c4" strokeWidth="1.5"/>
                <text x="185" y="65" textAnchor="middle" fontSize="9" fill="#3a6080">Living Room</text>
                {/* Room 3 */}
                <rect x="250" y="10" width="140" height="80" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="320" y="55" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom 2</text>
                {/* Kitchen */}
                <rect x="10" y="90" width="110" height="70" fill="#e8d0b0" stroke="#c09060" strokeWidth="1.5"/>
                <text x="65" y="130" textAnchor="middle" fontSize="9" fill="#7a5030">Kitchen</text>
                {/* Bedroom 3 */}
                <rect x="120" y="110" width="100" height="80" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="170" y="155" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom 3</text>
                {/* Bedroom 4 */}
                <rect x="250" y="90" width="140" height="70" fill="#d4c4a0" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="320" y="130" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom 4</text>
                {/* Bedroom 5 */}
                <rect x="220" y="160" width="170" height="50" fill="#ddd0b8" stroke="#b0976a" strokeWidth="1.5"/>
                <text x="305" y="190" textAnchor="middle" fontSize="9" fill="#7a6040">Bedroom 5 / Balcony</text>
                {/* Utility */}
                <rect x="10" y="160" width="100" height="50" fill="#b8d4e0" stroke="#7aaac0" strokeWidth="1.5"/>
                <text x="60" y="190" textAnchor="middle" fontSize="9" fill="#3a6880">Utility</text>
                {/* Balcony strip */}
                <rect x="120" y="193" width="98" height="17" fill="#c8e0d0" stroke="#70a890" strokeWidth="1"/>
                <text x="169" y="205" textAnchor="middle" fontSize="7" fill="#3a7060">Balcony</text>
              </svg>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 px-4 py-2 border-t border-[#f0f0f0]">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3" stroke="#1c2b4a" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#999]">Carpet Area</p>
                  <p className="text-[12px] font-bold text-[#1c2b4a]">~2400 Sq. Ft.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1c2b4a" strokeWidth="1.8" fill="none"/>
                  <path d="M3 9h18M9 3v18" stroke="#1c2b4a" strokeWidth="1.2"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#999]">Configuration</p>
                  <p className="text-[12px] font-bold text-[#1c2b4a]">5 BHK + 5T</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="8" width="18" height="13" rx="1" stroke="#1c2b4a" strokeWidth="1.8" fill="none"/>
                  <path d="M8 8V5a4 4 0 018 0v3" stroke="#1c2b4a" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className="text-[10px] text-[#999]">Balcony</p>
                  <p className="text-[12px] font-bold text-[#1c2b4a]">4 Balconies</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-5 pb-6">
              <button
                className="w-full py-3.5 rounded-xl text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "#1c2b4a" }}
              >
                View 5 BHK Floor Plan →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* ── Gallery Section ── */}
    <GallerySection />
    {/* ── Location Section ── */}
    <LocationSection />
    {/* ── FAQ Section ── */}
    <section id="faq" className="w-full bg-[#f5f7ff] py-20 px-4 sm:px-12">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <h2
          className="text-center text-[28px] md:text-[32px] font-bold mb-10"
          style={{ color: "#c9a84c" }}
        >
          Detailed FAQs – Trump Tower Noida Sector 94
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-[#d0d8ee] mb-2" />

        {/* FAQ Items */}
        <FAQList />
      </div>
    </section>
  </>
  );
}

const faqs = [
  {
    q: "What Is The Current Price Of Trump Tower Noida Sector 94?",
    a: "The starting price is ₹19.70 Cr and the average rate is around ₹40,000 per sq. ft., depending on the unit and tower.",
  },
  {
    q: "Is It A Good Investment In 2026?",
    a: "Yes, due to its Delhi-border location, ultra-low supply, and branded residence positioning, it offers strong long-term capital appreciation.",
  },
  {
    q: "What Makes This Project Different From Other Luxury Projects In Noida?",
    a: "Private lift lobbies, double-height living spaces, concierge services, and global brand value set it apart.",
  },
  {
    q: "When Is The Possession?",
    a: "The possession is scheduled for July 2030 as per RERA.",
  },
  {
    q: "What Is The RERA Number Of Trump Tower Noida?",
    a: "The RERA registration number is UPRERAPRJ794824/10/2025.",
  },
  {
    q: "Who Should Buy Here?",
    a: "HNIs, NRIs, business owners, and luxury end-users looking for a landmark address.",
  },
  {
    q: "What Are The RERA Details Of Trump Tower Noida Sector 94?",
    a: "The project is registered under UP RERA with registration number UPRERAPRJ794824/10/2025. The RERA-committed possession timeline is July 2030. Buyers can verify all approvals and updates directly on the UP RERA portal.",
  },
  {
    q: "What Are The Expected Maintenance Charges?",
    a: "Estimated maintenance for this ultra-luxury project may range between ₹12–₹18 per sq. ft. per month, depending on final amenities, staffing, and tower density. Exact charges will be confirmed closer to possession.",
  },
  {
    q: "What Is The Expected Rental Yield In Sector 94?",
    a: "Luxury properties in Sector 94 typically offer 1.8%–2.5% annual rental yield. This project is more suited for long-term capital appreciation rather than high rental returns.",
  },
];

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((item, idx) => (
        <div key={idx} className="border-b border-[#d0d8ee]">
          <button
            className="w-full flex items-center justify-between px-0 py-6 text-left"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span
              className="text-[18px] font-bold pr-8 leading-snug"
              style={{ color: "#1c2b4a" }}
            >
              {idx + 1}. {item.q}
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className={`shrink-0 transition-transform duration-200 ${open === idx ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" stroke="#1c2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open === idx && (
            <div className="pb-6 text-[15px] text-[#555] leading-relaxed font-medium">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Custom hook: fires when element enters viewport ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const highlightItems = [
  { label: "Location", value: "Sector 94, Noida (0 km from Delhi)" },
  { label: "Configuration", value: "4 BHK & 5 BHK ultra-luxury residences" },
  { label: "Starting Price", value: "₹19.70 Cr*" },
  { label: "Current Rate", value: "~₹40,000 per sq. ft." },
  { label: "RERA Number", value: "UPRERAPRJ794824/10/2025", highlight: true },
  { label: "Possession", value: "July 2030" },
  { label: "Developer", value: "M3M India, Tribeca & The Trump Organization" },
  {
    label: "Project Status (Feb 2026)",
    value: "High-rise structure completed on multiple upper floors with façade/glazing work in progress",
  },
];

function HighlightSection() {
  const heading = useInView(0.1);
  const image   = useInView(0.1);
  const list    = useInView(0.05);

  return (
    <section id="highlights" className="w-full bg-white py-14 px-4 sm:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Heading — fade + slide down */}
        <div
          ref={heading.ref}
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: heading.inView ? 1 : 0,
            transform: heading.inView ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          <h2
            className="text-center text-[32px] md:text-[40px] font-bold mb-10"
            style={{ color: "#c9a84c" }}
          >
            Trump Tower Noida Sector 94 Project Highlight
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left image — slide in from left */}
          <div
            ref={image.ref}
            className="relative w-full lg:w-[45%] shrink-0 rounded-xl overflow-hidden shadow-md"
            style={{
              transition: "opacity 0.9s ease, transform 0.9s ease",
              opacity: image.inView ? 1 : 0,
              transform: image.inView ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            {/* Gold badge */}
            <div
              className="absolute top-4 left-0 z-10 px-5 py-2 text-white text-[11px] font-bold tracking-widest uppercase"
              style={{ background: "linear-gradient(135deg, #1c2b4a 0%, #1c2b4a 50%, #1c2b4a 100%)" }}
            >
              Project Highlight
            </div>

            {/* Location pin */}
            <div className="absolute top-4 right-4 z-10 flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, #1c2b4a 0%, #1c2b4a 50%, #1c2b4a 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="white"/>
                </svg>
              </div>
              <span className="text-white text-[9px] font-bold mt-0.5 drop-shadow">0 KM</span>
            </div>

            {/* Tower illustration */}
            <div
              className="w-full h-[520px] flex items-end justify-center"
              style={{ background: "linear-gradient(180deg, #2c3e6b 0%, #4a6fa5 30%, #e8a44a 70%, #c4783a 100%)" }}
            >
              <svg
                width="100%"
                height="260"
                viewBox="0 0 500 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMax meet"
                aria-hidden="true"
              >
                <rect x="130" y="20" width="80" height="240" fill="#1a2a4a" opacity="0.85"/>
                <rect x="135" y="20" width="70" height="10" fill="#2a3a5a" opacity="0.9"/>
                {[30,55,80,105,130,155,180].map((y, i) => (
                  <g key={i}>
                    <rect x="142" y={y} width="12" height="16" fill="#e8c87a" opacity="0.7"/>
                    <rect x="162" y={y} width="12" height="16" fill="#e8c87a" opacity="0.5"/>
                    <rect x="182" y={y} width="12" height="16" fill="#e8c87a" opacity="0.6"/>
                  </g>
                ))}
                <rect x="290" y="40" width="80" height="220" fill="#1a2a4a" opacity="0.85"/>
                <rect x="295" y="40" width="70" height="10" fill="#2a3a5a" opacity="0.9"/>
                {[50,75,100,125,150,175].map((y, i) => (
                  <g key={i}>
                    <rect x="302" y={y} width="12" height="16" fill="#e8c87a" opacity="0.6"/>
                    <rect x="322" y={y} width="12" height="16" fill="#e8c87a" opacity="0.8"/>
                    <rect x="342" y={y} width="12" height="16" fill="#e8c87a" opacity="0.5"/>
                  </g>
                ))}
                <rect x="0" y="240" width="500" height="20" fill="#3a6090" opacity="0.4"/>
                <line x1="170" y1="20" x2="170" y2="0" stroke="#888" strokeWidth="2"/>
                <line x1="170" y1="0" x2="210" y2="5" stroke="#888" strokeWidth="1.5"/>
                <line x1="330" y1="40" x2="330" y2="5" stroke="#888" strokeWidth="2"/>
                <line x1="330" y1="5" x2="290" y2="10" stroke="#888" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>

          {/* Right list — each row slides in with staggered delay */}
          <div ref={list.ref} className="flex-1 flex flex-col divide-y divide-[#e8eef8]">
            {highlightItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 py-5"
                style={{
                  transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
                  opacity: list.inView ? 1 : 0,
                  transform: list.inView ? "translateX(0)" : "translateX(40px)",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                  <path
                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
                    stroke="#1c2b4a"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <p className="text-[17px] text-[#333] leading-relaxed">
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.highlight
                    ? <span style={{ color: "#1c2b4a" }}>{item.value}</span>
                    : item.value
                  }
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Amenities data + animated section ──
const amenitiesData = [
  {
    label: "1,00,000 sq. ft. luxury clubhouse",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7" r="3"/>
        <path d="M9 7H6l-2 4h2v6h8v-6h2l-2-4h-3"/>
        <path d="M10 14v-3h4v3"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
      </svg>
    ),
  },
  {
    label: "Indoor heated lap pool",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
        <path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
        <path d="M8 7l2-2 2 2 2-2"/>
        <line x1="12" y1="3" x2="12" y2="7"/>
      </svg>
    ),
  },
  {
    label: "Infinity-edge outdoor pool",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="8" width="18" height="10" rx="1"/>
        <path d="M3 13h18"/>
        <path d="M7 8V5h10v3"/>
        <path d="M3 18c2-1 4-1 6 0s4 1 6 0 4-1 6 0" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: "Trump concierge & hospitality services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="6" r="3"/>
        <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
        <path d="M9 11l1 2 2-3 2 3 1-2" opacity="0.6"/>
      </svg>
    ),
  },
  {
    label: "Biometric lift access",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1"/>
        <line x1="9" y1="8" x2="9" y2="16"/>
        <line x1="12" y1="6" x2="12" y2="18"/>
        <line x1="15" y1="8" x2="15" y2="16"/>
        <line x1="7" y1="12" x2="17" y2="12" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: "Multi-layer security system",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7" r="3"/>
        <path d="M9 7H6l-2 4h2v6h8v-6h2l-2-4h-3"/>
        <rect x="4" y="3" width="4" height="3" rx="0.5" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: "Spa, wellness & high-performance fitness centre",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="6" r="2.5"/>
        <path d="M12 9v5"/>
        <path d="M9 12l3 3 3-3"/>
        <path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5"/>
        <path d="M5 10c1-1 2-1.5 3-1" opacity="0.5"/>
        <path d="M19 10c-1-1-2-1.5-3-1" opacity="0.5"/>
      </svg>
    ),
  },
];

function AmenitiesSection() {
  const heading = useInView(0.1);
  const grid    = useInView(0.05);

  return (
    <section id="amenities" className="w-full bg-[#f5f5f0] py-14 px-4 sm:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Heading — fade + slide down */}
        <div
          ref={heading.ref}
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: heading.inView ? 1 : 0,
            transform: heading.inView ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          <h2
            className="text-center text-[32px] md:text-[40px] font-bold mb-10"
            style={{ color: "#c9a84c" }}
          >
            Trump Tower Noida Sector 94 Project Amenities
          </h2>
        </div>

        {/* Cards grid — staggered fade + slide up */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenitiesData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white border border-[#1c2b4a] rounded-xl px-5 py-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: `0.6s, 0.6s, 0.3s`,
                transitionDelay: `${idx * 90}ms, ${idx * 90}ms, 0ms`,
                transitionTimingFunction: "ease, ease, ease",
                opacity: grid.inView ? 1 : 0,
                transform: grid.inView ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <div className="w-14 h-14 rounded-lg border border-[#1c2b4a] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className={`${lexend.className} text-[17px] text-[#1c2b4a] font-medium leading-snug`}>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Price List animated section ──
const priceRows = [
  { type: "4 BHK SIGNATURE", size: "4,925 SQ. FT",  price: "₹19.70 CR*" },
  { type: "4 BHK ICONIC",    size: "5,685 SQ. FT",  price: "₹22.5 CR*" },
  { type: "5 BHK SKY VILLA", size: "6,000+ SQ. FT.", price: "PRICE ON REQUEST" },
];

function PriceSection() {
  const heading  = useInView(0.1);
  const tableRef = useInView(0.05);

  return (
    <section id="price" className="w-full bg-white py-14 px-4 sm:px-10 overflow-hidden">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div
          ref={heading.ref}
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: heading.inView ? 1 : 0,
            transform: heading.inView ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          <h2
            className="text-center text-[32px] md:text-[40px] font-bold mb-8"
            style={{ color: "#c9a84c" }}
          >
            Trump Tower Noida Sector 94 Price List
          </h2>
        </div>

        <div
          ref={tableRef.ref}
          style={{
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: tableRef.inView ? 1 : 0,
            transform: tableRef.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* ── Desktop Table (md+) ── */}
          <div className="hidden md:block w-full rounded-xl overflow-hidden border border-[#1c2b4a]">
            {/* Header */}
            <div
              className="grid grid-cols-4 text-white text-[15px] font-bold tracking-widest uppercase"
              style={{ background: "#1c2b4a" }}
            >
              <div className="px-5 py-4 text-center">Type</div>
              <div className="px-5 py-4 text-center">Sizes</div>
              <div className="px-5 py-4 text-center">Price</div>
              <div className="px-5 py-4 text-center">Unlock Offers</div>
            </div>
            {/* Rows */}
            {priceRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 items-center border-t border-[#e0e8f4] hover:bg-[#f5f8ff] transition-colors"
                style={{
                  transitionProperty: "opacity, transform, background-color",
                  transitionDuration: "0.6s, 0.6s, 0.2s",
                  transitionDelay: `${idx * 120 + 200}ms, ${idx * 120 + 200}ms, 0ms`,
                  transitionTimingFunction: "ease",
                  opacity: tableRef.inView ? 1 : 0,
                  transform: tableRef.inView ? "translateX(0)" : "translateX(-30px)",
                }}
              >
                <div className="px-5 py-5 text-center text-[16px] font-semibold text-[#333] tracking-wide">{row.type}</div>
                <div className="px-5 py-5 text-center text-[16px] text-[#333]">{row.size}</div>
                <div className="px-5 py-5 text-center text-[16px] text-[#333]">{row.price}</div>
                <div className="px-5 py-5 flex justify-center">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-md text-white text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all"
                    style={{ background: "#1c2b4a" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
                      <path d="M8 11V7a4 4 0 018 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── Mobile Cards (< md) ── */}
          <div className="flex flex-col gap-4 md:hidden">
            {priceRows.map((row, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#1c2b4a] overflow-hidden"
                style={{
                  transitionDelay: `${idx * 120 + 200}ms`,
                  opacity: tableRef.inView ? 1 : 0,
                  transform: tableRef.inView ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {/* Card header */}
                <div className="px-4 py-3 text-white text-[15px] font-bold tracking-wide" style={{ background: "#1c2b4a" }}>
                  {row.type}
                </div>
                {/* Card body */}
                <div className="px-4 py-4 bg-white flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] text-[#888] font-semibold tracking-widest uppercase">Size</span>
                    <span className="text-[15px] font-bold text-[#1c2b4a]">{row.size}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#eee] pt-3">
                    <span className="text-[12px] text-[#888] font-semibold tracking-widest uppercase">Price</span>
                    <span className="text-[15px] font-bold text-[#1c2b4a]">{row.price}</span>
                  </div>
                  <button
                    className="mt-1 w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all"
                    style={{ background: "#1c2b4a" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
                      <path d="M8 11V7a4 4 0 018 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Lightbox for home gallery ──
const homeGalleryImages = [
  { src: "/trump1.webp", alt: "Luxury Bedroom" },
  { src: "/trump2.jpg",  alt: "Master Suite View" },
  { src: "/trump6.webp", alt: "Trump Tower Hero" },
  { src: "/trump3.jpg",  alt: "Trump Tower Facade" },
  { src: "/trump5.jpg",  alt: "Grand Lobby" },
  { src: "/trump7.webp", alt: "Entrance Lobby" },
  { src: "/trump8.jpeg", alt: "Clubhouse Interior" },
  { src: "/trump9.jpg",  alt: "Twin Towers Aerial" },
];

function HomeLightbox({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const images = homeGalleryImages;
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

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
      {/* Close */}
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

      {/* Prev */}
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
          style={{ maxHeight: "85vh", animation: "lbFadeHome 0.25s ease both" }}
        />
        <p className="mt-3 text-center text-white/80 text-[13px] font-semibold tracking-widest uppercase">
          {img.alt}
        </p>
      </div>

      {/* Next */}
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
        @keyframes lbFadeHome {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// ── Gallery Section ──
function GallerySection() {
  const heading = useInView(0);
  const top     = useInView(0);
  const bot     = useInView(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // index map: top-left[0,1], center[2], top-right[3,4], bottom[5,6,7]
  const topLeft   = [0, 1];
  const centerIdx = 2;
  const topRight  = [3, 4];
  const bottomIdx = [5, 6, 7];

  const s: React.CSSProperties = {
    position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
  };

  const zoomIcon = (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );

  return (
    <>
      {lightboxIdx !== null && (
        <HomeLightbox index={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}

      <section id="gallery" className="w-full bg-[#f9f9f7] py-14 px-4 sm:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-6 text-center">
            <p className="text-[13px] font-semibold tracking-[0.25em] uppercase mb-1" style={{ color: "#1c2b4a" }}>
              Trump Towers Noida
            </p>
            <h2 className="text-[44px] md:text-[56px] font-black leading-none tracking-tight" style={{ color: "#c9a84c" }}>
              Gallery
            </h2>
            <div className="w-10 h-[3px] mx-auto mt-3 rounded-full" style={{ background: "#1c2b4a" }} />
          </div>

          {/* ── Desktop: Left-2 | Center-big | Right-2 ── */}
          <div
            className="hidden md:grid gap-3 mb-3"
            style={{ gridTemplateColumns: "1fr 2fr 1fr", height: "320px" }}
          >
            {/* Left col — 2 stacked */}
            <div className="grid grid-rows-2 gap-3">
              {topLeft.map((imgIdx, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setLightboxIdx(imgIdx)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={homeGalleryImages[imgIdx].src} alt={homeGalleryImages[imgIdx].alt} style={s} className="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  {zoomIcon}
                </div>
              ))}
            </div>

            {/* Center — big hero */}
            <div className="relative rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setLightboxIdx(centerIdx)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={homeGalleryImages[centerIdx].src} alt={homeGalleryImages[centerIdx].alt} style={s} className="group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              {zoomIcon}
            </div>

            {/* Right col — 2 stacked */}
            <div className="grid grid-rows-2 gap-3">
              {topRight.map((imgIdx, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setLightboxIdx(imgIdx)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={homeGalleryImages[imgIdx].src} alt={homeGalleryImages[imgIdx].alt} style={s} className="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  {zoomIcon}
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop bottom: 3 equal ── */}
          <div className="hidden md:grid grid-cols-3 gap-3" style={{ height: "180px" }}>
            {bottomIdx.map((imgIdx, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setLightboxIdx(imgIdx)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={homeGalleryImages[imgIdx].src} alt={homeGalleryImages[imgIdx].alt} style={s} className="group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                {zoomIcon}
              </div>
            ))}
          </div>

          {/* ── Mobile: 3-column square grid ── */}
          <div className="grid md:hidden grid-cols-3 gap-2">
            {[...topLeft, centerIdx, ...topRight, ...bottomIdx].map((imgIdx, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "1 / 1" }}
                onClick={() => setLightboxIdx(imgIdx)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={homeGalleryImages[imgIdx].src} alt={homeGalleryImages[imgIdx].alt} style={s} className="active:scale-95 transition-transform duration-200" />
              </div>
            ))}
          </div>

          {/* SHOW MORE button → opens full gallery page */}
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-10 py-3 rounded-full border-2 border-[#1c2b4a] text-[#1c2b4a] text-[14px] font-bold tracking-widest uppercase hover:bg-[#1c2b4a] hover:text-white transition-all duration-300 active:scale-95"
            >
              Show More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

// ── Location Section ──
const connectivityItems = [
  {
    label: "DND Flyway",
    sub: "Seamless Connectivity",
    time: "2 minutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="1"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
        <circle cx="7.5" cy="16" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="16.5" cy="16" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "South Delhi",
    sub: "Direct Access",
    time: "10 minutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="1"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
        <circle cx="7.5" cy="16" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="16.5" cy="16" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Noida Expressway",
    sub: "Smooth Connectivity",
    time: "5 minutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 17l4-8 4 3 4-6 4 5"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    label: "Sector 18",
    sub: "Commercial Hub",
    time: "10 minutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="7" width="18" height="14" rx="1"/>
        <path d="M8 7V5a4 4 0 018 0v2"/>
        <line x1="3" y1="11" x2="21" y2="11"/>
        <line x1="8" y1="11" x2="8" y2="21"/>
        <line x1="16" y1="11" x2="16" y2="21"/>
      </svg>
    ),
  },
];

const socialInfra = ["DLF Mall of India", "Amity University", "Jaypee Hospital"];

function LocationSection() {
  const heading = useInView(0.1);
  const content = useInView(0.08);

  return (
    <section id="location" className="w-full bg-white py-12 px-4 sm:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* ── Top label + heading ── */}
        <div
          ref={heading.ref}
          className="text-center mb-8"
          style={{
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: heading.inView ? 1 : 0,
            transform: heading.inView ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12" style={{ background: "#c9a84c" }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: "#c9a84c" }}>
              Prime Location
            </span>
            <div className="h-px w-12" style={{ background: "#c9a84c" }} />
          </div>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-snug" style={{ color: "#1c2b4a" }}>
            Why Sector 94 is Emerging as the New South Delhi
          </h2>
          <p className="mt-2 text-[15px] text-[#666] max-w-2xl mx-auto">
            A strategic location with seamless connectivity, social infrastructure and a premium lifestyle.
          </p>
        </div>

        {/* ── Two-column layout: Map | Info panel ── */}
        <div
          ref={content.ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg border border-[#dde6f0]"
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: content.inView ? 1 : 0,
            transform: content.inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* ── Left: Google Map ── */}
          <div className="relative w-full" style={{ minHeight: "320px" }}>
            <iframe
              title="Sector 94 Noida Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.665032228716!2d77.38630731455992!3d28.56588998244239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef05594c0d1f%3A0x89b4b76e1c96b9c8!2sSector%2094%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ── Right: Info panel ── */}
          <div className="flex flex-col p-5 sm:p-6 gap-3" style={{ background: "#1c2b4a" }}>

            {/* Intro text */}
            <p className="text-[14px] leading-relaxed pb-4 border-b border-white/10" style={{ color: "rgba(255,255,255,0.75)" }}>
              The biggest advantage of Trump Tower Noida Sector 94 is its strategic location
              with excellent connectivity and world-class social infrastructure.
            </p>

            {/* Connectivity rows */}
            <div className="flex flex-col divide-y divide-white/10">
              {connectivityItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 py-2">
                  {/* Icon box */}
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{item.icon}</span>
                  </div>
                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-bold text-white leading-tight">{item.label}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{item.sub}</p>
                  </div>
                  {/* Time badge */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[13px] font-bold" style={{ color: "#c9a84c" }}>{item.time}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Infrastructure */}
            <div className="rounded-xl p-3 border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-2 mb-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="7" width="18" height="14" rx="1"/>
                  <path d="M8 7V5a4 4 0 018 0v2"/>
                </svg>
                <p className="text-[12px] font-bold text-white tracking-wide">Social Infrastructure Nearby</p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {[
                  { icon: "🏬", label: "DLF Mall of India" },
                  { icon: "🎓", label: "Amity University" },
                  { icon: "🏥", label: "Jaypee Hospital" },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Premium Schools & Business Districts */}
            <div className="rounded-xl p-3 border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-2 mb-1">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <p className="text-[12px] font-bold text-white tracking-wide">Premium Schools &amp; Business Districts</p>
              </div>
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                This address offers a lifestyle comparable to Gurgaon&apos;s Golf Course Road,
                but with immediate Delhi access.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// ── Overview Section ──
const overviewCards = [
  {
    label: "Project Location",
    value: "Sector 94, Central Noida",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Starting Price",
    value: "19.70 Cr*",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <text x="4" y="20" fontSize="19" fill="white" fontWeight="bold" fontFamily="sans-serif">₹</text>
      </svg>
    ),
  },
  {
    label: "Starting Size",
    value: "4,925 sq. ft",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="11" width="7" height="11" fill="white" opacity="0.85"/>
        <rect x="10" y="7" width="5" height="15" fill="white"/>
        <rect x="16" y="14" width="6" height="8" fill="white" opacity="0.7"/>
      </svg>
    ),
  },
  {
    label: "Project Configuration",
    value: "4 & 5 BHK",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Project Status",
    value: "Under Construction",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="white"/>
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z" fill="white" opacity="0.6"/>
      </svg>
    ),
  },
  {
    label: "Project Type",
    value: "Residential Project",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
        <line x1="8" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="13,15.5 14,17.5 16,14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function OverviewSection() {
  const headingInView = useInView(0.15);
  const textInView   = useInView(0.15);
  const cardsInView  = useInView(0.1);
  const btnsInView   = useInView(0.1);

  return (
    <>
      {/* ── Quick Overview heading + paragraph ── */}
      <section id="overview" className="w-full bg-[#f5f5f0] py-10 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl">

          {/* Heading with gold underline draw */}
          <div
            ref={headingInView.ref}
            className="text-center mb-6"
            style={{
              transition: "opacity 0.7s ease, transform 0.7s ease",
              opacity: headingInView.inView ? 1 : 0,
              transform: headingInView.inView ? "translateY(0)" : "translateY(-28px)",
            }}
          >
            <h2 className="inline-block relative text-[32px] md:text-[40px] font-bold" style={{ color: "#c9a84c" }}>
              Trump Tower Noida Sector 94 – Quick Overview
              {/* animated underline */}
              <span
                className="absolute left-0 bottom-[-6px] h-[3px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, #c9a84c, #e8d08a, #c9a84c)",
                  transition: "width 1s ease 0.4s",
                  width: headingInView.inView ? "100%" : "0%",
                }}
              />
            </h2>
          </div>

          {/* Paragraph — clips in from left */}
          <div
            ref={textInView.ref}
            style={{
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
              opacity: textInView.inView ? 1 : 0,
              transform: textInView.inView ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <p className={`${lexend.className} text-[#333] text-[18px] md:text-[21px] leading-[1.9] text-justify`}>
              Trump Tower Noida Sector 94 is an ultra-luxury branded residential development located at the
              Delhi–Noida border near the DND Flyway. Developed by M3M India in collaboration with Tribeca
              Developers and The Trump Organization, this landmark project offers expansive 4 BHK and 5 BHK
              residences with private lift lobbies, double-height living areas, and panoramic Yamuna river views.
            </p>
          </div>

        </div>
      </section>

      {/* ── Info Cards + Action Buttons ── */}
      <section className="w-full bg-[#f0ede8] pb-20 px-4 sm:px-12 overflow-hidden">
        <div className="mx-auto max-w-7xl">

          {/* Cards — flip up with stagger */}
          <div ref={cardsInView.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
            {overviewCards.map((card, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-7 bg-white border border-[#dce4f0] rounded-2xl px-8 py-8 shadow-sm cursor-default relative overflow-hidden"
                style={{
                  transition: `opacity 0.55s ease ${idx * 90}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${idx * 90}ms`,
                  opacity: cardsInView.inView ? 1 : 0,
                  transform: cardsInView.inView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.92)",
                }}
              >
                {/* Shimmer sweep on hover */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(105deg, transparent 35%, rgba(197,150,60,0.08) 50%, transparent 65%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmerCard 1.4s ease infinite",
                  }}
                />
                {/* Gold accent bar on left edge */}
                <span
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "linear-gradient(180deg,#1c2b4a,#1c2b4a)" }}
                />
                {/* Icon box */}
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "#1c2b4a" }}
                >
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] text-[#888] font-semibold tracking-widest uppercase mb-2">{card.label}</p>
                  <p className="text-[20px] font-bold text-[#1c2b4a] leading-snug">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons — slide up together */}
          <div
            ref={btnsInView.ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
            style={{
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              opacity: btnsInView.inView ? 1 : 0,
              transform: btnsInView.inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <button className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl text-white text-[15px] font-semibold hover:opacity-90 active:scale-95 transition-all" style={{ background: "#c0392b" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="white"/>
              </svg>
              Download Brochure
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl text-white text-[15px] font-semibold hover:opacity-90 active:scale-95 transition-all" style={{ background: "#1c2b4a" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <text x="4" y="18" fontSize="16" fill="white" fontWeight="bold" fontFamily="sans-serif">₹</text>
              </svg>
              Get Price Breakup
            </button>

            <a
              href="https://wa.me/919667394175?text=Hi%2C%20I%20am%20interested%20in%20Trump%20Towers%20Noida%20and%20would%20like%20to%20schedule%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl text-white text-[15px] font-semibold hover:opacity-90 active:scale-95 transition-all"
              style={{ background: "#25a244" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
              </svg>
              Schedule Site Visit
            </a>

            <a
              href="tel:+919667394175"
              className="flex items-center justify-center gap-2 px-6 py-5 rounded-xl text-[#333] text-[15px] font-semibold border border-[#ccc] bg-white hover:bg-[#f5f5f5] active:scale-95 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z" fill="#555"/>
              </svg>
              Call Sales Team
            </a>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes shimmerCard {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
}
