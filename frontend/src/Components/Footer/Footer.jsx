import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <ul className="footer-columns">
              <li className="column-title">Explore</li>
              <li><a href="#" className="footer-hover-links">Home</a></li>
              <li><a href="#" className="footer-hover-links">Features</a></li>
              <li><a href="#" className="footer-hover-links">Community</a></li>
              <li><a href="#" className="footer-hover-links">Blog</a></li>
            </ul>
            <ul className="footer-columns">
              <li className="column-title">Support</li>
              <li><a href="#" className="footer-hover-links">FAQ</a></li>
              <li><a href="#" className="footer-hover-links">Contact Us</a></li>
              <li><a href="#" className="footer-hover-links">Terms of Service</a></li>
              <li><a href="#" className="footer-hover-links">Privacy Policy</a></li>
            </ul>
            <ul className="footer-columns">
              <li className="column-title">Connect</li>
              <li><a href="#" className="footer-hover-links">Facebook</a></li>
              <li><a href="#" className="footer-hover-links">Instagram</a></li>
              <li><a href="#" className="footer-hover-links">Twitter</a></li>
            </ul>
          </div>
          <div className="signup-container">
            <p>Join our community for exclusive offers and updates.</p>
            <div className="signup-input">
              <input placeholder='Your Email Address'></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} Fithub. All Rights Reserved.</p>
        <div className="terms">
          <p><a href="#" className="footer-hover-links">Terms and Conditions</a></p>
          <p><a href="#" className="footer-hover-links">Privacy Policy</a></p>
          <p><a href="#" className="footer-hover-links">Do Not Sell My Personal Information</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
