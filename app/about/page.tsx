import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import { getCommittee } from '@/lib/content'
import Gear from '@/components/Gear/Gear'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import StatBlock from '@/components/StatBlock/StatBlock'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About — AIΦ',
  description:
    "Learn about the King's Artificial Intelligence and Philosophy Society — who we are, what we do, and why it matters.",
}

const fields = [
  {
    index: '01',
    name: 'Law',
    question:
      'How do we regulate systems that make decisions no single person fully understands?',
  },
  {
    index: '02',
    name: 'Politics',
    question:
      'Who controls the infrastructure of intelligence, and who gets left out?',
  },
  {
    index: '03',
    name: 'Economics',
    question:
      'What does it mean for work, value and ownership when machines can do what humans can?',
  },
  {
    index: '04',
    name: 'Art & Culture',
    question:
      'If machines can create, what does creativity mean — and who does it belong to?',
  },
  {
    index: '05',
    name: 'History',
    question:
      'Every technological revolution has been misread in the moment. How do we read this one better?',
  },
]

const objectives = [
  {
    number: '01',
    title: 'Provoke critical discussion',
    body: 'We run debates, panels, workshops and social events where students from every discipline can interrogate how AI is entering society — not as enthusiasts or critics, but as serious thinkers.',
  },
  {
    number: '02',
    title: 'Build a pathway into AI safety',
    body: 'Through our AI Safety Fellowship, we give motivated members the guidance, reading and real experience to pursue a career at the frontier of one of the most consequential fields of our time.',
  },
]

export default function AboutPage() {
  const committee = getCommittee()

  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="about-hero-heading">
        <div className={styles.frameL} aria-hidden="true" />
        <div className={styles.frameR} aria-hidden="true" />

        <div className={styles.heroInner}>
          <SectionLabel>About AIΦ</SectionLabel>
          <h1 id="about-hero-heading" className={styles.heroHeadline}>
            Thinking seriously<br />about the machines<br />we&rsquo;ll live with.
          </h1>
          <p className={styles.heroSub}>
            {siteConfig.fullName}
          </p>
        </div>

        <div className={styles.heroGear} aria-hidden="true">
          <Gear size={600} teeth={11} color="currentColor" scrollRotate />
        </div>
      </section>

      {/* ── 2. Who we are ─────────────────────────────────────── */}
      <section className={styles.whoSection} aria-labelledby="who-heading">
        <div className={styles.container}>
          <SectionLabel>Who we are</SectionLabel>
          <h2 id="who-heading" className={styles.whoHeadline}>
            A student-led forum at the intersection of AI and philosophy.
          </h2>
          <div className={styles.whoColumns}>
            <p className={styles.whoBody}>
              AIΦ is a society for students who take AI seriously — not as a
              technology story, but as a philosophical one. We sit at the
              intersection of machine intelligence and the oldest questions in
              philosophy: about knowledge, agency, ethics and what it means to
              be human.
            </p>
            <p className={styles.whoBody}>
              We welcome students from every discipline. You do not need a
              background in computer science or philosophy — you need curiosity
              and the willingness to argue. As the new generation, we&rsquo;re the
              ones who will have to live alongside AI. We think we ought to
              have a say in how that goes.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Where we see AI ────────────────────────────────── */}
      <section className={styles.fieldsSection} aria-labelledby="fields-heading">
        <div className={styles.container}>
          <SectionLabel>The five fields</SectionLabel>
          <h2 id="fields-heading" className={styles.fieldsHeadline}>
            Where we see AI.
          </h2>
          <ol className={styles.fieldList} aria-label="Five fields of inquiry">
            {fields.map((f) => (
              <li key={f.index} className={styles.fieldItem}>
                <span className={styles.fieldIndex} aria-hidden="true">{f.index}</span>
                <div className={styles.fieldText}>
                  <p className={styles.fieldName}>{f.name}</p>
                  <p className={styles.fieldQuestion}>{f.question}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4. Two objectives ─────────────────────────────────── */}
      <section className={styles.objectivesSection} aria-labelledby="objectives-heading">
        <div className={styles.container}>
          <SectionLabel>Our objectives</SectionLabel>
          <h2 id="objectives-heading" className={styles.objectivesHeadline}>
            Two things we set out to do.
          </h2>
          <div className={styles.objectivesGrid}>
            {objectives.map((obj) => (
              <div key={obj.number} className={styles.objectiveCard}>
                <p className={styles.objectiveNumber} aria-hidden="true">{obj.number}</p>
                <h3 className={styles.objectiveTitle}>{obj.title}</h3>
                <p className={styles.objectiveBody}>{obj.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Committee ──────────────────────────────────────── */}
      <section className={styles.teamSection} aria-labelledby="team-heading">
        <div className={styles.container}>
          <SectionLabel>The team</SectionLabel>
          <h2 id="team-heading" className={styles.teamHeadline}>
            Meet the committee.
          </h2>
          <div className={styles.teamGrid}>
            {committee.map((member) => (
              <div key={member.role} className={styles.teamCard}>
                <div className={styles.teamPhoto} aria-hidden="true">
                  {member.photo && !member.photo.startsWith('TODO') ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={styles.teamImg}
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  ) : (
                    <span className={styles.teamInitial}>
                      {member.name.startsWith('TODO') ? '?' : member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamName}>{member.name.startsWith('TODO') ? 'TODO: Name' : member.name}</p>
                <p className={styles.teamDegree}>{member.degree.startsWith('TODO') ? '' : member.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Achievements ───────────────────────────────────── */}
      <section className={styles.achievementsSection} aria-labelledby="achievements-heading">
        <div className={styles.container}>
          <SectionLabel>Achievements</SectionLabel>
          <h2 id="achievements-heading" className={styles.achievementsHeadline}>
            What we&rsquo;ve built so far.
          </h2>
          <div className={styles.achievementsGrid}>
            <StatBlock value={siteConfig.stats.award} label="KCL award" />
            <StatBlock value={siteConfig.stats.attendance} label="Average event attendance" />
            <StatBlock value={siteConfig.stats.programmes} label="New student programmes" />
          </div>
        </div>
      </section>
    </>
  )
}
