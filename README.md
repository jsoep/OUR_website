# Oxford University Racing Website

A modern, static website for Oxford University Racing (OUR), built with Next.js 14 and Decap CMS for easy content management.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Content Management**: Decap CMS for non-technical team members to update content
- **Responsive Design**: Mobile-first approach with Oxford University branding
- **Performance Optimized**: Static generation with optimized images and assets
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Team Management**: Organized by sub-teams (Leadership, Aerodynamics, Chassis, etc.)
- **News & Updates**: Dynamic news system with featured articles
- **Sponsor Showcase**: Tiered sponsor display with partnership information

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
- **Content**: Markdown with frontmatter
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: Git with GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/oxford-racing-website.git
   cd oxford-racing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
oxford-racing-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── team/              # Team pages
│   ├── news/              # News pages
│   ├── sponsors/          # Sponsors page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── home/             # Homepage components
│   ├── team/             # Team components
│   └── common/           # Shared components
├── content/              # Markdown content
│   ├── team/            # Team member profiles
│   ├── news/            # News articles
│   ├── sponsors/        # Sponsor information
│   └── pages/           # Static pages
├── lib/                 # Utility functions
│   ├── types.ts         # TypeScript types
│   ├── utils.ts         # Helper functions
│   └── content.ts       # Content fetching
├── public/              # Static assets
│   ├── admin/          # Decap CMS admin
│   ├── images/         # Image assets
│   └── documents/      # PDF documents
└── styles/             # CSS styles
    └── globals.css     # Global styles
```

## 📝 Content Management

### Using Decap CMS

1. **Access the CMS**
   - Visit `/admin` on your deployed site
   - Login with your GitHub account (requires setup)

2. **Content Types**
   - **News Articles**: Create and manage blog posts
   - **Team Members**: Add team member profiles by sub-team
   - **Sponsors**: Manage sponsor information and logos
   - **Pages**: Edit static page content

3. **Editorial Workflow**
   - Draft → Review → Publish workflow
   - Content is stored as Markdown files in the repository
   - Changes trigger automatic site rebuilds

### Manual Content Updates

Content can also be updated directly by editing Markdown files in the `content/` directory:

- `content/news/` - News articles
- `content/team/[subteam]/` - Team member profiles
- `content/sponsors/` - Sponsor information
- `content/pages/` - Static pages

## 🎨 Design System

### Brand Colors

- **Oxford Blue**: `#002147` (Primary brand color)
- **Racing Red**: `#FF0000` (Accent color)
- **Silver**: `#C0C0C0` (Secondary accent)

### Typography

- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Monospace**: JetBrains Mono

### Components

All components follow a consistent design system with:
- Responsive breakpoints (mobile, tablet, desktop)
- Consistent spacing and typography
- Accessible color contrasts
- Hover states and animations

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push code to GitHub
   - Connect repository to Vercel
   - Deploy automatically on push to main

2. **Environment Variables**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

3. **Custom Domain**
   - Configure domain in Vercel dashboard
   - Update DNS settings

### GitHub Actions

The project includes CI/CD workflows for:
- Automated testing and linting
- Build verification
- Deployment to Vercel
- Preview deployments for pull requests

## 📊 Performance

The website is optimized for performance with:
- Static generation (SSG)
- Image optimization
- Code splitting
- Minimal JavaScript bundle
- Efficient CSS delivery

**Target Metrics:**
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s

## ♿ Accessibility

Built with accessibility in mind:
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Write meaningful commit messages
- Test on multiple devices/browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support:
- **Technical Issues**: Create an issue on GitHub
- **Content Questions**: Contact the team at content@oxforduniracing.com
- **General Inquiries**: contact@oxforduniracing.com

## 🏎️ About Oxford University Racing

Oxford University Racing is Oxford's Formula Student team, dedicated to designing and building single-seater racing cars for international competition. We bring together students from across the university to gain hands-on engineering experience while competing at the highest level of student motorsport.

---

Built with ❤️ by the Oxford University Racing team