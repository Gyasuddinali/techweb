import React from 'react';
// import '../App.css';
import { Link, NavLink } from 'react-router-dom'
import About from './About';
import Contact from './Contact';

function Navbar() {
  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <div>
            <span>GET IN TOUCH</span>
            <span>(+91)-9199245536</span>
          </div>
          <div>
            <span>OFFICE ADDRESS</span> <br></br>  
            <span>Shop No. 31, Ali Complex, Siwan 841226</span>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="logo">
          <span>GA TECH SOLUTION</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="/" >HOME</a></li>
         
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/service">SERVICES</a></li>
          <li><a href="/shop">SHOP</a></li>
          <li><a href="/whyus">WHY US</a></li>
          <li><a href="/blogs">BLOGS</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
        
        <a href="/bookservice"> <button className="book-service">  BOOK MY SERVICE</button></a>
      </nav>
    </header>
  );
}

export default Navbar;

