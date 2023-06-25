import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { motion } from "framer-motion";

// <video src='/videos/video-2.mp4' autoPlay loop muted />

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="text-center">Keep Your Business Clean</h1>
      <p>With Fresh & Clean</p>
      <div className='hero-btns'>
        

        <a href="#about">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </a>

        <a href="#contact">
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Contact Us <i className='far fa-play-circle' />
          </Button>
        </a>

      </div>

    </div>
  );
}

export default HeroSection;