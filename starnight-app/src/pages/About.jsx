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
            <h2>私たちの考え</h2>
            <p>
              大学における学びは知識の習得にとどまらず、自らの関心や問を深め、社会や未来と結びついていく営みであると私たちは考えています。
            </p>
            <p>
              スターナイト講義は、世界的研究者を招き、講演に加えて、対話や交流の機会を設けることで、知の最前線に触れる場を提供します。
            </p>
            <p>
              双方向のコミュニケーションを通して、学びの意味をとらえなおす契機となることを目指しています。
            </p>
          </div>

          <div className="about-block">
            <h2>目指す姿</h2>
            <p>
              本講義を通して、学生が世界的研究者の軌跡や価値観に直接触れ、自らの学びと社会や未来とのつながりを実感できる状態を目指します。 
              
            </p>
            <p>
              また、コミュニケーションを通じて得られる気づきや問を起点に、学習意欲が高まり、主体的に行動する姿勢が育まれることを期待しています。 
              
            </p>
            <p>
              ここでの出会いや経験が、それぞれの関心を深め、今後の学びや進路選択における指針となり、次の一方を踏み出す原動力となることを願っています。
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
