#!/usr/bin/env python3
"""
VDR Candle Crafts - Product Manager Script
Manage products locally for website and WhatsApp catalog sync
"""

import json
import csv
from datetime import datetime
from pathlib import Path

class CandleProductManager:
    """Manage VDR Candle Crafts products"""
    
    def __init__(self, json_file='products.json'):
        self.json_file = json_file
        self.products = self.load_products()
    
    def load_products(self):
        """Load products from JSON file"""
        try:
            with open(self.json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            print(f"✓ Loaded {len(data.get('products', []))} products")
            return data.get('products', [])
        except FileNotFoundError:
            print(f"✗ {self.json_file} not found")
            return []
    
    def save_products(self):
        """Save products to JSON file"""
        data = {
            'brand': {
                'name': 'VDR Candle Crafts',
                'tagline': 'Handcrafted Candles for Every Moment'
            },
            'products': self.products,
            'last_updated': datetime.now().isoformat()
        }
        with open(self.json_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"✓ Saved {len(self.products)} products to {self.json_file}")
    
    def add_product(self, name, price, category, description, burn_time="30-40 hours", wax_type="Soy Wax", size="200g"):
        """Add new product"""
        new_id = max([p['id'] for p in self.products], default=0) + 1
        product = {
            'id': new_id,
            'name': name,
            'price': price,
            'currency': 'INR',
            'category': category,
            'description': description,
            'burn_time': burn_time,
            'wax_type': wax_type,
            'size': size,
            'in_stock': True
        }
        self.products.append(product)
        self.save_products()
        print(f"✓ Added: #{new_id} - {name} (₹{price})")
    
    def update_product(self, product_id, **kwargs):
        """Update existing product"""
        for product in self.products:
            if product['id'] == product_id:
                product.update(kwargs)
                self.save_products()
                print(f"✓ Updated: {product['name']}")
                return True
        print(f"✗ Product #{product_id} not found")
        return False
    
    def delete_product(self, product_id):
        """Delete product"""
        original_count = len(self.products)
        self.products = [p for p in self.products if p['id'] != product_id]
        if len(self.products) < original_count:
            self.save_products()
            print(f"✓ Deleted product #{product_id}")
            return True
        print(f"✗ Product #{product_id} not found")
        return False
    
    def list_all(self):
        """Display all products"""
        if not self.products:
            print("No products found")
            return
        
        print("\n" + "="*80)
        print(f"{'ID':<3} {'Name':<20} {'Price':<8} {'Category':<15} {'Stock':<8}")
        print("="*80)
        for p in self.products:
            stock = "✓ Yes" if p.get('in_stock', True) else "✗ No"
            print(f"{p['id']:<3} {p['name']:<20} ₹{p['price']:<7} {p['category']:<15} {stock:<8}")
        print("="*80)
        print(f"Total: {len(self.products)} products\n")
    
    def find_by_name(self, name):
        """Find product by name"""
        results = [p for p in self.products if name.lower() in p['name'].lower()]
        if results:
            print(f"\nFound {len(results)} product(s):")
            for p in results:
                print(f"  #{p['id']}: {p['name']} - ₹{p['price']}")
            return results
        print(f"No products found matching '{name}'")
        return []
    
    def get_by_category(self, category):
        """Get products by category"""
        results = [p for p in self.products if p['category'].lower() == category.lower()]
        if results:
            print(f"\n{category} Products ({len(results)}):")
            for p in results:
                print(f"  #{p['id']}: {p['name']} - ₹{p['price']}")
            return results
        print(f"No products in category '{category}'")
        return []
    
    def export_csv(self, filename='products.csv'):
        """Export products to CSV"""
        if not self.products:
            print("No products to export")
            return
        
        fieldnames = ['id', 'name', 'price', 'category', 'description', 'burn_time', 'wax_type', 'size', 'in_stock']
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            for product in self.products:
                row = {k: product.get(k, '') for k in fieldnames}
                writer.writerow(row)
        print(f"✓ Exported {len(self.products)} products to {filename}")
    
    def import_csv(self, filename):
        """Import products from CSV"""
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                imported = 0
                for row in reader:
                    self.add_product(
                        name=row['name'],
                        price=int(row['price']),
                        category=row['category'],
                        description=row['description'],
                        burn_time=row.get('burn_time', '30-40 hours'),
                        wax_type=row.get('wax_type', 'Soy Wax'),
                        size=row.get('size', '200g')
                    )
                    imported += 1
            print(f"✓ Imported {imported} products from {filename}")
        except FileNotFoundError:
            print(f"✗ File {filename} not found")
    
    def get_stats(self):
        """Get product statistics"""
        if not self.products:
            print("No products")
            return
        
        total_price = sum(p['price'] for p in self.products)
        avg_price = total_price / len(self.products)
        categories = set(p['category'] for p in self.products)
        in_stock = sum(1 for p in self.products if p.get('in_stock', True))
        
        print("\n" + "="*40)
        print("PRODUCT STATISTICS")
        print("="*40)
        print(f"Total Products: {len(self.products)}")
        print(f"In Stock: {in_stock}")
        print(f"Out of Stock: {len(self.products) - in_stock}")
        print(f"Categories: {len(categories)}")
        print(f"Average Price: ₹{avg_price:.2f}")
        print(f"Min Price: ₹{min(p['price'] for p in self.products)}")
        print(f"Max Price: ₹{max(p['price'] for p in self.products)}")
        print(f"Total Value: ₹{total_price}")
        print("="*40 + "\n")
        
        print("Categories:")
        for category in sorted(categories):
            count = sum(1 for p in self.products if p['category'] == category)
            avg = sum(p['price'] for p in self.products if p['category'] == category) / count
            print(f"  {category}: {count} products (avg: ₹{avg:.0f})")


def main():
    """Main menu"""
    manager = CandleProductManager('products.json')
    
    while True:
        print("\n" + "="*50)
        print("VDR CANDLE CRAFTS - PRODUCT MANAGER")
        print("="*50)
        print("1. List all products")
        print("2. Add new product")
        print("3. Update product")
        print("4. Delete product")
        print("5. Search by name")
        print("6. Filter by category")
        print("7. View statistics")
        print("8. Export to CSV")
        print("9. Import from CSV")
        print("0. Exit")
        print("="*50)
        
        choice = input("Select option: ").strip()
        
        if choice == '1':
            manager.list_all()
        
        elif choice == '2':
            print("\n--- Add New Product ---")
            name = input("Product name: ").strip()
            price = int(input("Price (₹): "))
            category = input("Category: ").strip()
            description = input("Description: ").strip()
            burn_time = input("Burn time (default: 30-40 hours): ").strip() or "30-40 hours"
            wax_type = input("Wax type (default: Soy Wax): ").strip() or "Soy Wax"
            size = input("Size (default: 200g): ").strip() or "200g"
            
            manager.add_product(name, price, category, description, burn_time, wax_type, size)
        
        elif choice == '3':
            manager.list_all()
            product_id = int(input("Enter product ID to update: "))
            field = input("Field to update (name/price/description/in_stock): ").lower()
            value = input(f"New {field} value: ").strip()
            
            if field == 'in_stock':
                value = value.lower() in ['true', 'yes', '1']
            elif field == 'price':
                value = int(value)
            
            manager.update_product(product_id, **{field: value})
        
        elif choice == '4':
            manager.list_all()
            product_id = int(input("Enter product ID to delete: "))
            confirm = input(f"Delete product #{product_id}? (yes/no): ").lower()
            if confirm == 'yes':
                manager.delete_product(product_id)
        
        elif choice == '5':
            name = input("Search for product name: ").strip()
            manager.find_by_name(name)
        
        elif choice == '6':
            manager.list_all()
            category = input("Filter by category: ").strip()
            manager.get_by_category(category)
        
        elif choice == '7':
            manager.get_stats()
        
        elif choice == '8':
            filename = input("Export filename (default: products.csv): ").strip() or "products.csv"
            manager.export_csv(filename)
        
        elif choice == '9':
            filename = input("Import filename: ").strip()
            manager.import_csv(filename)
        
        elif choice == '0':
            print("\nThank you for using Product Manager!")
            break
        
        else:
            print("Invalid option. Please try again.")


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nExiting...")
    except Exception as e:
        print(f"\n✗ Error: {e}")
