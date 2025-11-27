# 🎨 Customization Guide

## Quick Start Customization

### 1. Update Website Branding

#### Logo & Site Name
File: `src/components/common/Navbar.jsx`
```jsx
<Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
  yves dev 237  {/* Change this */}
</Link>
```

#### Website Title
File: `index.html`
```html
<title>Yves Dev Portfolio</title>  {/* Change this */}
```

---

### 2. Update Profile Information

#### About Section
File: `src/components/sections/About.jsx`
```jsx
<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
  I'm a passionate junior web developer from Cameroon...  {/* Update bio */}
</p>
```

#### Contact Information
File: `src/components/sections/Contact.jsx`
```jsx
<a href="mailto:contact@yvesdev.com" className="hover:text-blue-600">
  contact@yvesdev.com  {/* Update email */}
</a>
```

---

### 3. Update Personal Data

#### Skills
File: `src/data/siteData.js`
```javascript
export const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  // Add/edit skills here
];
```

#### Services
File: `src/data/siteData.js`
```javascript
export const services = [
  {
    id: 1,
    icon: '🎨',
    title: 'Web Design',
    description: 'Beautiful, modern web designs...'
  },
  // Add/edit services here
];
```

#### Projects
File: `src/data/siteData.js`
```javascript
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform...',
    image: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Node.js'],
    category: 'Full Stack',
    link: '#'
  },
  // Add/edit projects here
];
```

---

### 4. Add Blog Posts

File: `src/data/blogData.js`
```javascript
{
  id: 4,
  title: 'Your Blog Title',
  slug: 'your-blog-slug',  // URL-friendly version
  excerpt: 'Short description for preview',
  content: `# Main Title

This is your blog content.
You can use markdown-like formatting.

## Subtitle

More content here...`,
  category: 'React',
  author: 'Yves Dev',
  date: '2025-01-20',
  readTime: '5 min read',
  image: 'https://via.placeholder.com/400x200?text=Blog+Post',
  tags: ['React', 'JavaScript', 'Tutorial']
}
```

**Important:** Update the `slug` to match your URL structure!

---

### 5. Add Shop Products

File: `src/data/shopData.js`
```javascript
{
  id: 4,
  name: 'Product Name',
  slug: 'product-slug',  // URL-friendly version
  price: 29.99,
  category: 'Templates',  // Or: UI Kits, Boilerplate, Icons, Components
  description: 'Short description for card',
  longDescription: `Detailed product description with features and benefits.
  
  Features:
  - Feature 1
  - Feature 2
  - Feature 3`,
  image: 'https://via.placeholder.com/300x200',
  demoLink: 'https://demo.example.com',
  buyLink: 'https://buy.example.com',
  tags: ['React', 'Dashboard', 'Template'],
  downloads: 234,
  rating: 4.8  // Out of 5
}
```

---

### 6. Update Testimonials

File: `src/data/siteData.js`
```javascript
export const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Job Title',
    company: 'Company Name',
    content: 'Their testimonial about your work...',
    image: 'https://via.placeholder.com/100x100',
    rating: 5  // Out of 5
  },
];
```

---

### 7. Update Social Links

File: `src/components/common/Footer.jsx`
```jsx
const socials = [
  { icon: FiGithub, label: 'GitHub', url: 'https://github.com/zilo13' },
  { icon: FiFacebook, label: 'Facebook', url: 'https://facebook.com/yourprofile' },
  { icon: FiMail, label: 'Email', url: 'mailto:your@email.com' },
  { icon: FaWhatsapp, label: 'WhatsApp', url: 'https://wa.me/237XXXXXXXX' },
];
```

---

## Advanced Customization

### Change Color Scheme

File: `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066cc',      // Change primary color
      secondary: '#ff6600',    // Change secondary color
    }
  }
}
```

Then update components to use new colors:
```jsx
<Button className="bg-primary hover:bg-primary/80">
  Click Me
</Button>
```

---

### Modify Animations

#### Hero Section Parallax
File: `src/components/sections/Hero.jsx`
```javascript
useEffect(() => {
  if (containerRef.current) {
    const handleMouseMove = (e) => {
      // Adjust these values to change parallax intensity
      const x = clientX - width / 2;
      const y = clientY - height / 2;

      gsap.to(containerRef.current, {
        rotationY: x * 0.02,    // Increase for more effect
        rotationX: -y * 0.02,   // Increase for more effect
        transformPerspective: 1000,
        duration: 0.5,
        ease: 'power2.out'
      });
    };
  }
}, []);
```

#### Change Animation Speed
File: Any component using `motion`
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}  // Change duration (in seconds)
>
  Content
</motion.div>
```

---

### Add Navigation Links

File: `src/components/common/Navbar.jsx`
```jsx
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Shop', path: '/shop' },
  { label: 'Contact', path: '#contact' },
  // Add new links here
  { label: 'My Page', path: '/mypage' },
];
```

Then create a new page file!

---

### Update Footer Content

File: `src/components/common/Footer.jsx`
```jsx
<div>
  <h3 className="text-2xl font-bold text-blue-400 mb-2">yves dev 237</h3>
  <p className="text-gray-400">
    Junior web developer crafting digital experiences  {/* Update */}
  </p>
</div>
```

---

### Add Contact Form Backend

File: `src/components/sections/Contact.jsx`

Replace the `handleSubmit` function:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://your-backend.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

### Add Google Analytics

File: `index.html`
```html
<head>
  <!-- Add before closing </head> tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');  // Replace with your ID
  </script>
</head>
```

---

### Customize Hero Background

File: `src/components/sections/Hero.jsx`
```jsx
{/* Change colors and sizes of background shapes */}
<motion.div
  className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
  // ^Change bg-blue-300 to another color
/>
```

Available colors: `bg-red-300`, `bg-purple-300`, `bg-pink-300`, `bg-green-300`, etc.

---

## Category Management

### Add New Blog Category

File: `src/data/blogData.js`
```javascript
export const categories = [
  'React',
  'CSS', 
  'JavaScript',
  'Web Design',
  'Performance',
  'New Category Here'  // Add it!
];
```

Then add posts with this category.

---

### Add New Product Category

File: `src/data/shopData.js`
```javascript
export const productCategories = [
  'Templates',
  'UI Kits',
  'Boilerplate',
  'Icons',
  'Components',
  'Your New Category'  // Add it!
];
```

---

## Image Optimization

### Using Placeholder Images
```javascript
image: 'https://via.placeholder.com/400x200?text=Your+Text'
```

### Using Real Images
1. Upload images to cloud storage (Cloudinary, Imgur, etc.)
2. Get the public URL
3. Use in data files:
```javascript
image: 'https://your-cloud.com/images/your-image.jpg'
```

---

## Performance Tips

### Optimize Images
- Use WebP format
- Compress before uploading
- Use appropriate sizes

### Lazy Load Images
Already done with Framer Motion in production!

### Monitor Bundle Size
```bash
npm run build
# Check dist/assets/ folder sizes
```

---

## Need Help?

- Check README.md for full documentation
- Review existing code patterns
- Test changes in development first
- Use browser DevTools for debugging

**Happy Customizing! 🎨**
