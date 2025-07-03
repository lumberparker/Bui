# BUI - Landing Page

A visually rich, responsive landing page for BUI water products featuring dynamic carousels, bilingual support, and advanced CSS effects.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with breakpoints at 1024px, 768px, and 480px
- **Bilingual Support**: Spanish/English translation system
- **Dynamic Product Carousel**: Auto-sliding product showcase with hover controls
- **Modular BEM CSS**: Organized component-based styling architecture

### Visual Effects
- **Video Background**: Hero section with multiple video backgrounds
- **Glass/Ice Effects**: Modern glassmorphism design elements
- **3D Objects**: Interactive 3D product presentations
- **Water Ripple**: Animated water ripple effects
- **Curved Text**: Text that follows circular paths
- **Colored Circles**: Dynamic product backdrop circles from JSON data

### Interactive Elements
- **Product Carousel**: 
  - Shows one product at a time in center position
  - 2.5-second display time per product
  - 0.5-second smooth transitions
  - Hover to pause functionality
  - Infinite smooth scrolling
- **Hover Effects**: Scale transforms, color changes, and smooth transitions
- **Dynamic Navigation**: Responsive navigation with mobile optimization

## 📁 Project Structure

```
/
├── index.html                 # Main HTML file
├── styles.css                 # Main CSS import file
├── Blocks/                    # BEM CSS modules
│   ├── page.css              # Global page styles
│   ├── header.css            # Header/navigation
│   ├── hero.css              # Hero section with video
│   ├── marquee.css           # Scrolling text effects
│   ├── conoce.css            # About section
│   ├── propiedades.css       # Properties section
│   ├── presentaciones.css    # 3D presentations
│   ├── productos.css         # Product carousel
│   ├── showcase.css          # Product showcase
│   └── footer.css            # Footer with grid layout
├── Fonts/                    # Custom font definitions
│   └── fonts.css
├── scripts/                  # JavaScript functionality
│   ├── index.js             # Main application logic
│   └── loader.js            # Page loading animations
├── assets/                   # Data and content
│   ├── productos.json       # Product data with colors
│   └── translations.json    # Bilingual text content
├── videos/                   # Video assets
└── images/                   # Static images
```

## 🎨 CSS Architecture

### BEM Methodology
- **Block**: Independent component (e.g., `.productos`)
- **Element**: Part of block (e.g., `.productos__card`)
- **Modifier**: Variation of block/element (e.g., `.productos__card--featured`)

### Key Sections
1. **Hero**: Video backgrounds with carousel navigation
2. **Marquee**: Animated scrolling text
3. **Conoce**: About section with interactive elements
4. **Propiedades**: Product properties showcase
5. **Presentaciones**: 3D product presentations with water effects
6. **Productos**: Dynamic carousel with JSON-driven content
7. **Showcase**: Additional product displays
8. **Footer**: Grid layout with bottle hover effects

## 🔧 Dynamic Features

### Product Carousel System
- **JSON-Driven**: Products loaded from `/assets/productos.json`
- **Dynamic Animation**: CSS keyframes generated based on product count
- **Responsive Sizing**: Different card sizes for mobile/desktop
- **Color Circles**: Each product has a custom colored circle backdrop

### Product Data Structure
```json
{
  "productos": [
    {
      "id": 1,
      "image": "/images/agua-natural.png",
      "title": "Agua de manantial natural",
      "sizes": ["10 Oz / 290 ml", "16 Oz / 473 ml", "32 Oz / 946 ml"],
      "circleColor": "#e3f2fd"
    }
  ]
}
```

### Translation System
- **Centralized**: All text in `/assets/translations.json`
- **Attribute-Based**: HTML elements use `data-translate` attributes
- **Language Toggle**: Switch between Spanish and English

## 💻 JavaScript Functionality

### Classes and Components
- **HeroCarousel**: Video background management and navigation
- **ProductsGrid**: Dynamic product loading and carousel generation
- **Translation System**: Language switching and text replacement
- **Animation Controllers**: Scroll-based and hover-based animations

### Key Features
- **Dynamic CSS Generation**: Carousel keyframes based on product count
- **Responsive Behavior**: Different animations for mobile vs desktop
- **Performance Optimization**: Hardware-accelerated transforms
- **Error Handling**: Fallback content for failed JSON loads

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1024px (3-column grid, full animations)
- **Tablet**: 768px - 1024px (2-column grid, reduced animations)
- **Mobile**: < 768px (1-column, touch-optimized carousel)

### Mobile Optimizations
- **Touch Scrolling**: Native touch scrolling for carousels
- **Reduced Motion**: Simplified animations on smaller screens
- **Optimized Sizing**: Appropriate font and spacing scales
- **Hidden Scrollbars**: Clean appearance on mobile devices

## 🚀 Getting Started

### Prerequisites
- Modern web browser with CSS Grid and Flexbox support
- Local web server (for proper JSON loading)

### Setup
1. Clone or download the project files
2. Serve the files through a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

### Adding Products
1. Edit `/assets/productos.json`
2. Add product objects with required fields:
   - `id`: Unique identifier
   - `image`: Path to product image
   - `title`: Product name
   - `sizes`: Array of available sizes
   - `circleColor`: Hex color for backdrop circle
3. Carousel will automatically adjust to new product count

### Customizing Translations
1. Edit `/assets/translations.json`
2. Add new keys in both language objects
3. Use `data-translate="key"` in HTML elements

## 🎯 Performance Features

- **Hardware Acceleration**: CSS transforms for smooth animations
- **Lazy Loading**: Images load as needed
- **Optimized Animations**: 60fps smooth transitions
- **Efficient DOM**: Minimal reflows and repaints
- **Responsive Images**: Appropriate sizing for different screens

## 🔧 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **CSS Features**: Grid, Flexbox, Custom Properties, Transforms
- **JavaScript**: ES6+ features (const/let, arrow functions, template literals)

## 📝 License

This project is proprietary software for BUI brand water products.

## 👥 Contributing

For internal development only. Contact the development team for contribution guidelines.

---

**Last Updated**: July 3, 2025  
**Version**: 1.0.0  
**Developer**: Development Team