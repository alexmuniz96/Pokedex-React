import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as Logo } from '../../svgs/logo-pokedex.svg'
import { ReactComponent as Search } from '../../svgs/search-icon.svg'

export default function Header() {

  const [headerChange, setHeaderChange] = useState(false);

  useEffect(() => {

    function changeHeader() {
      if (window.scrollY >= 70) {
        setHeaderChange(true)
      } else {
        setHeaderChange(false)
      }
    }

    window.addEventListener('scroll', changeHeader);
    return () => window.removeEventListener('scroll', changeHeader);
  }, [])

  return (
    <header

      className={`${styles.headerContainer} ${headerChange ? styles.active : ''}`}
    >
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