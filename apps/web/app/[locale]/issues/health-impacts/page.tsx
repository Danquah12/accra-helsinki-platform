import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Health & Environmental Impact Center | Accra-Helsinki Platform', description: 'How dumping affects human health.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Health & Environmental Impact Center" description="How dumping affects human health." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Health & Environmental Impact Center', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-xl text-slate-700">Environmental dumping is not just a waste issue; it is a severe public health crisis affecting millions of people across the continent.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {path:'chemicals', t:'Chemicals & Pollutants'},
        {path:'human-body', t:'Interactive Body Diagram'},
        {path:'air', t:'Air Quality Impacts'},
        {path:'water', t:'Water Contamination'},
        {path:'soil', t:'Soil Pollution'}
      ].map(p => (
        <Link key={p.path} href={`/${locale}/issues/health-impacts/${p.path}`} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all">
          <h3 className="font-bold text-emerald-900 text-lg mb-4">{p.t}</h3>
          <span className="text-amber-600 font-medium">Learn More &rarr;</span>
        </Link>
      ))}
    </div></div>
    </main>
  );
}
