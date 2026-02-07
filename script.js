// Load Products from JSON
function loadProducts() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productsGrid = document.getElementById('productsGrid');
            const products = data.products;
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                const price = product.original_price ? `<span class="original-price">₹${product.original_price}</span> ₹${product.price}` : `₹${product.price}`;
                productCard.innerHTML = `
                    <div class="product-image">${product.icon}</div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-category">${product.category}</p>
                        <p>${product.description}</p>
                        <div class="product-price">${price}</div>
                        <button class="btn btn-primary" onclick="orderOnWhatsApp('${product.name.replace(/'/g, "\\'")}', '₹${product.price}')">
                            Order on WhatsApp
                        </button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error loading products:', error));
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
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            
            // Build WhatsApp message
            const whatsappMessage = `Hello VDR Candle Crafts!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            
            // Redirect to WhatsApp
            const whatsappURL = `https://wa.me/917983158309?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            // Reset form
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
