import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Elle Shines LTD.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-label mb-3">Legal</p>
        <h1 className="font-serif text-5xl text-charcoal mb-4">Terms of Service</h1>
        <p className="text-warm-gray mb-10">Last updated: 1 January 2025</p>

        <div className="policy-content">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Elle Shines website
            (elle-shines.vercel.app) and the purchase of products from Elle Shines LTD, with its office at
            128 City Rd, London EC1V 2NX, UK. By using our Site or placing an order, you agree to
            these Terms.
          </p>

          <h2>1. About Us</h2>
          <p>
            Elle Shines LTD is a beauty and personal care company based in London, UK.
            We sell professional skincare tools to customers in the United Kingdom, United States,
            and Canada. Contact us at <a href="mailto:info@elle-shines.com">info@elle-shines.com</a>.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to make purchases on our Site. By placing an order,
            you confirm that you are 18 or older and have the legal capacity to enter into a
            binding contract.
          </p>

          <h2>3. Products</h2>
          <p>
            All product descriptions, images, and specifications on our Site are provided in good
            faith and to the best of our knowledge. We reserve the right to modify product
            descriptions or discontinue products at any time without notice. Colours and appearances
            may vary slightly due to screen settings.
          </p>
          <p>
            We do not guarantee that products will be available at all times. If a product becomes
            unavailable after you have placed an order, we will notify you and offer a full refund
            or alternative product.
          </p>

          <h2>4. Pricing and Payment</h2>
          <p>
            All prices are displayed in US Dollars (USD) unless otherwise stated. Prices are
            inclusive of applicable VAT for UK customers. We reserve the right to change prices
            at any time without notice, but changes will not affect orders already placed.
          </p>
          <p>
            Orders are placed through our website without upfront payment. Once your order is
            received and product availability is confirmed, our team will send you a secure
            payment link via email to complete your purchase. Payment is due upon receipt of
            the payment link and before dispatch.
          </p>

          <h2>5. Orders and Contract Formation</h2>
          <p>
            Your order constitutes an offer to purchase products from us. A contract is formed
            only when we send you an order confirmation email. We reserve the right to refuse or
            cancel any order at our discretion, including in cases of suspected fraud, pricing
            errors, or stock issues.
          </p>

          <h2>6. Shipping and Delivery</h2>
          <p>
            We ship to the United Kingdom, United States, and Canada. Delivery timeframes are
            estimates and we are not liable for delays caused by carriers or customs. Risk of loss
            passes to you upon delivery to the address provided. See our{' '}
            <a href="/policies/shipping">Shipping Policy</a> for full details.
          </p>

          <h2>7. Returns and Refunds</h2>
          <p>
            We accept returns within 30 days of delivery. Products must be unused and in their
            original packaging. See our <a href="/policies/refund">Refund Policy</a> for full
            details on how to request a return and refund.
          </p>
          <p>
            UK customers also have statutory rights under the Consumer Rights Act 2015 and the
            Consumer Contracts Regulations 2013, which provide the right to cancel an order within
            14 days of receipt without giving a reason.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on our Site — including text, images, logos, and design — is owned by or
            licensed to Elle Shines LTD and is protected by copyright and other intellectual property
            laws. You may not reproduce, distribute, or create derivative works from our content
            without written permission.
          </p>

          <h2>9. Prohibited Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Transmit harmful, offensive, or fraudulent content</li>
            <li>Resell our products commercially without prior written agreement</li>
          </ul>

          <h2>10. Disclaimer and Limitation of Liability</h2>
          <p>
            Our products are intended for personal, home use only. They are not medical devices and
            are not intended to diagnose, treat, cure, or prevent any medical condition. Consult a
            dermatologist before use if you have a skin condition or concern.
          </p>
          <p>
            To the maximum extent permitted by law, Elle Shines LTD is not liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your use of our
            products or Site. Our total liability to you shall not exceed the amount paid for the
            relevant order.
          </p>
          <p>
            Nothing in these Terms limits our liability for death or personal injury caused by our
            negligence, or for fraud or fraudulent misrepresentation.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes shall be
            subject to the exclusive jurisdiction of the courts of England and Wales. If you are
            a consumer in the UK, you retain the right to rely on any mandatory consumer
            protection provisions of your local law.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. The current version will always be available on
            our Site. Continued use of our Site after changes constitutes acceptance of the new Terms.
          </p>

          <h2 id="promotions">13. Promotions</h2>
          <p>
            From time to time, Elle Shines LTD may offer promotional discounts, including welcome
            discounts for new newsletter subscribers. The following terms apply to all promotions
            unless otherwise stated:
          </p>
          <ul>
            <li><strong>10% welcome discount:</strong> Available to new subscribers only. One use per customer. Applied to your first order placed after subscribing.</li>
            <li>Discount codes are issued via email and are single-use and non-transferable.</li>
            <li>Codes cannot be combined with other offers or applied to previously placed orders.</li>
            <li>No minimum spend is required unless stated in the specific promotion.</li>
            <li>Promotion codes expire 90 days from the date of issue unless stated otherwise.</li>
            <li>Elle Shines LTD reserves the right to withdraw or modify any promotion at any time without notice.</li>
          </ul>

          <h2>14. Contact</h2>
          <p>
            For questions about these Terms, contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:info@elle-shines.com">info@elle-shines.com</a></li>
            <li>Post: Elle Shines LTD, 128 City Rd, London EC1V 2NX, United Kingdom</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
