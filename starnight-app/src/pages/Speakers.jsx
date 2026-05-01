import '../styles/Speakers.css';

const speakers = [
  {
    name: '宮野 公樹先生',
    affiliation: '○○○階○○○研究科・教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic1.png',
  },
  {
    name: '宮野 公樹先生',
    affiliation: '○○○階○○○研究科・教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic2.png',
  },
  {
    name: '宮野 公樹先生',
    affiliation: '○○○階○○○研究科・教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic3.png',
  },
];

export default function Speakers() {
  return (
    <div className="speakers-page">
      <div className="speakers-header">
        <div className="speakers-title">
          <h1>
            Speakers
            <span className="deco">✦ · · · · · · · ·</span>
          </h1>
        </div>
      </div>

      <div className="speakers-list">
        {speakers.map((s, i) => (
          <div key={i} className={`speaker-card${i % 2 === 1 ? ' reverse' : ''}`}>
            <img src={s.img} alt={s.name} className="speaker-card__img" />
            <div className="speaker-card__body">
              <h2 className="speaker-card__name">{s.name}</h2>
              <p className="speaker-card__affiliation">{s.affiliation}</p>
              <p className="speaker-card__label">研究分野:</p>
              <p className="speaker-card__field">{s.field}</p>
              <p className="speaker-card__label">講義内容の概要</p>
              <p className="speaker-card__summary">{s.summary}</p>
              <p className="speaker-card__message">{s.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
