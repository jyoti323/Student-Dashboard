import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Student Dashboard</div>
      <div className="navbar-links">
        <span className="navbar-link">Overview</span>
        <span className="navbar-link">Records</span>
      </div>
    </nav>
  );
};

export default Navbar;