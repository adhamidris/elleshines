'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-cream-dark border-t border-warm-border">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label mb-3">Stay in the glow</p>
        <h2 className="font-serif text-4xl text-charcoal mb-4">Get 10% Off Your First Order</h2>
        <p className="text-warm-gray mb-8">
          Subscribe to our newsletter for exclusive offers, skincare tips, and new product launches.
        </p>
        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-6 py-5 text-emerald-700 text-sm">
            ✓ You&apos;re on the list! Check your inbox for your 10% discount code.
          </div>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="input-field flex-1"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-warm-gray mt-4">
          No spam, ever. Unsubscribe at any time. See our{' '}
          <Link href="/policies/privacy" className="underline hover:text-charcoal">
            Privacy Policy
          </Link>
          {' '}and{' '}
          <Link href="/policies/terms#promotions" className="underline hover:text-charcoal">
            Promotion Terms
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
