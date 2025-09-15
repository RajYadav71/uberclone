import React, { useState } from "react";
import "./App.css";
import CaptainMain from "./CaptainMain"; // captain main page

function Signup() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true); // go to CaptainMain after login
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setSignedUp(true); // go to CaptainMain after signup
  };

  // after login → CaptainMain
  if (loggedIn) {
    return <CaptainMain />;
  }

  // after signup → CaptainMain
  if (signedUp) {
    return <CaptainMain />;
  }

  return (
    <div className="container">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          {/* Login Page */}
          <div className="flip-card-front">
            <h2>Uber Captain Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login as a User</button>
              <button type="submit">Login as a Captain</button>
            </form>
            <p>
              Don&apos;t have an account?{" "}
              <span onClick={() => setIsFlipped(true)}>Sign Up</span>
            </p>
          </div>

          {/* Signup Page */}
          <div className="flip-card-back">
            <h2>Uber Captain Signup</h2>
            <form onSubmit={handleSignup}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="text" placeholder="Vehicle Number" required />
              <button type="submit">Sign up as a User</button>
              <button type="submit">Sign up as a Captain</button>
            </form>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsFlipped(false)}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
