import React from 'react';
import './FooterTest.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function FooterTest() {
  return (
    <body>
      <header>
        <h2>Responsive <span>Footer</span></h2>
      </header>

      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Sagar <span>Developer</span></h3>

          <p className="footer links">
            <a href="#">Home</a>
            |
            <a href="#">About</a>
            |
            <a href="#">Contact</a>
            |
            <a href="#">Blog</a>
          </p>

          <p className="footer-company-name">Copyright © 2023 <strong>SagarDeveloper</strong>
          All rights reserved</p>
        </div>

        <div className="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default FooterTest;



/**
 * import React from 'react';
import './FooterTest.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

function FooterTest() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <img src={logo} alt='logo' className='w-13 h-12 object-contain' /> &nbsp;
        <p className='text-white text-[18px] font-bold cursor-pointer flex '>
          Fresh & Clean Services &nbsp;
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterTest;
 */