import { Link } from 'react-router-dom';
import '../styles/Home.css';

const scheduleData = [
  { date: '2026年10月8日（木）', speaker: 'TBA', theme: '' },
  { date: '2026年10月16日（金）', speaker: 'TBA', theme: '' },
  { date: '2026年10月22日（金）', speaker: 'TBA', theme: '' },
  { date: '2026年10月29日（木）', speaker: 'TBA', theme: '' },
  { date: '2026年11月5日（木）', speaker: 'TBA', theme: '' },
  { date: '2026年11月12日（木）', speaker: 'TBA', theme: '' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
          <div className="hero__content">
            <h1 className="hero__text">
              知の最前線と対話する<br />
              学びが未来に繋がる
            </h1>
            <h2 className="hero__subheading">
              各分野を代表する研究者による、<br />
              本学学生のためのレクチャーシリーズ
            </h2>
          </div>
          <div className="hero__image" aria-hidden="true">
            <img src="pic1.png" alt="whale" className="pic1" />
          </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-preview__inner">
          <div>
            <p className="about-preview__label">
              About. <span style={{ fontSize: 13, opacity: 0.5, letterSpacing: '0.2em' }}>✦ · · · · · ·</span>
            </p>
            <p className="about-preview__text">
              スターナイト講義は、世界的研究者を招き、講演に加えて、対話や交流の機会を設けることで、知の最前線に触れる場を提供します。大学における学びが社会や未来へとつながるきっかけを生み出します。
            </p>
            <Link to="/about" className="learn-more">→ Learn more</Link>
            <p className="about-preview__sponsor">主催: TEDxKyotoUniversity、スターナイト講義実行委員会</p>
          </div>
        </div>
      </section>

      {/* Speakers Preview */}
      <section className="speakers-preview">
        <div className="speakers-preview__inner">
          <p className="speakers-preview__label">
            Speakers. <span style={{ fontSize: 13, opacity: 0.5, letterSpacing: '0.2em' }}>✦ · · · · ·</span>
          </p>
          {/* <div className="speakers-preview__grid">
            <img src="/pic1.png" alt="speaker 1" className="speaker-thumb" />
            <img src="/pic2.png" alt="speaker 2" className="speaker-thumb" />
            <img src="/pic3.png" alt="speaker 3" className="speaker-thumb" />
            <img src="/pic2.png" alt="speaker 4" className="speaker-thumb" />
            <img src="/pic3.png" alt="speaker 5" className="speaker-thumb" />
          </div> */}
          <Link to="/speakers" className="learn-more" style={{ marginTop: 28 }}>→ Learn more</Link>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="schedule-preview">
        <div className="schedule-preview__inner">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <h2>Schedule.</h2>
            <p>各日は18:30〜20:00に開催されます。</p>
          </div>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>日程</th>
                <th>講師</th>
                <th>テーマ</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, i) => (
                <tr key={i}>
                  <td className="schedule-date">{row.date}</td>
                  {i === 0 ? (
                    <>
                      <td rowSpan={6} className="schedule-tba-cell">
                        TBA
                      </td>
                      <td rowSpan={6} className="schedule-tba-cell">
                        TBA
                      </td>
                    </>
                  ) : i > 0 ? null : (
                    <>
                      <td>{row.speaker}</td>
                      <td>{row.theme}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Form Preview */}
      <section className="form-preview">
        <div className="form-preview__inner">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <h2>Form.</h2>
          </div>
          <div className="form-card form-card--embed">
            <h3>Google Form</h3>
            <p className="form-card__text">
              参加申し込みは、以下のGoogle Formから送信してください。
            </p>
            <div className="form-embed-preview">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScuzXVdolxh9Kz4u69h-ysh8y8ViM1bhSIpU8Fx5Vz5XYkV6g/viewform?embedded=true"
                title="Starnight Google Form Preview"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <Link to="/form">
              <button className="btn-submit">フォームを開く →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-section__inner">
          <div>
            <h2>お問い合わせ</h2>
          </div>
            <div className="contact-fields contact-fields--email">
              <div className="contact-icons">
                <a href="mailto:tedxkyotouniversity.team@gmail.com" className="contact-link" aria-label="Email">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-13z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="contact-link__label">tedxkyotouniversity.team@gmail.com</span>
                </a>

                <a href="https://www.instagram.com/tedxkyotouniversity/" className="contact-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="contact-link__label">@tedxkyotouniversity</span>
                </a>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}
