import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__backToTop">
        <a href="#">Back to top</a>
      </div>
      <div className="footer__links">
        <div className="footer__section">
          <h3>Get to Know Us</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
          <a href="#">Amazon Science</a>
        </div>
        <div className="footer__section">
          <h3>Connect with Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer__section">
          <h3>Make Money with Us</h3>
          <a href="#">Sell on Amazon</a>
          <a href="#">Sell under Amazon Accelerator</a>
          <a href="#">Protect and Build Your Brand</a>
          <a href="#">Amazon Global Selling</a>
          <a href="#">Supply to Amazon</a>
        </div>
        <div className="footer__section">
          <h3>Let Us Help You</h3>
          <a href="#">Your Account</a>
          <a href="#">Returns Centre</a>
          <a href="#">100% Purchase Protection</a>
          <a href="#">Amazon App Download</a>
          <a href="#">Help</a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">
            <Link to='/'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                    alt="Amazon Logo"
                />
            </Link>
        </div>
        <div className="footer__countries">
          <a href="#">India</a>
          <a href="#">Australia</a>
          <a href="#">Canada</a>
          <a href="#">Japan</a>
          <a href="#">United Kingdom</a>
          <a href="#">United States</a>
        </div>
        <div className="footer__legal">
          <a href="#">Conditions of Use & Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
