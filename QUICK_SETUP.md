# Quick Setup: Google Search Console & Analytics

## ⚡ Quick Start (5 Minutes)

### Step 1: Google Search Console
1. Go to: https://search.google.com/search-console/
2. Click "Add Property" → Enter `https://marvonix.com`
3. Choose verification method:
   - **Easiest:** Download HTML file → Put in `public/` folder → Deploy → Verify
   - **OR:** Copy meta tag → Uncomment line 43 in `index.html` → Add your code → Deploy → Verify

### Step 2: Submit Sitemap
1. In Search Console, click "Sitemaps" (left menu)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. ✅ Done! Google will start indexing your site

### Step 3: Google Analytics 4
1. Go to: https://analytics.google.com/
2. Create Property → Name: "MARVONIX Website"
3. Add Web Stream → URL: `https://marvonix.com`
4. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
5. Open `index.html` in your project
6. Replace **both** instances of `G-XXXXXXXXXX` (lines 47 & 52) with your actual ID
7. Deploy your site
8. Check "Realtime" report in GA4 to verify tracking

---

## 📋 Files Already Prepared

✅ **sitemap.xml** - Created at `/public/sitemap.xml`  
✅ **robots.txt** - Created at `/public/robots.txt`  
✅ **GA4 script** - Added to `index.html` (just needs your ID)  
✅ **Verification placeholder** - Ready in `index.html` line 43  

---

## 🎯 What to Replace

### In `index.html`:

**Line 43** (After you get verification code from Search Console):
```html
<!-- Uncomment and add your code -->
<meta name="google-site-verification" content="YOUR_CODE_HERE" />
```

**Lines 47 & 52** (After you get Measurement ID from GA4):
```html
<!-- Replace G-XXXXXXXXXX with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
...
gtag('config', 'G-YOUR_ID_HERE');
```

---

## ✅ After Setup

### Verify Everything Works:
- Visit your live site
- Check GA4 Realtime report (should show 1 active user - you!)
- Check Search Console after 2-3 days for indexed pages

### Monitor Weekly:
- **Search Console:** Click Performance → See what keywords bring traffic
- **Analytics:** See visitor count, popular pages, traffic sources

---

## 🚀 Deploy Command

After making changes:
```bash
npm run build
# Then deploy to your hosting
```

Or if using git:
```bash
git add .
git commit -m "Add Google Analytics tracking"
git push
```

---

## 📞 Need Help?

**Full detailed guide:** See `GOOGLE_SETUP_GUIDE.md`

**Common URLs:**
- Your sitemap: `https://marvonix.com/sitemap.xml`
- Search Console: https://search.google.com/search-console/
- Analytics: https://analytics.google.com/
- Test your site: https://pagespeed.web.dev/

---

**Estimated time to set up:** 10-15 minutes  
**Time until you see data:** 1-7 days
