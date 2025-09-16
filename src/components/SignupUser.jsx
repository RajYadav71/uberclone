import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SignupUser() {
  return (
    <div className="auth-card user">
      <h2 className="auth-title">User Signup</h2>
      <form>
        <input className="auth-input" type="text" placeholder="Full Name" required />
        <input className="auth-input" type="tel" placeholder="Phone Number" required />
        <input className="auth-input" type="email" placeholder="Email" required />
        <input className="auth-input" type="password" placeholder="Password" required />
        <button className="auth-btn" type="submit">Sign Up</button>
      </form>
      <p className="auth-switch">
        Already registered?{" "}
        <Link to="/login-user">Login</Link>
      </p>
    </div>
  );
}

export default SignupUser;
