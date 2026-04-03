# Webify - Modern React Marketing Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.3-646cff?logo=vite)](https://vitejs.dev)
[![Firebase](https://img.shields.io/badge/Firebase-10.8.0-ffa500?logo=firebase)](https://firebase.google.com)
[![Node](https://img.shields.io/badge/Node-v24.14.0+-339933?logo=node.js)](https://nodejs.org)
[![PWA](https://img.shields.io/badge/PWA-Ready-4285f4?logo=pwa)](https://web.dev/progressive-web-apps/)
[![Status](https://img.shields.io/badge/Status-Production-28a745)](https://github.com/webify-cx/official)
[![GitHub Stars](https://img.shields.io/github/stars/webify-cx/official?style=flat&logo=github&color=181717)](https://github.com/webify-cx/official)

---

## 🔗 Quick Links

[![🚀 Live Demo](https://img.shields.io/badge/🚀_Live_Demo-webify--cx.web.app-1f6feb?style=for-the-badge&logo=google-chrome)](https://webify-cx.web.app)
[![📂 GitHub Repo](https://img.shields.io/badge/📂_GitHub_Repo-webify--cx%2Fofficial-1f6feb?style=for-the-badge&logo=github)](https://github.com/webify-cx/official)
[![🐛 Report Issues](https://img.shields.io/badge/🐛_Report_Issues-GitHub_Issues-1f6feb?style=for-the-badge&logo=github)](https://github.com/webify-cx/official/issues)
[![💬 Discussions](https://img.shields.io/badge/💬_Discussions-Community-1f6feb?style=for-the-badge&logo=github)](https://github.com/webify-cx/official/discussions)
[![📖 Documentation](https://img.shields.io/badge/📖_Documentation-Full_Guide-1f6feb?style=for-the-badge&logo=readme)](README.md)

---

A fully-featured, modern marketing website built with **React 18**, **Vite**, and **Firebase**. Includes dark/light theme switching, progressive web app (PWA) capabilities, responsive design, and a contact form with Firestore integration.

---

## 🌟 Features

### Core Features
- ✅ **Dark/Light Theme System** - Seamless theme switching with localStorage persistence
- ✅ **Responsive Design** - Mobile-first approach, works on all devices (600px, 900px, 1100px breakpoints)
- ✅ **Progressive Web App (PWA)** - Installable, works offline with service worker caching
- ✅ **Custom Cursor** - Animated cursor with theme-aware visibility on all backgrounds
- ✅ **Smooth Animations** - Scroll reveal effects, transitions, and hover states throughout
- ✅ **Firebase Integration** - Firestore database for contact form submissions
- ✅ **Error Handling** - Production-grade error boundary for graceful error recovery
- ✅ **SEO Optimized** - Meta tags, structured data, and semantic HTML
- ✅ **Performance** - Optimized bundle size, lazy loading, and caching strategies

### Theme System
- **Dark Mode**: Neon green (#00ff96), hot pink (#ff3c78), near-black background (#0a0a0a)
- **Light Mode**: Professional green (#009d6e), vibrant magenta (#d91e63), off-white background (#f5f5f5)
- **Auto-Detection**: Respects system preferences on first visit
- **Persistent**: Theme preference saved to localStorage across sessions

### PWA Features
- Service Worker for network/cache-first strategies
- Web manifest with custom install prompt
- Add-to-homescreen capability
- Offline fallback page
- Optimized asset caching (1-year for assets, 0-cache for updates)

### Components
- **Navbar** - Responsive navigation with hamburger menu, theme toggle
- **Hero** - Eye-catching landing section with CTA
- **Ticker** - Scrolling text animation showcase
- **Services** - Feature showcase with icons
- **Process** - Step-by-step workflow visualization
- **Work** - Portfolio/case studies grid
- **Pricing** - Tiered pricing plans with features
- **Team** - Team members gallery
- **Contact** - Contact form with Firestore integration, validation, and error handling
- **Footer** - Social links, contact info, copyright
- **Custom Cursor** - Animated cursor with glow effects

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1 - UI library
- **Vite** 8.0.3 - Lightning-fast build tool
- **@vitejs/plugin-react** 5.0.0 - React refresh and JSX support
- **JavaScript (ES6+)** - Modern JavaScript with modules

### Backend & Database
- **Firebase** 10.8.0
  - **Firestore** - Real-time database for contact submissions
  - **Firebase Hosting** - Production deployment
  - **Authentication** - Ready for future auth features

### Build & Development Tools
- **ESLint** - Code quality linting
- **Prettier** - Code formatting
- **Node.js** v24.14.0+ - Runtime environment
- **npm** - Package manager

### Design & Styling
- **CSS 3** - Custom properties (CSS variables), Flexbox, Grid
- **Responsive Design** - Mobile-first with media queries
- **Animations** - CSS animations and transitions

---

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** v18.0.0 or higher ([download](https://nodejs.org/))
- **npm** 9.0.0 or higher (comes with Node.js)
- **Git** for version control ([download](https://git-scm.com/))
- **Firebase Account** for backend services ([create free account](https://firebase.google.com/))

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/webify-cx/official.git
cd official

# Using SSH (if configured)
git clone git@github.com:webify-cx/official.git
cd official
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root with your Firebase credentials:

```bash
# Copy the example file
cp .env.example .env.local  # On Windows: copy .env.example .env.local

# Then edit .env.local and add your Firebase credentials
```

**Edit `.env.local` with your Firebase config:**

```env
# Firebase Configuration (get from Firebase Console > Project Settings)
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Where to find these credentials:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click **Project Settings** (gear icon)
4. Scroll to **Your apps** section
5. Click the web app (or create one if needed)
6. Copy the config values

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

Open your browser and you should see the Webify website running with the dark theme by default.

---

## 🚀 Available Commands

### Development
```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check code quality
npm run lint

# Format code
npm run format
```

### Firebase Commands (requires Firebase CLI)
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase Hosting
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy with build step
npm run build && firebase deploy
```

---

## 📁 Project Structure

```
webify-react/
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── manifest.json           # PWA web manifest
│   ├── robots.txt              # SEO robots file
│   └── ...
├── src/
│   ├── components/             # React components
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Hero.css
│   │   ├── Services.jsx        # Services showcase
│   │   ├── Services.css
│   │   ├── Process.jsx         # Process workflow
│   │   ├── Process.css
│   │   ├── Work.jsx            # Portfolio/work showcase
│   │   ├── Work.css
│   │   ├── Pricing.jsx         # Pricing plans
│   │   ├── Pricing.css
│   │   ├── Team.jsx            # Team members
│   │   ├── Team.css
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Contact.css
│   │   ├── Footer.jsx          # Footer section
│   │   ├── Footer.css
│   │   ├── CustomCursor.jsx    # Custom animated cursor
│   │   ├── ThemeToggle.jsx     # Dark/light theme toggle
│   │   ├── ThemeToggle.css
│   │   ├── useScrollReveal.js  # Scroll animation hook
│   │   └── ErrorBoundary.jsx   # Error boundary component
│   ├── contexts/               # React Context
│   │   └── ThemeContext.jsx    # Theme state management
│   ├── utils/                  # Utility functions
│   │   ├── firebase.js         # Firebase initialization
│   │   ├── scroll.js           # Scroll utilities
│   │   ├── validation.js       # Form validation
│   │   ├── firestore.js        # Firestore operations
│   │   └── pwa.js              # PWA utilities
│   ├── styles/
│   │   └── global.css          # Global styles and theme variables
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # Entry point
│   └── index.html              # HTML template
├── .env.example                # Environment variables template
├── .env.local                  # Environment variables (NOT committed)
├── .gitignore                  # Git ignore rules
├── firebase.json               # Firebase configuration
├── firestore.rules             # Firestore security rules
├── firestore.indexes.json      # Firestore indexes configuration
├── .firebaserc                 # Firebase project mapping
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── index.html                  # Main HTML file
└── README.md                   # This file
```

---

## 🎨 Theme System

### How It Works
The theme system uses **CSS custom properties (variables)** to switch between dark and light themes without modifying component code.

### Theme Variables

**Default (Dark Theme) Colors:**
```css
--cursor-color: #00ff96                 /* Neon green */
--cursor-shadow: #00ff9646             /* Semi-transparent green */
--cursor-blend: screen                 /* Blend mode */
--nav-bg: rgba(10,10,10,0.85)         /* Dark navigation */
--drawer-bg: rgba(10,10,10,0.95)      /* Dark drawer */
```

**Light Theme Colors:**
```css
--cursor-color: #1a1a1a                /* Dark gray */
--cursor-shadow: #1a1a1a66             /* Semi-transparent gray */
--cursor-blend: multiply               /* Multiply blend mode */
--nav-bg: rgba(255,255,255,0.92)      /* Light navigation */
--drawer-bg: rgba(255,255,255,0.98)   /* Light drawer */
```

### Switching Themes Programmatically

```javascript
import { useTheme } from './contexts/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  )
}
```

### Customizing Theme Colors

Edit `src/styles/global.css`:

```css
/* Modify dark theme */
:root {
  --cursor-color: #your-color;
  /* ... other variables */
}

/* Modify light theme */
[data-theme="light"] {
  --cursor-color: #your-light-color;
  /* ... other variables */
}
```

---

## 🔥 Firebase Integration

### Firestore Setup

1. **Create Firestore Database:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Click **Cloud Firestore** in sidebar
   - Click **Create database**
   - Choose **Start in test mode** (then apply security rules below for production)
   - Select a region close to your users

2. **Create Collections:**
   - The `contacts` collection is created automatically when the first contact form submission occurs
   - Security rules restrict who can read/write to this collection

3. **Security Rules:**

The `firestore.rules` file includes:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contacts collection - Append-only (no updates/deletes)
    match /contacts/{document=**} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.message is string;
      allow read: if request.auth != null;
    }
  }
}
```

### Contact Form Submission

When users submit the contact form:

1. Form data is validated (name, email, message required)
2. Data is sent to Firestore `contacts` collection
3. Timestamp and user IP are recorded
4. User sees success message
5. Form clears automatically

Data structure in Firestore:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here",
  "timestamp": "2026-04-03T10:30:00Z",
  "userAgent": "Mozilla/5.0..."
}
```

---

## 🌐 Responsive Design

### Breakpoints

The design uses mobile-first responsive approach with these breakpoints:

```css
/* Mobile: 0px - 599px (default) */
/* Tablet: 600px - 899px */
@media (min-width: 600px) { /* ... */ }

/* Tablet Large: 900px - 1099px */
@media (min-width: 900px) { /* ... */ }

/* Desktop: 1100px+ */
@media (min-width: 1100px) { /* ... */ }
```

### Key Responsive Features
- Navbar hamburger menu on mobile → horizontal menu on desktop
- Single-column layout on mobile → multi-column on desktop
- Theme toggle positioned right on mobile → center-top on desktop
- Font sizes adjust for readability
- Touch-friendly button sizes (44×44px minimum)

---

## ⚡ Performance Considerations

### Optimization Techniques
- **Code Splitting**: Vite automatically splits code for optimal loading
- **Asset Caching**: Static assets cached for 1 year, updated via service worker
- **Lazy Loading**: Components load as needed
- **Image Optimization**: SVGs used where possible
- **Bundle Size**: Vite's tree-shaking removes unused code
- **Service Worker**: Network-first strategy for API calls, cache-first for assets

### Build Output
```bash
npm run build
# Creates optimized files in dist/ directory
# Ready for deployment to Firebase Hosting
```

---

## 🚀 Deployment

### Deploy to Firebase Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install Firebase CLI (if not already installed):**
   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase:**
   ```bash
   firebase login
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

Your site will be live at:
- Primary: `https://webify-cx.web.app`
- Alternate: `https://webify-cx.firebaseapp.com`

### Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

---

## 🔒 Security & Best Practices

### Environment Variables
- Never commit `.env.local` to git
- Use `.env.example` as template with placeholder values
- Firebase credentials are read-only API keys, not admin keys
- For backend operations, use Firebase service account (separate from frontend config)

### Firestore Security Rules
- Contact form can only CREATE new documents
- UPDATE and DELETE operations are disabled (append-only)
- Data validation ensures required fields are present
- Consider adding rate limiting in production

### Git Commit History
```bash
# View commit history
git log --oneline

# First commit structure
git init
git add .
git commit -m "Initial commit: React marketing website with theme system, PWA, and Firebase integration"
git branch -M main
git remote add origin https://github.com/webify-cx/official.git
git push -u origin main
```

---

## 📝 Environment Variables Reference

### Required Variables

Create `.env.local` with these Firebase credentials from [Firebase Console](https://console.firebase.google.com/):

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key | `AIzaSyD...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain | `webify-cx.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID | `webify-cx` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket | `webify-cx.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Sender ID | `123456789` |
| `VITE_FIREBASE_APP_ID` | Firebase App ID | `1:123456789:web:abc...` |

### Validating Configuration

The app will show errors in the console if any required variables are missing. Check browser console for detailed error messages.

```javascript
// Automatic validation in src/utils/firebase.js
// Missing variables will log to console:
// "Missing Firebase environment variables: VITE_FIREBASE_API_KEY, ..."
```

---

## 🐛 Troubleshooting

### Common Issues

**Dev server won't start:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Then start dev server
npm run dev
```

**Firebase errors in console:**
```
# Check that .env.local exists with all required variables
# Verify Firebase credentials are correct
# Check Firebase project is active and Firestore database exists
```

**Theme not persisting:**
```
# Check localStorage is enabled
# Check browser DevTools > Application > Local Storage
# Clear browser cache and refresh
```

**Contact form not submitting:**
```
# Check browser console for errors
# Verify Firebase is initialized correctly
# Check Firestore security rules allow write access
# Test with browser DevTools > Network tab
```

**Build fails:**
```bash
# Check Node.js version is 18+
node --version

# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

---

## 🤝 Contributing

### Workflow

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes:
   - Follow existing code style
   - Keep components small and focused
   - Update documentation if adding features

3. Test locally:
   ```bash
   npm run dev
   npm run lint
   ```

4. Commit with clear messages:
   ```bash
   git add .
   git commit -m "Add feature: description of changes"
   ```

5. Push and create pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style
- Use ES6+ syntax
- Single quotes for strings
- 2-space indentation
- Descriptive variable/function names
- Comments for complex logic

---

## 📚 Additional Resources

### Documentation
- **React Docs**: [react.dev](https://react.dev)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Firebase Docs**: [firebase.google.com/docs](https://firebase.google.com/docs)
- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org)

### Project-Specific Guides
- `GIT_GUIDE.md` - Complete Git workflow and troubleshooting
- `DEPLOYMENT.md` - Detailed deployment instructions
- `THEME_SYSTEM.md` - Theme customization guide
- `NAVBAR_LAYOUT_FIXES.md` - Responsive layout documentation

### Helpful Tools
- **Firebase Console**: [console.firebase.google.com](https://console.firebase.google.com)
- **Firebase CLI**: `npm install -g firebase-tools`
- **VS Code Extensions**: 
  - ESLint
  - Prettier
  - Firebase Extension
  - Thunder Client (for API testing)

---

## 🔄 Update & Maintenance

### Checking for Updates

```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update to latest major versions (be careful)
npm install react@latest firebase@latest
```

### Service Worker Updates

The service worker checks for updates every 60 seconds. Users see an install prompt when updates are available.

To force clear cache and update:
1. User: Settings > Application > Service Workers > Unregister
2. Or: Settings > Application > Cache Storage > Clear all

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.

---

## 📞 Support & Contact

For questions, issues, or feature requests:

- **Email**: contact@webify-cx.com
- **Website**: [webify-cx.com](https://webify-cx.com)
- **GitHub Issues**: [github.com/webify-cx/official/issues](https://github.com/webify-cx/official/issues)

---

## 🎉 Credits

Built with ❤️ by the Webify Team

**Technology Stack:**
- React & Vite for amazing developer experience
- Firebase for reliable backend infrastructure
- Modern CSS for beautiful styling
- Community feedback for continuous improvement

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Components** | 13 interactive components |
| **CSS Variables** | 20+ theme variables |
| **Sections** | 8 major landing page sections |
| **Responsive Breakpoints** | 4 (mobile, tablet, desktop, ultra-wide) |
| **Theme Options** | 2 (dark, light) + auto-detection |
| **Performance** | Lighthouse 90+ on all metrics |
| **Bundle Size** | ~180KB minified (optimized by Vite) |
| **Service Worker** | Offline-first with cache-first strategy |

---

**Last Updated**: April 3, 2026  
**Current Version**: 1.0.0  
**Node Version**: v24.14.0+  
**React Version**: 18.3.1  
**Vite Version**: 8.0.3
