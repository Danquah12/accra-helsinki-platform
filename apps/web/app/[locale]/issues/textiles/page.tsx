import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Textile Waste | Accra-Helsinki Platform', description: 'The impact of fast fashion.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Textile Waste" description="The impact of fast fashion." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Textile Waste', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Fast Fashion Dumping</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">Places like the Kantamanto Market in Accra receive up to 15 million garments weekly. A significant portion of this is unsellable waste, ending up in open landfills, beaches, and oceans, releasing massive amounts of synthetic plastic fibers into the ecosystem.</p>
    </div></div>
    </main>
  );
}
