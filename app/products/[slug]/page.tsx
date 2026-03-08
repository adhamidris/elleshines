import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Truck, Shield, RefreshCw } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import AddToCartButton from './AddToCartButton'
import ProductGallery from './ProductGallery'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product.id)

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="border-b border-warm-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-warm-gray uppercase tracking-wider">
            <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-charcoal transition-colors">Products</Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main product area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Image gallery */}
          <div className="sticky top-24">
            <ProductGallery images={product.images} name={product.name} badge={product.badge} />
          </div>

          {/* Info */}
          <div>
            {/* Category */}
            <p className="section-label mb-3">{product.category}</p>

            {/* Name */}
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl text-charcoal">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-warm-gray line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-sm text-emerald-600 font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Short description */}
            <p className="text-warm-gray leading-relaxed mb-8 text-[15px]">
              {product.shortDescription}
            </p>

            {/* Add to cart */}
            <AddToCartButton product={product} />

            {/* Shipping assurances */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <Truck size={14} className="text-gold shrink-0" />
                Free shipping $50+
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <RefreshCw size={14} className="text-gold shrink-0" />
                30-day returns
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <Shield size={14} className="text-gold shrink-0" />
                Secure checkout
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-warm-border my-10" />

            {/* Long description */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl text-charcoal mb-4">About This Product</h2>
              <p className="text-warm-gray leading-relaxed text-sm">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl text-charcoal mb-4">What&apos;s Included / Features</h2>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-warm-gray">
                    <Check size={16} className="text-gold shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-10">
              <h2 className="font-serif text-2xl text-charcoal mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-warm-gray">
                    <span className="text-gold shrink-0">✦</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to use */}
            <div className="bg-cream-dark border border-warm-border rounded-lg p-6">
              <h2 className="font-serif text-xl text-charcoal mb-4">How To Use</h2>
              <ol className="space-y-3">
                {product.howToUse.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-warm-gray">
                    <span className="font-serif text-gold shrink-0 w-5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* SKU */}
            <p className="text-xs text-warm-gray mt-6">SKU: {product.sku}</p>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-warm-border bg-cream-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-charcoal text-center mb-12">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
