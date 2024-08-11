'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp, FaGreaterThan } from 'react-icons/fa';
import { PiLessThanLight } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";

const ToggleFilter = ({handleFilterToggle,total_product,filterIsHidden,sortPriceHighToLow,sortPriceLowToHigh,filterToPopular}) => {
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
    <div className='max-w-screen-xl mx-auto h-[88px] flex justify-between items-center border-b border-t hidden md:flex'>
      <div className='flex justify-between items-center cursor-pointer gap-2'>
        <span className='font-bold'>{total_product} items</span>
        <span className='duration-700'>{filterIsHidden?<PiGreaterThan/>:<PiLessThanLight />}</span>
        <button className='underline text-[#ccc]' onClick={()=>handleFilterToggle()}>{filterIsHidden?"SHOW":"HIDE"} FILTER</button>
      </div>
      <div className='relative' ref={dropdownRef}>
        <div
          className='flex justify-between items-center cursor-pointer gap-2'
          onClick={toggleMenu}
        >
          <span className='font-bold'>RECOMMENDED</span>
          <p className='font-normal'>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </p>
        </div>
        {isOpen && (
          <div className='absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg'>
            <ul className='text-left'>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 flex items-center gap-2'>
                <FaCheck /> <h4>RECOMMENDED</h4>
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right'>
                NEWEST FIRST
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right' 
              onClick={()=>{
                filterToPopular();
                toggleMenu()
              }}
              >
                POPULAR
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right' onClick={()=>{
                sortPriceLowToHigh();
                toggleMenu()
              }}>
              PRICE: LOW TO HIGH
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right' onClick={()=>{
                sortPriceHighToLow();
                toggleMenu()
              }}>
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
