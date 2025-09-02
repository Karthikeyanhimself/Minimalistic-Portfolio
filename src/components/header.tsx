/* 
 * Copyright (c) 2025 Your Name
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'About', href: '/main' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const fontStyle = {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/70 border-b border-neutral-200"
      style={fontStyle}
    >
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
        {/* Favicon */}
        <Link href="/" className="flex items-center">
          <img src="/letter-k.ico" alt="Logo" className="w-5 h-5" />
        </Link>

        {/* Centered Navigation */}
        <nav className="flex-1 flex justify-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${pathname === item.href ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}