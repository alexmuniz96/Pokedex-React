import styles from './styles.module.scss';
import bulbasaur from '../../images/bulbasaur.png';
import { PokemonListInterface } from '../../services/ListPokemon';
import { useNavigate } from 'react-router-dom';

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

export default function PokemonCard({ pokemon }: PokedexCardProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`)
  }

  return (
    <div onClick={handleClick} className={styles.card}>
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