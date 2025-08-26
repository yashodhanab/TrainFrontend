
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/NavBar";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import TrainBookingPage from "./Pages/TrainBookingPage";
import BookedTrainsPage from "./Pages/BookedTrainsPage";
import AboutUs from "./Pages/AboutUs";

function App() {

  const hideNavbarRoutes = ['/login'];
  return (
    <>
       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/available-trains" element={<TrainBookingPage />} />
        <Route path="/my-bookings" element={<BookedTrainsPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
