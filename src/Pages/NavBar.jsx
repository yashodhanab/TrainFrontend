

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
import trainIcon from '../assets/train.png'; 


export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const userId = localStorage.getItem("userId");
    setLoggedIn(!!userId); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setLoggedIn(false);
    navigate("/login"); 

  };

  return (
    <nav className="navbar">
      <div className="logo">
  <Link to="/">
    <img src={trainIcon} alt="Train Icon" className="logo-icon" />
    TrainBook
  </Link>
</div>

      <div className="nav-links">
        <Link to="/available-trains">Bookings</Link>
        <Link to="/my-bookings">Booked Trains</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div className="auth-buttons">
        {!loggedIn ? (
          <>
            <Link to="/signup">
              <button className="btn signup">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="btn signin">Sign In</button>
            </Link>
          </>
        ) : (
          <button className="btn signout" onClick={handleLogout}>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}
