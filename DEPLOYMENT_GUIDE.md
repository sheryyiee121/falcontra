# 🚀 Deploy to Vercel - Step by Step Guide

## Method 1: Upload to Vercel (Easiest)

### Step 1: Go to Vercel
1. Open your browser
2. Go to: https://vercel.com
3. Click "Sign Up" or "Login"

### Step 2: Create New Project
1. Click "New Project"
2. Click "Upload" (since your code is local)
3. Drag and drop your ENTIRE project folder

### Step 3: Configure Settings
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Step 4: Deploy
1. Click "Deploy"
2. Wait 1-2 minutes
3. Your website will be live!

## Method 2: GitHub + Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite
5. Click "Deploy"

## 📁 Files to Upload/Include:
- ✅ package.json
- ✅ vite.config.js
- ✅ tailwind.config.js
- ✅ postcss.config.js
- ✅ vercel.json
- ✅ index.html
- ✅ src/ folder (all components)
- ✅ dist/ folder (built files)

## 🎯 Your Website Features:
- 🚛 Professional truck dispatching design
- 📱 Fully responsive
- 🎨 Orange & white theme
- 💬 WhatsApp integration (+19433009678)
- 🎭 Smooth scroll animations
- ⚡ Fast Vite build

## 🌐 After Deployment:
Your website will be available at: `https://your-project-name.vercel.app`

You can also set up a custom domain later! 