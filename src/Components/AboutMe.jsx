import { useEffect } from 'react';
import { About as Datas } from './Basedata';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CV from '../assets/Mallikharjun_Resume.pdf';

import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaLayerGroup,
  FaDownload,
} from 'react-icons/fa';

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      name: 'Programming Languages',
      icon: <FaCode />,
      description: 'Java, Python, C, JavaScript',
    },
    {
      name: 'Web Development',
      icon: <FaLaptopCode />,
      description: 'Frontend: HTML, CSS, Bootstrap, React.js | Backend: Node.js, Express.js',
    },
    {
      name: 'Database Management',
      icon: <FaDatabase />,
      description: 'SQL, MongoDB',
    },
    {
      name: 'Tools & Platforms',
      icon: <FaTools />,
      description: 'Git, GitHub, Postman, VS Code',
    },
    {
      name: 'CS Subjects',
      icon: <FaLayerGroup />,
      description: 'Data Structures and Algorithms, OOPs, DBMS',
    },
  ];

  return (
    <div className="section" id="about">
      {Datas.map((terms) => (
        <div key={terms.id} className="container">
          {/* Header */}
          <div className="text-center">
            <h3 className="section-title">About Me</h3>
            <div className="section-subtitle"></div>
            <p className="section-description">
              Passionate MERN Stack developer with a focus on creating beautiful and functional web applications.
            </p>
          </div>

          {/* Content */}
          <div className="about-content">
            <div data-aos="fade-up" className="about-text">
              <div>
                <h3 className="about-greeting">{terms.Greeting}</h3>
                <div className="about-description">
                  <p dangerouslySetInnerHTML={{ __html: terms.aboutMe }} />
                  <p dangerouslySetInnerHTML={{ __html: terms.aboutMe2 }} />
                  <p dangerouslySetInnerHTML={{ __html: terms.aboutMe3 }} />
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="skills-title">Skills</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-card"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div>
                <a href={CV} download className="btn-primary">
                  <FaDownload />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
