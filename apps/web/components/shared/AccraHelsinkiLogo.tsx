'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  variant?: 'light' | 'dark';
}

export function AccraHelsinkiLogo({
  className = '',
  size = 'md',
  showText = true,
  textClassName,
  subtextClassName,
  variant = 'light',
}: LogoProps) {
  const dimensions = {
    sm: { icon: 34, text: 'text-base', subtext: 'text-[9px]' },
    md: { icon: 44, text: 'text-lg', subtext: 'text-[10px]' },
    lg: { icon: 64, text: 'text-2xl', subtext: 'text-xs' },
    xl: { icon: 96, text: 'text-3xl', subtext: 'text-sm' },
  }[size];

  const textColor = textClassName || (variant === 'dark' ? 'text-white' : 'text-slate-900');
  const subtextColor = subtextClassName || (variant === 'dark' ? 'text-amber-400' : 'text-amber-700 font-semibold');

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center drop-shadow-md"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Deepened, rich golden-yellow hosting the black star */}
            <linearGradient id="deepGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="45%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>

            {/* Helsinki Nordic Blue & Atmosphere Gradient */}
            <linearGradient id="nordicBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Sustainable Cooling Emerald Accent */}
            <linearGradient id="coolingEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065F46" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#92400E" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Outer Protective Atmosphere / Cooling Orbit Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#nordicBlueGrad)"
            strokeWidth="3.5"
            strokeDasharray="92 12"
            strokeLinecap="round"
          />

          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#coolingEmeraldGrad)"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Core Disc: Deepened Golden Yellow hosting the Black Star */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="url(#deepGoldGrad)"
            stroke="#78350F"
            strokeWidth="1.5"
            filter="url(#subtleGlow)"
          />

          {/* Subtle Inner Ring highlighting the deep gold */}
          <circle
            cx="50"
            cy="50"
            r="31"
            fill="none"
            stroke="#FDE68A"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Sustainable Cooling Meridian Arcs (Atmosphere / Ozone Layer) */}
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="11"
            fill="none"
            stroke="#B45309"
            strokeWidth="0.8"
            opacity="0.45"
            transform="rotate(-25 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="11"
            ry="30"
            fill="none"
            stroke="#B45309"
            strokeWidth="0.8"
            opacity="0.45"
            transform="rotate(-25 50 50)"
          />

          {/* Prominent African Black Star */}
          <g id="blackStar">
            {/* The 5-Pointed Black Star */}
            <polygon
              points="50,23 56.8,36.5 71.5,38.2 60.8,48.5 63.5,63 50,56 36.5,63 39.2,48.5 28.5,38.2 43.2,36.5"
              fill="#111827"
              stroke="#030712"
              strokeWidth="0.75"
              strokeLinejoin="round"
            />
            {/* Subtle faceted contrast edge on the star */}
            <polygon
              points="50,23 50,56 63.5,63 55,49"
              fill="#1F2937"
              opacity="0.3"
            />
            <polygon
              points="50,23 50,56 36.5,63 45,49"
              fill="#000000"
              opacity="0.25"
            />
          </g>

          {/* Small Cooling Starburst / Compass accents at top and bottom */}
          <circle cx="50" cy="5" r="2.5" fill="#38BDF8" />
          <circle cx="50" cy="95" r="2" fill="#059669" />
          <circle cx="5" cy="50" r="2" fill="#0284C7" />
          <circle cx="95" cy="50" r="2" fill="#D97706" />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-black tracking-tight leading-tight uppercase ${textColor} ${dimensions.text}`}>
            Accra-Helsinki Group
          </span>
          <span className={`tracking-widest uppercase text-emerald-700 font-bold ${subtextColor} ${dimensions.subtext}`}>
            For Sustainable Cooling
          </span>
        </div>
      )}
    </div>
  );
}

export default AccraHelsinkiLogo;
