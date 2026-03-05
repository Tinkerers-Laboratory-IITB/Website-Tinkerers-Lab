#!/usr/bin/env python3
"""
Batch update all page files with NASA/SpaceX design system
Replaces Cyberpunk Minimalist colors and styles with bold black/white aesthetic
"""

import os
import re
from pathlib import Path

# Color mappings: old cyberpunk colors -> new NASA colors
color_mappings = {
    # Backgrounds
    '#0a0e27': '#000000',
    '#1a1f3a': '#0a0a0a',
    '0a0e27': '000000',
    '1a1f3a': '0a0a0a',
    
    # Text colors
    '#00f0ff': '#ffffff',  # cyan -> white
    '#e0e6ff': '#ffffff',  # light -> white
    '#a0a8d8': '#ffffff',  # muted -> white
    '#4a5080': '#ffffff',  # dark -> white
    
    # Accents
    '#ff00ff': '#ffffff',  # magenta -> white
    '#00ff41': '#ffffff',  # lime -> white
    
    # Borders
    '#2a3050': '#333333',
    
    # Hover states
    'hover:text-[#00f0ff]': 'hover:text-white',
    'hover:text-[#ff00ff]': 'hover:text-white',
    'hover:border-[#00f0ff]': 'hover:border-white',
    'hover:border-[#ff00ff]': 'hover:border-white',
    'hover:bg-[#00f0ff]': 'hover:bg-white',
    'hover:bg-[#ff00ff]': 'hover:bg-white',
    'focus:border-[#00f0ff]': 'focus:border-white',
    
    # Background classes
    'bg-[#0a0e27]': 'bg-black',
    'bg-[#1a1f3a]': 'bg-black/5',
    'text-[#00f0ff]': 'text-white',
    'text-[#e0e6ff]': 'text-white',
    'text-[#a0a8d8]': 'text-white/70',
    'text-[#4a5080]': 'text-white/40',
    'text-[#ff00ff]': 'text-white',
    'text-[#00ff41]': 'text-white',
    'border-[#2a3050]': 'border-white/20',
    'border-[#00f0ff]': 'border-white',
    'border-[#ff00ff]': 'border-white',
    
    # Design system references
    'font-mono': '',  # Remove monospace
    'Design System: Cyberpunk Minimalist': 'Design System: NASA/SpaceX Aesthetic',
}

def update_file_content(content):
    """Update file content with new design system"""
    
    # Replace color values
    for old, new in color_mappings.items():
        content = content.replace(old, new)
    
    # Replace border styles
    content = re.sub(r'border-b-4 border-\[#00f0ff\]', 'border-b border-white/20', content)
    content = re.sub(r'border-b-2 border-\[#2a3050\]', 'border-b border-white/20', content)
    content = re.sub(r'border-t-2 border-\[#2a3050\]', 'border-t border-white/20', content)
    content = re.sub(r'border-t-4 border-\[#00f0ff\]', 'border-t border-white/20', content)
    content = re.sub(r'border-l-4 border-\[#00f0ff\]', 'border-l-2 border-white/20', content)
    content = re.sub(r'border-2 border-\[#2a3050\]', 'border border-white/20', content)
    content = re.sub(r'border-2 border-\[#00f0ff\]', 'border border-white', content)
    content = re.sub(r'border-2 border-\[#ff00ff\]', 'border border-white', content)
    
    # Replace heading styles - add heading classes
    content = re.sub(
        r'text-5xl md:text-6xl font-bold',
        'heading-xl',
        content
    )
    content = re.sub(
        r'text-4xl font-bold',
        'heading-lg',
        content
    )
    content = re.sub(
        r'text-3xl font-bold',
        'heading-md',
        content
    )
    content = re.sub(
        r'text-2xl font-bold',
        'heading-md',
        content
    )
    content = re.sub(
        r'text-xl font-bold',
        'heading-sm',
        content
    )
    
    # Replace body text styles
    content = re.sub(
        r'text-lg leading-relaxed',
        'body-lg',
        content
    )
    content = re.sub(
        r'text-base leading-relaxed',
        'body-md',
        content
    )
    
    # Update button styles
    content = re.sub(
        r'bg-\[#00f0ff\] text-\[#0a0e27\] font-bold font-mono hover:bg-\[#ff00ff\]',
        'bg-white text-black font-bold hover:bg-white/80',
        content
    )
    content = re.sub(
        r'border-2 border-\[#00f0ff\] text-\[#00f0ff\] font-bold font-mono hover:bg-\[#00f0ff\] hover:text-\[#0a0e27\]',
        'border-2 border-white text-white font-bold hover:bg-white hover:text-black',
        content
    )
    
    # Update placeholder image styling
    content = re.sub(
        r'placeholder-image h-\d+ group-hover:bg-gradient-to-br group-hover:from-\[#00f0ff\] group-hover:to-\[#ff00ff\]',
        'placeholder-image',
        content
    )
    
    # Update background gradients
    content = re.sub(
        r'bg-gradient-to-br from-\[#00f0ff\] to-\[#ff00ff\]',
        'bg-gradient-to-br from-white to-white/50',
        content
    )
    
    return content

def process_pages():
    """Process all page files"""
    pages_dir = Path('client/src/pages')
    
    for page_file in pages_dir.glob('*.tsx'):
        if page_file.name == 'Home.tsx':  # Skip Home as we already updated it
            continue
            
        print(f"Updating {page_file.name}...")
        
        try:
            content = page_file.read_text()
            updated_content = update_file_content(content)
            page_file.write_text(updated_content)
            print(f"  ✓ Updated {page_file.name}")
        except Exception as e:
            print(f"  ✗ Error updating {page_file.name}: {e}")

if __name__ == '__main__':
    process_pages()
    print("\nDesign system update complete!")
