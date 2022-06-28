import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import PokemonCard from '../../components/PokemonCard'
import { listPokemon, PokemonListInterface } from '../../services/ListPokemon';



export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState<PokemonListInterface[]>([]);

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