# Cienfuegos Glass

Premium shower glass doors and custom glass solutions for Miami-Dade County.

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Docker (EasyPanel compatible)

## Project Structure

```
cienfuegos-glass/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main single-page application
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # Dynamic sitemap.xml
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   └── api/
│   │       └── contact/route.ts  # Contact form API endpoint
│   └── components/
│       ├── Navbar.tsx          # Navigation bar
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── Services.tsx        # Services section
│       ├── Gallery.tsx         # Gallery with lightbox
│       ├── WhyUs.tsx           # Why Us section
│       ├── Testimonials.tsx    # Testimonials carousel
│       ├── Contact.tsx         # Contact form section
│       ├── Footer.tsx          # Footer
│       ├── Logo.tsx            # Logo component
│       └── CookieBanner.tsx    # Cookie consent banner
├── public/
│   └── fotos/                  # 54 project images
├── Dockerfile                  # Multi-stage Docker build
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/aorizondo/cienfuegos-glass.git
cd cienfuegos-glass
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
# Edit .env.local if needed
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

The application will auto-reload as you make changes.

### Production Build

```bash
npm run build
npm start
```

The build creates a standalone Next.js application optimized for production.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete EasyPanel deployment instructions.

## Docker Deployment (EasyPanel)

### Build Image

```bash
docker build -t cienfuegos-glass .
```

### Run Container

```bash
docker run -p 3000:3000 cienfuegos-glass
```

### Deploy to EasyPanel

1. Push this repository to GitHub
2. In EasyPanel, create a new service from GitHub
3. Select this repository
4. EasyPanel will automatically detect the Dockerfile
5. Set the port to 3000
6. Deploy!

## Features

- ✅ **Responsive Design** - Mobile-first approach, works perfectly on all devices
- ✅ **SEO Optimized** - Metadata, OpenGraph, JSON-LD LocalBusiness schema, sitemap.xml, robots.txt
- ✅ **Cookie Consent** - GDPR-compliant cookie banner
- ✅ **Gallery** - 54 high-quality project images with lightbox and filters
- ✅ **Contact Form** - Working form with validation
- ✅ **Performance** - Optimized images, lazy loading, smooth animations
- ✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Dark Mode** - Premium dark theme with blue accent colors

## Brand Colors

- **Primary**: `#1B4F72` (Navy Blue)
- **Accent**: `#85C1E9` (Crystal Blue)
- **Gold**: `#D4AC0D` (Premium Gold)
- **Dark**: `#0D1117` (Almost Black)
- **Light**: `#F4F8FB` (Off-White)

## Fonts

- **Display**: Playfair Display (Google Fonts) - Headings
- **Body**: Inter (Google Fonts) - Body text

## Contact Information

- **Phone**: +1 (786) 877-7405
- **WhatsApp**: https://wa.me/17868777405
- **Email**: info@cienfuegosglass.com
- **Address**: 12831 SW 17th St, Miami, FL 33175
- **Facebook**: https://www.facebook.com/cienfuegosglass
- **Business Hours**: Mon-Fri 8am-5pm, Sat 9am-1pm

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Page Size**: ~140KB First Load JS
- **Time to Interactive**: < 2 seconds

## License

© 2025 Cienfuegos Glass LLC. All rights reserved.
