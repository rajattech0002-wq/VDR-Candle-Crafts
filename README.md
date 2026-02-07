# VDR Candle Crafts - Website

A beautiful, responsive website for VDR Candle Crafts - Premium Handmade Candles.

## 📁 Project Structure

```
VDR Candle Crafts/
├── images/
│   ├── logo.jpg           # Brand logo
│   └── hero-video.mp4     # Hero section background video (add your own)
├── index.html             # Main HTML file
├── styles.css             # Styling and responsive design
├── script.js              # JavaScript functionality
├── products.json          # Product data (optional)
└── README.md              # This file
```

## 🎯 Features

### 1. **Navigation Menu**
   - Sticky navigation bar with smooth scrolling
   - Mobile-friendly hamburger menu
   - Quick links to all sections

### 2. **Hero Section**
   - Eye-catching banner with call-to-action
   - Professional branding with logo icon
   - Gradient background design

### 3. **Products Collection**
   - 8 handmade candle products with:
     - Product name and category
     - Description
     - Price in Indian Rupees
     - One-click WhatsApp ordering
   - Responsive grid layout (auto-adjusts to screen size)
   - Emoji icons for visual appeal

### 4. **About Section**
   - Company information
   - Key features/benefits
   - Brand values and quality commitment

### 5. **Contact Section**
   - Direct WhatsApp contact link
   - Email address
   - Contact form
   - Location information

### 6. **Footer**
   - Copyright information
   - Social media links
   - Professional closing

## 🛍️ Products Included

1. **Lavender Dream** - Aromatherapy (₹399)
2. **Vanilla Bliss** - Traditional (₹349)
3. **Rose Garden** - Floral (₹449)
4. **Ocean Breeze** - Fresh (₹379)
5. **Cinnamon Spice** - Warm (₹389)
6. **Eucalyptus Fresh** - Aromatherapy (₹369)
7. **Honey Amber** - Sweet (₹419)
8. **Coffee & Cream** - Gourmand (₹399)

## 🚀 How to Use

### Local Development
1. Open `index.html` in a web browser
2. The website will load with all sections visible
3. Click on product cards to place orders via WhatsApp
4. Use the contact form to send messages

### Customization

#### Change Contact Information
- Edit the WhatsApp link in line 153 of `index.html`
- Update email address in the contact section
- Add location details

#### Modify Products
- Edit the `products` array in `script.js` (lines 1-40)
- Change prices, names, descriptions, and icons
- Add new products by following the same structure:
```javascript
{
    id: 9,
    name: "Product Name",
    category: "Category",
    price: "₹XXX",
    description: "Product description",
    icon: "emoji"
}
```

#### Update Colors
- Edit CSS variables in `styles.css` (lines 9-16):
  - `--primary-color`: Gold accent color
  - `--secondary-color`: Dark brown primary color
  - `--text-color`: Text color
  - `--light-bg`: Light background color

#### Add Images
- Replace emoji icons with actual product images
- Modify the `.product-image` background
- Add images to the about section

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (up to 767px)

Mobile breakpoints automatically adjust:
- Navigation menu collapses to hamburger
- Grid layout changes to single column
- Font sizes reduce for readability
- Touch-friendly buttons and spacing

## ⚡ Features to Add

1. **Shopping Cart** - Add items to cart before checkout
2. **Search Functionality** - Filter products by category or name
3. **Customer Reviews** - Display testimonials
4. **Blog Section** - Candle care tips and stories
5. **Payment Integration** - Razorpay or other payment gateway
6. **Inventory Management** - Track stock levels
7. **Photo Gallery** - High-quality product images
8. **Email Newsletter** - Subscribe form for updates

## 🔗 External Libraries

- **Font Awesome** - Free icon library (loading from CDN)
- **Google Fonts** - (Currently using system fonts, can be added)

## � External Links & Integration

- **WhatsApp**: Direct catalog link for product ordering
  - Catalog: `https://wa.me/c/917983158309`
  - Contact: +91 7983158309
  - Products have direct "Order on WhatsApp" buttons
  
- **Instagram**: Follow for updates, stories, and product showcases
  - Profile: [@vdr_candlecrafts](https://www.instagram.com/vdr_candlecrafts/)
  - All social media links included in footer
  - Instagram contact in the contact section

## 🎨 Design Features

- **Color Scheme**: Gold (#d4af37) on dark brown (#2c1810) - Premium candle aesthetic
- **Typography**: Clean, modern sans-serif font
- **Shadows & Depth**: Subtle shadows for card elevation
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML, good contrast, readable fonts

## 📝 Notes

- No backend server required - fully static website
- SEO-friendly structure with semantic HTML
- Can be hosted on any static hosting service
- Zero external API requirements (except Font Awesome icons)

## 🎥 Adding Background Video

### How to Add Your Video:
1. **Prepare your video**: Get an MP4 video file (recommended: 1920x1080 resolution, 10-30 seconds long, 5-10MB size)
2. **Place the video**: Save your video as `hero-video.mp4` in the `images/` folder
3. **Path**: `images/hero-video.mp4` (already configured in the HTML)
4. **Features**:
   - Autoplay: Video starts automatically when page loads
   - Muted: Video plays without sound
   - Loop: Video repeats continuously
   - Overlay: Purple tint maintains text readability

### Video Recommendations:
- **Format**: MP4 (h.264 codec)
- **Duration**: 10-30 seconds (loops)
- **Size**: 1920x1080 or higher
- **File size**: 5-15MB (for faster loading)
- **Content**: Candle-related, smooth, subtle movements work best
- **Alternative**: You can use any video format supported by browsers

Example: A video showing flickering candles, wax pouring, or candle lighting ambiance works great!

## 📞 Contact Information

- **WhatsApp**: https://wa.me/c/917983158309
- **Phone**: +91 7983158309
- **Email**: info@vdrcandlecrafts.com
- **Instagram**: [@vdr_candlecrafts](https://www.instagram.com/vdr_candlecrafts/)

---

Created for VDR Candle Crafts - Premium Handmade Candles
