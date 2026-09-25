import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/site.config'
import { getCommittee } from '@/lib/content'
import Gear from '@/components/Gear/Gear'
import Ticker from '@/components/Ticker/Ticker'
import Button from '@/components/Button/Button'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import StatBlock from '@/components/StatBlock/StatBlock'
import Carousel from '@/components/Carousel/Carousel'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: `AIΦ — ${siteConfig.fullName}`,
  description: siteConfig.description,
}

const activities = [
  {
    label: 'Debates',
    description: 'Engaging thought and discussion on any dilemma in AI.',
    image: '/images/home/debate.jpeg',
  },
  {
    label: 'Workshops',
    description: 'Hands-on learning with AI tools.',
    image: '/images/home/workshop.jpeg',
  },
  {
    label: 'Panels',
    description: 'Expertise of researchers and practitioners.',
    image: '/images/home/panel.png',
  },
  {
    label: 'Socials',
    description: 'Community beyond academic discussion.',
    image: '/images/home/social.jpg',
  },
  {
    label: 'Fellowship',
    description: 'Guiding members towards real experience in AI safety.',
    image: '/images/home/fellowship.jpg',
  },
  {
    label: '[UP] Journal',
    description: 'Open to all who want to write about AI and Philosophy.',
    image: '/images/unprompted-cover.png',
  },
]

const fields = [
  ['Law',          'Moral questions raised by AI systems capable of independent decision-making.'],
  ['Politics',     'Whether regulation can keep pace with a technology that develops faster than legislation.'],
  ['Economics',    'Effects on labour markets and inequality as intelligence becomes an automatable resource.'],
  ['Art & Culture','Whether AI output can be creative, and implications for authorship.'],
  ['History',      'How this period compares to previous technological transformations.'],
] as const

export default function Home() {
  const committee = getCommittee()

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Hero">
        {/* Photo: greyscale, heavy dark overlay */}
        <div className={styles.heroPhotoWrap} aria-hidden="true">
          <Image
            src="/images/home/bush-house.jpg"
            alt=""
            fill
            className={styles.heroPhoto}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>

        {/* Vertical frame rules */}
        <div className={styles.frameL} aria-hidden="true" />
        <div className={styles.frameR} aria-hidden="true" />

        {/* Content */}
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            King&apos;s Artificial Intelligence and Philosophy Society
          </p>
          {/* TODO: headline to be approved by committee */}
          <h1 className={styles.heroHeadline}>
            Thinking about<br />
            the machines<br />
            we&apos;ll live with.
          </h1>
          <div className={styles.heroCtas}>
            <Button variant="solid" href="/join">Join now</Button>
            <Link href="/events" className={styles.heroLink}>
              See events →
            </Link>
          </div>
        </div>

        {/* Gear: rises from bottom-right, scroll-driven rotation */}
        <div className={styles.heroGear} aria-hidden="true">
          <Gear
            size={900}
            color="var(--paper)"
            teeth={11}
            scrollRotate
          />
        </div>
      </section>

      {/* ── 2. Ticker band ───────────────────────────────────── */}
      <div className={styles.tickerBand} aria-hidden="true">
        <Ticker
          words={['Debate', 'Workshops', 'Panels', 'Fellowship', 'Unprompted']}
          speed={35}
        />
      </div>

      {/* ── 3. Who are we ────────────────────────────────────── */}
      <section className={styles.whoSection} aria-labelledby="who-heading">
        <div className={styles.container}>
          <SectionLabel>Who we are</SectionLabel>

          {/* Row A: image left, text right */}
          <div className={styles.zigzagA}>
            <div className={styles.whoImgWrap} aria-hidden="true">
              <Image
                src="/images/other/athens-school.jpg"
                alt=""
                fill
                className={styles.whoImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.whoText}>
              <h2 id="who-heading" className={styles.whoHeadline}>
                A student-led forum for AI and philosophy.
              </h2>
              <p className={styles.whoBody}>
                Our generation will live alongside AI as it becomes embedded in every field and career. We aim to prepare students to engage with how AI is implemented in society — and understand the fundamentals needed to tackle it.
              </p>
            </div>
          </div>

          {/* Row B: text left, placeholder right */}
          <div className={styles.zigzagB}>
            <div className={styles.whoText}>
              <h3 className={styles.whoSubhead}>Where we see AI</h3>
              <ul className={styles.fieldList} role="list">
                {fields.map(([field, desc]) => (
                  <li key={field} className={styles.fieldItem}>
                    <span className={styles.fieldLabel}>{field}</span>
                    <span className={styles.fieldDesc}>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.whoImgWrap} aria-hidden="true">
              <Image
                src="/images/other/death-socrates.jpg"
                alt=""
                fill
                className={styles.whoImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What do we do ─────────────────────────────────── */}
      <section className={styles.whatSection} aria-labelledby="what-heading">
        <div className={styles.container}>
          <SectionLabel>What we do</SectionLabel>
          <h2 id="what-heading" className={styles.whatHeadline}>
            What do<br />we do
          </h2>
        </div>
        <Carousel label="Our activities">
          {activities.map((a) => (
            <article key={a.label} className={styles.activityCard}>
              <Image
                src={a.image}
                alt=""
                fill
                className={styles.activityImg}
                sizes="(max-width: 768px) 90vw, 33vw"
              />
              <div className={styles.activityOverlay} aria-hidden="true" />
              <p className={styles.activityName}>{a.label}</p>
              <p className={styles.activityDesc}>{a.description}</p>
            </article>
          ))}
        </Carousel>
      </section>

      {/* ── 5. The team ──────────────────────────────────────── */}
      <section className={styles.teamSection} aria-labelledby="team-heading">
        <div className={styles.container}>
          <SectionLabel>The committee</SectionLabel>
          <h2 id="team-heading" className={styles.teamHeadline}>The team</h2>
          <div className={styles.teamGrid}>
            {committee.map((member) => (
              <div key={member.role} className={styles.teamCard}>
                {/* TODO: replace with real headshot via next/image once photos arrive */}
                <div className={styles.teamPhoto} aria-hidden="true">
                  <span className={styles.teamInitial}>
                    {member.role.charAt(0)}
                  </span>
                </div>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamName}>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Proof strip ───────────────────────────────────── */}
      <section className={styles.proofStrip} aria-label="Achievements">
        <div className={styles.container}>
          <div className={styles.proofGrid}>
            <StatBlock
              value="Initiative of the Year"
              label="KCL 2026"
            />
            <StatBlock
              value="100+"
              label="Average attendance per event"
            />
            <StatBlock
              value="2"
              label="New programmes — journal & fellowship"
            />
          </div>
        </div>
      </section>

      {/* ── 7. Join CTA ──────────────────────────────────────── */}
      <section className={styles.joinSection} aria-labelledby="join-heading">
        <div className={styles.frameL} aria-hidden="true" />
        <div className={styles.frameR} aria-hidden="true" />
        <div className={styles.joinInner}>
          <p className={styles.joinEyebrow}>Membership</p>
          <h2 id="join-heading" className={styles.joinHeadline}>
            Membership<br />is now open.
          </h2>
          <p className={styles.joinTagline}>
            Become part of an award-winning King&apos;s College society focused on exploring the ethical development of AI.
          </p>
          <Button variant="solid" href="/join">Join now</Button>
        </div>
      </section>
    </>
  )
}
