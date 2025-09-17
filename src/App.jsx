import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User"; // user main page
import CaptainMain from "./CaptainMain"; // captain main page
import SignupUser from "./components/SignupUser";
import SignupCaptain from "./components/SignupCap";
import LoginUser from "./components/LoginUser";
import LoginCaptain from "./components/LoginCap";

function App() {
  // const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/captain" element={<CaptainMain />} />
        <Route path="/signup-user" element={<SignupUser />} />
        <Route path="/signup-captain" element={<SignupCaptain />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/login-captain" element={<LoginCaptain />} />
        {/* default "/" route showing your Uber homepage */}
        <Route
          path="/"
          element={
            <div className="app">
              <header className="header">
                <div className="nav-container">
                  <div className="logo">
                    <span className="uber-text">Uber</span>
                  </div>

                  <nav className="nav-links">
                    <a href="#" className="nav-link">
                      Ride
                    </a>
                    <div className="nav-dropdown">
                      <span className="nav-link">Earn ▾</span>
                      <div className="dropdown-card">
                        <a href="#" className="dropdown-item">
                          Drive
                        </a>
                        <a href="#" className="dropdown-item">
                          Delivery
                        </a>
                      </div>
                    </div>

                    <a href="#" className="nav-link">
                      Business
                    </a>
                    <div className="nav-dropdown">
                      <span className="nav-link">About ▾</span>
                      <div className="dropdown-card">
                        <a href="#" className="dropdown-item">
                          Our Company
                        </a>
                        <a href="#" className="dropdown-item">
                          How Uber Works
                        </a>
                        <a href="#" className="dropdown-item">
                          Careers
                        </a>
                        <a href="#" className="dropdown-item">
                          Safety
                        </a>
                        <a href="#" className="dropdown-item">
                          Newsroom
                        </a>
                        <a href="#" className="dropdown-item">
                          Investor Relations
                        </a>
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
                    <Link to="/login-captain" className="header-link">
                      Log in
                    </Link>
                    <Link to="/signup-captain" className="signup-btn">
                      Sign up
                    </Link>
                  </div>
                </div>
              </header>

              <div className="sub-nav">
                <div className="sub-nav-container">
                  <h2 className="page-title">Drive</h2>
                  <nav className="sub-nav-links">
                    <a href="#" className="sub-nav-link">
                      Requirements
                    </a>
                    <a href="#" className="sub-nav-link">
                      Driving basics
                    </a>
                    <a href="#" className="sub-nav-link">
                      Earnings
                    </a>
                    <a href="#" className="sub-nav-link">
                      Deactivations
                    </a>
                    <a href="#" className="sub-nav-link">
                      Safety
                    </a>
                    <a href="#" className="sub-nav-link">
                      Uber Pro
                    </a>
                    <a href="#" className="sub-nav-link">
                      Contact us
                    </a>
                  </nav>
                </div>
              </div>

              <main className="main-content">
                <div className="content-container">
                  <div className="text-section">
                    <h1 className="main-heading">
                      Drive when you want, make what you need
                    </h1>
                    <p className="sub-heading">Earn on your own schedule.</p>

                    <div className="cta-section">
                      <Link to="/signup" className="get-started-btn">
                        Get started
                      </Link>
                      <p className="signin-text">
                        Already have an account?{" "}
                        <Link to="/login-captain" className="signin-link">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="image-section">
                    <img
                      src="https://www.careeraddict.com/uploads/article/61365/how-to-become-an-uber-driver.png"
                      alt="Uber Driver"
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "16px",
                      }}
                    />
                  </div>
                </div>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;