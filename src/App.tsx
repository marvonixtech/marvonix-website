import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import { BlogList, BlogPost } from './pages/Blog';
import Contact from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';

// Wrapper for Footer to provide navigation
const FooterWrapper: React.FC = () => {
    const navigate = useNavigate();
    return <Footer navigate={(page) => navigate(page === 'home' ? '/' : `/${page}`)} />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0A0F2C] text-[#0A0F2C] dark:text-slate-200 font-sans transition-colors duration-500 selection:bg-[#1A3CE4]/30 dark:selection:bg-[#4FD3FF]/30">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <FooterWrapper />
      </div>
    </Router>
  );
}

export default App;
