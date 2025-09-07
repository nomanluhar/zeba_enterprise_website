# Zeba Enterprise - Import/Export Website

A professional, SEO-optimized Next.js website for Zeba Enterprise, a leading import-export company specializing in connecting global markets with premium Indian products.

## 🌟 Features

- **Modern Design**: Professional UI with clean aesthetics and intuitive navigation
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, structured data, and sitemap
- **Performance Focused**: Optimized images, lazy loading, and fast page loads
- **Interactive Components**: Hero slider, contact forms, product galleries
- **Professional Layout**: Header, footer, and consistent branding throughout
- **PWA Ready**: Includes manifest.json for progressive web app capabilities

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   ├── robots.ts          # Robots.txt generation
│   └── manifest.ts        # PWA manifest
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   └── ui/               # Reusable UI components
│       ├── HeroSlider.tsx     # Image carousel
│       ├── ServiceCard.tsx    # Service/feature cards
│       ├── ProductGrid.tsx    # Product display grid
│       ├── ContactForm.tsx    # Contact form
│       └── SEOHead.tsx        # SEO utilities
public/
├── images/               # Static images
└── icons/               # Icon assets
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zeba-enterprise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_BASE_URL=https://zebaenterprise.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The website uses a professional color scheme defined in `src/app/globals.css`:
- **Primary**: Navy blue (#1e3a8a)
- **Secondary**: Orange (#f97316)
- **Background**: White (#ffffff)

### Content
Update content in the following files:
- **Homepage**: `src/app/page.tsx`
- **About**: `src/app/about/page.tsx`
- **Services**: `src/app/services/page.tsx`
- **Products**: `src/app/products/page.tsx`
- **Contact**: `src/app/contact/page.tsx`

### Images
Replace placeholder images in the `public/images/` directory with actual company images.

### Company Information
Update company details in:
- Header component (`src/components/layout/Header.tsx`)
- Footer component (`src/components/layout/Footer.tsx`)
- SEO metadata (`src/components/ui/SEOHead.tsx`)

## 📱 Pages Overview

### Homepage (/)
- Hero slider with company messaging
- About section with company introduction
- Services overview with 4 main services
- Product categories showcase
- "Why Choose Us" features
- Certifications display
- Call-to-action section

### About (/about)
- Company story and background
- Mission, vision, and values
- Team member profiles
- Company timeline/milestones
- Statistics and achievements

### Services (/services)
- Detailed service descriptions
- Export services
- Import agent services
- Sourcing agent services
- Trade consultation
- Process workflows
- Additional support services

### Products (/products)
- Product category grid
- Detailed product specifications
- Quality standards information
- Export process overview
- Product highlights

### Contact (/contact)
- Contact form
- Multiple contact methods
- Department-specific contacts
- Office location (map placeholder)
- FAQ section
- Emergency contact information

## 🔧 SEO Features

- **Meta Tags**: Unique title and description for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for business information
- **Sitemap**: Automatically generated sitemap.xml
- **Robots.txt**: Search engine crawler instructions
- **Canonical URLs**: Proper URL canonicalization
- **Performance**: Optimized Core Web Vitals

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Static generation where possible
- **Compression**: Automatic asset compression

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Upload the `out` directory (if using static export) or deploy the full project

## 📞 Support

For technical support or customization requests, please contact:
- **Email**: developer@zebaenterprise.com
- **Phone**: +91-XXXXXXXXXX

## 📄 License

This project is proprietary and confidential. All rights reserved by Zeba Enterprise.

---

## 🎯 Next Steps

1. **Replace placeholder images** with actual company photos
2. **Update contact information** with real details
3. **Customize content** to match company messaging
4. **Add Google Analytics** for tracking
5. **Set up contact form backend** for form submissions
6. **Configure Google Maps** integration
7. **Add real testimonials** and case studies
8. **Implement blog section** (optional)
9. **Set up SSL certificate** for production
10. **Submit to search engines** for indexing

Built with ❤️ for Zeba Enterprise