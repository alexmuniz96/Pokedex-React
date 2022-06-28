import styles from './styles.module.scss'
import bulbasaur from '../../images/bulbasaur.png'
import { PokemonListInterface } from '../../services/ListPokemon'

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

export default function PokemonCard({ pokemon }: PokedexCardProps) {
  return (
    <div className={styles.card}>
      <header>
        <h2>{pokemon.name}</h2>
        <p>#001</p>
      </header>
      <div className={styles.cardContent}>
        <div className={styles.types}>
          <span>Grass</span>
          <span>Poison</span>
        </div>
        <div className={styles.pokemonPhoto}>
          <img src={bulbasaur} alt="bulbasaur" />
        </div>
      </div>
    </div>
  )
}