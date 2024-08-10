import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-black max-w-[100%] text-white py-8">
      <div className="container  mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-2">BE THE FIRST TO KNOW</h3>
            <p className="text-sm">Sign up for updates from mettā muse.</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4 ">
             <div>
             <input
                type="email"
                placeholder="Enter your e-mail..."
                className="px-4 py-2  bg-white text-white focus:outline-none"
              />
             </div>
             <div>
             <button className="px-4 py-2 text-[#f0efef] border  border-red-100  ">SUBSCRIBE</button>
             </div>
            </div>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <h3 className="text-lg font-medium mb-2">CONTACT US</h3>
            <p className="text-sm flex items-center justify-center md:justify-end">
              <FiPhone className="mr-2" /> +44 221 133 5360
            </p>
            <p className="text-sm flex items-center justify-center md:justify-end">
              <MdEmail className="mr-2" /> customercare@mettamuse.com
            </p>
            <div className="mt-4 flex justify-center md:justify-end">
              <BsCurrencyDollar className="mr-2" />
              <span>USD</span>
            </div>
            <p className="text-xs mt-2">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row text-center md:text-left md:space-x-8 mb-6 md:mb-0">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">mettā muse</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium mb-2">FOLLOW US</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <FaInstagram className="text-2xl" />
              <FaLinkedin className="text-2xl" />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">mettā muse ACCEPTS</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <Image src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg" alt="GPay" width={40} height={40}  />
                <Image src="https://www.svgrepo.com/show/328127/visa.svg" alt="Visa" width={40} height={40} />
                <Image src="https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg" alt="Mastercard" width={40} height={40} />
                <Image src="https://www.svgrepo.com/show/14823/amex.svg" alt="Amex" width={40} height={40} />
                <Image src="https://www.svgrepo.com/show/303191/apple-pay-logo.svg" alt="Apple Pay" width={40} height={40} className='bg-white px-3' />
                <Image src="https://www.svgrepo.com/show/475665/paypal-color.svg" alt="PayPal" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;