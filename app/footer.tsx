export default function Footer() {
  return (
    <footer
      className="w-full py-12 px-6"
      style={{ background: "linear-gradient(135deg, #0f1c35 0%, #1c2b4a 100%)" }}
    >
      {/* 3-column contact cards */}
      <div className="mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

        {/* Phone */}
        <a
          href="tel:+919667394175"
          className="group flex items-center gap-4 rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(201,168,76,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #c9952a 0%, #e8c060 100%)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"
                fill="#1a1200"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-0.5" style={{ color: "#c9a84c" }}>
              Call Us
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide">
              +91 9667394175
            </p>
          </div>
        </a>

        {/* Address */}
        <div
          className="flex items-center gap-4 rounded-2xl px-6 py-5"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(201,168,76,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #c9952a 0%, #e8c060 100%)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                fill="#1a1200"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-0.5" style={{ color: "#c9a84c" }}>
              Location
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide">Trump Towers Noida</p>
            <p className="text-[13px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>Sector 94, Noida</p>
          </div>
        </div>

        {/* Email */}
        <a
          href="mailto:info@noidatrumptower.com"
          className="group flex items-center gap-4 rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(201,168,76,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #c9952a 0%, #e8c060 100%)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                fill="#1a1200"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-0.5" style={{ color: "#c9a84c" }}>
              Email Us
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide">
              info@noidatrump.com
            </p>
          </div>
        </a>

      </div>

      {/* Divider */}
      <div
        className="mx-auto max-w-screen-lg mb-6 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
      />

      {/* Copyright */}
      <p className="text-center text-[13px] tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>
        © 2026 All Rights Reserved · Trump Towers Noida
      </p>
    </footer>
  );
}
