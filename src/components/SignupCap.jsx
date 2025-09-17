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
      window.location.href = "/login-captain";
    } else {
      alert("Error registering captain");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, sans-serif',
      overflow: "hidden"
    }}>
      {/* Left side */}
      <div style={{
        flex: "1.2",
        background: `linear-gradient(135deg, #000000 0%, #111827 25%, #1f2937 50%, #111827 75%, #000000 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "60px"
      }}>
        <div>
          <h1 style={{
            fontSize: "95px",
            fontWeight: "900",
            marginBottom: "20px",
            letterSpacing: "-4px"
          }}>Uber</h1>
          <h2 style={{ fontSize: "44px", fontWeight: "700", marginBottom: "20px" }}>
            Drive with Uber
          </h2>
          <p style={{ fontSize: "20px", maxWidth: "500px", margin: "0 auto", color: "rgba(255,255,255,0.8)" }}>
            Become a captain today. Earn money on your own schedule with reliable rides.
          </p>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div style={{
        flex: "1",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px"
      }}>
        <div style={{ width: "100%", maxWidth: "480px" }}>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <h1 style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#1e1e1e",
              marginBottom: "10px"
            }}>Captain Signup</h1>
            <p style={{ fontSize: "18px", color: "#6b7280" }}>
              Join as a captain and start earning
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "15px", fontWeight: "600", color: "#374151", marginBottom: "8px", display: "block" }}>Full Name</label>
              <input id="name" type="text" placeholder="Enter your full name" required
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "15px",
                  background: "#f9fafb"
                }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "15px", fontWeight: "600", color: "#374151", marginBottom: "8px", display: "block" }}>Phone Number</label>
              <input id="phone" type="tel" placeholder="Enter your phone number" required
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "15px",
                  background: "#f9fafb"
                }} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "15px", fontWeight: "600", color: "#374151", marginBottom: "8px", display: "block" }}>Email Address</label>
              <input id="email" type="email" placeholder="Enter your email address" required
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "15px",
                  background: "#f9fafb"
                }} />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label style={{ fontSize: "15px", fontWeight: "600", color: "#374151", marginBottom: "8px", display: "block" }}>Password</label>
              <input id="password" type="password" placeholder="Enter your password" required
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "15px",
                  background: "#f9fafb",
                  color:"black"
                }} />
            </div>

            <button type="submit"
              style={{
                width: "100%",
                padding: "18px",
                background: "linear-gradient(135deg, #000000, #1f2937)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "700",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                marginBottom: "30px"
              }}>
              Sign Up
            </button>
          </form>

          {/* Already registered */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "15px", color: "#6b7280" }}>
              Already registered?{" "}
              <Link to="/login-captain" style={{ fontWeight: "600", color: "#000" }}>
                Login
              </Link>
            </p>
          </div>

          {/* Switch to User Signup */}
          <div style={{
            textAlign: "center",
            paddingTop: "22px",
            marginTop: "18px",
            borderTop: "1px solid #f3f4f6"
          }}>
            <Link
              to="/signup-user"
              style={{
                display: "inline-block",
                marginTop: "12px",
                fontSize: "15px",
                color: "#000",
                fontWeight: "600",
                textDecoration: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Sign up as a User →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupCaptain;
