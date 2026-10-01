export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] py-12 px-6">
      {/* 3-column contact row */}
      <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">

        {/* Phone */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-[68px] h-[68px] rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #a8762a 0%, #c9943e 60%, #a8762a 100%)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.56 21 3 13.44 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"
                fill="white"
              />
            </svg>
          </div>
          <a
            href="tel:+910935513367"
            className="text-white text-[15px] font-semibold tracking-wide hover:text-[#C5963C] transition-colors"
          >
            +91 9667394175
          </a>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-[68px] h-[68px] rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #a8762a 0%, #c9943e 60%, #a8762a 100%)" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-white text-[14px] font-medium tracking-wide">Trump Towers Noida</p>
            <p className="text-[#999] text-[13px] tracking-wide">Sector 94 Noida</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-[68px] h-[68px] rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #a8762a 0%, #c9943e 60%, #a8762a 100%)" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                fill="white"
              />
            </svg>
          </div>
          <a
            href="mailto:info@noidatrumptower.com"
            className="text-white text-[15px] font-semibold tracking-wide hover:text-[#C5963C] transition-colors"
          >
            info@noidatrump.com
          </a>
        </div>

      </div>

      {/* Divider */}
      <div className="mx-auto max-w-screen-lg mt-10 mb-6 h-px bg-[#1e1e1a]" />

      {/* Copyright */}
      <p className="text-center text-[#666] text-[13px] tracking-wide">
        © 2026 All Rights Reserved
      </p>
    </footer>
  );
}
