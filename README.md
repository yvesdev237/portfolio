# 🎯 Yves Dev Portfolio Website

A modern, professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a blog system, e-commerce shop, and beautiful animations.

## ✨ Features

### 🏠 Home Page
- **Parallax Hero Section** with animated background shapes
- **About Me** with profile info, stats, and skill bars
- **Services** cards with smooth animations
- **Featured Projects** with category filtering
- **Client Testimonials** carousel with auto-scroll
- **Blog Preview** showing latest 3 articles
- **Shop Preview** displaying featured products
- **Contact Section** with working contact form
- **Responsive Footer** with social links

### 📝 Blog System
- Full-featured blog with search functionality
- Category filtering and pagination
- Individual blog post pages with related articles
- Reading time estimates
- Tag system
- Beautiful article layout

### 🛍️ E-Commerce Shop
- Product grid with filtering (category, price range)
- Advanced search functionality
- Product detail pages with images and descriptions
- Shopping cart with LocalStorage persistence
- Cart management (add, remove, update quantity)
- Order summary
- Responsive product cards

### 🎨 Design & UX
- **Dark/Light Mode** toggle with persistent theme
- **Smooth Animations** using Framer Motion
- **Parallax Scrolling** with GSAP
- **Fully Responsive** design (mobile, tablet, desktop)
- **Modern UI** with gradient backgrounds and glassmorphism
- **Smooth Page Transitions**
- **Hover Effects** on all interactive elements

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - JavaScript framework
- **Vite 7.2** - Fast build tool
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion 11.0** - Animation library
- **GSAP 3.12** - Advanced animations
- **React Router DOM 6.21** - Client-side routing
- **React Icons 5.5** - Icon library

### Build & Dev Tools
- **ESLint** - Code linting
- **Vite Plugin React** - React fast refresh

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/         # Home page sections
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Projects.jsx
│       ├── Testimonials.jsx
│       ├── BlogPreview.jsx
│       ├── ShopPreview.jsx
│       └── Contact.jsx
├── pages/                # Full pages
│   ├── Home.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Shop.jsx
│   ├── ProductDetail.jsx
│   └── Cart.jsx
├── context/              # React Context providers
│   ├── ThemeContext.jsx
│   └── CartContext.jsx
├── data/                 # Mock data
│   ├── blogData.js
│   ├── shopData.js
│   └── siteData.js
├── hooks/                # Custom React hooks
├── styles/               # Global styles
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/zilo13/portfolio.git
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

The app will open at `http://localhost:5173/`

## 📝 Available Scripts

### `npm run dev`
Start the development server with hot module replacement

### `npm run build`
Build the project for production (outputs to `dist/` folder)

### `npm run preview`
Preview the production build locally

### `npm run lint`
Run ESLint to check code quality

## 🎯 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main portfolio homepage |
| `/blog` | Blog | Blog listing with search & filters |
| `/blog/:slug` | Blog Post | Individual blog article |
| `/shop` | Shop | Product listing with filters |
| `/shop/:slug` | Product | Product detail page |
| `/shop/cart` | Cart | Shopping cart |

## ⚙️ Customization

### Update Website Info
Edit `/src/data/siteData.js` to update:
- Skills and proficiency levels
- Services offered
- Projects and portfolio items

### Add Blog Posts
Add entries to `/src/data/blogData.js`:
```javascript
{
  id: 4,
  title: 'Your Blog Title',
  slug: 'your-blog-slug',
  excerpt: 'Short description...',
  content: 'Full article content...',
  category: 'React',
  author: 'Yves Dev',
  date: '2025-01-20',
  readTime: '5 min read',
  image: 'image-url',
  tags: ['React', 'JavaScript']
}
```

### Add Products
Add entries to `/src/data/shopData.js`:
```javascript
{
  id: 4,
  name: 'Product Name',
  slug: 'product-slug',
  price: 29.99,
  category: 'Templates',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'image-url',
  tags: ['React', 'Template'],
  downloads: 100,
  rating: 4.8
}
```

### Update Personal Info
- **Navigation Logo**: Update in `src/components/common/Navbar.jsx`
- **Social Links**: Update in `src/components/common/Footer.jsx`
- **Contact Info**: Update in `src/components/sections/Contact.jsx`
- **Profile Details**: Update in `src/components/sections/About.jsx`

### Change Colors & Theme
Edit `tailwind.config.js` to customize:
- Primary colors
- Font families
- Breakpoints
- Custom animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Deploy portfolio website"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Click "Deploy"

Vercel will automatically detect Vite and configure the build settings.

### Other Deployment Options

**Netlify:**
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🔄 State Management

### ThemeContext
Manages dark/light mode toggle across the app. Uses localStorage for persistence.

```javascript
import { useTheme } from './context/ThemeContext';

const { isDark, toggleTheme } = useTheme();
```

### CartContext
Manages shopping cart state and operations. Uses localStorage for persistence.

```javascript
import { useCart } from './context/CartContext';

const { 
  cartItems, 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  getTotalPrice,
  getTotalItems 
} = useCart();
```

## 🎨 Animation Features

### Framer Motion
- Page transitions
- Hover effects on cards
- Smooth scroll animations
- Component mount/unmount animations

### GSAP
- Parallax scrolling effects
- Hero section 3D rotation
- Animated skill bars
- Background shape animations

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 0 - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

All components adapt beautifully across devices.

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigation support
- High contrast color ratios

## 📦 File Sizes

- HTML: ~0.5 kB (gzip)
- CSS: ~6.4 kB (gzip)
- JS: ~147 kB (gzip)

**Total: ~154 kB gzipped**

## 🐛 Common Issues

### Dev Server Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Build Fails
```bash
# Clear build cache
rm -rf dist
npm run build
```

### Images Not Showing
- Update image URLs in data files
- Ensure images are accessible online (use placeholder URLs for now)

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)

## 🚀 Future Enhancements

- [ ] Backend integration for contact form
- [ ] User authentication
- [ ] Blog comment system
- [ ] Product reviews and ratings
- [ ] Payment integration (Stripe/PayPal)
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] PWA capabilities

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

**Yves Dev** - Junior Web Developer from Cameroon 🇨🇲

- 🎯 Skills: HTML, CSS, JavaScript, React, Tailwind CSS, Responsive Design
- 🌱 Currently Learning: React Native
- 💼 Open to freelance projects and collaborations
- 📧 Email: contact@yvesdev.com

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Contact & Social

- **GitHub**: [@zilo13](https://github.com/zilo13)
- **Email**: contact@yvesdev.com
- **WhatsApp**: Available upon request
- **Location**: Cameroon

---

**Built with ❤️ by Yves Dev**

*Last Updated: November 27, 2025*

