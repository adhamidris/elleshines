export interface Product {
  id: string
  slug: string
  name: string
  price: number
  originalPrice?: number
  shortDescription: string
  longDescription: string
  features: string[]
  benefits: string[]
  howToUse: string[]
  image: string
  images: string[]
  badge?: string
  inStock: boolean
  category: string
  sku: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'nano-ionic-facial-steamer',
    name: 'NANO IONIC Facial Steamer',
    price: 49.99,
    originalPrice: 79.99,
    shortDescription:
      'Professional-grade nano ionic facial steamer for deep pore cleansing, hydration, and radiant skin.',
    longDescription:
      'Experience spa-quality skincare at home with our NANO IONIC Facial Steamer. Using advanced nano-ionic technology, this device converts water into ultra-fine mist particles that are 10x more effective than traditional steam. These nanoparticles penetrate deep into your pores, softening blackheads and impurities while infusing your skin with vital moisture. Perfect as a prep step before masks, serums, or facial treatments — your skin will absorb products up to 6x better after a steaming session.',
    features: [
      'Nano-ionic technology for 10x deeper penetration vs. traditional steam',
      'Ultra-fine mist — 0.3 micron particle size',
      '9-minute continuous steam session',
      '360° flexible neck for targeted application',
      'Quiet operation under 40dB',
      'Auto shut-off for safety',
      'Large 80ml water tank',
      'Includes measuring cup, face mask brush & blackhead extractor kit',
    ],
    benefits: [
      'Opens and deeply cleanses pores',
      'Boosts skin hydration and moisture retention',
      'Softens blackheads and whiteheads for easy removal',
      'Enhances absorption of serums, masks and moisturisers',
      'Promotes circulation for a natural glow',
      'Soothes sinus congestion',
    ],
    howToUse: [
      'Fill the water tank with distilled or filtered water up to the MAX line.',
      'Place your face 25–30 cm from the nozzle.',
      'Steam for 8–10 minutes, 1–2 times per week.',
      'Follow immediately with your favourite serum or mask for best results.',
      'Clean the tank with a damp cloth after each use.',
    ],
    image: '/images/nanosteamer/1.jpg',
    images: [
      '/images/nanosteamer/1.jpg',
      '/images/nanosteamer/2.jpg',
    ],
    badge: 'Best Seller',
    inStock: true,
    category: 'Face Care',
    sku: 'ES-FS-001',
  },
  {
    id: '2',
    slug: 'gua-sha-set',
    name: 'Gua Sha Set',
    price: 34.99,
    originalPrice: 54.99,
    shortDescription:
      'Authentic rose quartz & jade gua sha tools for facial sculpting, depuffing and a natural lift.',
    longDescription:
      'Rooted in centuries of traditional Chinese wellness, our Gua Sha Set brings the ancient art of facial massage into your modern routine. Crafted from 100% natural rose quartz and jade stone, each tool is hand-polished to a silky smooth finish. The unique contoured shape fits perfectly along your jawline, cheekbones, neck and décolletage. Used consistently, gua sha stimulates lymphatic drainage, reduces puffiness, and sculpts a naturally defined facial contour — without needles, without filler.',
    features: [
      '100% natural rose quartz stone',
      'Dual-sided design — curved & straight edges',
      'Premium velvet storage pouch included',
      'Step-by-step instruction guide',
      'Works on face, neck & décolletage',
      'Hypoallergenic and skin-safe',
    ],
    benefits: [
      'Reduces facial puffiness and water retention',
      'Sculpts jawline and lifts cheekbones',
      'Stimulates lymphatic drainage',
      'Improves circulation for radiant complexion',
      'Relieves facial tension and jaw tightness',
      'Enhances absorption of facial oils and serums',
    ],
    howToUse: [
      'Apply a facial oil or serum generously to clean skin.',
      'Hold the gua sha at a 15° angle against your skin.',
      'Using gentle but firm pressure, sweep upward and outward along each area.',
      'Start at the neck, work up to the jawline, cheeks, then forehead.',
      'Repeat each stroke 3–5 times per area.',
      'Use 3–5 times per week for best results.',
      'Clean with warm water and mild soap after each use.',
    ],
    image: '/images/guasha/1.jpg',
    images: ['/images/guasha/1.jpg', '/images/guasha/2.jpg'],
    badge: 'Fan Favourite',
    inStock: true,
    category: 'Face Tools',
    sku: 'ES-GS-002',
  },
  {
    id: '3',
    slug: '3x1-ultrasonic-skin-scrubber',
    name: '3x1 UltraSonic Skin Scrubber',
    price: 59.99,
    originalPrice: 99.99,
    shortDescription:
      '3-in-1 professional ultrasonic skin scrubber — deep cleanse, lift and infuse in one smart device.',
    longDescription:
      'The Elle Shines 3x1 UltraSonic Skin Scrubber is your all-in-one solution for professional-grade skin refinement at home. Operating at 28,000 vibrations per second, this device uses ultrasonic technology across three powerful modes: Cleanse Mode exfoliates dead skin and unclogs pores; Lift Mode stimulates collagen and tightens skin; and Infuse Mode drives your serums and essences deep into the dermis for maximum absorption. The spatula-shaped stainless steel tip is antimicrobial and easy to clean — one device does the work of three.',
    features: [
      '3 modes: Cleanse, Lift & Infuse',
      '28,000 ultrasonic vibrations per second',
      'Stainless steel antimicrobial scrubber tip',
      'Rechargeable via USB-C — 2-hour charge, 90-minute use',
      'Waterproof design (IPX5)',
      'LED indicator for mode selection',
      'Ergonomic handle for precise control',
      'Travel pouch included',
    ],
    benefits: [
      'Removes dead skin cells, sebum and product buildup',
      'Unclogs pores gently without irritation',
      'Stimulates collagen production for firmer skin',
      'Reduces appearance of fine lines',
      'Maximises serum and moisturiser absorption',
      'Suitable for all skin types including sensitive skin',
    ],
    howToUse: [
      'Charge device fully before first use.',
      'CLEANSE: Dampen skin, turn device on, glide in upward motions for 2–3 minutes.',
      'LIFT: Apply toner or mist, switch to Lift mode, work in upward strokes for 2 minutes.',
      'INFUSE: Apply serum, switch to Infuse mode, press gently into skin for 1–2 minutes.',
      'Rinse tip clean after each use.',
      'Use 2–3 times per week.',
    ],
    image: '/images/ultrasonic/1.jpg',
    images: [
      '/images/ultrasonic/1.jpg',
      '/images/ultrasonic/2.jpg',
    ],
    badge: 'New',
    inStock: true,
    category: 'Face Tools',
    sku: 'ES-SS-003',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(currentId: string): Product[] {
  return products.filter((p) => p.id !== currentId)
}
