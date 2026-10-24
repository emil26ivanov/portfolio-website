import styles from './SectionLabel.module.css'

/** Small mono label above a section, e.g. "(About)". */
export default function SectionLabel({ children }) {
  return <p className={styles.label}>({children})</p>
}
