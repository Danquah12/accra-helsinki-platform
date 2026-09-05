import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Accra-Helsinki Initiative | Accra-Helsinki Platform', description: 'Details on the initiative.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Accra-Helsinki Initiative" description="Details on the initiative." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Accra-Helsinki Initiative', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Inaugurated November 2024 at MOP-36 Bangkok</h2>
      <p className="text-slate-700 text-lg leading-relaxed">Co-chaired by Ghana (Kofi Agyarko) and Finland (Tapio Reinikainen), this initiative operates under the Chatham House Rule, focusing on sustainable cooling and ending dumping.</p>
      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mt-6">
         <h3 className="font-bold text-emerald-900 mb-4 text-lg">Key Focus Areas</h3>
         <ul className="list-disc pl-5 text-slate-700 space-y-2">
           <li>Ending environmental dumping of obsolete appliances.</li>
           <li>Transitioning to efficient low-GWP refrigerants.</li>
           <li>Managing and eliminating super-pollutants.</li>
         </ul>
      </div>
      <p className="text-slate-700 leading-relaxed mt-6">Following the tradition of informal Montreal Protocol groups like the Toronto Group and Stockholm Group, in partnership with IGSD and CCAC.</p>
    </div></div>
    </main>
  );
}
