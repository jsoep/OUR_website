# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Oxford University Racing (OUR) website, a modern Next.js application built for the university's Formula Student team. The site uses a content management system (Pages CMS) for non-technical team members to manage content like news articles, team profiles, and sponsor information.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run reorder-sponsors` - Manually reorder sponsors (also runs automatically during build)

### Git Workflow - MANDATORY BEFORE ANY CODE CHANGES
**CRITICAL: Always follow this exact sequence for ANY code modifications:**

#### BEFORE Making Changes:
1. **Check git status**: `git status` - MUST be clean working directory
2. **Pull latest changes**: `git pull origin main` - Ensure you have latest code
3. **Verify clean state**: `git status` again to confirm clean working tree

#### AFTER Making Changes:
4. **Test locally**: Run `npm run build` and `npm run type-check` to verify no errors
5. **Check what changed**: `git status` to see modified files
6. **Review changes**: `git diff` to review what was changed
7. **Stage changes**: `git add .` to stage all changes
8. **Commit with message**: `git commit -m "Descriptive commit message"`
9. **Create feature branch and push**:
   - `git checkout -b feature/branch-name` (if not already on feature branch)
   - `git push origin feature/branch-name` - Push to feature branch for free preview
10. **Verify push**: `git status` should show "working tree clean"

#### FOR PRODUCTION DEPLOYMENT (ONLY WHEN EXPLICITLY REQUESTED):
11. **Switch to main**: `git checkout main`
12. **Merge feature**: `git merge feature/branch-name`
13. **Push to main**: `git push origin main` - This does NOT auto-deploy
14. **Manual production deploy**: Use Netlify dashboard or CLI:
    - Dashboard: Site → Deploys → "Deploy site" → Deploy from production branch
    - CLI: `netlify deploy --prod` (requires netlify CLI)

**ABSOLUTE REQUIREMENTS:**
- NEVER start work without checking `git status` first
- ALWAYS push to feature branches first (free deploy previews)
- ONLY push to main when explicitly asked to deploy to production
- If git status shows uncommitted changes, resolve them before starting new work

This ensures cost-effective development with free preview deploys and manual production releases only when needed.

### CMS Access
**Using Pages CMS:**

1. **Access online**: Visit [https://app.pagescms.org](https://app.pagescms.org)
2. **Sign in with GitHub**: Authenticate using your GitHub account
3. **Select repository**: Choose `OxfordUniRacing/OUR_website` and the branch you want to edit
4. **Edit content**: Use the intuitive interface to manage news, team members, sponsors, and pages

**Configuration:**
- CMS configuration is stored in `.pages.yml` in the repository root
- No OAuth server or authentication setup required - Pages CMS uses GitHub API directly
- Changes are committed directly to your chosen branch via GitHub


## Architecture & Tech Stack

### Framework & Core Technologies
- **Next.js 14** with App Router (not Pages Router)
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling with custom Oxford University branding
- **Pages CMS** for content management (accessible at [app.pagescms.org](https://app.pagescms.org))

### Content Management System
- Content is stored as Markdown files in the `content/` directory
- Uses gray-matter for frontmatter parsing
- Content types: news articles, team members, sponsors, static pages
- Content is organized by type and subteam for team members

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by feature
- `content/` - Markdown content files organized by type
- `lib/` - Utility functions, types, and content fetching logic
- `public/` - Static assets including images
- `styles/` - Global CSS styles
- `.pages.yml` - Pages CMS configuration file

## Content Architecture

### Team Structure
Team members are organized into subteams:
- `leadership` - Team leadership and management
- `aerodynamics` - Aerodynamics and CFD team
- `chassis` - Chassis design and manufacturing
- `powertrain` - Engine and drivetrain systems
- `electronics` - Electronics and control systems
- `operations` - Operations, logistics, and business

### Content Types
1. **Team Members** (`content/team/[subteam]/`)
   - Organized by subteam directories
   - Include profile info, bio, academic details
   - Support optional images, email, LinkedIn

2. **News Articles** (`content/news/`)
   - Support featured articles for homepage
   - Include metadata like tags, author, date
   - Can include featured images

3. **Sponsors** (`content/sponsors/`)
   - Simple system: name, logo, website, description
   - No tier system for easier management

4. **Static Pages** (`content/pages/`)
   - For content that doesn't fit other categories

## Key Files to Understand

### Content Management (`lib/content.ts`)
- `getTeamMembers()` - Fetches all team members
- `getTeamMembersBySubteam()` - Filters by subteam
- `getNewsArticles()` - Fetches news with sorting by date
- `getFeaturedNews()` - Gets featured articles for homepage
- `getSponsors()` - Fetches sponsors sorted alphabetically
- `markdownToHtml()` - Converts markdown to HTML using remark

### Type Definitions (`lib/types.ts`)
Contains comprehensive TypeScript interfaces for:
- `TeamMember` - Team member data structure
- `NewsArticle` - News article structure
- `Sponsor` - Sponsor information
- `NavigationItem` - Site navigation structure

### Utilities (`lib/utils.ts`)
- `cn()` - Tailwind class merging utility
- `formatDate()` - Formats dates for UK locale
- Helper functions for text manipulation

## Design System & Branding

### Brand Colors (Tailwind Config)
- **Oxford Blue**: `#002147` (primary brand color)
- **Racing Red**: `#FF0000` (accent color)
- **Silver**: `#C0C0C0` (secondary accent)

### Typography
- **Sans**: Inter font family (primary)
- **Mono**: JetBrains Mono (code/technical content)

### Component Patterns
Components are organized by feature area:
- `components/layout/` - Header, Footer, Navigation
- `components/home/` - Homepage-specific components
- `components/common/` - Shared UI components
- `components/team/` - Team-specific components

## Important Configuration

### Next.js Configuration (`next.config.js`)
- Configured for image optimization with external domains
- Security headers for production deployment
- URL redirects for legacy routes (e.g., /blog → /news)
- Image caching and CSP policies

### Deployment & Environment
- Deployed on Vercel with automatic builds
- Uses environment variables for site URL and analytics
- Static generation (SSG) for performance
- Image optimization enabled

## Development Guidelines

### Code Conventions
- Use TypeScript for all new code
- Follow existing component patterns in `components/`
- Use Tailwind CSS classes, avoid custom CSS unless necessary
- Leverage existing utilities in `lib/utils.ts`

### Content Guidelines
- Team member content goes in appropriate subteam directory
- News articles should include proper frontmatter metadata
- Images should be optimized and use descriptive alt text
- Follow British English spelling conventions

### State Management
- No external state management library (Redux, Zustand, etc.)
- Content is fetched server-side using the content API functions
- Static generation is preferred for performance

## Common Development Tasks

### Adding New Content Types
1. Define TypeScript interface in `lib/types.ts`
2. Add fetching functions in `lib/content.ts`
3. Create components in appropriate `components/` subdirectory
4. Add CMS configuration in `.pages.yml`

### Modifying Team Structure
- Team subteams are defined in the `getTeamMembers()` function
- Update the subteams array to add/remove team categories
- Ensure TypeScript types match in `lib/types.ts`

### Working with Images
- Place images in `public/images/`
- Use Next.js Image component for optimization
- Configure external domains in `next.config.js` if needed
- Follow the image guidelines in the content guide

## Testing & Quality

### Linting & Type Checking
- ESLint configured with Next.js best practices
- TypeScript strict mode enabled
- Run `npm run lint` and `npm run type-check` before commits

### Performance Considerations
- Static generation (SSG) is the default
- Images are optimized through Next.js Image component
- Content is cached and pre-generated at build time
- Aim for Lighthouse scores of 90+ across all metrics

### Accessibility
- Components follow WCAG 2.1 AA guidelines
- Semantic HTML structure is maintained
- Images include proper alt text
- Color contrast meets accessibility standards

## Sponsor Management

### Sponsor Ordering System
The website includes an advanced sponsor ordering system that allows precise control over sponsor display order:

#### CMS Interface
- Sponsors can be assigned positions 1-10 using the "Display Position" dropdown in the CMS
- Position 1 = first sponsor, Position 2 = second sponsor, etc.
- Multiple sponsors can have the same position (they'll be sorted alphabetically)

#### Automatic Reordering
Sponsor positions are automatically reordered during the build process to ensure clean, sequential numbering. The reordering happens automatically when:

- Running `npm run build` (via prebuild hook)
- Deploying to production (automatic during Netlify builds)
- Running `npm run reorder-sponsors` manually

**How it works:**
1. Reads all sponsor files and their current positions
2. Sorts sponsors by position, then alphabetically by name
3. Reassigns positions sequentially (1, 2, 3, 4...)
4. Updates the markdown files with new positions
5. Displays a summary of changes made

**Example Usage:**
- You have sponsors at positions 1, 1, 3, 5
- After build/deployment: positions become 1, 2, 3, 4
- The script maintains the relative order while eliminating gaps

**Manual Usage (optional):**
```bash
npm run reorder-sponsors
```

#### Display Features
- **Page-wide layout**: Sponsors display full-width with logo and content side-by-side
- **Alternating design**: Even-positioned sponsors have logo on left, odd-positioned have logo on right
- **Responsive**: On mobile devices, logos appear above text
- **Large format**: Logos are prominently sized for maximum impact

#### Technical Implementation
- Sponsor data stored in `content/sponsors/` as markdown files
- Order field in frontmatter controls display sequence
- Automatic sorting in `lib/content.ts` by order then name
- React components handle alternating layout logic