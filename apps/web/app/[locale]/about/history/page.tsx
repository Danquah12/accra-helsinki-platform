import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'History & Timeline | Accra-Helsinki Platform', description: 'The journey of CSRTA.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="History & Timeline" description="The journey of CSRTA." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'History & Timeline', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
      {[
        {y:'2020', d:'Ghana Energy Commission begins documenting obsolete appliance imports.'},
        {y:'2022', d:'Initial research collaboration between Ghana and Finland.'},
        {y:'2023', d:'CSRTA formally established.'},
        {y:'2024 Nov', d:'Accra-Helsinki Group inaugurated at MOP-36 in Bangkok.'},
        {y:'2025', d:'Platform launch.'}
      ].map((t, i) => (
         <div key={t.y} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-600 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="font-bold text-amber-600 text-lg">{t.y}</span>
              <p className="mt-2 text-slate-700">{t.d}</p>
            </div>
         </div>
      ))}
    </div></div>
    </main>
  );
}
