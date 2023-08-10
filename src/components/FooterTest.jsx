import React, { useState, useEffect } from 'react';
import './FooterTest.css';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function FooterTest() {


  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [scrolled, setScrolled] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    
    showButton();
  }, []);

  window.addEventListener('resize', showButton);




  return (
    <body>

      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <Link
              to='/'
              className='flex items-center '
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt='logo' className='w-13 h-12 ' /> &nbsp;
              <p className='text-white text-[18px] font-bold cursor-pointer flex '>

                Fresh & Clean Services &nbsp;
              </p>
            </Link>
          </h3>
          

          <p className="footer links">
            <a href="#">Home </a>
            | 
            <a href="#about"> About </a>
            |
            <a href="#work"> Work </a>
            |
            <a href="#contact"> Contact </a>
          </p>

          <p className="footer-company-name">Copyright © 2023 <strong>Fresh & Clean Services LLC </strong>
          All rights reserved</p>
        </div>

        <div className="footer-center">
          <div>
            <FontAwesomeIcon icon={faPhone}/> &nbsp;
            <p> (219) 413-8661</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope}/> &nbsp;
            <p><p>lorenzo@fresh-n-cleanservices.com</p></p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            <strong>Fresh & Clean Services</strong> is a conscientious, 
            cleaning company whose goal is to please; serving Northwest Indiana and the Chicagoland Area.
          </p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/fresh__clean__services/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/fresh-clean-services-llc/about/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default FooterTest;