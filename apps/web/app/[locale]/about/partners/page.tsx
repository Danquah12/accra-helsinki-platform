import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Partners | Accra-Helsinki Platform', description: 'Our network of partners.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Partners" description="Our network of partners." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Partners', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {['UNEP','Basel Convention Secretariat','Montreal Protocol Secretariat','CCAC','IGSD','Ghana EPA','Finland Ministry of Environment','African Union','World Bank','WHO','UNDP','GIZ'].map(p => (
         <div key={p} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center flex flex-col items-center justify-center min-h-[160px] hover:border-emerald-500 transition-colors">
           <div className="w-16 h-16 bg-slate-50 rounded-full mb-4 flex items-center justify-center text-slate-400 border border-slate-200">Logo</div>
           <h3 className="font-semibold text-emerald-900 text-sm">{p}</h3>
         </div>
      ))}
    </div></div>
    </main>
  );
}
