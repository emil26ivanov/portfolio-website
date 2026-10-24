import styles from './ServiceItem.module.css'

export default function ServiceItem({ number, title, description }) {
  return (
    <li className={styles.item}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  )
}
