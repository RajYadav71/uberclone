import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LoginCaptain() {
    async function handleSubmit(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const response = await fetch("http://localhost:3000/login-captain", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            // Redirect to captain dashboard or homepage
            window.location.href = "/CaptainMain";
        }
    }
    return (
        <div className="auth-card captain">
            <h2 className="auth-title">Captain Login</h2>
            <form>
                <input className="auth-input" type="email" placeholder="Email"  id="email"required />
                <input className="auth-input" type="password" placeholder="Password"  id="password"required />
                <button className="auth-btn" type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <p className="auth-switch">
                Don’t have an account?{" "}
                <Link to="/signup-captain">Sign Up</Link>
            </p>
            <p className="auth-user-link">
                <Link to="/login-user">User Login</Link>
            </p>
        </div>
    );
}

export default LoginCaptain;


