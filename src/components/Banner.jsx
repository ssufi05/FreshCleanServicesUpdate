import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { navLinks } from "../constants";
import { contactLink } from "../constants";

import { bannerButton, bannerStyle, styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Contact from './Contact';
import { Button } from "./Button";

const Banner = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  

  return (
    <section style={bannerStyle}>
          <h4 style={{ color: '#fff', fontSize: '16px'}}>Get a Quote Today</h4>
          <h2 style={{ color: '#fff', fontSize: '30px', padding: '10px 0'}}>Call (219) 413-8661 for a Free Quote!</h2>
          <a href="#contact">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Contact Us
          </Button>
        </a>
    </section>
  )
}



export default SectionWrapper(Banner, "")


/*

<ul className='list-none hidden sm:flex flex-row gap-10'>
          {contactLink.map((contact) => (
            <li
              key={contact.id}
              style={bannerButton} 
              onClick={() => setActive(contact.title)}
            >
              <a href={`#${contact.id}`}>{contact.title}</a>
            </li>
          ))}
        </ul>




<a href="#about">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </a>

*/