import React, { useEffect, useState } from "react";
import "./App.css";
import App from "./App"; // import your home page

function Loading() {
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Show "Connecting..." after 1.5s
    const timer1 = setTimeout(() => setShowMessage(true), 1500);

    // Redirect to home page after 3s
    const timer2 = setTimeout(() => setRedirect(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (redirect) {
    return <App />; // Go back to your main App.jsx
  }

  return (
    <div className="loading-container">
      {!showMessage ? (
        <h2>Please wait...................</h2>
      ) : (
        <h2>Connecting towards Uber Captain </h2>
      )}
    </div>
  );
}

export default Loading;
