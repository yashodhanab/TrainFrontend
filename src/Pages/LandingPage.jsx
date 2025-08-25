import "./LandingPage.css";
import TrainSearch from "./TrainSearch";


export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-box">
        <h1>Welcome to TrainBook</h1>
        <p>Find and book your train seats easily and quickly.</p>
      </div>
      <div className="train-search-container">
          <TrainSearch />
        </div>
    </div>
  );
}




