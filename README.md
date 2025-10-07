# Oxford University Racing Website

The official website for Oxford University Racing, Oxford's Formula Student team.

## Updating Website Content

### Using the CMS (Recommended)

Most content updates can be done through the Pages CMS without any technical knowledge:

1. **Access the CMS**
   - Visit [https://app.pagescms.org](https://app.pagescms.org)
   - Sign in with your GitHub account
   - Select the `OxfordUniRacing/OUR_website` repository
   - **Important**: Select the `main` branch to edit

2. **What You Can Edit**
   - **News Articles**: Add race reports, updates, and announcements
   - **Team Members**: Add or update team member profiles organized by subteam
   - **Sponsors**: Manage sponsor information, logos, and display order
   - **Static Pages**: Edit about, contact, and other page content

3. **Making Changes**
   - Click on the content type you want to edit
   - Create new entries or edit existing ones
   - Changes are saved directly to the `main` branch on GitHub
   - To publish changes to the live website, contact **Joshua Ampomah** to push to production

### Content Organization

Content is stored as Markdown files in the repository:

- `content/news/` - News articles and updates
- `content/team/[subteam]/` - Team member profiles by subteam
- `content/sponsors/` - Sponsor information
- `content/pages/` - Static page content

### Sponsor Display Order

Sponsors can be reordered using the "Display Position" field in the CMS:
- Position 1 appears first, Position 2 second, etc.
- The build process automatically renumbers sponsors sequentially
- Sponsors at the same position are sorted alphabetically

### Adding Images

Images should be placed in `public/images/` and organized by type:
- Team member photos: `public/images/team/`
- Sponsor logos: `public/images/sponsors/`
- News images: `public/images/news/`

### Publishing to Production

Changes made through the CMS are saved to the `main` branch. To publish these changes to the live website:

**Contact Joshua Ampomah** to push changes from `main` to the `production` branch.

## Deployment

The site is deployed on Cloudflare Pages:

**Production Branch**: `production`
- This is the live website
- Only Joshua Ampomah should push to this branch
- Changes must be tested on `main` before production deployment

**Main Branch**: `main`
- Default branch for all content updates
- Use this branch when editing through the CMS
- Changes here do not immediately affect the live site

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm package manager
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/OxfordUniRacing/OUR_website.git
   cd OUR_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file with environment variables:
   ```bash
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=e99a186a-9e95-4aef-b4d9-f5c3562c882d
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run reorder-sponsors` - Manually reorder sponsor positions

## Technical Architecture

### Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content Management**: Pages CMS with GitHub integration
- **Deployment**: Cloudflare Pages
- **Contact Forms**: Web3Forms

### Project Structure

```
OUR_website/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── layout/            # Header, footer, navigation
│   ├── home/              # Homepage components
│   ├── team/              # Team page components
│   ├── contact/           # Contact form
│   └── common/            # Shared UI components
├── content/               # Markdown content files
├── lib/                   # Utility functions and types
├── public/                # Static assets
│   ├── images/           # Images organized by type
│   └── documents/        # PDF files
├── styles/                # Global CSS
└── .pages.yml            # Pages CMS configuration
```

### Content Management System

Pages CMS configuration is stored in `.pages.yml`. Content is managed through:
- Direct GitHub integration (no OAuth server needed)
- Markdown files with frontmatter metadata
- Automated git commits for content changes

### Design System

**Brand Colors:**
- Oxford Blue: `#002147` (primary)
- Racing Red: `#FF0000` (accent)
- Silver: `#C0C0C0` (secondary)

**Typography:**
- Sans-serif: Inter
- Monospace: JetBrains Mono

### Performance

The site uses:
- Static Site Generation (SSG) for all pages
- Optimized image loading with Next.js Image component
- Minimal JavaScript bundle size
- Efficient CSS delivery with Tailwind

### Contact Form Configuration

The contact form uses Web3Forms to send submissions to our@eng.ox.ac.uk. The following environment variable is required:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=e99a186a-9e95-4aef-b4d9-f5c3562c882d
```

This is configured in Cloudflare Pages under Settings → Environment variables for both Production and Preview environments.

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run build` and `npm run type-check`
4. Push to your feature branch (creates preview deployment)
5. Create a pull request to `main`
6. After approval, merge to `main`
7. Merge `main` to `production` for production deployment

### Code Guidelines

- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS classes for styling
- Test on multiple screen sizes
- Ensure accessibility standards are met

## Support

For questions or issues:
- **Technical Issues**: Create an issue on GitHub
- **Content Updates**: Use Pages CMS or contact team leadership
- **General Inquiries**: our@eng.ox.ac.uk

## About Oxford University Racing

Oxford University Racing is Oxford's Formula Student team, designing and building single-seater racing cars to compete in international competitions. The team brings together students from across the university to gain hands-on engineering experience while competing at the highest level of student motorsport.