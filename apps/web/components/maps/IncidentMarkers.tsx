"use client";

import { useEffect, useState } from "react";
import { GeoJSON, Popup } from "react-leaflet";
import L from "leaflet";
import { MapFiltersState } from "./MapFilters";

interface IncidentMarkersProps {
  filters: MapFiltersState;
}

export default function IncidentMarkers({ filters }: IncidentMarkersProps) {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/geojson/incidents.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading incidents:", err));
  }, []);

  if (!geoData || !filters.layers.incidents) return null;

  const getMarkerColor = (severity: string) => {
    switch (severity) {
      case "critical": return "#ef4444";
      case "high": return "#f97316";
      case "medium": return "#eab308";
      case "low": return "#22c55e";
      default: return "#6b7280";
    }
  };

  const createCustomIcon = (feature: any) => {
    const color = getMarkerColor(feature.properties.severity);
    return L.divIcon({
      className: "custom-incident-marker",
      html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });
  };

  // Filter features based on filters state
  const filteredFeatures = {
    ...geoData,
    features: geoData.features.filter((feature: any) => {
      const cat = feature.properties.category as keyof typeof filters.incidentCategories;
      const sev = feature.properties.severity as keyof typeof filters.incidentSeverities;
      return filters.incidentCategories[cat] && filters.incidentSeverities[sev];
    })
  };

  return (
    <GeoJSON
      key={JSON.stringify(filteredFeatures)} // Force re-render on filter change
      data={filteredFeatures}
      pointToLayer={(feature, latlng) => {
        return L.marker(latlng, { icon: createCustomIcon(feature) });
      }}
      onEachFeature={(feature, layer) => {
        const props = feature.properties;
        const popupContent = `
          <div class="p-1 min-w-[200px]">
            <h3 class="font-bold text-sm mb-1">${props.title}</h3>
            <div class="text-xs mb-2 text-gray-500">${props.country} • ${new Date(props.date).toLocaleDateString()}</div>
            <div class="flex gap-2 mb-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-gray-100 text-gray-800">${props.category.replace('_', ' ')}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase" style="color: ${getMarkerColor(props.severity)}; border: 1px solid ${getMarkerColor(props.severity)}">${props.severity}</span>
            </div>
            <p class="text-xs mt-2">${props.description}</p>
          </div>
        `;
        layer.bindPopup(popupContent);
      }}
    />
  );
}
