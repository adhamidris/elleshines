import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: '30-day hassle-free return and refund policy from Elle Shines LTD.',
}

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-label mb-3">Legal</p>
        <h1 className="font-serif text-5xl text-charcoal mb-4">Refund Policy</h1>
        <p className="text-warm-gray mb-10">Last updated: 1 January 2025</p>

        <div className="policy-content">
          <p>
            At Elle Shines, your satisfaction is our priority. We offer a 30-day return and refund
            policy because we want you to shop with complete confidence. This policy applies to all
            orders placed on elle-shines.vercel.app by Elle Shines LTD, registered at 128 City Rd, London
            EC1V 2NX, UK.
          </p>

          <h2>30-Day Return Window</h2>
          <p>
            You may return any item within <strong>30 days</strong> of the delivery date for a full
            refund of the product price. Items returned after 30 days will not be eligible for a refund
            unless the item is faulty or not as described.
          </p>

          <h2>Eligibility for Returns</h2>
          <p>To be eligible for a return, items must be:</p>
          <ul>
            <li>Returned within 30 days of the delivery date</li>
            <li>Unused, in the same condition as received</li>
            <li>In the original packaging with all accessories and documentation</li>
            <li>Accompanied by proof of purchase (order number or confirmation email)</li>
          </ul>
          <p>
            For hygiene reasons, items that have been used cannot be returned unless they are
            defective.
          </p>

          <h2>Non-Returnable Items</h2>
          <p>The following cannot be returned:</p>
          <ul>
            <li>Used products (hygiene reasons)</li>
            <li>Items damaged through misuse or user error</li>
            <li>Items returned after the 30-day window (unless defective)</li>
          </ul>

          <h2>Faulty or Damaged Items</h2>
          <p>
            If your item arrives damaged, defective, or not as described, please contact us within
            7 days of receipt at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a> with
            photos of the damage or defect. We will arrange a replacement or full refund at no cost
            to you, including return shipping.
          </p>

          <h2>How to Start a Return</h2>
          <p>To initiate a return:</p>
          <ul>
            <li>Email us at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a> with your order number and reason for return</li>
            <li>We will respond within 2 business days with return instructions</li>
            <li>Ship the item to the address we provide</li>
            <li>Keep your proof of postage</li>
          </ul>
          <p>
            Please do not send items back without contacting us first, as this may delay your refund.
          </p>

          <h2>Return Shipping Costs</h2>
          <ul>
            <li>If the item is defective or we made an error: we cover return shipping costs</li>
            <li>If you changed your mind or ordered incorrectly: return shipping is at your expense</li>
          </ul>

          <h2>Refunds</h2>
          <p>
            Once we receive and inspect your return (within 3–5 business days of receipt), we will
            notify you by email. If approved, your refund will be processed via the same
            payment method used for your purchase within <strong>5–10 business days</strong>.
            Depending on your bank, it may take additional time to appear in your account.
          </p>
          <p>Refunds cover the product price only. Original shipping fees are non-refundable unless the item was defective.</p>

          <h2>Late or Missing Refunds</h2>
          <p>
            If you haven&apos;t received your refund after 10 business days of approval, please:
          </p>
          <ul>
            <li>Check your bank account again</li>
            <li>Contact your credit card provider (it may take time to post)</li>
            <li>Contact your bank</li>
            <li>If still unresolved, contact us at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a></li>
          </ul>

          <h2>UK Consumer Rights</h2>
          <p>
            If you are based in the UK, you have the right under the Consumer Contracts Regulations
            2013 to cancel your order within 14 days of receipt without giving a reason. To exercise
            this right, notify us at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a>{' '}
            within 14 days. You are responsible for return shipping costs in this case.
          </p>
          <p>
            You also have statutory rights under the Consumer Rights Act 2015 for goods that are
            faulty, not as described, or not fit for purpose.
          </p>

          <h2>Exchanges</h2>
          <p>
            We do not currently offer direct exchanges. If you wish to exchange an item, please
            return it for a refund and place a new order.
          </p>

          <h2>Contact Us</h2>
          <p>
            For any return or refund enquiries, please contact us:
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
