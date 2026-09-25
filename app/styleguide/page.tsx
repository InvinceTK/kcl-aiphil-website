import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Gear from '@/components/Gear/Gear'
import Ticker from '@/components/Ticker/Ticker'
import StackedBand from '@/components/StackedBand/StackedBand'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import StatBlock from '@/components/StatBlock/StatBlock'
import styles from './styleguide.module.css'

export const metadata: Metadata = {
  title: 'Styleguide',
  robots: { index: false },
}

const swatches = [
  { name: '--ink',          hex: '#0E0E0E', light: true  },
  { name: '--ink-soft',     hex: '#1C1C1C', light: true  },
  { name: '--paper',        hex: '#F1EFEA', light: false },
  { name: '--paper-dim',    hex: '#D9D6CF', light: false },
  { name: '--oxblood',      hex: '#5E1515', light: true  },
  { name: '--oxblood-deep', hex: '#3F0D0D', light: true  },
  { name: '--grey-500',     hex: '#8A8781', light: false },
]

export default function Styleguide() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>AIΦ Styleguide</h1>

        {/* ── Colour ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colour tokens</h2>
          <div className={styles.swatches}>
            {swatches.map(s => (
              <div key={s.name} className={styles.swatch} style={{ backgroundColor: s.hex }}>
                <span style={{ color: s.light ? '#F1EFEA' : '#0E0E0E' }}>
                  <code>{s.name}</code>
                  <br />
                  <code>{s.hex}</code>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Type scale ─────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Type scale — Archivo (machine)</h2>
          <div className={styles.typeStack}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em' }}>Label — 12px tracked</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)' }}>Body — 18px Archivo 400</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-h4)', fontWeight: 700 }}>H4 — 22px Archivo 700</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-h3)', fontWeight: 800, fontVariationSettings: "'wdth' 125", textTransform: 'uppercase' }}>H3 — 26–34px Archivo Wide 800</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-h2)', fontWeight: 800, fontVariationSettings: "'wdth' 125", textTransform: 'uppercase' }}>H2 — 36–64px</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-h1)', fontWeight: 900, fontVariationSettings: "'wdth' 125", textTransform: 'uppercase', lineHeight: 1 }}>H1</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Type scale — Playfair Display (classical)</h2>
          <div className={styles.typeStack}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-body)' }}>Body serif — EB Garamond fallback</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h3)' }}>Serif heading — Playfair Display</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h2)', fontStyle: 'italic' }}>Italic standfirst in Playfair</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-h1)', fontWeight: 900, lineHeight: 1 }}>Display</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>[UP] mark — EB Garamond</h2>
          <Image src="/unprompted-logo.png" alt="[UP] Unprompted journal mark" width={240} height={131} />
        </section>

        {/* ── Logos ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>AIΦ wordmark</h2>
          <div className={styles.logoRow}>
            <div className={styles.logoDark}>
              <Image src="/logo-white.png" alt="AIΦ white" width={120} height={66} />
              <p>White on ink</p>
            </div>
            <div className={styles.logoPaper}>
              <Image src="/logo-black.png" alt="AIΦ black" width={120} height={66} />
              <p>Black on paper</p>
            </div>
          </div>
        </section>

        {/* ── Buttons ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttonRow}>
            <Button variant="solid" href="#">Join now</Button>
            <Button variant="outline" href="#">See events</Button>
          </div>
          <div className={styles.buttonRowInk}>
            <Button variant="solid" href="#">Join now</Button>
            <Button variant="outline" href="#">See events</Button>
          </div>
        </section>

        {/* ── SectionLabel ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Section label</h2>
          <SectionLabel>Section III — Culture &amp; Aesthetics</SectionLabel>
        </section>

        {/* ── StatBlock ──────────────────────────────────────── */}
        <section className={styles.section} style={{ background: 'var(--ink)', padding: 'var(--space-4)' }}>
          <h2 className={styles.sectionTitle} style={{ color: 'var(--paper)' }}>Stat blocks</h2>
          <div className={styles.statRow}>
            <StatBlock value="100+" label="Average attendance" />
            <StatBlock value="2026" label="Initiative of the Year" />
            <StatBlock value="2" label="New programmes" />
          </div>
        </section>

        {/* ── Gear ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Gear SVG</h2>
          <div className={styles.gearRow}>
            <div style={{ background: 'var(--ink)', padding: '2rem', display: 'inline-block' }}>
              <Gear size={200} color="var(--paper)" teeth={11} />
            </div>
            <div style={{ background: 'var(--oxblood)', padding: '2rem', display: 'inline-block' }}>
              <Gear size={200} color="var(--paper)" teeth={11} />
            </div>
            <div style={{ background: 'var(--paper)', padding: '2rem', display: 'inline-block' }}>
              <Gear size={200} color="var(--ink)" teeth={11} />
            </div>
          </div>
        </section>

        {/* ── Ticker ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ticker</h2>
          <div style={{ background: 'var(--oxblood)', padding: '1rem 0', color: 'var(--paper)' }}>
            <Ticker words={['Debate', 'Workshops', 'Panels', 'Fellowship', 'Unprompted']} speed={30} />
          </div>
        </section>

        {/* ── StackedBand ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stacked band</h2>
          <div style={{ background: 'var(--ink)', padding: '2rem 0', overflow: 'hidden' }}>
            <StackedBand
              word="UNPROMPTED"
              rows={5}
              highlightRow={2}
              prefixWord="PROMPTED"
            />
          </div>
        </section>

        {/* ── Grain overlay note ─────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Grain overlay</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)', color: 'var(--paper-dim)' }}>
            Active on this page — fixed position, z-index 999, pointer-events none, 6% opacity, mix-blend-mode multiply.
          </p>
        </section>
      </div>
    </div>
  )
}
