import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Water Contamination | Accra-Helsinki Platform', description: 'Impacts on drinking water.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Water Contamination" description="Impacts on drinking water." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Water Contamination', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Heavy Metal Leaching</h2>
      <p className="text-slate-700 text-lg leading-relaxed">Toxic metals from informal landfills and dumping sites leach deeply into groundwater over time, poisoning critical drinking sources for entire communities and disrupting local aquatic ecosystems.</p>
    </div></div>
    </main>
  );
}
