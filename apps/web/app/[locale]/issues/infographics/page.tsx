import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Infographics Gallery | Accra-Helsinki Platform', description: 'Visual data and flows.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Infographics Gallery" description="Visual data and flows." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Infographics Gallery', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 gap-8">
      {['E-waste Trade Flows','Health Impacts Matrix','Policy Timelines','Regional Import Data'].map(i => (
        <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
           <div className="bg-slate-100 aspect-video flex flex-col items-center justify-center text-slate-400 font-bold group-hover:bg-slate-200 transition-colors">
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>{i} Placeholder</span>
           </div>
           <div className="p-6">
             <h3 className="font-bold text-emerald-900 text-lg">{i}</h3>
           </div>
        </div>
      ))}
    </div></div>
    </main>
  );
}
