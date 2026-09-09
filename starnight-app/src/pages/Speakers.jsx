import '../styles/Speakers.css';

const speakers = [
  {
    name: '宮野 公樹先生',
    affiliation: '学際融合教育研究推進センター・准教授',
  },
  {
    name: '高橋 淳先生',
    affiliation: 'iPS 細胞研究所 臨床応用研究部門・教授',
    title: 'iPS細胞を用いた神経再生',
    message: '私が京都大学に入学したとき、先輩から「東大は日本一を目指す。京大は世界一を目指す。」と教わりました。その言葉を後輩たちに引き継ぎます。',
    img: 'public/speakers/takahashi.jpg',
  },
  {
    name: '野田 進先生',
    affiliation: '高等研究院・特定拠点教授',
    title: '21世紀は、まさに「光」の時代',
    summary: '自動運転の目となるセンサー、工場の自動化、宇宙開発、AI、そして未来の超高速コンピュータ（量子技術）まで、あらゆる最先端テクノロジーを支えているのが光技術です。　私の研究室では、この21世紀を支える光を「自由自在に操る」ことを目指し、ナノサイズの人工構造である「フォトニック結晶」の研究開発を進めてきました。本講義では、そのうち、特に、1999年に発明した新しいレーザー技術「フォトニック結晶レーザー（PCSEL）」について、分かりやすくご紹介します。この技術がなぜ自動運転や宇宙通信の未来を握っているのかを解説します。',
    message: '若い学生の皆さんは、無限の可能性を秘めています。じっくりと腰を据え、自分が本当にやりたいこと、成し遂げたいことに出会えるよう願っています。その際、難しく考える必要はありません。まずは一歩を踏み出すことが大切です。実際に行動してみて、必要に応じて柔軟に軌道修正していけばよいのです。今回の講義では、皆さんが一歩を踏み出す際のヒントとして、私が日頃どのような「座右の銘」を胸に研究に挑んでいるかについてもお話ししたいと思います。',
    img: 'public/speakers/noda.jpg',
  },
  {
    name: '内田 由紀子先生',
    affiliation: '人と社会の未来研究院・教授',
    title: '京大で出会った文化心理学',
    message: '京大には、自分の世界を大きく広げてくれる人や学問との出会いがあります。私にとってはそれが文化心理学でした。喜びも悩みも含めて、そのすべてが自分を成長させてくれます。皆さんも京大に入って得られた機会を存分に活用してください！',
    img: 'public/speakers/uchida.jpg',
  },
  {
    name: '森 重文先生',
    affiliation: '高等研究院・特定教授',
    title: '数学研究の楽しさと数学の美しさ',
    message: '私は、夢中になって追求しようと思える目標を在学中に見つけました。皆さんも如何ですか',
    img: 'public/speakers/mori.jpg',
  },
  {
    name: '北川 進先生',
    affiliation: '京都大学・理事',
    title: '「空っぽ」から未来をつくる ― 無用の用がひらいた科学の世界 ―',
    summary: '空間の発見から未来を考える',
    message: '科学の出発点は、「何の役に立つか」ではなく、「なぜだろう」「面白い」と心が動くことです。誰も価値を見出していないものにこそ、新しい世界への入口があるかもしれません。自分だけの問いを見つけ、それを大切に育ててください。',
    img: 'public/speakers/kitagawa.jpg',
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
            {s.img && (<img src={s.img} alt={s.name} className="speaker-card__img" />)}
            <div className="speaker-card__body">
              <h2 className="speaker-card__name">{s.name}</h2>
              <p className="speaker-card__affiliation">{s.affiliation}</p>
            
              {s.title && (
                <p className="speaker-card__title">{s.title}</p>
                )}
                
              {s.summary && (
                  <div>
                    <p className="speaker-card__label">講義内容の概要</p>
                    <p className="speaker-card__summary">{s.summary}</p>
                  </div>
                )}
              
              {s.message && (
              <div>
                <p className="speaker-card__label">学生へのひとこと</p>
                <p className="speaker-card__message">{s.message}</p>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
