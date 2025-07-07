import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Profile as data } from "./Basedata";

// Pages
import Education from './Education';
import AboutMe from './AboutMe';
import Project from './Project';
import Contactme from "./Contact";
import Achivement from "./Achivement.jsx";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const Users = data.map(item => (
    <div className="hero" key={item.id}>
      <div className="hero-content">
        {/* Profile Image */}
        <div className="hero-image-container" data-aos="fade-right">
          <img
            src={`/${item.Image}`}
            alt={item.alt}
            className="hero-image"
          />
        </div>

        {/* Greeting & Description */}
        <div className="hero-text" data-aos="fade-left">
          <h2 className="hero-title">
            {item.Greeting}
          </h2>
          <h5 className="hero-subtitle">
            {item.Name}
          </h5>
          <div className="section-subtitle"></div>
          <p
            className="hero-description"
            dangerouslySetInnerHTML={{ __html: item.Description }}
          />

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <Link to="/Project" className="btn-secondary" onClick={() => setOpenLink(false)}>
              View Projects
            </Link>

          </div>

          {/* Social Links - Mobile Only */}
          <div className="social-links">
            <a
              href="https://leetcode.com/u/Mallikharjun07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.linkedin.com/in/mallikharjun-ampolu-325288326/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Mallikharjun7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div data-aos="fade-up">
        {Users}
      </div>

      <div className="section">
        <AboutMe />
      </div>

      <div className="section">
        <Education />
      </div>

      <div className="section">
        <Project />
      </div>

      <div className="section">
        <Achivement />
      </div>

      <div className="section">
        <Contactme />
      </div>
    </div>
  );
}
