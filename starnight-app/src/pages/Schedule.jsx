import '../styles/Schedule.css';
import '../styles/Speakers.css';

// const schedule = [
//   { no: 1, date: '2026年4月10日（金）', time: '18:30〜20:00', venue: '国際高等教育院棟3階大教室31・32', speaker: '宮野 公樹先生', theme: '知とは何か' },
//   { no: 2, date: '2026年5月8日（金）', time: '18:30〜20:00', venue: '国際高等教育院棟3階大教室31・32', speaker: '○○ ○○先生', theme: '未定' },
//   { no: 3, date: '2026年6月12日（金）', time: '18:30〜20:00', venue: '国際高等教育院棟3階大教室31・32', speaker: '○○ ○○先生', theme: '未定' },
//   { no: 4, date: '2026年7月10日（金）', time: '18:30〜20:00', venue: '国際高等教育院棟3階大教室31・32', speaker: '○○ ○○先生', theme: '未定' },
//   { no: 5, date: '2026年10月9日（金）', time: '18:30〜20:00', venue: '国際高等教育院棟3階大教室31・32', speaker: '○○ ○○先生', theme: '未定' },
//   { no: 6, date: '2026年11月13日（金）', time: '18:30〜20:00', venue: '国際高等教育院棟3階大教室31・32', speaker: '○○ ○○先生', theme: '未定' },
// ];

const schedule = [
  { no: 1, date: '2026年10月8日（木）', speaker: '宮野 公樹先生', theme: '知とは何か' },
  { no: 2, date: '2026年10月16日（金）', speaker: 'TBA', theme: '' },
  { no: 3, date: '2026年10月22日（金）', speaker: 'TBA', theme: '' },
  { no: 4, date: '2026年10月29日（木）', speaker: 'TBA', theme: '' },
  { no: 5, date: '2026年11月5日（木）', speaker: 'TBA', theme: '' },
  { no: 6, date: '2026年11月12日（木）', speaker: 'TBA', theme: '' },
];

export default function Schedule() {
  return (
    <div className="schedule-page">

      <div className="speakers-header">
        <div className="speakers-title">
          <h1>
            Schedule
            <span className="deco">✦ · · · · · · · ·</span>
          </h1>
        </div>
      </div>

      <div className="schedule-body">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>日程・時間・会場</th>
              {/* <th>時間</th> */}
              {/* <th>会場</th> */}
              <th>講師</th>
              <th>テーマ</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.no}>
                <td>{row.no}</td>
                <td className="schedule-date">
                  {row.date}<br />18:30〜20:00<br />国際高等教育院棟3階大教室31・32
                  </td>
                <td>{row.speaker}</td>
                <td>{row.theme}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="program-flow">
          <h2>タイムスケジュール</h2>
          <ul className="program-flow__list">
            <li><span className="program-flow__time">16:30~</span> 学生入室</li>
            <li><span className="program-flow__time">16:45~16:50</span> イベント紹介、講師紹介、メンチメーターの説明</li>
            <li><span className="program-flow__time">16:50~17:50</span> 講義</li>
            <li><span className="program-flow__time">17:50~18:10</span> 学生との交流企画</li>
            <li><span className="program-flow__time">18:10~18:15</span> アンケート＆次回予告</li>
            <li><span className="program-flow__time">18:30</span> 終了</li>
          </ul>
        </section>
      </div>

      
    </div>
  );
}
