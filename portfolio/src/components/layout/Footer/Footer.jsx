import { NAME } from '../../../data/content.js'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={`container ${styles.footer}`}>
      <p className={styles.copyright}>
        © {year} {NAME}
      </p>
      <p className={styles.credit}>{t.footer.credit}</p>
      <a href="#top" className={styles.backToTop}>
        <span className={styles.long}>{t.footer.backToTop}</span>
        <span className={styles.short}>{t.footer.backToTopShort}</span> ↑
      </a>
    </footer>
  )
}
