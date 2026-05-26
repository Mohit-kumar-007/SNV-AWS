import React from 'react';
import { Link } from 'react-router-dom';

const UPCOMING = [
  { icon: '🔍', label: 'Digital loan discovery' },
  { icon: '📋', label: 'Loan application management' },
  { icon: '📡', label: 'Loan tracking and servicing' },
  { icon: '🌐', label: 'Multilingual experience' },
  { icon: '🤖', label: 'AI-powered assistance' },
  { icon: '🤝', label: 'Customer and agent ecosystem' },
];

function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="container">
          <span className="hero__badge">🇮🇳 shrineocapital.com · Platform under development</span>
          <h1>Your Dreams,{'\n'}Our Responsibility.</h1>
          <p className="hero__sub">
            Making formal credit simpler, smarter, and more accessible across India.
          </p>
          <p className="hero__tagline">
            Built for customers. Designed for agents. Backed by banks. Powered by trust.
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn-primary" id="cta-contact-us">
              Contact Us
            </Link>
            <a href="#about" className="btn-outline" id="cta-learn-more"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-section__inner">
            <div className="about-section__text">
              <h2>Who We Are</h2>
              <p>
                ShriNeo Capital is the consumer-facing brand of ShriNeo Vittiyam Private Limited.
              </p>
              <p>
                We are building a vernacular, end-to-end digital lending ecosystem designed to make
                formal credit more accessible, transparent, and inclusive across India.
              </p>
              <p>
                Our mission is to simplify the lending journey by combining technology, multilingual
                accessibility, and customer-first experiences.
              </p>
            </div>
            <div className="about-section__stat-block">
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Banking &amp; NBFC Partners</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">Tier-2/3</span>
                <span className="stat-label">India Focus</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">RBI</span>
                <span className="stat-label">Compliant Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VISION ── */}
      <section className="vision-section" id="vision">
        <div className="container">
          <div className="vision-section__inner">
            <span className="vision-section__label">Our Vision</span>
            <blockquote className="vision-section__quote">
              "To create a financially inclusive ecosystem where language, geography, or lack of
              traditional credit history never becomes a barrier to accessing formal financial
              services."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── WHAT'S COMING ── */}
      <section className="whatcoming-section" id="platform">
        <div className="container">
          <h2>What's Coming</h2>
          <p className="whatcoming-section__sub">
            The ShriNeo Capital platform is currently under development. We are working behind the
            scenes to build a seamless lending experience.
          </p>

          <div className="whatcoming-grid">
            {UPCOMING.map(({ icon, label }) => (
              <div className="whatcoming-card" key={label}>
                <span className="whatcoming-card__icon" aria-hidden="true">{icon}</span>
                <span className="whatcoming-card__label">{label}</span>
              </div>
            ))}
          </div>

          <div className="whatcoming-section__cta">
            <p className="whatcoming-section__note">
              Stay tuned for future updates. We'll notify you when we go live.
            </p>
            <Link to="/contact" className="btn-primary" id="cta-stay-updated">
              Stay Updated
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
