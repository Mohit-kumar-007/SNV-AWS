import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const handleComingSoon = (e) => {
    e.preventDefault();
    navigate('/coming-soon');
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Column 1 — Brand */}
        <div>
          <img src="/logo.jpg" alt="ShriNeo Capital Logo" className="footer__logo-img" />
          <span className="footer__brand">ShriNeo Capital</span>
          <span className="footer__brand-sub">A brand of SHRINEO VITTIYAM PRIVATE LIMITED</span>
          <span className="footer__cin">Jaipur, Rajasthan, India</span>
          <p className="footer__desc">
            Making formal credit simpler, smarter, and more accessible across India — built for customers, designed for agents, backed by banks, powered by trust.
          </p>
          <a
            href="mailto:admin@shrineocapital.com"
            style={{
              display: 'inline-block',
              marginTop: '12px',
              fontSize: '0.875rem',
              color: 'rgba(224,236,255,0.8)',
            }}
          >
            admin@shrineocapital.com
          </a>
        </div>

        {/* Column 2 — Pages */}
        <div className="footer__col">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><a href="/coming-soon" onClick={handleComingSoon}>Terms &amp; Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 — Coming Soon */}
        <div className="footer__col">
          <h4>Platform</h4>
          <ul>
            <li><a href="/coming-soon" onClick={handleComingSoon}>Loan Discovery</a></li>
            <li><a href="/coming-soon" onClick={handleComingSoon}>Apply for a Loan</a></li>
            <li><a href="/coming-soon" onClick={handleComingSoon}>Agent Portal</a></li>
            <li><a href="/coming-soon" onClick={handleComingSoon}>Multilingual App</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>
          © 2025 ShriNeo Capital · SHRINEO VITTIYAM PRIVATE LIMITED · All rights reserved. · Operated under RBI Digital Lending Guidelines 2025.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
