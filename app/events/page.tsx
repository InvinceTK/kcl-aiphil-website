import type { Metadata } from 'next'
import Image from 'next/image'
import { getEvents } from '@/lib/content'
import StackedBand from '@/components/StackedBand/StackedBand'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import EventFilter from '@/components/EventFilter/EventFilter'
import styles from './events.module.css'

export const metadata: Metadata = {
  title: 'Events — AIΦ',
  description:
    "Debates, workshops, panels and socials from the King's AI and Philosophy Society.",
}

export default function EventsPage() {
  const events = getEvents()

  return (
    <>
      {/* ── Header band ─────────────────────────────────────── */}
      <section className={styles.headerSection} aria-label="Events page header">
        {/* Background photo: Guys Campus */}
        <div className={styles.photoWrap} aria-hidden="true">
          <Image
            src="/images/events/guys-campus.jpg"
            alt=""
            fill
            className={styles.photo}
            priority
            sizes="100vw"
          />
          <div className={styles.photoOverlay} />
        </div>

        <div className={styles.bandWrap} aria-hidden="true">
          <StackedBand
            word="EVENTS"
            rows={5}
            highlightRow={2}
            className={styles.band}
          />
        </div>
        <div className={styles.headerInner}>
          <SectionLabel>AIΦ events</SectionLabel>
          <h1 className={styles.headerHeadline}>Events.</h1>
          <p className={styles.headerSub}>
            Debates, workshops, panels and socials — open to all King&rsquo;s students.
          </p>
        </div>
      </section>

      {/* ── Events list ─────────────────────────────────────── */}
      <section className={styles.listSection} aria-label="Events list">
        <div className={styles.container}>
          <EventFilter events={events} />
        </div>
      </section>
    </>
  )
}
