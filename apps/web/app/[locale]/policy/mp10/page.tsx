import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText, Layers, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { MP10_PORTFOLIO } from '@/data/mp10Portfolio';
import { AccraHelsinkiLogo } from '@/components/shared/AccraHelsinkiLogo';

export const metadata: Metadata = {
  title: 'The MP10 Portfolio of Opportunities | Accra-Helsinki Group',
  description: 'Official document of the Accra-Helsinki Group for Sustainable Cooling outlining the MP10 Portfolio of Opportunities for Montreal Protocol implementation.',
};

export default async function MP10PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950">
      {/* Top Banner / Breadcrumb */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <Link
            href={`/${locale}/policy`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Policy Hub</span>
          </Link>

          {/* Document Header Emblem & Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="shrink-0 p-3 bg-white/5 border border-white/15 rounded-2xl shadow-xl">
              <AccraHelsinkiLogo size="lg" showText={false} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Official Strategy Document
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                The MP10 Portfolio of Opportunities
              </h1>
              <p className="text-base sm:text-lg text-emerald-300 font-semibold mt-1">
                Accra-Helsinki Group for Sustainable Cooling
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
            A comprehensive, ten-point strategic roadmap to accelerate Montreal Protocol implementation, synchronize energy efficiency improvements, stop the environmental dumping of obsolete cooling appliances, and protect stratospheric ozone and climate tipping points.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <a
              href="/documents/accra-helsinki-mp10-portfolio-of-opportunities.pdf"
              download="accra-helsinki-mp10-portfolio-of-opportunities.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <Download size={16} />
              <span>Download Official PDF (3 Pages)</span>
            </a>
            <a
              href="/documents/accra-helsinki-mp10-portfolio-of-opportunities.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <ExternalLink size={16} />
              <span>View PDF in Browser</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          
          {/* Section 1: The 10 Opportunities */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Strategic Priorities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Ten Actionable Pathways
              </h2>
            </div>

            <div className="space-y-4">
              {MP10_PORTFOLIO.map((item) => (
                <div
                  key={item.id}
                  id={`opportunity-${item.id}`}
                  className="rounded-2xl p-6 sm:p-7 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-400/40 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-6 group"
                >
                  {/* Number & Code Badge */}
                  <div className="shrink-0 flex items-center md:flex-col gap-2">
                    <span className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-lg flex items-center justify-center shrink-0">
                      {String(item.id).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-slate-300 border border-white/10">
                      {item.code}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title} ({item.code})
                      </h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {item.badgeText}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">{item.category}</span>
                      {item.highlightStat && (
                        <>
                          <span>&bull;</span>
                          <span className="text-amber-400 font-medium">{item.highlightStat}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Beyond Kigali Framework Diagram */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                Transition Roadmap
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Beyond Kigali: Accra-Helsinki Group for Sustainable Cooling
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
                The comprehensive architectural roadmap connecting demand reduction, non-chemical cooling, refrigerant transitions, and lifecycle management to prevent climate tipping points.
              </p>
            </div>

            <div className="rounded-3xl p-3 sm:p-4 bg-slate-900/90 border border-emerald-500/30 shadow-2xl overflow-hidden">
              <img
                src="/images/beyond-kigali-framework.png"
                alt="Beyond Kigali: Accra-Helsinki Group for Sustainable Cooling"
                className="w-full h-auto object-contain rounded-2xl shadow-md"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <span className="text-slate-400">
                Figure: Architectural Framework (Page 3 of Official Portfolio Document)
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/images/beyond-kigali-framework.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold underline inline-flex items-center gap-1"
                >
                  <span>Vector SVG</span>
                  <ExternalLink size={12} />
                </a>
                <span className="text-slate-600">&bull;</span>
                <a
                  href="/images/beyond-kigali-framework.png"
                  download="beyond-kigali-accra-helsinki-framework.png"
                  className="text-amber-400 hover:text-amber-300 font-bold underline inline-flex items-center gap-1"
                >
                  <span>HD PNG</span>
                  <Download size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Official Footnote / Contact */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/30 text-white space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-amber-300">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              Informal Diplomatic Engagement &amp; Side Events
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Accra-Helsinki Group operates under the <strong>Chatham House Rule</strong> to facilitate open, constructive, and forward-looking discussions outside the formal negotiating context of the Montreal Protocol.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-white/10">
              <span className="text-slate-400">
                Official inquiries: <a href="mailto:info@accra-helsinki.org" className="text-amber-400 hover:underline font-mono">info@accra-helsinki.org</a>
              </span>
              <span className="font-mono text-emerald-400">
                https://accra-helsinki.org/en
              </span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
