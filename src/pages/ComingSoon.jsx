import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <div className="coming-soon">
      <div className="coming-soon__inner">
        <span className="coming-soon__label">ShriNeo</span>
        <h2>This page is coming soon</h2>
        <p>We're building this section. Check back soon.</p>
        <Link to="/" className="coming-soon__back" id="coming-soon-back-link">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
