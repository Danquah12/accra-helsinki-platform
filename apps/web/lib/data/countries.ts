import { Country } from '@/types/country';
import countriesData from './countries.json';

const countries = countriesData as Country[];

export function getAllCountries(): Country[] {
  return countries.filter(c => c.published);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getCountriesByRegion(region: string): Country[] {
  if (region === 'All' || !region) return getAllCountries();
  return countries.filter(c => c.sub_region === region);
}
