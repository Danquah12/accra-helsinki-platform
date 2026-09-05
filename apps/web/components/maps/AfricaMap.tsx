"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/navigation";
import IncidentMarkers from "./IncidentMarkers";
import ShippingRoutes from "./ShippingRoutes";
import MapFilters, { MapFiltersState } from "./MapFilters";
import MapLegend from "./MapLegend";

// Fix for default Leaflet icons in Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function AfricaMap() {
  const router = useRouter();
  const [countriesData, setCountriesData] = useState<any>(null);
  const [filters, setFilters] = useState<MapFiltersState>({
    layers: {
      countries: true,
      incidents: true,
      shippingRoutes: true,
    },
    incidentCategories: {
      ewaste_dump: true,
      illegal_shipment: true,
      contamination: true,
      appliance_dump: true,
    },
    incidentSeverities: {
      low: true,
      medium: true,
      high: true,
      critical: true,
    },
  });

  useEffect(() => {
    fetch("/geojson/africa-countries.geojson")
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((err) => console.error("Error loading countries:", err));
  }, []);

  const getCountryStyle = (feature: any) => {
    const score = feature.properties.recycling_capacity_score;
    let fillColor = "#22c55e"; // High > 70
    if (score < 50) fillColor = "#ef4444"; // Low
    else if (score <= 70) fillColor = "#eab308"; // Medium

    return {
      fillColor,
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.5,
    };
  };

  const onEachCountry = (feature: any, layer: L.Layer) => {
    const countryName = feature.properties.name;
    const slug = feature.properties.slug;

    layer.bindTooltip(countryName, { sticky: true, className: "font-semibold" });

    layer.on({
      mouseover: (e) => {
        const l = e.target;
        l.setStyle({
          weight: 2,
          color: "#064E3B",
          dashArray: "",
          fillOpacity: 0.7,
        });
        l.bringToFront();
      },
      mouseout: (e) => {
        const l = e.target;
        l.setStyle(getCountryStyle(feature));
      },
      click: () => {
        router.push(`/en/countries/${slug}`);
      },
    });
  };

  return (
    <div className="relative w-full h-[calc(100vh-200px)] min-h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 z-0">
      <MapFilters filters={filters} setFilters={setFilters} />
      
      <MapContainer 
        center={[2.0, 20.0]} 
        zoom={3} 
        scrollWheelZoom={true} 
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {countriesData && filters.layers.countries && (
          <GeoJSON 
            data={countriesData} 
            style={getCountryStyle}
            onEachFeature={onEachCountry}
          />
        )}

        <IncidentMarkers filters={filters} />
        <ShippingRoutes filters={filters} />
      </MapContainer>

      <MapLegend />
    </div>
  );
}
