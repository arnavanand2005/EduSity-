import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-social">
        <a 
          href="https://github.com/arnavanand2005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <GitHubIcon className='social-icon' fontSize="large" />
          <span className="social-tooltip">Visit GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/arnav-anand-056710315/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <LinkedInIcon className='social-icon' fontSize="large" />
          <span className="social-tooltip">Visit LinkedIn</span>
        </a>
      </div>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} EduSity. All rights reserved.</p>
      </div>
    </div>
  );
}