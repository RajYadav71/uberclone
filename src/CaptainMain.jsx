import React from "react";
import "./App.css";

function CaptainMain() {
  return (
    <div className="captain-main">
      {/* Main Navbar (same as App.jsx) */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <span className="uber-text">Uber</span>
          </div>

          <nav className="nav-links">
            <a href="#" className="nav-link">Ride</a>

            <div className="nav-dropdown">
              <span className="nav-link">Earn ▾</span>
              <div className="dropdown-card">
                <a href="#" className="dropdown-item">Drive</a>
                <a href="#" className="dropdown-item">Delivery</a>
              </div>
            </div>

            <a href="#" className="nav-link">Business</a>

            <div className="nav-dropdown">
              <span className="nav-link">About ▾</span>
              <div className="dropdown-card">
                <a href="#" className="dropdown-item">Our Company</a>
                <a href="#" className="dropdown-item">How Uber Works</a>
                <a href="#" className="dropdown-item">Careers</a>
                <a href="#" className="dropdown-item">Safety</a>
                <a href="#" className="dropdown-item">Newsroom</a>
                <a href="#" className="dropdown-item">Investor Relations</a>
              </div>
            </div>
          </nav>

          <div className="header-right">
            <div className="language-selector">
              <select className="language-dropdown" defaultValue="en">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
            <a href="#" className="header-link">Help</a>
            <a href="#" className="header-link">Log out</a>
          </div>
        </div>
      </header>

      {/* Sub Navbar (copied from App.jsx) */}
      <div className="sub-nav">
        <div className="sub-nav-container">
          <h2 className="page-title">Captain Dashboard</h2>
          <nav className="sub-nav-links">
            <a href="#" className="sub-nav-link">My Rides</a>
            <a href="#" className="sub-nav-link">Earnings</a>
            <a href="#" className="sub-nav-link">Ratings</a>
            <a href="#" className="sub-nav-link">Support</a>
            <a href="#" className="sub-nav-link">Profile</a>
            <a href="#" className="sub-nav-link">Settings</a>
          </nav>
        </div>
      </div>

      {/* Main Captain Page Content */}
      <main className="captain-content">
        <div className="card">
          <h2>Your Dashboard</h2>
          <p>Check your rides, earnings, and performance here.</p>
        </div>

        <div className="card">
          <h2>Active Rides</h2>
          <p>No active rides right now.</p>
        </div>

        <div className="card">
          <h2>Profile</h2>
          <p>Update your vehicle, documents, and settings.</p>
        </div>
      </main>
    </div>
  );
}

export default CaptainMain;
