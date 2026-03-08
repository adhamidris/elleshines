import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Facebook } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="Elle Shines logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="font-serif text-xl tracking-[0.2em] text-cream">ELLE SHINES</span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 mb-6">
              Begin your journey to shiny, healthy skin with professional-grade beauty tools
              designed for everyday luxury.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/elleshinesco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold-light transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/elleshinesco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold-light transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:info@elle-shines.com"
                className="text-cream/60 hover:text-gold-light transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-cream mb-5 font-medium">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/nano-ionic-facial-steamer" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Facial Steamer
                </Link>
              </li>
              <li>
                <Link href="/products/gua-sha-set" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Gua Sha Set
                </Link>
              </li>
              <li>
                <Link href="/products/3x1-ultrasonic-skin-scrubber" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Skin Scrubber
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-cream mb-5 font-medium">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/refund" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-cream mb-5 font-medium">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-light mt-0.5 shrink-0" />
                <address className="text-sm text-cream/60 not-italic leading-relaxed">
                  128 City Rd<br />
                  London EC1V 2NX<br />
                  United Kingdom
                </address>
              </li>
              <li>
                <a
                  href="mailto:info@elle-shines.com"
                  className="text-sm text-cream/60 hover:text-gold-light transition-colors duration-200"
                >
                  info@elle-shines.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-cream/40 leading-relaxed">
                Customer support Mon–Fri, 9am–5pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {currentYear} Elle Shines LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/policies/privacy" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Privacy
            </Link>
            <Link href="/policies/terms" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Terms
            </Link>
            <Link href="/policies/refund" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
