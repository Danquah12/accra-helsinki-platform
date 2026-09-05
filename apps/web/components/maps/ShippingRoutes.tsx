"use client";

import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import { MapFiltersState } from "./MapFilters";

interface ShippingRoutesProps {
  filters: MapFiltersState;
}

export default function ShippingRoutes({ filters }: ShippingRoutesProps) {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/geojson/shipping-routes.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading shipping routes:", err));
  }, []);

  if (!geoData || !filters.layers.shippingRoutes) return null;

  const styleRoute = (feature: any) => {
    const isDocumented = feature.properties.documented;
    return {
      color: isDocumented ? "#3b82f6" : "#ef4444",
      weight: 3,
      opacity: 0.7,
      dashArray: isDocumented ? undefined : "5, 10",
      lineJoin: "round" as const,
    };
  };

  return (
    <GeoJSON
      key={`routes-${filters.layers.shippingRoutes}`}
      data={geoData}
      style={styleRoute}
      onEachFeature={(feature, layer) => {
        const props = feature.properties;
        const popupContent = `
          <div class="p-1">
            <h3 class="font-bold text-sm mb-1 text-gray-800">Shipping Route</h3>
            <div class="text-xs font-semibold mb-2">${props.origin_port} ➔ ${props.destination_port}</div>
            <div class="text-xs mb-1"><span class="text-gray-500">Waste Type:</span> <span class="capitalize">${props.waste_type}</span></div>
            <div class="text-xs"><span class="text-gray-500">Status:</span> ${props.documented ? '<span class="text-blue-600">Documented</span>' : '<span class="text-red-600 font-bold">Undocumented / Suspicious</span>'}</div>
          </div>
        `;
        layer.bindPopup(popupContent);

        // Optional: add hover effect
        layer.on({
          mouseover: (e) => {
            const l = e.target;
            l.setStyle({ weight: 5, opacity: 1 });
          },
          mouseout: (e) => {
            const l = e.target;
            l.setStyle(styleRoute(feature));
          }
        });
      }}
    />
  );
}
