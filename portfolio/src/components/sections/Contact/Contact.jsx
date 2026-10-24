import { EMAIL, SOCIALS } from '../../../data/content.js'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import SectionLabel from '../../ui/SectionLabel/SectionLabel.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className={`container ${styles.contact}`}>
      <SectionLabel>{t.contact.label}</SectionLabel>

      <h2 className={styles.headline}>{t.contact.headline}</h2>

      <a href={`mailto:${EMAIL}`} className={styles.email}>
        {EMAIL}
      </a>

      <ul className={styles.socials}>
        {SOCIALS.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer" className={styles.social}>
              {social.label}
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
