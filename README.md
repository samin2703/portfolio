# 🚀 ML/AI Engineer Portfolio

A modern, responsive portfolio website showcasing Machine Learning, AI, and Generative AI projects. Built with React 18, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism effects with animated particle background
- 🌙 **Dark Mode** - Seamless light/dark theme toggle
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Powered by Framer Motion with motion effects
- 🔗 **Easy Resume Download** - Google Drive integration for resume
- 6️⃣ **Organized Skills** - 6 categories (ML, Computer Vision, GenAI, Robotics, Backend, Data & Tools)

## � Quick Start

### Upload to GitHub

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio` (or your preferred name)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Initialize git & push your code**
   ```bash
   cd build-modern-portfolio-site
   git init
   git add .
   git commit -m "Initial commit: ML/AI portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Verify on GitHub**
   - Visit your repository URL
   - All files should be there (no `node_modules/` due to .gitignore)

### Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up with GitHub
2. **Click "New Project"** → Import your `portfolio` repository
3. **Vercel auto-detects Vite** → Click "Deploy"
4. **Done!** Your portfolio is live at `portfolio-YOUR_USERNAME.vercel.app`

### Or Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)** → Sign up with GitHub
2. **Click "New site from Git"** → Select your `portfolio` repo
3. **Build settings auto-detected** → Click "Deploy"
4. **Done!** Your portfolio is live

## �📁 Folder Structure

```
src/
├── components/              # Reusable React components
│   ├── Navbar.tsx           # Navigation bar with scroll detection
│   ├── Hero.tsx             # Hero section with glassmorphism
│   ├── About.tsx            # About section with stats
│   ├── Skills.tsx           # 6 skill categories (ML, CV, GenAI, etc.)
│   ├── Projects.tsx         # Portfolio projects showcase
│   ├── Experience.tsx       # Work & education timeline
│   ├── Contact.tsx          # Contact form section
│   ├── Footer.tsx           # Footer with links
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   ├── ParticleBackground.tsx # Animated particle background
│   └── SectionWrapper.tsx   # Section container wrapper
├── context/
│   └── ThemeContext.tsx     # Theme state management
├── data/
│   └── portfolioData.ts     # ⭐ MAIN CONFIG - Edit for your info!
├── utils/
│   └── cn.ts                # Utility functions
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles & glassmorphism classes
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Step-by-Step Setup

1. **Clone or download the project**

```bash
git clone https://github.com/YOUR_GITHUB/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open in browser**

Visit `http://localhost:5173` to see your portfolio!

## ✏️ Customization Guide

### 1. Edit Your Personal Information

Open `src/data/portfolioData.ts` and update:

```typescript
// Your basic info
export const personalInfo = {
  name: "YOUR_NAME",           // Your full name
  title: "Full Stack Developer", // Your job title
  email: "YOUR_EMAIL@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Your bio goes here...",
  resumeUrl: "#",              // Link to your resume PDF
};

// Your social links
export const socialLinks = {
  github: "https://github.com/YOUR_GITHUB",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
  twitter: "https://twitter.com/YOUR_TWITTER",
  instagram: "https://instagram.com/YOUR_INSTAGRAM",
};
```

### 2. Add Your Skills

In `portfolioData.ts`, update the `skills` array:

```typescript
export const skills = [
  { name: "React", category: "Frontend", level: 95 },
  { name: "Node.js", category: "Backend", level: 90 },
  // Add more skills...
];
```

### 3. Add Your Projects

In `portfolioData.ts`, update the `projects` array:

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description here...",
    image: "https://your-image-url.com/project.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project",
    featured: true, // Set to true to show on initial load
  },
  // Add more projects...
];
```

### 4. Add Your Experience

In `portfolioData.ts`, update the `experiences` array:

```typescript
export const experiences = [
  {
    id: 1,
    type: "work", // or "education"
    title: "Senior Developer",
    company: "Your Company",
    location: "City, State",
    startDate: "2022",
    endDate: "Present",
    description: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  // Add more experiences...
];
```

### 5. Add Your Profile Image

1. Add your image to the `public/` folder
2. Update `src/components/About.tsx`:

```typescript
// Find this comment and uncomment the img tag:
<img 
  src="/your-image.jpg" 
  alt="Profile"
  className="w-full h-full object-cover"
/>
```

### 6. Connect Contact Form

The contact form is UI-only. To make it functional, you can:

**Option A: Use EmailJS**
```bash
npm install @emailjs/browser
```

**Option B: Use Formspree**
Update the form action in `Contact.tsx`

**Option C: Use your own backend**
Update the `handleSubmit` function in `Contact.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI**
```bash
npm install -g vercel
```

3. **Deploy**
```bash
vercel
```

4. **Follow the prompts** - Vercel will auto-detect Vite settings

### Alternative: Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Alternative: Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## 📦 Built With

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [TypeScript](https://www.typescriptlang.org/) - Type Safety

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

If you have any questions, feel free to reach out:

- Email: YOUR_EMAIL@example.com
- GitHub: [@YOUR_GITHUB](https://github.com/YOUR_GITHUB)
- LinkedIn: [YOUR_NAME](https://linkedin.com/in/YOUR_LINKEDIN)

---

⭐ If you found this helpful, please give it a star!
