import { PokemonDetail } from "../interfaces/PokemonDetail";
import apiBaseUrl from "./api";

export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const response = await apiBaseUrl.get<PokemonDetail>(`/pokemon/${name}`);
  return response.data;
}