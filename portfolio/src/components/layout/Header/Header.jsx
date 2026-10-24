import { useEffect, useState } from 'react'
import { NAME } from '../../../data/content.js'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import LanguageToggle from '../../ui/LanguageToggle/LanguageToggle.jsx'
import styles from './Header.module.css'

export default function Header() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`container ${styles.header}`}>
      <a href="#top" className={styles.logo} onClick={closeMenu}>
        {NAME}
      </a>

      <div className={styles.right}>
        <nav
          id="site-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Main"
        >
          <ul className={styles.navList}>
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageToggle />

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? t.menu.close : t.menu.open}
        </button>
      </div>
    </header>
  )
}
