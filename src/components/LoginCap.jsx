import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LoginCaptain() {
    return (
        <div className="auth-card captain">
            <h2 className="auth-title">Captain Login</h2>
            <form>
                <input className="auth-input" type="email" placeholder="Email" required />
                <input className="auth-input" type="password" placeholder="Password" required />
                <button className="auth-btn" type="submit">Login</button>
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


