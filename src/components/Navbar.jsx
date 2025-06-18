import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar-container ${isSticky ? 'dark-nav' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-leftside">
        <img className='university-logo' src={logo} alt="university-logo" />
      </div>

      <div className="navbar-rightside">
        <Link to="home" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
          <li>Home</li>
        </Link>
        <Link to="program" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
          <li>Program</li>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
          <li>About Us</li>
        </Link>
        <Link to="campus" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
          <li>Campus</li>
        </Link>
        <Link to="testimonials" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
          <li>Testimonials</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
          <li><button className="contact-btn">Contact Us</button></li>
        </Link>
      </div>

      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
    </nav>
  );
}