import { LANGUAGES } from '../../../data/content.js'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import styles from './LanguageToggle.module.css'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className={styles.toggle} role="group" aria-label="Language">
      {LANGUAGES.map((code, index) => (
        <span key={code} className={styles.option}>
          {index > 0 && <span aria-hidden="true">/</span>}
          <button
            type="button"
            className={code === lang ? styles.active : undefined}
            aria-pressed={code === lang}
            onClick={() => setLang(code)}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
