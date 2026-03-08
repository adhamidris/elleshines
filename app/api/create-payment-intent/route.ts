import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2023-10-16',
})

interface CartItemPayload {
  id: string
  price: number
  quantity: number
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add STRIPE_SECRET_KEY to your .env.local file.' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { items, shipping = 0 }: { items: CartItemPayload[]; shipping: number } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 })
    }

    // Calculate total in cents
    const subtotalCents = items.reduce(
      (sum, item) => sum + Math.round(item.price * 100) * item.quantity,
      0
    )
    const shippingCents = Math.round(shipping * 100)
    const totalCents = subtotalCents + shippingCents

    if (totalCents < 50) {
      return NextResponse.json({ error: 'Order total too low' }, { status: 400 })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCents,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: {
        item_count: items.length.toString(),
        item_ids: items.map((i) => i.id).join(','),
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
