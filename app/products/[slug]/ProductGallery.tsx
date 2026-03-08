'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  name: string
  badge?: string
}

export default function ProductGallery({ images, name, badge }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-cream-dark">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-charcoal text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm z-10">
            {badge}
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-colors duration-200 ${
                active === i ? 'border-charcoal' : 'border-warm-border hover:border-warm-gray'
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} view ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
