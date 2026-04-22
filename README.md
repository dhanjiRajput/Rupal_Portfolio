# Rupal Kidecha - UI/UX Designer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio showcases design work, case studies, and creative projects with smooth animations and an optimal user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Production-success)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0080?style=flat&logo=framer&logoColor=white)

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful scroll animations and hover effects using Framer Motion
- **Modern UI**: Clean, minimal design with gradient accents
- **Interactive Components**: Animated modals, hover effects, and smooth transitions
- **Fast Performance**: Built with Vite for optimal loading times
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🎨 Sections

1. **Hero Section**: Eye-catching intro with animated background and CTAs
2. **About Me**: Personal bio, skills overview, and core values
3. **Skills**: Categorized skill display with visual representations
4. **Projects**: Case study showcase with detailed modal views
5. **Gallery**: Filterable design gallery with lightbox functionality
6. **Contact**: Functional contact form with social links

## 🚀 Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Router**: React Router DOM
- **Deployment**: Vercel (recommended)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rupal-portfolio.git
   cd rupal-portfolio
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
   - Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Vercel Deployment Guide

### Step 1: Prepare Your Code

1. **Update project information**
   - Edit personal info in `src/data/portfolioData.js`
   - Update social links and contact information
   - Add your actual project images to `public/images/`

2. **Test locally**
   ```bash
   npm run build
   npm run preview
   ```

### Step 2: Push to GitHub

1. **Initialize Git (if not already done)**
   ```bash
   git init
   ```

2. **Create .gitignore**
   ```bash
   # .gitignore
   node_modules/
   dist/
   .env
   .env.local
   .DS_Store
   ```

3. **Commit your code**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   ```

4. **Create GitHub repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Copy the repository URL

5. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/rupal-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

#### Option A: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy? → **Y**
   - Which scope? → Select your account
   - Link to existing project? → **N**
   - Project name → `rupal-portfolio`
   - In which directory is your code? → `./`
   - Override settings? → **N**

5. **Your site is live!**
   - Vercel will provide a URL like `https://rupal-portfolio.vercel.app`

#### Option B: Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign up/login

2. **Import your repository**
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Vite**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

### Step 4: Custom Domain (Optional)

1. **Go to Project Settings in Vercel**

2. **Add custom domain**
   - Navigate to "Domains"
   - Add your domain (e.g., `rupalkidecha.com`)
   - Update DNS records as instructed

3. **Wait for propagation**
   - DNS changes may take 24-48 hours

### Step 5: Environment Variables (Optional)

If you need to add environment variables:

1. Go to Project Settings → Environment Variables
2. Add your variables:
   ```
   CONTACT_EMAIL=rupalirajput1727@gmail.com
   ANALYTICS_ID=your-analytics-id
   ```

## 📁 Project Structure

```
rupal-portfolio/
├── public/
│   └── images/              # Add your project images here
├── src/
│   ├── components/
│   │   ├── sections/        # Section components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Footer.jsx       # Footer component
│   ├── data/
│   │   └── portfolioData.js # Portfolio data & content
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Customization

### Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const skills = [
  // Add your skills
];

export const projects = [
  {
    title: "Your Project",
    problem: "Describe the problem",
    process: "Your design process",
    solution: "Your solution",
    tools: ["Figma", "Adobe XD"],
    image: "/images/your-image.jpg",
    tags: ["UI/UX", "Mobile"]
  }
];
```

### Add Your Images

1. Create `public/images/` directory
2. Add your project images
3. Update image paths in `portfolioData.js`

### Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your color palette
      }
    }
  }
}
```

## 🔧 Performance Optimization

- Images are automatically optimized by Vercel
- Code splitting for faster initial load
- Lazy loading for images and components
- CSS purging for minimal bundle size

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rupal Kidecha**
- LinkedIn: [linkedin.com/in/rupal-k-2b0629168](https://www.linkedin.com/in/rupal-k-2b0629168)
- Email: [rupalirajput1727@gmail.com](mailto:rupalirajput1727@gmail.com)

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://framer.motion.com)
- Deployed on [Vercel](https://vercel.com)

---

**Made with ❤️ by Rupal Kidecha**
