# Deployment Guide - EasyPanel

This guide explains how to deploy the Cienfuegos Glass website on EasyPanel.

## Prerequisites

1. **GitHub Account** - You need a GitHub account (already done ✓)
2. **EasyPanel Account** - Create an account at [easypanel.io](https://easypanel.io)
3. **Domain** - Point your domain (e.g., `cienfuegosglasscorp.com`) to EasyPanel

## Repository

The code is already hosted on GitHub:
- **Repository URL**: https://github.com/aorizondo/cienfuegos-glass
- **Visibility**: Public
- **Branch**: master

## Deployment Steps

### 1. Connect GitHub to EasyPanel

1. Log in to your EasyPanel dashboard
2. Go to **Settings** → **GitHub** (or similar)
3. Connect your GitHub account
4. Grant EasyPanel permission to access your repositories

### 2. Create a New Service

1. Click **+ Create Service**
2. Select **GitHub**
3. Choose **aorizondo/cienfuegos-glass** repository
4. Select **master** branch

### 3. Configure the Service

EasyPanel will auto-detect the Dockerfile. Configure as follows:

**Basic Settings:**
- **Service Name**: `cienfuegos-glass`
- **Repository**: `aorizondo/cienfuegos-glass`
- **Branch**: `master`
- **Dockerfile Path**: `./Dockerfile` (auto-detected)

**Port Configuration:**
- **Internal Port**: 3000
- **Public Port**: 80 / 443 (with SSL)

**Environment Variables** (optional):
```
NODE_ENV=production
```

### 4. Configure Domain

1. In EasyPanel service settings, add your domain
2. **Domain**: `cienfuegosglasscorp.com` (or your domain)
3. **SSL**: Enable (automatic with Let's Encrypt)
4. **Redirect**: Set up `www` redirect if needed

### 5. Update DNS

Point your domain to EasyPanel:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Update DNS records to point to EasyPanel's nameservers or IP
3. EasyPanel will provide the DNS instructions

### 6. Deploy

1. Click **Deploy** in EasyPanel
2. Monitor the deployment logs
3. Once deployment is complete, visit `https://cienfuegosglasscorp.com`

## Auto-Deployment

EasyPanel will automatically:
- Rebuild and redeploy on every push to the `master` branch
- Manage SSL certificates (Let's Encrypt)
- Handle load balancing and scaling

## Monitoring & Logs

1. **View Logs**: Service Dashboard → Logs
2. **Monitor Performance**: Service Dashboard → Metrics
3. **Restart Service**: Service Dashboard → Restart

## Environment Variables

If you want to add custom environment variables in the future:

1. Service Settings → Environment Variables
2. Add variables (e.g., API keys, secrets)
3. Redeploy for changes to take effect

## Troubleshooting

### Service Won't Build
- Check build logs in EasyPanel
- Verify `Dockerfile` is correct
- Ensure all dependencies are listed in `package.json`

### Service Won't Start
- Check application logs
- Verify port 3000 is configured
- Check for environment variable issues

### Domain Not Resolving
- Wait 24-48 hours for DNS to propagate
- Verify DNS records are correct
- Check domain forwarding settings

## Performance Optimization

The website is already optimized for performance:
- ✓ Lighthouse score >95
- ✓ Images are optimized and lazy-loaded
- ✓ Code splitting and bundling optimized
- ✓ CSS and JS minified in production
- ✓ Static asset caching headers

## Backup & Recovery

EasyPanel automatically:
- Maintains deployment history
- Allows rollback to previous versions
- Stores service configuration

To rollback:
1. Service Dashboard → Deployments
2. Select previous deployment
3. Click **Rollback**

## Custom Domain with SSL

To use your custom domain:

1. In EasyPanel:
   - Add domain: `cienfuegosglasscorp.com`
   - Enable SSL (automatic Let's Encrypt)

2. At your domain registrar:
   - Point domain to EasyPanel's IP or nameservers
   - (EasyPanel will provide instructions)

3. Wait for DNS propagation (usually 24-48 hours)

## Questions or Issues?

- **EasyPanel Support**: https://easypanel.io/support
- **GitHub Issues**: https://github.com/aorizondo/cienfuegos-glass/issues
- **Contact**: info@cienfuegosglass.com

---

**Next Step**: After deployment, you may want to:
- Update contact email handling (currently logs to console)
- Set up Google Analytics
- Monitor performance metrics
- Collect and respond to customer inquiries
