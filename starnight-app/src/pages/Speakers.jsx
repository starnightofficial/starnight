import '../styles/Speakers.css';

const speakers = [
  {
    name: '宮野 公樹先生',
    affiliation: '学際融合教育研究推進センター・准教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic1.png',
  },
  {
    name: '高橋　淳先生',
    affiliation: 'iPS 細胞研究所 臨床応用研究部門・教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic2.png',
  },
  {
    name: '野田　進先生',
    affiliation: '高等研究院・特定拠点教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic3.png',
  },
  {
    name: '内田 由紀子先生',
    affiliation: '人と社会の未来研究院・教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic3.png',
  },
  {
    name: '森　重文先生',
    affiliation: '高等研究院・特定教授',
    field: '（研究分野）',
    summary: '（講義内容の概要）',
    message: '学生へのひとこと：「...」',
    img: '/pic3.png',
  },
  {
    name: '北川 進先生',
    affiliation: '京都大学・理事',
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
            {/* <img src={s.img} alt={s.name} className="speaker-card__img" /> */}
            <div className="speaker-card__body">
              <h2 className="speaker-card__name">{s.name}</h2>
              <p className="speaker-card__affiliation">{s.affiliation}</p>
              {/* <p className="speaker-card__label">研究分野:</p> */}
              {/* <p className="speaker-card__field">{s.field}</p> */}
              {/* <p className="speaker-card__label">講義内容の概要</p> */}
              {/* <p className="speaker-card__summary">{s.summary}</p> */}
              {/* <p className="speaker-card__message">{s.message}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
