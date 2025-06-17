import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <nav>
          <ul className="nav-list">
            <li><a href="#links" className="nav-link">Links</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;