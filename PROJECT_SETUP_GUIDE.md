# Project Setup Guide

This guide explains how to add new projects to your portfolio.

## Project Structure

Projects are organized in the `public/projects/` folder with each project having its own folder:

```
public/projects/
├── ProjectName1/
│   ├── thumbnail.png      (Main image - shown in card)
│   ├── image1.png          (Additional images for gallery)
│   ├── image2.png
│   └── ...
├── ProjectName2/
│   └── ...
└── Vasana/                 (Already added)
    ├── Thumbnail.png
    └── vasaan1.png
```

## How to Add a New Project

### Step 1: Prepare Your Images
1. Create a new folder in `public/projects/YourProjectName/`
2. Add your project images:
   - **thumbnail.png** - Main image (will appear in project card)
   - Additional images (image1.png, image2.png, etc.) - For the gallery view

### Step 2: Update Portfolio Data
Edit `src/data/portfolioData.js` and add a new project object:

```javascript
{
  id: unique_number,
  title: "Your Project Name",
  problem: "Describe the problem your project solves...",
  process: "Describe your design process and research...",
  solution: "Describe the solution and outcomes...",
  tools: ["Figma", "User Research", "Prototyping"],
  thumbnail: "/projects/YourProjectName/thumbnail.png",
  images: [
    "/projects/YourProjectName/thumbnail.png",
    "/projects/YourProjectName/image1.png",
    "/projects/YourProjectName/image2.png"
  ],
  liveUrl: "https://your-project-live-url.com",
  tags: ["UI/UX", "Mobile", "Web Design"]
}
```

### Step 3: Key Fields Explained

**Required Fields:**
- `id` - Unique number for each project
- `title` - Project name
- `problem` - What problem does it solve?
- `process` - Your design process
- `solution` - The solution and results
- `tools` - Array of tools/skills used
- `thumbnail` - Path to thumbnail image
- `images` - Array of all project images (including thumbnail)
- `tags` - Array of category tags

**Optional Fields:**
- `liveUrl` - Link to live project (if available)

### Step 4: Image Guidelines

**Thumbnail Image:**
- Recommended size: 1200x800px or similar aspect ratio
- Format: PNG or JPG
- Should represent the project well

**Additional Images:**
- Can be multiple images showing different aspects
- Same format as thumbnail
- Will appear in modal with navigation arrows

### Step 5: Writing Great Project Descriptions

**Problem Statement:**
- Focus on user pain points
- Include specific challenges
- Mention business impact if relevant

**Process:**
- Describe your research methods
- Mention iterations and improvements
- Include user testing outcomes

**Solution:**
- Highlight key features
- Mention measurable results
- Include user/business impact

## Example: Vasana Project

The Vasana project is already integrated as a reference. Check `src/data/portfolioData.js` to see how it's structured.

## Testing Your Project

After adding a new project:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Verify:**
   - Thumbnail appears correctly in project card
   - All images load in modal view
   - Navigation between images works
   - Live link (if provided) opens correctly

## Tips for Better Projects

1. **Quality Images:** Use high-quality screenshots
2. **Multiple Angles:** Show different screens/features
3. **Real Data:** Use actual metrics when possible
4. **Story-Driven:** Tell a compelling design story
5. **Live Link:** Always provide live URL if available

## Image Optimization

For better performance:
- Compress images before adding
- Use appropriate file sizes (aim for under 500KB per image)
- Consider using WebP format for better compression

## Need Help?

- Check existing projects in `src/data/portfolioData.js`
- Look at the Projects component: `src/components/sections/Projects.jsx`
- Ensure image paths start with `/projects/` and are lowercase

---

**Current Project Count:** 1 (Vasana)
**Ready for more projects!**
