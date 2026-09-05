export interface Country {
  name: string;
  name_fr: string;
  slug: string;
  iso_alpha2: string;
  iso_alpha3: string;
  region: string;
  sub_region: string;
  capital: string;
  population: number;
  gdp_per_capita: number;
  flag_emoji: string;
  map_coordinates: { lat: number; lng: number };
  recycling_capacity_score: number;
  enforcement_score: number;
  meps_status: string;
  refrigerant_regulations: string;
  ewaste_legislation: string;
  basel_ratified: string | null;
  bamako_ratified: string | null;
  montreal_ratified: string | null;
  kigali_ratified: string | null;
  overview_en: string;
  overview_fr: string;
  published: boolean;
}

export interface CountryProfile extends Country {
  description?: string;
  keyIssues?: string[];
  dumpingIncidents?: number;
  ewasteVolume?: number;
  treatiesSigned?: string[];
}

export interface CountryComparison {
  countries: CountryProfile[];
  metrics: {
    ewasteVolume: number[];
    dumpingIncidents: number[];
  };
}
