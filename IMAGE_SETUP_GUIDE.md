# 🖼️ Image Setup Guide

This guide will help you add and optimize images for your Rupal Kidecha portfolio.

## 📁 Where to Put Images

All images should go in the `public/images/` directory:

```bash
# Create the images directory
mkdir -p public/images

# Your structure should look like:
public/
└── images/
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    └── ...
```

## 📏 Recommended Image Sizes

### Project Images
- **Dimensions**: 600x400 pixels (3:2 ratio)
- **Format**: WebP (preferred) or JPG
- **Max file size**: 200KB
- **Usage**: Project case studies

### Gallery Images
- **Dimensions**: 400x300 pixels (4:3 ratio)
- **Format**: WebP (preferred) or JPG
- **Max file size**: 150KB
- **Usage**: Portfolio gallery

### Hero/Profile Image
- **Dimensions**: 500x500 pixels (1:1 ratio)
- **Format**: PNG or JPG
- **Max file size**: 100KB
- **Usage**: About section

## 🛠️ How to Optimize Images

### Option 1: Online Tools (Free)

1. **Squoosh (Recommended)**
   - Go to [squoosh.app](https://squoosh.app)
   - Upload your image
   - Choose format: WebP
   - Quality: 80-85%
   - Download optimized image

2. **TinyPNG**
   - Go to [tinypng.com](https://tinypng.com)
   - Upload your images
   - Download compressed versions

3. **CloudConvert**
   - Go to [cloudconvert.com](https://cloudconvert.com)
   - Convert to WebP format
   - Adjust quality settings

### Option 2: Desktop Tools

1. **ImageOptim (Mac)**
   ```bash
   # Install
   brew install imageoptim
   ```

2. **FileOptimizer (Windows)**
   - Download from [sourceforge.net](https://sourceforge.net/projects/fileoptimizer/)

3. **Adobe Photoshop**
   - File → Export → Save for Web
   - Choose WebP format
   - Quality: 80%

## 📝 How to Reference Images

### In portfolioData.js

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    image: "/images/your-project.jpg",  // Note the leading slash
    // ... other properties
  }
];
```

### In Components

```javascript
// Using direct path
<img src="/images/your-image.jpg" alt="Description" />

// Using import
import myImage from '/images/your-image.jpg'
<img src={myImage} alt="Description" />
```

## 🎨 Image Naming Conventions

Use clear, descriptive names:

```
✅ Good:
- project-ecommerce-app.jpg
- project-healthcare-dashboard.jpg
- gallery-mobile-ui.jpg
- profile-rupal.jpg

❌ Bad:
- img1.jpg
- image-001.png
- final-final-v2.jpg
- screenshot.png
```

## 🔍 Common Image Issues

### Images Not Showing

**Problem**: Images appear broken

**Solutions**:
1. Check file path: `/images/your-image.jpg` (must start with `/`)
2. Verify image exists in `public/images/`
3. Check filename spelling (case-sensitive!)
4. Clear browser cache

### Images Too Large

**Problem**: Slow loading

**Solutions**:
1. Compress images using tools above
2. Convert to WebP format
3. Reduce dimensions
4. Use lower quality (75-85%)

### Images Look Blurry

**Problem**: Low resolution on high-DPI screens

**Solutions**:
1. Use 2x dimensions (e.g., 1200x800 for 600x400 display)
2. Export at higher quality
3. Use SVG for icons/logos

## 📊 Image Checklist

Before adding images to your portfolio:

- [ ] Images are optimized (< 200KB each)
- [ ] Images are in WebP or JPG format
- [ ] Filenames are descriptive
- [ ] Images follow size guidelines
- [ ] All images are in `public/images/`
- [ ] Paths in code start with `/`
- [ ] Alt text is descriptive
- [ ] Images are tested locally

## 🎯 Quick Setup

### Step 1: Prepare Your Images

```bash
# Create images directory
mkdir -p public/images

# Copy your images to the directory
# Make sure they follow naming conventions
```

### Step 2: Optimize

Use [Squoosh](https://squoosh.app) to:
1. Upload each image
2. Convert to WebP
3. Set quality to 80%
4. Download

### Step 3: Update Code

Edit `src/data/portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    image: "/images/project-ecommerce.jpg",
    // ...
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Mobile App UI",
    image: "/images/gallery-mobile-ui.jpg",
    // ...
  }
];
```

### Step 4: Test

```bash
npm run dev
```

Check that all images load correctly.

## 🌟 Pro Tips

1. **Use WebP format** - 30% smaller than JPG with same quality
2. **Multiple sizes** - Serve different sizes for different screens
3. **Lazy loading** - Images load as you scroll (automatic in modern browsers)
4. **CDN** - Use a CDN for better performance (Vercel does this automatically)

## 📱 Responsive Images

For responsive images, you can use:

```javascript
<img
  src="/images/project.jpg"
  srcSet="
    /images/project-small.jpg 400w,
    /images/project-medium.jpg 800w,
    /images/project-large.jpg 1200w
  "
  sizes="(max-width: 600px) 400px, 800px"
  alt="Project description"
/>
```

## 🔧 Troubleshooting

### Build Errors After Adding Images

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Images Work Locally But Not After Deploy

1. Check file paths are correct (case-sensitive)
2. Ensure images are committed to Git
3. Verify images are in `public/` directory
4. Check Vercel deployment logs

## 📚 Additional Resources

- [Image Optimization Guide](https://images.guide)
- [WebP Converter](https://cloudconvert.com/jpg-to-webp)
- [Squoosh App](https://squoosh.app)
- [TinyPNG](https://tinypng.com)

---

**Need help?** Check the main [README.md](README.md) or [QUICK_START.md](QUICK_START.md)
