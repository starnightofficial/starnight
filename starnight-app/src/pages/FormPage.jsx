import '../styles/Form.css';
import '../styles/Speakers.css';

export default function FormPage() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScuzXVdolxh9Kz4u69h-ysh8y8ViM1bhSIpU8Fx5Vz5XYkV6g/viewform?embedded=true';

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
        <p className="form-desc">
          下のフォームから参加申し込みを送信できます。<br />
          Google Forms で回答が直接送信されます。
        </p>
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
