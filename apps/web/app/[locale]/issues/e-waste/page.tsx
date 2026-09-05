import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'E-Waste Dumping | Accra-Helsinki Platform', description: 'The growing crisis of electronic waste.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="E-Waste Dumping" description="The growing crisis of electronic waste." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'E-Waste Dumping', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">What is E-Waste Dumping?</h2>
        <p className="text-slate-700 text-lg leading-relaxed">The illegal or poorly regulated export of broken, obsolete electronic devices from developed nations to Africa. It occurs on an enormous scale, comprising millions of tons annually.</p>
      </section>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200">
          <h3 className="font-bold text-amber-900 text-xl mb-4">Origins</h3>
          <p className="text-amber-800 text-lg">The EU, US, and parts of Asia remain the primary sources of dumped e-waste under the guise of "second-hand goods".</p>
        </div>
        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200">
          <h3 className="font-bold text-emerald-900 text-xl mb-4">Destinations</h3>
          <p className="text-emerald-800 text-lg">Agbogbloshie in Ghana and Lagos in Nigeria are among the largest global endpoints for these hazardous materials.</p>
        </div>
      </div>
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
         <h2 className="text-2xl font-bold text-emerald-900 mb-4">Toxic Components & Health Impacts</h2>
         <p className="text-slate-700 leading-relaxed">E-waste contains dangerous heavy metals including Lead, Mercury, Cadmium, and Brominated Flame Retardants (BFRs). These severely impact the health of informal workers, children, and surrounding communities through open burning and soil leaching.</p>
      </section>
    </div></div>
    </main>
  );
}
