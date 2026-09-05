import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Obsolete Appliances | Accra-Helsinki Platform', description: 'Refrigerators, ACs, and washing machines.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Obsolete Appliances" description="Refrigerators, ACs, and washing machines." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Obsolete Appliances', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
      <div className="text-center mb-12">
         <span className="text-7xl font-extrabold text-amber-500 drop-shadow-sm">25-75%</span>
         <p className="text-2xl font-medium text-emerald-900 mt-4">Unusable Rate upon Arrival</p>
      </div>
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">The Burden on Energy Grids</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">Imported obsolete appliances are highly energy inefficient. They severely strain African power grids, increase greenhouse gas emissions from fossil-fuel power plants, and often contain highly potent global warming refrigerants that are released directly into the atmosphere.</p>
    </div></div>
    </main>
  );
}
