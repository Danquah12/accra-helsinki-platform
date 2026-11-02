import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Mail } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Terms of Participation | Accra-Helsinki Group for Sustainable Cooling', 
  description: 'Terms of participation and engagement under the Chatham House Rule for the Accra-Helsinki Group.' 
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-950 text-white pb-20">
      <PageHeader 
        title="Terms of Participation" 
        description="Guidelines for informal community engagement, research sharing, and side-event participation." 
        breadcrumbs={[
          { label: 'Home', href: `/${locale}` }, 
          { label: 'Terms of Participation', href: '#' }
        ]} 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Terms of Participation & Dialogue</h2>
              <p className="text-xs sm:text-sm text-slate-400">Accra-Helsinki Group for Sustainable Cooling</p>
            </div>
          </div>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-emerald-400 uppercase tracking-wider">1. Informal Diplomatic Community</h3>
            <p>
              The Accra-Helsinki Group is an informal community of like-minded individuals and organizations. It does not issue binding international instruments or replace the formal multilateral negotiations of the Montreal Protocol or the Vienna Convention.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-emerald-400 uppercase tracking-wider">2. Chatham House Rule Adherence</h3>
            <p>
              Participation in workshops, side events, and roundtables convened by the Group requires strict adherence to the Chatham House Rule to encourage candor, scientific rigour, and ambitious policy thinking.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-emerald-400 uppercase tracking-wider">3. Research & Technical Materials</h3>
            <p>
              Scientific briefings, the MP10 Portfolio of Opportunities, and policy frameworks published on this platform are made available for educational and analytical purposes to advance sustainable cooling policies globally.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-emerald-400 uppercase tracking-wider">4. Contact & Inquiries</h3>
            <p>
              For queries or side event scheduling:
            </p>
            <div className="pt-2">
              <a 
                href="mailto:info@accra-helsinki.org" 
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-mono text-sm underline"
              >
                <Mail className="w-4 h-4" /> info@accra-helsinki.org
              </a>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-800">
            <Link 
              href={`/${locale}`}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
