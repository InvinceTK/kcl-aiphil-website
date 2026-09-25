import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import styles from './Footer.module.css'

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/events',     label: 'Events' },
  { href: '/fellowship', label: 'Fellowship' },
  { href: '/journal',    label: 'Journal' },
  { href: '/join',       label: 'Join' },
]

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.rule} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" aria-label="AIΦ — Home">
            <Image
              src="/logo-white.png"
              alt="AIΦ"
              width={64}
              height={36}
            />
          </Link>
          <p className={styles.fullName}>{siteConfig.fullName}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <ul role="list" className={styles.navList}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.navLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.socials}>
          <a
            href={siteConfig.socials.instagram}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={siteConfig.socials.linkedin}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.socials.email}`}
            className={styles.socialLink}
          >
            Email
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.kclsu}>{siteConfig.kclsuLine}</p>
        <p className={styles.copy}>© {new Date().getFullYear()} AIΦ</p>
      </div>
    </footer>
  )
}
