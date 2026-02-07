// Load Products from JSON
function loadProducts() {
    console.log('Loading products...');
    fetch('products.json')
        .then(response => {
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Products data loaded:', data);
            const productsGrid = document.getElementById('productsGrid');
            console.log('Products grid element:', productsGrid);
            
            if (!productsGrid) {
                console.error('productsGrid element not found!');
                return;
            }
            
            const products = data.products;
            console.log('Number of products:', products.length);
            
            products.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                const price = product.original_price ? `<span class="original-price">₹${product.original_price}</span> ₹${product.price}` : `₹${product.price}`;
                const imageUrl = `media/product_images/${product.id}.png`;
                productCard.innerHTML = `
                    <div class="product-image"><img src="${imageUrl}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2220%22%3E${product.icon}%3C/text%3E%3C/svg%3E'"></div>
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
                console.log(`Product ${index + 1} added: ${product.name}`);
            });
            console.log('All products loaded successfully');
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
