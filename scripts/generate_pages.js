const fs = require('fs');
const path = require('path');
const baseApp = 'd:/Anti-gravity/expedite-consults/expedite-consults/accra-helsinki-platform/apps/web/app/[locale]';

const ensureDir = (d) => fs.mkdirSync(d, { recursive: true });

const writePage = (r, t, d, c, ex = '') => {
  const dir = path.join(baseApp, r);
  ensureDir(dir);
  const code = `import { PageHeader } from '@/components/shared/PageHeader';
import { Metadata } from 'next';
import Link from 'next/link';
${ex}

export const metadata: Metadata = { title: '${t} | Accra-Helsinki Platform', description: '${d.replace(/'/g, "\\'")}' };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <PageHeader title="${t}" description="${d.replace(/'/g, "\\'")}" breadcrumbs={[{ label: 'Home', href: '/' }, { label: '${t}', href: '#' }]} />
      <div className="container mx-auto px-4 py-12">${c}</div>
    </main>
  );
}`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), code.trim() + '\n');
};

const pages = [
  { r: 'about', t: 'About Us', d: 'Mission and structure of the Accra-Helsinki Platform.', c: `
    <div className="max-w-3xl mx-auto text-center mb-12"><p className="text-xl text-slate-700">Dedicated to ending environmental dumping in Africa.</p></div>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[{path:'mission', title:'Mission & Vision'},{path:'history', title:'History'},{path:'leadership', title:'Leadership'},{path:'accra-helsinki', title:'Accra-Helsinki Initiative'},{path:'partners', title:'Partners'},{path:'advisory-board', title:'Advisory Board'},{path:'contact', title:'Contact'},{path:'documents', title:'Documents'}].map(l => (
         <Link key={l.path} href={\`/\${locale}/about/\${l.path}\`} className="bg-white p-6 rounded-2xl shadow border border-slate-200 hover:border-emerald-500 transition-all">
           <h3 className="font-bold text-emerald-900 text-lg mb-2">{l.title}</h3>
           <span className="text-amber-600 font-medium">Learn More &rarr;</span>
         </Link>
      ))}
    </div>` },
  { r: 'about/mission', t: 'Mission, Vision & Values', d: 'Our core driving principles.', c: `
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl border-t-4 border-emerald-600 shadow-sm"><h2 className="text-2xl font-bold text-emerald-900 mb-4">Mission</h2><p className="text-slate-700">Prevent environmental dumping of obsolete technologies in Africa.</p></div>
      <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-sm"><h2 className="text-2xl font-bold text-emerald-900 mb-4">Vision</h2><p className="text-slate-700">An Africa where communities are protected from hazardous waste.</p></div>
      <div className="bg-white p-6 rounded-xl border-t-4 border-emerald-900 shadow-sm"><h2 className="text-2xl font-bold text-emerald-900 mb-4">Values</h2><ul className="list-disc pl-5 text-slate-700 space-y-2"><li>Research-driven</li><li>Collaborative</li><li>Transparent</li><li>Africa-centered</li><li>Science-based</li></ul></div>
    </div>` },
  { r: 'about/history', t: 'History & Timeline', d: 'The journey of CSRTA.', c: `
    <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
      {[
        {y:'2020', d:'Ghana Energy Commission begins documenting obsolete appliance imports.'},
        {y:'2022', d:'Initial research collaboration between Ghana and Finland.'},
        {y:'2023', d:'CSRTA formally established.'},
        {y:'2024 Nov', d:'Accra-Helsinki Group inaugurated at MOP-36 in Bangkok.'},
        {y:'2025', d:'Platform launch.'}
      ].map((t, i) => (
         <div key={t.y} className={\`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active\`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-600 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="font-bold text-amber-600 text-lg">{t.y}</span>
              <p className="mt-2 text-slate-700">{t.d}</p>
            </div>
         </div>
      ))}
    </div>` },
  { r: 'about/leadership', t: 'Leadership Team', d: 'Meet the team behind CSRTA.', c: `
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {name: 'Kofi Agyarko', title: 'CEO', org: 'Former Director of RE & EE, Energy Commission of Ghana'},
        {name: 'Jane Doe', title: 'CTO', org: 'CSRTA'},
        {name: 'John Smith', title: 'Research Director', org: 'CSRTA'},
        {name: 'Sarah Lee', title: 'Policy Director', org: 'CSRTA'},
        {name: 'Michael Chen', title: 'Communications Director', org: 'CSRTA'}
      ].map(p => (
        <div key={p.name} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden text-center p-6 hover:shadow-md transition-shadow">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-800 rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">{p.name.split(' ').map(n=>n[0]).join('')}</div>
          <h3 className="text-xl font-bold text-emerald-900">{p.name}</h3>
          <p className="text-amber-600 font-medium my-1">{p.title}</p>
          <p className="text-sm text-slate-500">{p.org}</p>
        </div>
      ))}
    </div>` },
  { r: 'about/accra-helsinki', t: 'Accra-Helsinki Initiative', d: 'Details on the initiative.', c: `
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
    </div>` },
  { r: 'about/partners', t: 'Partners', d: 'Our network of partners.', c: `
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {['UNEP','Basel Convention Secretariat','Montreal Protocol Secretariat','CCAC','IGSD','Ghana EPA','Finland Ministry of Environment','African Union','World Bank','WHO','UNDP','GIZ'].map(p => (
         <div key={p} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center flex flex-col items-center justify-center min-h-[160px] hover:border-emerald-500 transition-colors">
           <div className="w-16 h-16 bg-slate-50 rounded-full mb-4 flex items-center justify-center text-slate-400 border border-slate-200">Logo</div>
           <h3 className="font-semibold text-emerald-900 text-sm">{p}</h3>
         </div>
      ))}
    </div>` },
  { r: 'about/advisory-board', t: 'Advisory Board', d: 'Expert guidance for the platform.', c: `
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {['Environmental Law','Refrigeration Engineering','Public Health','African Development','Climate Policy','Waste Management','Trade Policy','Environmental Justice'].map(e => (
        <div key={e} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
           <div className="w-20 h-20 bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold rounded-full mx-auto mb-4 border border-emerald-100">JD</div>
           <h3 className="font-bold text-emerald-900">Dr. Placeholder</h3>
           <p className="text-sm text-amber-600 font-medium mt-1">{e}</p>
        </div>
      ))}
    </div>` },
  { r: 'about/contact', t: 'Contact Us', d: 'Get in touch with CSRTA.', ex: "import { ContactForm } from './ContactForm';", c: `
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-8">Our Offices</h2>
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
            <h3 className="font-bold text-xl text-emerald-900 mb-2">Primary Office (Accra, Ghana)</h3>
            <p className="text-slate-600">Energy Commission Building<br/>Accra, Ghana</p>
            <p className="text-amber-600 font-medium mt-4">info-gh@accra-helsinki.org</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
            <h3 className="font-bold text-xl text-emerald-900 mb-2">Partner Office (Helsinki, Finland)</h3>
            <p className="text-slate-600">Ministry of Environment<br/>Helsinki, Finland</p>
            <p className="text-amber-600 font-medium mt-4">info-fi@accra-helsinki.org</p>
          </div>
        </div>
      </div>
      <div><ContactForm /></div>
    </div>` },
  { r: 'about/documents', t: 'Documents & Reports', d: 'Organizational resources.', c: `
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {['Annual Reports', 'Strategic Plans', 'Policy Briefs', 'Meeting Reports', 'Governance Documents'].map(d => (
        <div key={d} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
           <div className="bg-emerald-50 p-4 rounded-xl text-emerald-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
           </div>
           <div>
             <h3 className="font-bold text-emerald-900">{d}</h3>
             <p className="text-sm text-slate-500 mt-1">PDF &bull; Multiple Files</p>
           </div>
        </div>
      ))}
    </div>` },
  { r: 'issues', t: 'Understanding the Crisis', d: 'The scope of environmental dumping.', c: `
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
        <Link key={i.p} href={\`/\${locale}/issues/\${i.p}\`} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-600 transition-all flex flex-col h-full">
           <h3 className="font-bold text-emerald-900 text-xl mb-2">{i.t}</h3>
           <p className="text-slate-600 flex-grow mb-4">{i.d}</p>
           <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">Explore &rarr;</span>
        </Link>
      ))}
    </div>` },
  { r: 'issues/e-waste', t: 'E-Waste Dumping', d: 'The growing crisis of electronic waste.', c: `
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
    </div>` },
  { r: 'issues/obsolete-appliances', t: 'Obsolete Appliances', d: 'Refrigerators, ACs, and washing machines.', c: `
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
      <div className="text-center mb-12">
         <span className="text-7xl font-extrabold text-amber-500 drop-shadow-sm">25-75%</span>
         <p className="text-2xl font-medium text-emerald-900 mt-4">Unusable Rate upon Arrival</p>
      </div>
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">The Burden on Energy Grids</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">Imported obsolete appliances are highly energy inefficient. They severely strain African power grids, increase greenhouse gas emissions from fossil-fuel power plants, and often contain highly potent global warming refrigerants that are released directly into the atmosphere.</p>
    </div>` },
  { r: 'issues/refrigerants', t: 'Refrigerants & ODS', d: 'Ozone depletion and global warming.', c: `
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">CFCs, HCFCs, and HFCs</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">These synthetic chemicals used in cooling have catastrophic impacts on the ozone layer and global climate. HFCs can be thousands of times more potent than CO2 in terms of Global Warming Potential (GWP).</p>
      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <h3 className="font-bold text-emerald-900 mb-2">Illegal Trade & The Montreal Protocol</h3>
        <p className="text-slate-700">The illegal dumping of these substances in African markets undermines the Montreal Protocol and the Kigali Amendment, creating a massive environmental justice issue while delaying the global transition to clean cooling.</p>
      </div>
    </div>` },
  { r: 'issues/solar-panels', t: 'End-of-Life Solar Panels', d: 'The hidden cost of renewable energy.', c: `
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">A Growing Challenge in Renewables</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">As first-generation solar panels reach their end of life in developed nations, many are exported to Africa as 'used goods'. Without proper local recycling infrastructure, toxic components like Cadmium, Lead, and Silicon pose massive environmental threats to groundwater and soil.</p>
    </div>` },
  { r: 'issues/used-vehicles', t: 'Used Vehicles', d: 'Emissions and safety concerns.', c: `
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">End-of-Life Vehicle Exports</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">Millions of end-of-life vehicles from Europe and Japan are exported to Africa annually. Often, crucial emission control components like catalytic converters are removed prior to export, leading to severe urban air pollution and completely bypassing modern emission standards.</p>
    </div>` },
  { r: 'issues/textiles', t: 'Textile Waste', d: 'The impact of fast fashion.', c: `
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Fast Fashion Dumping</h2>
      <p className="text-slate-700 text-lg leading-relaxed mb-6">Places like the Kantamanto Market in Accra receive up to 15 million garments weekly. A significant portion of this is unsellable waste, ending up in open landfills, beaches, and oceans, releasing massive amounts of synthetic plastic fibers into the ecosystem.</p>
    </div>` },
  { r: 'issues/health-impacts', t: 'Health & Environmental Impact Center', d: 'How dumping affects human health.', c: `
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
        <Link key={p.path} href={\`/\${locale}/issues/health-impacts/\${p.path}\`} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all">
          <h3 className="font-bold text-emerald-900 text-lg mb-4">{p.t}</h3>
          <span className="text-amber-600 font-medium">Learn More &rarr;</span>
        </Link>
      ))}
    </div>` },
  { r: 'issues/health-impacts/chemicals', t: 'Chemicals & Pollutants', d: 'Detailed analysis of harmful substances.', c: `
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {n: 'Lead', d: 'Causes irreversible cognitive damage, especially in children.'},
        {n: 'Mercury', d: 'Severe neurotoxin causing developmental disorders.'},
        {n: 'Cadmium', d: 'Highly toxic, leading to kidney failure and bone disease.'},
        {n: 'Chromium VI', d: 'Carcinogen associated with lung cancer and skin ulcers.'},
        {n: 'PCBs', d: 'Endocrine disruptors heavily linked to cancer.'},
        {n: 'Dioxins/Furans', d: 'Released during open burning of cables; highly carcinogenic.'},
        {n: 'BFRs', d: 'Flame retardants causing hormonal and developmental issues.'},
        {n: 'Black Carbon', d: 'Particulate matter causing severe respiratory disease.'}
      ].map(c => (
        <div key={c.n} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
          <h3 className="font-bold text-emerald-900 text-xl mb-3">{c.n}</h3>
          <p className="text-slate-600 leading-relaxed">{c.d}</p>
        </div>
      ))}
    </div>` },
  { r: 'issues/health-impacts/human-body', t: 'Interactive Body Diagram', d: 'Visualizing health impacts.', ex: "import { InteractiveBody } from './InteractiveBody';", c: `<InteractiveBody />` },
  { r: 'issues/health-impacts/air', t: 'Air Quality Impacts', d: 'Effects of open burning and emissions.', c: `
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Open Burning of E-Waste</h2>
      <p className="text-slate-700 text-lg leading-relaxed">The practice of burning plastic-coated cables to extract copper releases massive amounts of dioxins, black carbon, and PM2.5. This causes severe, chronic respiratory issues and exponentially increases cancer rates for workers and nearby communities.</p>
    </div>` },
  { r: 'issues/health-impacts/water', t: 'Water Contamination', d: 'Impacts on drinking water.', c: `
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Heavy Metal Leaching</h2>
      <p className="text-slate-700 text-lg leading-relaxed">Toxic metals from informal landfills and dumping sites leach deeply into groundwater over time, poisoning critical drinking sources for entire communities and disrupting local aquatic ecosystems.</p>
    </div>` },
  { r: 'issues/health-impacts/soil', t: 'Soil Pollution', d: 'Impacts on agriculture and food.', c: `
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">Food Chain Contamination</h2>
      <p className="text-slate-700 text-lg leading-relaxed">Heavy metals like lead and cadmium accumulate persistently in the topsoil. This severely affects agricultural output and enters the local food chain, meaning individuals consume dangerous toxins even if they do not live near a dumpsite.</p>
    </div>` },
  { r: 'issues/infographics', t: 'Infographics Gallery', d: 'Visual data and flows.', c: `
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
    </div>` }
];

pages.forEach(p => writePage(p.r, p.t, p.d, p.c, p.ex));

const writeComp = (route, filename, content) => {
  const dir = path.join(baseApp, route);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, filename), content.trim() + '\n');
};

writeComp('about/contact', 'ContactForm.tsx', `'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  organization: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-emerald-900 mb-6">Send us a message</h3>
      <div><label className="block text-sm font-medium text-slate-700">Name</label><input {...register('name')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" />{errors.name && <span className="text-red-500 text-sm">{String(errors.name.message)}</span>}</div>
      <div><label className="block text-sm font-medium text-slate-700">Email</label><input type="email" {...register('email')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" />{errors.email && <span className="text-red-500 text-sm">{String(errors.email.message)}</span>}</div>
      <div><label className="block text-sm font-medium text-slate-700">Organization</label><input {...register('organization')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" /></div>
      <div><label className="block text-sm font-medium text-slate-700">Subject</label><select {...register('subject')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500"><option value="">Select a subject</option><option value="general">General Inquiry</option><option value="partnership">Partnership</option><option value="media">Media</option></select>{errors.subject && <span className="text-red-500 text-sm">{String(errors.subject.message)}</span>}</div>
      <div><label className="block text-sm font-medium text-slate-700">Message</label><textarea {...register('message')} rows={5} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" />{errors.message && <span className="text-red-500 text-sm">{String(errors.message.message)}</span>}</div>
      <button type="submit" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 w-full font-bold transition-colors mt-4">Send Message</button>
    </form>
  );
}`);

writeComp('issues/health-impacts/human-body', 'InteractiveBody.tsx', `'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const organData: Record<string, { name: string, impacts: string }> = {
  brain: { name: 'Brain & Nervous System', impacts: 'Lead: Cognitive damage, developmental issues.\\nMercury: Neurological disorders, tremors.' },
  lungs: { name: 'Lungs & Respiratory', impacts: 'Dioxins: Increased cancer risk from open burning.\\nBFRs: Respiratory irritation and chronic diseases.' },
  heart: { name: 'Heart & Cardiovascular', impacts: 'Cadmium: Increased risk of cardiovascular disease and hypertension.' },
  liver: { name: 'Liver', impacts: 'PCBs: Liver damage and elevated cancer risk.' },
  kidneys: { name: 'Kidneys', impacts: 'Cadmium: Renal failure and severe kidney damage.\\nMercury: Nephrotoxicity.' },
  skin: { name: 'Skin', impacts: 'Chromium VI: Allergic contact dermatitis and skin ulcers.' },
  bones: { name: 'Skeletal System', impacts: 'Lead: Accumulates in bones, causing long-term skeletal weakness.' },
  reproductive: { name: 'Reproductive System', impacts: 'Lead: Reduced fertility.\\nPCBs: Endocrine disruption and developmental toxicity.' }
};

export function InteractiveBody() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
      <div className="relative w-full max-w-[300px] mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-100">
         <svg viewBox="0 0 200 400" className="w-full drop-shadow-md">
           {/* Abstract Body Shape */}
           <path d="M100 20 C120 20 130 40 130 60 C130 80 115 90 115 90 L130 110 L160 180 L140 190 L115 130 L115 200 L125 380 L105 380 L95 240 L85 380 L65 380 L75 200 L75 130 L50 190 L30 180 L60 110 L75 90 C75 90 60 80 60 60 C60 40 70 20 100 20 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
           
           <motion.circle cx="100" cy="45" r="12" fill={active === 'brain' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('brain')} />
           <motion.ellipse cx="100" cy="110" rx="18" ry="22" fill={active === 'lungs' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('lungs')} />
           <motion.circle cx="108" cy="115" r="7" fill={active === 'heart' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('heart')} />
           <motion.path d="M85 140 Q 100 130 115 140 Q 115 155 85 150 Z" fill={active === 'liver' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('liver')} />
           <motion.circle cx="90" cy="155" r="6" fill={active === 'kidneys' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('kidneys')} />
           <motion.circle cx="110" cy="155" r="6" fill={active === 'kidneys' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('kidneys')} />
           <motion.circle cx="100" cy="190" r="10" fill={active === 'reproductive' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('reproductive')} />
           <motion.rect x="75" y="220" width="10" height="80" rx="4" fill={active === 'bones' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('bones')} />
           <motion.rect x="55" y="110" width="8" height="60" rx="4" fill={active === 'skin' ? '#065F46' : '#94a3b8'} className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setActive('skin')} transform="rotate(20 55 110)" />
         </svg>
      </div>
      <div className="h-full flex flex-col justify-center">
        {active ? (
           <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 shadow-sm animate-in fade-in slide-in-from-right-4 duration-300">
             <h3 className="text-3xl font-bold text-emerald-900 mb-6">{organData[active].name}</h3>
             <p className="text-slate-700 text-lg whitespace-pre-line leading-relaxed">{organData[active].impacts}</p>
           </div>
        ) : (
           <div className="bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-300 text-center text-slate-500 h-full flex flex-col items-center justify-center min-h-[250px]">
             <svg className="w-12 h-12 mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
             <p className="text-lg">Click on an organ indicator (gray dots on the figure) to view specific health impacts of hazardous chemicals.</p>
           </div>
        )}
      </div>
    </div>
  );
}`);
console.log("Site pages generated successfully.");
