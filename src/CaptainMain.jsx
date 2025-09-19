import React, { useState } from "react";
import "./App.css";
import Verification from "./verification";

function CaptainMain() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [currentView, setCurrentView] = useState("dashboard");
  const [submittedData, setSubmittedData] = useState(null);
  return (
    <div className="captain-main">
      {/* Navbar */}
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

      {/* Sub Navbar */}
      <div className="sub-nav">
        <div className="sub-nav-container">
          <h2 className="page-title">{currentView === "verification" ? "Document Verification" : "Captain Dashboard"}</h2>
          <nav className="sub-nav-links">
            <a href="#" className="sub-nav-link" onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}>My Rides</a>
            <a href="#" className="sub-nav-link" onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}>Earnings</a>
            <a href="#" className="sub-nav-link" onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}>Ratings</a>
            <a href="#" className="sub-nav-link" onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}>Support</a>
            <a href="#" className="sub-nav-link" onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}>Profile</a>
            <a href="#" className="sub-nav-link" onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}>Settings</a>
            <a href="#" className={`sub-nav-link ${currentView === "verification" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentView("verification"); }}>Documents verification</a>
          </nav>
        </div>
      </div>

      {/* Conditional Rendering */}
      {currentView === "verification" ? (
        <Verification onSubmitSuccess={(data) => {
          setSubmittedData(data);
          setTimeout(() => {
            setCurrentView("dashboard");
          }, 2000);
        }} />
      ) : (
        <>

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

            {/* Orders Section */}
            <div className="card orders-card">
              <h2>User Orders</h2>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Pickup</th>
                    <th>Drop</th>
                    <th>Fare</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td><span className="status-pending">Pending</span></td>
                    <td>
                      <button className="action-btn accept">Accept</button>
                      <button className="action-btn reject">Reject</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </>
      )}

      {/* Enhanced Footer */}
      <footer className="enhanced-footer">
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-section">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Press</a></li>
                <li><a href="#" className="footer-link">Investors</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Products</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Ride</a></li>
                <li><a href="#" className="footer-link">Drive</a></li>
                <li><a href="#" className="footer-link">Eat</a></li>
                <li><a href="#" className="footer-link">Business</a></li>
                <li><a href="#" className="footer-link">Freight</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Global Citizenship</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Safety</a></li>
                <li><a href="#" className="footer-link">Diversity & Inclusion</a></li>
                <li><a href="#" className="footer-link">Sustainability</a></li>
                <li><a href="#" className="footer-link">Accessibility</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Help Center</a></li>
                <li><a href="#" className="footer-link">Community Guidelines</a></li>
                <li><a href="#" className="footer-link">Driver Support</a></li>
                <li><a href="#" className="footer-link">Rider Support</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Cookie Policy</a></li>
                <li><a href="#" className="footer-link">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-description">Get the latest updates and driver tips delivered to your inbox.</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Social Media & App Links */}
          <div className="footer-social">
            <div className="social-links">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-link facebook">📘</a>
                <a href="#" className="social-link twitter">🐦</a>
                <a href="#" className="social-link instagram">📷</a>
                <a href="#" className="social-link linkedin">💼</a>
                <a href="#" className="social-link youtube">📺</a>
              </div>
            </div>

            <div className="app-links">
              <h4 className="app-title">Download Our App</h4>
              <div className="app-buttons">
                <a href="#" className="app-btn app-store">📱 App Store</a>
                <a href="#" className="app-btn google-play">🤖 Google Play</a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <span className="uber-text">© {new Date().getFullYear()} Uber Clone. All rights reserved.</span>
              </div>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Privacy</a>
                <a href="#" className="footer-bottom-link">Terms</a>
                <a href="#" className="footer-bottom-link">Cookies</a>
                <a href="#" className="footer-bottom-link">Accessibility</a>
              </div>
              <div className="language-selector-footer">
                <select className="language-dropdown-footer">
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CaptainMain;
