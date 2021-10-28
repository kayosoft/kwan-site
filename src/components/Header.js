import React from 'react'

export const Header = (props) => {
    return (
    
    <header id="header" className="header fixed-top" >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="https://kwantutors.com/" className="logo d-flex align-items-center">
        <img src="assets/img/icon/logo.png" alt="" />
        <span></span>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#features">Our Solution</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a className="nav-link scrollto" href="#recent-blog-posts">Blog</a></li>
          <li><a className="nav-link scrollto" href="#footer">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  
  
    )
}

