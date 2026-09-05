import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Chemicals & Pollutants | Accra-Helsinki Platform', description: 'Detailed analysis of harmful substances.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Chemicals & Pollutants" description="Detailed analysis of harmful substances." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Chemicals & Pollutants', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {n: 'Lead', d: 'Causes irreversible cognitive damage, especially in children.'},
        {n: 'Mercury', d: 'Severe neurotoxin causing developmental disorders.'},
        {n: 'Cadmium', d: 'Highly toxic, leading to kidney failure and bone disease.'},
        {n: 'Chromium VI', d: 'Carcinogen associated with lung cancer and skin ulcers.'},
        {n: 'PCBs', d: 'Endocrine disruptors heavily linked to cancer.'},
        {n: 'Dioxins/Furans', d: 'Released during open burning of cables; highly carcinogenic.'},
        {n: 'BFRs', d: 'Flame retardants causing hormonal and developmental issues.'},
        {n: 'Black Carbon', d: 'Particulate matter causing severe respiratory disease.'}
      ].map(c => (
        <div key={c.n} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
          <h3 className="font-bold text-emerald-900 text-xl mb-3">{c.n}</h3>
          <p className="text-slate-600 leading-relaxed">{c.d}</p>
        </div>
      ))}
    </div></div>
    </main>
  );
}
