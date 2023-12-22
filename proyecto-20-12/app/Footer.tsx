// Footer.tsx
import React from "react";
import Link from "next/link";
import { navLinks } from "./navlinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-blue-500 mt-4 p-12 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        {/* Copyright Section */}
        <div className="pr-4">
          <p>&copy; {currentYear} Wenova Solutions. All rights reserved.</p>
        </div>

        {/* Navigation Links Section */}
        <div className="flex space-x-4 sm:mt-0 mt-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-white">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
