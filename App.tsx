import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MtKenyaHomes } from './pages/MtKenyaHomes';
import { Safaris } from './pages/Safaris';
import { Apartments } from './pages/Apartments';
import { Others } from './pages/Others';
import { Login } from './pages/Login';
import { AIConcierge } from './components/AIConcierge';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mt-kenya-homes" element={<MtKenyaHomes />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/others" element={<Others />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <AIConcierge />
    </Router>
  );
};

export default App;