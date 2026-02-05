# James O'Sullivan Portfolio - Setup Guide

## ✅ Completed Changes

All of Ted's content has been replaced with your information:
- ✅ Personal information updated
- ✅ Social links (LinkedIn, GitHub, Instagram, Email)
- ✅ Work experience (Coakley Moloney, UCC, Workvivo, Dunnes, Cork Penny Dinners)
- ✅ Education (St. Francis College)
- ✅ Projects (Edith Glasses, Red-light Green-light)
- ✅ Chat bot personality configured
- ✅ All old images removed

---

## 📸 Images You Need to Add

Add these images to the `/public` folder:

### Required Images:
1. **profile.png** - Your profile picture for the home page
2. **edith-glasses.png** - Photo/screenshot of Edith Glasses project
3. **redlight-greenlight.png** - Photo/screenshot of Red-light Green-light project

### Optional Logo Placeholders:
These are used in the Experience/Career timeline. If you don't have them, the site will still work but show broken images:
- coakley-moloney.png
- ucc.png
- workvivo.png
- dunnes.png
- penny-dinners.png
- st-francis.png

**Tip**: You can find company logos by googling "[company name] logo png" or use simple placeholder circles.

---

## 🔑 Environment Setup

1. **Copy the template file**:
   ```bash
   cp env.template .env.local
   ```

2. **Fill in your API keys** in `.env.local`:
   - **OPENAI_API_KEY**: Get from https://platform.openai.com/api-keys
   - **UPSTASH_REDIS_REST_URL & TOKEN**: Get from https://upstash.com (free tier available)
   - **ASTRA_DB_ENDPOINT & TOKEN**: Get from https://astra.datastax.com (free tier available)
   - **RESEND_API_KEY** (optional): For contact form emails from https://resend.com

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: http://localhost:3000

---

## 📝 Update Your Resume

Replace `/public/resume.pdf` with your own CV/resume PDF file.

---

## 🌐 Deployment to Cloudflare Pages

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Personalized portfolio for James O'Sullivan"
git push
```

### Step 2: Connect to Cloudflare Pages
1. Go to https://dash.cloudflare.com
2. Navigate to "Workers & Pages" > "Create application" > "Pages" > "Connect to Git"
3. Select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Node version**: 18 or higher

### Step 3: Add Environment Variables
In Cloudflare Pages dashboard, go to Settings > Environment Variables and add all the variables from your `.env.local` file.

### Step 4: Deploy!
Click "Save and Deploy" - your site will be live at `https://jamesos.pages.dev`

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Add Blog Posts
Create MDX files in the `/content` folder with frontmatter:
```yaml
---
title: "My First Post"
date: "2025-02-05"
description: "Post description"
---
```

Then run `npm run gen` to index them for the chat bot.

---

## 📧 Contact Information

Your contact info is set to:
- **Email**: jamesmosullivan1@yahoo.com
- **LinkedIn**: linkedin.com/in/jamesosullivan123
- **GitHub**: github.com/jambrike
- **Instagram**: instagram.com/james_os08/

---

## 🐛 Troubleshooting

### Images not showing?
- Make sure files are in `/public` folder
- Check filenames match exactly (case-sensitive)
- Restart dev server after adding images

### Chat not working?
- Verify all environment variables are set correctly
- Check API keys are valid
- Run `npm run gen` to index content for the chat bot

### Build fails?
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

---

## 📞 Need Help?

Review the original guide document for more detailed instructions on each step.

Good luck with your portfolio! 🚀
