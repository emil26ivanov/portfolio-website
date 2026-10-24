import styles from './Fact.module.css'

/** Label/value pair. Use inside a <dl>. */
export default function Fact({ label, value }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.value}>{value}</dd>
    </div>
  )
}
