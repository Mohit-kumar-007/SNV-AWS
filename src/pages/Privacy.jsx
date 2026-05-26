import React from 'react';

function Privacy() {
  return (
    <article className="policy-page">
      <h1>Privacy Policy</h1>
      <span className="policy-date">
        Effective Date: 1 January 2025 &nbsp;|&nbsp; Last Updated: April 2026
      </span>

      <h2>1. Introduction</h2>
      <p>
        ShriNeo Vittiyam Private Limited ("ShriNeo", "we", "our", or "us") is committed to protecting
        the privacy and personal data of all users of our platform, including borrowers, agents, and
        partner lenders. This Privacy Policy explains how we collect, use, store, and protect your
        personal data in compliance with applicable Indian laws, including the Information Technology
        Act 2000, the IT (Amendment) Act 2008, the Digital Personal Data Protection Act 2023 (DPDPA),
        and the Reserve Bank of India's Digital Lending Guidelines 2025.
      </p>

      <h2>2. Who We Are</h2>
      <p>
        ShriNeo Vittiyam Private Limited is a Lending Service Provider (LSP) registered in India. We
        operate as a technology intermediary connecting borrowers with licensed banks and Non-Banking
        Financial Companies (NBFCs). We do not lend money directly. We do not hold, transfer, or
        disburse loan funds. All disbursals are made directly from the lender to the borrower's bank
        account as mandated by RBI guidelines.
      </p>

      <h2>3. What Data We Collect</h2>
      <p>We collect the following categories of personal data:</p>
      <ul>
        <li>
          <strong>Identity data:</strong> Full name, date of birth, PAN number (stored as irreversible
          hash), Aadhaar number (stored as hash only — raw Aadhaar is never stored), photograph.
        </li>
        <li>
          <strong>Contact data:</strong> Mobile number, email address.
        </li>
        <li>
          <strong>Financial data:</strong> Monthly income, employment type, existing loan obligations,
          bank statements (collected only with explicit consent via Account Aggregator framework).
        </li>
        <li>
          <strong>KYC documents:</strong> Uploaded via secure encrypted storage. Includes Aadhaar
          (DigiLocker fetched), PAN, income proof, address proof.
        </li>
        <li>
          <strong>Device and usage data:</strong> IP address, device fingerprint, browser type, session
          duration — collected for fraud prevention only.
        </li>
        <li>
          <strong>Agent data:</strong> If you register as a ground agent, we additionally collect your
          GST number, bank account details (encrypted), and your sourcing network details.
        </li>
      </ul>

      <h2>4. How We Use Your Data</h2>
      <p>We use your personal data to:</p>
      <ul>
        <li>(a) Verify your identity and complete KYC as required by RBI and lender partners.</li>
        <li>(b) Match your borrower profile with eligible lenders using our AI matchmaking engine.</li>
        <li>(c) Submit your loan application to your selected lender on your behalf.</li>
        <li>
          (d) Communicate application status, updates, and notifications via SMS and WhatsApp.
        </li>
        <li>(e) Calculate and process agent commissions for ground agents.</li>
        <li>(f) Detect and prevent fraud using device fingerprinting and behavioral signals.</li>
        <li>
          (g) Comply with legal obligations including RBI audit requirements and CIMS reporting.
        </li>
      </ul>
      <p>
        We do not sell your data. We do not use your data for advertising. We do not share your data
        with any party not directly involved in your loan application.
      </p>

      <h2>5. Data Localisation and Storage</h2>
      <p>
        All personal data is stored exclusively on servers located in India (AWS ap-south-1, Mumbai
        region). We do not transfer personal data outside India. In any case where data processing
        tools operate internationally, your personal data is deleted from those systems within 24
        hours, in compliance with RBI Digital Lending Directions 2025.
      </p>

      <h2>6. Data Security</h2>
      <p>We implement the following technical safeguards:</p>
      <ul>
        <li>AES-256 encryption for all PII stored in our database.</li>
        <li>TLS 1.3 encryption for all data in transit.</li>
        <li>
          Private S3 buckets with pre-signed URL access (15-minute expiry) for all uploaded documents.
        </li>
        <li>AWS KMS for encryption key management with automatic rotation.</li>
        <li>
          Role-based access control (RBAC) ensuring staff access only data required for their function.
        </li>
        <li>Immutable audit logs for all data access and state changes.</li>
        <li>
          PAN and Aadhaar are masked in all internal logs and interfaces (only last 4 digits visible).
        </li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>
        Under the Digital Personal Data Protection Act 2023, you have the right to:
      </p>
      <ul>
        <li>Access your personal data held by us.</li>
        <li>Correct inaccurate personal data.</li>
        <li>
          Withdraw consent for data processing at any time (note: withdrawal may affect your ability
          to use our services).
        </li>
        <li>Request erasure of your data, subject to legal retention obligations.</li>
        <li>Nominate a representative to exercise these rights on your behalf.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at:{' '}
        <a href="mailto:privacy@shrineo.in">privacy@shrineo.in</a>
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary for the purposes described above, or as
        required by law. Specifically:
      </p>
      <ul>
        <li>
          Loan application data: retained for 8 years post-disbursal (RBI audit requirement).
        </li>
        <li>
          Rejected application data: deleted within 90 days of final rejection, unless required for
          fraud investigation.
        </li>
        <li>
          Agent data: retained for the duration of the agent agreement and 3 years thereafter.
        </li>
      </ul>

      <h2>9. Cookies</h2>
      <p>
        Our website uses only essential cookies required for session management and security. We do
        not use tracking cookies, advertising cookies, or third-party analytics cookies.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>
        To deliver our services, we engage the following categories of third-party service providers,
        all operating under data processing agreements:
      </p>
      <ul>
        <li>KYC and identity verification providers (DigiLocker, Video KYC providers).</li>
        <li>
          Account Aggregator network providers (Sahamati-registered AAs) for consent-based financial
          data.
        </li>
        <li>SMS and communication services for OTP and notifications.</li>
        <li>Cloud infrastructure (AWS, India region only).</li>
      </ul>
      <p>
        None of these providers are permitted to use your data for any purpose other than the specific
        service they provide to ShriNeo.
      </p>

      <h2>11. Grievance Officer</h2>
      <p>
        In accordance with the Information Technology Act 2000 and RBI Digital Lending Guidelines, we
        have appointed a Grievance Officer. If you have any complaints or concerns about your data:
      </p>
      <ul>
        <li>
          <strong>Name:</strong> Grievance Officer, ShriNeo Vittiyam Private Limited
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:grievance@shrineo.in">grievance@shrineo.in</a>
        </li>
        <li>
          <strong>Response time:</strong> We will acknowledge your complaint within 24 hours and
          resolve it within 15 business days.
        </li>
      </ul>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify registered users of
        material changes via SMS or email. The "Last Updated" date at the top of this page reflects
        the most recent revision. Continued use of our platform after changes constitutes acceptance.
      </p>

      <h2>13. Contact</h2>
      <ul>
        <li>
          For privacy-related queries:{' '}
          <a href="mailto:privacy@shrineo.in">privacy@shrineo.in</a>
        </li>
        <li>For general queries: Use the Contact form on our website.</li>
      </ul>
    </article>
  );
}

export default Privacy;
