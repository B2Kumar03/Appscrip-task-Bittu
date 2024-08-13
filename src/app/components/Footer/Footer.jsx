import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="top-section">
          <div className="subscribe-section">
            <h3 className="heading">BE THE FIRST TO KNOW</h3>
            <p className="text">Sign up for updates from mettā muse.</p>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="email-input"
              />
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
          <div className="contact-section">
            <h3 className="heading">CONTACT US</h3>
            <p className="text">
              <FiPhone className="icon" /> +44 221 133 5360
            </p>
            <p className="text">
              <MdEmail className="icon" /> customercare@mettamuse.com
            </p>
            <div className="currency">
              <BsCurrencyDollar className="icon" />
              <span>USD</span>
            </div>
            <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="links-section">
            <div className="company-links">
              <h3 className="heading">mettā muse</h3>
              <ul className="link-list">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div className="quick-links">
              <h3 className="heading">QUICK LINKS</h3>
              <ul className="link-list">
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
          <div className="follow-section">
            <h3 className="heading">FOLLOW US</h3>
            <div className="social-icons">
              <FaInstagram className="icon" />
              <FaLinkedin className="icon" />
            </div>
            <div className="payment-section">
              <h3 className="heading">mettā muse ACCEPTS</h3>
              <div className="payment-icons">
                <Image src="https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg" alt="GPay" width={40} height={40} />
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
        <div className="footer-bottom">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
