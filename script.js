// Product Data
const products = [
    {
        id: 1,
        name: "Lavender Dream",
        category: "Aromatherapy",
        price: "₹399",
        description: "Soothing lavender fragrance perfect for relaxation and stress relief.",
        icon: "🌸"
    },
    {
        id: 2,
        name: "Vanilla Bliss",
        category: "Traditional",
        price: "₹349",
        description: "Classic vanilla scent that creates a warm and inviting atmosphere.",
        icon: "🕯️"
    },
    {
        id: 3,
        name: "Rose Garden",
        category: "Floral",
        price: "₹449",
        description: "Elegant rose fragrance blended with subtle notes of jasmine.",
        icon: "🌹"
    },
    {
        id: 4,
        name: "Ocean Breeze",
        category: "Fresh",
        price: "₹379",
        description: "Refreshing coastal scent with citrus and sea salt notes.",
        icon: "🌊"
    },
    {
        id: 5,
        name: "Cinnamon Spice",
        category: "Warm",
        price: "₹389",
        description: "Warm and comforting blend of cinnamon, clove, and vanilla.",
        icon: "✨"
    },
    {
        id: 6,
        name: "Eucalyptus Fresh",
        category: "Aromatherapy",
        price: "₹369",
        description: "Energizing eucalyptus oil for mental clarity and focus.",
        icon: "🍃"
    },
    {
        id: 7,
        name: "Honey Amber",
        category: "Sweet",
        price: "₹419",
        description: "Luxurious blend of honey and warm amber for lasting fragrance.",
        icon: "🌟"
    },
    {
        id: 8,
        name: "Coffee & Cream",
        category: "Gourmand",
        price: "₹399",
        description: "Rich coffee aroma with creamy vanilla undertones.",
        icon: "☕"
    }
];

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="btn btn-primary" onclick="orderOnWhatsApp('${product.name}', '${product.price}')">
                    Order on WhatsApp
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// WhatsApp Order
function orderOnWhatsApp(productName, productPrice) {
    const message = `Hello! I'm interested in ordering ${productName} (${productPrice}). Please share more details about this product.`;
    const whatsappURL = `https://wa.me/c/917983158309?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Video Background Autoplay
document.addEventListener('DOMContentLoaded', function() {
    const bgVideo = document.querySelector('.hero-bg-video');
    if (bgVideo) {
        bgVideo.play().catch(function(error) {
            console.log('Background video autoplay: muted video started');
        });
    }
    
    loadProducts();
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond via WhatsApp soon. You can also follow us on Instagram @vdr_candlecrafts for updates!');
            this.reset();
        });
    }
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navMenu.style.display = 'none';
            }
        });
    });
});
