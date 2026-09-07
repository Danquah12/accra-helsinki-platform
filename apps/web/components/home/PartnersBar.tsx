'use client';

import React from 'react';

const PARTNERS = [
  { name: 'UNEP Ozone Secretariat', tag: 'UN Environment', dot: 'bg-sky-400' },
  { name: 'Montreal Protocol', tag: 'Treaty Framework', dot: 'bg-blue-400' },
  { name: 'Climate & Clean Air Coalition (CCAC)', tag: 'Fast Mitigation', dot: 'bg-emerald-400' },
  { name: 'IGSD', tag: 'Governance & Science', dot: 'bg-amber-400' },
  { name: 'Ghana EPA', tag: 'Article 5 Co-Chair Host', dot: 'bg-amber-400' },
  { name: 'Ministry of the Environment Finland', tag: 'Article 2 Co-Chair Host', dot: 'bg-cyan-400' },
  { name: 'European Commission (DG CLIMA)', tag: 'Policy Leadership', dot: 'bg-indigo-400' },
  { name: 'International Institute of Refrigeration (IIR)', tag: 'Global RAC Science', dot: 'bg-teal-400' },
  { name: 'African Union Commission', tag: 'Pan-African Transition', dot: 'bg-emerald-400' },
  { name: 'Basel & Bamako Conventions', tag: 'Waste Dumping Controls', dot: 'bg-rose-400' },
];

export default function PartnersBar() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white border-y border-white/10 relative overflow-hidden select-none">
      {/* Atmospheric ambient glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Our Partners &amp; Global Collaborators
        </div>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Fostering shared responsibility between Article 5 and Article 2 Parties to the Montreal Protocol.
        </p>
      </div>
      
      {/* Seamless infinite marquee with side-by-side tracks (Zero text overlap) */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%-128px),_transparent_100%)]">
        <div className="flex w-max animate-partners-marquee hover:[animation-play-state:paused]">
          
          {/* First Track */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7 pr-5 sm:pr-7">
            {PARTNERS.map((partner, i) => (
              <div
                key={`partner-track1-${i}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-400/50 transition-all duration-200 group cursor-default shadow-lg backdrop-blur-sm"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${partner.dot} shadow-[0_0_8px_rgba(255,255,255,0.4)] shrink-0`} />
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white tracking-tight whitespace-nowrap transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 group-hover:text-amber-300/90 tracking-wider transition-colors">
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate Second Track for seamless continuous loop */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-7 pr-5 sm:pr-7" aria-hidden="true">
            {PARTNERS.map((partner, i) => (
              <div
                key={`partner-track2-${i}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-400/50 transition-all duration-200 group cursor-default shadow-lg backdrop-blur-sm"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${partner.dot} shadow-[0_0_8px_rgba(255,255,255,0.4)] shrink-0`} />
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-white tracking-tight whitespace-nowrap transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 group-hover:text-amber-300/90 tracking-wider transition-colors">
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Linear seamless 50% keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes partnersMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-partners-marquee {
          animation: partnersMarquee 42s linear infinite;
          will-change: transform;
        }
      `}} />
    </section>
  );
}
