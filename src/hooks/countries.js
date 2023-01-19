import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [theseCountries, setTheseCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCountries();
        setCountries(res);
        setTheseCountries(res);
      } catch (e) {
        setError('Welp, something is wrong');
      }
    };
    fetchData();
  }, []);
  return { countries, error, setTheseCountries, theseCountries };
}
