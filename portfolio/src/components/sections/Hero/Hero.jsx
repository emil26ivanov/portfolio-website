import { EMAIL, TIME_ZONE } from '../../../data/content.js'
import useLocalTime from '../../../hooks/useLocalTime.js'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import photo from '../../../assets/profile.jpg'
import Button from '../../ui/Button/Button.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()
  const { headline, intro, primaryCta, secondaryCta, meta } = t.hero
  const localTime = useLocalTime(TIME_ZONE)

  const metaItems = [
    { label: meta.basedIn, value: meta.location },
    { label: meta.localTime, value: localTime },
    { label: meta.currently, value: meta.status },
  ]

  return (
    <section className={`container ${styles.hero}`}>
      <h1 className={styles.headline}>
        {headline.map((line) => (
          <span key={line} className={styles.line}>
            {line}{' '}
          </span>
        ))}
      </h1>

      <div className={styles.introRow}>
        <div className={styles.intro}>
          {/* Decorative here — the About photo carries the alt text */}
          <img src={photo} alt="" className={styles.photo} />
          <p className={styles.introText}>{intro}</p>
        </div>

        <div className={styles.ctas}>
          <Button href={`mailto:${EMAIL}`} icon="→">
            {primaryCta}
          </Button>
          <Button href="#work" icon="↓" variant="secondary">
            {secondaryCta}
          </Button>
        </div>
      </div>

      <dl className={styles.meta}>
        {metaItems.map((item) => (
          <div key={item.label} className={styles.metaItem}>
            <dt className={styles.metaLabel}>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
