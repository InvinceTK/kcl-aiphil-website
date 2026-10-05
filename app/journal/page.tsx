import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/site.config'
import { getJournalTeam, getIssues } from '@/lib/content'
import Carousel from '@/components/Carousel/Carousel'
import Button from '@/components/Button/Button'
import SectionLabel from '@/components/SectionLabel/SectionLabel'
import styles from './journal.module.css'

export const metadata: Metadata = {
  title: 'Journal — Unprompted [UP]',
  description: "Unprompted [UP] — the journal of AIΦ, King's College London, open to all students writing about AI and philosophy.",
}

// TODO: replace all placeholder text with real milestones from committee
const timelineMilestones = [
  {
    side: 'left' as const,
    label: 'The idea',
    body: 'TODO: How Unprompted was conceived and what it aims to do.',
    image: '/images/other/aristotle-homer.jpg',
  },
  {
    side: 'right' as const,
    label: 'Call for submissions',
    body: 'TODO: When submissions opened and what the journal asked for.',
    image: '/images/other/homer-apotheosis.jpg',
  },
  {
    side: 'left' as const,
    label: 'Editing & review',
    body: 'TODO: How the editing and peer-review process worked.',
    image: '/images/other/sappho-alcaeus.jpg',
  },
  {
    side: 'right' as const,
    label: 'Volume 1, November 2026',
    body: 'The first issue of Unprompted arrived.',
    image: '/images/other/reading-from-homer.jpg',
  },
]

export default function JournalPage() {
  const journalTeam = getJournalTeam()
  const issues = getIssues()
  const currentIssue = issues[0]

  return (
    <>
      {/* ── 1. Current issue ──────────────────────────────────── */}
      <section className={styles.currentSection} aria-labelledby="current-issue-heading">

        {/* Background photo: Somerset House, greyscale + dark overlay */}
        <div className={styles.heroPhotoWrap} aria-hidden="true">
          <Image
            src="/images/journal/somerset-house.jpeg"
            alt=""
            fill
            className={styles.heroPhoto}
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>

        {/* [UP] masthead + volume label */}
        <div className={styles.mastheadBar}>
          <div className={styles.mastheadInner}>
            <Image
              src="/unprompted-logo-transparent.png"
              alt="[UP] Unprompted"
              width={100}
              height={55}
              className={styles.upLogo}
              priority
            />
            <p className={styles.volumeLabel}>
              Volume {siteConfig.journal.currentVolume} · {siteConfig.journal.currentDate}
            </p>
          </div>
        </div>

        {/* Centered: meta → cover → button */}
        <div className={styles.currentGrid}>
          <div className={styles.currentMeta}>
            <SectionLabel>Current issue</SectionLabel>
            <h1 id="current-issue-heading" className={styles.issueTitle}>
              Issue {currentIssue?.number}: {currentIssue?.title}
            </h1>
            <p className={styles.issueSub}>Arrived</p>
          </div>

          {/* Cover — centerpiece */}
          <div className={styles.coverWrap}>
            {currentIssue?.pdf ? (
              <a
                href={currentIssue.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.coverLink}
                aria-label="Read Unprompted Issue 1 — opens PDF"
              >
                <Image
                  src="/images/journal/cover-current.jpeg"
                  alt="Unprompted Issue 1 cover"
                  fill
                  className={styles.coverImg}
                  sizes="(max-width: 768px) 80vw, 38vw"
                  priority
                />
                <div className={styles.coverReadOverlay} aria-hidden="true">
                  <span className={styles.coverReadLabel}>Read Issue 1</span>
                </div>
              </a>
            ) : (
              <div className={styles.coverPreview}>
                <Image
                  src="/images/journal/cover-current.jpeg"
                  alt="Unprompted Issue 1 cover"
                  fill
                  className={styles.coverImg}
                  sizes="(max-width: 768px) 80vw, 38vw"
                  priority
                />
              </div>
            )}
            {currentIssue?.pdf && (
              <p className={styles.coverHint} aria-hidden="true">Click to read ↗</p>
            )}
          </div>

          {/* Button fallback */}
          {currentIssue?.pdf && (
            <Button variant="outline" href={currentIssue.pdf} external>
              Read Issue 1
            </Button>
          )}
        </div>
      </section>

      {/* ── 2. What is Unprompted? (timeline) ─────────────────── */}
      <section className={styles.timelineSection} aria-labelledby="timeline-heading">
        <div className={styles.container}>
          <SectionLabel>The journal</SectionLabel>
          <h2 id="timeline-heading" className={styles.timelineHeading}>
            What is Unprompted?
          </h2>

          <div className={styles.timeline} role="list">
            {/* Vertical hairline */}
            <div className={styles.timelineLine} aria-hidden="true" />

            {timelineMilestones.map((m, i) => (
              <div key={i} className={styles.timelineEntry} role="listitem">
                {/* Left cell */}
                <div className={styles.cellL}>
                  {m.side === 'left' ? (
                    <div className={styles.entryText}>
                      <p className={styles.entryLabel}>{m.label}</p>
                      <p className={styles.entryBody}>{m.body}</p>
                    </div>
                  ) : (
                    <div className={styles.entryImg} aria-hidden="true">
                      <div className={styles.entryImgInner}>
                        <Image
                          src={m.image}
                          alt=""
                          fill
                          className={styles.entryImgPhoto}
                          sizes="280px"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Dot */}
                <div className={styles.dotCol} aria-hidden="true">
                  <span className={styles.dot} />
                </div>

                {/* Right cell */}
                <div className={styles.cellR}>
                  {m.side === 'right' ? (
                    <div className={styles.entryText}>
                      <p className={styles.entryLabel}>{m.label}</p>
                      <p className={styles.entryBody}>{m.body}</p>
                    </div>
                  ) : (
                    <div className={styles.entryImg} aria-hidden="true">
                      <div className={styles.entryImgInner}>
                        <Image
                          src={m.image}
                          alt=""
                          fill
                          className={styles.entryImgPhoto}
                          sizes="280px"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Thanks to our editors ──────────────────────────── */}
      {/* <section className={styles.editorsSection} aria-labelledby="editors-heading">
        <div className={styles.container}>
          <h2 id="editors-heading" className={styles.editorsHeading}>
            Big thanks to our editors,<br />
            reviewers and team.
          </h2>
          <div className={styles.editorsGrid}>
            {journalTeam.map((member) => (
              <div key={member.role} className={styles.editorCard}>
                <div className={styles.editorPhoto} aria-hidden="true">
                  <span className={styles.editorInitial}>
                    {member.role.charAt(0)}
                  </span>
                </div>
                <p className={styles.editorRole}>{member.role}</p>
                <p className={styles.editorName}>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── 4. More issues coming ─────────────────────────────── */}
      <section className={styles.moreSection} aria-labelledby="more-issues-heading">
        <div className={styles.container}>
          <SectionLabel>The archive</SectionLabel>
          <h2 id="more-issues-heading" className={styles.moreHeading}>
            More issues coming!
          </h2>
        </div>
        <Carousel label="All issues">
          {issues.map((issue) => (
            <div key={issue.number} className={styles.issueCard}>
              {issue.released && issue.cover ? (
                <a
                  href={issue.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.issueLink}
                  aria-label={`Issue ${issue.number}: ${issue.title} — open PDF`}
                >
                  <Image
                    src={issue.cover}
                    alt={`Issue ${issue.number}: ${issue.title} cover`}
                    fill
                    className={styles.issueCover}
                    sizes="320px"
                  />
                </a>
              ) : issue.cover ? (
                <div
                  className={styles.coverPreviewCard}
                  aria-label={`Issue ${issue.number}: coming`}
                >
                  <Image
                    src={issue.cover}
                    alt={`Issue ${issue.number} cover preview`}
                    fill
                    className={styles.issueCover}
                    sizes="320px"
                  />
                </div>
              ) : (
                <div
                  className={styles.comingCard}
                  aria-label={`Issue ${issue.number}: coming`}
                >
                  <p className={styles.comingNum}>Issue {issue.number}</p>
                  <div className={styles.comingStack} aria-hidden="true">
                    <span>COMING</span>
                    <span>COMING</span>
                    <span>COMING</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </section>

      {/* ── 5. Call for submissions ───────────────────────────── */}
      <section className={styles.submitSection} aria-labelledby="submit-heading">
        <div className={styles.submitInner}>
          <p className={styles.submitEyebrow}>Unprompted [UP]</p>
          <h2 id="submit-heading" className={styles.submitHeading}>
            Write for us.
          </h2>
          <p className={styles.submitBody}>
            Unprompted is open to all students who want to write about AI and Philosophy.
            Whether you have an essay, a reflection or a provocation, we want to hear from you.
          </p>
          {/* TODO: replace siteConfig.journal.submissionsUrl with real form link */}
          <Button variant="solid" href={siteConfig.journal.submissionsUrl} external>
            Submit to [UP]
          </Button>
        </div>
      </section>
    </>
  )
}
