# Project Request Form - Configuration Guide

## 🎯 What You Have Now

A complete client intake form that:
- ✅ Collects client info
- ✅ Gets project details
- ✅ Allows feature selection
- ✅ Handles file uploads
- ✅ Sends formatted email to you
- ✅ Matches IOM Techs design

## ⚙️ Configuration Required

You need to set up 2 services and update the form with your credentials.

---

## Step 1: EmailJS Setup (5 mins)

### Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up (free)
3. Verify your email

### Connect Gmail Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and sign in with `ianotollo@gmail.com`
5. Give it a name: "IOM Techs Gmail"
6. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Create Email Template
1. In EmailJS dashboard, click "Email Templates"
2. Click "Create New Template"
3. Name it: "Project Request"
4. **Replace the entire template content with this:**

```
Subject: 🚀 New Project Request - {{client_name}} ({{service_type}})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{client_name}}
Email: {{client_email}}
Phone: {{client_phone}}
Company: {{client_company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Type: {{service_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Description:
{{project_description}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEATURES REQUESTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{features}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN REFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Uploaded Files:
{{uploaded_files}}

Reference Websites:
{{reference_links}}

Design Style: {{design_style}}
Brand Colors: {{brand_colors}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEETING PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Preferred Contact: {{preferred_contact}}
Google Meet: {{google_meet}}
Available Times: {{meeting_times}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{additional_notes}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: {{submission_date}}
```

4. Set "To Email": `ianotollo@gmail.com`
5. Click "Save"
6. Copy the **Template ID** (looks like `template_xxxxxxx`)

### Get Public Key
1. In EmailJS dashboard, click "Account"
2. Find "API Keys" section
3. Copy your **Public Key** (looks like `xxxxxxxxxxxxxxxxxxx`)

### What You Need:
- ✅ Service ID: `service_xxxxxxx`
- ✅ Template ID: `template_xxxxxxx`
- ✅ Public Key: `xxxxxxxxxxxxxxxxxxx`

---

## Step 2: Cloudinary Setup (5 mins)

### Create Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up (free)
3. Verify your email

### Get Cloud Name
1. In Cloudinary dashboard (you'll see it immediately)
2. Copy your **Cloud Name** (looks like `dxxxxxxxxxx`)

### Create Upload Preset
1. In Cloudinary dashboard, click ⚙️ Settings (bottom left)
2. Click "Upload" tab
3. Scroll to "Upload presets" section
4. Click "Add upload preset"
5. Name it: `iomtechs_files`
6. **Signing Mode**: Select "Unsigned" (very important!)
7. Folder: Leave empty or put `iom-techs/project-requests`
8. Click "Save"
9. Copy the **Upload Preset Name**: `iomtechs_files`

### What You Need:
- ✅ Cloud Name: `dxxxxxxxxxx`
- ✅ Upload Preset: `iomtechs_files`

---

## Step 3: Update the Form Code (2 mins)

### Open the File
Navigate to: `src/components/ProjectRequestForm.tsx`

### Update Line 67-69 (Cloudinary Config)
**Find this:**
```typescript
formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET"); // Replace this
formData.append("cloud_name", "YOUR_CLOUDINARY_CLOUD_NAME"); // Replace this
```

**Replace with your values:**
```typescript
formData.append("upload_preset", "iomtechs_files");
formData.append("cloud_name", "YOUR_CLOUD_NAME_HERE");
```

### Update Line 72 (Cloudinary Upload URL)
**Find this:**
```typescript
"https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_CLOUD_NAME/upload", // Replace this
```

**Replace with your cloud name:**
```typescript
"https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME_HERE/upload",
```

### Update Lines 158-160 (EmailJS Config)
**Find this:**
```typescript
await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  templateParams,
  "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
);
```

**Replace with your values:**
```typescript
await emailjs.send(
  "service_xxxxxxx", // Your Service ID
  "template_xxxxxxx", // Your Template ID
  templateParams,
  "xxxxxxxxxxxxxxxxxxx" // Your Public Key
);
```

### Save the File!

---

## Step 4: Test Everything (3 mins)

```bash
# In your IOM Techs project
npm run dev
```

Visit: http://localhost:5173/project-request

### Test the Form:
1. Fill out all required fields
2. Upload a test file
3. Submit the form
4. Check your email (ianotollo@gmail.com)

**You should receive a formatted email with all the details!**

---

## 🎯 Configuration Summary

### What to Replace:

**In `ProjectRequestForm.tsx`:**

| Line | What to Replace | With Your Value |
|------|----------------|-----------------|
| 67 | `YOUR_CLOUDINARY_PRESET` | `iomtechs_files` |
| 68 | `YOUR_CLOUDINARY_CLOUD_NAME` | Your cloud name |
| 72 | `YOUR_CLOUDINARY_CLOUD_NAME` | Your cloud name (same) |
| 158 | `YOUR_SERVICE_ID` | Your EmailJS Service ID |
| 159 | `YOUR_TEMPLATE_ID` | Your EmailJS Template ID |
| 161 | `YOUR_PUBLIC_KEY` | Your EmailJS Public Key |

---

## 🔍 Quick Values Lookup

### EmailJS Values:
- Service ID: Dashboard → Email Services → Click your service
- Template ID: Dashboard → Email Templates → Click your template
- Public Key: Dashboard → Account → API Keys

### Cloudinary Values:
- Cloud Name: Dashboard (top of page)
- Upload Preset: Settings → Upload → Upload Presets

---

## ✅ Success Checklist

After configuration:
- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Cloudinary account created
- [ ] Upload preset created (unsigned mode!)
- [ ] All 6 values updated in code
- [ ] File saved
- [ ] Tested locally
- [ ] Received test email

---

## 🐛 Troubleshooting

### Email Not Sending
- Check Service ID, Template ID, Public Key are correct
- Verify Gmail is connected in EmailJS
- Check browser console for errors

### File Upload Fails
- Verify Cloud Name is correct
- Check Upload Preset name matches: `iomtechs_files`
- Make sure Signing Mode is "Unsigned"
- Check file size (must be under 10MB)

### Form Doesn't Submit
- Open browser console (F12)
- Look for error messages
- Verify all required fields are filled

---

## 📧 What Emails Look Like

### Client Receives:
```
Subject: Thank you for your project request!

Hi [Name],

Thank you for reaching out to IOM Techs! We've 
received your project request and will review it 
carefully.

We'll get back to you within 24 hours with next steps.

Best regards,
Ian Otollo
Founder & CEO, IOM Techs
```

### You Receive:
Beautiful formatted email with all project details, 
file links, and client info (see EmailJS template above)

---

## 🚀 After Configuration

Once everything works:

### Add to Navigation
The form is already linked from:
- ✅ Hero "Schedule Consultation" button
- ✅ Navbar "Get Started" button
- ✅ Direct URL: `/project-request`

### Deploy to Vercel
After testing locally, deploy:
```bash
git add .
git commit -m "Add project request form"
git push origin main
```

Vercel will auto-deploy with the form live!

---

## 💡 Pro Tips

1. **Test with real email first** - Make sure emails arrive
2. **Check spam folder** - First emails might go there
3. **Save credentials** - Keep them in a safe place
4. **Monitor usage** - EmailJS free tier: 200 emails/month
5. **File size** - Remind clients: max 10MB per file

---

## 📊 Usage Limits (Free Tier)

### EmailJS:
- 200 emails/month
- Upgrade: $15/month for 1000 emails

### Cloudinary:
- 25 credits/month (plenty for file uploads)
- 10GB storage
- Upgrade: $0.05/credit after free tier

**Both free tiers are MORE than enough for your needs!**

---

## 🎉 You're Done!

After configuration, clients can:
- ✅ Fill detailed project request form
- ✅ Upload mockups, designs, references
- ✅ Select features they need
- ✅ Request meetings
- ✅ Submit everything to you via email

**No database, no backend maintenance, just works!** ✨

---

**Questions?** Test the form and let me know if anything doesn't work!
