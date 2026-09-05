import { Download, Database, Info, FileSpreadsheet, FileJson, FileText } from 'lucide-react';
import Link from 'next/link';

const DATASETS = [
  {
    id: 1,
    title: "UN Comtrade Used Appliance Imports (2015-2023)",
    description: "Detailed trade flow data of end-of-life and used cooling appliances imported into West and East African countries.",
    source: "UN Comtrade / Accra-Helsinki Processing",
    dateRange: "2015-2023",
    records: "145,000+",
    formats: ["CSV", "Excel", "JSON"]
  },
  {
    id: 2,
    title: "Agbogbloshie Soil Sampling Data",
    description: "Georeferenced soil toxicity measurements tracking heavy metals and persistent organic pollutants at the Agbogbloshie site.",
    source: "EPA Ghana / Field Studies",
    dateRange: "2018-2022",
    records: "4,200",
    formats: ["CSV", "JSON", "GeoJSON"]
  },
  {
    id: 3,
    title: "African Refrigerant Consumption Trends",
    description: "Annual consumption figures of HCFCs and HFCs reported under Article 7 of the Montreal Protocol.",
    source: "UNEP Ozone Secretariat",
    dateRange: "2010-2023",
    records: "1,850",
    formats: ["CSV", "Excel"]
  },
  {
    id: 4,
    title: "E-waste Processing Facility Locations",
    description: "Database of formal and informal e-waste processing and recycling hubs across 10 focus countries.",
    source: "Accra-Helsinki Platform",
    dateRange: "2024 (Current)",
    records: "124",
    formats: ["JSON", "GeoJSON"]
  },
  {
    id: 5,
    title: "National Appliance Energy Standards (MEPS)",
    description: "Comparative database of Minimum Energy Performance Standards for cooling appliances across African nations.",
    source: "Various National Authorities",
    dateRange: "2024 (Current)",
    records: "45",
    formats: ["CSV", "JSON"]
  },
  {
    id: 6,
    title: "Documented Environmental Incidents",
    description: "Log of illegal dumping, major hazardous waste fires, and chemical spills related to e-waste and refrigerants.",
    source: "Media Reports / NGO Tracking",
    dateRange: "2015-2024",
    records: "312",
    formats: ["CSV", "JSON"]
  }
];

export default function DatasetsPage() {
  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'CSV': return <FileText className="w-4 h-4" />;
      case 'Excel': return <FileSpreadsheet className="w-4 h-4" />;
      case 'JSON': 
      case 'GeoJSON': return <FileJson className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Open Data Center</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Download our curated and processed datasets in CSV, JSON, Excel, and GIS formats. 
            All data is provided under open licenses for research and policy analysis.
          </p>
          
          <div className="mt-6 flex items-center gap-2 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm max-w-max">
            <Info className="w-5 h-5 flex-shrink-0" />
            <p><strong>License:</strong> All datasets are licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) unless otherwise noted.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATASETS.map(dataset => (
            <div key={dataset.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:border-emerald-300 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                {dataset.title}
              </h3>
              
              <p className="text-sm text-slate-600 mb-4 flex-grow">
                {dataset.description}
              </p>
              
              <div className="space-y-2 mb-6 text-sm text-slate-500">
                <div className="flex justify-between">
                  <span className="font-medium">Source:</span>
                  <span className="truncate ml-2">{dataset.source}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date Range:</span>
                  <span>{dataset.dateRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Records:</span>
                  <span>{dataset.records}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 mt-auto space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Available Formats</div>
                <div className="flex flex-wrap gap-2">
                  {dataset.formats.map(format => (
                    <button 
                      key={format}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 rounded text-sm transition-colors"
                    >
                      {getFormatIcon(format)}
                      {format}
                      <Download className="w-3 h-3 ml-1 opacity-50" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
