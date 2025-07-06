import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa6";

// Import your project images
import Photo from "../assets/srisajucies.png";
import Photo2 from "../assets/projectnexus.png";
import Photo3 from "../assets/emart.png";
import Photo4 from "../assets/recipefinder.png";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000, debounceDelay: 1000 });
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="text-center">
          <h3 className="section-title">My Projects</h3>
          <div className="section-subtitle"></div>
          <p className="section-description">
            Explore my latest projects showcasing full-stack development skills and modern web technologies.
          </p>
        </div>

        <div className="projects-grid">
          {/* Sri Sai Juices Project */}
          <div className="project-card" data-aos="fade-up">
            <img src={Photo} alt="Sri Sai Juices Project" className="project-image" />
            <div className="project-content">
              <h4 className="project-title">Sri Sai Juices</h4>
              <p className="project-description">
                Full-stack e-commerce platform with user and admin dashboards. Features online ordering, 
                Stripe payment integration, and real-time order tracking. Built with secure authentication 
                and mobile-responsive design.
              </p>
              <div className="project-tags">
                <span className="project-tag">React.js</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express.js</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Stripe</span>
              </div>
              <div className="project-links">
                <a href="https://srisaijucies-client.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <span>Live Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="#" className="github-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* ProjectNexus Project */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <img src={Photo2} alt="ProjectNexus" className="project-image" />
            <div className="project-content">
              <h4 className="project-title">ProjectNexus</h4>
              <p className="project-description">
                Collaborative academic project repository platform. Students can upload, explore, and share 
                academic projects with faculty approval workflows. Integrated Google Drive API for secure 
                file storage and knowledge sharing across batches.
              </p>
              <div className="project-tags">
                <span className="project-tag">React.js</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express.js</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Google API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mallikharjun7/Project_Nexus" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="https://github.com/Mallikharjun7/Project_Nexus" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Emart Website Project */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <img src={Photo3} alt="Emart Website" className="project-image" />
            <div className="project-content">
              <h4 className="project-title">Emart Website</h4>
              <p className="project-description">
                Modern e-commerce website with responsive design and smooth user experience. Features 
                product categories, shopping cart functionality, and intuitive navigation. Built with 
                React.js for optimal performance and user engagement.
              </p>
              <div className="project-tags">
                <span className="project-tag">React.js</span>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">Bootstrap</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mallikharjun7/eMart" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="https://github.com/Mallikharjun7/eMart" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Recipe Finder Project */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <img src={Photo4} alt="Recipe Finder" className="project-image" />
            <div className="project-content">
              <h4 className="project-title">Recipe Finder</h4>
              <p className="project-description">
                Web application for discovering recipes by ingredients or dish names. Integrates with 
                external API to display detailed recipes with ingredients, instructions, and images. 
                Features search functionality and responsive design for seamless user experience.
              </p>
              <div className="project-tags">
                <span className="project-tag">React.js</span>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">API</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">Axios</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Mallikharjun7/RecipeFinder" target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="https://github.com/Mallikharjun7/RecipeFinder" target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
