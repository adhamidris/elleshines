const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'London, UK',
    product: 'NANO IONIC Facial Steamer',
    rating: 5,
    text: "I've been using the facial steamer for two months now and my skin has genuinely never looked better. My pores are noticeably smaller and my skin drinks up my serum so much more effectively now. Worth every penny!",
  },
  {
    id: 2,
    name: 'Emma K.',
    location: 'New York, US',
    product: 'Gua Sha Set',
    rating: 5,
    text: 'The gua sha set completely transformed my morning routine. My face looks more sculpted and lifted after just a few weeks of consistent use. The rose quartz quality is gorgeous — it feels so luxurious.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    location: 'Toronto, Canada',
    product: '3x1 UltraSonic Skin Scrubber',
    rating: 5,
    text: 'Fast delivery to Canada and the packaging was beautiful. The skin scrubber is incredible — I was shocked by the amount of gunk it removed from my pores on the first use. My skin literally glows now.',
  },
  {
    id: 4,
    name: 'Maria T.',
    location: 'Manchester, UK',
    product: 'Gua Sha Set',
    rating: 5,
    text: "I bought the gua sha set on a whim and now I can't imagine my skincare routine without it. The puffiness I had around my jaw every morning is just... gone. Highly recommend to anyone with lymphatic issues.",
  },
  {
    id: 5,
    name: 'Lauren B.',
    location: 'Los Angeles, US',
    product: 'NANO IONIC Facial Steamer',
    rating: 5,
    text: 'I used to spend £80 a month at the spa. Now I do my own facial at home with this steamer and honestly the results are just as good. My esthetician even commented on how clear my pores have been!',
  },
  {
    id: 6,
    name: 'Priya S.',
    location: 'Birmingham, UK',
    product: '3x1 UltraSonic Skin Scrubber',
    rating: 5,
    text: 'Three devices in one — the cleanse, lift and infuse modes are all incredible. Customer service was also really helpful when I had a question about charging. Will definitely be recommending Elle Shines to everyone.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-gold' : 'text-warm-border'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gold mb-3">Real Results</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            What Our Customers Say
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            Thousands of customers across the UK, US and Canada have transformed their skincare
            routines with Elle Shines.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream rounded-lg p-7 border border-warm-border flex flex-col gap-4"
            >
              <StarRating rating={t.rating} />
              <p className="text-charcoal leading-relaxed text-sm flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-warm-border pt-4">
                <p className="font-medium text-charcoal text-sm">{t.name}</p>
                <p className="text-xs text-warm-gray">{t.location}</p>
                <p className="text-xs text-gold mt-1">Verified purchase: {t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
          <div className="text-center">
            <p className="font-serif text-3xl text-gold">4.9★</p>
            <p className="text-xs uppercase tracking-widest text-warm-gray mt-1">Average Rating</p>
          </div>
          <div className="w-px h-10 bg-warm-border hidden sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-charcoal">2,000+</p>
            <p className="text-xs uppercase tracking-widest text-warm-gray mt-1">Happy Customers</p>
          </div>
          <div className="w-px h-10 bg-warm-border hidden sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-charcoal">3</p>
            <p className="text-xs uppercase tracking-widest text-warm-gray mt-1">Countries Served</p>
          </div>
          <div className="w-px h-10 bg-warm-border hidden sm:block" />
          <div className="text-center">
            <p className="font-serif text-3xl text-charcoal">98%</p>
            <p className="text-xs uppercase tracking-widest text-warm-gray mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  )
}
