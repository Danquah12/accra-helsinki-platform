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

  // Tick marks between outer rings
  const ticks: React.ReactElement[] = [];
  for (let i = 0; i <= 28; i++) {
    const angleDeg = -160 + (i * (320 / 28));
    const angleRad = (angleDeg * Math.PI) / 180;
    const r1 = 182;
    const r2 = 190;
    const x1 = 200 + r1 * Math.cos(angleRad);
    const y1 = 200 + r1 * Math.sin(angleRad);
    const x2 = 200 + r2 * Math.cos(angleRad);
    const y2 = 200 + r2 * Math.sin(angleRad);
    ticks.push(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a1a" strokeWidth="2" />
    );
  }

  // Ghana star points
  const starPoints = (() => {
    const cx = 115, cy = 140, R = 52, r = 22;
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
              <path id="topArcPath" d="M 35,200 A 165,165 0 0,1 365,200" fill="none" />
              <path id="bottomArcPath" d="M 38,212 A 163,163 0 0,0 362,212" fill="none" />
              <clipPath id="innerDiscClip">
                <circle cx="200" cy="200" r="170" />
              </clipPath>
              <clipPath id="leftFlagClip">
                <rect x="30" y="30" width="170" height="198" />
              </clipPath>
              <clipPath id="rightFlagClip">
                <rect x="200" y="30" width="170" height="198" />
              </clipPath>
            </defs>

            {/* Background */}
            <circle cx="200" cy="200" r="196" fill="#FAF8F3" />

            {/* Outer ring */}
            <circle cx="200" cy="200" r="194" fill="none" stroke="#1a1a1a" strokeWidth="3" />

            {/* Tick marks */}
            {ticks}

            {/* Inner ring */}
            <circle cx="200" cy="200" r="174" fill="none" stroke="#1a1a1a" strokeWidth="3" />

            {/* Top arc text */}
            <text fill="#1a1a1a" fontSize="22" fontWeight="900" letterSpacing="3"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif' }}>
              <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
                ACCRA-HELSINKI GROUP
              </textPath>
            </text>

            {/* Bottom arc text */}
            <text fill="#1a1a1a" fontSize="15" fontWeight="800" letterSpacing="1.5"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif' }}>
              <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
                INDEPENDENT, INFORMAL, OPEN
              </textPath>
            </text>

            {/* White inner disc */}
            <circle cx="200" cy="200" r="170" fill="#FFFFFF" />

            {/* Ghana gold left panel */}
            <circle cx="200" cy="200" r="170" fill="#F5C518" clipPath="url(#leftFlagClip)" />

            {/* Finland white right panel */}
            <circle cx="200" cy="200" r="170" fill="#FFFFFF" clipPath="url(#rightFlagClip)" />

            {/* Horizontal divider (bottom of flag panels) */}
            <line x1="30" y1="228" x2="370" y2="228" stroke="#1a1a1a" strokeWidth="3" clipPath="url(#innerDiscClip)" />

            {/* Vertical divider */}
            <line x1="200" y1="30" x2="200" y2="228" stroke="#1a1a1a" strokeWidth="3" clipPath="url(#innerDiscClip)" />

            {/* Ghana black star */}
            <polygon points={starPoints} fill="#1a1a1a" clipPath="url(#innerDiscClip)" />

            {/* Finland blue cross */}
            <rect x="230" y="118" width="110" height="18" fill="#3B6BB5" clipPath="url(#rightFlagClip)" />
            <rect x="276" y="80" width="18" height="100" fill="#3B6BB5" clipPath="url(#rightFlagClip)" />

            {/* SUSTAINABLE COOLING text */}
            <text x="200" y="262" textAnchor="middle" fill="#1a1a1a" fontSize="23"
              fontWeight="900" letterSpacing="1.5"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif' }}
              clipPath="url(#innerDiscClip)">
              SUSTAINABLE COOLING
            </text>

            {/* Lemniscate main body */}
            <path
              d="M 200,310 C 222,282 264,280 278,300 C 292,320 276,344 256,338 C 236,332 218,310 200,310 C 182,310 164,332 144,338 C 124,344 108,320 122,300 C 136,280 178,282 200,310 Z"
              fill="none" stroke="#5BB8E8" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              clipPath="url(#innerDiscClip)"
            />

            {/* Right scroll curl */}
            <path
              d="M 278,300 C 294,288 310,293 310,306 C 310,319 298,325 288,320 C 278,315 276,305 282,300"
              fill="none" stroke="#5BB8E8" strokeWidth="2.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)"
            />

            {/* Left scroll curl */}
            <path
              d="M 122,300 C 106,288 90,293 90,306 C 90,319 102,325 112,320 C 122,315 124,305 118,300"
              fill="none" stroke="#5BB8E8" strokeWidth="2.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)"
            />

            {/* Center crossing detail lines */}
            <path d="M 186,310 C 193,303 207,303 214,310"
              fill="none" stroke="#5BB8E8" strokeWidth="1.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)" />
            <path d="M 184,317 C 192,310 208,310 216,317"
              fill="none" stroke="#5BB8E8" strokeWidth="1.5"
              strokeLinecap="round" clipPath="url(#innerDiscClip)" />

            {/* Water droplet */}
            <path
              d="M 155,288 C 147,300 136,312 136,322 C 136,336 144,346 155,346 C 166,346 174,336 174,322 C 174,312 163,300 155,288 Z"
              fill="#5BB8E8" stroke="#3A8FC8" strokeWidth="2"
              strokeLinejoin="round" clipPath="url(#innerDiscClip)"
            />
            <ellipse cx="150" cy="320" rx="3.5" ry="8" fill="#BAE6FD" opacity="0.9"
              transform="rotate(-20 150 320)" clipPath="url(#innerDiscClip)" />
            <ellipse cx="162" cy="296" rx="2" ry="3" fill="#BAE6FD" opacity="0.75"
              transform="rotate(-15 162 296)" clipPath="url(#innerDiscClip)" />

            {/* Inner disc border (over everything) */}
            <circle cx="200" cy="200" r="170" fill="none" stroke="#1a1a1a" strokeWidth="3" />
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
