import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import FormPage from './pages/FormPage';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
