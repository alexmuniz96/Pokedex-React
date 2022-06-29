import { PokemonDetail } from '../interfaces/PokemonDetail';
import apiBaseUrl from './api';
import { getPokemonDetails } from './GetPokemonDetails';

export interface PokemonListInterface {
  name: string,
  url: string
}

interface ListPokemonsInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonDetail[];
}

export async function listPokemon(): Promise<ListPokemonsInterface> {

  const response = await apiBaseUrl.get<ListPokemonsInterface>('pokemon');

  const promiseArr = response.data.results.map(({ name }) => getPokemonDetails(name));

  const resultsPromise = await Promise.all(promiseArr);

  return {
    ...response.data,
    results: resultsPromise
  };
}

