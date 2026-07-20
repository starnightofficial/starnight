import '../styles/About.css';
import '../styles/Speakers.css';

export default function About() {
  return (
    <div className="about-page">

      <div className="speakers-header">
        <div className="speakers-title">
          <h1>
            About
            <span className="deco">✦ · · · · · · · ·</span>
          </h1>
        </div>
      </div>

      <div className="about-body">
        <div className="about-body__content">

          <div className="about-block">
            <h2>この講義のねらい</h2>
            <p>
              大学における学びは、単に知識を身につけることにとどまりません。世界の第一線で活躍する研究者の考え方や価値観に触れ、自らの関心や問いを深めることで、社会や未来へとつながっていくものだと私たちは考えています。
            </p>
            <p>
              「スターナイト講義」では、世界的研究者による講演に加え、対談や交流の機会を用意しています。研究の最前線に触れるとともに、双方向の対話を通した学びの深まりや、新たな視点・問いの獲得を目指します。
            </p>
            
          </div>

          <div className="about-block">
            <h2>受講する学生へ</h2>
            <p>
              本講義を通して、学生が世界的研究者の思考や研究への姿勢に触れ、自らの学びや将来について主体的に考えるようになることを目指します。
            </p>
            <p>
              対話や交流から得た気づきを原動力に学習意欲が高まり、自ら行動を起こす姿勢が育まれることを期待しています。ここでの出会いと経験が、一人ひとりの関心を深め、今後の進路選択や未来へ向けた新たな一歩を後押しする指針となることを願っています。
            </p>
          </div>

          <div className="about-block">
            <h2>主催</h2>
            <p>
              主催: TEDxKyotoUniversity、スターナイト講義実行委員会
            </p>
            <p>
              共催：京都大学国際高等教育院
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
