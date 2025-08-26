import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About TrainBook</h1>
        <p className="about-text">
          Welcome to <strong>TrainBook</strong> – your easy way to search and
          book train journeys across Sri Lanka.  
          We are dedicated to making train travel smoother, faster, and more
          reliable for everyone.
        </p>
        <p className="about-text">
          Our system provides real-time train information, booking options for
          different classes, and convenient access from anywhere. Whether you're
          traveling to the hills of Badulla, the northern city of Jaffna, or the
          coastal beauty of Galle, TrainBook helps you plan your trip with ease.
        </p>
        <p className="about-text">
          🚆 Safe • Reliable • Convenient
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
