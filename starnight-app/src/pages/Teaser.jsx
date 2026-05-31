import { Link } from 'react-router-dom';
import '../styles/Home.css';


export default function Teaser() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
          <div className="hero__content">
            <h1 className="hero__text">
              知の最前線と対話する<br />
              学びが未来に繋がる
            </h1>
          </div>
          <div className="hero__image" aria-hidden="true">
            <img src="pic1.png" alt="whale" className="pic1" />
          </div>
      </section>
      
    </main>
  );
}
