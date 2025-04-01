import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
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
          </Routes>
      
    </Router>
  );
}

export default App;
