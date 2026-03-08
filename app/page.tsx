import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Truck, Shield, Star, RefreshCw } from 'lucide-react'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import Testimonials from '@/components/Testimonials'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Elle Shines — Professional Skincare Tools',
  description:
    'Begin your journey to shiny, healthy skin with Elle Shines. Professional-grade skincare tools — free shipping on orders over $50.',
}

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $50 to UK, US & Canada',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'SSL encrypted checkout — pay only after we confirm your order',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Hassle-free returns within 30 days of delivery',
  },
  {
    icon: Star,
    title: '4.9★ Rated',
    description: 'Loved by thousands of customers worldwide',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Choose Your Tool',
    description:
      'Browse our curated collection of professional skincare devices designed for visible results at home.',
  },
  {
    step: '02',
    title: 'Build Your Ritual',
    description:
      'Our team-curated guides help you integrate each tool into your existing skincare routine seamlessly.',
  },
  {
    step: '03',
    title: 'Reveal Your Glow',
    description:
      'Consistent use brings visible results — clearer pores, plumper skin and a radiant complexion you\'ll love.',
  },
]

const faqItems = [
  {
    q: 'Do you ship internationally?',
    a: 'We currently ship to the United Kingdom, United States, and Canada. Free shipping is available on all orders over $50.',
  },
  {
    q: 'How long does delivery take?',
    a: 'UK orders arrive in 2–4 business days. US and Canada orders typically arrive in 5–10 business days. You\'ll receive a tracking link as soon as your order ships.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return policy. If you are not completely satisfied, contact us at info@elle-shines.com and we\'ll arrange a return.',
  },
  {
    q: 'Are your products safe for sensitive skin?',
    a: 'Yes. All our tools are designed to be gentle enough for sensitive skin. We always recommend starting with the lowest intensity setting and patch-testing before full use.',
  },
  {
    q: 'How do I contact customer support?',
    a: 'Email us at info@elle-shines.com. We respond within 24 hours Monday–Friday (9am–5pm).',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-cream-dark" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-violet-50/40 via-rose-50/30 to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-6">Elle Shines ✦ Est. London</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-8">
              Begin Your
              <span className="block text-gold italic">Journey to</span>
              Shiny Skin.
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed mb-10 max-w-lg">
              Professional-grade skincare tools, designed for your home ritual. From nano ionic
              steamers to gua sha — we bring the spa to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Shop Now
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
            <div className="flex flex-col gap-2.5 mt-10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-gold text-base leading-none">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <span className="text-sm font-medium text-charcoal">4.9</span>
                <span className="text-sm text-warm-gray">· 2,000+ happy customers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-warm-gray">
                <span>🇬🇧 United Kingdom</span>
                <span className="text-warm-border">·</span>
                <span>🇺🇸 United States</span>
                <span className="text-warm-border">·</span>
                <span>🇨🇦 Canada</span>
              </div>
            </div>
          </div>

          {/* Hero product showcase */}
          <div className="relative hidden lg:block">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Large left image — Facial Steamer */}
              <Link
                href="/products/nano-ionic-facial-steamer"
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg transform translate-y-6"
              >
                <Image
                  src="/images/facial-steamer-hero.jpeg"
                  alt="NANO IONIC Facial Steamer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1280px) 25vw, 300px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-cream font-serif text-sm">NANO IONIC Steamer</span>
              </Link>

              {/* Two smaller right images */}
              <div className="space-y-4">
                <Link
                  href="/products/gua-sha-set"
                  className="group relative rounded-2xl overflow-hidden aspect-square shadow-lg block"
                >
                  <Image
                    src="/images/gua-sha-hero.jpg"
                    alt="Gua Sha Set"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1280px) 20vw, 240px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-cream font-serif text-sm">Gua Sha Set</span>
                </Link>
                <Link
                  href="/products/3x1-ultrasonic-skin-scrubber"
                  className="group relative rounded-2xl overflow-hidden aspect-square shadow-lg block"
                >
                  <Image
                    src="/images/ultrasonic-hero.jpeg"
                    alt="3x1 UltraSonic Skin Scrubber"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1280px) 20vw, 240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-cream font-serif text-sm">Skin Scrubber</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="border-y border-warm-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <f.icon size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-charcoal">{f.title}</p>
                  <p className="text-xs text-warm-gray mt-0.5 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Collection</p>
            <h2 className="section-title mb-4">Skincare Tools That Deliver</h2>
            <p className="text-warm-gray max-w-lg mx-auto">
              Each product in our collection is carefully selected for its clinical efficacy and
              ease of use — skincare that actually works.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gold-light mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-tight">
              Built for the
              <span className="block italic text-gold-light">Modern Ritual</span>
            </h2>
            <p className="text-cream/70 leading-relaxed mb-6">
              Elle Shines was born in London from a simple frustration: spa-quality results
              shouldn&apos;t require spa prices or appointments. We built a range of professional
              tools that bring clinical-grade skincare into your home, without compromise.
            </p>
            <p className="text-cream/70 leading-relaxed mb-10">
              Every product we carry is tested by our team, backed by skincare science, and
              designed to fit seamlessly into a real routine — not a fantasy one. We believe
              that glowing skin is within everyone&apos;s reach.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold-light border-b border-gold-light pb-0.5 hover:text-cream hover:border-cream transition-colors">
              Read Our Story →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Products', value: '3' },
              { label: 'Happy Customers', value: '2,000+' },
              { label: 'Countries', value: '3' },
              { label: 'Years of Excellence', value: '3+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-4">
                <p className="font-serif text-4xl text-gold-light mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-cream/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">The Journey</p>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-warm-border" />
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-warm-border bg-cream flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="font-serif text-lg text-gold">{step.step}</span>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{step.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-warm-border">
            {faqItems.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-charcoal pr-6">{item.q}</span>
                  <span className="text-warm-gray group-open:rotate-180 transition-transform duration-200 shrink-0">
                    ▾
                  </span>
                </summary>
                <p className="text-warm-gray leading-relaxed mt-3 text-sm pr-6">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-warm-gray text-sm mb-4">Still have questions?</p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterForm />
    </>
  )
}
