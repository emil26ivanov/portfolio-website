import Placeholder from '../Placeholder/Placeholder.jsx'
import styles from './ProjectItem.module.css'

/**
 * One project. Renders as a hover row on desktop and as a card on mobile —
 * same markup, the layout switch happens in CSS.
 */
export default function ProjectItem({ number, name, type, year, href, image }) {
  return (
    <li>
      <a href={href} className={styles.item}>
        <div className={styles.preview}>
          {image ? (
            <img src={image} alt="" className={styles.image} />
          ) : (
            <Placeholder label="[Screenshot]" className={styles.image} />
          )}
        </div>

        <span className={styles.number}>{number}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.meta}>
          <span className={styles.type}>{type}</span>
          <span className={styles.year}>{year}</span>
        </span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </a>
    </li>
  )
}
