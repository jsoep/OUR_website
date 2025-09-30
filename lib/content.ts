import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { TeamMember, NewsArticle, Sponsor, SubTeam, Page } from './types'

const contentDirectory = path.join(process.cwd(), 'content')

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getTeamMembers(): TeamMember[] {
  const teamDir = path.join(contentDirectory, 'team')
  const members: TeamMember[] = []

  if (!fs.existsSync(teamDir)) return []

  const filenames = fs.readdirSync(teamDir)
  filenames.forEach(filename => {
    if (filename.endsWith('.md')) {
      const filePath = path.join(teamDir, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      const member: TeamMember = {
        name: data.name,
        role: data.role,
        subteam: data.subteam as TeamMember['subteam'],
        image: data.image,
        email: data.email,
        linkedin: data.linkedin,
        bio: content,
        year: data.year,
        course: data.course,
        college: data.college,
        joinedYear: data.joinedYear,
        slug: filename.replace(/\.md$/, ''),
      }
      members.push(member)
    }
  })

  return members
}

export function getTeamMembersBySubteam(subteam: string): TeamMember[] {
  return getTeamMembers().filter(member => member.subteam === subteam)
}

export function getTeamMember(subteam: string, slug: string): TeamMember | null {
  try {
    const filePath = path.join(contentDirectory, 'team', `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      name: data.name,
      role: data.role,
      subteam: data.subteam as TeamMember['subteam'],
      image: data.image,
      email: data.email,
      linkedin: data.linkedin,
      bio: content,
      year: data.year,
      course: data.course,
      college: data.college,
      joinedYear: data.joinedYear,
      slug,
    }
  } catch (error) {
    return null
  }
}

export function getNewsArticles(): NewsArticle[] {
  const newsDir = path.join(contentDirectory, 'news')
  if (!fs.existsSync(newsDir)) return []

  const filenames = fs.readdirSync(newsDir)
  const articles: NewsArticle[] = []

  filenames.forEach(filename => {
    if (filename.endsWith('.md')) {
      const filePath = path.join(newsDir, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      const article: NewsArticle = {
        title: data.title,
        date: data.date,
        author: data.author,
        featuredImage: data.featuredImage,
        excerpt: data.excerpt,
        content,
        tags: data.tags || [],
        featured: data.featured || false,
        slug: filename.replace(/\.md$/, ''),
      }
      articles.push(article)
    }
  })

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNewsArticle(slug: string): NewsArticle | null {
  try {
    const filePath = path.join(contentDirectory, 'news', `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      author: data.author,
      featuredImage: data.featuredImage,
      excerpt: data.excerpt,
      content,
      tags: data.tags || [],
      featured: data.featured || false,
      slug,
    }
  } catch (error) {
    return null
  }
}

export function getFeaturedNews(limit: number = 3): NewsArticle[] {
  return getNewsArticles()
    .filter(article => article.featured)
    .slice(0, limit)
}

export function getLatestNews(limit: number = 3): NewsArticle[] {
  return getNewsArticles().slice(0, limit)
}

export function getSponsors(): Sponsor[] {
  const sponsorsDir = path.join(contentDirectory, 'sponsors')
  if (!fs.existsSync(sponsorsDir)) return []

  const filenames = fs.readdirSync(sponsorsDir)
  const sponsors: Sponsor[] = []

  filenames.forEach(filename => {
    if (filename.endsWith('.md')) {
      const filePath = path.join(sponsorsDir, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      const sponsor: Sponsor = {
        name: data.name,
        logo: data.logo,
        website: data.website,
        description: content,
        since: data.since,
        order: parseInt(data.order) || 999,
        slug: filename.replace(/\.md$/, ''),
      }
      sponsors.push(sponsor)
    }
  })

  return sponsors.sort((a, b) => {
    if (a.order !== b.order) {
      return (a.order || 999) - (b.order || 999)
    }
    return a.name.localeCompare(b.name)
  })
}

export function getSponsor(slug: string): Sponsor | null {
  try {
    const filePath = path.join(contentDirectory, 'sponsors', `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      name: data.name,
      logo: data.logo,
      website: data.website,
      description: content,
      since: data.since,
      slug,
    }
  } catch (error) {
    return null
  }
}

export function getPage(slug: string): Page | null {
  try {
    const filePath = path.join(contentDirectory, 'pages', `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const stats = fs.statSync(filePath)
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      content,
      slug,
      lastModified: stats.mtime.toISOString(),
    }
  } catch (error) {
    return null
  }
}