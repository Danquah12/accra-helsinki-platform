import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = { title: 'Understanding the Crisis | Accra-Helsinki Platform', description: 'The scope of environmental dumping.' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="Understanding the Crisis" description="The scope of environmental dumping." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Understanding the Crisis', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold text-emerald-900 mb-4">The Scale of Environmental Dumping</h2>
      <p className="text-lg text-slate-700">Millions of tons of hazardous and obsolete technologies are illegally exported to Africa annually, threatening health, environment, and energy systems.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {p:'e-waste', t:'E-Waste Dumping', d:'Millions of tons of broken electronics.'},
        {p:'obsolete-appliances', t:'Obsolete Appliances', d:'Inefficient cooling equipment.'},
        {p:'refrigerants', t:'Refrigerants & ODS', d:'Ozone depleting substances.'},
        {p:'solar-panels', t:'End-of-Life Solar Panels', d:'First-gen panels causing toxic waste.'},
        {p:'used-vehicles', t:'Used Vehicles', d:'High-emission vehicle exports.'},
        {p:'textiles', t:'Textile Waste', d:'Fast fashion dumping.'},
        {p:'health-impacts', t:'Health Impacts', d:'Consequences on communities.'},
        {p:'infographics', t:'Infographics', d:'Visual data and timelines.'}
      ].map(i => (
        <Link key={i.p} href={`/${locale}/issues/${i.p}`} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-600 transition-all flex flex-col h-full">
           <h3 className="font-bold text-emerald-900 text-xl mb-2">{i.t}</h3>
           <p className="text-slate-600 flex-grow mb-4">{i.d}</p>
           <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">Explore &rarr;</span>
        </Link>
      ))}
    </div></div>
    </main>
  );
}
