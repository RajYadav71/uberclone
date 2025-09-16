import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function SignupCaptain() {
  return (
    <div className="auth-card captain">
      <h2 className="auth-title">Captain Signup</h2>
      <form>
        <input className="auth-input" type="text" placeholder="Full Name" required />
        <input className="auth-input" type="tel" placeholder="Phone Number" required />
        <input className="auth-input" type="email" placeholder="Email" required />
        <input className="auth-input" type="password" placeholder="Password" required />
        <button className="auth-btn" type="submit">Sign Up</button>
      </form>
      <p className="auth-switch">
        Already registered?{" "}
        <Link to="/login-captain">Login</Link>
      </p>
        <p className="auth-user-link">
          <Link to="/signup-user">User Signup</Link>
        </p>
    </div>
  );
}

export default SignupCaptain;
