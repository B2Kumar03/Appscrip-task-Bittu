'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { PiLessThanLight, PiGreaterThan } from "react-icons/pi";
import './ToggleFilter.css'; // Import the CSS file

const ToggleFilter = ({ handleFilterToggle, total_product, filterIsHidden, sortPriceHighToLow, sortPriceLowToHigh, filterToPopular }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='toggle-filter-container'>
      <div className='toggle-filter-items'>
        <span className='toggle-filter-total'>{total_product} items</span>
        <span className='toggle-filter-icon'>{filterIsHidden ? <PiGreaterThan /> : <PiLessThanLight />}</span>
        <button className='toggle-filter-button' onClick={handleFilterToggle}>{filterIsHidden ? "SHOW" : "HIDE"} FILTER</button>
      </div>
      <div className='toggle-filter-dropdown' ref={dropdownRef}>
        <div className='toggle-filter-header' onClick={toggleMenu}>
          <span className='toggle-filter-recommended'>RECOMMENDED</span>
          <p className='toggle-filter-chevron'>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </p>
        </div>
        {isOpen && (
          <div className='toggle-filter-menu'>
            <ul className='toggle-filter-list'>
              <li className='toggle-filter-item'>
                <FaCheck /> <h4>RECOMMENDED</h4>
              </li>
              <li className='toggle-filter-item' onClick={toggleMenu}>
                NEWEST FIRST
              </li>
              <li className='toggle-filter-item' onClick={() => { filterToPopular(); toggleMenu(); }}>
                POPULAR
              </li>
              <li className='toggle-filter-item' onClick={() => { sortPriceLowToHigh(); toggleMenu(); }}>
                PRICE: LOW TO HIGH
              </li>
              <li className='toggle-filter-item' onClick={() => { sortPriceHighToLow(); toggleMenu(); }}>
                PRICE: HIGH TO LOW
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleFilter;
