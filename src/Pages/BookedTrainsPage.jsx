

import React, { useState, useEffect } from "react";
import "./BookedTrainsPage.css";

export default function BookedTrainsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editDueDates, setEditDueDates] = useState({}); // store edited due dates

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("https://train-book-backend.vercel.app/api/bookings");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this booking?")) {
  //     try {
  //       const res = await fetch(`https://train-book-backend.vercel.app/api/bookings/${id}`, {
  //         method: "DELETE",
  //       });

  //       if (!res.ok) {
  //         const errorData = await res.json();
  //         alert(`Failed to delete booking: ${errorData.message || "Unknown error"}`);
  //         return;
  //       }

  //       setBookings(bookings.filter((b) => b.bookingid !== id));
  //       alert(`Delete Successful`);
  //     } catch (error) {
  //       console.error("Delete error:", error);
  //       alert("Failed to delete booking due to network/server error");
  //     }
  //   }
  // };

  const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this booking?")) {
    try {
      const res = await fetch(`https://train-book-backend.vercel.app/api/bookings/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errorData = await res.json();
        alert(`Failed to delete booking: ${errorData.message || "Unknown error"}`);
        return;
      }

      setBookings(bookings.filter((b) => b.bookingid !== id));

      // Remove this alert, since it causes Selenium to fail
      // alert(`Delete Successful`);
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete booking due to network/server error");
    }
  }
};


  const handleUpdate = async (id) => {
    const newDueDate = editDueDates[id];
    if (!newDueDate) {
      alert("Please select a due date before updating");
      return;
    }

    try {
      const res = await fetch(`https://train-book-backend.vercel.app/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ duedate: newDueDate }),
      });


      console.log("Update response:", res);
      console.log("Update response status:", JSON.stringify({ duedate: newDueDate }));

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Failed to update due date: ${errorData.message || "Unknown error"}`);
        return;
      }

      // Update local state
      setBookings(
        bookings.map((b) =>
          b.bookingid === id ? { ...b, duedate: newDueDate } : b
        )
      );
      alert("Due date updated successfully");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update due date due to network/server error");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="booked-page">
      <h2>My Booked Trains</h2>
      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking.bookingid} className="booking-card">
              <div><strong>Train Name:</strong> {booking.train_name}</div>
              <div>
                <strong>Route:</strong> {booking.source} &rarr; {booking.destination}
              </div>
              <div><strong>Arrival to Destination:</strong> {booking.arrival}</div>
              <div><strong>Booked Time:</strong> {booking.booking_date}</div>
              <div><strong>Status:</strong> {booking.status}</div>
              <div><strong>Trip Date:</strong> {booking.duedate}</div>

              {/* Edit Due Date */}
              <input
                type="date"
                value={editDueDates[booking.bookingid] || ""}
                onChange={(e) =>
                  setEditDueDates({ ...editDueDates, [booking.bookingid]: e.target.value })
                }
              />
              <button
                className="update-btn"
                onClick={() => handleUpdate(booking.bookingid)}
              >
                Update Trip Date
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(booking.bookingid)}
              >
                Delete Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



