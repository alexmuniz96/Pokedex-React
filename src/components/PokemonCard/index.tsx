import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

interface PokedexCardProps {
  pokemon: PokemonDetail;
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
        <p>{pokemon.id}</p>
      </header>
      <div className={styles.cardContent}>
        <div className={styles.types}>
          {pokemon.types.map((type) => <span>{type.type.name}</span>)}
        </div>
        <div className={styles.pokemonPhoto}>
          <img src={pokemon.sprites.other?.home.front_default} alt={pokemon.name} />
        </div>
      </div>
    </div>
  )
}