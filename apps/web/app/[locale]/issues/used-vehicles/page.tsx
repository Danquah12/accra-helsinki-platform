import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Used Vehicles | Accra-Helsinki Platform', description: 'Emissions and safety concerns.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Used Vehicles" description="Emissions and safety concerns." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Used Vehicles', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">End-of-Life Vehicle Exports</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">Millions of end-of-life vehicles from Europe and Japan are exported to Africa annually. Often, crucial emission control components like catalytic converters are removed prior to export, leading to severe urban air pollution and completely bypassing modern emission standards.</p>
    </div></div>
    </main>
  );
}
