import { Metadata } from "next";
import { AlertTriangle, Map as MapIcon, Ship } from "lucide-react";
import MapClient from "@/components/maps/MapClient";

export const metadata: Metadata = {
  title: "Interactive Africa Map | CSRTA Platform",
  description: "Explore environmental incidents, dumping sites, and shipping routes across Africa.",
};

export default function MapPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
          Interactive Africa Map
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Explore environmental incidents, dumping sites, and documented shipping routes across the continent.
        </p>
      </div>

      <div className="mb-8">
        <MapClient />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard 
          icon={<AlertTriangle className="w-6 h-6 text-orange-500" />}
          title="Active Incidents"
          value="15"
          subtitle="Monitored sites across Africa"
        />
        <StatCard 
          icon={<MapIcon className="w-6 h-6 text-emerald-600" />}
          title="Countries Covered"
          value="10"
          subtitle="Detailed environmental profiles"
        />
        <StatCard 
          icon={<Ship className="w-6 h-6 text-blue-500" />}
          title="Shipping Routes"
          value="8"
          subtitle="Tracked waste transportation"
        />
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: { icon: React.ReactNode; title: string; value: string; subtitle: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-center gap-5">
      <div className="p-3 bg-gray-50 rounded-lg">
        {icon}
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900">{value}</div>
        <div className="text-sm font-semibold text-slate-700">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
      </div>
    </div>
  );
}
