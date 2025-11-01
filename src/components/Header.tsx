"use client";

import { JSX, useState } from "react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { label: "About Us", href: "#about" },
  { label: "Travel", href: "#travel" },
  { label: "Simee", href: "#simee" },
  { label: "Gallery", href: "#gallery" },
];

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full bg-light-beige/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif text-dark-brown">
          Hoàng ❤️ Quỳnh
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-dark-brown">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-warm-tan transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-brown"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light-beige border-t border-warm-cream">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-dark-brown hover:text-warm-tan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
