import styles from './styles.module.scss'
import bulbasaur from '../../images/bulbasaur.png'
import PokemonCard from '../../components/PokemonCard'

export default function PokemonPage() {

  // useEffect(() => {
  //   api.get()
  // }, [])

  return (
    <main className={styles.pokemonsContainer}>
      <section>
        <PokemonCard />
      </section>
    </main>
  )
}