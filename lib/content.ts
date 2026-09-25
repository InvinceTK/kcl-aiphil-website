import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

const contentDir = path.join(process.cwd(), 'content')

// ── Schemas ────────────────────────────────────────────────────────────────

export const CommitteeMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  degree: z.string(),
  photo: z.string(),
})
export type CommitteeMember = z.infer<typeof CommitteeMemberSchema>

export const JournalTeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  photo: z.string(),
})
export type JournalTeamMember = z.infer<typeof JournalTeamMemberSchema>

export const EventFrontmatterSchema = z.object({
  title: z.string(),
  type: z.enum(['debate', 'workshop', 'panel', 'social']),
  date: z.string(),
  location: z.string(),
  speakers: z.array(z.string()).optional().default([]),
  signupUrl: z.string(),
})
export type EventFrontmatter = z.infer<typeof EventFrontmatterSchema>

export const IssueFrontmatterSchema = z.object({
  number: z.number(),
  title: z.string(),
  date: z.string(),
  cover: z.string(),
  pdf: z.string(),
  released: z.boolean(),
})
export type IssueFrontmatter = z.infer<typeof IssueFrontmatterSchema>

// ── Derived types ──────────────────────────────────────────────────────────

export type SiteEvent = EventFrontmatter & {
  slug: string
  body: string
}

export type Issue = IssueFrontmatter

// ── Loaders ────────────────────────────────────────────────────────────────

export async function getCommittee(): Promise<CommitteeMember[]> {
  const yaml = await import('js-yaml')
  const raw = fs.readFileSync(path.join(contentDir, 'committee.yaml'), 'utf8')
  const data = yaml.load(raw)
  return z.array(CommitteeMemberSchema).parse(data)
}

export async function getJournalTeam(): Promise<JournalTeamMember[]> {
  const yaml = await import('js-yaml')
  const raw = fs.readFileSync(path.join(contentDir, 'journal-team.yaml'), 'utf8')
  const data = yaml.load(raw)
  return z.array(JournalTeamMemberSchema).parse(data)
}

export function getEvents(): SiteEvent[] {
  const dir = path.join(contentDir, 'events')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const { data, content } = matter(raw)
    const frontmatter = EventFrontmatterSchema.parse(data)
    return { ...frontmatter, slug: file.replace('.md', ''), body: content }
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getUpcomingEvents(events: SiteEvent[]): SiteEvent[] {
  const now = new Date()
  return events.filter(e => new Date(e.date) >= now)
}

export function getPastEvents(events: SiteEvent[]): SiteEvent[] {
  const now = new Date()
  return events.filter(e => new Date(e.date) < now)
}

export function getIssues(): Issue[] {
  const dir = path.join(contentDir, 'issues')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const { data } = matter(raw)
    return IssueFrontmatterSchema.parse(data)
  }).sort((a, b) => a.number - b.number)
}
