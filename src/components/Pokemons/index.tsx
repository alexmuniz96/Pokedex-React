import styles from './styles.module.scss'
import bulbasaur from '../../images/bulbasaur.png'

export default function Pokemons() {
  return (
    <main className={styles.pokemonsContainer}>
      <section>
        <div className={styles.card}>
          <header>
            <h2>Bulbasaur</h2>
            <p>#001</p>
          </header>
          <div className={styles.cardContent}>
            <div className={styles.types}>
              <span>Grass</span>
              <span>Poison</span>
            </div>
            <div className='pokemonPhoto'>
              <img src={bulbasaur} alt="bulbasaur" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <header>
            <h2>Bulbasaur</h2>
            <p>#001</p>
          </header>
          <div className={styles.types}>
            <span>Grass</span>
            <span>Poison</span>
          </div>
          <div className='pokemonPhoto'>
            <img src={bulbasaur} alt="bulbasaur" />
          </div>
        </div>

        <div className={styles.card}>
          <header>
            <h2>Bulbasaur</h2>
            <p>#001</p>
          </header>
          <div className='types'>
            <span>Grass</span>
            <span>Poison</span>
          </div>
          <div className='pokemonPhoto'>
            <img src={bulbasaur} alt="bulbasaur" />
          </div>
        </div>
      </section>
    </main>
  )
}