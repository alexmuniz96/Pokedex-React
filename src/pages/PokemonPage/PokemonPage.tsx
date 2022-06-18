import styles from './styles.module.scss'
import PokemonCard from '../../components/PokemonCard'

export default function PokemonPage() {

  // useEffect(() => {
  //   api.get()
  // }, [])

  return (
    <main className={styles.pokemonsContainer}>
      <section>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </section>
    </main>
  )
}