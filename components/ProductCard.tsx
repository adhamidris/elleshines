'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden rounded-lg mb-4">
        <div className="w-full aspect-square relative bg-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1">
        <p className="text-xs uppercase tracking-widest text-warm-gray mb-1">{product.category}</p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors duration-200 mb-2 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-warm-gray leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl text-charcoal">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-warm-gray line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-2 bg-charcoal text-cream text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm hover:bg-gold transition-colors duration-200"
          >
            <ShoppingBag size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
