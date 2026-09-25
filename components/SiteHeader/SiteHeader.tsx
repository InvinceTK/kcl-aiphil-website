import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import styles from './SiteHeader.module.css'

const navLinks = [
  { href: '/fellowship', label: 'Fellowship' },
  { href: '/journal',    label: 'Journal' },
]

type SiteHeaderProps = {
  theme?: 'ink' | 'paper' | 'oxblood'
}

export default function SiteHeader({ theme = 'ink' }: SiteHeaderProps) {
  return (
    <header className={`${styles.header} ${styles[theme]}`} role="banner">
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="AIΦ — Home">
          <Image
            src={theme === 'paper' ? '/logo-black.png' : '/logo-white.png'}
            alt="AIΦ"
            width={72}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Site navigation">
          <ul role="list" className={styles.navList}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>{label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/join" className={styles.joinBtn}>
            Join
          </Link>
        </nav>

        {/* Mobile menu (client component) */}
        <MobileMenu />
      </div>
      <div className={styles.rule} aria-hidden="true" />
    </header>
  )
}
