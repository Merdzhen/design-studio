import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
