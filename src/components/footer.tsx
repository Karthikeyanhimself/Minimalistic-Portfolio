/* 
 * Copyright (c) 2025 Karthikeyan Reddy T
 * This file is part of Minimalistic Portfolio.
 * Licensed under the MIT License. 
 */

import { Github, Linkedin } from 'lucide-react';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";

const fontStyle = {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-neutral-200 bg-white text-neutral-500 text-xs"
      style={fontStyle}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-0.5">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="text-[10px]">Built with React, Next.js, Tailwind CSS and TypeScript</span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-6">
          {/* X*/}
          <div className="relative group flex flex-col items-center">
            <a
              href="https://x.com/remains_here"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-neutral-900 transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <span className="absolute -top-5 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" style={fontStyle}>
              X
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group flex flex-col items-center">
            <a
              href="https://github.com/Karthikeyanhimself"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-neutral-900 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <span className="absolute -top-5 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" style={fontStyle}>
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/karthikeyan-reddy-198603278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="absolute -top-5 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" style={fontStyle}>
              LinkedIn
            </span>
          </div>

          {/* Mail (Contact) */}
          <div className="relative group flex flex-col items-center">
            <a href="/contact" aria-label="Contact" className="hover:text-neutral-900 transition-colors">
              <SiGmail className="h-5 w-5" />
            </a>
            <span className="absolute -top-5 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" style={fontStyle}>
              Contact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
