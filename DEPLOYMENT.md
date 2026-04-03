# 🚀 Firebase Deployment Guide

## Files Created

✅ **firebase.json** - Firebase configuration for hosting and Firestore  
✅ **firestore.rules** - Firestore security rules  
✅ **firestore.indexes.json** - Firestore index configuration  
✅ **.firebaserc** - Firebase project settings  

---

## Prerequisites

### 1. Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```
This opens your browser to authenticate with your Google account.

### 3. Update Project ID
Edit `.firebaserc` and replace `"webify-cx"` with your actual Firebase project ID:
```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

---

## Deployment Steps

### Step 1: Build the Project
```bash
npm run build
```
This creates optimized files in the `dist/` folder.

### Step 2: Deploy to Firebase Hosting
```bash
firebase deploy
```

This will:
- ✅ Deploy your React app to Firebase Hosting
- ✅ Apply Firestore security rules
- ✅ Set up proper cache headers for assets

---

## What Was Configured

### **Hosting** (firebase.json)
- **Public folder**: `dist/` (Vite build output)
- **SPA Rewriting**: All routes redirect to `index.html`
- **Cache Control**: 
  - Service worker → max-age=0 (always fresh)
  - Assets (.js, .css, images) → max-age=1 year (cached)

### **Firestore** (firestore.rules)
- Contact submissions can be **created** by anyone
- Requires `name`, `email`, and `message` fields
- Contact data **cannot be updated or deleted** (append-only)
- Read access allowed (change if needed for admin-only)

### **Emulators** (optional local testing)
Run locally without deploying:
```bash
firebase emulators:start
```
- Firestore Emulator: http://localhost:8080
- Hosting Emulator: http://localhost:5000
- Emulator UI: http://localhost:4000

---

## Verification Checklist

Before deploying, verify:

- [ ] You have a Firebase project created at [console.firebase.google.com](https://console.firebase.google.com)
- [ ] `.env.local` contains valid Firebase credentials
- [ ] `.firebaserc` has correct project ID
- [ ] `npm run build` completes without errors
- [ ] `dist/` folder contains your built app
- [ ] `firebase login` has been run

---

## Deployment Command Quick Reference

```bash
# Build and deploy
npm run build && firebase deploy

# Or deploy only hosting (skip Firestore)
firebase deploy --only hosting

# Deploy only Firestore rules
firebase deploy --only firestore

# View deployment history
firebase deployment:list
```

---

## After Deployment

### ✅ Your app is live at:
```
https://webify-cx.web.app
https://webify-cx.firebaseapp.com
```

### ✅ Firestore Database
- Go to [Firebase Console](https://console.firebase.google.com)
- Select your project
- Click "Firestore Database"
- You'll see `contacts` collection with form submissions

### ✅ Monitoring
```bash
firebase functions:log        # View function logs
firebase hosting:channel:list # View deployment channels
```

---

## Troubleshooting

### "Not in a Firebase app directory"
**Solution**: You're in wrong directory. Make sure you're in the project root:
```bash
cd f:\webify.cx\webify-react
firebase deploy
```

### "Authentication error"
**Solution**: Run `firebase login` again and authenticate

### "Project not found"
**Solution**: Check `.firebaserc` has correct project ID matching Firebase Console

### Deploy fails silently
**Solution**: Check these files exist in project root:
- firebase.json ✅
- firestore.rules ✅
- firestore.indexes.json ✅
- .firebaserc ✅

---

## Firestore Security Rules Explained

Current rules allow:

```
✅ Anyone can CREATE new contact submissions
✅ Anyone can READ existing submissions
❌ No one can UPDATE submissions (prevents data tampering)
❌ No one can DELETE submissions (prevents loss of data)
```

### To restrict to authenticated users only:
```firestore
match /contacts/{document=**} {
  allow read, create: if request.auth != null;
}
```

### To make admin-only:
```firestore
match /contacts/{document=**} {
  allow read, create: if request.auth.uid in get(/databases/$(database)/documents/config/admins).data.ids;
}
```

---

## Environment Variables for Production

When deploying, Firebase automatically uses your production Firebase credentials from `.env.local`. 

**For different environments** (staging, production), create:
- `.env.staging` - staging Firebase project
- `.env.production` - production Firebase project

Then deploy with:
```bash
VITE_ENV=production npm run build && firebase deploy
```

---

## Next Steps

1. ✅ Run `firebase login`
2. ✅ Update `.firebaserc` with your project ID
3. ✅ Run `npm run build`
4. ✅ Run `firebase deploy`
5. ✅ Visit your live site!

---

## Support

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/start)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

Happy deploying! 🎉
