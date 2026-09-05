import { getAllCountries } from '@/lib/data/countries';
import CountryList from '@/components/country/CountryList';

export const metadata = {
  title: 'Countries & Data Portal | CSRTA',
  description: 'Explore environmental data, regulations, and e-waste management statistics across African nations.',
};

export default function CountriesPage() {
  const countries = getAllCountries();

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Countries & Data Portal</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Explore environmental intelligence, regulatory frameworks, and key indicators 
          for e-waste and refrigerant management across participating African nations.
        </p>
      </div>

      <CountryList initialCountries={countries} />
    </div>
  );
}
