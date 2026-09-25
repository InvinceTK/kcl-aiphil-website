'use client'

import { useRef } from 'react'
import styles from './Ticker.module.css'

type TickerProps = {
  words: string[]
  separator?: string
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

export default function Ticker({
  words,
  separator = '·',
  speed = 40,
  direction = 'left',
  className = '',
}: TickerProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const text = words.join(` ${separator} `) + ` ${separator} `

  // Duplicate content for seamless loop
  const content = text + text

  return (
    <div
      className={`${styles.ticker} ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className={styles.track}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
        onMouseEnter={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
        }}
        onMouseLeave={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
        }}
        onFocus={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
        }}
        onBlur={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
        }}
      >
        <span className={styles.text}>{content}</span>
        <span className={styles.text} aria-hidden="true">{content}</span>
      </div>
    </div>
  )
}
