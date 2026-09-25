'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import styles from './SiteHeader.module.css'

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/events',     label: 'Events' },
  { href: '/fellowship', label: 'Fellowship' },
  { href: '/journal',    label: 'Journal' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        className={styles.menuBtn}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`${styles.hamburger} ${open ? styles.open : ''}`} aria-hidden="true">
          <span /><span /><span />
        </span>
      </button>

      {open && (
        <div id="mobile-menu" className={styles.mobileOverlay} role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className={styles.mobileInner}>
            <Image
              src="/logo-white.png"
              alt="AIΦ"
              width={80}
              height={44}
              className={styles.mobileLogo}
            />
            <nav>
              <ul className={styles.mobileNav} role="list">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/join"
              className={styles.mobileJoin}
              onClick={() => setOpen(false)}
            >
              Join
            </Link>
            <p className={styles.mobileSocials}>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              {' · '}
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
