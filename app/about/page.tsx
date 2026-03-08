import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Globe, Award, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Elle Shines LTD — a London-based beauty brand bringing professional skincare tools to homes across the UK, US and Canada.',
}

const values = [
  {
    icon: Heart,
    title: 'Skin First',
    description:
      'Everything we do starts with the health and wellbeing of your skin. We only carry tools we\'d use ourselves.',
  },
  {
    icon: Award,
    title: 'Professional Quality',
    description:
      'Our devices are held to professional standards. Clinic-grade results, home-friendly price points.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Based in London, shipping to the UK, United States and Canada — because great skin has no borders.',
  },
  {
    icon: Leaf,
    title: 'Conscious Curation',
    description:
      'We believe in thoughtful beauty — curated tools, not clutter. Quality over quantity, always.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-charcoal text-cream py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gold-light mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Built to Make
            <span className="block italic text-gold-light">Skin Shine</span>
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            Elle Shines was founded in London with a simple belief — professional skincare
            results shouldn&apos;t be locked behind spa doors or luxury price tags.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-3">Our Mission</p>
            <h2 className="font-serif text-4xl text-charcoal mb-6 leading-tight">
              Skincare Should Be Accessible
            </h2>
            <p className="text-warm-gray leading-relaxed mb-5">
              We started Elle Shines after recognising that the tools used in professional
              facials — ionic steamers, gua sha, ultrasonic scrubbers — were either
              unavailable to consumers or sold at inaccessible prices.
            </p>
            <p className="text-warm-gray leading-relaxed mb-5">
              We changed that. Our collection brings the same professional-grade technology
              directly to your bathroom shelf, with clear guidance on how to use each tool
              effectively.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Today, we serve thousands of customers across the UK, United States and Canada,
              all on their own journey to healthier, more radiant skin.
            </p>
          </div>
          <div className="bg-cream-dark border border-warm-border rounded-2xl p-10 text-center">
            <p className="font-serif text-7xl text-gold mb-2">✦</p>
            <blockquote className="font-serif text-2xl text-charcoal italic leading-relaxed">
              &ldquo;Begin your journey to a shiny skin.&rdquo;
            </blockquote>
            <p className="text-warm-gray text-sm mt-4">— Elle Shines</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-dark border-y border-warm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl text-charcoal">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-cream border border-warm-border rounded-lg p-7">
                <v.icon size={24} className="text-gold mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Company Details</p>
          <h2 className="font-serif text-4xl text-charcoal mb-8">Elle Shines LTD</h2>
          <div className="bg-cream-dark border border-warm-border rounded-lg p-8 text-left space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-gray mb-1">Company Name</p>
                <p className="text-charcoal font-medium">Elle Shines LTD</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-gray mb-1">Address</p>
                <address className="text-charcoal font-medium not-italic">
                  128 City Rd, London EC1V 2NX, UK
                </address>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-warm-gray mb-1">Email</p>
                <a href="mailto:info@elle-shines.com" className="text-charcoal font-medium hover:text-gold transition-colors">
                  info@elle-shines.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-dark border-t border-warm-border text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-charcoal mb-4">Ready to Start Your Journey?</h2>
          <p className="text-warm-gray mb-8">
            Discover tools that will transform your skincare routine.
          </p>
          <Link href="/products" className="btn-primary">
            Shop Our Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
