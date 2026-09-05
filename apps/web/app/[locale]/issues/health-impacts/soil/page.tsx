import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Soil Pollution | Accra-Helsinki Platform', description: 'Impacts on agriculture and food.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Soil Pollution" description="Impacts on agriculture and food." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Soil Pollution', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Food Chain Contamination</h2>
      <p className="text-slate-700 text-lg leading-relaxed">Heavy metals like lead and cadmium accumulate persistently in the topsoil. This severely affects agricultural output and enters the local food chain, meaning individuals consume dangerous toxins even if they do not live near a dumpsite.</p>
    </div></div>
    </main>
  );
}
