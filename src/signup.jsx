import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Signup() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="container">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          {/* Login Page */}
          <div className="flip-card-front">
            <h2>Uber Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />

              <Link to="/user" className="btn">Login as a User</Link>
              <Link to="/captain" className="btn">Login as a Captain</Link>
            </form>
            <p>
              Don&apos;t have an account?{" "}
              <span onClick={() => setIsFlipped(true)} style={{cursor:"pointer"}}>
                Sign Up
              </span>
            </p>
          </div>

          {/* Signup Page */}
          <div className="flip-card-back">
            <h2>Uber Signup</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="text" placeholder="Vehicle Number" required />

              <Link to="/user" className="btn">Sign up as a User</Link>
              <Link to="/captain" className="btn">Sign up as a Captain</Link>
            </form>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsFlipped(false)} style={{cursor:"pointer"}}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
