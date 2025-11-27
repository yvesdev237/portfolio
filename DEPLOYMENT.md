# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Project
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Grant Vercel access to your repositories

### Step 3: Import Your Project
1. Click "New Project"
2. Select your portfolio repository
3. Vercel will auto-detect Vite settings
4. Click "Deploy"

### Step 4: Configure Domain (Optional)
1. Go to project settings
2. Add your custom domain
3. Follow DNS configuration steps

**Your site will be live at:** `your-username.vercel.app`

---

## Netlify Deployment

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Deploy
**Option A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder

**Option B: CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## GitHub Pages Deployment

### Step 1: Update vite.config.js
```javascript
export default {
  base: '/portfolio/',
  // ... rest of config
}
```

### Step 2: Build & Deploy
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Select "main" and "/docs" or `/dist`
3. Save

---

## Environment Variables

Create a `.env.local` file for sensitive data:

```env
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=your@email.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Pre-Deployment Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Dark/Light mode works
- [ ] Cart functionality works
- [ ] Forms submit correctly
- [ ] Mobile responsive design looks good
- [ ] Performance is acceptable
- [ ] No console errors
- [ ] Analytics (if added) is configured
- [ ] Meta tags are updated

---

## Performance Optimization

### Before Deployment

```bash
# Build analysis
npm run build

# Check bundle size
# dist/assets/ files should be:
# - CSS < 50KB gzipped
# - JS < 200KB gzipped
```

### Optimization Tips

1. **Image Optimization**
   - Use compressed images
   - Use WebP format when possible
   - Lazy load images

2. **Code Splitting**
   - Already configured in Vite
   - React Router auto-splits pages

3. **Caching**
   - Vite handles long-term caching
   - Service Workers for PWA (optional)

---

## Post-Deployment

### Monitor Performance
- Check Lighthouse scores
- Monitor Core Web Vitals
- Set up analytics

### Update Content
- Add real blog posts
- Update projects
- Upload profile photos
- Replace placeholder images

### Keep It Updated
- Regularly update dependencies
- Fix bugs promptly
- Add new features
- Monitor error logs

---

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Images Don't Load
- Check image paths
- Ensure images are publicly accessible
- Use full URLs for external images

### Dark Mode Not Working
- Clear browser cache
- Check localStorage
- Restart dev server

### Cart Not Persisting
- Ensure localStorage is enabled
- Check browser console for errors
- Clear site data and refresh

---

## Need Help?

- Check [Vite Docs](https://vitejs.dev)
- Check [React Docs](https://react.dev)
- See [Vercel Docs](https://vercel.com/docs)
- Review project README.md

---

**Happy Deploying! 🎉**
