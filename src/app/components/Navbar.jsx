import React from 'react';
import { MenuIcon, SearchIcon, HeartIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-black text-white text-center py-1">
        <div className="flex justify-center md:justify-between items-center max-w-screen-xl mx-auto px-4">
          {/* This span will only be visible on medium and larger screens */}
          <span className="hidden md:flex items-center space-x-2">
            <span className="inline-block w-4 h-4 bg-red-500"></span> {/* Placeholder for icon */}
            <span>Lorem ipsum dolor</span>
          </span>
          {/* This span will be centered on small screens */}
          <span className="flex items-center space-x-2">
            <span className="inline-block w-4 h-4 bg-red-500"></span> {/* Placeholder for icon */}
            <span>Lorem ipsum dolor</span>
          </span>
          {/* This span will only be visible on medium and larger screens */}
          <span className="hidden md:flex items-center space-x-2">
            <span>Lorem ipsum dolor</span>
            <span className="inline-block w-4 h-4 bg-red-500"></span> {/* Placeholder for icon */}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Left side with logo and mobile menu icon */}
            <div className="flex items-center space-x-4">
              <MenuIcon className="h-6 w-6 block md:hidden" />
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for logo */}
                <span className="text-sm font-bold">LOGO</span>
              </div>
            </div>

            {/* Center Logo for Desktop */}
            <div className="hidden md:flex justify-center flex-grow">
              <span className="text-xl font-bold">LOGO</span>
            </div>

            {/* Right side icons and language switch */}
            <div className="flex items-center space-x-6">
              <SearchIcon className="h-6 w-6" />
              <HeartIcon className="h-6 w-6" />
              <ShoppingBagIcon className="h-6 w-6" />
              <UserIcon className="h-6 w-6 hidden md:flex " />
              {/* This div is hidden on small devices */}
              <div className="hidden md:flex items-center space-x-1">
                <span>ENG</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Nav Links for Desktop */}
          <div className="hidden md:flex justify-center space-x-8 border-t border-gray-200 py-2">
            <a href="#" className="text-sm font-semibold hover:text-gray-700">SHOP</a>
            <a href="#" className="text-sm font-semibold hover:text-gray-700">SKILLS</a>
            <a href="#" className="text-sm font-semibold hover:text-gray-700">STORIES</a>
            <a href="#" className="text-sm font-semibold hover:text-gray-700">ABOUT</a>
            <a href="#" className="text-sm font-semibold hover:text-gray-700">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
