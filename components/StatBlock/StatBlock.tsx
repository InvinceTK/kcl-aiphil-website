import styles from './StatBlock.module.css'

type StatBlockProps = {
  value: string
  label: string
  className?: string
}

export default function StatBlock({ value, label, className = '' }: StatBlockProps) {
  return (
    <div className={`${styles.block} ${className}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
