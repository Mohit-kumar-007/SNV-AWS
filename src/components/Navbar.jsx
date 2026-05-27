import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleComingSoon = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate('/coming-soon');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/logo.jpg"
            alt="ShriNeo Vittiyam – ShriNeo Capital"
            className="navbar__logo-img"
          />
        </Link>

        {/* Desktop links */}
        <div className="navbar__links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <a href="#about" onClick={(e) => { e.preventDefault(); closeMenu(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
            About
          </a>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact Us
          </NavLink>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <a href="#about" onClick={(e) => { e.preventDefault(); closeMenu(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
        <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
        <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start' }} onClick={closeMenu}>
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
