'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, cartTotal } = useCart()
  const shipping = cartTotal >= 50 ? 0 : 4.99
  const orderTotal = cartTotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <ShoppingBag size={48} className="text-warm-border" />
        <h1 className="font-serif text-4xl text-charcoal">Your Cart is Empty</h1>
        <p className="text-warm-gray">Add something beautiful to get started.</p>
        <Link href="/products" className="btn-primary mt-4">
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl text-charcoal mb-10">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-5">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-5 bg-white border border-warm-border rounded-lg p-5"
              >
                {/* Thumbnail */}
                <Link href={`/products/${product.slug}`}>
                  <div className="w-24 h-24 rounded-md shrink-0 overflow-hidden bg-cream-dark relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-warm-gray mb-1">
                        {product.category}
                      </p>
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="font-medium text-charcoal hover:text-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-warm-gray hover:text-rose-500 transition-colors shrink-0"
                      aria-label="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Qty */}
                    <div className="flex items-center border border-warm-border rounded-sm">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-2.5 py-1.5 text-warm-gray hover:text-charcoal transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-4 text-sm font-medium text-charcoal min-w-[32px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-2.5 py-1.5 text-warm-gray hover:text-charcoal transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <p className="font-medium text-charcoal">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors mt-2"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-warm-border rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl text-charcoal mb-6">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-warm-gray">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-warm-gray">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-emerald-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {cartTotal < 50 && (
                  <p className="text-xs text-warm-gray bg-cream-dark rounded px-3 py-2">
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
                  </p>
                )}
                <div className="border-t border-warm-border pt-3 flex justify-between font-medium text-charcoal">
                  <span>Total</span>
                  <span className="font-serif text-xl">${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-xs text-warm-gray mt-2">Taxes calculated at checkout.</p>

              <Link
                href="/checkout"
                className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </Link>

              <div className="mt-5 flex flex-col gap-2 text-xs text-warm-gray">
                <p className="flex items-center gap-2">🔒 Secure SSL encryption</p>
                <p className="flex items-center gap-2">↩ 30-day hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
