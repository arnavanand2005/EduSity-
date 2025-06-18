import React from 'react';
import program_1 from '../assets/program-1.png';
import program_2 from '../assets/program-2.png';
import program_3 from '../assets/program-3.png';
import program_1_icon from '../assets/program-icon-1.png';
import program_2_icon from '../assets/program-icon-2.png';
import program_3_icon from '../assets/program-icon-3.png';
import '../styles/Program.css';
import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element name='program'>
    <div className='about-container'>
      <div className="program-heading">
        <p>Our Program</p>
        <h1>What do we have to offer</h1>
      </div>
      
      <div className="program-cards">
        <div className="program-card">
          <img src={program_1} alt="Graduation Degree" />
          <div className="program-overlay">
            <div className="program-overlay-content">
              <img src={program_1_icon} alt="" />
              <p>Graduation Degree</p>
            </div>
          </div>
        </div>
        
        <div className="program-card">
          <img src={program_2} alt="Master's Degree" />
          <div className="program-overlay">
            <div className="program-overlay-content">
              <img src={program_2_icon} alt="" />
              <p>Master's Degree</p>
            </div>
          </div>
        </div>
        
        <div className="program-card">
          <img src={program_3} alt="Post Graduation" />
          <div className="program-overlay">
            <div className="program-overlay-content">
              <img src={program_3_icon} alt="" />
              <p>Post Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
  );
}