import apiBaseUrl from './api';

export interface PokemonListInterface {
  name: string,
  url: string
}

interface ListPokemonsInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonListInterface[];
}

export async function listPokemon(): Promise<ListPokemonsInterface> {
  const response = await apiBaseUrl.get<ListPokemonsInterface>('pokemon');
  console.log(response.data)
  return response.data
}

