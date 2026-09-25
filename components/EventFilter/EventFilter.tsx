'use client'

import { useState } from 'react'
import type { SiteEvent } from '@/lib/content'
import styles from './EventFilter.module.css'

type FilterType = 'all' | 'debate' | 'workshop' | 'panel' | 'social'

const CHIPS: { value: FilterType; label: string }[] = [
  { value: 'all',      label: 'All' },
  { value: 'debate',   label: 'Debates' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'panel',    label: 'Panels' },
  { value: 'social',   label: 'Socials' },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return {
    day:   d.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
    year:  d.getFullYear().toString(),
  }
}

function EventRow({ event }: { event: SiteEvent }) {
  const { day, month, year } = formatDate(event.date)
  return (
    <article className={styles.row} aria-label={event.title}>
      {/* Date block */}
      <div className={styles.dateBlock} aria-label={`${day} ${month} ${year}`}>
        <span className={styles.dateDay}>{day}</span>
        <span className={styles.dateMonth}>{month}</span>
      </div>

      {/* Main content */}
      <div className={styles.rowContent}>
        <div className={styles.rowMeta}>
          <span className={styles.typeLabel}>{event.type.toUpperCase()}</span>
          {event.location && (
            <span className={styles.location}>{event.location}</span>
          )}
        </div>
        <h3 className={styles.rowTitle}>{event.title}</h3>
        {event.speakers && event.speakers.length > 0 && (
          <p className={styles.speakers}>
            {event.speakers.join(' · ')}
          </p>
        )}
        {event.body && event.body.trim() && (
          <p className={styles.rowBody}>{event.body.trim()}</p>
        )}
      </div>

      {/* Sign-up link */}
      <div className={styles.rowCta}>
        <a
          href={event.signupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.signupLink}
          aria-label={`Sign up for ${event.title} (opens new tab)`}
        >
          Sign up ↗
        </a>
      </div>
    </article>
  )
}

export default function EventFilter({ events }: { events: SiteEvent[] }) {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered =
    filter === 'all' ? events : events.filter((e) => e.type === filter)

  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const upcoming = filtered.filter((e) => new Date(e.date) >= now)
  const past     = filtered.filter((e) => new Date(e.date) < now).reverse()

  return (
    <>
      {/* Filter chips */}
      <div className={styles.chips} role="group" aria-label="Filter events by type">
        {CHIPS.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.chip} ${filter === value ? styles.chipActive : ''}`}
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section aria-labelledby="upcoming-heading" className={styles.group}>
          <h2 id="upcoming-heading" className={styles.groupLabel}>Upcoming</h2>
          <div className={styles.eventList} role="list">
            {upcoming.map((e) => (
              <div key={e.slug} role="listitem">
                <EventRow event={e} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Past */}
      {past.length > 0 && (
        <section aria-labelledby="past-heading" className={styles.group}>
          <h2 id="past-heading" className={styles.groupLabel}>Past events</h2>
          <div className={styles.eventList} role="list">
            {past.map((e) => (
              <div key={e.slug} role="listitem">
                <EventRow event={e} />
              </div>
            ))}
          </div>
        </section>
      )}

      {upcoming.length === 0 && past.length === 0 && (
        <p className={styles.empty}>No events in this category yet.</p>
      )}
    </>
  )
}
