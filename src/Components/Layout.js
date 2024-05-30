import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1> Khyath</h1>
        <nav className="navbar">
        <div className="navbar-logo">
            <a href="/"></a>
</div>
<ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Services</a></li>
        <li><a href="/services">AboutUs</a></li>
        <li><a href="/contact">ContactUs</a></li>
      </ul>
    </nav>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>Khyath Tech Media Private Limited</p>
      </footer>
    </div>
  );
};

export default Layout;
