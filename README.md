# Hrishikesh Kumar — Portfolio

A premium, minimal personal portfolio website built with React + Vite + Tailwind CSS.

## Features

- 🎨 Dark theme with indigo/emerald accents
- ✨ Smooth scroll animations using Intersection Observer
- 📱 Fully responsive (mobile-first design)
- 🚀 Optimized for GitHub Pages deployment
- 🎯 SEO-friendly meta tags
- ⚡ Fast load times with Vite

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first CSS
- **Lucide React** — Icon library

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Step 1: Update Configuration

1. Open `vite.config.js` and update the `base` path to match your repo name:

   ```js
   base: '/your-repo-name/',
   ```

2. Open `package.json` and update the `homepage` field:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### Step 3: Deploy

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

This will:

1. Build the project (`npm run predeploy` runs `npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/your-repo-name`

## Customization

### Update Content

All content is located in `src/App.jsx`. Update the following:

- **Navigation**: Links and CTA button URL
- **Hero Section**: Headline, tagline, and trust badges
- **Services Section**: Service cards with icons, descriptions, and pricing
- **Case Studies**: Project cards with descriptions and tags
- **Contact Section**: Cal link and email address
- **Footer**: Copyright text

### Update Colors

Colors are defined in `tailwind.config.js` under `theme.extend.colors`. The primary colors are:

- `background`: #0a0a0a (main background)
- `surface`: #111111 (card background)
- `indigo-500`: #6366f1 (primary accent)
- `emerald-500`: #10b981 (secondary accent)

### Update Fonts

Fonts are loaded from Google Fonts in `index.html`. The default fonts are:

- **Inter** — Body text
- **JetBrains Mono** — Logo/monospace elements

## Project Structure

```
portfolio/
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main application component
│   └── index.css       # Global styles and Tailwind
└── README.md           # This file
```

## License

MIT License — Feel free to use this template for your own portfolio!

---

Built with ❤️ by Hrishikesh Kumar
