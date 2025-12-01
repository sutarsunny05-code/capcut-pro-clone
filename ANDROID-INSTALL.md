# 📱 How to Use on Android

## Method 1: Use Online (Easiest - No Download!)

### Step 1: Deploy to Vercel (One-Time Setup)
1. On your computer, go to: https://vercel.com/new/clone?repository-url=https://github.com/sutarsunny05-code/capcut-pro-clone
2. Click "Deploy" (takes 2 minutes)
3. You'll get a URL like: `https://capcut-pro-clone.vercel.app`

### Step 2: Use on Android
1. Open Chrome/Firefox on your Android phone
2. Go to your Vercel URL
3. Tap the menu (⋮) → "Add to Home Screen"
4. Now it works like a native app! 📱

---

## Method 2: Use Termux (Run Locally on Android)

### Step 1: Install Termux
Download from: https://f-droid.org/en/packages/com.termux/

### Step 2: Setup Termux
Open Termux and run these commands one by one:

```bash
# Update packages
pkg update && pkg upgrade -y

# Install Node.js and Git
pkg install nodejs git -y

# Clone the project
git clone https://github.com/sutarsunny05-code/capcut-pro-clone.git

# Go to project folder
cd capcut-pro-clone

# Install dependencies (takes 5-10 minutes)
npm install

# Start the app
npm run dev
```

### Step 3: Open in Browser
1. Open Chrome on your Android
2. Go to: `http://localhost:3000`
3. Start editing videos!

---

## Method 3: Use Replit (Cloud-Based)

### Step 1: Fork on Replit
1. Go to: https://replit.com
2. Sign up (free)
3. Click "Create Repl" → "Import from GitHub"
4. Paste: `https://github.com/sutarsunny05-code/capcut-pro-clone`

### Step 2: Run
1. Click "Run" button
2. Replit will give you a URL
3. Open that URL on your Android phone
4. Add to home screen for easy access

---

## 🎯 Recommended Method

**For Android: Use Method 1 (Online via Vercel)**
- ✅ No installation needed
- ✅ Works instantly
- ✅ Can install as PWA (Progressive Web App)
- ✅ Updates automatically
- ✅ No storage space needed on phone

---

## 📱 Features on Android

✅ Touch-friendly interface
✅ Pinch to zoom timeline
✅ Swipe gestures
✅ Mobile-optimized controls
✅ Works in Chrome, Firefox, Edge
✅ Can work offline (after first load)
✅ Upload videos from gallery
✅ Export edited videos

---

## ⚠️ Requirements

- Android 8.0 or higher
- Chrome/Firefox browser
- 2GB+ RAM recommended
- Stable internet (for online method)

---

## 🆘 Troubleshooting

**Problem: App is slow**
- Close other apps
- Clear browser cache
- Use Chrome for best performance

**Problem: Can't upload videos**
- Grant storage permission to browser
- Check video file size (keep under 100MB)

**Problem: Termux method not working**
- Make sure you installed from F-Droid, not Play Store
- Run: `termux-setup-storage` to grant permissions

---

## 💡 Pro Tip

For best experience on Android:
1. Deploy to Vercel (free)
2. Open in Chrome
3. Add to Home Screen
4. Use like a native app!

No VPN needed • Works on any Android phone • 100% Free