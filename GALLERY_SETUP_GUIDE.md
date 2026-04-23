# Gallery Setup Guide

This guide explains how to add design work to your gallery section.

## Gallery Structure

Gallery images are stored in the `public/gallery/` folder:

```
public/gallery/
├── your-work-1.png
├── your-work-2.png
└── ...
```

You can also reuse project images from `public/projects/` folders.

## How to Add Gallery Items

### Option 1: Add New Gallery Images

1. **Place your images in the gallery folder:**
   ```
   public/gallery/my-design.png
   ```

2. **Update `src/data/portfolioData.js`:**
   ```javascript
   export const galleryItems = [
     {
       id: 1,
       title: "Your Design Title",
       category: "Mobile", // or "Web", "Branding", "UI", "UX"
       image: "/gallery/my-design.png",
       description: "Brief description of your design work..."
     },
   ];
   ```

### Option 2: Reuse Project Images

```javascript
{
  id: 2,
  title: "Vasana Dashboard",
  category: "Web",
  image: "/projects/Vasana/Thumbnail.png",
  description: "AI wellness platform dashboard design"
}
```

## Categories Available

Common categories used in the gallery:
- **Mobile** - Mobile app designs
- **Web** - Website and web app designs
- **UI** - User interface components
- **UX** - User research and experience flows
- **Branding** - Brand identity and logos
- **Dashboard** - Analytics and admin dashboards

## Adding Descriptions (Optional)

You can add a description field to provide more context:

```javascript
{
  id: 3,
  title: "E-commerce App",
  category: "Mobile",
  image: "/gallery/ecommerce.png",
  description: "Modern e-commerce mobile app with intuitive checkout flow and personalized product recommendations",
  liveUrl: "https://your-live-project.com"
}
```

## Adding Live Project Links (Optional)

Add a `liveUrl` field to link to the live project:

```javascript
{
  id: 4,
  title: "My Website",
  category: "Web",
  image: "/gallery/website.png",
  description: "Responsive website design",
  liveUrl: "https://mywebsite.com"
}
```

If `liveUrl` is provided, a "View Full Project" button will appear in the modal.

If no description is provided, a generic one will be used.

## Image Guidelines

**Recommended Image Specs:**
- **Size:** 1200x1200px (1:1 ratio for gallery grid)
- **Format:** PNG or JPG
- **File Size:** Under 500KB for faster loading
- **Quality:** High resolution, professional presentation

**Tips:**
- Use consistent aspect ratios for uniform grid
- Show key screens or features
- Include text/call-to-action in context
- Use device mockups for mobile designs

## Example: Complete Gallery Setup

```javascript
export const galleryItems = [
  {
    id: 1,
    title: "Vasana AI Dashboard",
    category: "Web",
    image: "/projects/Vasana/Thumbnail.png",
    description: "AI-powered wellness dashboard with behavioral insights",
    liveUrl: "https://vasana.ai/"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/gallery/banking-app.png",
    description: "Intuitive mobile banking with secure transactions",
    liveUrl: "https://banking-app.com"
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Branding",
    image: "/gallery/brand-system.png",
    description: "Complete brand identity with logo, colors, and typography"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Dashboard",
    image: "/gallery/analytics.png",
    description: "Data analytics dashboard with real-time insights",
    liveUrl: "https://analytics-dashboard.com"
  },
];
```

## Gallery Features

**Automatic Filtering:**
- Filter buttons are generated automatically from categories
- "All" shows all gallery items
- Category buttons filter by specific type

**Lightbox Modal:**
- Click any item to view full size
- Shows title, category, and description
- "View Full Project" button (if liveUrl is provided) - opens live project in new tab

**Responsive Grid:**
- 1 column on mobile
- 2 columns on tablet
- 4 columns on desktop

**Hover Effects:**
- Smooth lift animation on hover
- Overlay with title and category
- Expand icon

## Testing Your Gallery

After adding gallery items:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Verify:**
   - Images load correctly in grid
   - Hover effects work smoothly
   - Modal opens with full-size image
   - Filter buttons work properly
   - Description displays (if provided)

## Tips for Great Gallery Items

1. **Show Variety:** Include different types of work (mobile, web, branding)
2. **High Quality:** Use professional screenshots/mockups
3. **Consistent Style:** Maintain similar image quality and style
4. **Good Descriptions:** Help visitors understand your work
5. **Organize Categories:** Use logical category names
6. **Update Regularly:** Keep adding new work

## Current Gallery Items

Your gallery currently has:
- ✅ Vasana AI Dashboard (Web)
- ✅ Vasana Mobile Interface (Mobile)

**Ready for more designs!**

---

Need help? Check the working examples in `src/data/portfolioData.js`
