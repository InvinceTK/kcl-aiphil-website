'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './StackedBand.module.css'

type StackedBandProps = {
  word: string
  rows?: number
  highlightRow?: number
  /** The lighter word that precedes the bold one on the highlight row */
  prefixWord?: string
  className?: string
}

export default function StackedBand({
  word,
  rows = 5,
  highlightRow = 2,
  prefixWord,
  className = '',
}: StackedBandProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          setRevealed(true)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.band} ${className}`}
      aria-hidden="true"
      data-revealed={revealed ? 'true' : undefined}
    >
      {Array.from({ length: rows }, (_, i) => {
        const isHighlight = i === highlightRow
        return (
          <div
            key={i}
            className={`${styles.row} ${isHighlight ? styles.highlight : styles.ghost}`}
            style={{ '--row-delay': `${i * 80}ms` } as React.CSSProperties}
          >
            {isHighlight && prefixWord ? (
              <>
                <span className={styles.prefix}>{prefixWord}</span>
                <span className={styles.bold}>{word}</span>
              </>
            ) : (
              <span>{word}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
