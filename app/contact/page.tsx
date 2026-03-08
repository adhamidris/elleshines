import type { Metadata } from 'next'
import { MapPin, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Elle Shines. We\'re here to help with orders, product questions, returns, and anything else you need.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-cream-dark border-b border-warm-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">We&apos;re Here to Help</p>
          <h1 className="font-serif text-5xl text-charcoal mb-4">Contact Us</h1>
          <p className="text-warm-gray max-w-md mx-auto">
            Have a question about your order, a product, or anything else? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <h2 className="font-serif text-2xl text-charcoal mb-8">Send Us a Message</h2>
          <form
            className="space-y-5"
            action="mailto:info@elle-shines.com"
            method="get"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-gray mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Your first name"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-gray mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Your last name"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-gray mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-gray mb-2">
                Subject
              </label>
              <select name="subject" className="input-field" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option value="order">Order enquiry</option>
                <option value="return">Return or refund</option>
                <option value="product">Product question</option>
                <option value="shipping">Shipping &amp; tracking</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-warm-gray mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                className="input-field resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-6">Get in Touch</h2>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cream-dark border border-warm-border flex items-center justify-center shrink-0">
              <Mail size={16} className="text-gold" />
            </div>
            <div>
              <p className="font-medium text-charcoal mb-1">Email</p>
              <a
                href="mailto:info@elle-shines.com"
                className="text-warm-gray hover:text-charcoal transition-colors text-sm"
              >
                info@elle-shines.com
              </a>
              <p className="text-xs text-warm-gray mt-1">We typically respond within 24 hours.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cream-dark border border-warm-border flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-gold" />
            </div>
            <div>
              <p className="font-medium text-charcoal mb-1">Registered Address</p>
              <address className="text-warm-gray not-italic text-sm leading-relaxed">
                128 City Rd<br />
                London EC1V 2NX<br />
                United Kingdom
              </address>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cream-dark border border-warm-border flex items-center justify-center shrink-0">
              <Clock size={16} className="text-gold" />
            </div>
            <div>
              <p className="font-medium text-charcoal mb-1">Support Hours</p>
              <p className="text-warm-gray text-sm">Monday – Friday</p>
              <p className="text-warm-gray text-sm">9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-warm-border pt-8">
            <h3 className="font-serif text-lg text-charcoal mb-4">Common Questions</h3>
            <div className="space-y-3 text-sm text-warm-gray">
              <p>
                <span className="font-medium text-charcoal">Where is my order?</span><br />
                Track your order via the link in your dispatch email, or contact us with your order reference.
              </p>
              <p>
                <span className="font-medium text-charcoal">Can I return my product?</span><br />
                Yes — we accept returns within 30 days. See our{' '}
                <a href="/policies/refund" className="underline hover:text-charcoal">Refund Policy</a>.
              </p>
              <p>
                <span className="font-medium text-charcoal">Do you ship to my country?</span><br />
                We currently ship to the UK, US and Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
