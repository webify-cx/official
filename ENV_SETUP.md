# Environment Variables Setup - Webify

## Overview

All sensitive configuration (Firebase credentials, API keys, etc.) are now stored in environment variables using `.env.local`. This keeps secrets out of version control and allows different configurations for development, staging, and production.

---

## 📁 Environment Files

### `.env.local` (Local Development - DO NOT COMMIT)
- Contains actual Firebase credentials
- Used for local development only
- **Never commit to Git** (ignored by `.gitignore`)

### `.env.example` (Template - Commit to Git)
- Contains placeholder values
- Shows what environment variables are needed
- Safe to commit to Git
- Team members copy this and rename to `.env.local`

### `.env.production` (Production - For CI/CD)
- Contains production secrets
- Set in deployment platform (Vercel, Netlify, etc.)
- Never committed to Git

---

## 🚀 Quick Setup

### For Local Development

1. **Copy the template**:
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your Firebase credentials**:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSyAqN8qPEPBhQB9YKfpf5zY5nCgOmIxLZSI
   VITE_FIREBASE_AUTH_DOMAIN=webify-cx.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=webify-cx
   VITE_FIREBASE_STORAGE_BUCKET=webify-cx.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=631944490014
   VITE_FIREBASE_APP_ID=1:631944490014:web:ff95c0f4047f04ee86120f
   ```

3. **Restart dev server**:
   ```bash
   npm run dev
   ```

---

## 📝 Environment Variables Reference

### Firebase Configuration

| Variable | Required | Example | Description |
|----------|----------|---------|-------------|
| `VITE_FIREBASE_API_KEY` | ✅ | `AIzaSy...` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | ✅ | `webify-cx.firebaseapp.com` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | ✅ | `webify-cx` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | ✅ | `webify-cx.firebasestorage.app` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | ✅ | `631944490014` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | ✅ | `1:631944490014:web:...` | Firebase app ID |

### Application Configuration

| Variable | Optional | Default | Description |
|----------|----------|---------|-------------|
| `VITE_APP_TITLE` | ✅ | `Webify` | App title |
| `VITE_API_URL` | ✅ | `http://localhost:5173` | API endpoint |
| `VITE_ANALYTICS_ID` | ✅ | - | Google Analytics ID |
| `VITE_CONTACT_EMAIL` | ✅ | - | Contact form email |

---

## 🔒 Security Best Practices

### DO

✅ **Store sensitive data in `.env.local`**
```env
VITE_FIREBASE_API_KEY=your_secret_key
```

✅ **Use `.env.local` locally**
- Development: `.env.local`
- Production: Set in deployment platform

✅ **Commit `.env.example`**
- Shows team what variables are needed
- No sensitive data

✅ **Add `.env.local` to `.gitignore`**
- Already done in this project

✅ **Rotate keys if compromised**
- Regenerate in Firebase console
- Update `.env.local` locally
- Update in deployment platform

### DON'T

❌ **Never commit `.env.local`**
- Contains secrets
- Already in `.gitignore`

❌ **Never hardcode secrets in code**
- Use environment variables instead
- Already migrated in `src/utils/firebase.js`

❌ **Never share `.env.local` in chat/email**
- Treat like passwords

❌ **Never commit production keys to Git**
- Only set in deployment platform

---

## 🌍 Accessing Variables in Code

### In React Components

```javascript
// Access Vite environment variables
const apiUrl = import.meta.env.VITE_API_URL
const appTitle = import.meta.env.VITE_APP_TITLE

// Firebase is already configured in src/utils/firebase.js
import { db } from '../utils/firebase'
```

### In Node.js/Backend

```javascript
// Node.js uses process.env
const apiKey = process.env.VITE_FIREBASE_API_KEY
```

### Checking if Variables Exist

```javascript
if (!import.meta.env.VITE_FIREBASE_API_KEY) {
  console.error('Firebase API key is not set!')
}
```

---

## 🚢 Deployment Configuration

### Vercel

1. Go to **Project Settings** → **Environment Variables**
2. Add each variable from `.env.example`:
   ```
   VITE_FIREBASE_API_KEY = AIzaSy...
   VITE_FIREBASE_PROJECT_ID = webify-cx
   ...
   ```
3. Redeploy project - variables are automatically available

### Netlify

1. Go to **Site Settings** → **Build & Deploy** → **Environment**
2. Add variables same as Vercel
3. Redeploy

### GitHub Actions

```yaml
- name: Deploy
  env:
    VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
    VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
    # ... add all variables
  run: npm run build
```

---

## 🧪 Testing Environments

### Development (`.env.local`)

```env
VITE_FIREBASE_PROJECT_ID=webify-cx
VITE_API_URL=http://localhost:5173
# Local testing settings
```

### Production (Deployment Platform)

```env
VITE_FIREBASE_PROJECT_ID=webify-cx-prod
VITE_API_URL=https://webify.cx
# Production settings
```

---

## 🐛 Troubleshooting

### "Environment variable is undefined"

**Problem**: `import.meta.env.VITE_FIREBASE_API_KEY` is `undefined`

**Solutions**:
1. Make sure `.env.local` exists (not `.env` without `.local`)
2. Restart dev server: `npm run dev`
3. Check variable name starts with `VITE_` (required by Vite)
4. Check `.env.local` file syntax (no spaces around `=`)

### Variables not updating after edit

**Problem**: Changed `.env.local` but changes don't appear

**Solution**:
1. Stop dev server (Ctrl+C)
2. Delete `.vite` or `dist` folders (cache)
3. Restart: `npm run dev`

### Different values in build vs dev

**Problem**: Variables work in dev but not in production build

**Solutions**:
1. Set variables in deployment platform (Vercel, Netlify)
2. Ensure variable names have `VITE_` prefix
3. Rebuild after updating deployment variables

---

## 📚 Resources

- **Vite Environment Variables**: https://vitejs.dev/guide/env-and-mode.html
- **Firebase Security**: https://firebase.google.com/docs/projects/security
- **12 Factor App**: https://12factor.net/#config

---

## ✅ Checklist

- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in actual Firebase credentials in `.env.local`
- [ ] Restart dev server
- [ ] Test Firebase operations work
- [ ] Set environment variables in deployment platform
- [ ] Never commit `.env.local` to Git

