# ⚡ Quick Start Guide

Get your Rupal Kidecha portfolio up and running in 5 minutes!

## 🚀 Installation

```bash
# Clone or navigate to your project
cd rupal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your portfolio!

## ✏️ Customization

### 1. Update Your Information

Edit `src/data/portfolioData.js`:

```javascript
export const skills = [
  {
    category: "UI Design",
    items: ["Figma", "Adobe XD", "Your Skills"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    problem: "Describe the problem you solved",
    process: "Explain your design process",
    solution: "Describe your solution and results",
    tools: ["Figma", "Adobe XD"],
    image: "/images/your-project.jpg",
    tags: ["UI/UX", "Mobile"]
  }
];
```

### 2. Add Your Images

```bash
# Create images directory
mkdir -p public/images

# Add your project images
# Copy your images to public/images/
```

Recommended image sizes:
- **Project thumbnails**: 600x400px
- **Gallery images**: 400x300px
- **Format**: WebP or JPG (optimized)
- **Max size**: 200KB per image

### 3. Update Social Links

Edit `src/data/portfolioData.js`:

```javascript
export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_PROFILE",
    icon: "linkedin"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/YOUR_PROFILE",
    icon: "dribbble"
  }
];
```

### 4. Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

### Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Click Deploy!

3. **Done!** 🎉

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

## 🎯 Next Steps

1. ✅ Add your real projects
2. ✅ Replace placeholder images
3. ✅ Update contact information
4. ✅ Test all functionality
5. ✅ Deploy to production
6. ✅ Share with the world!

## 🔧 Common Tasks

### Add a New Project

```javascript
// In src/data/portfolioData.js
export const projects = [
  // ... existing projects
  {
    id: 6,
    title: "Your New Project",
    problem: "Project problem statement",
    process: "Your design process",
    solution: "Solution description",
    tools: ["Figma", "Adobe XD"],
    image: "/images/new-project.jpg",
    tags: ["UI/UX", "Web Design"]
  }
];
```

### Update About Section

Edit `src/components/sections/About.jsx`:

```javascript
<p className="text-slate-600 leading-relaxed">
  Your updated bio and story...
</p>
```

### Change Theme Colors

Edit `src/index.css`:

```css
@layer base {
  body {
    @apply bg-gradient-to-br from-YOUR_COLOR via-YOUR_COLOR to-YOUR_COLOR;
  }
}
```

## 📱 Responsive Design

Your portfolio is fully responsive! It works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Features Included

- ✨ Smooth animations (Framer Motion)
- 🎯 Scroll animations
- 🖱️ Hover effects
- 📱 Fully responsive
- 🔍 SEO friendly
- ♿ Accessible
- ⚡ Fast performance
- 🎨 Modern design

## 💡 Tips

1. **Keep project descriptions concise** (2-3 sentences each)
2. **Use high-quality images** (optimize for web)
3. **Show your process** (not just final designs)
4. **Include metrics** (e.g., "Increased conversion by 45%")
5. **Keep it updated** (add new projects regularly)

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Loading

- Make sure images are in `public/images/`
- Check image paths start with `/`
- Verify image filenames match exactly

### Styling Issues

```bash
# Rebuild Tailwind CSS
npm run build
```

## 📚 Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.motion.com)

## 🎉 You're Ready!

Your portfolio is now customized and ready to share with the world!

**Don't forget to:**
- Update all placeholder content
- Add your real projects
- Test thoroughly
- Deploy to Vercel
- Share your portfolio link!

---

**Made with ❤️ for Rupal Kidecha**
