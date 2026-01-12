# IOM Techs - Complete Website Package

## 🎉 What's Included

This is the **complete, production-ready** IOM Techs website with all updates and features integrated.

### ✨ Key Features:
- ✅ Professional company website
- ✅ Modern React + TypeScript + Tailwind CSS
- ✅ Full project request form with file uploads
- ✅ Email integration (EmailJS)
- ✅ File hosting (Cloudinary)
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Zero database needed

---

## 📦 What's New in This Version

### 1. **Branding Updates**
- Company name: "IOM Techs" (consistent everywhere)
- Contact info: ianotollo@gmail.com, +254 700 399 641
- Location: Nairobi, Kenya
- Social media links (LinkedIn, GitHub, Instagram)

### 2. **About Section Enhanced**
- Founder profile integrated
- Your bio and expertise
- Portfolio link button
- Vision statement
- Realistic startup stats

### 3. **Navigation Fixed**
- All links work from any page
- Smooth scrolling
- Mobile menu working
- "Get Started" → Project Request Form

### 4. **Project Request Form** (NEW! 🚀)
Complete client intake system:
- Client information collection
- Project details (type, budget, timeline)
- 12 feature checkboxes
- **File upload** (drag & drop, up to 10MB)
- Reference links
- Design preferences
- Meeting requests
- Sends formatted email to you

**Location:** `/project-request`

### 5. **Services Updated**
- Web Development
- Mobile Solutions
- Cloud Solutions
- API Development
- Automation
- Technical Consulting

---

## 🚀 Quick Start

### Installation

```bash
# 1. Extract this zip
# 2. Navigate to folder
cd IOM-Techs-main

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev
```

Visit: http://localhost:5173

### Build for Production

```bash
npm run build
```

---

## ⚙️ Configuration Required

### Project Request Form Setup (15 mins)

The form needs 2 free services configured. **See PROJECT_FORM_SETUP.md for detailed instructions.**

**Quick summary:**

1. **EmailJS** - Sends emails (5 mins)
   - Create account at emailjs.com
   - Get: Service ID, Template ID, Public Key
   
2. **Cloudinary** - Hosts files (5 mins)
   - Create account at cloudinary.com
   - Get: Cloud Name, Upload Preset

3. **Update code** (2 mins)
   - Edit `src/components/ProjectRequestForm.tsx`
   - Replace 6 placeholder values with your credentials

**Full guide:** `PROJECT_FORM_SETUP.md`

---

## 🎯 Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, Services, About, Contact |
| `/project-request` | Project Form | Client intake system |

**Navigation:**
- Hero button: "Schedule Consultation" → Form
- Navbar: "Get Started" → Form
- Direct link: `/project-request`

---

## 📧 How Project Form Works

1. Client visits `/project-request`
2. Fills form with project details
3. Uploads files (mockups, designs)
4. Submits form
5. Files → Cloudinary (get URLs)
6. EmailJS → Sends formatted email to you
7. You receive beautiful email with all details

**No database. No backend. Just works!**

---

## 💰 Costs

**Everything FREE:**
- Vercel hosting: $0
- EmailJS: $0 (200 emails/month)
- Cloudinary: $0 (25 credits/month)

**Total: $0/month**

---

## 🚀 Deployment

### Quick Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/iomtechs-website.git
git push -u origin main

# 2. Deploy on Vercel
# - Go to vercel.com
# - Import repo
# - Click Deploy
# - Done! (~2 mins)
```

---

## ✅ Pre-Deployment Checklist

- [ ] EmailJS configured
- [ ] Cloudinary configured  
- [ ] Credentials in code updated
- [ ] Test form locally
- [ ] All links working
- [ ] Contact info correct
- [ ] Mobile tested

---

## 📁 Key Files

```
src/
├── components/
│   ├── ProjectRequestForm.tsx  # NEW! Client intake form
│   ├── Navbar.tsx              # Updated
│   ├── Hero.tsx                # Updated
│   ├── About.tsx               # Updated with founder
│   ├── Footer.tsx              # Updated social links
│   └── Contact.tsx             # Updated contact info
├── pages/
│   ├── Index.tsx               # Homepage
│   └── ProjectRequest.tsx      # NEW! Form page
└── App.tsx                     # Updated routes
```

---

## 🎨 Customization

**Update contact info:**
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

**Update content:**
- `src/components/About.tsx` - Bio
- `src/components/Services.tsx` - Services
- `src/components/Hero.tsx` - Headline

**Add form features:**
- `src/components/ProjectRequestForm.tsx` (line 30-43)

---

## 🐛 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Form not sending:**
- Check EmailJS credentials
- Verify Cloudinary "unsigned" mode
- Check browser console
- Test with simple submission

---

## 📚 Documentation

- `README.md` - This file (overview)
- `PROJECT_FORM_SETUP.md` - Detailed form setup guide

---

## 🎯 What Changed

**Updates from original:**
1. Branding → "IOM Techs"
2. Contact → Your real info
3. Navigation → Fixed links
4. About → Added founder profile
5. Form → Complete client intake system
6. Dependencies → Added EmailJS, react-dropzone

**New features:**
- Project request form
- File upload system
- Email integration
- Founder profile

---

## 🎊 Ready to Launch!

**Steps:**
1. Configure services (15 mins)
2. Test locally
3. Deploy to Vercel
4. Update portfolio with IOM Techs link

**You'll have a professional tech company website live in ~30 minutes!** 🚀

---

**Built for IOM Techs** ✨  
Version 2.0 - Complete Package  
January 2026
