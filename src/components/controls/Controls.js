import React from 'react';

export default function Controls({ countries, setTheseCountries }) {
  const filterMe = [...new Set(countries.map(({ continent }) => continent))];
  const continents = filterMe.filter((continent) => continent !== null);

  const handleChange = (event) => {
    const filtered = countries.filter(
      ({ continent }) => continent === event.target.value || continent === 'all'
    );
    setTheseCountries(filtered);
  };

  return (
    <div className="">
      <select onChange={handleChange}>
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
