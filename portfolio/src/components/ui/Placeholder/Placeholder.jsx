import styles from './Placeholder.module.css'

/** Grey box shown until a real image is added. Size it with `className`. */
export default function Placeholder({ label, className = '' }) {
  return (
    <div className={`${styles.placeholder} ${className}`} aria-hidden="true">
      {label}
    </div>
  )
}
