import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import PokemonCard from '../../components/PokemonCard'
import api from '../../services/api'
import axios from 'axios';
import { listPokemon } from '../../services/ListPokemon';

interface PokemonProps {
  name: string,
  url: string,
}

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState<PokemonProps[]>([]);

  useEffect(() => {

    api.get('/pokemon')
      .then((response) => (
        setPokemonData(response.data.results)
      ))

  }, [])
  listPokemon()
  return (
    <main className={styles.pokemonsContainer}>
      <section>
        {pokemonData.map(pokemon => (
          <p key={pokemon.name}> {pokemon.name}</p>
        ))}
        {/* <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard /> */}
      </section>
    </main>
  )
}