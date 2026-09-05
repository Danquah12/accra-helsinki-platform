'use client';

import { useState } from 'react';
import { Search, Filter, BookOpen, Download } from 'lucide-react';
import Link from 'next/link';

// Placeholder data
const RESEARCH_PAPERS = [
  {
    id: 1,
    title: "E-waste flow in West Africa: A review of current practices",
    authors: "Mensah, A., Osei, K.",
    date: "2023-10-15",
    type: "Academic",
    category: "E-waste",
    abstract: "This paper reviews the current state of electronic waste management in West Africa, with a particular focus on informal recycling sectors in Ghana and Nigeria. It evaluates the environmental and health impacts associated with these practices.",
    link: "#"
  },
  {
    id: 2,
    title: "Implementation of the Kigali Amendment in Sub-Saharan Africa",
    authors: "UNEP Ozone Secretariat",
    date: "2023-08-22",
    type: "UN Report",
    category: "Refrigerants",
    abstract: "A comprehensive report detailing the progress, challenges, and opportunities for Sub-Saharan African countries in meeting their commitments under the Kigali Amendment to phase down HFCs.",
    link: "#"
  },
  {
    id: 3,
    title: "Health Impacts of Informal Lead Recovery from E-waste",
    authors: "WHO Regional Office for Africa",
    date: "2022-11-05",
    type: "Government",
    category: "Health",
    abstract: "An assessment of blood lead levels and associated neurological impacts among workers in informal e-waste recycling hubs across major African cities.",
    link: "#"
  },
  {
    id: 4,
    title: "Trade flows of end-of-life cooling equipment to East Africa",
    authors: "Wanjiru, M., Smith, J.",
    date: "2024-01-10",
    type: "Investigation",
    category: "Trade",
    abstract: "Investigative report tracing the export of outdated, inefficient air conditioning units from developed nations to East African markets, highlighting regulatory loopholes.",
    link: "#"
  },
  {
    id: 5,
    title: "EPR Policies for Electronic Waste: African Case Studies",
    authors: "Ndiaye, F.",
    date: "2023-05-30",
    type: "Academic",
    category: "Policy",
    abstract: "Analysis of Extended Producer Responsibility (EPR) frameworks implemented in Rwanda, South Africa, and Ghana, assessing their effectiveness in improving e-waste collection rates.",
    link: "#"
  },
  {
    id: 6,
    title: "Transitioning to Natural Refrigerants in Commercial Cooling",
    authors: "African Cooling Initiative",
    date: "2023-09-12",
    type: "NGO",
    category: "Refrigerants",
    abstract: "A white paper outlining the economic and technical feasibility of adopting R-290 and other natural refrigerants in commercial refrigeration systems across the continent.",
    link: "#"
  },
  {
    id: 7,
    title: "Basel Convention Ban Amendment: Impact on E-waste Imports",
    authors: "Okafor, E.",
    date: "2022-07-18",
    type: "Academic",
    category: "Policy",
    abstract: "Evaluating the effectiveness of the Basel Convention Ban Amendment since its entry into force, focusing on changes in trade volumes of hazardous wastes destined for Africa.",
    link: "#"
  },
  {
    id: 8,
    title: "Soil and Water Contamination at Agbogbloshie",
    authors: "Environmental Protection Agency Ghana",
    date: "2021-04-20",
    type: "Government",
    category: "Health",
    abstract: "Detailed environmental sampling results from the Agbogbloshie scrapyard, quantifying heavy metal and POP contamination levels in surrounding soil and water bodies.",
    link: "#"
  }
];

const TYPES = ["All", "Academic", "UN Report", "Government", "NGO", "Investigation"];
const CATEGORIES = ["All", "E-waste", "Refrigerants", "Health", "Policy", "Trade"];

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPapers = RESEARCH_PAPERS.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || paper.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Research Library</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access our curated collection of academic papers, reports, and policy documents regarding environmental challenges in Africa.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search by title, author, or keyword..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <select 
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {TYPES.map(type => <option key={type} value={type}>{type === 'All' ? 'All Types' : type}</option>)}
              </select>
              
              <select 
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center text-slate-600">
          <span>Showing {filteredPapers.length} results</span>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Sorted by: Newest</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredPapers.map(paper => (
            <div key={paper.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                    {paper.type}
                  </span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {paper.category}
                  </span>
                </div>
                <span className="text-sm text-slate-500">{new Date(paper.date).getFullYear()}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                {paper.title}
              </h3>
              
              <p className="text-sm text-slate-500 mb-4">
                By {paper.authors}
              </p>
              
              <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                {paper.abstract}
              </p>
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-100">
                <Link href={paper.link} className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1 text-sm">
                  <BookOpen className="w-4 h-4" />
                  Read Summary
                </Link>
                <button className="text-slate-400 hover:text-emerald-600 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredPapers.length > 0 && (
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">3</button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50">Next</button>
          </div>
        )}
        
        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No research papers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
