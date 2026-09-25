import Link from 'next/link'
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'solid' | 'outline'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  external?: boolean
}

export default function Button({
  variant = 'solid',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  external = false,
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
