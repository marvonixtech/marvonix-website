# Contact Form Email Setup Guide

## 📧 Gmail App Password Setup

The contact form uses SMTP to send emails directly to `marvonix.tech@gmail.com`. To enable this, you need to create a Gmail App Password.

### Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left menu
3. Under "How you sign in to Google", click **2-Step Verification**
4. Follow the prompts to set it up if you haven't already

### Step 2: Create App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
4. Enter: `MARVONIX Website`
5. Click **Generate**
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 3: Add to Environment Variables

**For Local Development:**

1. Create a `.env` file in the project root (already in .gitignore):
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your App Password (remove spaces):
   ```
   SMTP_USER=marvonix.tech@gmail.com
   SMTP_PASSWORD=abcdefghijklmnop
   ```

**For Vercel Production:**

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add two variables:
   - Name: `SMTP_USER`, Value: `marvonix.tech@gmail.com`
   - Name: `SMTP_PASSWORD`, Value: `your-16-char-app-password`
4. Click **Save**
5. Redeploy your project for changes to take effect

### Step 4: Test the Contact Form

1. Deploy your changes to Vercel
2. Go to https://marvonix.com/contact
3. Fill out the form and submit
4. Check your inbox at marvonix.tech@gmail.com
5. You should receive a formatted email with the submission

---

## 🔧 How It Works

1. User fills out contact form on website
2. Frontend validates required fields (name, email, message)
3. Frontend sends POST request to `/api/contact`
4. Vercel serverless function validates data
5. Nodemailer sends email via Gmail SMTP
6. Email arrives at marvonix.tech@gmail.com
7. User sees success message

---

## 🚨 Troubleshooting

### "Failed to send message" error

**Possible causes:**
- App password not set in Vercel environment variables
- App password has spaces (remove them)
- 2-Step Verification not enabled on Gmail
- Gmail security blocking the app

**Solutions:**
1. Verify environment variables are set in Vercel
2. Check App Password has no spaces
3. Try generating a new App Password
4. Check Gmail security settings

### Email not arriving

1. Check spam folder
2. Verify `SMTP_USER` email is correct
3. Check Vercel function logs for errors
4. Test with a different email address

### Local development not working

1. Make sure `.env` file exists
2. Verify App Password is correct
3. Check `.env` is not in version control
4. Restart dev server after adding `.env`

---

## 📊 Security Notes

- ✅ App Password is stored in environment variables (not in code)
- ✅ `.env` file is gitignored (won't be committed)
- ✅ Only POST requests accepted
- ✅ Email validation on both frontend and backend
- ✅ No data stored anywhere (email only)

---

## 📞 Contact Form Fields

**Required:**
- Name
- Email (validated with regex)
- Message

**Optional:**
- Company
- Budget

All submissions are sent directly to `marvonix.tech@gmail.com` with professional HTML formatting.

---

**Last Updated:** December 10, 2025
     setStatus('submitting');
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           name: e.target.name.value,
           email: e.target.email.value,
           company: e.target.company.value,
           budget: e.target.budget.value,
           message: e.target.message.value,
         },
         'YOUR_PUBLIC_KEY'
       );
       setStatus('success');
     } catch (error) {
       console.error(error);
       setStatus('idle');
       alert('Failed to send message');
     }
   };
   ```

**Pros:**
- ✅ No backend needed
- ✅ Free tier (200 emails/month)
- ✅ Easy setup
- ✅ Emails go to your inbox

**Cons:**
- ❌ Limited to free tier limits
- ❌ Not scalable for high volume

---

### **Option 2: Formspree (Form Backend Service)**

Formspree is a form backend that captures submissions without needing your own server.

**Steps:**

1. Go to https://formspree.io/
2. Sign up (free)
3. Create a new form
4. Get your form ID
5. Send POST requests to: `https://formspree.io/f/{YOUR_FORM_ID}`

**Example:**
```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setStatus('submitting');
  
  const formData = new FormData(e.currentTarget);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      setStatus('success');
    } else {
      throw new Error('Failed to submit');
    }
  } catch (error) {
    console.error(error);
    setStatus('idle');
    alert('Failed to send message');
  }
};
```

**Pros:**
- ✅ No backend needed
- ✅ Free
- ✅ Dashboard to see submissions
- ✅ Email notifications

**Cons:**
- ❌ Less flexible than custom backend

---

### **Option 3: Custom Backend (Advanced)**

Build your own backend API that handles form submissions.

**You would need:**
- Node.js/Express server
- Email service (Nodemailer, SendGrid, AWS SES)
- Database (optional, to store submissions)
- Hosting (Vercel, Heroku, AWS)

**This is more complex but gives you full control.**

---

## What I Recommend

For your needs, I recommend **Option 1: EmailJS** because:
1. ✅ Easiest to implement
2. ✅ No backend server needed
3. ✅ Free tier is sufficient
4. ✅ Sends real emails to your inbox
5. ✅ Takes ~10 minutes to set up

---

## Next Steps

**Tell me which option you want, and I'll implement it for you!**

Just let me know:
- Option 1 (EmailJS)
- Option 2 (Formspree)
- Option 3 (Custom Backend - need to clarify more)

Once you decide, I'll:
1. Install the package
2. Update Contact.tsx with working code
3. Add your credentials
4. Test it
5. Commit and push

---

## For Now - WhatsApp is Added ✅

The WhatsApp icon in the footer now links directly to:
```
https://wa.me/919726492494?text=Hi%20MARVONIX
```

This will open WhatsApp (or prompt user to open it) with your number pre-filled!
