'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  variant?: 'light' | 'dark';
  mode?: 'svg' | 'image';
}

export function AccraHelsinkiLogo({
  className = '',
  size = 'md',
  showText = true,
  textClassName,
  subtextClassName,
  variant = 'light',
  mode = 'svg',
}: LogoProps) {
  const pixelSizes = {
    sm: 44,
    md: 56,
    lg: 84,
    xl: 120,
    '2xl': 180,
  };

  const textSizes = {
    sm: { text: 'text-sm font-black', subtext: 'text-[9px] tracking-widest' },
    md: { text: 'text-base font-black', subtext: 'text-[10px] tracking-widest' },
    lg: { text: 'text-xl font-black', subtext: 'text-xs tracking-widest' },
    xl: { text: 'text-2xl font-black', subtext: 'text-sm tracking-widest' },
    '2xl': { text: 'text-3xl font-black', subtext: 'text-base tracking-widest' },
  };

  const px = pixelSizes[size] || 56;
  const fontConf = textSizes[size] || textSizes.md;

  const textColor = textClassName || (variant === 'dark' ? 'text-white' : 'text-slate-900');
  const subtextColor = subtextClassName || (variant === 'dark' ? 'text-amber-400' : 'text-amber-700 font-bold');

  // Tick marks between the two outer rings — full 360 degrees
  const ticks: React.ReactElement[] = [];
  for (let i = 0; i < 60; i++) {
    const angleDeg = i * 6;
    const angleRad = (angleDeg * Math.PI) / 180;
    const r1 = 177;
    const r2 = 190;
    const x1 = 200 + r1 * Math.cos(angleRad);
    const y1 = 200 + r1 * Math.sin(angleRad);
    const x2 = 200 + r2 * Math.cos(angleRad);
    const y2 = 200 + r2 * Math.sin(angleRad);
    ticks.push(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="2" />
    );
  }

  // Ghana star points — 5-pointed star, centered at (115, 138)
  const starPoints = (() => {
    const cx = 115, cy = 138, R = 50, r = 20;
    const pts: string[] = [];
    for (let i = 0; i < 5; i++) {
      const outerAngle = (i * 72 - 90) * Math.PI / 180;
      const innerAngle = (i * 72 - 90 + 36) * Math.PI / 180;
      pts.push(`${(cx + R * Math.cos(outerAngle)).toFixed(2)},${(cy + R * Math.sin(outerAngle)).toFixed(2)}`);
      pts.push(`${(cx + r * Math.cos(innerAngle)).toFixed(2)},${(cy + r * Math.sin(innerAngle)).toFixed(2)}`);
    }
    return pts.join(' ');
  })();

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <div
        className="relative shrink-0 flex items-center justify-center select-none drop-shadow-sm transition-transform hover:scale-105 duration-300"
        style={{ width: px, height: px }}
      >
        {mode === 'image' ? (
          <img
            src="/images/accra-helsinki-logo.png"
            alt="Accra-Helsinki Group for Sustainable Cooling Logo"
            className="w-full h-full object-contain rounded-full shadow-sm"
          />
        ) : (
          <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/*
                Arc text paths sit in the ring band between r=174 (inner ring) and r=194 (outer ring).
                Baseline at r=184 → top of 16px font at r=168 (just inside inner ring edge).
                For top arc: sweep clockwise (large-arc=1, sweep=1).
                Start/end on the horizontal midline so text centres at the top.
              */}
              <path
                id="topArcPath"
                d="M 16,200 A 184,184 0 0,1 384,200"
                fill="none"
              />
              {/*
                Bottom arc: sweep counter-clockwise (sweep=0) so text reads right-side up on bottom.
                Baseline at r=184.
              */}
              <path
                id="bottomArcPath"
                d="M 16,200 A 184,184 0 0,0 384,200"
                fill="none"
              />

              {/* Inner disc clip (r=170) — used for inner artwork only */}
              <clipPath id="innerDiscClip">
                <circle cx="200" cy="200" r="170" />
              </clipPath>

              {/* Left flag panel clip */}
              <clipPath id="leftFlagClip">
                <rect x="30" y="30" width="170" height="200" />
              </clipPath>

              {/* Right flag panel clip */}
              <clipPath id="rightFlagClip">
                <rect x="200" y="30" width="170" height="200" />
              </clipPath>
            </defs>

            {/* ── 1. BACKGROUND DISC ── */}
            <circle cx="200" cy="200" r="196" fill="#FAF8F3" />

            {/* ── 2. OUTER RING ── */}
            <circle cx="200" cy="200" r="194" fill="none" stroke="#1a1a1a" strokeWidth="3" />

            {/* ── 3. TICK MARKS (full circle, between r=177 and r=190) ── */}
            {ticks}

            {/* ── 4. INNER RING ── */}
            <circle cx="200" cy="200" r="174" fill="none" stroke="#1a1a1a" strokeWidth="3" />

            {/* ── 5. WHITE INNER DISC ── */}
            <circle cx="200" cy="200" r="170" fill="#FFFFFF" />

            {/* ── 6. GHANA GOLD LEFT PANEL ── */}
            <circle cx="200" cy="200" r="170" fill="#F5C518" clipPath="url(#leftFlagClip)" />

            {/* ── 7. FINLAND WHITE RIGHT PANEL ── */}
            <circle cx="200" cy="200" r="170" fill="#FFFFFF" clipPath="url(#rightFlagClip)" />

            {/* ── 8. PANEL DIVIDERS ── */}
            {/* Horizontal line at bottom of flag area */}
            <line x1="30" y1="228" x2="370" y2="228" stroke="#1a1a1a" strokeWidth="3" clipPath="url(#innerDiscClip)" />
            {/* Vertical centre divider */}
            <line x1="200" y1="30" x2="200" y2="228" stroke="#1a1a1a" strokeWidth="3" clipPath="url(#innerDiscClip)" />

            {/* ── 9. GHANA BLACK STAR ── */}
            <polygon points={starPoints} fill="#1a1a1a" clipPath="url(#innerDiscClip)" />

            {/* ── 10. FINLAND BLUE CROSS ── */}
            {/* Horizontal bar */}
            <rect x="228" y="118" width="114" height="18" fill="#3B6BB5" clipPath="url(#rightFlagClip)" />
            {/* Vertical bar */}
            <rect x="276" y="78" width="18" height="102" fill="#3B6BB5" clipPath="url(#rightFlagClip)" />

            {/* ── 11. SUSTAINABLE COOLING TEXT ── */}
            <text
              x="200"
              y="262"
              textAnchor="middle"
              fill="#1a1a1a"
              fontSize="22"
              fontWeight="900"
              letterSpacing="1.2"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif' }}
              clipPath="url(#innerDiscClip)"
            >
              SUSTAINABLE COOLING
            </text>

            {/* ── 12. LEMNISCATE LOOP ── */}
            <path
              d="M 200,308 C 222,280 264,278 278,298 C 292,318 276,344 256,338 C 236,332 218,308 200,308 C 182,308 164,332 144,338 C 124,344 108,318 122,298 C 136,278 178,280 200,308 Z"
              fill="none" stroke="#5BB8E8" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              clipPath="url(#innerDiscClip)"
            />
            {/* Right scroll curl */}
            <path
              d="M 278,298 C 294,286 312,292 312,306 C 312,320 298,326 288,320 C 278,314 276,304 282,298"
              fill="none" stroke="#5BB8E8" strokeWidth="2.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)"
            />
            {/* Left scroll curl */}
            <path
              d="M 122,298 C 106,286 88,292 88,306 C 88,320 102,326 112,320 C 122,314 124,304 118,298"
              fill="none" stroke="#5BB8E8" strokeWidth="2.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)"
            />
            {/* Centre crossing detail lines */}
            <path d="M 186,308 C 193,301 207,301 214,308"
              fill="none" stroke="#5BB8E8" strokeWidth="1.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)" />
            <path d="M 184,316 C 192,309 208,309 216,316"
              fill="none" stroke="#5BB8E8" strokeWidth="1.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)" />

            {/* ── 13. WATER DROPLET ── */}
            <path
              d="M 152,284 C 144,296 133,308 133,318 C 133,332 141,342 152,342 C 163,342 171,332 171,318 C 171,308 160,296 152,284 Z"
              fill="#5BB8E8" stroke="#3A8FC8" strokeWidth="2"
              strokeLinejoin="round" clipPath="url(#innerDiscClip)"
            />
            <ellipse cx="147" cy="316" rx="3.5" ry="8" fill="#BAE6FD" opacity="0.9"
              transform="rotate(-20 147 316)" clipPath="url(#innerDiscClip)" />
            <ellipse cx="159" cy="291" rx="2" ry="3" fill="#BAE6FD" opacity="0.75"
              transform="rotate(-15 159 291)" clipPath="url(#innerDiscClip)" />

            {/* ── 14. INNER DISC BORDER (drawn over inner content) ── */}
            <circle cx="200" cy="200" r="170" fill="none" stroke="#1a1a1a" strokeWidth="3" />

            {/*
              ── 15. ARC TEXT — drawn LAST so it renders ON TOP of everything ──
              Paths at r=184, sitting in the ring band between inner (r=174) and outer (r=194) rings.
            */}
            <text
              fill="#1a1a1a"
              fontSize="17"
              fontWeight="900"
              letterSpacing="2.5"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif' }}
            >
              <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
                ACCRA-HELSINKI GROUP
              </textPath>
            </text>

            <text
              fill="#1a1a1a"
              fontSize="13"
              fontWeight="800"
              letterSpacing="1.2"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif' }}
            >
              <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
                INDEPENDENT, INFORMAL, OPEN
              </textPath>
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`tracking-tight leading-tight uppercase ${textColor} ${fontConf.text}`}>
            Accra-Helsinki Group
          </span>
          <span className={`uppercase text-amber-600 font-bold ${subtextColor} ${fontConf.subtext}`}>
            for Sustainable Cooling
          </span>
        </div>
      )}
    </div>
  );
}

export default AccraHelsinkiLogo;
