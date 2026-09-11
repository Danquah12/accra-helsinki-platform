import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { 
  title: 'Leadership & Co-Chairs | Accra-Helsinki Group', 
  description: 'Co-chairs and conveners of the Accra-Helsinki Group for Sustainable Cooling.' 
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader 
        title="Group Leadership &amp; Co-Chairs" 
        description="The Accra-Helsinki Group convenes under the joint leadership of African and Nordic Montreal Protocol pioneers." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Leadership & Partners', href: `/${locale}/about` }, { label: 'Leadership', href: '#' }]} 
      />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Kofi Agyarko */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 bg-amber-500/10 text-amber-700 border border-amber-500/30 rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                KA
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-800 border border-amber-500/20 mb-3">
                Co-Chair (Ghana)
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kofi Agyarko</h3>
              <p className="text-sm font-semibold text-emerald-800 mb-4">
                CEO of Center for Shared Responsibility and Technology Ambition (CSRTA)
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Former Director of Renewable Energy and Energy Efficiency at the Energy Commission, Ghana. Pioneer of Ghana&apos;s landmark energy efficiency standards and the pioneering national framework against environmental dumping of obsolete cooling appliances.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500">
              Co-Chair &bull; Article 5 Leadership
            </div>
          </div>

          {/* Tapio Reinikainen */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-8 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 bg-sky-500/10 text-sky-800 border border-sky-500/30 rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                TR
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-800 border border-sky-500/20 mb-3">
                Co-Chair (Finland)
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Tapio Reinikainen</h3>
              <p className="text-sm font-semibold text-sky-800 mb-4">
                Senior Climate &amp; Environmental Expert (Finland)
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Distinguished Finnish climate and environmental diplomat and advisor with extensive tenure across European Union environmental policy, international Montreal Protocol negotiations, and Nordic clean cooling transition frameworks.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500">
              Co-Chair &bull; Article 2 Leadership
            </div>
          </div>
        </div>

        {/* Operating Governance Notice */}
        <div className="bg-emerald-900 text-white rounded-2xl p-8 shadow-sm">
          <h4 className="text-lg font-bold mb-2">Informal Diplomatic Governance</h4>
          <p className="text-sm text-emerald-100 leading-relaxed mb-4">
            The Accra-Helsinki Group operates under the <strong>Chatham House Rule</strong> to facilitate open, constructive, and forward-looking discussions outside the formal negotiating context of the Montreal Protocol.
          </p>
          <a
            href="mailto:info@accra-helsinki.org"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-mono text-sm font-bold underline"
          >
            Direct Inquiries: info@accra-helsinki.org
          </a>
        </div>
      </div>
    </main>
  );
}
