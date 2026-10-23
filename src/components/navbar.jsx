import React from "react";

const Navbar = () => (
  <nav className="navbar" aria-label="Main navigation">
    <a className="navbar-brand" href="#top" aria-label="Brightside home">
      <span className="brand-mark">✦</span>
      <span>brightside<span className="brand-period">.</span><small>CLASSROOM</small></span>
    </a>
    <div className="navbar-links">
      <a className="navbar-link active" href="#overview">Overview</a>
      <a className="navbar-link" href="#records">Students</a>
    </div>
    <div className="nav-profile"><span className="online-dot" /> <span>Teacher space</span><span className="profile-avatar">👩‍🏫</span></div>
  </nav>
);

export default Navbar;
