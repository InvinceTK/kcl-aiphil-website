import type { Metadata } from 'next'
import { siteConfig } from '@/site.config'
import Button from '@/components/Button/Button'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './join.module.css'

export const metadata: Metadata = {
  title: 'Join — AIΦ',
  description:
    "Join the King's Artificial Intelligence and Philosophy Society. Membership is open to all KCL students.",
}

const membershipBenefits = [
  'Access to all debates, workshops, panels and social events',
  'Eligibility for the AIΦ AI Safety Fellowship',
  'Early access to Unprompted [UP] journal issues',
  'A community of students thinking seriously about AI and philosophy',
]

const faqs = [
  {
    q: 'Who can join?',
    a: 'Any King\'s College London student, from any year and any degree. We welcome students from every discipline — you don\'t need a background in computer science or philosophy.',
  },
  {
    q: 'How much does it cost?',
    a: 'TODO: Membership cost and details from KCLSU will be added here once confirmed.',
  },
  {
    q: 'How do I get involved?',
    a: 'Join via the KCLSU link above, then come to our events. The committee will be in touch with upcoming event details after you sign up.',
  },
  {
    q: 'When do events happen?',
    a: 'We run events throughout the academic year. Check the Events page for what\'s coming up.',
  },
]

export default function JoinPage() {
  return (
    <>
      {/* ── 1. Poster hero ──────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="join-heading">
        <div className={styles.frameL} aria-hidden="true" />
        <div className={styles.frameR} aria-hidden="true" />

        <div className={styles.heroInner}>
          {/* AIΦ wordmark block */}
          <div className={styles.wordmarkBlock} aria-hidden="true">
            <span className={styles.wordmark}>AIΦ</span>
            <div className={styles.wordmarkRule} />
          </div>

          <div className={styles.heroCopy}>
            <SectionLabel>Membership</SectionLabel>
            <h1 id="join-heading" className={styles.heroHeadline}>
              Membership<br />is now open.
            </h1>
            <p className={styles.heroTagline}>
              Become part of an award-winning King&rsquo;s College society
              exploring the ethical development of AI.
            </p>
            <Button variant="solid" href={siteConfig.membershipUrl} external>
              Join on KCLSU
            </Button>
          </div>
        </div>
      </section>

      {/* ── 2. What you get ─────────────────────────────────── */}
      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <div className={styles.container}>
          <SectionLabel>Membership includes</SectionLabel>
          <h2 id="benefits-heading" className={styles.sectionHeadline}>
            What membership gets you.
          </h2>
          <ul className={styles.benefitList} aria-label="Membership benefits">
            {membershipBenefits.map((b) => (
              <li key={b} className={styles.benefitItem}>
                <span className={styles.benefitMark} aria-hidden="true">—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. FAQ ──────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className={styles.container}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-heading" className={styles.sectionHeadline}>
            Common questions.
          </h2>
          <dl className={styles.faqList}>
            {faqs.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <dt className={styles.faqQ}>{faq.q}</dt>
                <dd className={styles.faqA}>{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 4. Final CTA ────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Final join call to action">
        <div className={styles.ctaInner}>
          <p className={styles.ctaLabel}>AIΦ — {siteConfig.fullName}</p>
          <Button variant="outline" href={siteConfig.membershipUrl} external>
            Join on KCLSU
          </Button>
        </div>
      </section>
    </>
  )
}
