import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">A Trip to Remember</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#pictures" className="nav-link">Pictures</a></li>
            <li><a href="#more_info" className="nav-link">More Info</a></li>
            <li><a href="#about_me" className="nav-link">About Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;