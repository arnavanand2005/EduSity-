import React from 'react';
import about from '../assets/about.png';
import play_icon from '../assets/play-icon.png';
import '../styles/About.css'

export default function About() {
  const handlePlayClick = () => {
    alert("Play button clicked");
  };

  return (
    <div className='about-container'>
      <div className='main-image'>
        <img src={about} alt="about-image"/>
        <div className='main-image-overlay'>
          <img 
            onClick={handlePlayClick} 
            src={play_icon} 
            alt="Play video" 
          />
        </div>
      </div>
      <div className="about-right-side">
        <div className="main-content">
          <h2 className='main-heading'>About Us</h2>
          <p className='about-college-1'>
            Edusity is a next-gen educational platform dedicated to empowering students with real-world skills, practical knowledge, and a growth mindset.
            Our curriculum is designed to go beyond traditional learning, integrating technology, creativity, and critical thinking into every subject.
          </p>
          <p className='about-college-2'>
            With experienced mentors, industry-aligned courses, and a focus on holistic development, Edusity prepares learners not just for exams — but for life. Whether you're aiming to code the future, lead a startup, or solve global challenges, Edusity is your launchpad.
          </p>
          <p className='about-college-3'>
            Join a community where curiosity is encouraged, innovation is nurtured, and every student is inspired to be their best self. At Edusity, we don't just teach. We empower.
          </p>
        </div>
      </div>
    </div>
  );
}