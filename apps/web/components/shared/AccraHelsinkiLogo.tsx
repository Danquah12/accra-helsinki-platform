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
  mode = 'image',
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
              {/* Inner circle clip for central artwork (radius 143) */}
              <clipPath id="innerDiscClip">
                <circle cx="200" cy="200" r="143" />
              </clipPath>
              {/* Left flag panel clip (Ghana) */}
              <clipPath id="leftFlagClip">
                <rect x="40" y="40" width="160" height="126" />
              </clipPath>
              {/* Right flag panel clip (Finland) */}
              <clipPath id="rightFlagClip">
                <rect x="200" y="40" width="160" height="126" />
              </clipPath>
            </defs>

            {/* Background disc (warm ivory/parchment) */}
            <circle cx="200" cy="200" r="198" fill="#FAF5EE" />

            {/* Outer Ring (r=178) */}
            <circle cx="200" cy="200" r="178" fill="none" stroke="#152022" strokeWidth="2.5" />

            {/* Inner Ring (r=143) */}
            <circle cx="200" cy="200" r="143" fill="none" stroke="#152022" strokeWidth="2.5" />

            {/* Middle Ring Flanking Arcs (r=160.5) */}
            {/* Left arc from 158 deg to 214 deg */}
            <path d="M 51.18,260.12 A 160.5,160.5 0 0,1 67.43,110.23" fill="none" stroke="#152022" strokeWidth="2.5" strokeLinecap="round" />
            {/* Right arc from 326 deg to 22 deg */}
            <path d="M 333.07,110.23 A 160.5,160.5 0 0,1 348.82,260.12" fill="none" stroke="#152022" strokeWidth="2.5" strokeLinecap="round" />

            {/* Top Arc Characters: ACCRA-HELSINKI GROUP */}
            <g id="topArcText">
            <text key="top-0" x="200" y="39.5" transform="rotate(-49.15, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>A</text>
            <text key="top-1" x="200" y="39.5" transform="rotate(-43.56, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>C</text>
            <text key="top-2" x="200" y="39.5" transform="rotate(-38.08, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>C</text>
            <text key="top-3" x="200" y="39.5" transform="rotate(-32.60, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>R</text>
            <text key="top-4" x="200" y="39.5" transform="rotate(-27.01, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>A</text>
            <text key="top-5" x="200" y="39.5" transform="rotate(-21.97, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>-</text>
            <text key="top-6" x="200" y="39.5" transform="rotate(-16.93, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>H</text>
            <text key="top-7" x="200" y="39.5" transform="rotate(-11.56, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>E</text>
            <text key="top-8" x="200" y="39.5" transform="rotate(-6.63, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>L</text>
            <text key="top-9" x="200" y="39.5" transform="rotate(-1.70, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>S</text>
            <text key="top-10" x="200" y="39.5" transform="rotate(2.47, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>I</text>
            <text key="top-11" x="200" y="39.5" transform="rotate(6.96, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>N</text>
            <text key="top-12" x="200" y="39.5" transform="rotate(12.55, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>K</text>
            <text key="top-13" x="200" y="39.5" transform="rotate(16.93, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>I</text>
            <text key="top-15" x="200" y="39.5" transform="rotate(26.47, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>G</text>
            <text key="top-16" x="200" y="39.5" transform="rotate(32.16, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>R</text>
            <text key="top-17" x="200" y="39.5" transform="rotate(37.86, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>O</text>
            <text key="top-18" x="200" y="39.5" transform="rotate(43.67, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>U</text>
            <text key="top-19" x="200" y="39.5" transform="rotate(49.26, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="16.5" fontWeight="900" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>P</text>
            </g>

            {/* Bottom Arc Characters: INDEPENDENT, INFORMAL, OPEN */}
            <g id="bottomArcText">
            <text key="bot-0" x="200" y="360.5" transform="rotate(61.58, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>I</text>
            <text key="bot-1" x="200" y="360.5" transform="rotate(57.55, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>N</text>
            <text key="bot-2" x="200" y="360.5" transform="rotate(52.34, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>D</text>
            <text key="bot-3" x="200" y="360.5" transform="rotate(47.37, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>E</text>
            <text key="bot-4" x="200" y="360.5" transform="rotate(42.51, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>P</text>
            <text key="bot-5" x="200" y="360.5" transform="rotate(37.66, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>E</text>
            <text key="bot-6" x="200" y="360.5" transform="rotate(32.68, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>N</text>
            <text key="bot-7" x="200" y="360.5" transform="rotate(27.47, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>D</text>
            <text key="bot-8" x="200" y="360.5" transform="rotate(22.50, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>E</text>
            <text key="bot-9" x="200" y="360.5" transform="rotate(17.53, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>N</text>
            <text key="bot-10" x="200" y="360.5" transform="rotate(12.55, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>T</text>
            <text key="bot-11" x="200" y="360.5" transform="rotate(8.88, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>,</text>
            <text key="bot-13" x="200" y="360.5" transform="rotate(2.01, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>I</text>
            <text key="bot-14" x="200" y="360.5" transform="rotate(-2.01, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>N</text>
            <text key="bot-15" x="200" y="360.5" transform="rotate(-6.99, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>F</text>
            <text key="bot-16" x="200" y="360.5" transform="rotate(-12.08, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>O</text>
            <text key="bot-17" x="200" y="360.5" transform="rotate(-17.41, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>R</text>
            <text key="bot-18" x="200" y="360.5" transform="rotate(-23.09, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>M</text>
            <text key="bot-19" x="200" y="360.5" transform="rotate(-28.78, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>A</text>
            <text key="bot-20" x="200" y="360.5" transform="rotate(-33.63, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>L</text>
            <text key="bot-21" x="200" y="360.5" transform="rotate(-37.18, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>,</text>
            <text key="bot-23" x="200" y="360.5" transform="rotate(-45.36, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>O</text>
            <text key="bot-24" x="200" y="360.5" transform="rotate(-50.57, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>P</text>
            <text key="bot-25" x="200" y="360.5" transform="rotate(-55.42, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>E</text>
            <text key="bot-26" x="200" y="360.5" transform="rotate(-60.39, 200, 200)" textAnchor="middle" dominantBaseline="central" fill="#152022" fontSize="12.5" fontWeight="800" style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}>N</text>
            </g>

            {/* Central Artwork (clipped to inner circle r=143) */}
            <g clipPath="url(#innerDiscClip)">
              {/* Base fill for inner circle */}
              <circle cx="200" cy="200" r="143" fill="#FAF5EE" />

              {/* Ghana Gold Panel (top-left) */}
              <rect x="40" y="40" width="160" height="126" fill="#FBCB13" clipPath="url(#leftFlagClip)" />

              {/* Finland White Panel (top-right) */}
              <rect x="200" y="40" width="160" height="126" fill="#FFFFFF" clipPath="url(#rightFlagClip)" />

              {/* Ghana 5-Pointed Black Star (cx=134, cy=112, R=25, r=10.5) */}
              <polygon
                points="134,87 140.2,101.7 157.8,102.5 144.1,113.3 148.8,129.8 134,120.2 119.2,129.8 123.9,113.3 110.2,102.5 127.8,101.7"
                fill="#152022"
              />

              {/* Finland Nordic Cross (cx=266, cy=112) */}
              {/* Horizontal bar (width 58, height 13) */}
              <rect x="237" y="105.5" width="58" height="13" fill="#1A5086" />
              {/* Vertical bar (width 13, height 48, shifted left) */}
              <rect x="254" y="88" width="13" height="48" fill="#1A5086" />

              {/* SUSTAINABLE COOLING Text */}
              <text
                x="200"
                y="190"
                textAnchor="middle"
                fill="#152022"
                fontSize="16.5"
                fontWeight="900"
                letterSpacing="1.2"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                SUSTAINABLE COOLING
              </text>

              {/* Coolant Loops & Airflow Lines (Center crossing at 200, 258) */}
              {/* Outer light blue infinity loop */}
              <path
                d="
                  M 200,258
                  C 224,222 268,220 290,242
                  C 310,262 292,298 262,294
                  C 232,290 216,262 200,258
                  C 184,254 168,290 138,294
                  C 108,298 90,262 110,242
                  C 132,220 176,222 200,258 Z
                "
                fill="none"
                stroke="#84B9D2"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Inner light blue loop with right spiral swirl */}
              <path
                d="
                  M 200,258
                  C 218,234 254,232 272,250
                  C 288,266 276,284 256,280
                  C 238,276 214,258 200,258
                  C 186,258 162,276 144,280
                  C 124,284 112,266 128,250
                  C 146,232 182,234 200,258
                "
                fill="none"
                stroke="#84B9D2"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Right spiral curl (curls inward into nautilus wind spiral) */}
              <path
                d="M 272,250 C 286,238 296,246 294,260 C 292,274 278,278 268,270 C 258,262 260,248 270,244 C 278,240 284,246 280,252"
                fill="none"
                stroke="#84B9D2"
                strokeWidth="3.4"
                strokeLinecap="round"
              />

              {/* 3 Breeze / Airflow curves flowing right from droplet across center */}
              <path d="M 152,248 C 180,242 220,248 268,248" fill="none" stroke="#2E71A1" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 154,256 C 186,252 226,260 274,266" fill="none" stroke="#2E71A1" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M 156,264 C 188,262 226,270 256,280" fill="none" stroke="#2E71A1" strokeWidth="2.2" strokeLinecap="round" />

              {/* Water Droplet on left (cx=146, cy=256) */}
              <path
                d="M 148,232 C 132,252 132,272 148,272 C 164,272 164,252 148,232 Z"
                fill="#62A8D1"
                stroke="#154360"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              {/* Droplet inner highlight curve */}
              <path
                d="M 139,256 A 8,8 0 0,0 146,266"
                fill="none"
                stroke="#B8E0F2"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>
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
