import { checkError, client } from './client.js';

export async function fetchCountries() {
  const res = await client.from('countries').select('*');
  return checkError(res);
}
