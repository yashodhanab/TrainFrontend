// import { useState } from "react";
// import "./Login.css";
// import loginImage from "../assets/IMG_1175.jpg"; // replace with your image path

// export default function Login() {
//   const [activeTab, setActiveTab] = useState("login");

//   return (
//     <div className="login-container">
//       <div
//         className="login-image"
//         style={{ backgroundImage: `url(${loginImage})` }}
//       />
//       <div className="login-form-wrapper">
//         <div className="tab-selector">
//           <button
//             className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
//             onClick={() => setActiveTab("login")}
//             aria-label="Log In Tab"
//           >
//             Log In
//           </button>
//           <button
//             className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
//             onClick={() => setActiveTab("signup")}
//             aria-label="Sign Up Tab"
//           >
//             Sign Up
//           </button>
//         </div>

//         {activeTab === "login" ? (
//           <form className="form" noValidate>
//             <div className="input-group">
//               <input type="email" id="email" required />
//               <label htmlFor="email">Email</label>
//             </div>
//             <div className="input-group">
//               <input type="password" id="password" required />
//               <label htmlFor="password">Password</label>
//             </div>

//             <button type="submit" className="btn primary-btn">
//               Log In
//             </button>

//             <div className="forgot-password">
//               <a href="#forgot">Forgot password?</a>
//             </div>
//           </form>
//         ) : (
//           <form className="form" noValidate>
//             <div className="input-group">
//               <input type="email" id="signup-email" required />
//               <label htmlFor="signup-email">Email</label>
//             </div>
//             <div className="input-group">
//               <input type="password" id="signup-password" required />
//               <label htmlFor="signup-password">Password</label>
//             </div>
//             <div className="input-group">
//               <input type="password" id="confirm-password" required />
//               <label htmlFor="confirm-password">Confirm Password</label>
//             </div>

//             <button type="submit" className="btn secondary-btn">
//               Create Account
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
















// import { useState } from "react";
// import axios from "axios";
// import "./Login.css";
// import loginImage from "../assets/IMG_1175.jpg";

// export default function Login() {
//   const [activeTab, setActiveTab] = useState("login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   // Clear form and messages on tab switch
//   const switchTab = (tab) => {
//     setActiveTab(tab);
//     setEmail("");
//     setPassword("");
//     setMessage("");
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log('Login form submitted:', { email, password });
//     try {
//       const res = await axios.post("http://localhost:3000/login", {
//         email,
//         password,
//       });
//       setMessage(res.data.message || "Login successful!");

//       // Store userId in localStorage (or do other auth logic)
//       if (res.data.userId) {
//         localStorage.setItem("userId", res.data.userId);
//         // Optional: redirect after login
//         // window.location.href = "/dashboard";
//       }
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3000/signup", {
//         email,
//         password,
//       });
//       setMessage(res.data.message || "Signup successful!");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div
//         className="login-image"
//         style={{ backgroundImage: `url(${loginImage})` }}
//       />
//       <div className="login-form-wrapper">
//         <div className="tab-selector">
//           <button
//             className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
//             onClick={() => switchTab("login")}
//           >
//             Log In
//           </button>
//           <button
//             className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
//             onClick={() => switchTab("signup")}
//           >
//             Sign Up
//           </button>
//         </div>

//         {activeTab === "login" ? (
//           <form className="form" onSubmit={handleLogin}>
//             <div className="input-group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder=" "
//                 required
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder=" "
//                 required
//               />
//               <label>Password</label>
//             </div>

//             <button type="submit" className="btn primary-btn">
//               Log In
//             </button>
//             <p className="message">{message}</p>
//           </form>
//         ) : (
//           <form className="form" onSubmit={handleSignup}>
//             <div className="input-group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder=" "
//                 required
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder=" "
//                 required
//               />
//               <label>Password</label>
//             </div>

//             <button type="submit" className="btn secondary-btn">
//               Create Account
//             </button>
//             <p className="message">{message}</p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }









// import { useState } from "react";
// import axios from "axios";
// import "./Login.css";
// import loginImage from "../assets/IMG_1175.jpg";

// export default function Login() {
//   const [activeTab, setActiveTab] = useState("login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   // Clear form inputs and messages when switching tabs
//   const switchTab = (tab) => {
//     setActiveTab(tab);
//     setEmail("");
//     setPassword("");
//     setMessage("");
//   };
  
//   const handleLogin = async (e) => {
//   e.preventDefault();
//   console.log("Login form submitted with:", { email, password });

//   try {
//     const res = await axios.post("http://localhost:3000/login", { email, password });
//     console.log("Login response:", res.data);

//     setMessage(res.data.message || "Login successful!");



//     if (res.data.userId) {
//       localStorage.setItem("userId", res.data.userId);
//       // Redirect to landing page after successful login
//       window.location.href = "/";  // or "/landing" or your landing page route
//     }
//   } catch (err) {
//     console.error("Login error:", err);
//     setMessage(err.response?.data?.message || "Login failed");
//   }
// };


//   const handleSignup = async (e) => {
//     e.preventDefault();
//     console.log("Signup form submitted with:", { email, password });

//     try {
//       const res = await axios.post("http://localhost:3000/signup", { email, password });
//       console.log("Signup response:", res.data);
//       setMessage(res.data.message || "Signup successful!");
//     } catch (err) {
//       console.error("Signup error:", err);
//       setMessage(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div
//         className="login-image"
//         style={{ backgroundImage: `url(${loginImage})` }}
//       />
//       <div className="login-form-wrapper">
//         <div className="tab-selector">
//           <button
//             className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
//             onClick={() => switchTab("login")}
//           >
//             Log In
//           </button>
//           <button
//             className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
//             onClick={() => switchTab("signup")}
//           >
//             Sign Up
//           </button>
//         </div>

//         {activeTab === "login" ? (
//           <form className="form" onSubmit={handleLogin} noValidate>
//             <div className="input-group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder=" "
//                 required
//                 autoComplete="email"
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder=" "
//                 required
//                 autoComplete="current-password"
//               />
//               <label>Password</label>
//             </div>

//             <button type="submit" className="btn primary-btn">
//               Log In
//             </button>
//             <p className="message">{message}</p>
//           </form>
//         ) : (
//           <form className="form" onSubmit={handleSignup} noValidate>
//             <div className="input-group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder=" "
//                 required
//                 autoComplete="email"
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder=" "
//                 required
//                 autoComplete="new-password"
//               />
//               <label>Password</label>
//             </div>

//             <button type="submit" className="btn secondary-btn">
//               Create Account
//             </button>
//             <p className="message">{message}</p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }










import { useState } from "react";
import axios from "axios";
import "./Login.css";
import loginImage from "../assets/IMG_1175.jpg";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // new state for username
  const [message, setMessage] = useState("");

  function showSuccessMessage(text) {
  setMessage(`✅ ${text}`);}

  // Clear form inputs and messages when switching tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
    setEmail("");
    setPassword("");
    setUsername(""); // clear username as well
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

