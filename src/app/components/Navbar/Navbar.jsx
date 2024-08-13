import React from 'react';
import { MenuIcon, SearchIcon, HeartIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          {/* Left side, visible on medium and larger screens */}
          <span className="hidden-on-small">
            <span className="icon-placeholder"></span>
            <span>Lorem ipsum dolor</span>
          </span>
          {/* Centered content, visible on all screens */}
          <span className="centered">
            <span className="icon-placeholder"></span>
            <span>Lorem ipsum dolor</span>
          </span>
          {/* Right side, visible on medium and larger screens */}
          <span className="hidden-on-small">
            <span>Lorem ipsum dolor</span>
            <span className="icon-placeholder"></span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="navbar-content">
          {/* Left side with logo and mobile menu icon */}
          <div className="left-side">
            <MenuIcon className="menu-icon" />
            <div className="logo-placeholder">
              <span className="logo-text">LOGO</span>
            </div>
          </div>

          {/* Center Logo for Desktop */}
          <div className="center-logo">
            <span className="center-logo-text">LOGO</span>
          </div>

          {/* Right side icons and language switch */}
          <div className="right-side">
            <SearchIcon className="icon" />
            <HeartIcon className="icon" />
            <ShoppingBagIcon className="icon" />
            <UserIcon className="icon hidden-on-small" />
            <div className="language-switch hidden-on-small">
              <span>ENG</span>
              <svg className="chevron-down" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Nav Links for Desktop */}
        <div className="bottom-nav-links hidden-on-small">
          <a href="#" className="nav-link">
            SHOP
            <span className="link-underline"></span>
          </a>
          <a href="#" className="nav-link">
            SKILLS
            <span className="link-underline"></span>
          </a>
          <a href="#" className="nav-link">
            STORIES
            <span className="link-underline"></span>
          </a>
          <a href="#" className="nav-link">
            ABOUT
            <span className="link-underline"></span>
          </a>
          <a href="#" className="nav-link">
            CONTACT US
            <span className="link-underline"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
