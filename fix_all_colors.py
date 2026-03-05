#!/usr/bin/env python3
"""
Comprehensive color fix for all pages
Applies red accent (#d12e56) and grey shades throughout
"""

import re
from pathlib import Path

def fix_all_colors(content):
    """Apply complete red accent theme to all pages"""
    
    # Fix background colors
    content = re.sub(r'bg-background', r'bg-black', content)
    content = re.sub(r'text-foreground', r'text-white', content)
    
    # Fix white text colors
    content = re.sub(r'text-\[#ffffff\]', r'text-white', content)
    
    # Fix section borders - change to red tinted
    content = re.sub(r'border-b-4 border-\[#ffffff\]', r'border-b border-[#d12e56]/30', content)
    content = re.sub(r'border-b-2 border-\[#333333\]', r'border-b border-[#d12e56]/30', content)
    content = re.sub(r'border-b-2 border-\[#ffffff\]', r'border-b border-[#d12e56]/30', content)
    content = re.sub(r'border-t-2 border-\[#333333\]', r'border-t border-[#d12e56]/30', content)
    content = re.sub(r'border-t-4 border-\[#ffffff\]', r'border-t border-[#d12e56]/30', content)
    
    # Fix heading colors - add red accent
    content = re.sub(
        r'(<h1 className="heading-[^"]*">)',
        lambda m: m.group(1),
        content
    )
    
    content = re.sub(
        r'(<h2 className="heading-[^"]*">)',
        lambda m: m.group(1),
        content
    )
    
    # Fix text colors - replace white with appropriate grey/white
    content = re.sub(r'text-\[#e0e6ff\]', r'text-[#999999]', content)
    content = re.sub(r'text-\[#a0a8d8\]', r'text-[#999999]', content)
    content = re.sub(r'text-\[#4a5080\]', r'text-[#666666]', content)
    
    # Fix body text colors
    content = re.sub(r'text-xl text-\[#ffffff\]', r'text-xl text-[#999999]', content)
    content = re.sub(r'text-lg text-\[#ffffff\]', r'text-lg text-[#999999]', content)
    content = re.sub(r'text-base text-\[#ffffff\]', r'text-base text-[#999999]', content)
    
    # Fix card/box backgrounds
    content = re.sub(r'bg-\[#1a1f3a\]', r'bg-[#0a0a0a]', content)
    content = re.sub(r'bg-\[#0a0e27\]', r'bg-black', content)
    
    # Fix card borders
    content = re.sub(r'border-2 border-\[#2a3050\]', r'border border-[#333333]', content)
    content = re.sub(r'border-2 border-\[#00f0ff\]', r'border border-[#d12e56]', content)
    content = re.sub(r'border-2 border-\[#ff00ff\]', r'border border-[#d12e56]', content)
    content = re.sub(r'border-\[#2a3050\]', r'border-[#333333]', content)
    
    # Fix hover states on borders
    content = re.sub(r'hover:border-\[#00f0ff\]', r'hover:border-[#d12e56]', content)
    content = re.sub(r'hover:border-\[#ff00ff\]', r'hover:border-[#d12e56]', content)
    
    # Fix button colors
    content = re.sub(
        r'(bg-\[#00f0ff\] text-\[#0a0e27\] font-bold)',
        r'bg-[#d12e56] text-white font-bold',
        content
    )
    
    content = re.sub(
        r'(hover:bg-\[#ff00ff\])',
        r'hover:bg-[#e85a7a]',
        content
    )
    
    # Fix link colors
    content = re.sub(r'hover:text-\[#00f0ff\]', r'hover:text-[#d12e56]', content)
    content = re.sub(r'hover:text-\[#ff00ff\]', r'hover:text-[#d12e56]', content)
    content = re.sub(r'text-\[#00f0ff\]', r'text-[#d12e56]', content)
    content = re.sub(r'text-\[#ff00ff\]', r'text-[#d12e56]', content)
    
    # Fix border-left colors
    content = re.sub(r'border-l-4 border-\[#00f0ff\]', r'border-l-2 border-[#d12e56]', content)
    content = re.sub(r'border-l-4 border-\[#ff00ff\]', r'border-l-2 border-[#d12e56]', content)
    
    # Fix placeholder image backgrounds
    content = re.sub(
        r'(placeholder-image[^>]*>)',
        lambda m: m.group(1).replace('bg-gradient-to-br from-[#00f0ff] to-[#ff00ff]', 'bg-[#1a1a1a] border border-[#333333]'),
        content
    )
    
    # Add red glow effects
    content = re.sub(
        r'hover:shadow-\[0_12px_24px_rgba\(0,0,0,0\.15\)\]',
        r'hover:shadow-[0_0_20px_rgba(209,46,86,0.3)]',
        content
    )
    
    # Fix status badge colors
    content = re.sub(
        r'(bg-\[#00f0ff\] text-\[#0a0e27\])',
        r'bg-[#d12e56] text-white',
        content
    )
    
    content = re.sub(
        r'(bg-\[#ff00ff\] text-\[#0a0e27\])',
        r'bg-[#d12e56] text-white',
        content
    )
    
    # Fix secondary button styles
    content = re.sub(
        r'(border-2 border-\[#00f0ff\] text-\[#00f0ff\])',
        r'border-2 border-[#d12e56] text-[#d12e56]',
        content
    )
    
    content = re.sub(
        r'(hover:bg-\[#00f0ff\] hover:text-\[#0a0e27\])',
        r'hover:bg-[#d12e56] hover:text-white',
        content
    )
    
    # Fix icon colors
    content = re.sub(r'className="text-\[#00f0ff\]"', r'className="text-[#d12e56]"', content)
    content = re.sub(r'className="text-\[#ff00ff\]"', r'className="text-[#d12e56]"', content)
    
    # Fix section backgrounds with alternating grey
    content = re.sub(r'bg-\[#1a1f3a\] border-b-2', r'bg-[#0a0a0a] border-b', content)
    
    # Fix monospace font references
    content = re.sub(r' font-mono', r'', content)
    
    return content

def process_all_pages():
    """Process all page files"""
    pages_dir = Path('client/src/pages')
    
    for page_file in pages_dir.glob('*.tsx'):
        print(f"Fixing colors in {page_file.name}...")
        
        try:
            content = page_file.read_text()
            updated_content = fix_all_colors(content)
            page_file.write_text(updated_content)
            print(f"  ✓ Fixed {page_file.name}")
        except Exception as e:
            print(f"  ✗ Error fixing {page_file.name}: {e}")

if __name__ == '__main__':
    process_all_pages()
    print("\nColor fixes complete!")
