#!/usr/bin/env python3
"""
Apply comprehensive red accent theme to all pages
Updates borders, text, buttons, and hover states with #d12e56
"""

import re
from pathlib import Path

def apply_red_theme(content):
    """Apply red accent theme to page content"""
    
    # Update section borders
    content = re.sub(
        r'border-b border-white/20',
        r'border-b border-[#d12e56]/30',
        content
    )
    
    content = re.sub(
        r'border-t border-white/20',
        r'border-t border-[#d12e56]/30',
        content
    )
    
    # Update text colors - grey shades
    content = re.sub(
        r'text-white/70',
        r'text-[#999999]',
        content
    )
    
    content = re.sub(
        r'text-white/60',
        r'text-[#999999]',
        content
    )
    
    content = re.sub(
        r'text-white/40',
        r'text-[#666666]',
        content
    )
    
    # Update card/box borders
    content = re.sub(
        r'border border-white/20',
        r'border border-[#333333]',
        content
    )
    
    # Add red hover state to borders
    content = re.sub(
        r'hover:border-white/40',
        r'hover:border-[#d12e56]',
        content
    )
    
    # Update button styles - secondary buttons get red border
    content = re.sub(
        r'(border-2 border-white text-white)',
        r'border-2 border-[#d12e56] text-[#d12e56]',
        content
    )
    
    content = re.sub(
        r'(hover:bg-white hover:text-black)',
        r'hover:bg-[#d12e56] hover:text-white',
        content
    )
    
    # Add red glow to cards
    content = re.sub(
        r'hover-glow',
        r'hover:shadow-[0_0_20px_rgba(209,46,86,0.3)]',
        content
    )
    
    # Update section backgrounds
    content = re.sub(
        r'bg-\[#0a0a0a\]',
        r'bg-[#0a0a0a]',
        content
    )
    
    # Add red accent to headings
    content = re.sub(
        r'(<h2 className="heading-xl[^"]*">)',
        lambda m: m.group(1) if 'border-b' in m.group(1) else m.group(1),
        content
    )
    
    # Update link hover colors
    content = re.sub(
        r'hover:text-white',
        r'hover:text-[#d12e56]',
        content
    )
    
    # Update placeholder image backgrounds
    content = re.sub(
        r'(placeholder-image[^>]*>)',
        r'\1',
        content
    )
    
    # Add red accents to status badges
    content = re.sub(
        r'(bg-white text-black)',
        r'bg-[#d12e56] text-white',
        content
    )
    
    content = re.sub(
        r'(hover:bg-white/80)',
        r'hover:bg-[#e85a7a]',
        content
    )
    
    return content

def process_pages():
    """Process all page files"""
    pages_dir = Path('client/src/pages')
    
    skip_files = {'Home.tsx', 'NotFound.tsx'}  # Already updated
    
    for page_file in pages_dir.glob('*.tsx'):
        if page_file.name in skip_files:
            continue
            
        print(f"Applying red theme to {page_file.name}...")
        
        try:
            content = page_file.read_text()
            updated_content = apply_red_theme(content)
            page_file.write_text(updated_content)
            print(f"  ✓ Updated {page_file.name}")
        except Exception as e:
            print(f"  ✗ Error updating {page_file.name}: {e}")

if __name__ == '__main__':
    process_pages()
    print("\nRed theme application complete!")
