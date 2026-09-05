import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Advisory Board | Accra-Helsinki Platform', description: 'Expert guidance for the platform.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Advisory Board" description="Expert guidance for the platform." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Advisory Board', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {['Environmental Law','Refrigeration Engineering','Public Health','African Development','Climate Policy','Waste Management','Trade Policy','Environmental Justice'].map(e => (
        <div key={e} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
           <div className="w-20 h-20 bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold rounded-full mx-auto mb-4 border border-emerald-100">JD</div>
           <h3 className="font-bold text-emerald-900">Dr. Placeholder</h3>
           <p className="text-sm text-amber-600 font-medium mt-1">{e}</p>
        </div>
      ))}
    </div></div>
    </main>
  );
}
