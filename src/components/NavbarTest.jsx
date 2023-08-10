import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { logo } from "../assets";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
          <Link
          to='/'
          className='flex items-center mr-5'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-13 h-12 object-contain' /> &nbsp;
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>

            Fresh & Clean Services &nbsp;
          </p>
        </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>

              <li
                className="nav-links"
                onClick={closeMobileMenu}>
                <a href="#about">About</a>
              </li>
              <li
                className="nav-links"
                onClick={closeMobileMenu}>
                <a href="#work">Work</a>
              </li>
              <li
                className="nav-links"
                onClick={closeMobileMenu}>
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;