// src/components/Education.jsx
import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
    const education = [
        {
            degree: 'B.Tech, Information Technology',
            institution: 'GMR Institute of Technology',
            year: '2022 – Present | Rajam',
            grade: 'CGPA: 8.82',
        },
        {
            degree: 'Intermediate, MPC',
            institution: 'Narayana Junior College',
            year: '2020 – 2022 | Srikakulam',
            grade: '94%',
        },
        {
            degree: 'SSC',
            institution: 'APSWR Boys High School',
            year: '2020 | Kanchili',
            grade: '98%',
        },
    ];

    return (
        <div className="section" data-aos="fade-up">
            <div className="container">
                <div className="text-center">
                    <h3 className="section-title">Education</h3>
                    <div className="section-subtitle"></div>
                    <p className="section-description">
                        My academic journey and qualifications that have shaped my technical expertise.
                    </p>
                </div>
                
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="education-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <h4 className="education-degree">{edu.degree}</h4>
                            <p className="education-institution">{edu.institution}</p>
                            <p className="education-year">{edu.year}</p>
                            <p className="education-grade">{edu.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
