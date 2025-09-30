# Deployment Guide: Next.js to Vercel

**Project**: Oxford University Racing Website Migration
**Status**: Ready for Deployment
**Target Platform**: Vercel

## 🚀 Deployment Checklist

### Prerequisites
- ✅ Next.js project built successfully (`npm run build` completed)
- ✅ Vercel CLI installed (`vercel --version` shows 48.1.0)
- ✅ Project configuration files ready (vercel.json, next.config.js)
- ✅ Domain ownership verified (oxforduniracing.com)

### Deployment Steps

#### Step 1: Login to Vercel
```bash
vercel login
```
This will open your browser for authentication. Follow the prompts to connect your Vercel account.

#### Step 2: Deploy to Production
```bash
vercel --prod
```

**Expected Output:**
```
Vercel CLI 48.1.0
? Set up and deploy "~/Library/Mobile Documents/.../OUR_website"? (Y/n) y
? Which scope should contain your project? [Team Name]
? Link to existing project? (y/N) N
? What's your project's name? oxford-university-racing
? In which directory is your code located? ./
? Want to modify these settings? (y/N) N

✅  Production: https://oxford-university-racing.vercel.app
✅  Deployed to production. Check out your deployment at:
https://oxford-university-racing.vercel.app
```

#### Step 3: Add Custom Domain
```bash
vercel domains add oxforduniracing.com
```

**Expected Output:**
```
✅  Domain oxforduniracing.com added to project oxford-university-racing
✅  DNS records configured. Please update the following records in your DNS provider:
A    @    76.76.19.61    (TTL: 300)
CNAME    www    cname.vercel-dns.com    (TTL: 300)
```

#### Step 4: Verify Deployment
```bash
# Test the deployment
curl -I https://oxford-university-racing.vercel.app
curl -I https://oxforduniracing.com
```

### DNS Configuration

#### Required DNS Records for oxforduniracing.com

1. **A Record (Root Domain)**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.19.61
   TTL: 300
   ```

2. **CNAME Record (WWW Subdomain)**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 300
   ```

### Environment Variables

If your project requires environment variables, add them via:
```bash
vercel env add VARIABLE_NAME
```

### Deployment Verification

#### Immediate Checks (Post-Deployment)
- [ ] Website loads on Vercel preview URL
- [ ] Website loads on custom domain
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] Forms functional
- [ ] Admin panel accessible at `/admin`

#### Performance Verification
- [ ] Lighthouse score > 90
- [ ] Page load time < 2 seconds
- [ ] Core Web Vitals green
- [ ] No console errors

## 🔧 Troubleshooting

### Common Issues

#### 1. Login Issues
```bash
# Clear Vercel config and re-login
vercel logout
vercel login
```

#### 2. Build Failures
```bash
# Check build locally first
npm run build

# Check for TypeScript errors
npm run type-check
```

#### 3. Domain Issues
```bash
# Check DNS propagation
dig oxforduniracing.com A
nslookup oxforduniracing.com 8.8.8.8

# Check SSL certificate
curl -I https://oxforduniracing.com
```

#### 4. Environment Variables
```bash
# List environment variables
vercel env ls

# Add missing variables
vercel env add VARIABLE_NAME
```

### Rollback Procedures

#### Quick Rollback (if needed)
```bash
# Revert to previous deployment
vercel rollback

# Check deployment history
vercel ls
```

## 📊 Monitoring & Analytics

### Post-Deployment Monitoring
- [ ] Set up uptime monitoring (recommended: https://uptimerobot.com/)
- [ ] Configure error tracking
- [ ] Set up performance monitoring
- [ ] Verify Google Analytics tracking

### Success Metrics
- **Performance**: Page load time < 2 seconds
- **Uptime**: 99.9% availability
- **SEO**: All pages indexed properly
- **User Experience**: No 404 errors

## 📞 Support Contacts

### During Deployment
- **Vercel Support**: https://vercel.com/support
- **Technical Lead**: [Your contact information]
- **Team Principal**: [Team principal contact]

### Emergency Rollback
If critical issues occur within 2 hours of deployment, consider rolling back to Squarespace.

## ✅ Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Monitor site performance and uptime
- [ ] Verify all redirects working
- [ ] Check search console for crawl errors
- [ ] Gather user feedback

### Week 1
- [ ] SEO performance analysis
- [ ] User behavior analytics review
- [ ] Performance optimization based on real usage

### Month 1
- [ ] Traffic analysis comparison
- [ ] Search ranking review
- [ ] Team adoption assessment
- [ ] Documentation updates

---
**Deployment Status**: Ready
**Estimated Deployment Time**: 15-30 minutes
**Expected Downtime**: < 1 hour (DNS propagation)

**Ready for deployment when team leadership approves.**