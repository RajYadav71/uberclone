import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SignupCaptain() {
  async function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/signup-captain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
      alert("Captain registered successfully");
      window.location.href = "/login-captain"; // ✅ matches App.jsx
    } else {
      alert("Error registering captain");
    }
  }

  return (
    <div className="auth-card captain">
      <h2 className="auth-title">Captain Signup</h2>
      {/* ✅ onSubmit fixes refresh issue */}
      <form onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          placeholder="Full Name"
          id="name"
          required
        />
        <input
          className="auth-input"
          type="tel"
          placeholder="Phone Number"
          id="phone"
          required
        />
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          id="email"
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          id="password"
          required
        />
        <button className="auth-btn" type="submit">
          Sign Up
        </button>
      </form>
      <p className="auth-switch">
        Already registered? <Link to="/login-captain">Login</Link>
      </p>
      <p className="auth-user-link">
        <Link to="/signup-user">User Signup</Link>
      </p>
    </div>
  );
}

export default SignupCaptain;