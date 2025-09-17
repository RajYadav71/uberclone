import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SignupUser() {

  async function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const response = await fetch("http://localhost:3000/signup-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, email, password }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="auth-card user">
      <h2 className="auth-title">User Signup</h2>
      <form>
        <input className="auth-input" type="text" placeholder="Full Name"  id="name"required />
        <input className="auth-input" type="tel" placeholder="Phone Number"  id="phone"required />
        <input className="auth-input" type="email" placeholder="Email"  id="email"required />
        <input className="auth-input" type="password" placeholder="Password" id="password" required />
        <button className="auth-btn" type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      <p className="auth-switch">
        Already registered?{" "}
        <Link to="/login-user">Login</Link>
      </p>
    </div>
  );
}

export default SignupUser;
