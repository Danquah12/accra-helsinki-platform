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

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Official Emblem */}
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
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Top arc text path — radius 158 from center (200,200) */}
              <path
                id="topArcPath"
                d="M 42,200 A 158,158 0 0,1 358,200"
                fill="none"
              />

              {/* Bottom arc text path */}
              <path
                id="bottomArcPath"
                d="M 46,210 A 155,155 0 0,0 354,210"
                fill="none"
              />

              {/* Clip for inner disc */}
              <clipPath id="innerDiscClip">
                <circle cx="200" cy="200" r="138" />
              </clipPath>
            </defs>

            {/* ── OUTER RINGS ── */}
            <circle cx="200" cy="200" r="196" fill="#FAF8F3" />
            <circle cx="200" cy="200" r="190" fill="none" stroke="#111111" strokeWidth="4.5" />
            <circle cx="200" cy="200" r="178" fill="none" stroke="#111111" strokeWidth="2" />

            {/* ── TOP ARC TEXT: ACCRA-HELSINKI GROUP ── */}
            <text
              fill="#111111"
              fontSize="21"
              fontWeight="900"
              letterSpacing="3.5"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
                ACCRA-HELSINKI GROUP
              </textPath>
            </text>

            {/* ── BOTTOM ARC TEXT: INDEPENDENT, INFORMAL, OPEN ── */}
            <text
              fill="#111111"
              fontSize="14"
              fontWeight="800"
              letterSpacing="2"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
                INDEPENDENT, INFORMAL, OPEN
              </textPath>
            </text>

            {/* ── INNER DISC WHITE BASE ── */}
            <circle cx="200" cy="200" r="138" fill="#FFFFFF" />

            {/* ── FLAG PANELS (rectangular, clipped to inner disc) ── */}
            {/* LEFT: Ghana — Gold Yellow */}
            <rect x="62" y="63" width="138" height="116" fill="#F5C518" clipPath="url(#innerDiscClip)" />
            {/* RIGHT: Finland — White */}
            <rect x="200" y="63" width="138" height="116" fill="#FFFFFF" clipPath="url(#innerDiscClip)" />

            {/* Panel dividers */}
            <line x1="62" y1="179" x2="338" y2="179" stroke="#111111" strokeWidth="2.5" clipPath="url(#innerDiscClip)" />
            <line x1="200" y1="63" x2="200" y2="179" stroke="#111111" strokeWidth="2.5" />

            {/* ── GHANA BLACK STAR (5-pointed, centered in left panel: cx≈131, cy≈121) ── */}
            <polygon
              points="131,92 138.5,114 162,114 143.5,127.5 150.5,150 131,136.5 111.5,150 118.5,127.5 100,114 123.5,114"
              fill="#111111"
            />

            {/* ── FINLAND NORDIC CROSS (bold + centered in right panel: cx≈269, cy≈121) ── */}
            {/* Horizontal bar */}
            <rect x="220" y="114" width="90" height="14" fill="#2255A0" clipPath="url(#innerDiscClip)" />
            {/* Vertical bar */}
            <rect x="255" y="87" width="14" height="66" fill="#2255A0" clipPath="url(#innerDiscClip)" />

            {/* ── CENTER BANNER: SUSTAINABLE COOLING ── */}
            <rect x="62" y="179" width="276" height="44" fill="#FFFDF5" clipPath="url(#innerDiscClip)" />
            <line x1="62" y1="223" x2="338" y2="223" stroke="#111111" strokeWidth="2.5" clipPath="url(#innerDiscClip)" />
            <text
              x="200"
              y="208"
              textAnchor="middle"
              fill="#111111"
              fontSize="19"
              fontWeight="900"
              letterSpacing="2"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              SUSTAINABLE COOLING
            </text>

            {/* ── COOLANT LOOP (lemniscate / infinity shape) ── */}
            {/* Light blue fill */}
            <path
              d="M 200,268 C 215,245 252,240 268,258 C 284,276 268,308 248,302 C 228,296 212,272 200,268 C 188,264 172,276 160,286 C 148,296 145,308 152,316 C 159,324 176,322 183,308 C 190,294 192,276 200,268 Z"
              fill="#BAE6FD"
              opacity="0.6"
              clipPath="url(#innerDiscClip)"
            />
            {/* Outer glow stroke */}
            <path
              d="M 200,270 C 218,247 256,242 271,260 C 286,278 268,310 247,304 C 226,298 210,272 200,270 C 190,268 174,276 162,284 C 143,296 144,316 155,322 C 166,328 181,322 186,308 C 191,294 193,274 200,270 Z"
              fill="none"
              stroke="#7DD3F8"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              clipPath="url(#innerDiscClip)"
            />
            {/* Crisp inner stroke */}
            <path
              d="M 200,270 C 218,247 256,242 271,260 C 286,278 268,310 247,304 C 226,298 210,272 200,270 C 190,268 174,276 162,284 C 143,296 144,316 155,322 C 166,328 181,322 186,308 C 191,294 193,274 200,270 Z"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              clipPath="url(#innerDiscClip)"
            />
            {/* Left scroll curl */}
            <path
              d="M 155,322 C 148,332 138,333 135,325 C 132,317 140,308 148,312"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="3"
              strokeLinecap="round"
              clipPath="url(#innerDiscClip)"
            />
            {/* Right scroll curl */}
            <path
              d="M 247,304 C 258,298 268,302 268,311 C 268,320 258,325 252,320"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="3"
              strokeLinecap="round"
              clipPath="url(#innerDiscClip)"
            />

            {/* ── WATER DROPLET on left loop ── */}
            <path
              d="M 155,258 C 148,268 140,278 140,287 C 140,298 147,306 155,306 C 163,306 170,298 170,287 C 170,278 162,268 155,258 Z"
              fill="#0284C7"
              stroke="#111111"
              strokeWidth="2"
              strokeLinejoin="round"
              clipPath="url(#innerDiscClip)"
            />
            {/* Droplet highlight */}
            <ellipse
              cx="151"
              cy="287"
              rx="3"
              ry="7"
              fill="#BAE6FD"
              opacity="0.85"
              transform="rotate(-20 151 287)"
              clipPath="url(#innerDiscClip)"
            />

            {/* ── INNER RING BORDER ── */}
            <circle cx="200" cy="200" r="138" fill="none" stroke="#111111" strokeWidth="3.5" />
          </svg>
        )}
      </div>

      {/* Accompanying Typography */}
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
