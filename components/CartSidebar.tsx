'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, cartTotal, cartCount } = useCart()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, setIsOpen])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const freeShippingThreshold = 50
  const remaining = Math.max(0, freeShippingThreshold - cartTotal)

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-charcoal" />
            <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
            {cartCount > 0 && (
              <span className="text-xs text-warm-gray">({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-charcoal transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free shipping bar */}
        {cartTotal > 0 && (
          <div className="px-6 py-3 bg-cream-dark border-b border-warm-border">
            {remaining > 0 ? (
              <>
                <p className="text-xs text-warm-gray mb-2">
                  Add <span className="font-medium text-charcoal">${remaining.toFixed(2)}</span> more for free shipping!
                </p>
                <div className="h-1 bg-warm-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (cartTotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </>
            ) : (
              <p className="text-xs text-gold font-medium">✓ You qualify for free shipping!</p>
            )}
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <ShoppingBag size={40} className="text-warm-border" />
              <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
              <p className="text-sm text-warm-gray">Discover our skincare tools</p>
              <button onClick={() => setIsOpen(false)}>
                <Link
                  href="/products"
                  className="inline-block bg-charcoal text-cream text-xs uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-gold transition-colors"
                >
                  Shop Now
                </Link>
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4">
                {/* Thumbnail */}
                <Link href={`/products/${product.slug}`} onClick={() => setIsOpen(false)}>
                  <div className="w-20 h-20 rounded-md shrink-0 overflow-hidden bg-cream-dark relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-charcoal leading-tight">{product.name}</p>
                  <p className="text-sm text-warm-gray mt-0.5">${product.price.toFixed(2)}</p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Qty */}
                    <div className="flex items-center border border-warm-border rounded-sm">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-2.5 py-1.5 text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-sm font-medium text-charcoal min-w-[24px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-2.5 py-1.5 text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-warm-gray hover:text-rose-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-warm-border bg-cream space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-medium text-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray">Shipping</span>
              <span className="text-sm text-charcoal">
                {cartTotal >= freeShippingThreshold ? 'Free' : 'Calculated at checkout'}
              </span>
            </div>
            <p className="text-xs text-warm-gray">Taxes calculated at checkout.</p>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-charcoal text-cream text-center text-sm uppercase tracking-wider py-4 rounded-sm hover:bg-gold transition-colors duration-200"
            >
              Checkout · ${cartTotal.toFixed(2)}
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm text-warm-gray hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
