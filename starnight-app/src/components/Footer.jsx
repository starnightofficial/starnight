import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const navLinks = ['About', 'Speakers', 'Schedule', 'Form', 'Contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="logo.png" alt="スターナイト講義" />
          <p className="footer__brand-name">スターナイト講義</p>
          <p className="footer__brand-tagline">京都大学の輝く星と出会う夜ー</p>
        </div>
        <div className="footer__nav">
          <h4>ナビ</h4>
          <ul>
            {navLinks.map((label) => (
              <li key={label}>
                <Link to={`/${label.toLowerCase()}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">
          2026 Institute of Liberal Arts and Sciences, Kyoto University
        </span>
        <span className="footer__find">Find: @ starnight</span>
      </div>
    </footer>
  );
}
