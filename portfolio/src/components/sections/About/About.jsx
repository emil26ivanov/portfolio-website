import portrait from '../../../assets/profile.jpg'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import Fact from '../../ui/Fact/Fact.jsx'
import SectionLabel from '../../ui/SectionLabel/SectionLabel.jsx'
import styles from './About.module.css'

export default function About() {
  const { t } = useLanguage()
  const { label, photoAlt, statement, facts } = t.about

  return (
    <section id="about" className={`container ${styles.about}`}>
      <img src={portrait} alt={photoAlt} loading="lazy" className={styles.photo} />

      <div className={styles.content}>
        <div className={styles.label}>
          <SectionLabel>{label}</SectionLabel>
        </div>
        <p className={styles.statement}>{statement}</p>
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <Fact key={fact.label} {...fact} />
          ))}
        </dl>
      </div>
    </section>
  )
}
