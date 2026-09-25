import Link from 'next/link'
import StackedBand from '@/components/StackedBand/StackedBand'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      {/* Decorative stacked band */}
      <div className={styles.bandWrap} aria-hidden="true">
        <StackedBand
          word="UNPROMPTED"
          rows={5}
          highlightRow={2}
          prefixWord="PROMPTED"
          className={styles.band}
        />
      </div>

      {/* Accessible content */}
      <div className={styles.content}>
        <SectionLabel>404</SectionLabel>
        <h1 className={styles.heading}>Page not found.</h1>
        <p className={styles.body}>
          We couldn&rsquo;t find what you were looking for. Maybe it never existed —
          or maybe that&rsquo;s the point.
        </p>
        <Link href="/" className={styles.homeLink}>
          Back to home
        </Link>
      </div>
    </div>
  )
}
