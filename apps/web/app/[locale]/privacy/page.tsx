import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Mail } from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Privacy Notice | Accra-Helsinki Group for Sustainable Cooling', 
  description: 'Privacy notice and data protection commitments of the Accra-Helsinki Group for Sustainable Cooling.' 
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-950 text-white pb-20">
      <PageHeader 
        title="Privacy Notice" 
        description="Our commitment to privacy, data protection, and confidential diplomatic dialogue." 
        breadcrumbs={[
          { label: 'Home', href: `/${locale}` }, 
          { label: 'Privacy Notice', href: '#' }
        ]} 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Privacy and Confidentiality</h2>
              <p className="text-xs sm:text-sm text-slate-400">Accra-Helsinki Group for Sustainable Cooling</p>
            </div>
          </div>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">1. The Chatham House Rule</h3>
            <p>
              The Accra-Helsinki Group operates under the <strong>Chatham House Rule</strong> to facilitate open, constructive, and forward-looking discussions outside formal negotiating contexts. When a meeting is held under the Chatham House Rule, participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">2. Information Collection</h3>
            <p>
              This platform does not collect non-essential personal information, employ tracking cookies, or monetize visitor data. Information submitted through contact or inquiry forms is used strictly to respond to official treaty-related inquiries and technical dialogue submissions.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">3. Data Security</h3>
            <p>
              All traffic to this site is encrypted via TLS 1.3. We maintain industry-standard security practices to protect any electronic communication sent to our secretariat or co-chairs.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">4. Inquiries</h3>
            <p>
              For questions concerning this notice or participation in Accra-Helsinki Group side events, please contact:
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
