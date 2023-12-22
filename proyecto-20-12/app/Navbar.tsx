'use client';

// Navbar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from './navlinks'; // Adjust the path accordingly

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent p-12 relative">
      <div className="container mt-4 mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Your Image Alt Text"
            width={1024}
            height={324}
            style={{ maxWidth: '300px' }}
          />
          <div className="lg:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
          </div>
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-black text-lg pr-8">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`lg:hidden mt-12 absolute top-19 left-0 w-full bg-blue-500 pt-4 ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          } transition-opacity duration-300 transform origin-top`}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="block text-white p-16 text-xl">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
