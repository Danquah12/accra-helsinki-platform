import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Mission, Vision & Values | Accra-Helsinki Platform', description: 'Our core driving principles.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Mission, Vision & Values" description="Our core driving principles." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mission, Vision & Values', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl border-t-4 border-emerald-600 shadow-sm"><h2 className="text-2xl font-bold text-emerald-900 mb-4">Mission</h2><p className="text-slate-700">Prevent environmental dumping of obsolete technologies in Africa.</p></div>
      <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-sm"><h2 className="text-2xl font-bold text-emerald-900 mb-4">Vision</h2><p className="text-slate-700">An Africa where communities are protected from hazardous waste.</p></div>
      <div className="bg-white p-6 rounded-xl border-t-4 border-emerald-900 shadow-sm"><h2 className="text-2xl font-bold text-emerald-900 mb-4">Values</h2><ul className="list-disc pl-5 text-slate-700 space-y-2"><li>Research-driven</li><li>Collaborative</li><li>Transparent</li><li>Africa-centered</li><li>Science-based</li></ul></div>
    </div></div>
    </main>
  );
}
