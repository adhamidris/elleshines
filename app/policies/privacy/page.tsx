import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Elle Shines LTD — how we collect, use and protect your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-label mb-3">Legal</p>
        <h1 className="font-serif text-5xl text-charcoal mb-4">Privacy Policy</h1>
        <p className="text-warm-gray mb-10">Last updated: 1 January 2025</p>

        <div className="policy-content">
          <p>
            This Privacy Policy describes how Elle Shines LTD (&quot;Elle Shines&quot;, &quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares information about you when you visit
            our website at elle-shines.vercel.app (the &quot;Site&quot;), purchase our products, or contact us.
            Our registered address is 128 City Rd, London EC1V 2NX, United Kingdom.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, postal address, and phone number when you place an order or contact us</li>
            <li>Payment information is handled via a secure payment link sent separately after order confirmation — we do not collect or store card details on our website</li>
            <li>Order history and purchase details</li>
            <li>Communications you send to us (e.g., customer support emails)</li>
            <li>Information you provide when subscribing to our newsletter</li>
          </ul>
          <p>We also collect information automatically when you use our Site:</p>
          <ul>
            <li>Log data (IP address, browser type, pages visited, time spent on pages)</li>
            <li>Cookies and similar tracking technologies (see Section 5)</li>
            <li>Device information (operating system, screen resolution)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfil your orders, including sending order confirmations and shipping updates</li>
            <li>Communicate with you about your orders, returns, and enquiries</li>
            <li>Send you marketing communications (only with your consent, which you may withdraw at any time)</li>
            <li>Improve and personalise our Site and services</li>
            <li>Prevent fraud and ensure the security of our Site</li>
            <li>Comply with legal obligations, including tax and accounting requirements</li>
          </ul>

          <h2>3. Legal Basis for Processing (UK/EU)</h2>
          <p>
            Under the UK General Data Protection Regulation (UK GDPR), we process your personal data
            on the following legal bases:
          </p>
          <ul>
            <li><strong>Contract:</strong> processing necessary to fulfil your order</li>
            <li><strong>Legitimate interests:</strong> fraud prevention, improving our services</li>
            <li><strong>Consent:</strong> marketing communications and cookies (where required)</li>
            <li><strong>Legal obligation:</strong> tax records and compliance</li>
          </ul>

          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We share your information only with trusted third
            parties who help us operate our business:
          </p>
          <ul>
            <li><strong>Payment processors:</strong> to process payments via secure payment links sent after order confirmation</li>
            <li><strong>Shipping carriers:</strong> to deliver your order</li>
            <li><strong>Email service providers:</strong> to send transactional and marketing emails</li>
            <li><strong>Analytics providers:</strong> to understand how our Site is used</li>
          </ul>
          <p>
            We may also disclose your information where required by law, court order, or other legal
            processes, or to protect our rights and the safety of others.
          </p>

          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate our Site and improve your experience.
            These include:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> required for the Site to function (e.g., your shopping cart)</li>
            <li><strong>Analytics cookies:</strong> help us understand how visitors use our Site</li>
            <li><strong>Marketing cookies:</strong> used to deliver relevant advertisements (with your consent)</li>
          </ul>
          <p>
            You can control cookies via your browser settings. Note that disabling certain cookies
            may affect Site functionality.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to provide our services and comply
            with legal obligations. Order records are typically retained for 7 years for tax and
            accounting purposes. Marketing data is retained until you unsubscribe.
          </p>

          <h2>7. Your Rights (UK GDPR)</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
            <li><strong>Rectification:</strong> ask us to correct inaccurate data</li>
            <li><strong>Erasure:</strong> ask us to delete your data in certain circumstances</li>
            <li><strong>Restriction:</strong> ask us to restrict processing of your data</li>
            <li><strong>Portability:</strong> receive your data in a portable format</li>
            <li><strong>Object:</strong> object to processing based on legitimate interests or for marketing</li>
            <li><strong>Withdraw consent:</strong> where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:info@elle-shines.com">info@elle-shines.com</a>. We will respond within
            30 days. You also have the right to lodge a complaint with the Information Commissioner&apos;s
            Office (ICO) at ico.org.uk.
          </p>

          <h2>8. Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data, including
            SSL/TLS encryption for all data transmitted via our Site. Payments are handled
            through secure third-party payment processors. However, no system is completely
            secure and we cannot guarantee absolute security.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            As a UK-based company serving customers in the UK, US and Canada, your data may be
            transferred internationally. We ensure appropriate safeguards are in place for any
            international transfers.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our Site is not directed at children under 16. We do not knowingly collect personal data
            from children under 16. If you believe we have collected such data, please contact us
            immediately.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant
            changes by posting the new policy on our Site with an updated date. Your continued use
            of our Site constitutes acceptance of the updated policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, please
            contact us:
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
