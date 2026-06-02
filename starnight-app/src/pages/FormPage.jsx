import '../styles/Form.css';
import '../styles/Speakers.css';

export default function FormPage() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScuzXVdolxh9Kz4u69h-ysh8y8ViM1bhSIpU8Fx5Vz5XYkV6g/viewform?embedded=true';
  const googleFormExternalUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScuzXVdolxh9Kz4u69h-ysh8y8ViM1bhSIpU8Fx5Vz5XYkV6g/viewform';

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
        <h2>参加申し込み</h2>
        <p>※ 座席は先着順です</p>
        <p>※ フォームを提出しなくても参加できるが、座席の確保は保証できません</p>
        <p className="form-desc">
          下のフォームから参加申し込みを送信できます。<br />
          Google Forms で回答が直接送信されます。
        </p>
        <a
          className="form-external-link"
          href={googleFormExternalUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Form を新しいタブで開く"
        >
          <span>Google Form を新しいタブで開く</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14L19 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 13v4.5A2.5 2.5 0 0 1 16.5 20h-9A2.5 2.5 0 0 1 5 17.5v-9A2.5 2.5 0 0 1 7.5 6H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <div className="google-form-embed">
          <iframe
            src={googleFormUrl}
            title="Starnight Google Form"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
