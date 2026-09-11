'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  variant?: 'light' | 'dark';
  mode?: 'svg' | 'image'; // svg features deepened gold; image uses official PNG
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
              {/* Ghana Gold Yellow */}
              <linearGradient id="ghanaGoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9C015" />
                <stop offset="100%" stopColor="#F5BA13" />
              </linearGradient>

              {/* Finnish Nordic Blue */}
              <linearGradient id="finnishNordicBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#124E8F" />
                <stop offset="100%" stopColor="#0D3E74" />
              </linearGradient>

              {/* Top Text Circular Arc (Concentric at radius 157.5) */}
              <path
                id="topArcPath"
                d="M 48,200 A 157,157 0 0,1 352,200"
                fill="none"
              />

              {/* Bottom Text Circular Arc (Concentric at radius 158.5) */}
              <path
                id="bottomArcPath"
                d="M 43,200 A 158.5,158.5 0 0,0 357,200"
                fill="none"
              />

              {/* Inner Circle Clip Path for Core Artwork (Radius 138) */}
              <clipPath id="innerCircleClip">
                <circle cx="200" cy="200" r="137" />
              </clipPath>

              {/* Clip Path for Upper Left Quadrant (Accra / Ghana) */}
              <clipPath id="leftUpperQuadClip">
                <rect x="50" y="50" width="150" height="126" />
              </clipPath>

              {/* Clip Path for Upper Right Quadrant (Helsinki / Finland) */}
              <clipPath id="rightUpperQuadClip">
                <rect x="200" y="50" width="150" height="126" />
              </clipPath>
            </defs>

            {/* Background disc (Parchment Ivory) */}
            <circle cx="200" cy="200" r="192" fill="#FAF8F5" />

            {/* Concentric Double Outer Rings */}
            <circle cx="200" cy="200" r="188" fill="none" stroke="#111827" strokeWidth="3.6" />
            <circle cx="200" cy="200" r="177" fill="none" stroke="#111827" strokeWidth="1.6" />

            {/* Circular Text: ACCRA-HELSINKI GROUP */}
            <text fill="#111827" fontSize="20.5" fontWeight="900" letterSpacing="3.4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
                ACCRA-HELSINKI GROUP
              </textPath>
            </text>

            {/* Circular Text: INDEPENDENT, INFORMAL, OPEN */}
            <text fill="#111827" fontSize="13" fontWeight="800" letterSpacing="2.2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
                INDEPENDENT, INFORMAL, OPEN
              </textPath>
            </text>

            {/* ================= INNER CORE ARTWORK ================= */}
            <g clipPath="url(#innerCircleClip)">
              {/* White Base Fill for Central Disc */}
              <circle cx="200" cy="200" r="138" fill="#FFFFFF" />

              {/* ----- UPPER LEFT: ACCRA / GHANA (GOLD YELLOW WITH BLACK STAR) ----- */}
              <g clipPath="url(#leftUpperQuadClip)">
                <circle cx="200" cy="200" r="138" fill="url(#ghanaGoldYellow)" />
                {/* Ghanaian 5-Pointed Black Star (Precisely Sized & Centered) */}
                <polygon
                  points="144,101 149.9,116.9 166.8,117.6 153.5,128.1 158.1,144.4 144,135 129.9,144.4 134.5,128.1 121.2,117.6 138.1,116.9"
                  fill="#111827"
                  stroke="#111827"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </g>

              {/* ----- UPPER RIGHT: HELSINKI / FINLAND (WHITE WITH NORDIC CROSS) ----- */}
              <g clipPath="url(#rightUpperQuadClip)">
                <circle cx="200" cy="200" r="138" fill="#FFFFFF" />
                {/* Official Finnish Flag Proportions: Vertical bar offset left so right arm is longer */}
                {/* Horizontal bar (Width 52px, Height 14px) */}
                <rect x="232" y="118" width="52" height="14" fill="url(#finnishNordicBlue)" rx="0.5" />
                {/* Vertical bar (Width 14px, Height 44px, offset to x=244..258) */}
                <rect x="244" y="103" width="14" height="44" fill="url(#finnishNordicBlue)" rx="0.5" />
              </g>

              {/* Vertical Divider Between Ghana & Finland */}
              <line x1="200" y1="62" x2="200" y2="175" stroke="#111827" strokeWidth="3" />

              {/* ----- CENTER BANNER: SUSTAINABLE COOLING ----- */}
              {/* Warm Ivory/Cream Banner Fill */}
              <rect x="60" y="175" width="280" height="42" fill="#FAF5EE" />
              <line x1="60" y1="175" x2="340" y2="175" stroke="#111827" strokeWidth="3" />
              <line x1="60" y1="217" x2="340" y2="217" stroke="#111827" strokeWidth="3" />

              {/* Banner Text with Generous Padding on Both Sides (No clipping of S or G) */}
              <text
                x="200"
                y="203.5"
                textAnchor="middle"
                fill="#111827"
                fontSize="17.5"
                fontWeight="900"
                letterSpacing="1.8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                SUSTAINABLE COOLING
              </text>

              {/* ----- LOWER HEMISPHERE: COOLANT CIRCULATION & DROPLET ----- */}
              {/* Scaled down & centered with >35px clearance to inner ring */}
              <g transform="translate(0, 0)">
                {/* Infinity Flow Loops (Light Blue & Airflow) */}
                <path
                  d="M 172,274 C 150,250 126,270 148,292 C 170,314 230,248 252,270 C 274,292 250,314 228,292 C 206,270 186,270 172,274"
                  fill="none"
                  stroke="#BAE6FD"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 173,273 C 153,252 130,270 149,291 C 169,312 229,249 251,269 C 271,290 249,312 227,291 C 208,270 188,270 173,273"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 166,276 C 154,260 136,273 150,287 C 169,305 225,255 244,273 C 263,291 244,307 227,290"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Airflow Breeze Curves in Center */}
                <path
                  d="M 175,273 C 190,270 210,279 230,276 C 242,274 249,268 252,266"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 176,278 C 192,275 212,285 232,282"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Water Droplet on Left Loop */}
                <path
                  d="M 162,256 C 155,267 146,277 146,285 C 146,294 153,301 162,301 C 171,301 178,294 178,285 C 178,277 169,267 162,256 Z"
                  fill="#0284C7"
                  stroke="#111827"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                {/* Droplet Light Reflection Highlight */}
                <ellipse cx="158.5" cy="285" rx="2.8" ry="6" fill="#BAE6FD" opacity="0.85" transform="rotate(-20 158.5 285)" />
              </g>
            </g>

            {/* Inner Ring Border Line enclosing Emblem */}
            <circle cx="200" cy="200" r="138" fill="none" stroke="#111827" strokeWidth="3.2" />
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
