import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Air Quality Impacts | Accra-Helsinki Platform', description: 'Effects of open burning and emissions.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Air Quality Impacts" description="Effects of open burning and emissions." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Air Quality Impacts', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Open Burning of E-Waste</h2>
      <p className="text-slate-700 text-lg leading-relaxed">The practice of burning plastic-coated cables to extract copper releases massive amounts of dioxins, black carbon, and PM2.5. This causes severe, chronic respiratory issues and exponentially increases cancer rates for workers and nearby communities.</p>
    </div></div>
    </main>
  );
}
