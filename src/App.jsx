import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Project from './Components/Project';
import Achievement from './Components/Achivement';
import Contact from './Components/Contact';
import Education from './Components/Education';

import { Analytics } from '@vercel/analytics/react';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [openLink, setOpenLink] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openLink && !event.target.closest('nav') && !event.target.closest('button')) {
        setOpenLink(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openLink]);

  return (
    <div>
      <BrowserRouter>
        {/* Header Section */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              {/* Logo/Brand */}
              <Link to="/" className="logo">
                Portfolio
              </Link>

              {/* Desktop Navigation */}
              <nav className="nav-desktop">
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About me</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Project">Project</Link>
                <Link to="/Achievement">Achievement</Link>
              </nav>

              {/* Desktop Contact Button */}
              <div className="nav-desktop">
                <Link to="/Contact">
                  <button className="nav-button">
                    Reach Me Out
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setOpenLink(!openLink)} 
                className="mobile-menu-btn"
                aria-label="Toggle menu"
              >
                {openLink ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu ${openLink ? 'active' : ''}`}>
              <Link to="/" onClick={() => setOpenLink(false)}>
                Home
              </Link>
              <Link to="/AboutMe" onClick={() => setOpenLink(false)}>
                About me
              </Link>
              <Link to="/Education" onClick={() => setOpenLink(false)}>
                Education
              </Link>
              <Link to="/Project" onClick={() => setOpenLink(false)}>
                Project
              </Link>
              <Link to="/Achievement" onClick={() => setOpenLink(false)}>
                Achievement
              </Link>
              <Link to="/Contact" onClick={() => setOpenLink(false)}>
                <button className="nav-button">
                  Reach Me Out
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Education" element={<Education />} />
            <Route path="Project" element={<Project />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Achievement" element={<Achievement />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;