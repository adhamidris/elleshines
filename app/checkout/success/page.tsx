'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Order Received',
    description: 'We have your order and details on file.',
    done: true,
  },
  {
    number: '02',
    title: 'Availability Confirmed',
    description:
      'Our team reviews your order and confirms all items are in stock — typically within 24 hours.',
    done: false,
  },
  {
    number: '03',
    title: 'Payment Link Sent',
    description:
      'Once confirmed, we email you a secure payment link. No payment is taken until this step.',
    done: false,
  },
  {
    number: '04',
    title: 'Order Dispatched',
    description:
      "After payment, your order is packed and shipped. You'll receive a tracking number by email.",
    done: false,
  },
]

function SuccessContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('order')
  const email = searchParams.get('email')

  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="max-w-lg mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <CheckCircle size={32} className="text-emerald-500" />
            </div>
          </div>
          <h1 className="font-serif text-4xl text-charcoal mb-3">Order Received</h1>
          <p className="text-warm-gray text-sm leading-relaxed">
            Thank you! Your order has been placed successfully.
            {email && (
              <>
                {' '}All updates will be sent to{' '}
                <span className="text-charcoal font-medium">{email}</span>.
              </>
            )}
          </p>
        </div>

        {/* Order reference */}
        {orderNumber && (
          <div className="flex items-center justify-between bg-cream-dark border border-warm-border rounded-lg px-5 py-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-gray mb-0.5">
                Order Reference
              </p>
              <p className="font-mono text-sm font-semibold text-charcoal tracking-wide">
                {orderNumber}
              </p>
            </div>
            <p className="text-xs text-warm-gray text-right max-w-[140px] leading-relaxed">
              Keep this for any support queries
            </p>
          </div>
        )}

        {/* What happens next — step list */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-6">
            What happens next
          </p>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-8 bottom-8 w-px bg-warm-border" />

            <ol className="space-y-0">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-5 pb-8 last:pb-0 relative">
                  {/* Step indicator */}
                  <div
                    className={`w-10 h-10 rounded-full border-2 shrink-0 flex items-center justify-center z-10 ${
                      step.done
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'bg-cream border-warm-border'
                    }`}
                  >
                    {step.done ? (
                      <CheckCircle size={18} className="text-white" />
                    ) : (
                      <span className="font-serif text-xs text-warm-gray">{step.number}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-1.5">
                    <p
                      className={`text-sm font-medium mb-1 ${
                        step.done ? 'text-emerald-600' : 'text-charcoal'
                      }`}
                    >
                      {step.title}
                      {step.done && (
                        <span className="ml-2 text-[10px] uppercase tracking-widest font-normal bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100">
                          Done
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-warm-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-border mb-8" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/products" className="btn-primary flex-1 text-center">
            Continue Shopping
          </Link>
          <Link href="/contact" className="btn-outline flex-1 text-center">
            Contact Us
          </Link>
        </div>

        <p className="text-xs text-warm-gray text-center mt-6">
          Questions about your order?{' '}
          <a
            href="mailto:info@elle-shines.com"
            className="underline hover:text-charcoal transition-colors"
          >
            info@elle-shines.com
          </a>
        </p>

      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-warm-border border-t-gold rounded-full animate-spin" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
