#!/usr/bin/env python3
"""
Apply professional design patterns to all pages
Improves card layouts, spacing, typography, and visual polish
"""

import re
from pathlib import Path

def apply_professional_design(content):
    """Apply professional design patterns"""
    
    # Update section spacing
    content = re.sub(
        r'<section className="py-20 border-b',
        r'<section className="section-spacing border-b',
        content
    )
    
    content = re.sub(
        r'<section className="py-12 md:py-16 border-b',
        r'<section className="section-spacing-sm border-b',
        content
    )
    
    # Update card grids to use professional grid classes
    content = re.sub(
        r'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        r'card-grid-3',
        content
    )
    
    content = re.sub(
        r'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
        r'card-grid-3',
        content
    )
    
    content = re.sub(
        r'grid grid-cols-1 md:grid-cols-2 gap-6',
        r'card-grid-2',
        content
    )
    
    content = re.sub(
        r'grid grid-cols-1 md:grid-cols-2 gap-8',
        r'card-grid-2',
        content
    )
    
    # Update card styling
    content = re.sub(
        r'border border-\[#333333\] p-8 hover:border-\[#d12e56\] transition-smooth hover-lift hover:shadow-\[0_0_20px_rgba\(209,46,86,0\.3\)\]',
        r'card-professional',
        content
    )
    
    content = re.sub(
        r'border border-\[#333333\] p-6 hover:border-\[#d12e56\] transition-smooth hover-lift',
        r'card-professional',
        content
    )
    
    # Add professional spacing to containers
    content = re.sub(
        r'<div className="container py-16">',
        r'<div className="container section-spacing-sm">',
        content
    )
    
    content = re.sub(
        r'<div className="container py-20">',
        r'<div className="container section-spacing">',
        content
    )
    
    # Improve heading styling with underlines
    content = re.sub(
        r'(heading-xl mb-16 animate-slide-up border-b-2 border-\[#d12e56\] pb-4 inline-block)',
        r'heading-xl mb-16 animate-slide-up heading-with-underline',
        content
    )
    
    # Add professional shadow classes to cards
    content = re.sub(
        r'(className="[^"]*border border-\[#333333\][^"]*")',
        lambda m: m.group(1) if 'shadow-' in m.group(1) else m.group(1).replace('"', ' shadow-subtle"', 1),
        content
    )
    
    # Improve spacing between sections
    content = re.sub(
        r'mb-12 animate-slide-up',
        r'mb-16 animate-slide-up heading-with-underline',
        content
    )
    
    # Add better padding to hero sections
    content = re.sub(
        r'<section className="pt-32 pb-20',
        r'<section className="pt-40 pb-24',
        content
    )
    
    # Improve grid spacing
    content = re.sub(
        r'gap-6 animate-stagger',
        r'gap-8 animate-stagger',
        content
    )
    
    content = re.sub(
        r'gap-12 animate-stagger',
        r'gap-12 animate-stagger',
        content
    )
    
    return content

def process_all_pages():
    """Process all page files"""
    pages_dir = Path('client/src/pages')
    
    for page_file in pages_dir.glob('*.tsx'):
        print(f"Applying professional design to {page_file.name}...")
        
        try:
            content = page_file.read_text()
            updated_content = apply_professional_design(content)
            page_file.write_text(updated_content)
            print(f"  ✓ Updated {page_file.name}")
        except Exception as e:
            print(f"  ✗ Error updating {page_file.name}: {e}")

if __name__ == '__main__':
    process_all_pages()
    print("\nProfessional design application complete!")
