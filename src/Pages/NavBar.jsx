// import "./NavBar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">🚆 TrainBook</div>
//       <div className="nav-links">
//         <a href="#bookings">Bookings</a>
//         <a href="#trains">Trains</a>
//         <a href="#about">About Us</a>
//       </div>
//       <div className="auth-buttons">
//         <button className="btn signup">Sign Up</button>
//         <button className="btn signin">Sign In</button>
//       </div>
//     </nav>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
import trainIcon from '../assets/train.png'; // adjust path to your icon


export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if userId exists in localStorage
    const userId = localStorage.getItem("userId");
    setLoggedIn(!!userId); // true if userId exists, else false
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Clear login info
    setLoggedIn(false);
    navigate("/login"); // Redirect to login page or wherever you want

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
