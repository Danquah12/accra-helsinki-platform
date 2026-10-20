import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
import { Download, ExternalLink, FileText, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documents & Reports | Accra-Helsinki Platform',
  description: 'Official documents, policy declarations, meeting reports, and strategic frameworks of the Accra-Helsinki Group for Sustainable Cooling.',
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader
        title="Documents & Reports"
        description="Official publications, transition roadmaps, and meeting records of the Accra-Helsinki Group."
        breadcrumbs={[{ label: 'Home', href: `/${locale}` }, { label: 'Documents & Reports', href: '#' }]}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl space-y-12">
        {/* Featured Document Card: MP10 Portfolio */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white border border-emerald-500/30 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Strategy Publication
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                The MP10 Portfolio of Opportunities
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200 font-semibold">
                Accra-Helsinki Group for Sustainable Cooling &bull; Montreal Protocol Transition Framework
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                Ten actionable opportunities to accelerate Kigali Amendment implementation, synchronize energy efficiency MEPS, halt obsolete refrigerant dumping, and mitigate super-pollutants including SF₆, N₂O, VSLSs, and PFAS.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="/documents/accra-helsinki-mp10-portfolio-of-opportunities.pdf"
                download="accra-helsinki-mp10-portfolio-of-opportunities.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm transition-all shadow-md active:scale-95"
              >
                <Download size={16} />
                <span>Download Official PDF</span>
              </a>
              <Link
                href={`/${locale}/policy/mp10`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Read Online</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Document Collections Grid */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-700" />
            <span>Document Archives &amp; Policy Resources</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'The MP10 Portfolio of Opportunities',
                desc: 'Official 10-point transition agenda & Beyond Kigali framework slide.',
                tag: 'Strategic Policy',
                href: `/${locale}/policy/mp10`,
              },
              {
                title: 'UNEP History of Accra-Helsinki Group',
                desc: 'Official UNEP document detailing origin in lineage of Toronto & Stockholm groups.',
                tag: 'UNEP Record',
                href: 'https://ozone.unep.org/system/files/documents/History%20of%20Accra-Helsinki%20Group_Marco%20and%20Stephen.pdf',
                external: true,
              },
              {
                title: 'Beyond Kigali Transition Framework',
                desc: 'Architectural slide connecting passive cooling, natural refrigerants, and MEPS.',
                tag: 'Technical Diagram',
                href: '/images/beyond-kigali-framework.svg',
                external: true,
              },
              {
                title: 'Side Events & Meeting Agendas',
                desc: 'Official agendas from MOP-36 Bangkok, OEWG-46 Montreal, and MOP-37 Nairobi.',
                tag: 'Meeting Records',
                href: `/${locale}/events/past`,
              },
              {
                title: 'SF₆ & Super-Pollutants Briefing',
                desc: 'Policy briefing on sulfur hexafluoride regulation under Montreal Protocol mechanisms.',
                tag: 'Policy Brief',
                href: `/${locale}/policy/montreal-protocol#sf6`,
              },
              {
                title: 'Chatham House Governance Notice',
                desc: 'Guidelines governing open informal diplomacy between Article 5 & Article 2 Parties.',
                tag: 'Governance',
                href: `/${locale}/about/accra-helsinki`,
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-emerald-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {doc.tag}
                    </span>
                    {doc.external && <ExternalLink size={13} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />}
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  {doc.external ? (
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1"
                    >
                      <span>Open Document</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link
                      href={doc.href}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1"
                    >
                      <span>View Resource</span>
                      <ArrowRight size={11} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
