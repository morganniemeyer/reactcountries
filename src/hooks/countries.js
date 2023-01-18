import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, listCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCountries();
        listCountries(res);
      } catch (e) {
        setError('Welp, something is wrong');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
