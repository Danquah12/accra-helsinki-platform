"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Newspaper, Calendar, ExternalLink, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Africa Must Not Become a Dumping Ground for Inefficient Appliances — Kofi Agyarko",
    date: "October 2026",
    category: "Policy & Standards",
    excerpt: "Speaking ahead of the China-Africa Standardisation Conference, Mr. Kofi A. Agyarko, CEO of CSRTA and Co-Chair of the Accra-Helsinki Group, warned that Africa faces dual threats of used end-of-life equipment and brand-new inefficient cooling appliances. He urged African nations to establish harmonized MEPS and enforce shared responsibility between exporters and importers.",
    source: "Ghana News Agency (GNA)",
    url: "https://gna.org.gh/2026/10/africa-must-not-become-a-dumping-ground-for-inefficient-appliances/",
    isExternal: true
  },
  {
    id: 2,
    title: "African Experts Push for Common Cooling Appliance Standards",
    date: "October 2026",
    category: "Regional Harmonization",
    excerpt: "Energy efficiency leaders and national standards officers across Africa have called for a unified regional regulatory regime for refrigerators and air conditioners. Coordinated standards and border controls are critical to stopping environmental dumping, reducing strain on national power grids, and preventing harmful refrigerant emissions.",
    source: "Ghana News Agency (GNA)",
    url: "https://gna.org.gh/2026/10/african-experts-push-for-common-cooling-appliance-standards/",
    isExternal: true
  },
  {
    id: 3,
    title: "Accra-Helsinki Side Event at MOP 38 Kigali: VSLS Controls & Sustainable Cooling",
    date: "November 2026",
    category: "MOP 38 Kigali",
    excerpt: "Convened during the Thirty-Eighth Meeting of the Parties celebrating the 10th anniversary of the Kigali Amendment, international delegates, European Commission officials, and atmospheric scientists reviewed policies to control Very Short-Lived Substances (VSLSs) and stop dumping.",
    source: "Accra-Helsinki Secretariat",
    url: "/media/photos",
    isExternal: false
  },
  {
    id: 4,
    title: "Accra-Helsinki Group Calls on EU for Decisive Regulatory Leadership on SF₆ at MOP37",
    date: "November 2025",
    category: "Super-Pollutants",
    excerpt: "Co-chaired by Kofi A. Agyarko (Ghana) and Tapio Reinikainen (Finland), the session drew over 40 global participants to urge strong regulatory measures against sulfur hexafluoride emissions under Montreal Protocol mechanisms.",
    source: "GBC Ghana Online",
    url: "https://www.gbcghanaonline.com/general/eu-greenhouse/2025/",
    isExternal: true
  },
  {
    id: 5,
    title: "Historic Launch: Accra-Helsinki Group Formally Inaugurated at MOP36 in Bangkok",
    date: "November 2024",
    category: "Diplomacy",
    excerpt: "Operating under the Chatham House Rule, the Group was established in the tradition of the Toronto and Stockholm Groups to advance ambitious consensus on sustainable cooling and stopping environmental dumping.",
    source: "UNEP Dispatch",
    url: "https://ozone.unep.org/system/files/documents/History%20of%20Accra-Helsinki%20Group_Marco%20and%20Stephen.pdf",
    isExternal: true
  },
  {
    id: 6,
    title: "Regional MEPS Harmonization Framework Signed Across West Africa",
    date: "June 2025",
    category: "Enforcement",
    excerpt: "Fifteen ECOWAS member states agreed to synchronize their Minimum Energy Performance Standards, establishing a coordinated continental barrier against obsolete cooling equipment imports.",
    source: "CSRTA Media",
    url: "/policy/standards",
    isExternal: false
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="News & Dispatches"
        description="Official media coverage, statements, and dispatches documenting the fight against environmental dumping and the work of the Accra-Helsinki Group."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Media Center", href: "/en/media" },
          { label: "News & Dispatches", href: "/en/media/news" },
        ]}
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 overflow-hidden flex flex-col">
                <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex items-center justify-center text-white/30 p-6 relative">
                  <Newspaper className="w-12 h-12" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-white backdrop-blur-sm border border-white/20">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                      <span className="font-semibold text-emerald-700">{item.source}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Coverage</span>
                    {item.isExternal ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <span>Read on {item.source.split('(')[0].trim()}</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <a
                        href={item.url}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
