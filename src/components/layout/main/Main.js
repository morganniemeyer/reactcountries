import React from 'react';
import { useCountries } from '../../../hooks/countries.js';
import CountryCard from '../../countrycard/CountryCard.js';

export default function Main() {
  const { countries } = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
