# EmailJS Setup Guide for Rupal's Portfolio

This guide will help you set up EmailJS so the contact form actually sends emails to your inbox.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (you can use Google/GitHub for quick signup)
3. Verify your email address

## Step 2: Create an Email Service

1. After logging in, click on **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose a service provider:
   - **Gmail** (Recommended - Free and easy to setup)
   - **Outlook** 
   - **Mailgun** (Transactional emails)
   - Or any other service you prefer

4. For Gmail:
   - Click **"Connect"** next to Gmail
   - Authorize EmailJS to access your Gmail
   - Select which email address to send from (use rupalirajput1727@gmail.com)

5. Copy your **Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Click on **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Fill in the template details:

**Template Name:** Portfolio Contact Form

**Subject:** New Portfolio Message from {{from_name}}

**Email Body (HTML):**
```html
<html>
<head>
<style>
  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { background: linear-gradient(to right, #2563eb, #9333ea); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
  .content { background: #f9fafb; padding: 20px; border-radius: 0 0 10px 10px; }
  .field { margin-bottom: 15px; }
  .label { font-weight: bold; color: #2563eb; }
  .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #2563eb; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h2>New Message from Portfolio</h2>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">From:</div>
      <div class="value">{{from_name}} ({{from_email}})</div>
    </div>
    
    <div class="field">
      <div class="label">Subject:</div>
      <div class="value">{{subject}}</div>
    </div>
    
    <div class="field">
      <div class="label">Message:</div>
      <div class="value">{{message}}</div>
    </div>
  </div>
</div>
</body>
</html>
```

4. Click **"Save"**
5. Copy your **Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Click on your **account name** in the top right corner
2. Select **"Account"** from the dropdown
3. Copy your **Public Key** from the General tab

## Step 5: Configure Your Portfolio

1. Create a `.env` file in your project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Fill in your EmailJS credentials in the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 6: Test Your Contact Form

1. Open your portfolio in the browser
2. Go to the Contact section
3. Fill out the form with test information
4. Click "Send Message"
5. Check your email (rupalirajput1727@gmail.com) for the message

## Important Notes

### Free Plan Limits (EmailJS Free Tier)
- **200 emails per month**
- **1 email template**
- **1 email service**
- This should be plenty for a personal portfolio!

### Security Tips
- **NEVER commit your `.env` file to GitHub**
- The `.env` file is already in `.gitignore`
- Only your Public Key is exposed in the frontend code (this is safe)
- Your Service ID and Template ID are safe to expose

### Troubleshooting

**Error: "EmailJS is not defined"**
- Make sure you installed the package: `npm install @emailjs/browser`

**Error: "Failed to send message"**
- Check that all three IDs are correct in your `.env` file
- Verify your email service is connected properly
- Check the browser console for specific error messages

**Emails not arriving**
- Check your spam folder
- Verify the email service is properly connected
- Make sure you haven't exceeded the monthly limit

**Want to change the email design?**
- Go to EmailJS Dashboard → Email Templates
- Edit your template and save changes
- No code changes needed!

## Alternative: Using Environment Variables

For production deployment (Vercel, Netlify, etc.):

1. Go to your platform's dashboard
2. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`  
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy your application

The contact form will automatically use these production values.

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Check browser console (F12) for detailed error messages
- Make sure all environment variables start with `VITE_` prefix

---

**Your contact form will send messages to:** rupalirajput1727@gmail.com
