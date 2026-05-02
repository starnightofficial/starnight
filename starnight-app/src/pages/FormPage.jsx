import { useState } from 'react';
import '../styles/Form.css';
import '../styles/Speakers.css';

export default function FormPage() {
  const [form, setForm] = useState({ name: '', email: '', dept: '', speaker: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-page">

      <div className="speakers-header">
        <div className="speakers-title">
          <h1>
            Form
            <span className="deco">✦ · · · · · · · ·</span>
          </h1>
        </div>
      </div>

      <div className="form-page-body">
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: 18, color: 'var(--navy)', fontWeight: 500 }}>送信しました！</p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>ご参加ありがとうございます。</p>
          </div>
        ) : (
          <>
            <h2>参加申し込み・講師へのメッセージ</h2>
            <p className="form-desc">
              スターナイト講義への参加申し込みと、講師へのメッセージを送ることができます。<br />
              いただいたメッセージは当日の対話セッションに活用される場合があります。
            </p>
            <form className="form-full" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>お名前 *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div className="form-group">
                <label>メールアドレス *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@kyoto-u.ac.jp"
                  required
                />
              </div>
              <div className="form-group">
                <label>学部・学科</label>
                <input
                  type="text"
                  name="dept"
                  value={form.dept}
                  onChange={handleChange}
                  placeholder="総合人間学部"
                />
              </div>
              <div className="form-group">
                <label>参加したい回</label>
                <select name="speaker" value={form.speaker} onChange={handleChange}>
                  <option value="">選択してください</option>
                  <option value="1">第1回 — 宮野 公樹先生（4月10日）</option>
                  <option value="2">第2回（5月8日）</option>
                  <option value="3">第3回（6月12日）</option>
                  <option value="4">第4回（7月10日）</option>
                  <option value="5">第5回（10月9日）</option>
                  <option value="6">第6回（11月13日）</option>
                </select>
              </div>
              <div className="form-group">
                <label>講師へのメッセージ・質問</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="研究について聞きたいこと、講義への期待など自由にお書きください。"
                />
              </div>
              <button type="submit" className="form-submit-btn">送信する</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
