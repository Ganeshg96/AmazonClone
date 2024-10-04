import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footer__backToTop">
        <button onClick={scrollToTop} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
          Back to top
        </button>
      </div>
      <div className="footer__links">
        <div className="footer__section">
          <h3>Get to Know Us</h3>
          <Link to="#">About Us</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Press Releases</Link>
          <Link to="#">Amazon Science</Link>
        </div>
        <div className="footer__section">
          <h3>Connect with Us</h3>
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
        </div>
        <div className="footer__section">
          <h3>Make Money with Us</h3>
          <Link to="#">Sell on Amazon</Link>
          <Link to="#">Sell under Amazon Accelerator</Link>
          <Link to="#">Protect and Build Your Brand</Link>
          <Link to="#">Amazon Global Selling</Link>
          <Link to="#">Supply to Amazon</Link>
        </div>
        <div className="footer__section">
          <h3>Let Us Help You</h3>
          <Link to="#">Your Account</Link>
          <Link to="#">Returns Centre</Link>
          <Link to="#">100% Purchase Protection</Link>
          <Link to="#">Amazon App Download</Link>
          <Link to="#">Help</Link>
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
          <Link to="#">India</Link>
          <Link to="#">Australia</Link>
          <Link to="#">Canada</Link>
          <Link to="#">Japan</Link>
          <Link to="#">United Kingdom</Link>
          <Link to="#">United States</Link>
        </div>
        <div className="footer__legal">
          <Link to="#">Conditions of Use & Sale</Link>
          <Link to="#">Privacy Notice</Link>
          <Link to="#">Interest-Based Ads</Link>
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
