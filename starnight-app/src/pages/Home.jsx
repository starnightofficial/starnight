import { Link } from 'react-router-dom';
import '../styles/Home.css';

const scheduleData = [
  { date: '2026年4月10日', time: '18:30〜20:00', speaker: '宮野 公樹先生', theme: '知とは何か' },
  { date: '2026年5月8日', time: '18:30〜20:00', speaker: '○○ ○○先生', theme: '未定' },
  { date: '2026年6月12日', time: '18:30〜20:00', speaker: '○○ ○○先生', theme: '未定' },
  { date: '2026年7月10日', time: '18:30〜20:00', speaker: '○○ ○○先生', theme: '未定' },
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
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-preview__inner">
          <img src="/pic1.png" alt="about" className="about-preview__img" />
          <div>
            <p className="about-preview__label">
              About. <span style={{ fontSize: 13, opacity: 0.5, letterSpacing: '0.2em' }}>✦ · · · · ·</span>
            </p>
            <p className="about-preview__text">
              スターナイト講義は、世界的研究者を招き、講演に加えて、対話や交流の機会を設けることで、知の最前線に触れる場を提供します。大学における学びが社会や未来へとつながるきっかけを生み出します。
            </p>
            <Link to="/about" className="learn-more">→ Learn more</Link>
          </div>
        </div>
      </section>

      {/* Speakers Preview */}
      <section className="speakers-preview">
        <div className="speakers-preview__inner">
          <p className="speakers-preview__label">
            Speakers. <span style={{ fontSize: 13, opacity: 0.5, letterSpacing: '0.2em' }}>✦ · · · · ·</span>
          </p>
          <div className="speakers-preview__grid">
            <img src="/pic1.png" alt="speaker 1" className="speaker-thumb" />
            <img src="/pic2.png" alt="speaker 2" className="speaker-thumb" />
            <img src="/pic3.png" alt="speaker 3" className="speaker-thumb" />
            <img src="/pic2.png" alt="speaker 4" className="speaker-thumb" />
            <img src="/pic3.png" alt="speaker 5" className="speaker-thumb" />
          </div>
          <Link to="/speakers" className="learn-more" style={{ marginTop: 28 }}>→ Learn more</Link>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="schedule-preview">
        <div className="schedule-preview__inner">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <h2>Schedule.</h2>
          </div>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>日程</th>
                <th>時間</th>
                <th>講師</th>
                <th>テーマ</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, i) => (
                <tr key={i}>
                  <td className="schedule-date">{row.date}</td>
                  <td>{row.time}</td>
                  <td>{row.speaker}</td>
                  <td>{row.theme}</td>
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
          <div className="form-card">
            <h3>Open Letter Maker</h3>
            <div className="form-group">
              <label>お名前</label>
              <input type="text" placeholder="山田 太郎" readOnly />
            </div>
            <div className="form-group">
              <label>メールアドレス</label>
              <input type="email" placeholder="example@kyoto-u.ac.jp" readOnly />
            </div>
            <div className="form-group">
              <label>学部・学科</label>
              <input type="text" placeholder="総合人間学部" readOnly />
            </div>
            <div className="form-group">
              <label>メッセージ</label>
              <textarea rows={3} placeholder="講師へのメッセージ" readOnly />
            </div>
            <Link to="/form">
              <button className="btn-submit">フォームへ →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-section__inner">
          <div>
            <h2>お問い合わせ</h2>
            <p className="contact-section__info">
              copyright<br />
              @gmail.com
            </p>
          </div>
          <div className="contact-fields">
            <input type="text" placeholder="氏名" />
            <input type="email" placeholder="メールアドレス" />
            <textarea rows={4} placeholder="問い合わせ内容" />
          </div>
        </div>
      </section>
    </main>
  );
}
