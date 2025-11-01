# Deployment Guide

Your portfolio is ready to deploy! Here are the **3 easiest** deployment options:

---

## Option 1: Vercel (RECOMMENDED - Easiest & Free)

Vercel is the fastest way to deploy React apps with automatic SSL and CDN.

### Steps:

1. **Install Vercel CLI** (one-time):
   ```bash
   npm install -g vercel
   ```

2. **Deploy** (from your project folder):
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Login/Sign up (it will open browser)
   - Confirm project settings (just press Enter for defaults)
   - Your site will be live in ~30 seconds!

4. **Your live URL** will be shown, something like: `https://portfolio-website-xyz.vercel.app`

5. **Optional - Custom Domain**:
   - Go to vercel.com dashboard
   - Add your custom domain (e.g., `andreipbogdan.com`)
   - Follow DNS instructions

### Future Updates:
Every time you push to GitHub, Vercel will automatically redeploy!

---

## Option 2: Netlify (Also Easy & Free)

### Method A: Drag & Drop (No CLI needed)

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Go to** https://app.netlify.com/drop

3. **Drag & drop** the `build` folder

4. **Done!** Your site is live instantly!

### Method B: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

3. **Follow prompts** and your site is live!

---

## Option 3: GitHub Pages (Free, Good for GitHub users)

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:

   Add this line at the top level (replace `YOUR_GITHUB_USERNAME`):
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio-website",
   ```

   Add these scripts to the `"scripts"` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. **Create GitHub Repository**:
   - Go to GitHub and create a new repository called `portfolio-website`
   - Don't initialize with README

4. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio-website.git
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source should be set to `gh-pages` branch
   - Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/portfolio-website`

---

## Quick Comparison

| Platform | Speed | Difficulty | Custom Domain | Auto Deploy |
|----------|-------|------------|---------------|-------------|
| **Vercel** | ⚡️ Fastest | ✅ Easiest | ✅ Free | ✅ Yes |
| **Netlify** | ⚡️ Fast | ✅ Easy | ✅ Free | ✅ Yes |
| **GitHub Pages** | 🔄 Medium | 📝 Moderate | ✅ Yes | ✅ Yes |

---

## My Recommendation

**Use Vercel** - It's literally 2 commands:
```bash
npm install -g vercel
vercel
```

That's it! Your portfolio will be live in under a minute with automatic HTTPS and global CDN.

---

## After Deployment

### Update Your Contact Info
Make sure to update these files with your real information:
- `src/components/Contact.js` - Add your real email
- `src/components/Hero.js` - Verify GitHub username
- `src/components/Projects.js` - Add real project links

### Custom Domain (Optional)
All three platforms support custom domains for free:
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add it in your hosting platform dashboard
3. Update DNS records as instructed

---

## Need Help?

If you encounter any issues:
1. Make sure the build works locally: `npm run build`
2. Check the platform's deployment logs
3. Verify all files are committed to git

Good luck with your deployment! 🚀
