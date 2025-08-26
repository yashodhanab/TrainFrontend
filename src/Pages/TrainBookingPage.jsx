


import React from "react";
import { useLocation } from "react-router-dom";
import "./TrainBookingPage.css";

export default function TrainBookingPage() {
  const location = useLocation();
  const trains = location.state?.trains || [];
  const bookingDate = location.state?.bookingDate;

  async function handleBook(train) {
    try {

      const userid = localStorage.getItem("userId");

      if (!userid) {
        alert("Please log in to book a train.");
        return;
      }


      const bookingData = {
        userid,              
        trainid: train.id,  
        seatclass: train.class, 
        booking_date: new Date().toISOString(), 
        status: "Confirmed",  
        duedate: bookingDate,


      };


      const response = await fetch("https://train-book-backend.vercel.app/book-train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Booking failed: ${errorData.message || "Unknown error"}`);
        return;
      }

      const result = await response.json();
      alert(`Train ${train.name} booked successfully! Booking ID: ${result.bookingId || ""}`);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed due to a network or server error.");
    }
  }

  return (
    <div className="booking-page">
      <h2>Available Trains</h2>
      {trains.length === 0 ? (
        <p className="no-trains-message">No Train to Display</p>
      ) : (
        <div className="train-list">
          {trains.map((train) => (
            <div key={train.id} className="train-card">
              <div className="train-header">
                <span className="train-number">{train.train_number}</span>
                <span className="train-name">{train.name}</span>
              </div>
              <div className="train-route">
                <strong>Route:</strong> {train.source} &rarr; {train.destination}
              </div>
              <div className="train-times">
                <span><strong>Departure:</strong> {train.departure}</span>
                <span><strong>Arrival:</strong> {train.arrival}</span>
                <button className="book-btn" onClick={() => handleBook(train)}>
                Book Now
              </button>
              </div>
              <div className="train-info">
                <span><strong>Class:</strong> {train.class}</span>
                <span><strong>Price:</strong> Rs. {train.price}</span>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
