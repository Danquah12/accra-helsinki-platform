"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Newspaper, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Ghana Intercepts 40 Containers of Obsolete ACs at Tema Port",
    date: "August 12, 2025",
    category: "Enforcement",
    excerpt: "In a major operation, customs officials utilizing new intelligence protocols successfully identified and seized thousands of non-compliant air conditioners.",
    source: "CSRTA Media"
  },
  {
    id: 2,
    title: "New E-Waste Recycling Facility Opens in Nairobi",
    date: "July 28, 2025",
    category: "Infrastructure",
    excerpt: "State-of-the-art facility capable of safely processing 5,000 tons of electronic waste annually opens its doors, providing formal employment to 200 workers.",
    source: "Partner News"
  },
  {
    id: 3,
    title: "Regional MEPS Harmonization Agreement Signed",
    date: "June 15, 2025",
    category: "Policy",
    excerpt: "Fifteen ECOWAS member states have agreed to harmonize their Minimum Energy Performance Standards, creating a unified defense against environmental dumping.",
    source: "Press Release"
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="News & Updates"
        description="Latest news from the field, policy changes, and project milestones."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                  <Newspaper className="w-12 h-12" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase tracking-wider">
                    <span className="text-emerald-600">{item.category}</span>
                    <span className="text-slate-400 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1">{item.excerpt}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">{item.source}</span>
                    <button className="text-emerald-600 font-bold text-sm hover:text-emerald-700">Read More</button>
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
