'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const organData: Record<string, { name: string, impacts: string }> = {
  brain: { name: 'Brain & Nervous System', impacts: 'Lead: Cognitive damage, developmental issues.\nMercury: Neurological disorders, tremors.' },
  lungs: { name: 'Lungs & Respiratory', impacts: 'Dioxins: Increased cancer risk from open burning.\nBFRs: Respiratory irritation and chronic diseases.' },
  heart: { name: 'Heart & Cardiovascular', impacts: 'Cadmium: Increased risk of cardiovascular disease and hypertension.' },
  liver: { name: 'Liver', impacts: 'PCBs: Liver damage and elevated cancer risk.' },
  kidneys: { name: 'Kidneys', impacts: 'Cadmium: Renal failure and severe kidney damage.\nMercury: Nephrotoxicity.' },
  skin: { name: 'Skin', impacts: 'Chromium VI: Allergic contact dermatitis and skin ulcers.' },
  bones: { name: 'Skeletal System', impacts: 'Lead: Accumulates in bones, causing long-term skeletal weakness.' },
  reproductive: { name: 'Reproductive System', impacts: 'Lead: Reduced fertility.\nPCBs: Endocrine disruption and developmental toxicity.' }
};

export function InteractiveBody() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
      <div className="relative w-full max-w-[300px] mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-100">
         <svg viewBox="0 0 200 400" className="w-full drop-shadow-md">
           {/* Abstract Body Shape */}
           <path d="M100 20 C120 20 130 40 130 60 C130 80 115 90 115 90 L130 110 L160 180 L140 190 L115 130 L115 200 L125 380 L105 380 L95 240 L85 380 L65 380 L75 200 L75 130 L50 190 L30 180 L60 110 L75 90 C75 90 60 80 60 60 C60 40 70 20 100 20 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
           
           <motion.circle cx="100" cy="45" r="12" fill={active === 'brain' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('brain')} />
           <motion.ellipse cx="100" cy="110" rx="18" ry="22" fill={active === 'lungs' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('lungs')} />
           <motion.circle cx="108" cy="115" r="7" fill={active === 'heart' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('heart')} />
           <motion.path d="M85 140 Q 100 130 115 140 Q 115 155 85 150 Z" fill={active === 'liver' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('liver')} />
           <motion.circle cx="90" cy="155" r="6" fill={active === 'kidneys' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('kidneys')} />
           <motion.circle cx="110" cy="155" r="6" fill={active === 'kidneys' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('kidneys')} />
           <motion.circle cx="100" cy="190" r="10" fill={active === 'reproductive' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('reproductive')} />
           <motion.rect x="75" y="220" width="10" height="80" rx="4" fill={active === 'bones' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('bones')} />
           <motion.rect x="55" y="110" width="8" height="60" rx="4" fill={active === 'skin' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('skin')} transform="rotate(20 55 110)" />
         </svg>
      </div>
      <div className="h-full flex flex-col justify-center">
        {active ? (
           <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 shadow-sm animate-in fade-in slide-in-from-right-4 duration-300">
             <h3 className="text-3xl font-bold text-emerald-900 mb-6">{organData[active].name}</h3>
             <p className="text-slate-700 text-lg whitespace-pre-line leading-relaxed">{organData[active].impacts}</p>
           </div>
        ) : (
           <div className="bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-300 text-center text-slate-500 h-full flex flex-col items-center justify-center min-h-[250px]">
             <svg className="w-12 h-12 mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
             <p className="text-lg">Click on an organ indicator (gray dots on the figure) to view specific health impacts of hazardous chemicals.</p>
           </div>
        )}
      </div>
    </div>
  );
}
