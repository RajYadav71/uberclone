import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LoginUser() {
  return (
    <div className="auth-card user">
      <h2 className="auth-title">User Login</h2>
      <form>
        <input className="auth-input" type="email" placeholder="Email" required />
        <input className="auth-input" type="password" placeholder="Password" required />
        <button className="auth-btn" type="submit">Login</button>
      </form>
      <p className="auth-switch">
        Don’t have an account?{" "}
        <Link to="/signup-user">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginUser;
