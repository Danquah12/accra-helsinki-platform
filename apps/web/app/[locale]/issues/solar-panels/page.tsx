import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'End-of-Life Solar Panels | Accra-Helsinki Platform', description: 'The hidden cost of renewable energy.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="End-of-Life Solar Panels" description="The hidden cost of renewable energy." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'End-of-Life Solar Panels', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">A Growing Challenge in Renewables</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">As first-generation solar panels reach their end of life in developed nations, many are exported to Africa as 'used goods'. Without proper local recycling infrastructure, toxic components like Cadmium, Lead, and Silicon pose massive environmental threats to groundwater and soil.</p>
    </div></div>
    </main>
  );
}
