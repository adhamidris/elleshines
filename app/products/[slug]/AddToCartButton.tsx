'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingBag, Check } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from '@/context/CartContext'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Quantity selector */}
      <div className="flex items-center gap-4">
        <label className="text-sm text-warm-gray uppercase tracking-wider">Qty</label>
        <div className="flex items-center border border-warm-border rounded-sm">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2.5 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Decrease"
          >
            <Minus size={14} />
          </button>
          <span className="px-5 py-2.5 text-charcoal font-medium min-w-[40px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2.5 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Increase"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        className={`w-full flex items-center justify-center gap-3 py-4 text-sm uppercase tracking-wider rounded-sm transition-all duration-200 font-medium ${
          added
            ? 'bg-emerald-600 text-white'
            : product.inStock
            ? 'bg-charcoal text-cream hover:bg-gold'
            : 'bg-warm-border text-warm-gray cursor-not-allowed'
        }`}
      >
        {added ? (
          <>
            <Check size={16} />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingBag size={16} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </>
        )}
      </button>
    </div>
  )
}
