import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { achivementData } from "./Basedata";

export default function Achievement() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <div className="section" id="achievements">
      <div className="container">
        <div className="text-center">
          <h3 className="section-title">Achievements & Certifications</h3>
          <div className="section-subtitle"></div>
          <p className="section-description">
            Showcasing my journey through various certifications and achievements in the tech world.
          </p>
        </div>

        <div className="achievements-grid">
          {achivementData.map(item => (
            <div
              key={item.id}
              className="achievement-card"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="achievement-image-container">
                <img
                  src={item.Image}
                  alt={item.alt}
                  className="achievement-image"
                />
              </div>

              <div className="achievement-content">
                <div className="achievement-header">
                  <FaTrophy className="achievement-icon" />
                  <span className="achievement-number">Achievement {item.id}</span>
                </div>

                <p className="achievement-description">
                  {item.alt}
                </p>

                <div className="achievement-actions">
                  <button 
                    onClick={() => window.open(item.Image, '_blank')}
                    className="achievement-link"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
