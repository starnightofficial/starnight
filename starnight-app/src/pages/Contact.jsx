import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-title">
          <h1>
            Contact
            <span className="deco">✦ · · · · · · · ·</span>
          </h1>
        </div>
      </div>

      <div className="contact-body">
        <h2 className="contact-body__title">お問い合わせ</h2>
        <div className="contact-links">
          <a href="mailto:tedxkyotouniversity.team@gmail.com" aria-label="Email" className="contact-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-13z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>tedxkyotouniversity.team@gmail.com</span>
          </a>

          <a href="https://www.instagram.com/tedxkyotouniversity/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
            <span>@tedxkyotouniversity</span>
          </a>
        </div>
      </div>
    </div>
  );
}
