import Link from 'next/link';
import { ArrowLeft, BookText, FileText, Wind, ShieldAlert, History, Users, Bot, Zap, ExternalLink } from 'lucide-react';

export default async function MontrealProtocolHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href={`/${locale}/policy`} className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Policy Hub
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <BookText className="w-16 h-16 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold">Montreal Protocol Center</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            The landmark global agreement to protect the stratospheric ozone layer and mitigate climate change by phasing out ozone-depleting substances and phasing down HFCs.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link href={`/${locale}/policy/montreal-protocol/history`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <History className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">History &amp; Success</h3>
              <p className="text-slate-600">The journey from the discovery of the ozone hole to universal ratification.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/kigali`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <FileText className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Kigali Amendment</h3>
              <p className="text-slate-600">The 2016 agreement to phase down HFCs, crucial for climate change mitigation.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/refrigerants`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group border-l-4 border-l-blue-500">
              <Wind className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Refrigerant Database</h3>
              <p className="text-slate-600">Searchable database of CFCs, HCFCs, HFCs, and natural alternatives.</p>
            </Link>

            <Link href="#sf6" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all group border-l-4 border-l-amber-500">
              <Zap className="w-10 h-10 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">SF₆ Regulatory Measures</h3>
              <p className="text-slate-600">Phasing down sulfur hexafluoride and super-pollutants under global policy.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/compliance`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <ShieldAlert className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance &amp; Quotas</h3>
              <p className="text-slate-600">Understanding Article 5 schedules, licensing systems, and import quotas.</p>
            </Link>

            <Link href={`/${locale}/policy/montreal-protocol/training`} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <Users className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Customs Training</h3>
              <p className="text-slate-600">Resources for identifying illegal trade in controlled substances.</p>
            </Link>

          </div>

          {/* SF6 Regulatory Phasedown Measures Section */}
          <div id="sf6" className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">Long-Lived Climate Pollutant (LLCP) Governance</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">SF₆ Regulatory Phasedown Measures</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-rose-600">24,300&times;</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Global Warming Potential (GWP)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Potent greenhouse gas compared to CO₂ over 100 years.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-amber-600">3,200+ Yrs</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Atmospheric Persistence</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Virtually irreversible atmospheric accumulation if vented.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-600">MOP37 Focus</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Accra-Helsinki Side Event</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Convened over 40 global delegates in Nairobi (Nov 2025).</div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Sulfur Hexafluoride (SF₆)</strong> is the most potent greenhouse gas known to science. Primarily used as an electrical insulating gas in high-voltage switchgear and transformers, its emissions represent a multi-millennial environmental risk due to its extreme 3,200-year atmospheric lifetime.
              </p>
              <p>
                At the <strong>37th Meeting of the Parties (MOP37) in Nairobi (November 2025)</strong>, the <strong>Accra-Helsinki Group for Sustainable Cooling</strong> convened a dedicated international Side Event co-chaired by <strong>Kofi Agyarko</strong> (Ghana) and <strong>Tapio Reinikainen</strong> (Finland). The session gathered more than 40 delegates to review practical market solutions, technical alternatives (such as natural origin gases and synthetic air mixtures), and regulatory frameworks to control SF₆.
              </p>
              <p>
                The Group emphasized the regulatory precedent set by the <strong>European Union&apos;s revised F-gas Regulation (EU 2024/573)</strong>, which establishes a clear timetable to phase out SF₆ in electrical switchgear:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm text-slate-600">
                <li><strong>Medium-Voltage Switchgear (up to 24 kV):</strong> Phaseout of SF₆ starting in 2026.</li>
                <li><strong>Medium-Voltage Switchgear (24 kV to 52 kV):</strong> Phaseout starting in 2030.</li>
                <li><strong>High-Voltage Switchgear (above 52 kV):</strong> Progressive phaseout starting from 2030 to 2032 as viable non-SF₆ alternatives achieve commercial maturity.</li>
              </ul>
              <p>
                The Accra-Helsinki Group promotes shared responsibility and practical policy dialogues to ensure developing countries are not locked into obsolete electrical infrastructure, while encouraging Montreal Protocol and international climate mechanisms to address high-GWP super-pollutants effectively.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <a
                href="https://www.gbcghanaonline.com/general/eu-greenhouse/2025/4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                <span>Read GBC Ghana Coverage &bull; Mabel Adorkor Annang</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="https://ozone.unep.org/meetings/thirty-seventh-meeting-parties/side-events?arg_1=2025-11-03"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <span>UNEP MOP-37 Official Side Event Record</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
