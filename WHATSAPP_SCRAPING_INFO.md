# WhatsApp Catalog Data Extraction

## ⚠️ Important: Why Direct Scraping Won't Work

WhatsApp catalogs **cannot be directly scraped** for these reasons:

1. **No Public API**: WhatsApp doesn't provide a public catalog API for extraction
2. **Terms of Service**: Scraping WhatsApp violates their ToS
3. **Authentication Required**: Catalogs require WhatsApp Business authentication
4. **Dynamic Content**: Data loads dynamically (JavaScript rendering)
5. **Legal Issues**: WhatsApp actively blocks scraping attempts

## ✅ Legitimate Alternatives

### Option 1: Manual Data Entry (Recommended)
Create a local JSON file with your products:

```python
# products.json structure (already in your project)
{
  "products": [
    {
      "id": 1,
      "name": "Lavender Dream",
      "price": 399,
      "description": "Soothing lavender fragrance"
    }
  ]
}
```

### Option 2: Use WhatsApp Business API (Official)
Contact WhatsApp to get business API access:
- Request: https://www.whatsapp.com/business/api/
- Allows you to programmatically manage catalogs
- Requires business verification

### Option 3: Manual Screenshot & OCR (Not Recommended)
Use OCR to extract text from catalog screenshots, then parse:

```python
# Example using pytesseract
import pytesseract
from PIL import Image

img = Image.open('whatsapp_catalog_screenshot.png')
text = pytesseract.image_to_string(img)
print(text)
```

### Option 4: Selenium Web Scraping (Complex & Risky)
If you absolutely need to extract your own catalog data:

```python
# ⚠️ Use only for YOUR OWN account - could violate ToS
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("https://web.whatsapp.com")

# Manual login required
print("Scan QR code to login...")
time.sleep(30)

# Navigate to catalog (your own account only)
# Note: This may not work if WhatsApp detects automation
```

## 📊 Recommended Solution for Your Website

Instead of scraping WhatsApp, **keep your products centralized**:

### Current Setup (Best Practice)
```
VDR Candle Crafts/
├── products.json           ← Source of truth
├── index.html              ← Displays from products.json
└── script.js               ← Loads and displays products
```

### Sync Strategy
1. **Manually update** `products.json` with new products
2. **Website automatically** displays latest data
3. **Share WhatsApp catalog link** for customer orders
4. **Maintain in one place** - reduces errors and duplication

## 🔧 Python Script: Manual Data Management

Here's a helper script to manage your products locally:

```python
import json
from datetime import datetime

class CandleProductManager:
    def __init__(self, json_file='products.json'):
        self.json_file = json_file
        self.products = self.load_products()
    
    def load_products(self):
        """Load products from JSON file"""
        try:
            with open(self.json_file, 'r') as f:
                data = json.load(f)
            return data.get('products', [])
        except FileNotFoundError:
            return []
    
    def save_products(self):
        """Save products to JSON file"""
        data = {
            'products': self.products,
            'last_updated': datetime.now().isoformat()
        }
        with open(self.json_file, 'w') as f:
            json.dump(data, f, indent=2)
        print(f"✓ Saved {len(self.products)} products")
    
    def add_product(self, name, price, category, description):
        """Add new product"""
        product = {
            'id': len(self.products) + 1,
            'name': name,
            'price': price,
            'category': category,
            'description': description,
            'in_stock': True
        }
        self.products.append(product)
        self.save_products()
        print(f"✓ Added: {name}")
    
    def update_product(self, product_id, **kwargs):
        """Update existing product"""
        for product in self.products:
            if product['id'] == product_id:
                product.update(kwargs)
                self.save_products()
                print(f"✓ Updated: {product['name']}")
                return
        print(f"✗ Product {product_id} not found")
    
    def delete_product(self, product_id):
        """Delete product"""
        self.products = [p for p in self.products if p['id'] != product_id]
        self.save_products()
        print(f"✓ Deleted product {product_id}")
    
    def list_all(self):
        """Display all products"""
        print("\n" + "="*60)
        print(f"{'ID':<3} {'Name':<20} {'Price':<8} {'Category':<15}")
        print("="*60)
        for p in self.products:
            print(f"{p['id']:<3} {p['name']:<20} ₹{p['price']:<7} {p['category']:<15}")
        print("="*60 + "\n")
    
    def export_csv(self, filename='products.csv'):
        """Export products to CSV"""
        import csv
        with open(filename, 'w', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=['id', 'name', 'price', 'category', 'description'])
            writer.writeheader()
            writer.writerows(self.products)
        print(f"✓ Exported to {filename}")

# Usage Example
if __name__ == '__main__':
    manager = CandleProductManager('products.json')
    
    # View all products
    manager.list_all()
    
    # Add new product
    manager.add_product(
        name="Rose Garden",
        price=449,
        category="Floral",
        description="Elegant rose fragrance blended with jasmine"
    )
    
    # Update product
    manager.update_product(1, price=399)
    
    # Export to CSV
    manager.export_csv()
```

## 🚀 Usage Instructions

Save as `manage_products.py`, then run:

```bash
# Add product
python manage_products.py

# The script will:
# 1. Load current products
# 2. Display all products
# 3. Add new product
# 4. Update a product
# 5. Save changes
# 6. Export to CSV
```

## 📱 WhatsApp Business Catalog Best Practices

1. **Maintain WhatsApp Catalog** directly through WhatsApp Business
2. **Keep Website Updated** with same data (products.json)
3. **Use CSV Import** to update catalogs in bulk
4. **Sync Periodically** - don't try to automate if not allowed

## 🔗 Resources

- WhatsApp Business API: https://www.whatsapp.com/business/api/
- WhatsApp Terms: https://www.whatsapp.com/legal/
- Official Documentation: https://developers.facebook.com/docs/whatsapp/

## ⚖️ Legal Summary

✗ **Don't do**: Scrape WhatsApp public pages  
✗ **Don't do**: Use bots to extract catalog data  
✓ **Do**: Use WhatsApp Business API (official)  
✓ **Do**: Manually manage your product data  
✓ **Do**: Keep data synchronized locally  

---

**Recommendation**: Use the Python script above to manage your products locally, and keep your website and WhatsApp catalog in sync manually. This is the safest and most reliable approach!
