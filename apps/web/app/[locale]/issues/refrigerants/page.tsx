import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Refrigerants & ODS | Accra-Helsinki Platform', description: 'Ozone depletion and global warming.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Refrigerants & ODS" description="Ozone depletion and global warming." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Refrigerants & ODS', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">CFCs, HCFCs, and HFCs</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">These synthetic chemicals used in cooling have catastrophic impacts on the ozone layer and global climate. HFCs can be thousands of times more potent than CO2 in terms of Global Warming Potential (GWP).</p>
      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <h3 className="font-bold text-emerald-900 mb-2">Illegal Trade & The Montreal Protocol</h3>
        <p className="text-slate-700">The illegal dumping of these substances in African markets undermines the Montreal Protocol and the Kigali Amendment, creating a massive environmental justice issue while delaying the global transition to clean cooling.</p>
      </div>
    </div></div>
    </main>
  );
}
