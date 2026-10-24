import { useLanguage } from '../../../i18n/LanguageContext.js'
import { padNumber } from '../../../utils/format.js'
import SectionLabel from '../../ui/SectionLabel/SectionLabel.jsx'
import ServiceItem from '../../ui/ServiceItem/ServiceItem.jsx'
import styles from './Services.module.css'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className={`container ${styles.services}`}>
      <SectionLabel>{t.services.label}</SectionLabel>

      <ul className={styles.grid}>
        {t.services.items.map((service, index) => (
          <ServiceItem key={index} number={padNumber(index + 1)} {...service} />
        ))}
      </ul>
    </section>
  )
}
