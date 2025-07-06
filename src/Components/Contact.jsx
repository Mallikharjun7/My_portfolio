import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import Photo from '../assets/contact-me.png'
import {FaLinkedinIn, FaGithub, FaCheckCircle } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [result, setResult] = React.useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "2970fb62-6888-4a71-a921-0aa3234a856a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setResult("Message Sent Successfully!");
        
        // Reset form
        setFormData({
          email: '',
          subject: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        setShowSuccess(false);
      }
    } catch (error) {
      setResult("Failed to send message. Please try again.");
      setShowSuccess(false);
    }
  }

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="text-center">
          <h3 className="section-title">Get In Touch</h3>
          <div className="section-subtitle"></div>
          <p className="section-description">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="contact-form">
          {showSuccess && (
            <div className="success-message">
              <FaCheckCircle />
              <span>{result}</span>
            </div>
          )}
          {!showSuccess && result && (
            <div className="message">
              <h3>{result}</h3>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="replyto" value="custom@gmail.com" />
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="form-textarea"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-16">
          <h4 className="section-title">Connect with Me</h4>
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
              href="https://github.com/Mallikharjun7" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/mallikharjun-ampolu-325288326/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
