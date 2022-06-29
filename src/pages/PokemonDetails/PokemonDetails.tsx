import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonDetail } from '../../interfaces/PokemonDetail';
import { getPokemonDetails } from '../../services/GetPokemonDetails';


export default function PokemonDetails() {
  const { name } = useParams();
  const [selectPokemon, setSelectPokemon] = useState<PokemonDetail | undefined>(undefined);

  useEffect(() => {
    if (!name) return;

    getPokemonDetails(name).then((response) => setSelectPokemon(response))

  }, [name]);

  return (
    <h1>{JSON.stringify(selectPokemon)}</h1>
  )
}