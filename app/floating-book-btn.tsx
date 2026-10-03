"use client";

import { useState, useEffect } from "react";
import { Raleway, Cinzel } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cinzel  = Cinzel({ subsets: ["latin"], weight: ["600", "700"] });

// ── Dark Luxury "Book A Site Visit" Modal ── (exported for use in other components)
export function SiteVisitModal({ onClose }: { onClose: () => void }) {
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [terms,   setTerms]   = useState(true);
  const [sent,    setSent]    = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Escape key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(onClose, 2000);
  }

  // colours
  const bg       = "#1c2b4a";
  const cardBg   = "#1c2b4a";
  const border   = "rgba(201,168,76,0.45)";
  const gold     = "#c9a84c";
  const inputBg  = "#16223a";
  const inputBdr = "rgba(201,168,76,0.3)";
  const muted    = "rgba(255,255,255,1.0)";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] rounded-2xl px-7 py-8 shadow-2xl"
        style={{
          background: cardBg,
          border: `1.5px solid ${border}`,
          animation: "siteVisitPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
          style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {sent ? (
          <div className="text-center py-10">
            <div className="text-[48px] mb-4">✅</div>
            <p className="text-white text-[17px] font-semibold">Thank you!</p>
            <p className="text-[14px] mt-1" style={{ color: muted }}>Our expert will reach out shortly.</p>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h2
              className={`${cinzel.className} text-[26px] font-bold mb-2 leading-tight`}
              style={{ color: gold }}
            >
              Book A Site Visit
            </h2>
            <p className={`${raleway.className} text-[13px] mb-6`} style={{ color: muted }}>
              Fill in your details and our expert will reach out to you shortly
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Name */}
              <input
                type="text" required value={name} onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                className={`${raleway.className} w-full px-4 py-3 rounded-xl text-[14px] outline-none placeholder-[rgba(255,255,255,0.4)]`}
                style={{ background: inputBg, border: `1px solid ${inputBdr}`, color: "#ffffff" }}
              />

              {/* Phone with +91 prefix */}
              <div
                className="flex rounded-xl overflow-hidden"
                style={{ border: `1px solid ${inputBdr}` }}
              >
                <div
                  className={`${raleway.className} flex items-center justify-center px-4 text-[14px] font-semibold shrink-0`}
                  style={{ background: inputBg, color: gold, borderRight: `1px solid ${inputBdr}` }}
                >
                  +91
                </div>
                <input
                  type="tel" required value={phone} onChange={e => setPhone(e.target.value)}
                  placeholder="Mobile No*"
                  className={`${raleway.className} flex-1 px-4 py-3 text-[14px] outline-none placeholder-[rgba(255,255,255,0.4)]`}
                  style={{ background: inputBg, color: "#ffffff" }}
                />
              </div>

              {/* Email */}
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Email ID"
                className={`${raleway.className} w-full px-4 py-3 rounded-xl text-[14px] outline-none placeholder-[rgba(255,255,255,0.4)]`}
                style={{ background: inputBg, border: `1px solid ${inputBdr}`, color: "#ffffff" }}
              />

              {/* Message */}
              <textarea
                value={message} onChange={e => setMessage(e.target.value)}
                placeholder="Message"
                rows={3}
                className={`${raleway.className} w-full px-4 py-3 rounded-xl text-[14px] outline-none placeholder-[rgba(255,255,255,0.4)] resize-none`}
                style={{ background: inputBg, border: `1px solid ${inputBdr}`, color: "#ffffff" }}
              />

              {/* Terms */}
              <label className={`${raleway.className} flex items-center gap-2.5 cursor-pointer select-none`}>
                <div className="relative w-5 h-5 shrink-0">
                  <input
                    type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center"
                    style={{
                      background: terms ? gold : "transparent",
                      border: `1.5px solid ${gold}`,
                      transition: "background 0.2s",
                    }}
                  >
                    {terms && (
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
                        <path d="M1 4l3 3 6-6" stroke="#1a1200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[13px] text-white">
                  Terms and conditions
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={!terms}
                className={`${raleway.className} w-full py-3.5 rounded-xl text-[15px] font-bold tracking-wide mt-1 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50`}
                style={{ background: `linear-gradient(135deg, #b8922a 0%, #d4a843 50%, #b8922a 100%)`, color: "#1a1200" }}
              >
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes siteVisitPop {
          from { opacity: 0; transform: scale(0.93) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>
  );
}

// ── Floating Button ──
export default function FloatingBookBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed bottom-right horizontal button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className={`${raleway.className} flex items-center gap-3 px-8 py-4 font-bold text-[16px] text-[#1a1200] shadow-2xl hover:brightness-110 active:scale-95 transition-all whitespace-nowrap`}
          style={{
            background: "linear-gradient(135deg, #c9952a 0%, #e8c060 50%, #c9952a 100%)",
            borderRadius: "14px",
            letterSpacing: "0.03em",
            boxShadow: "0 4px 24px rgba(201,168,76,0.4)",
          }}
          aria-label="Book a Site Visit"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"
              fill="#1a1200"
            />
          </svg>
          Book a Site Visit
        </button>
      </div>

      {open && <SiteVisitModal onClose={() => setOpen(false)} />}
    </>
  );
}
