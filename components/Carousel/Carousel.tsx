'use client'

import { useRef } from 'react'
import styles from './Carousel.module.css'

type CarouselProps = {
  children: React.ReactNode
  label?: string
}

export default function Carousel({ children, label }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    if (!trackRef.current) return
    const firstChild = trackRef.current.firstElementChild as HTMLElement | null
    const cardW = firstChild ? firstChild.offsetWidth + 24 : 340
    trackRef.current.scrollBy({ left: dir * cardW, behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel} role="region" aria-label={label}>
      <div ref={trackRef} className={styles.track}>
        {children}
      </div>
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => scroll(-1)}
          aria-label="Previous"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className={styles.arrow}
          onClick={() => scroll(1)}
          aria-label="Next"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
