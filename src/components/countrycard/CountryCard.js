import React from 'react';

export default function CountryCard(country) {
  return (
    <div className="c-card">
      <h2>{country.name}</h2>
      <h4>{country.local_name}</h4>
      <img src={`https://flagcdn.com/w320/${country.iso2.toLowerCase()}.png`} />
    </div>
  );
}
