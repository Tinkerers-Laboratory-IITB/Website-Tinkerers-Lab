#!/usr/bin/env python3
"""
Add animations to all page files
Adds animate-slide-up, hover-lift, hover-glow, and stagger effects
"""

import re
from pathlib import Path

def add_animations_to_file(content):
    """Add animations to page content"""
    
    # Add animate-slide-up to main headings
    content = re.sub(
        r'(<h1 className="heading-display)',
        r'\1 animate-slide-up',
        content
    )
    
    # Add animate-slide-up to section headings
    content = re.sub(
        r'(<h2 className="heading-xl[^"]*")',
        lambda m: m.group(1) + ' animate-slide-up' if 'animate-slide-up' not in m.group(1) else m.group(1),
        content
    )
    
    # Add animations to paragraphs after headings
    content = re.sub(
        r'(<p className="body-lg text-white/70[^"]*")',
        lambda m: m.group(1) + ' animate-slide-up' if 'animate-slide-up' not in m.group(1) else m.group(1),
        content
    )
    
    # Add hover effects to cards/boxes
    content = re.sub(
        r'(className="[^"]*border border-white/20[^"]*p-)',
        lambda m: m.group(1).replace('border border-white/20', 'border border-white/20 hover:border-white/40 transition-smooth hover-lift hover-glow') if 'hover:border-white/40' not in m.group(1) else m.group(1),
        content
    )
    
    # Add stagger to grid containers
    content = re.sub(
        r'(<div className="grid grid-cols)',
        r'\1 animate-stagger',
        content
    )
    
    # Add hover effects to buttons
    content = re.sub(
        r'(className="[^"]*px-8 py-4 bg-white text-black[^"]*")',
        lambda m: m.group(1).replace('transition-colors', 'transition-smooth hover-lift') if 'hover-lift' not in m.group(1) else m.group(1),
        content
    )
    
    # Add hover effects to border buttons
    content = re.sub(
        r'(className="[^"]*border-2 border-white text-white[^"]*")',
        lambda m: m.group(1).replace('transition-colors', 'transition-smooth hover-lift') if 'hover-lift' not in m.group(1) else m.group(1),
        content
    )
    
    # Add hover effects to links
    content = re.sub(
        r'(className="text-white/60 hover:text-white transition-smooth[^"]*")',
        lambda m: m.group(1) if 'hover-scale' in m.group(1) else m.group(1).replace('transition-smooth', 'transition-smooth hover-scale'),
        content
    )
    
    # Add fade-in to sections
    content = re.sub(
        r'(<section className="[^"]*py-20)',
        lambda m: m.group(1) + ' animate-fade-in' if 'animate-fade-in' not in m.group(1) else m.group(1),
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
            
        print(f"Adding animations to {page_file.name}...")
        
        try:
            content = page_file.read_text()
            updated_content = add_animations_to_file(content)
            page_file.write_text(updated_content)
            print(f"  ✓ Updated {page_file.name}")
        except Exception as e:
            print(f"  ✗ Error updating {page_file.name}: {e}")

if __name__ == '__main__':
    process_pages()
    print("\nAnimation additions complete!")
