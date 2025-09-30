# DNS Migration Guide

**Domain**: oxforduniracing.com
**Current Host**: Squarespace
**New Host**: Vercel
**Estimated Downtime**: < 1 hour

## 🔍 Pre-Migration DNS Analysis

### Step 1: Document Current DNS Configuration

Before making any changes, document the current DNS setup:

```bash
# Check current DNS records
dig oxforduniracing.com A
dig www.oxforduniracing.com CNAME
dig oxforduniracing.com MX
dig oxforduniracing.com TXT

# Check DNS propagation globally
nslookup oxforduniracing.com 8.8.8.8
nslookup oxforduniracing.com 1.1.1.1
```

### Step 2: Identify Domain Registrar

```bash
# Check domain registration details
whois oxforduniracing.com
```

**Document the following:**
- Domain registrar
- Current nameservers
- Expiration date
- Administrative contacts

### Step 3: Current Squarespace Configuration

**Typical Squarespace DNS setup:**
```
A Record: @ → 198.185.159.144 (or similar Squarespace IP)
CNAME: www → ext-cust.squarespace.com
```

## 🎯 Vercel DNS Requirements

### Required DNS Records for Vercel

1. **Root domain (oxforduniracing.com)**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.19.61
   TTL: 300 (5 minutes for testing, increase to 3600 after migration)
   ```

2. **WWW subdomain (www.oxforduniracing.com)**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 300 (5 minutes for testing, increase to 3600 after migration)
   ```

### Optional Records (if applicable)

3. **Email (if using external email service)**
   ```
   Type: MX
   Name: @ (or leave blank)
   Value: [Your email provider's MX records]
   Priority: [As specified by email provider]
   ```

4. **Email verification/security**
   ```
   Type: TXT
   Name: @ (or leave blank)
   Value: [Various verification strings]
   ```

## 📋 Migration Steps

### Phase 1: Preparation (Before DNS Change)

#### 1. Set up Vercel Project
```bash
# Deploy to Vercel
vercel --prod

# Add domain to Vercel project
vercel domains add oxforduniracing.com
vercel domains add www.oxforduniracing.com
```

#### 2. Configure Vercel Domain Settings
1. Log into Vercel dashboard
2. Go to Project Settings → Domains
3. Add `oxforduniracing.com` and `www.oxforduniracing.com`
4. Note the DNS instructions provided by Vercel

#### 3. Reduce DNS TTL (24-48 hours before migration)
Temporarily reduce TTL values to 300 seconds (5 minutes) for faster propagation:
```
Current A record: TTL 3600 → TTL 300
Current CNAME record: TTL 3600 → TTL 300
```

### Phase 2: DNS Migration

#### 1. Access DNS Management
- **If using domain registrar's DNS**: Log into registrar control panel
- **If using third-party DNS**: Log into DNS provider (Cloudflare, Route53, etc.)
- **If managed by Squarespace**: Transfer DNS management first

#### 2. Update DNS Records

**Order of operations:**
1. Update A record for root domain first
2. Wait 5-10 minutes
3. Update CNAME record for www subdomain
4. Verify changes

**Detailed steps:**
```bash
# Step 1: Update A record
# Change: @ (root) from Squarespace IP to 76.76.19.61

# Step 2: Update CNAME record
# Change: www from ext-cust.squarespace.com to cname.vercel-dns.com

# Step 3: Verify changes
dig oxforduniracing.com @8.8.8.8
dig www.oxforduniracing.com @8.8.8.8
```

#### 3. Monitor Propagation

**Check propagation status:**
```bash
# Use online tools
https://dnschecker.org/#A/oxforduniracing.com
https://dnschecker.org/#CNAME/www.oxforduniracing.com

# Command line checks
for server in 8.8.8.8 1.1.1.1 208.67.222.222; do
  echo "Checking $server:"
  dig @$server oxforduniracing.com A +short
  echo "---"
done
```

## ⏱️ Migration Timeline

### T-48 hours: Preparation
- [ ] Reduce TTL values to 300 seconds
- [ ] Verify Vercel deployment is ready
- [ ] Document all current DNS records
- [ ] Prepare rollback procedures

### T-2 hours: Final Preparations
- [ ] Verify team availability
- [ ] Confirm all stakeholders notified
- [ ] Test Vercel deployment one final time
- [ ] Prepare monitoring tools

### T-0: Execute Migration
- [ ] Update A record (oxforduniracing.com)
- [ ] Wait 5 minutes
- [ ] Test root domain access
- [ ] Update CNAME record (www.oxforduniracing.com)
- [ ] Test www subdomain access
- [ ] Verify SSL certificate activation

### T+15 minutes: Verification
- [ ] Test site from multiple locations
- [ ] Verify all pages load correctly
- [ ] Check SSL certificate validity
- [ ] Monitor error rates
- [ ] Verify analytics tracking

### T+1 hour: Post-Migration
- [ ] Increase TTL values back to 3600
- [ ] Update team on completion
- [ ] Begin extended monitoring period
- [ ] Document any issues

## 🚨 Troubleshooting Guide

### Common Issues & Solutions

#### 1. DNS Not Propagating
**Symptoms**: Old site still loads after DNS change
**Solutions**:
- Wait longer (up to 24-48 hours in worst case)
- Clear local DNS cache: `sudo dscacheutil -flushcache` (macOS)
- Check TTL values are low (300 seconds)
- Verify records are correctly entered

#### 2. SSL Certificate Issues
**Symptoms**: Browser shows "Not secure" or certificate errors
**Solutions**:
- Wait 10-15 minutes for Vercel to provision certificate
- Check domain is correctly added in Vercel dashboard
- Verify DNS records point to correct Vercel endpoints
- Contact Vercel support if persists > 1 hour

#### 3. Partial Migration (Some Users See Old Site)
**Symptoms**: Some visitors see old site, others see new
**Solutions**:
- Normal during propagation period
- Monitor with multiple DNS checkers
- Wait for full global propagation
- Consider using Cloudflare for faster propagation

#### 4. Email Stops Working
**Symptoms**: Email delivery issues after DNS change
**Solutions**:
- Verify MX records weren't accidentally modified
- Check if using Squarespace email (need to migrate)
- Update MX records to point to actual email provider
- Contact email provider for specific requirements

## 🔄 Rollback Procedures

### Quick Rollback (< 5 minutes)
If critical issues occur immediately after DNS change:

```bash
# Revert A record
# Change: @ from 76.76.19.61 back to [original Squarespace IP]

# Revert CNAME record
# Change: www from cname.vercel-dns.com back to ext-cust.squarespace.com
```

### Partial Rollback
Redirect specific problematic pages back to Squarespace:
```javascript
// In vercel.json
{
  "redirects": [
    {
      "source": "/problematic-page",
      "destination": "https://oxforduniracing.squarespace.com/problematic-page",
      "permanent": false
    }
  ]
}
```

## 📊 Monitoring & Validation

### Immediate Checks (T+0 to T+30 minutes)
- [ ] Site loads from multiple locations
- [ ] All major pages accessible
- [ ] SSL certificate valid
- [ ] No JavaScript errors in console
- [ ] Contact forms working
- [ ] CMS access functional

### Extended Monitoring (T+1 hour to T+24 hours)
- [ ] Google Analytics tracking
- [ ] Search Console crawl status
- [ ] 404 error monitoring
- [ ] Page load performance
- [ ] User feedback collection

### Tools for Monitoring
```bash
# Uptime monitoring
https://uptimerobot.com/
https://pingdom.com/

# DNS propagation
https://dnschecker.org/
https://whatsmydns.net/

# SSL certificate
https://www.ssllabs.com/ssltest/

# Performance
https://pagespeed.web.dev/
```

## 📞 Emergency Contacts

### During Migration Window
- **Domain Registrar Support**: [Contact details]
- **Vercel Support**: https://vercel.com/support
- **Team Technical Lead**: [Phone/Email]
- **Escalation Contact**: [Team Principal details]

### Support Resources
- **Vercel Documentation**: https://vercel.com/docs/concepts/projects/domains
- **DNS Troubleshooting**: https://vercel.com/docs/concepts/projects/domains/troubleshooting
- **Squarespace Migration**: https://support.squarespace.com/hc/en-us/articles/360002101888

## ✅ Post-Migration Checklist

### Day 1
- [ ] Verify site is accessible globally
- [ ] Check all redirects are working
- [ ] Monitor error rates and performance
- [ ] Validate analytics are tracking
- [ ] Confirm email is working (if applicable)

### Week 1
- [ ] SEO impact assessment
- [ ] User feedback review
- [ ] Performance optimization
- [ ] Search console validation
- [ ] Backup verification

### Month 1
- [ ] Traffic analysis comparison
- [ ] Search ranking review
- [ ] Team adoption assessment
- [ ] Documentation updates
- [ ] Lessons learned documentation

---

**Remember**: DNS changes can take up to 48 hours to fully propagate globally. Plan accordingly and maintain monitoring throughout this period.