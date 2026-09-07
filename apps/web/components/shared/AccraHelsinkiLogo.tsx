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
            src="/images/accra-helsinki-logo-original.png"
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
              {/* Deepened Rich Gold Yellow hosting the Black Star (per customer instruction) */}
              <linearGradient id="deepGoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E48A04" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              {/* Finnish Nordic Blue */}
              <linearGradient id="finnishBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00458C" />
                <stop offset="100%" stopColor="#003066" />
              </linearGradient>

              {/* Cooling Airflow Blue */}
              <linearGradient id="coolingFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#7DD3FC" />
              </linearGradient>

              {/* Top Text Circular Arc */}
              <path
                id="topArcPath"
                d="M 52,200 A 148,148 0 0,1 348,200"
                fill="none"
              />

              {/* Bottom Text Circular Arc (Dropped down into middle of channel to avoid inner circle line) */}
              <path
                id="bottomArcPath"
                d="M 35,200 A 165,165 0 0,0 365,200"
                fill="none"
              />

              {/* Inner Upper Clip Path for Left Quadrant (Finland) */}
              <clipPath id="leftQuadClip">
                <rect x="60" y="60" width="140" height="116" />
              </clipPath>

              {/* Inner Upper Clip Path for Right Quadrant (Ghana) */}
              <clipPath id="rightQuadClip">
                <rect x="200" y="60" width="140" height="116" />
              </clipPath>
            </defs>

            {/* Background disc */}
            <circle cx="200" cy="200" r="190" fill="#FAF9F6" />

            {/* Concentric Outer Rings */}
            <circle cx="200" cy="200" r="186" fill="none" stroke="#1E293B" strokeWidth="4.5" />
            <circle cx="200" cy="200" r="176" fill="none" stroke="#1E293B" strokeWidth="1.8" />
            <circle cx="200" cy="200" r="138" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />

            {/* Circular Text: ACCRA-HELSINKI GROUP */}
            <text fill="#1E293B" fontSize="23" fontWeight="900" letterSpacing="4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
                ACCRA-HELSINKI GROUP
              </textPath>
            </text>

            {/* Circular Text: INDEPENDENT, INFORMAL, OPEN */}
            <text fill="#1E293B" fontSize="13.5" fontWeight="800" letterSpacing="2.2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
                INDEPENDENT, INFORMAL, OPEN
              </textPath>
            </text>

            {/* ================= UPPER SECTION ================= */}
            {/* Left Quadrant: Finland / Helsinki (Blue Cross on White) */}
            <g clipPath="url(#leftQuadClip)">
              {/* White background */}
              <circle cx="200" cy="200" r="138" fill="#FFFFFF" />
              {/* Finnish Blue Cross */}
              <rect x="122" y="85" width="22" height="68" fill="url(#finnishBlue)" rx="1.5" />
              <rect x="98" y="108" width="70" height="22" fill="url(#finnishBlue)" rx="1.5" />
            </g>

            {/* Right Quadrant: Ghana / Accra (Deepened Yellow hosting Black Star) */}
            <g clipPath="url(#rightQuadClip)">
              {/* Deepened Yellow / Gold Fill */}
              <circle cx="200" cy="200" r="138" fill="url(#deepGoldYellow)" />
              {/* Ghanaian Black Star */}
              <polygon
                points="265,95 272.5,110 289,112 277,123.5 280,140 265,132 250,140 253,123.5 241,112 257.5,110"
                fill="#111827"
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </g>

            {/* Vertical Divider between Finland & Ghana */}
            <line x1="200" y1="62" x2="200" y2="176" stroke="#1E293B" strokeWidth="2.5" />

            {/* ================= CENTER BANNER ================= */}
            {/* Banner Background & Dividers */}
            <rect x="63" y="176" width="274" height="42" fill="#FFFFFF" />
            <line x1="63" y1="176" x2="337" y2="176" stroke="#1E293B" strokeWidth="3" />
            <line x1="63" y1="218" x2="337" y2="218" stroke="#1E293B" strokeWidth="3" />

            {/* Banner Text: SUSTAINABLE COOLING */}
            <text
              x="200"
              y="204"
              textAnchor="middle"
              fill="#1E293B"
              fontSize="20"
              fontWeight="900"
              letterSpacing="2.5"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              SUSTAINABLE COOLING
            </text>

            {/* ================= LOWER SECTION ================= */}
            {/* Infinity Symbol & Cooling Airflow with Droplet */}
            <g transform="translate(0, 5)">
              {/* Infinity Airflow Loops */}
              <path
                d="M 160,270 C 130,240 100,270 130,300 C 160,330 240,240 270,270 C 300,300 270,330 240,300 C 210,270 180,270 160,270"
                fill="none"
                stroke="#BAE6FD"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 162,268 C 135,242 105,270 132,298 C 160,326 238,242 268,268 C 296,296 268,326 238,298 C 212,270 185,270 162,268"
                fill="none"
                stroke="#0284C7"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 155,275 C 138,255 115,272 135,292 C 160,315 235,248 260,272 C 285,295 260,318 238,295"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 175,272 C 190,272 210,285 225,285"
                fill="none"
                stroke="#0284C7"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Water Droplet on Left Loop */}
              <path
                d="M 166,252 C 158,264 148,276 148,285 C 148,295 156,303 166,303 C 176,303 184,295 184,285 C 184,276 174,264 166,252 Z"
                fill="#0284C7"
                stroke="#1E293B"
                strokeWidth="2.5"
              />
              {/* Droplet Highlight */}
              <ellipse cx="162" cy="284" rx="3.5" ry="7" fill="#BAE6FD" opacity="0.8" transform="rotate(-20 162 284)" />
            </g>
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
