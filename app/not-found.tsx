import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 gap-6">
      <p className="font-serif text-8xl text-warm-border">404</p>
      <h1 className="font-serif text-4xl text-charcoal">Page Not Found</h1>
      <p className="text-warm-gray max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 mt-4">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/products" className="btn-outline">
          Shop Products
        </Link>
      </div>
    </div>
  )
}
