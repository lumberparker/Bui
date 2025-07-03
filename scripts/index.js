// Hero Carousel Functionality
class HeroCarousel {
    constructor() {
        console.log('HeroCarousel constructor called');
        this.slidesContainer = document.querySelector('.hero__carousel');
        this.slides = document.querySelectorAll('.hero__slide');
        this.dotsContainer = document.querySelector('.hero__dots');
        
        console.log('Slides container:', this.slidesContainer);
        console.log('Slides found:', this.slides);
        console.log('Dots container:', this.dotsContainer);
        
        if (!this.slidesContainer) {
            console.error('No slides container found (.hero__carousel)');
            return;
        }
        
        if (!this.slides.length) {
            console.error('No slides found (.hero__slide)');
            return;
        }
        
        if (!this.dotsContainer) {
            console.error('No dots container found (.hero__dots)');
            return;
        }
        
        this.dots = [];
        this.currentSlide = 0;
        this.autoSlideInterval = null;
        this.isTransitioning = false;
        
        console.log('HeroCarousel initialized, calling init()');
        this.init();
    }
    
    init() {
        console.log('Initializing hero carousel...');
        console.log('Found slides:', this.slides.length);
        
        // Ensure first slide is active
        this.slides.forEach((slide, index) => {
            slide.classList.remove('hero__slide--active');
            if (index === 0) {
                slide.classList.add('hero__slide--active');
            }
        });
        
        // Generate dots based on number of slides
        this.generateDots();
        
        // Add click event listeners to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Start auto-sliding
        this.startAutoSlide();
        console.log('Auto-slide started');
        
        // Pause auto-slide on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                console.log('Mouse entered hero - pausing auto-slide');
                this.pauseAutoSlide();
            });
            heroSection.addEventListener('mouseleave', () => {
                console.log('Mouse left hero - resuming auto-slide');
                this.startAutoSlide();
            });
        }
    }
    
    generateDots() {
        // Clear existing dots
        this.dotsContainer.innerHTML = '';
        this.dots = [];
        
        // Create dots for each slide
        this.slides.forEach((slide, index) => {
            const dot = document.createElement('button');
            dot.className = index === 0 ? 'hero__dot hero__dot--active' : 'hero__dot';
            dot.setAttribute('data-slide', index);
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    }
    
    goToSlide(slideIndex) {
        if (this.isTransitioning || slideIndex === this.currentSlide) {
            return;
        }
        
        // Ensure slideIndex is within bounds
        slideIndex = slideIndex % this.slides.length;
        if (slideIndex < 0) slideIndex = this.slides.length - 1;
        
        this.isTransitioning = true;
        
        const currentSlideElement = this.slides[this.currentSlide];
        const nextSlideElement = this.slides[slideIndex];
        
        // Update dots immediately
        this.dots[this.currentSlide].classList.remove('hero__dot--active');
        this.dots[slideIndex].classList.add('hero__dot--active');
        
        // Simple cross-fade: activate next slide immediately, then fade out current
        nextSlideElement.classList.add('hero__slide--active');
        
        // Update current slide index
        this.currentSlide = slideIndex;
        
        // Fade out the previous slide after a short delay
        setTimeout(() => {
            currentSlideElement.classList.remove('hero__slide--active');
            this.isTransitioning = false;
        }, 100);
        
        // Reset auto-slide timer
        this.resetAutoSlide();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoSlide() {
        this.pauseAutoSlide(); // Clear any existing interval
        console.log('Starting auto-slide with 5 second intervals');
        this.autoSlideInterval = setInterval(() => {
            console.log('Auto-advancing to next slide');
            this.nextSlide();
        }, 10000); // 5 seconds for testing
    }
    
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    resetAutoSlide() {
        this.startAutoSlide();
    }
    
    // Method to refresh carousel if slides are added dynamically
    refresh() {
        this.slides = document.querySelectorAll('.hero__slide');
        this.currentSlide = 0;
        this.generateDots();
        this.init();
    }
}

// Language Detection and Content Management
class LanguageManager {
    constructor() {
        this.currentLanguage = 'es'; // Default to Spanish
        this.content = null; // Will be loaded from translations.json
        
        this.init();
    }
    
    async init() {
        // Load translations first
        await this.loadTranslations();
        
        // Initialize language switcher
        this.initLanguageSwitcher();
        
        try {
            // First, try to detect location using a free IP geolocation service
            const language = await this.detectLanguageByLocation();
            this.setLanguage(language);
            this.updateLanguageSwitcher(language);
        } catch (error) {
            console.log('Location detection failed, using browser language');
            // Fallback to browser language detection
            this.detectLanguageByBrowser();
            this.updateLanguageSwitcher(this.currentLanguage);
        }
    }
    
    // Load translations from external JSON file
    async loadTranslations() {
        try {
            const response = await fetch('./translations/translations.json');
            if (!response.ok) {
                throw new Error(`Failed to load translations: ${response.status}`);
            }
            this.content = await response.json();
            console.log('Translations loaded successfully');
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to default content if loading fails
            this.content = {
                es: {
                    title: 'BUI',
                    nav: ['Nosotros', 'Productos', 'Contacto'],
                    slides: [{ title: 'BUI', subtitle: 'Agua natural de manantial' }],
                    marquee: 'ERES LO QUE TOMAS, ',
                    conoce: { text: 'b\'ui es agua natural', button: 'CONOCE MÁS' },
                    propiedades: { title: 'PROPIEDADES', items: ['Natural'] },
                    presentaciones: { title: 'Presentaciones', items: ['Agua'] },
                    showcase: { title: 'Agua natural' }
                },
                en: {
                    title: 'BUI',
                    nav: ['About Us', 'Products', 'Contact'],
                    slides: [{ title: 'BUI', subtitle: 'Natural spring water' }],
                    marquee: 'YOU ARE WHAT YOU DRINK, ',
                    conoce: { text: 'b\'ui is natural water', button: 'LEARN MORE' },
                    propiedades: { title: 'PROPERTIES', items: ['Natural'] },
                    presentaciones: { title: 'Presentations', items: ['Water'] },
                    showcase: { title: 'Natural water' }
                }
            };
        }
    }
    
    // Initialize language switcher buttons
    initLanguageSwitcher() {
        const langSwitcher = document.querySelector('.header__language-switcher');
        if (langSwitcher) {
            langSwitcher.addEventListener('click', () => {
                const newLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
                this.setLanguage(newLanguage);
                this.updateLanguageSwitcher(newLanguage);
            });
        }
        
        // Set initial state
        this.updateLanguageSwitcher(this.currentLanguage);
    }
    
    // Update navigation menu content
    updateNavigation(language) {
        const navLinks = document.querySelectorAll('.header__nav-link');
        const navContent = this.content[language].nav;
        
        navLinks.forEach((link, index) => {
            if (navContent[index]) {
                link.textContent = navContent[index];
            }
        });
    }
    
    // Update language switcher visual state
    updateLanguageSwitcher(activeLanguage) {
        const langSwitcher = document.querySelector('.header__language-switcher');
        if (!langSwitcher) return;
        
        const flag = langSwitcher.querySelector('.header__flag');
        const text = langSwitcher.querySelector('.header__lang-text');
        
        if (activeLanguage === 'es') {
            // Show English option since Spanish is active
            flag.textContent = '🇺🇸';
            text.textContent = 'ENG';
        } else {
            // Show Spanish option since English is active
            flag.textContent = '🇲🇽';
            text.textContent = 'ESP';
        }
    }
    
    async detectLanguageByLocation() {
        try {
            // Using a free IP geolocation service
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            // Check if user is from Mexico or other Spanish-speaking countries
            const spanishCountries = ['MX', 'ES', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY', 'CR', 'PA', 'GT', 'HN', 'SV', 'NI', 'DO', 'CU'];
            const userCountry = data.country_code;
            
            console.log('Detected country:', userCountry);
            
            if (userCountry === 'US') {
                return 'en';
            } else if (spanishCountries.includes(userCountry)) {
                return 'es';
            } else {
                // For other countries, use browser language as fallback
                return this.getBrowserLanguage();
            }
        } catch (error) {
            console.error('IP geolocation failed:', error);
            // Try alternative service
            try {
                const response = await fetch('https://api.country.is/');
                const data = await response.json();
                const userCountry = data.country;
                
                console.log('Detected country (alternative):', userCountry);
                
                if (userCountry === 'US') {
                    return 'en';
                } else if (userCountry === 'MX') {
                    return 'es';
                } else {
                    return this.getBrowserLanguage();
                }
            } catch (secondError) {
                console.error('Alternative geolocation failed:', secondError);
                throw new Error('All location detection methods failed');
            }
        }
    }
    
    detectLanguageByBrowser() {
        const browserLang = this.getBrowserLanguage();
        this.setLanguage(browserLang);
    }
    
    getBrowserLanguage() {
        const lang = navigator.language || navigator.languages[0];
        return lang.startsWith('en') ? 'en' : 'es'; // Default to Spanish unless explicitly English
    }
    
    setLanguage(language) {
        this.currentLanguage = language;
        this.updateContent();
        
        // Update HTML lang attribute
        document.documentElement.lang = language === 'es' ? 'es' : 'en';
        
        // Update page title if content is loaded
        if (this.content && this.content[language]) {
            document.title = this.content[language].title;
        }
    }
    
    updateContent() {
        // Check if translations are loaded
        if (!this.content || !this.content[this.currentLanguage]) {
            console.warn('Translations not loaded yet, skipping content update');
            return;
        }
        
        const slides = document.querySelectorAll('.hero__slide');
        const content = this.content[this.currentLanguage];
        
        // Update slide content
        slides.forEach((slide, index) => {
            if (content.slides[index]) {
                const title = slide.querySelector('.hero__content-title');
                const subtitle = slide.querySelector('.hero__content-subtitle');
                
                if (title) title.textContent = content.slides[index].title;
                if (subtitle) subtitle.textContent = content.slides[index].subtitle;
            }
        });
        
        // Update marquee content
        const marqueeTexts = document.querySelectorAll('.marquee__text');
        const marqueeContent = content.marquee.repeat(6); // Repeat 6 times as in original
        
        marqueeTexts.forEach(text => {
            text.textContent = marqueeContent;
        });
        
        // Update conoce section
        const conoceText = document.querySelector('.conoce__content_text-main');
        const conoceButton = document.querySelector('.conoce__content_text-button');
        
        if (conoceText) conoceText.textContent = content.conoce.text;
        if (conoceButton) conoceButton.textContent = content.conoce.button;
        
        // Update propiedades section
        const propiedadesTitle = document.querySelector('.propiedades__content_title');
        const propiedadesItems = document.querySelectorAll('.propiedades__content_item');
        
        if (propiedadesTitle) propiedadesTitle.textContent = content.propiedades.title;
        propiedadesItems.forEach((item, index) => {
            if (content.propiedades.items[index]) {
                item.textContent = content.propiedades.items[index];
            }
        });
        
        // Update presentaciones section
        const presentacionesTitle = document.querySelector('.presentaciones__title');
        const presentacionesTitles = document.querySelectorAll('.presentaciones__item-title');
        
        if (presentacionesTitle) presentacionesTitle.textContent = content.presentaciones.title;
        presentacionesTitles.forEach((title, index) => {
            if (content.presentaciones.items[index]) {
                title.textContent = content.presentaciones.items[index];
            }
        });
        
        // Update showcase section
        const showcaseTitle = document.querySelector('.showcase__title');
        if (showcaseTitle) showcaseTitle.textContent = content.showcase.title;
        
        // Update navigation menu
        this.updateNavigation(this.currentLanguage);
    }
    
    // Public method to manually switch language (can be used for language toggle button)
    switchLanguage(language) {
        if (this.content[language]) {
            this.setLanguage(language);
        }
    }
}

// Hamburger Menu Functionality
class HamburgerMenu {
    constructor() {
        this.hamburger = document.querySelector('.header__hamburger');
        this.navList = document.querySelector('.header__nav-list');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        if (this.hamburger && this.navList) {
            this.hamburger.addEventListener('click', () => this.toggle());
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.header__nav') && this.isOpen) {
                    this.close();
                }
            });
            
            // Close menu when clicking on nav links
            const navLinks = document.querySelectorAll('.header__nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }
    }
    
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.hamburger.classList.add('header__hamburger--active');
        this.navList.classList.add('header__nav-list--active');
        this.isOpen = true;
    }
    
    close() {
        this.hamburger.classList.remove('header__hamburger--active');
        this.navList.classList.remove('header__nav-list--active');
        this.isOpen = false;
    }
}

// Simple Presentaciones Video Functionality
function initPresentacionesVideos() {
    console.log('Setting up presentaciones videos...');
    
    const items = document.querySelectorAll('.presentaciones__item');
    console.log('Found presentaciones items:', items.length);
    
    items.forEach((item, index) => {
        const media = item.querySelector('.presentaciones__media');
        const video = item.querySelector('.presentaciones__video');
        const image = item.querySelector('.presentaciones__imagen');
        
        console.log(`Item ${index}:`, { 
            hasMedia: !!media,
            hasVideo: !!video, 
            hasImage: !!image,
            videoSrc: video ? video.src : 'none'
        });
        
        if (media && video && image) {
            // Ensure video is properly configured
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = 'auto';
            
            // Test if video can load
            video.addEventListener('loadeddata', () => {
                console.log(`Video ${index} data loaded successfully`);
            });
            
            video.addEventListener('error', (e) => {
                console.error(`Video ${index} error:`, e, video.src);
            });
            
            // Mouse enter - play video (on media wrapper)
            media.addEventListener('mouseenter', async () => {
                console.log(`Mouse enter item ${index}`);
                try {
                    video.currentTime = 0;
                    await video.play();
                    console.log(`Video ${index} playing on hover`);
                } catch (error) {
                    console.error(`Video ${index} hover play failed:`, error);
                }
            });
            
            // Mouse leave - pause video (on media wrapper)
            media.addEventListener('mouseleave', () => {
                console.log(`Mouse leave item ${index}`);
                video.pause();
                video.currentTime = 0;
            });
            
            // Click test (on media wrapper)
            media.addEventListener('click', async () => {
                console.log(`Clicked item ${index} - testing video play`);
                try {
                    video.currentTime = 0;
                    await video.play();
                    console.log(`Video ${index} playing on click`);
                } catch (error) {
                    console.error(`Video ${index} click play failed:`, error);
                }
            });
            
            console.log(`Setup complete for item ${index}`);
        } else {
            console.warn(`Item ${index} missing media, video or image element`);
        }
    });
}

// Video Autoplay Manager for Small Screens
class VideoAutoplayManager {
    constructor() {
        this.isSmallScreen = window.innerWidth <= 768;
        this.init();
    }
    
    init() {
        this.checkScreenSize();
        this.forceVideoAutoplay();
        
        // Listen for window resize
        window.addEventListener('resize', () => {
            this.checkScreenSize();
            this.forceVideoAutoplay();
        });
    }
    
    checkScreenSize() {
        this.isSmallScreen = window.innerWidth <= 768;
    }
    
    forceVideoAutoplay() {
        if (!this.isSmallScreen) return;
        
        // Force autoplay for hero videos
        const heroVideos = document.querySelectorAll('.hero__video');
        heroVideos.forEach(video => {
            this.enforceVideoAttributes(video);
        });
        
        // Force autoplay for showcase video
        const showcaseVideo = document.querySelector('.showcase__video');
        if (showcaseVideo) {
            this.enforceVideoAttributes(showcaseVideo);
        }
        
        // Force autoplay for presentaciones videos
        const presentacionesVideos = document.querySelectorAll('.presentaciones__video');
        presentacionesVideos.forEach(video => {
            this.enforceVideoAttributes(video);
        });
    }
    
    enforceVideoAttributes(video) {
        if (!video) return;
        
        // Set required attributes
        video.setAttribute('autoplay', 'true');
        video.setAttribute('muted', 'true');
        video.setAttribute('loop', 'true');
        video.setAttribute('playsinline', 'true');
        
        // Force play if not already playing
        video.muted = true;
        video.loop = true;
        
        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video autoplay successful on small screen');
            }).catch(error => {
                console.log('Video autoplay failed, retrying...', error);
                // Retry after a short delay
                setTimeout(() => {
                    video.play().catch(e => console.log('Video autoplay retry failed', e));
                }, 1000);
            });
        }
    }
}

// Ripple Effect for Presentaciones
class RippleEffect {
    constructor() {
        this.init();
    }
    
    init() {
        const mediaElements = document.querySelectorAll('.presentaciones__media');
        
        mediaElements.forEach(media => {
            media.addEventListener('click', (e) => {
                this.createRipple(media, e);
            });
        });
    }
    
    createRipple(element, event) {
        // Remove existing ripple class if present
        element.classList.remove('ripple-effect');
        
        // Force reflow to ensure class removal takes effect
        void element.offsetWidth;
        
        // Add ripple effect class
        element.classList.add('ripple-effect');
        
        // Remove the class after animation completes
        setTimeout(() => {
            element.classList.remove('ripple-effect');
        }, 1000);
        
        // Create additional ripple waves for enhanced effect
        this.createWaves(element, event);
    }
    
    createWaves(element, event) {
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        // Create multiple wave elements for layered effect
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.createSingleWave(element, size, i);
            }, i * 150);
        }
    }
    
    createSingleWave(element, size, index) {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,${0.3 - index * 0.1}) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: ${5 + index};
            animation: wave-expand 0.8s ease-out forwards;
        `;
        
        // Add CSS animation keyframes if not already present
        if (!document.querySelector('#wave-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'wave-animation-styles';
            style.textContent = `
                @keyframes wave-expand {
                    0% {
                        width: 0;
                        height: 0;
                        opacity: 0.8;
                    }
                    50% {
                        opacity: 0.4;
                    }
                    100% {
                        width: ${size * 1.5}px;
                        height: ${size * 1.5}px;
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        element.appendChild(wave);
        
        // Remove wave element after animation
        setTimeout(() => {
            if (wave.parentNode) {
                wave.parentNode.removeChild(wave);
            }
        }, 800);
    }
}

// Sticky Header with Glass Morphism Effect
class StickyHeader {
    constructor() {
        this.header = document.querySelector('.header');
        this.scrollThreshold = 50; // Pixels scrolled before effect activates
        this.init();
    }
    
    init() {
        if (!this.header) {
            console.warn('Header element not found');
            return;
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Initial check in case page is already scrolled
        this.handleScroll();
        
        console.log('Sticky header initialized');
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > this.scrollThreshold) {
            this.header.classList.add('header--scrolled');
        } else {
            this.header.classList.remove('header--scrolled');
        }
    }
}

// Text curving functionality for presentaciones
class TextCurver {
    constructor() {
        this.init();
    }
    
    init() {
        // Find all presentaciones item titles
        const titles = document.querySelectorAll('.presentaciones__item-title');
        
        titles.forEach(title => {
            this.wrapLetters(title);
        });
    }
    
    wrapLetters(titleElement) {
        // Add curve-text class
        titleElement.classList.add('curve-text');
        
        // Get the text content
        const text = titleElement.textContent;
        
        // Clear the element
        titleElement.innerHTML = '';
        
        // Wrap each letter in a span
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            if (letter === ' ') {
                // Handle spaces
                const space = document.createElement('span');
                space.innerHTML = '&nbsp;';
                space.classList.add('letter', 'space');
                titleElement.appendChild(space);
            } else {
                const letterSpan = document.createElement('span');
                letterSpan.textContent = letter;
                letterSpan.classList.add('letter');
                titleElement.appendChild(letterSpan);
            }
        }
    }
}

// Initialize carousel and language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - initializing components...');
    console.log('Document ready state:', document.readyState);
    
    // Check if hero elements exist
    const heroSection = document.querySelector('.hero');
    const heroCarousel = document.querySelector('.hero__carousel');
    const heroSlides = document.querySelectorAll('.hero__slide');
    const heroDots = document.querySelector('.hero__dots');
    
    console.log('Hero section:', heroSection);
    console.log('Hero carousel:', heroCarousel);
    console.log('Hero slides:', heroSlides.length);
    console.log('Hero dots container:', heroDots);
    
    try {
        // Initialize core components
        console.log('Creating HeroCarousel...');
        window.heroCarousel = new HeroCarousel();
        console.log('HeroCarousel created:', window.heroCarousel);
        
        console.log('Creating LanguageManager...');
        window.languageManager = new LanguageManager();
        
        console.log('Creating HamburgerMenu...');
        window.hamburgerMenu = new HamburgerMenu();
        
        console.log('Creating VideoAutoplayManager...');
        window.videoAutoplayManager = new VideoAutoplayManager();
        
        console.log('Creating RippleEffect...');
        window.rippleEffect = new RippleEffect();
        
        console.log('Creating StickyHeader...');
        window.stickyHeader = new StickyHeader();
        
        console.log('Creating TextCurver...');
        window.textCurver = new TextCurver();
        
        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error initializing components:', error);
    }
    
    // Initialize presentaciones videos with delay to ensure DOM is ready
    setTimeout(() => {
        console.log('Initializing presentaciones videos...');
        initPresentacionesVideos();
    }, 1000);
});
