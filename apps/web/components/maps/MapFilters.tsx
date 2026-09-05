"use client";

import { useState } from "react";
import { Filter, Check } from "lucide-react";
import { motion } from "framer-motion";

export type MapFiltersState = {
  layers: {
    countries: boolean;
    incidents: boolean;
    shippingRoutes: boolean;
  };
  incidentCategories: {
    ewaste_dump: boolean;
    illegal_shipment: boolean;
    contamination: boolean;
    appliance_dump: boolean;
  };
  incidentSeverities: {
    low: boolean;
    medium: boolean;
    high: boolean;
    critical: boolean;
  };
};

interface MapFiltersProps {
  filters: MapFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<MapFiltersState>>;
}

export default function MapFilters({ filters, setFilters }: MapFiltersProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleLayer = (key: keyof MapFiltersState["layers"]) => {
    setFilters((prev) => ({
      ...prev,
      layers: { ...prev.layers, [key]: !prev.layers[key] },
    }));
  };

  const toggleCategory = (key: keyof MapFiltersState["incidentCategories"]) => {
    setFilters((prev) => ({
      ...prev,
      incidentCategories: { ...prev.incidentCategories, [key]: !prev.incidentCategories[key] },
    }));
  };

  const toggleSeverity = (key: keyof MapFiltersState["incidentSeverities"]) => {
    setFilters((prev) => ({
      ...prev,
      incidentSeverities: { ...prev.incidentSeverities, [key]: !prev.incidentSeverities[key] },
    }));
  };

  return (
    <div className="absolute top-4 right-4 z-[400] w-72 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[calc(100%-2rem)]">
      <div 
        className="flex items-center justify-between p-3 bg-emerald-900 text-white cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 font-semibold">
          <Filter className="w-4 h-4" />
          <span>Map Filters</span>
        </div>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </div>
      </div>
      
      {isOpen && (
        <div className="p-4 overflow-y-auto flex-1 text-sm text-gray-800 dark:text-gray-200">
          <div className="mb-5">
            <h4 className="font-bold mb-2 uppercase text-xs text-gray-500">Map Layers</h4>
            <div className="space-y-2">
              <Checkbox label="Country Boundaries" checked={filters.layers.countries} onChange={() => toggleLayer('countries')} />
              <Checkbox label="Environmental Incidents" checked={filters.layers.incidents} onChange={() => toggleLayer('incidents')} />
              <Checkbox label="Shipping Routes" checked={filters.layers.shippingRoutes} onChange={() => toggleLayer('shippingRoutes')} />
            </div>
          </div>

          <div className="mb-5">
            <h4 className="font-bold mb-2 uppercase text-xs text-gray-500">Incident Categories</h4>
            <div className="space-y-2">
              <Checkbox label="E-Waste Dumps" checked={filters.incidentCategories.ewaste_dump} onChange={() => toggleCategory('ewaste_dump')} />
              <Checkbox label="Illegal Shipments" checked={filters.incidentCategories.illegal_shipment} onChange={() => toggleCategory('illegal_shipment')} />
              <Checkbox label="Contamination" checked={filters.incidentCategories.contamination} onChange={() => toggleCategory('contamination')} />
              <Checkbox label="Appliance Dumps" checked={filters.incidentCategories.appliance_dump} onChange={() => toggleCategory('appliance_dump')} />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2 uppercase text-xs text-gray-500">Severity Level</h4>
            <div className="space-y-2">
              <Checkbox label="Critical" checked={filters.incidentSeverities.critical} onChange={() => toggleSeverity('critical')} colorClass="text-red-600" />
              <Checkbox label="High" checked={filters.incidentSeverities.high} onChange={() => toggleSeverity('high')} colorClass="text-orange-500" />
              <Checkbox label="Medium" checked={filters.incidentSeverities.medium} onChange={() => toggleSeverity('medium')} colorClass="text-yellow-500" />
              <Checkbox label="Low" checked={filters.incidentSeverities.low} onChange={() => toggleSeverity('low')} colorClass="text-green-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Checkbox({ label, checked, onChange, colorClass = "" }: { label: string, checked: boolean, onChange: () => void, colorClass?: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-emerald-600 border-emerald-600' : 'border-gray-300 dark:border-gray-600 group-hover:border-emerald-500'}`}>
        {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </div>
      <span className={colorClass}>{label}</span>
    </label>
  );
}
