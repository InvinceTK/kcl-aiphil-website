'use client'

import { useEffect, useRef } from 'react'
import styles from './Gear.module.css'

type GearProps = {
  /** Size in px (used as viewBox dimension) */
  size?: number
  color?: string
  /** How many teeth (9–12) */
  teeth?: number
  /** Slow scroll-driven rotation? */
  scrollRotate?: boolean
  className?: string
  'aria-hidden'?: boolean
}

function buildGearPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  teeth: number,
  toothWidth: number,
  toothHeight: number,
): string {
  const points: string[] = []
  const step = (2 * Math.PI) / teeth

  for (let i = 0; i < teeth; i++) {
    const angle = i * step - Math.PI / 2
    const halfW = (toothWidth / 2 / outerR) // radians approx

    // Tooth outer corners
    const a1 = angle - halfW
    const a2 = angle + halfW

    // Valley corners (slightly inset)
    const va1 = angle + step / 2 - halfW * 0.7
    const va2 = angle + step / 2 + halfW * 0.7

    const toothOuter = outerR + toothHeight

    const x = (r: number, a: number) => (cx + r * Math.cos(a)).toFixed(3)
    const y = (r: number, a: number) => (cy + r * Math.sin(a)).toFixed(3)

    if (i === 0) {
      points.push(`M ${x(outerR, a1)} ${y(outerR, a1)}`)
    } else {
      points.push(`L ${x(outerR, a1)} ${y(outerR, a1)}`)
    }

    // Rise to tooth top
    points.push(`L ${x(toothOuter, a1)} ${y(toothOuter, a1)}`)
    points.push(`L ${x(toothOuter, a2)} ${y(toothOuter, a2)}`)
    // Drop back to ring
    points.push(`L ${x(outerR, a2)} ${y(outerR, a2)}`)
    // Valley to next tooth
    points.push(`L ${x(outerR, va1)} ${y(outerR, va1)}`)
    points.push(`L ${x(outerR, va2)} ${y(outerR, va2)}`)
  }

  points.push('Z')
  return points.join(' ')
}

export default function Gear({
  size = 600,
  color = 'currentColor',
  teeth = 11,
  scrollRotate = false,
  className = '',
  'aria-hidden': ariaHidden = true,
}: GearProps) {
  const gearRef = useRef<SVGGElement>(null)
  const rotationRef = useRef(0)

  useEffect(() => {
    if (!scrollRotate) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        rotationRef.current = window.scrollY * 0.08
        if (gearRef.current) {
          gearRef.current.setAttribute(
            'transform',
            `rotate(${rotationRef.current}, ${size / 2}, ${size / 2})`,
          )
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollRotate, size])

  const cx = size / 2
  const cy = size / 2
  const outerR = size * 0.36
  const innerR1 = size * 0.22
  const innerR2 = size * 0.12
  const toothH = size * 0.07
  const toothW = size * 0.09

  const gearPath = buildGearPath(cx, cy, outerR, innerR1, teeth, toothW, toothH)

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={`${styles.gear} ${className}`}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <g ref={gearRef}>
        {/* Outer gear ring + teeth */}
        <path d={gearPath} fill={color} />
        {/* Ring cutout (thick ring) */}
        <circle cx={cx} cy={cy} r={innerR1} fill="transparent" />
        {/* Inner hub circles */}
        <circle cx={cx} cy={cy} r={innerR1} fill="none" stroke={color} strokeWidth={size * 0.025} />
        <circle cx={cx} cy={cy} r={innerR2} fill="none" stroke={color} strokeWidth={size * 0.018} />
        <circle cx={cx} cy={cy} r={size * 0.04} fill={color} />
      </g>
    </svg>
  )
}
