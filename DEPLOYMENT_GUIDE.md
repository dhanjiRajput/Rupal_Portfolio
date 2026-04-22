# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your Rupal Kidecha portfolio to Vercel, step by step.

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ GitHub account
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ All code committed to Git
- ✅ Project builds successfully locally (`npm run build`)

## 🎯 Step-by-Step Deployment

### Step 1: Prepare Your Project

1. **Update Personal Information**
   ```bash
   # Edit src/data/portfolioData.js with your real information
   ```

2. **Test the Build**
   ```bash
   npm run build
   npm run preview
   ```
   - Open `http://localhost:4173` to verify everything works

### Step 2: Push to GitHub

#### Option A: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if you haven't already
# Then authenticate
gh auth login

# Create a new repository
gh repo create rupal-portfolio --public --source=. --remote=origin

# Push your code
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

#### Option B: Using GitHub Website

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `rupal-portfolio`
4. Choose **Public** or **Private**
5. **Don't** initialize with README (you already have one)
6. Click **Create repository**
7. Follow the commands shown:

```bash
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/rupal-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. Click **"Add New..."** → **"Project"**
3. **Import your repository**
   - Find `rupal-portfolio` in the list
   - Click **Import**

4. **Configure Project**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

5. **Environment Variables** (Optional)
   - Click **"Environment Variables"**
   - Add any needed variables (e.g., `CONTACT_EMAIL`)

6. **Deploy!**
   - Click **"Deploy"**
   - Wait 2-3 minutes
   - Your site will be live at: `https://rupal-portfolio.vercel.app`

#### Option B: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - Project name: `rupal-portfolio`
   - Directory: `./`
   - Override settings? **N**

5. **Your site is live!**
   - Vercel will provide your URL

### Step 4: Custom Domain (Optional)

1. **Buy a domain** (if you don't have one)
   - Recommended: Namecheap, GoDaddy, or Google Domains

2. **Add domain in Vercel**
   - Go to your project dashboard
   - Click **Settings** → **Domains**
   - Add your domain: `rupalkidecha.com`

3. **Update DNS records**
   - Vercel will show you the DNS records to add
   - Add these records in your domain registrar's DNS settings

4. **Wait for propagation**
   - DNS changes take 24-48 hours to propagate
   - Usually faster (15-30 minutes)

### Step 5: Configure Automatic Deployments

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes to your portfolio
git add .
git commit -m "Add new project case study"
git push origin main

# Vercel will automatically deploy your changes!
```

## 🔧 Troubleshooting

### Build Fails on Vercel

1. **Check the build logs**
   - Go to your project dashboard
   - Click on the failed deployment
   - Read the error message

2. **Common issues:**
   - **Missing dependencies**: Make sure all dependencies are in package.json
   - **Wrong build command**: Should be `npm run build`
   - **Wrong output directory**: Should be `dist`

### Environment Variables Not Working

```bash
# Make sure variables are set in Vercel dashboard:
# Settings → Environment Variables → Add New

# Then redeploy:
vercel --prod
```

### Images Not Loading

1. **Check image paths** in `src/data/portfolioData.js`
2. **Make sure images are in** `public/images/`
3. **Use relative paths** starting with `/`

## 📊 Monitor Your Site

### Vercel Dashboard

- **Deployments**: View all deployments and their status
- **Analytics**: See visitor stats (requires upgrade)
- **Logs**: View build and deployment logs

### Performance Tips

1. **Optimize images** before uploading
2. **Use WebP format** for better compression
3. **Enable caching** in Vercel settings
4. **Monitor bundle size** in build output

## 🔄 Update Your Portfolio

### Adding New Projects

1. **Update data file**
   ```bash
   # Edit src/data/portfolioData.js
   # Add your new project to the projects array
   ```

2. **Add project images**
   ```bash
   # Copy images to public/images/
   ```

3. **Test locally**
   ```bash
   npm run dev
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add new project: [Project Name]"
   git push origin main
   ```

5. **Vercel auto-deploys!**

### Updating Content

```bash
# Edit any component or data file
git add .
git commit -m "Update about section"
git push origin main
# Vercel will automatically deploy
```

## 🌟 Advanced Features

### Add Analytics

1. **Google Analytics**
   ```javascript
   // Add to index.html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Vercel Analytics**
   - Install: `npm install @vercel/analytics`
   - Add to App.jsx:
     ```javascript
     import { Analytics } from '@vercel/analytics/react';
     ```

### Add Contact Form Backend

1. **Formspree** (Easy)
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action in Contact.jsx
   - Free plan available

2. **Netlify Forms** (Alternative)
   - Requires hosting on Netlify instead of Vercel

### Custom 404 Page

```javascript
// Create public/404.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>404 - Page Not Found</title>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <a href="/">Go Home</a>
</body>
</html>
```

## 📱 Test Your Deployment

1. **Desktop browsers**: Chrome, Firefox, Safari, Edge
2. **Mobile devices**: Test on actual phones
3. **Tablets**: iPad and Android tablets
4. **Different screen sizes**: Use browser dev tools

## 🎉 Success Checklist

- ✅ Site builds successfully
- ✅ All links work
- ✅ Contact form submits (test it!)
- ✅ Images load properly
- ✅ Responsive on mobile
- ✅ SEO meta tags are set
- ✅ Analytics are working
- ✅ Custom domain is configured (optional)

## 🆘 Need Help?

### Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

### Community

- [Vercel Discord](https://vercel.com/discord)
- [React Discord](https://react.dev/community)
- Stack Overflow (tag: vercel)

---

**Congratulations!** Your portfolio is now live! 🎊

For questions or issues, refer to the main [README.md](README.md) file.
