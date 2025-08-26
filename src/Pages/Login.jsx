





import { useState } from "react";
import axios from "axios";
import "./Login.css";
import loginImage from "../assets/IMG_1175.jpg";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function showSuccessMessage(text) {
  setMessage(`✅ ${text}`);}

////////////////////////////////////////////////////////////////////////////////////////////////////
  const switchTab = (tab) => {
    setActiveTab(tab);
    setEmail("");
    setPassword("");
    setUsername(""); 
    setMessage("");
  };
///////////////////////////////////////////////////////////////////////////////////////////////////
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted with:", { email, password });

    try {
      const res = await axios.post("https://train-book-backend.vercel.app/login", { email, password });
      console.log("Login response:", res.data);

      setMessage(res.data.message || "Login successful!");

      if (res.data.userId) {
        localStorage.setItem("userId", res.data.userId);
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };
/////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted with:", { username, email, password });

    try {
      const res = await axios.post("https://train-book-backend.vercel.app/signup", { username, email, password });
      console.log(res.data.message); 
      console.log("Signup response:", res.data);
      setMessage(res.data.message || "Signup successful!");
      if (res.data.userId) {
    localStorage.setItem("userId", res.data.userId);

    // Save success message in localStorage
    localStorage.setItem("signupMessage", res.data.message || "Signup successful!");
    alert("User account created successfully!");

    // Redirect to landing page
    setTimeout(() => {
    window.location.href = "/";
  }, 2000);
    }
    } catch (err) {
      console.error("Signup error:", err);
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };
  console.log("Current message:", message);



/////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="login-container">
      {/* {message && (
      <div className="popup-message">
        {message}
        <button className="close-btn" onClick={() => setMessage("")}>×</button>
      </div>
    )} */}
      {/* <div
        className="login-image"
        style={{ backgroundImage: `url(${loginImage})` }}
      /> */}
      <div className="login-image">
  <div className="intro-text">
    <h1>Welcome to TrainBook</h1>
    <p>Your hassle-free train booking experience</p>
  </div>
</div>

      <div className="login-form-wrapper">
        <div className="tab-selector">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => switchTab("login")}
          >
            Log In
          </button>
          <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => switchTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "login" ? (
          <form className="form" onSubmit={handleLogin} noValidate>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
                autoComplete="email"
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                required
                autoComplete="current-password"
              />
              <label>Password</label>
            </div>

            <button type="submit" className="btn primary-btn">
              Log In
            </button>
            <p className="message">{message}</p>
          </form>
        ) : (
          <form className="form" onSubmit={handleSignup} noValidate>
            <div className="input-group">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                required
                autoComplete="username"
              />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
                autoComplete="email"
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                required
                autoComplete="new-password"
              />
              <label>Password</label>
            </div>

            <button type="submit" className="btn secondary-btn">
              Create Account
            </button>
              <p className="message" style={{ color: "red", fontWeight: "bold" }}>{message}</p>
            <p className="message">{message}</p>
          </form>
        )}
      </div>
    </div>
    
  );
}

