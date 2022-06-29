import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import PokemonCard from '../../components/PokemonCard'
import { listPokemon } from '../../services/ListPokemon';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState<PokemonDetail[]>([]);

  useEffect(() => {

    listPokemon().then((response) => setPokemonData(response.results))

  }, [])
  listPokemon()
  return (
    <main className={styles.pokemonsContainer}>
      <section>
        {pokemonData.map(pokemon => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </section>
    </main>
  )
}