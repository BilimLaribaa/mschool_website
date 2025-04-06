import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import About from './Pages/About';
import Footer from './components/Footer';
import Gallery from './Pages/Gallery';
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
