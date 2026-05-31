export default function Contact() {
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--cream)' }}>
      <div style={{
        background: `linear-gradient(rgba(27,35,64,0.75), rgba(27,35,64,0.75)), url('/background.png') center/cover`,
        padding: '80px 80px 60px',
        textAlign: 'center',
      }}>
        <h1 style={{ color: 'white', fontSize: 36, fontWeight: 400, letterSpacing: '0.1em' }}>Contact</h1>
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: 'var(--navy)', marginBottom: 24 }}>お問い合わせ</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="mailto:tedxkyotouniversity.team@gmail.com" aria-label="Email" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-dark)', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-13z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>tedxkyotouniversity.team@gmail.com</span>
          </a>

          <a href="https://www.instagram.com/tedxkyotouniversity/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-dark)', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
            <span>tedxkyotouniversity</span>
          </a>
        </div>
      </div>
    </div>
  );
}
