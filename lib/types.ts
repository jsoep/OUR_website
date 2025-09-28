export interface TeamMember {
  name: string
  role: string
  subteam: 'leadership' | 'aerodynamics' | 'chassis' | 'powertrain' | 'electronics' | 'operations'
  image?: string
  email?: string
  linkedin?: string
  bio?: string
  year: number
  course: string
  college: string
  joinedYear: number
  slug: string
}

export interface NewsArticle {
  title: string
  date: string
  author: string
  featuredImage?: string
  excerpt: string
  content: string
  tags: string[]
  featured: boolean
  slug: string
}

export interface Sponsor {
  name: string
  logo: string
  website?: string
  description?: string
  since?: number
  order?: number
  slug: string
}

export interface SubTeam {
  teamName: string
  description: string
  leadName: string
  leadEmail: string
  responsibilities: string[]
  tools: string[]
  achievements: string[]
  slug: string
}

export interface Page {
  title: string
  content: string
  slug: string
  lastModified: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    instagram: string
    linkedin: string
  }
}

export interface NavigationItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  children?: NavigationItem[]
}

export interface CarSpec {
  year: number
  name: string
  engine: string
  power: string
  weight: string
  topSpeed: string
  zeroToSixty: string
  images: string[]
  description: string
}