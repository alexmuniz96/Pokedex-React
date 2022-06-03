import styles from './styles.module.scss'
import { ReactComponent as Logo } from '../../svgs/logo-pokedex.svg'
import { ReactComponent as Search } from '../../svgs/search-icon.svg'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <picture><Logo /></picture>
        <form>
          <div className={styles.contentForm}>
            <input placeholder={`Busque pelo nome`} />
            <picture><Search /></picture>
          </div>
        </form>
      </div>
    </header >
  )
}