import styles from './SectionLabel.module.css'

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`${styles.label} ${className}`}>
      {children}
    </p>
  )
}
