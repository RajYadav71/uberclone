import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import User from "../User.jsx";

function LoginUser() {
  async function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const response = await fetch("http://localhost:5000/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // Redirect to user dashboard or homepage
      window.location.href = "/User"; // Change this to your desired route
    } 
  }



  return (
    <div className="auth-card user">
      <h2 className="auth-title">User Login</h2>
      <form>
        <input className="auth-input" type="email" placeholder="Email" id="email" required />
        <input className="auth-input" type="password" placeholder="Password"  id="password"required />
        <button className="auth-btn" type="submit" onClick={handleSubmit}>Login</button>
      </form>
      <p className="auth-switch">
        Don’t have an account?{" "}
        <Link to="/signup-user">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginUser;
