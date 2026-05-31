import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { to: '/about', label: 'About' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/form', label: 'Form' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src="logo.png" alt="スターナイト講義" />
      </Link>
      <button
        type="button"
        className="navbar__toggle"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul
        id="primary-navigation"
        className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
      >
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} onClick={() => setIsMenuOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
