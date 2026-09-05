import refrigerants from './refrigerants.json';

export interface Refrigerant {
  slug: string;
  ashraeNumber: string;
  name: string;
  type: 'CFC' | 'HCFC' | 'HFC' | 'Natural';
  gwp: number;
  odp: number;
  safetyClass: string;
  phaseOutStatus: 'Banned' | 'Phase-out' | 'Phase-down' | 'Alternative';
}

export function getAllRefrigerants(): Refrigerant[] {
  return refrigerants as Refrigerant[];
}

export function getRefrigerantBySlug(slug: string): Refrigerant | undefined {
  return (refrigerants as Refrigerant[]).find((r) => r.slug === slug);
}
