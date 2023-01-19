import React from 'react';
import { useCountries } from '../../hooks/countries.js';

export default function Controls() {
  const { countries } = useCountries();
  const filterMe = [...new Set(countries.map(({ continent }) => continent))];
  const continents = filterMe.filter((continent) => continent !== null);
  return (
    <div className="">
      <select>
        <option value="all">all</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}
