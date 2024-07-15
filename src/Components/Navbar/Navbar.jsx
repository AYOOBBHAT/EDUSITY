import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Tmslogo.png';
import menu_icon from '../../assets/menu-icon.png';
import close_icon from '../../assets/close-icon.png'; // Add the close icon import
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar-container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={`navbar-menu ${mobileMenu ? 'show' : 'hide-mobile-menu'}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to='projects' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Projects</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Mission</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Contact us</Link></li>
      </ul>
      <img
        src={mobileMenu ? close_icon : menu_icon}
        alt="Menu Icon"
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
