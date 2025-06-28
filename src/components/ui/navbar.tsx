// src/components/navbar/Navbar.tsx
'use client'; // Essential for interactive components and framer-motion

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react'; // For the hamburger icon

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // ShadCN Sheet for mobile menu

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' }, // Assuming you'll have a pricing section
  { href: '#cta', label: 'Contact' }, // Changed this label to Contact to match the button intent
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 flex items-center justify-between border-b border-gray-800 bg-black shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight"
        >
          WebbyWolf
        </motion.h1>
      </Link>

      {/* Desktop Navigation (hidden on small screens) */}
      <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-subheading text-lg text-gray-300 hover:text-btn-primary transition-colors duration-300 ease-in-out" // Using custom colors
          >
            {link.label}
          </Link>
        ))}
        {/* Desktop CTA Button */}
        <Button
          asChild
          className="px-6 py-2 text-md rounded-full font-subheading font-semibold
                     bg-btn-primary text-white shadow-md
                     hover:bg-btn-secondary hover:scale-105
                     transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-btn-primary focus:ring-opacity-50" // Uses custom colors
        >
          <Link href="/#cta"> {/* Corrected href to /#cta */}
            Get Started
          </Link>
        </Button>
      </nav>

      {/* Mobile Menu Button (hidden on medium and larger screens) */}
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-950 border-gray-800 text-white p-6 pt-16 flex flex-col items-center">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-6 text-xl mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  className="font-subheading font-semibold text-gray-200 hover:text-btn-primary transition-colors duration-300" // Uses custom colors
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Mobile CTA Button */}
            <Button
              asChild
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on button click
              className="px-8 py-3 text-lg rounded-full font-subheading font-semibold
                         bg-btn-primary text-white shadow-md
                         hover:bg-btn-secondary hover:scale-105
                         transition-all duration-300 ease-in-out" // Uses custom colors
            >
              <Link href="/#Contact-form"> {/* Corrected href to /#cta */}
                Contact Us
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}