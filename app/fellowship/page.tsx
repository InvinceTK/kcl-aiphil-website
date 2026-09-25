import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import Gear from '@/components/Gear/Gear'
import Button from '@/components/Button/Button'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './fellowship.module.css'

export const metadata: Metadata = {
  title: 'Fellowship — AIΦ',
  description:
    'The AIΦ AI Safety Fellowship — a programme for members who want to go further into AI safety.',
}

const benefits = [
  {
    label: 'Guided reading',
    body: 'A curated curriculum through the key texts in AI safety and alignment, guided by members with research backgrounds.',
  },
  {
    label: 'Speakers and mentors',
    body: 'Access to researchers, policy advisors and professionals working at the frontier of AI safety.',
  },
  {
    label: 'Real experience',
    body: 'Opportunities to contribute to research, policy and community projects in the AI safety ecosystem.',
  },
  {
    label: 'A cohort of peers',
    body: 'Work alongside other serious King\'s students who are committed to understanding and shaping safe AI.',
  },
]

export default function FellowshipPage() {
  const { status, interestUrl } = siteConfig.fellowship
  const isOpen = status === 'open'

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="fellowship-hero-heading">
        {/* Background photo: Maughan Library */}
        <div className={styles.heroPhotoWrap} aria-hidden="true">
          <Image
            src="/images/fellowship/maughan-library.jpg"
            alt=""
            fill
            className={styles.heroPhoto}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroGear} aria-hidden="true">
          <Gear size={520} teeth={11} color="currentColor" scrollRotate />
        </div>
        <div className={styles.heroInner}>
          <SectionLabel>AIΦ Fellowship</SectionLabel>
          <h1 id="fellowship-hero-heading" className={styles.heroHeadline}>
            The AI Safety Fellowship.
          </h1>
          <p className={styles.heroSub}>
            A programme for members who want to go further — into the research,
            the policy and the real work of making AI safe.
          </p>

          {/* Status banner */}
          <div
            className={`${styles.statusBanner} ${isOpen ? styles.statusOpen : styles.statusDev}`}
            role="status"
          >
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>
              {isOpen
                ? 'Applications are open'
                : 'In development — register your interest below'}
            </span>
          </div>

          <Button
            variant="solid"
            href={interestUrl}
            external
          >
            {isOpen ? 'Apply now' : 'Register interest'}
          </Button>
        </div>
      </section>

      {/* ── 2. What is it ───────────────────────────────────── */}
      <section className={styles.whatSection} aria-labelledby="what-heading">
        <div className={styles.container}>
          <SectionLabel>About the fellowship</SectionLabel>
          <h2 id="what-heading" className={styles.sectionHeadline}>
            What is the fellowship?
          </h2>
          <div className={styles.textColumns}>
            <p className={styles.body}>
              The AIΦ AI Safety Fellowship is a structured programme within the
              society for members who want to go beyond the events and engage
              seriously with the question of how to make AI go well.
            </p>
            <p className={styles.body}>
              It is not a course, and it does not issue certificates. It is a
              community of people doing the reading, having the hard arguments
              and building the skills to contribute — to research, to policy, or
              to the organisations working on the most important problems in
              technology today.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Who it is for ────────────────────────────────── */}
      <section className={styles.whoSection} aria-labelledby="who-heading">
        <div className={styles.container}>
          <SectionLabel>Who it is for</SectionLabel>
          <h2 id="who-heading" className={styles.sectionHeadline}>
            For members who want to go further.
          </h2>
          <p className={styles.body} style={{ maxWidth: '60ch' }}>
            The fellowship is open to all AIΦ members from any year and any
            degree. You do not need a technical background — you need curiosity,
            commitment and the willingness to engage seriously with difficult
            ideas over a sustained period.
          </p>
        </div>
      </section>

      {/* ── 4. What fellows get ─────────────────────────────── */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className={styles.container}>
          <SectionLabel>What you get</SectionLabel>
          <h2 id="benefits-heading" className={styles.sectionHeadline}>
            What fellows receive.
          </h2>
          <div className={styles.benefitsList}>
            {benefits.map((b) => (
              <div key={b.label} className={styles.benefitItem}>
                <h3 className={styles.benefitLabel}>{b.label}</h3>
                <p className={styles.benefitBody}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Structure / Timeline ─────────────────────────── */}
      <section className={styles.timelineSection} aria-labelledby="timeline-heading">
        <div className={styles.container}>
          <SectionLabel>Structure</SectionLabel>
          <h2 id="timeline-heading" className={styles.sectionHeadline}>
            How it works.
          </h2>
          <p className={styles.body} style={{ maxWidth: '60ch' }}>
            TODO: Timeline, structure and eligibility details will be confirmed
            by the committee and updated here before applications open.
          </p>
        </div>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-labelledby="fellowship-cta-heading">
        <div className={styles.ctaInner}>
          <SectionLabel>Get involved</SectionLabel>
          <h2 id="fellowship-cta-heading" className={styles.ctaHeadline}>
            {isOpen ? 'Applications are open.' : 'Register your interest.'}
          </h2>
          <p className={styles.ctaBody}>
            {isOpen
              ? 'Apply to join the AIΦ AI Safety Fellowship. Places are limited.'
              : 'The fellowship is in development. Register your interest and we\'ll let you know when applications open.'}
          </p>
          <Button variant="solid" href={interestUrl} external>
            {isOpen ? 'Apply now' : 'Register interest'}
          </Button>
        </div>
      </section>
    </>
  )
}
