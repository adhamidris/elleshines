import type { Metadata } from 'next'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'All Products',
  description:
    'Shop our full range of professional skincare tools — nano ionic facial steamers, gua sha sets, and ultrasonic skin scrubbers. Free shipping on orders over $50.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-cream-dark border-b border-warm-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Our Collection</p>
          <h1 className="font-serif text-5xl text-charcoal mb-4">All Products</h1>
          <p className="text-warm-gray max-w-lg mx-auto">
            Professional-grade skincare tools for your home ritual. Every product is crafted for
            visible results and lasting quality.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <p className="text-sm text-warm-gray">{products.length} products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
