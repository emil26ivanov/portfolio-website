import styles from './Button.module.css'

/**
 * Link styled as a button.
 * variant: 'primary' (solid black) | 'secondary' (text link on desktop, outlined on mobile)
 */
export default function Button({ href, icon, variant = 'primary', children }) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      <span>{children}</span>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  )
}
