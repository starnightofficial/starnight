import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

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
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: 18, color: 'var(--navy)', fontWeight: 500 }}>送信しました！</p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>お問い合わせありがとうございます。</p>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 500, color: 'var(--navy)', marginBottom: 24 }}>お問い合わせ</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { name: 'name', label: '氏名', type: 'text', placeholder: '山田 太郎' },
                { name: 'email', label: 'メールアドレス', type: 'email', placeholder: 'example@kyoto-u.ac.jp' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--navy)', marginBottom: 6 }}>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={{
                      width: '100%', padding: '12px 14px',
                      border: '1px solid rgba(27,35,64,0.25)', borderRadius: 4,
                      fontSize: 13, fontFamily: 'inherit', background: 'white',
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--navy)', marginBottom: 6 }}>問い合わせ内容</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="お問い合わせ内容をご記入ください"
                  style={{
                    width: '100%', padding: '12px 14px',
                    border: '1px solid rgba(27,35,64,0.25)', borderRadius: 4,
                    fontSize: 13, fontFamily: 'inherit', background: 'white',
                    resize: 'vertical',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  background: 'var(--navy)', color: 'white',
                  border: 'none', padding: '14px 40px',
                  fontSize: 14, fontFamily: 'inherit', borderRadius: 4,
                  cursor: 'pointer', letterSpacing: '0.05em',
                }}
              >
                送信する
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
