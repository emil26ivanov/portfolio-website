import { getProjects } from '../../../data/content.js'
import { useLanguage } from '../../../i18n/LanguageContext.js'
import { padNumber } from '../../../utils/format.js'
import ProjectItem from '../../ui/ProjectItem/ProjectItem.jsx'
import styles from './Work.module.css'

export default function Work() {
  const { lang, t } = useLanguage()
  const projects = getProjects(lang)
  const hasProjects = projects.length > 0

  return (
    <section id="work" className={`container ${styles.work}`}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          {t.work.title}
          {hasProjects && <sup className={styles.count}>({padNumber(projects.length)})</sup>}
        </h2>
        {hasProjects && <p className={styles.hint}>{t.work.hint}</p>}
      </div>

      {hasProjects ? (
        <ol className={styles.list}>
          {projects.map(({ id, ...project }, index) => (
            <ProjectItem key={id} number={padNumber(index + 1)} {...project} />
          ))}
        </ol>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>{t.work.empty.title}</p>
          <p className={styles.emptyText}>{t.work.empty.text}</p>
          <a href="#contact" className={styles.emptyLink}>
            {t.work.empty.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </section>
  )
}
