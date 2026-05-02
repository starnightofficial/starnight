import '../styles/Schedule.css';
import '../styles/Speakers.css';

const schedule = [
  { no: 1, date: '2026年4月10日（金）', time: '18:30〜20:00', venue: '総合人間学部棟 1102教室', speaker: '宮野 公樹先生', theme: '知とは何か' },
  { no: 2, date: '2026年5月8日（金）', time: '18:30〜20:00', venue: '総合人間学部棟 1102教室', speaker: '○○ ○○先生', theme: '未定' },
  { no: 3, date: '2026年6月12日（金）', time: '18:30〜20:00', venue: '総合人間学部棟 1102教室', speaker: '○○ ○○先生', theme: '未定' },
  { no: 4, date: '2026年7月10日（金）', time: '18:30〜20:00', venue: '総合人間学部棟 1102教室', speaker: '○○ ○○先生', theme: '未定' },
  { no: 5, date: '2026年10月9日（金）', time: '18:30〜20:00', venue: '総合人間学部棟 1102教室', speaker: '○○ ○○先生', theme: '未定' },
  { no: 6, date: '2026年11月13日（金）', time: '18:30〜20:00', venue: '総合人間学部棟 1102教室', speaker: '○○ ○○先生', theme: '未定' },
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
              <th>日程</th>
              <th>時間</th>
              <th>会場</th>
              <th>講師</th>
              <th>テーマ</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.no}>
                <td>{row.no}</td>
                <td className="schedule-date">{row.date}</td>
                <td>{row.time}</td>
                <td>{row.venue}</td>
                <td>{row.speaker}</td>
                <td>{row.theme}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
