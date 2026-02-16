// ============================== 
// TICONIAS - MAIN JAVASCRIPT
// ============================== 

// ============================== 
// PRODUCTOS DATA
// ============================== 
const products = [
    {
        name: "Pulsera Artesanal Tejida",
        description: "Hecha a mano con hilos naturales y cuentas de madera",
        category: "Accesorios",
        image: "https://instagram.fsjo8-1.fna.fbcdn.net/v/t51.75761-15/502345018_18388760992140906_1186535067617805300_n.webp?_nc_cat=102&ig_cache_key=MzY2MDI2MTk3OTUyMDk1MTQ1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzIifQ%3D%3D&_nc_ohc=aluCU4bqX-UQ7kNvwE5c5mw&_nc_oc=AdmE7eM3GrVCDn1C_THrKLe4bil1X3Rh534cJceX8bEqI2ZpJdJbE3HPYu0K8cTdqnrPsLENyD2zjvO1pZdqnL-_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsjo8-1.fna&_nc_gid=aS94EtG3qlqlQfBhZrku3Q&oh=00_AfvtVEcFz0MuFW4XrmqMTG46GfJkrnt7E07ZZ7rF-KcpiA&oe=69990539"
    },
    {
        name: "Collar de Semillas",
        description: "Collar único elaborado con semillas naturales y cerámica",
        category: "Accesorios",
        image: "https://instagram.fsjo8-1.fna.fbcdn.net/v/t51.75761-15/503580160_18386576416140906_5208879444101371048_n.webp?_nc_cat=109&ig_cache_key=MzY0NzkxMTMxMzE0NjM2OTM0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTI1OC5zZHIuQzIifQ%3D%3D&_nc_ohc=il9V1msXZRgQ7kNvwElV8DA&_nc_oc=Adn6yEDyb-w_halltWOORUSClKtI9LhKS5lsm6Zw65a5id0pONEYrnkXdHBUEItPOIz_JpbkyTs_2xbHxZlOPNex&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsjo8-1.fna&_nc_gid=db0W1VoV239hhsCHBQdaIQ&oh=00_Afseqw6LO-57KOl_PtP9czDe08WRM7_TECnGjDhNIbd_8w&oe=6998F67F"
    },
    {
        name: "Tapiz Decorativo",
        description: "Tapiz tejido a mano con diseños geométricos tradicionales",
        category: "Decoración",
        image: "https://instagram.fsjo8-1.fna.fbcdn.net/v/t51.75761-15/502345018_18388760992140906_1186535067617805300_n.webp?_nc_cat=102&ig_cache_key=MzY2MDI2MTk3OTUyMDk1MTQ1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzIifQ%3D%3D&_nc_ohc=aluCU4bqX-UQ7kNvwE5c5mw&_nc_oc=AdmE7eM3GrVCDn1C_THrKLe4bil1X3Rh534cJceX8bEqI2ZpJdJbE3HPYu0K8cTdqnrPsLENyD2zjvO1pZdqnL-_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsjo8-1.fna&_nc_gid=aS94EtG3qlqlQfBhZrku3Q&oh=00_AfvtVEcFz0MuFW4XrmqMTG46GfJkrnt7E07ZZ7rF-KcpiA&oe=69990539"
    },
    {
        name: "Macetero de Cerámica",
        description: "Macetero artesanal con acabado rústico pintado a mano",
        category: "Cerámica",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop"
    },
    {
        name: "Cojín Bordado",
        description: "Cojín con bordados tradicionales en algodón orgánico",
        category: "Textiles",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop"
    },
    {
        name: "Jarrón Terracota",
        description: "Jarrón de barro cocido con técnicas ancestrales",
        category: "Cerámica",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop"
    },
    {
        name: "Bolso Tejido",
        description: "Bolso de mano tejido con fibras naturales y cuero",
        category: "Accesorios",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop"
    },
    {
        name: "Cuadro Abstracto",
        description: "Pintura abstracta sobre lienzo con pigmentos naturales",
        category: "Decoración",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=400&fit=crop"
    },
    {
        name: "Manta Artesanal",
        description: "Manta tejida en telar tradicional con lana natural",
        category: "Textiles",
        image: "https://images.unsplash.com/photo-1629198735700-9426f58b550d?w=400&h=400&fit=crop"
    },
    {
        name: "Set de Tazas",
        description: "Juego de 4 tazas de cerámica pintadas a mano",
        category: "Cerámica",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop"
    },
    {
        name: "Aretes de Madera",
        description: "Aretes ligeros tallados en madera con diseño único",
        category: "Accesorios",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
    },
    {
        name: "Espejo Decorado",
        description: "Espejo con marco artesanal de madera tallada",
        category: "Decoración",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop"
    }
];

// ============================== 
// DOM ELEMENTS
// ============================== 
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.navbar__link');
const header = document.getElementById('header');
const catalogGrid = document.getElementById('catalogGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const scrollTopBtn = document.getElementById('scrollTop');

// ============================== 
// NAVBAR FUNCTIONALITY
// ============================== 

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================== 
// SMOOTH SCROLLING
// ============================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================== 
// CATALOG RENDERING
// ============================== 

// Render products
function renderProducts(filter = 'all') {
    catalogGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-card__content">
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__description">${product.description}</p>
                <button class="btn btn--primary product-card__btn">
                    Ver más
                </button>
            </div>
        `;
        
        catalogGrid.appendChild(productCard);
    });
    
    // Add click event to product buttons
    document.querySelectorAll('.product-card__btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const productName = this.parentElement.querySelector('.product-card__title').textContent;
            alert(`¡Gracias por tu interés en "${productName}"!\n\nPronto agregaremos más detalles de este producto.`);
        });
    });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        const filter = this.dataset.filter;
        renderProducts(filter);
    });
});

// Initial render
renderProducts();

// ============================== 
// INTERSECTION OBSERVER (Scroll Animations)
// ============================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Trigger animation for product cards
            if (entry.target.classList.contains('product-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe sections and cards
const observeElements = document.querySelectorAll('.section, .product-card, .objective-card, .about__card');
observeElements.forEach(el => observer.observe(el));

// ============================== 
// CONTACT FORM VALIDATION & SUBMISSION
// ============================== 
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');
    
    // Reset errors
    [nameError, emailError, messageError].forEach(err => err.textContent = '');
    [name, email, message].forEach(input => input.classList.remove('error'));
    formSuccess.classList.remove('show');
    
    let isValid = true;
    
    // Validate name
    if (name.value.trim().length < 3) {
        nameError.textContent = 'El nombre debe tener al menos 3 caracteres';
        name.classList.add('error');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Por favor ingresa un email válido';
        email.classList.add('error');
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim().length < 10) {
        messageError.textContent = 'El mensaje debe tener al menos 10 caracteres';
        message.classList.add('error');
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        // Here you would normally send the data to a server
        console.log('Form data:', {
            name: name.value,
            email: email.value,
            message: message.value
        });
        
        // Show success message
        formSuccess.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
    }
});

// ============================== 
// SCROLL TO TOP BUTTON
// ============================== 
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================== 
// PERFORMANCE OPTIMIZATION
// ============================== 

// Lazy loading images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ============================== 
// ACCESSIBILITY ENHANCEMENTS
// ============================== 

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Focus trap in mobile menu
navToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navToggle.click();
    }
});

// ============================== 
// UTILITY FUNCTIONS
// ============================== 

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get section from current scroll position
function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    for (const section of sections) {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            return sectionId;
        }
    }
    return null;
}

// Update active nav link based on scroll position
window.addEventListener('scroll', debounce(() => {
    const currentSection = getCurrentSection();
    
    if (currentSection) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}));

// ============================== 
// CONSOLE MESSAGE
// ============================== 
console.log('%c¡Bienvenido a Ticonias! 🎨', 'color: #C17C5D; font-size: 24px; font-weight: bold;');
console.log('%cArtesanías que conectan cultura, arte y comunidad', 'color: #6B8E6F; font-size: 14px;');
console.log('%cDesarrollado con ❤️ para la comunidad Motivarte', 'color: #8B6F47; font-size: 12px;');

// ============================== 
// INITIALIZATION
// ============================== 
document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ Ticonias website loaded successfully');
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});