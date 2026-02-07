#!/usr/bin/env python3
"""
Simple HTTP Server for VDR Candle Crafts Website
Run this script to start a local development server
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Change to the script's directory
script_dir = Path(__file__).parent.absolute()
os.chdir(script_dir)

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}"
    print(f"")
    print(f"╔════════════════════════════════════════════════════════════╗")
    print(f"║   VDR Candle Crafts - Development Server                  ║")
    print(f"║   Serving at: {url:<43} ║")
    print(f"║   Press Ctrl+C to stop the server                         ║")
    print(f"╚════════════════════════════════════════════════════════════╝")
    print(f"")
    
    # Try to open in browser
    try:
        webbrowser.open(url)
        print(f"→ Opening browser automatically...")
    except:
        print(f"→ Please open your browser and go to: {url}")
    
    print(f"")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n\n✓ Server stopped. Goodbye!")
