# FireShield Pro - Emergency Tripod LED Light Digital Platform

A comprehensive, responsive digital product selling website for FireShield Pro, featuring adaptive mobile and desktop layouts for marketing and selling Emergency Tripod LED Lights for firefighters.

## 🚀 Features

### Website Modules
- **Home** - Hero section, product showcase, statistics, and lead generation
- **About** - Company vision, mission, and story
- **Features** - Detailed product features and specifications
- **Specifications** - Technical specifications and datasheets
- **Applications** - Target customers and use cases
- **Gallery** - Product images and videos
- **Benefits** - Advantages and ROI calculator
- **Comparison** - Competitor analysis
- **Certifications** - Safety certifications and standards
- **Testimonials** - Customer reviews and success stories
- **FAQ** - Frequently asked questions
- **Contact** - Contact form and information

### Lead Generation
- Request Demo
- Get Quotation
- Become Dealer
- Download Brochure
- Book Meeting

### Admin Dashboard
- Product management
- Enquiry management
- Dealer requests
- Analytics and reports
- Settings and configuration

### Advanced Features
- **AI Chatbot** - Intelligent customer support assistant
- **AR Preview** - Augmented reality product visualization
- **Order Tracking** - Real-time order status updates
- **Inventory Management** - Stock and warehouse management
- **Dealer Portal** - Dedicated dealer dashboard

## 📱 Responsive Design

### Mobile View (Native App Experience)
- Material Design-inspired UI components
- AppBar with logo and menu
- Bottom Navigation Bar (Home, Products, Cart, Profile)
- Full-width cards with touch-friendly buttons
- Vertical scrollable product lists
- Native-style transitions

### Desktop View (Professional Website)
- Professional landing page with navbar
- Sidebar navigation for user dashboard
- Modern e-commerce checkout flow
- Professional typography and spacing
- Full responsive scaling (mobile → tablet → desktop)

## 🛠️ Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FireShield Pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
FireShield Pro/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AIChatbot.jsx          # AI-powered chatbot
│   │   │   ├── ARPreview.jsx          # AR product preview
│   │   │   └── LeadGenerationButtons.jsx
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx          # Main layout wrapper
│   │   │   ├── MobileLayout.jsx       # Mobile-specific layout
│   │   │   ├── DesktopLayout.jsx      # Desktop-specific layout
│   │   │   ├── MobileAppBar.jsx       # Mobile top navigation
│   │   │   ├── MobileBottomNav.jsx    # Mobile bottom navigation
│   │   │   └── DesktopNavbar.jsx      # Desktop navigation
│   │   ├── hooks/
│   │   │   └── useMediaQuery.jsx      # Responsive breakpoint hook
│   │   └── pages/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Features.jsx
│   │       ├── Specifications.jsx
│   │       ├── Applications.jsx
│   │       ├── Gallery.jsx
│   │       ├── Benefits.jsx
│   │       ├── Comparison.jsx
│   │       ├── Certifications.jsx
│   │       ├── Testimonials.jsx
│   │       ├── FAQ.jsx
│   │       ├── Contact.jsx
│   │       ├── Products.jsx
│   │       ├── Cart.jsx
│   │       ├── Profile.jsx
│   │       ├── AdminDashboard.jsx
│   │       └── DealerPortal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      },
    },
  },
}
```

### Responsive Breakpoints
The project uses the following breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support, email support@fireshieldpro.com or visit our contact page at `http://localhost:3000/contact`

## 🎯 Target Customers

- Fire Departments
- Airports
- Industries
- Defence
- Police
- Mining
- Oil & Gas
- Hospitals
- NGOs

## 💰 Revenue Streams

- Direct sales
- Tenders
- Dealer network
- Bulk orders
- AMC (Annual Maintenance Contracts)
- Rentals
- Spare parts

## 🔐 Security Features

- Input validation on forms
- Secure payment processing integration ready
- User authentication ready
- Role-based access control (Admin/Dealer/User)

## 🚀 Performance Optimization

- Code splitting with React Router
- Lazy loading components
- Optimized images (ready for implementation)
- CSS purging with TailwindCSS
- Minified production builds

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Future Enhancements

- Real-time inventory sync
- Payment gateway integration (Stripe, PayPal)
- Advanced analytics dashboard
- Multi-language support
- Progressive Web App (PWA) features
- Offline mode support

---

Built with ❤️ for FireShield Pro
