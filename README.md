# BUI - Natural Spring Water Landing Page

A visually rich, responsive, and bilingual landing page for BUI natural spring water brand. Features advanced visual effects, video hero carousel, water ripple animations, custom cursor interactions, and comprehensive mobile optimization built with modular BEM CSS architecture.

## 🌟 Features

### Core Functionality
- **Bilingual Support** - Automatic language detection based on user location with manual toggle
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Video Hero Carousel** - Auto-sliding carousel with video backgrounds and dot navigation
- **Advanced Visual Effects** - Water ripple effects, custom cursor, bottle lean animations
- **Modular Architecture** - BEM CSS methodology with component-based structure
- **Touch Optimized** - Smooth scrolling and touch interactions for mobile devices

### Interactive Features
- **Water Ripple Effect** - Click interactions create expanding water ripple animations
- **Custom Cursor** - Dynamic cursor that changes on interactive elements
- **Bottle Lean Animation** - Footer bottle image leans left on hover
- **Video Hover Effects** - Product presentation videos play on hover
- **Smooth Transitions** - CSS transitions and animations throughout
- **Auto-Slide Carousel** - Hero section with configurable timing and pause on hover
- **Sticky Header** - Fixed header with glass morphism effect on scroll
- **Ice-Clear Glass Effects** - Crystal-clear frosted glass backgrounds

### Sections
1. **Hero Section**: Multi-slide video carousel with overlay content and navigation
2. **Marquee**: Seamless scrolling text animation
3. **Conoce Section**: Introduction with custom wavy SVG borders
4. **Propiedades**: Product properties with responsive grid layout
5. **Presentaciones**: Interactive product presentations with ripple effects
6. **Showcase**: Full-screen video background with centered overlay
7. **Footer**: CSS Grid 10x4 layout with responsive mobile arrangement

## 🚀 Technologies Used

- **HTML5**: Semantic markup with accessibility features and proper video elements
- **CSS3**: Modern CSS with Grid, Flexbox, custom properties, and advanced animations
- **JavaScript ES6+**: Modular classes, async/await patterns, and event delegation
- **SVG**: Custom graphics, icons, and wavy borders
- **Web APIs**: Geolocation for language detection and media queries
- **BEM Methodology**: Block Element Modifier CSS architecture for maintainability

## 📁 Project Structure

```
Bui/
├── index.html                 # Main HTML file
├── styles.css                 # Main CSS imports
├── README.md                  # This file
├── Blocks/                    # Modular CSS components
│   ├── header.css            # Header and navigation
│   ├── hero.css              # Hero carousel section
│   ├── marquee.css           # Scrolling marquee
│   ├── conoce.css            # Conoce section
│   ├── propiedades.css       # Properties section
│   ├── presentaciones.css    # Presentations section
│   ├── showcase.css          # Showcase section
│   ├── footer.css            # Footer grid layout
│   └── page.css              # Global styles and resets
├── Fonts/
│   └── fonts.css             # Google Fonts imports
├── scripts/
│   ├── index.js              # Main JavaScript functionality
│   └── loader.js             # Page loader
├── translations/
│   └── translations.json     # Bilingual content
├── images/                   # Static images
│   ├── logo.png
│   ├── botella.png
│   ├── bui-slide-1.jpeg
│   └── [other images]
└── videos/                   # Video assets
    ├── Looping_Waterfall_Video_Generated.mp4
    ├── bui-slide-animated.mp4
    ├── bui-girl.mp4
    └── bottle-drip.mp4
```

## 🎨 CSS Architecture

### BEM Methodology
The project follows Block Element Modifier (BEM) naming convention:
```css
.block__element--modifier
```

### Modular Design
- Each section has its own CSS file in the `/Blocks` directory
- Responsive breakpoints defined consistently across components
- Mobile-first approach with progressive enhancement

### Key Breakpoints
- **Mobile**: 320px - 767px (default mobile-first)
- **Tablet**: 768px - 1023px 
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Mobile-Specific Optimizations
- **Touch Scrolling**: -webkit-overflow-scrolling and touch-action properties
- **Hamburger Menu**: Animated mobile navigation with smooth transitions
- **Footer Mobile Layout**: Bottle and nav side-by-side, centered organization icons
- **Video Autoplay**: Enhanced mobile video handling with proper playsinline attributes
- **Sticky Header**: Fixed header with proper viewport constraints and glass effects
- **VW Typography**: Viewport-width responsive text scaling across all components

## 🔧 JavaScript Features

### Hero Carousel
- Auto-sliding every 10 seconds (configurable - currently set to 5s for debugging)
- Pause on hover with visual feedback
- Dot navigation with click-to-jump functionality
- Smooth transitions with error handling and logging
- Support for video backgrounds with fallback images
- Touch-friendly navigation on mobile devices

### Language Management
- Automatic language detection via IP geolocation (ipapi.co)
- Country-to-language mapping for accurate detection
- Fallback to browser language if geolocation fails
- Dynamic content updates across all sections
- Persistent language selection across page interactions

### Interactive Effects
- **Water Ripple Effect**: CSS keyframe animations triggered by JavaScript clicks
- **Custom Cursors**: Context-aware cursor changes with utility functions
- **Video Hover**: Smooth video playback control with proper mobile handling
- **Bottle Lean**: CSS transform hover effect with custom cursor integration
- **Smooth Scrolling**: Optimized for touch devices with momentum scrolling
- **Ice-Clear Glass**: Crystal-clear frosted glass backgrounds with backdrop-filter
- **Sticky Header Glass**: Dynamic glass morphism effect on scroll

### Utility Functions
```javascript
// Global utility functions available
toggleCustomCursor(element, add)  // Add/remove custom cursor
createRippleEffect(element, event) // Create water ripple animation
```

### Classes Overview
```javascript
class HeroCarousel          // Carousel with auto-slide, debugging, and error handling
class LanguageManager       // Bilingual support with geolocation and browser fallback
class HamburgerMenu        // Mobile navigation with smooth animations
class VideoAutoplayManager // Video playback control with mobile optimization
class RippleEffect         // Water ripple animations with cleanup
class PageLoader           // Media loading with progress tracking
class StickyHeader         // Sticky header with glass morphism scroll effect
```

### Debug Features
- Console logging for carousel functionality
- Error handling for failed video loads
- Geolocation fallback mechanisms
- Media loading progress tracking

## 🌐 Bilingual Support

### Language Detection
1. **IP Geolocation**: Primary method using `ipapi.co`
2. **Browser Language**: Fallback detection
3. **Manual Toggle**: User can switch languages

### Content Structure
```json
{
  "es": {
    "title": "BUI",
    "nav": ["Nosotros", "Productos", "Contacto"],
    "slides": [...]
  },
  "en": {
    "title": "BUI", 
    "nav": ["About Us", "Products", "Contact"],
    "slides": [...]
  }
}
```

## 📱 Responsive Design

### Mobile Optimizations
- **Touch Scrolling**: Smooth scrolling with momentum
- **Hamburger Menu**: Collapsible navigation
- **Vertical Layouts**: Stacked sections on mobile
- **Optimized Media**: Proper video playback on mobile devices

### Footer Layout
- **Desktop**: CSS Grid 10x4 layout (297px height) with precise column placement
- **Mobile**: 3-row responsive layout with bottle/nav side-by-side
- **Organization Logos**: Horizontal rows with proper spacing and centering
- **No Empty Grid Cells**: Pure CSS grid implementation without spacer divs
- **Hover Effects**: Bottle image leans left with custom cursor integration

## 🎬 Media Management

### Video Features
- **Auto-play**: Muted videos with loop
- **Mobile Support**: Enhanced mobile video handling
- **Hover Effects**: Play on hover for presentation videos
- **Background Videos**: Hero and showcase sections

### Image Optimization
- **Responsive Images**: Proper sizing across devices
- **Lazy Loading**: Implemented via loader.js
- **Custom Effects**: Lean animation on bottle hover

## ⚡ Performance Features

### Loading Strategy
- **Page Loader**: Custom loader with animated GIF that waits for all media
- **Media Loading**: Progressive loading of videos and images with error handling
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Lazy Loading**: Efficient media loading with proper fallbacks

### Optimization
- **Modular CSS**: BEM methodology with component separation
- **Efficient JavaScript**: Event delegation, proper cleanup, and memory management
- **Mobile Performance**: Touch-optimized interactions with hardware acceleration
- **Video Optimization**: Proper mobile video attributes and autoplay handling

## 🛠️ Setup & Installation

1. **Clone or Download** the project files
2. **Serve via HTTP Server** (required for video playback):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Access** via `http://localhost:8000`

## 🔧 Configuration

### Carousel Settings
```javascript
// In scripts/index.js - startAutoSlide()
this.autoSlideInterval = setInterval(() => {
    this.nextSlide();
}, 10000); // Default: 10 seconds (can be set to 5s for debugging)
```

### Glass Effects Configuration
```javascript
// Hero content ice-clear glass effect
background: rgba(255, 255, 255, 0.05); // Almost transparent
backdrop-filter: blur(8px) saturate(120%) brightness(110%);

// Sticky header glass effect on scroll
background: rgba(246, 244, 245, 0.2); // Semi-transparent
backdrop-filter: blur(10px);
```

### Debug Configuration
```javascript
// Enable debug logging
console.log('Carousel initialized:', this.slides.length, 'slides'); // Currently active
```

### Language Settings
```javascript
// In scripts/index.js - LanguageManager constructor
this.currentLanguage = 'es'; // Default language
this.countryLanguageMap = {
    'AR': 'es', 'CO': 'es', 'MX': 'es', 'ES': 'es',
    'US': 'en', 'CA': 'en', 'GB': 'en', 'AU': 'en'
}; // Country to language mapping
```

### Responsive Breakpoints
```css
/* In Blocks/*.css files */
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 896px) { /* Tablet */ }
@media (max-width: 1024px) { /* Small desktop */ }

/* VW Typography for Fluid Scaling */
font-size: 4.0vw; /* Scales with viewport width */
line-height: 4.2vw; /* Proportional line heights */
```

## 🎯 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Glass Effects**: Modern browsers with backdrop-filter support
- **Progressive Enhancement**: Core functionality works on older browsers
- **Fallback Support**: Graceful degradation for unsupported features

## 🐛 Troubleshooting

### Common Issues

1. **Videos not playing**:
   - Ensure serving via HTTP (not file://) - videos require server environment
   - Check video file paths and formats (MP4 recommended)
   - Verify mobile autoplay settings (muted, playsInline attributes)
   - Check browser console for media loading errors

2. **Carousel not auto-sliding**:
   - Check browser console for JavaScript errors and debug logs
   - Verify hero section HTML structure and slide generation
   - Ensure scripts are loading properly and in correct order
   - Check if carousel is paused due to hover state

3. **Language detection not working**:
   - Check network connectivity for geolocation API (ipapi.co)
   - Verify translations.json file exists and is accessible
   - Check browser console for CORS or API errors
   - Test browser language fallback mechanism

4. **Mobile scrolling issues**:
   - Ensure touch-action CSS properties are properly set
   - Check for conflicting JavaScript event handlers (preventDefault)
   - Verify user-select properties aren't preventing touch
   - Test -webkit-overflow-scrolling: touch implementation

5. **Interactive effects not working**:
   - Check if ripple effect CSS keyframes are loading
   - Verify custom cursor utility functions are available globally
   - Test click event delegation and element targeting
   - Check z-index stacking contexts for overlay elements

## 📈 Future Enhancements

- [ ] Contact form integration with backend API
- [ ] Product catalog expansion with CMS integration
- [ ] E-commerce functionality and shopping cart
- [ ] PWA implementation with service workers
- [ ] Performance analytics and user tracking
- [ ] SEO optimizations and meta tag management
- [ ] Additional language support (Portuguese, French)
- [ ] Advanced video controls and playback options
- [ ] Social media integration and sharing features
- [ ] A/B testing capabilities for content optimization

## 🔍 Development Notes

### Recent Updates
- Hero carousel debugging with console logging and error handling
- Mobile scrolling optimization with proper touch properties
- Footer layout refined to pure CSS grid without empty spacers  
- Water ripple effects and custom cursor interactions implemented
- Comprehensive responsive breakpoints and mobile-first design
- Language detection improved with country mapping and fallbacks

### Performance Considerations
- Video files should be optimized for web (under 10MB recommended)
- Images should use modern formats (WebP with fallbacks)
- CSS is split into modules for better caching
- JavaScript uses event delegation for better performance

## 📄 License

This project is proprietary to BUI Water Company. All rights reserved.

## 👥 Credits

- **Development**: Custom implementation
- **Design**: Modern web standards
- **Fonts**: Google Fonts (Josefin Sans, Poppins)
- **Icons**: Custom SVG implementations

---

**Last Updated**: July 2025  
**Version**: 1.0.0  
**Status**: Production Ready

For technical support or feature requests, please refer to the development documentation or contact the project maintainers.
