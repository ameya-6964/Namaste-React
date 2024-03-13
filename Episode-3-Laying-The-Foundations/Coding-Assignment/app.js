import React from "react";
import ReactDOM from "react-dom/client";
import headerLogo from "./images/logo.webp";
import profileLogo from "./images/dummy.jpg";

// Header Component
const Header = () => (
  <header className="header">
    <img src={headerLogo} alt="Logo" className="logo" />
    <input type="text" placeholder="Search Courses" className="search-bar" />
    <div className="buttons">
      <button className="login-button">Login</button>
      <button className="signup-button">Sign Up</button>
    </div>
    <div className="user-icon">
      <img src={profileLogo} alt="" />
    </div>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
