import React from 'react';

const PARTNERS = [
  'UNEP',
  'Basel Convention',
  'Montreal Protocol',
  'CCAC',
  'IGSD',
  'Ghana EPA',
  'Finland MoE',
  'African Union',
  'World Bank',
  'WHO'
];

export default function PartnersBar() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <h2 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">
          Our Partners
        </h2>
      </div>
      
      {/* Infinite scrolling marquee */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* We use two identical lists to create the seamless scroll effect */}
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {PARTNERS.map((partner, i) => (
            <div
              key={`partner-1-${i}`}
              className="mx-8 lg:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                {partner}
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center absolute top-0" style={{ animationDelay: '-15s' }}>
          {PARTNERS.map((partner, i) => (
            <div
              key={`partner-2-${i}`}
              className="mx-8 lg:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* We need some Tailwind CSS for the custom animation. 
          Since we are using Tailwind v4, we can define it here inline as arbitrary values or just rely on global css. 
          We'll add a simple style block just in case to guarantee it works. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}
