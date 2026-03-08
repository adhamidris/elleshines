'use client'

// Stripe integration commented out — orders flow through manual confirmation + payment link
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Shield, Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const COUNTRIES = [
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
]

export default function CheckoutPage() {
  const { items, cartTotal, hydrated, clearCart } = useCart()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [form, setForm] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    country: 'GB',
  })

  const shipping = cartTotal >= 50 ? 0 : 4.99
  const orderTotal = cartTotal + shipping

  useEffect(() => {
    if (!hydrated) return
    if (items.length === 0 && !orderPlaced) router.push('/cart')
  }, [items, hydrated, router, orderPlaced])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const orderNumber = `ES-${Date.now().toString(36).toUpperCase()}`
    const itemsSummary = items
      .map(
        ({ product, quantity }) =>
          `${product.name} x${quantity} ($${(product.price * quantity).toFixed(2)})`
      )
      .join(' | ')

    try {
      const res = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderNumber,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          state: form.state,
          postcode: form.postcode,
          country: form.country,
          items: itemsSummary,
          subtotal: cartTotal.toFixed(2),
          shipping: shipping.toFixed(2),
          total: orderTotal.toFixed(2),
        }),
      })

      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || 'Submission failed')

      setOrderPlaced(true)
      clearCart()
      router.push(
        `/checkout/success?order=${orderNumber}&email=${encodeURIComponent(form.email)}`
      )
    } catch {
      setError(
        'Something went wrong submitting your order. Please try again or contact us at info@elle-shines.com'
      )
      setSubmitting(false)
    }
  }

  if (!hydrated || items.length === 0) return null

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page title */}
        <div className="flex items-center gap-2 mb-10">
          <Shield size={16} className="text-gold" />
          <h1 className="font-serif text-2xl text-charcoal">Secure Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact */}
              <div>
                <h2 className="font-serif text-xl text-charcoal mb-5">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="input-field"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number (optional)"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h2 className="font-serif text-xl text-charcoal mb-5">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="input-field"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    className="input-field"
                  />
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="input-field"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="State / County"
                      className="input-field"
                    />
                    <input
                      type="text"
                      name="postcode"
                      value={form.postcode}
                      onChange={handleChange}
                      placeholder="Postcode / ZIP"
                      required
                      className="input-field"
                    />
                  </div>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Payment notice */}
              <div className="bg-cream-dark border border-warm-border rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-charcoal mb-1">
                      No payment required right now
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      Once you place your order, our team will confirm product
                      availability and send you a secure payment link via email.
                      You only pay after we confirm.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm px-4 py-3 rounded-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Placing Order...' : 'Place Order'}
              </button>

              <p className="text-xs text-warm-gray text-center">
                By placing your order you agree to our{' '}
                <Link
                  href="/policies/terms"
                  className="underline hover:text-charcoal"
                  target="_blank"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/policies/privacy"
                  className="underline hover:text-charcoal"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-cream-dark border border-warm-border rounded-lg p-6 sticky top-6">
              <h2 className="font-serif text-lg text-charcoal mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-md shrink-0 overflow-hidden bg-cream">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-warm-gray text-white text-[10px] rounded-full flex items-center justify-center z-10">
                        {quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal truncate">
                        {product.name}
                      </p>
                    </div>
                    <p className="text-sm text-charcoal font-medium shrink-0">
                      ${(product.price * quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-warm-border pt-4 text-sm">
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
                <div className="flex justify-between font-medium text-charcoal border-t border-warm-border pt-3 mt-1">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-lg">${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-xs text-warm-gray">
                <p>🔒 Secure order submission</p>
                <p>✉ Payment link sent after confirmation</p>
                <p>↩ 30-day returns accepted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
