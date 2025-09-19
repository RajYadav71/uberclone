import React from "react";
import "./User.css";

function App2() {
  return (
    <>
      <Navbar />
      <Main />
      <ChooseRide />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="10" fill="#4ade80" />
            <path
              d="M6 10 L10 14 L14 6"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <span className="navbar-brand">Omnijek</span>
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Products <span className="navbar-dropdown">&#9662;</span>
        </a>
        <a href="#" className="navbar-link">
          Company
        </a>
        <a href="#" className="navbar-link">
          Blog
        </a>
        <a href="#" className="navbar-link">
          Log in
        </a>
        <button className="navbar-signup">Sign up</button>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <main className="main-container">
      <div className="location-form">
        <h2 className="form-title">Book Your Ride</h2>
        <input
          type="text"
          className="location-input"
          id="pickup"
          placeholder="Pickup location"
        />
        <input
          type="text"
          id="dropoff"
          className="location-input"
          placeholder="Drop location"
        />
      </div>

      <div className="map-container">
        <div className="real-map">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            style={{ border: 1, borderRadius: '16px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160994841!2d72.74109999999999!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b0c0f0e7b%3A0x2b2b2b2b2b2b2b2b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1663071234567!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

// Fix: Pass ride info to bookRide and use input values
async function bookRide(ride) {
  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  const date = new Date().toISOString();
  const userName = localStorage.getItem("userName");

  if (!pickup || !dropoff) {
    alert('Please enter pickup and drop locations.');
    return;
  }

  const response = await fetch('http://localhost:3000/bookRide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pickup,
      dropoff,
      date,
      car: ride.name,
      seats: ride.seats,
      price: ride.price,
      userName
    }),
  });

  const data = await response.json();
  console.log(data);

  if (response.ok) {
    const req = document.getElementById("req");
    req.style.display = "block";
  } else {
    alert('Failed to book ride. Please try again.');
  }
}

function ChooseRide() {
  const rides = [
    {
      id: 1,
      name: 'UberX',
      desc: 'Affordable, everyday rides',
      price: '₹245',
      seats: '4',
      img: 'https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg',
    },
    {
      id: 2,
      name: 'Comfort',
      desc: 'Extra legroom, newer cars',
      price: '₹289',
      seats: '4',
      img: 'https://tse3.mm.bing.net/th/id/OIP.yzaDkS-4u7I5cWUjSsKNOAHaEK?pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Premier',
      desc: 'Premium rides in luxury cars',
      price: '₹445',
      seats: '4',
      img: 'https://tse3.mm.bing.net/th/id/OIP.0h_p-K7h14PaqFxHbDU3_gHaEK?pid=Api&P=0&h=180',
    },
    {
      id: 4,
      name: 'SUV',
      desc: 'Spacious rides for groups',
      price: '₹545',
      seats: '6',
      img: 'https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=311/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82ZDM1NDkxOS0xOGIwLTQ1ZDAtYTE1MS01MDFhYjRjNGIxMTQucG5n',
    }
  ];

  return (
    <section className="choose-ride-section">
      <h2 className="choose-ride-title">Choose Your Ride</h2>
      <div className="rides-list">
        {rides.map(ride => (
          <div className="ride-card" key={ride.id}>
            <div className="ride-img-wrap">
              <img src={ride.img} alt={ride.name} className="ride-img" />
            </div>
            <div className="ride-info">
              <div className="ride-name">{ride.name}</div>
              <div className="ride-desc">{ride.desc}</div>
              <div className="ride-seats">Seats: {ride.seats}</div>
            </div>
            <div className="ride-action">
              <div className="ride-price">{ride.price}</div>
              <button
                className="ride-book-btn"
                onClick={() => bookRide(ride)}
              >
                Book Ride
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="wait" id="req">
        <p className="req">waiting for captrain to approve</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo-circle">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#4ade80" />
              <path
                d="M6 10 L10 14 L14 6"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <span className="footer-logo-text">Omnijek</span>
          <p className="footer-tagline">Your ride, your way.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#">Products</a>
          <a href="#">Company</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <p>📍 Mumbai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@omnijek.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Omnijek. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App2;
