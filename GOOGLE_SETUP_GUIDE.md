# Google Search Console & Analytics Setup Guide

## 📍 Part 1: Google Search Console (Sitemap Submission)

### Step 1: Add Your Site to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **"Add Property"**
3. Choose **"URL prefix"** method
4. Enter: `https://marvonix.com`
5. Click **"Continue"**

### Step 2: Verify Ownership

**Method 1: HTML File Upload (Recommended)**
1. Download the verification file Google provides (e.g., `google1234567890abcdef.html`)
2. Upload it to your `public/` folder in the project
3. Deploy your site
4. Click **"Verify"** in Search Console

**Method 2: HTML Meta Tag**
1. Copy the meta tag Google provides
2. Add it to your `index.html` in the `<head>` section:
```html
<meta name="google-site-verification" content="your-verification-code" />
```
3. Deploy your site
4. Click **"Verify"**

**Method 3: DNS Verification**
1. Get the TXT record from Google
2. Add it to your domain's DNS settings (where you bought the domain)
3. Wait for DNS propagation (can take 24-48 hours)
4. Click **"Verify"**

### Step 3: Submit Your Sitemap

Once verified:

1. In Google Search Console, click **"Sitemaps"** in the left menu
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Google will start crawling your site (can take a few days to weeks)

**Your sitemap URL will be:** `https://marvonix.com/sitemap.xml`

### Step 4: Monitor Your Site

After a few days, you'll see:
- **Coverage** - Which pages are indexed
- **Performance** - Search impressions, clicks, CTR
- **Enhancements** - Structured data issues
- **Mobile Usability** - Mobile-friendliness issues

---

## 📊 Part 2: Google Analytics 4 (GA4) Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Admin"** (gear icon, bottom left)
3. Click **"Create Property"**
4. Enter:
   - **Property name:** MARVONIX Website
   - **Reporting time zone:** Your timezone
   - **Currency:** Your currency
5. Click **"Next"**
6. Fill in business details, click **"Create"**
7. Accept Terms of Service

### Step 2: Set Up Data Stream

1. Choose **"Web"** platform
2. Enter:
   - **Website URL:** `https://marvonix.com`
   - **Stream name:** MARVONIX Website
3. Click **"Create stream"**

### Step 3: Get Your Measurement ID

After creating the stream, you'll see:
- **Measurement ID:** `G-XXXXXXXXXX`

Copy this ID - you'll need it for the next step.

### Step 4: Install GA4 in Your React App

**Option A: Using react-ga4 (Recommended)**

I've already prepared the setup below - just replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Option B: Manual gtag.js**

Add this to `index.html` (I've already added this for you):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Step 5: Verify Installation

1. Visit your live site
2. In GA4, go to **Reports** → **Realtime**
3. You should see yourself as an active user
4. If not, check browser console for errors
5. Make sure ad blockers are disabled for testing

### Step 6: Set Up Key Events (Conversions)

In GA4, go to **Configure** → **Events**, then create custom events:

**Contact Form Submission:**
- Event name: `contact_form_submit`
- Trigger: When contact form is submitted

**CTA Button Clicks:**
- Event name: `cta_click`
- Parameters: `button_text`, `button_location`

**Blog Post Views:**
- Event name: `blog_post_view`
- Parameters: `post_title`, `post_slug`

---

## 🔧 Implementation Checklist

### Google Search Console
- [ ] Create Search Console property
- [ ] Verify ownership (HTML file/meta tag/DNS)
- [ ] Submit sitemap.xml
- [ ] Check coverage after 3-7 days
- [ ] Fix any indexing issues

### Google Analytics
- [ ] Create GA4 property
- [ ] Set up web data stream
- [ ] Copy Measurement ID
- [ ] Replace `G-XXXXXXXXXX` in index.html with your ID
- [ ] Deploy changes
- [ ] Verify in Realtime report
- [ ] Set up key events
- [ ] Create custom dashboard

---

## 📈 What to Monitor (Weekly)

### Search Console
- **Coverage:** Are all pages indexed?
- **Performance:** What keywords bring traffic?
- **Core Web Vitals:** Any performance issues?
- **Manual Actions:** Any penalties?

### Analytics
- **Users:** How many visitors?
- **Traffic Sources:** Where are they coming from?
- **Engagement:** Time on site, pages per session
- **Conversions:** Contact form submissions
- **Popular Pages:** Which content performs best?

---

## 🚨 Common Issues & Fixes

### Sitemap Not Detected
- Make sure `sitemap.xml` is in the `public/` folder
- Verify it's accessible at `https://marvonix.com/sitemap.xml`
- Check for XML syntax errors
- Re-submit in Search Console

### Pages Not Indexed
- Check robots.txt isn't blocking pages
- Ensure pages don't have `noindex` meta tag
- Submit individual URLs via "Request Indexing"
- Wait 1-2 weeks for Google to crawl

### GA4 Not Tracking
- Check Measurement ID is correct
- Verify script loads (check Network tab)
- Disable ad blockers
- Check console for errors
- Make sure cookies are enabled

### Low Core Web Vitals Score
- Optimize images (WebP format)
- Implement lazy loading
- Minimize JavaScript
- Use CDN for assets
- Enable compression

---

## 📞 Support Resources

- **Search Console Help:** https://support.google.com/webmasters/
- **GA4 Help:** https://support.google.com/analytics/
- **Structured Data Testing:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/

---

**Last Updated:** December 10, 2025
