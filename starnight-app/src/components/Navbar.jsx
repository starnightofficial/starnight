import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { to: '/about', label: 'About' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/form', label: 'Form' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src="logo.png" alt="スターナイト講義" />
      </Link>
      <ul className="navbar__links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
