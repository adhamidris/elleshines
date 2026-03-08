import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Shipping information for Elle Shines — delivery times, free shipping, and international orders to UK, US and Canada.',
}

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-label mb-3">Legal</p>
        <h1 className="font-serif text-5xl text-charcoal mb-4">Shipping Policy</h1>
        <p className="text-warm-gray mb-10">Last updated: 1 January 2025</p>

        <div className="policy-content">
          <p>
            This Shipping Policy outlines how Elle Shines LTD (registered at 128 City Rd, London
            EC1V 2NX, UK) processes and ships orders to customers in the United Kingdom, United
            States, and Canada.
          </p>

          <h2>Order Processing</h2>
          <p>
            Orders are processed within <strong>1–2 business days</strong> of payment confirmation
            (Monday–Friday, excluding UK public holidays). Orders placed on weekends or public
            holidays will be processed the next business day.
          </p>
          <p>
            You will receive an order confirmation email immediately after purchase, followed by a
            dispatch notification with tracking information once your order has shipped.
          </p>

          <h2>Free Shipping</h2>
          <p>
            We offer <strong>free standard shipping</strong> on all orders over <strong>$50 USD</strong>{' '}
            to the UK, US, and Canada. Orders below $50 USD are subject to a flat shipping fee
            of $4.99 USD.
          </p>

          <h2>Shipping Destinations &amp; Delivery Times</h2>

          <h3>United Kingdom</h3>
          <ul>
            <li>Standard Delivery: 2–4 business days</li>
            <li>Express Delivery: 1–2 business days (where available)</li>
          </ul>

          <h3>United States</h3>
          <ul>
            <li>Standard Delivery: 7–14 business days</li>
            <li>Express Delivery: 5–8 business days (where available)</li>
          </ul>

          <h3>Canada</h3>
          <ul>
            <li>Standard Delivery: 7–14 business days</li>
            <li>Express Delivery: 5–8 business days (where available)</li>
          </ul>

          <p>
            Delivery times are estimates and may vary due to carrier delays, customs processing,
            or periods of high demand (e.g. holidays). Elle Shines LTD is not responsible for
            carrier delays beyond our control.
          </p>

          <h2>Tracking Your Order</h2>
          <p>
            Once your order has been dispatched, you will receive a tracking number by email. You
            can use this to track your package through the carrier&apos;s website. If you have not
            received tracking information within 3 business days of your order, please contact us
            at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a>.
          </p>

          <h2>Customs, Duties &amp; Taxes</h2>
          <p>
            For orders shipped to the UK, all applicable taxes and duties are included in the
            product price or calculated at checkout.
          </p>
          <p>
            For orders shipped to the United States and Canada, you (the customer) are responsible
            for any customs duties, import taxes, or brokerage fees that may be charged by your
            country&apos;s customs authorities. These fees are not included in our prices or shipping
            charges. Elle Shines LTD has no control over these charges and cannot predict their
            amount.
          </p>

          <h2>Lost or Stolen Packages</h2>
          <p>
            If your tracking shows your order as delivered but you have not received it:
          </p>
          <ul>
            <li>Check with neighbours or building management</li>
            <li>Check for a delivery notification card</li>
            <li>Contact your local post office or carrier</li>
            <li>Contact us at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a></li>
          </ul>
          <p>
            Elle Shines LTD is not responsible for packages stolen after delivery confirmation.
            We recommend shipping to a secure location.
          </p>

          <h2>Incorrect Address</h2>
          <p>
            Please ensure your shipping address is correct at checkout. If you need to change
            your address, contact us immediately at{' '}
            <a href="mailto:info@elle-shines.com">info@elle-shines.com</a>. We cannot guarantee
            address changes after an order has been dispatched. If a package is returned to us
            due to an incorrect address, we will contact you to arrange re-shipment at your
            expense.
          </p>

          <h2>Damaged Parcels</h2>
          <p>
            If your parcel arrives visibly damaged, please take photographs before opening and
            contact us within 7 days at{' '}
            <a href="mailto:info@elle-shines.com">info@elle-shines.com</a>. We will work with
            you to resolve the issue promptly. See our{' '}
            <Link href="/policies/refund">Refund Policy</Link> for more details.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any shipping-related questions:
          </p>
          <ul>
            <li>Email: <a href="mailto:info@elle-shines.com">info@elle-shines.com</a></li>
            <li>Post: Elle Shines LTD, 128 City Rd, London EC1V 2NX, United Kingdom</li>
            <li>Response time: within 24 hours, Monday–Friday (9am–5pm)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
