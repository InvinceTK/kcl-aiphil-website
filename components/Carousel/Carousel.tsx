'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import styles from './Carousel.module.css'

type CarouselProps = {
  children: React.ReactNode
  label?: string
}

export default function Carousel({ children, label }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateBounds = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setAtStart(track.scrollLeft <= 0)
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1)
  }, [])

  useEffect(() => {
    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [updateBounds])

  const scroll = (dir: 1 | -1) => {
    if (!trackRef.current) return
    const firstChild = trackRef.current.firstElementChild as HTMLElement | null
    const cardW = firstChild ? firstChild.offsetWidth + 24 : 340
    trackRef.current.scrollBy({ left: dir * cardW, behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel} role="region" aria-label={label}>
      <div
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        role="list"
        onScroll={updateBounds}
      >
        {children}
      </div>
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => scroll(-1)}
          aria-label="Previous"
          disabled={atStart}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className={styles.arrow}
          onClick={() => scroll(1)}
          aria-label="Next"
          disabled={atEnd}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
