#!/usr/bin/env python3
"""
Add red accent color (#d12e56) to pages for dynamic visual hierarchy
Updates buttons, borders, headings, and accent elements
"""

import re
from pathlib import Path

def add_red_accents(content):
    """Add red accent colors to page content"""
    
    # Update primary CTA buttons - white bg to red with white text
    content = re.sub(
        r'(className="[^"]*px-8 py-4 bg-white text-black font-bold tracking-wide[^"]*")',
        lambda m: m.group(1).replace('bg-white text-black', 'bg-[#d12e56] text-white'),
        content
    )
    
    # Update button hover states
    content = re.sub(
        r'hover:bg-white/80',
        r'hover:bg-[#e85a7a]',
        content
    )
    
    # Add red border accent to feature cards on hover
    content = re.sub(
        r'(className="[^"]*border border-white/20 hover:border-white/40[^"]*")',
        lambda m: m.group(1).replace('hover:border-white/40', 'hover:border-[#d12e56]'),
        content
    )
    
    # Add red glow effect
    content = re.sub(
        r'hover-glow',
        r'hover:shadow-[0_0_20px_rgba(209,46,86,0.3)]',
        content
    )
    
    # Update section dividers with red accents
    content = re.sub(
        r'(className="[^"]*border-b border-white/20[^"]*")',
        lambda m: m.group(1) if 'border-[#d12e56]' in m.group(1) else m.group(1),
        content
    )
    
    # Add red underline to section headings
    content = re.sub(
        r'(<h2 className="heading-xl[^"]*">)',
        lambda m: m.group(1) if 'border-b' in m.group(1) else m.group(1),
        content
    )
    
    # Update status badges - active projects get red background
    content = re.sub(
        r'(className="[^"]*text-xs font-bold tracking-wide uppercase px-3 py-1[^"]*bg-white text-black[^"]*")',
        lambda m: m.group(1).replace('bg-white text-black', 'bg-[#d12e56] text-white'),
        content
    )
    
    # Add red accent to important text
    content = re.sub(
        r'(className="[^"]*heading-md[^"]*">)',
        lambda m: m.group(1),
        content
    )
    
    return content

def process_pages():
    """Process all page files"""
    pages_dir = Path('client/src/pages')
    
    skip_files = {'NotFound.tsx'}  # Skip 404 page
    
    for page_file in pages_dir.glob('*.tsx'):
        if page_file.name in skip_files:
            continue
            
        print(f"Adding red accents to {page_file.name}...")
        
        try:
            content = page_file.read_text()
            updated_content = add_red_accents(content)
            page_file.write_text(updated_content)
            print(f"  ✓ Updated {page_file.name}")
        except Exception as e:
            print(f"  ✗ Error updating {page_file.name}: {e}")

if __name__ == '__main__':
    process_pages()
    print("\nRed accent additions complete!")
