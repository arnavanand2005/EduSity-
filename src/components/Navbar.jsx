import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { to: "home", text: "Home", offset: -50 },
    { to: "program", text: "Program", offset: -50 },
    { to: "about", text: "About Us", offset: -50 },
    { to: "campus", text: "Campus", offset: -50 },
    { to: "testimonials", text: "Testimonials", offset: -150 },
    { to: "contact", text: "Contact Us", offset: -50, isButton: true }
  ];

  return (
    <>
      <nav className={`navbar-container ${isSticky ? 'dark-nav' : ''}`}>
        <div className="navbar-leftside">
          <img className="university-logo" src={logo} alt="University Logo" />
        </div>

        <div className="navbar-rightside">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isButton ? (
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    offset={link.offset} 
                    duration={500}
                  >
                    <button>{link.text}</button>
                  </Link>
                ) : (
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    offset={link.offset} 
                    duration={500}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} onClick={toggleMobileMenu}>
              {link.isButton ? (
                <Link 
                  to={link.to} 
                  smooth={true} 
                  offset={link.offset} 
                  duration={500}
                >
                  <button>{link.text}</button>
                </Link>
              ) : (
                <Link 
                  to={link.to} 
                  smooth={true} 
                  offset={link.offset} 
                  duration={500}
                >
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}