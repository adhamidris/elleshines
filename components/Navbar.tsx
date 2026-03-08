'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const { cartCount, setIsOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-warm-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-charcoal p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop nav links (left) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider uppercase text-warm-gray hover:text-charcoal transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo + Brand name (center) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="/logo.png"
            alt="Elle Shines logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-2xl tracking-[0.2em] text-charcoal">
            ELLE SHINES
          </span>
        </Link>

        {/* Cart icon (right) */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative p-1 text-charcoal hover:text-gold transition-colors duration-200"
          aria-label="Open cart"
        >
          <ShoppingBag size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount > 9 ? '9+' : cartCount}
            </span>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-warm-border px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base tracking-wider uppercase text-charcoal hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
