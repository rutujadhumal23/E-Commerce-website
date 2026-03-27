import React from 'react';
import './Footerr.css'

function Footerr() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: laxman.jagtap1974@gmail.com</p>
          <p>Phone: 7744072774</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/brands">Brands</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon-link" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" className="icon-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" className="icon-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2016  Shree Samarth Earthmover Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footerr;

