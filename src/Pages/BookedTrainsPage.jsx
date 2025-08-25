// import React, { useState } from "react";
// import "./BookedTrainsPage.css";

// const initialBookings = [
//   {
//     id: 1,
//     from: "Colombo",
//     to: "Kandy",
//     departure: "08:00 AM",
//     arrival: "12:00 PM",
//     classType: "Economy",
//     price: 500,
//   },
//   {
//     id: 2,
//     from: "Colombo",
//     to: "Galle",
//     departure: "09:30 AM",
//     arrival: "11:30 AM",
//     classType: "Business",
//     price: 800,
//   },
// ];

// export default function BookedTrainsPage() {
//   const [bookings, setBookings] = useState(initialBookings);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       setBookings(bookings.filter((booking) => booking.id !== id));
//     }
//   };

//   const handleEdit = (id) => {
//     alert(`Edit booking with ID ${id} - implement your edit logic here.`);
//     // You can later replace with a modal or redirect to edit page
//   };

//   return (
//     <div className="booked-page">
//       <h2>My Booked Trains</h2>
//       {bookings.length === 0 ? (
//         <p className="no-bookings">No bookings found.</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="booking-card">
//               <div className="booking-route">
//                 <span>{booking.from}</span> &rarr; <span>{booking.to}</span>
//               </div>
//               <div className="booking-details">
//                 <span><strong>Departure:</strong> {booking.departure}</span>
//                 <span><strong>Arrival:</strong> {booking.arrival}</span>
//               </div>
//               <div className="booking-class-price">
//                 <span>{booking.classType} Class</span>
//                 <span>Rs. {booking.price}</span>
//               </div>
//               <div className="booking-actions">
//                 <button className="edit-btn" onClick={() => handleEdit(booking.id)}>
//                   Edit
//                 </button>
//                 <button className="delete-btn" onClick={() => handleDelete(booking.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }












// import React, { useState, useEffect } from "react";
// import "./BookedTrainsPage.css";

// export default function BookedTrainsPage() {
//   const [bookings, setBookings] = useState(() => {
//     // Load bookings from localStorage or empty array if none
//     const stored = localStorage.getItem("bookedTrains");
//     return stored ? JSON.parse(stored) : [];
//   });

//   // Update localStorage whenever bookings change
//   useEffect(() => {
//     localStorage.setItem("bookedTrains", JSON.stringify(bookings));
//   }, [bookings]);

//   const handleDelete = (id) => {
//   if (window.confirm("Are you sure you want to delete this booking?")) {
//     const updated = bookings.filter((b) => b.id !== id);
//     setBookings(updated);
//     localStorage.setItem("bookedTrains", JSON.stringify(updated));
//   }
// };


//   return (
//     <div className="booked-page">
//       <h2>My Booked Trains</h2>
//       {bookings.length === 0 ? (
//         <p className="no-bookings">No bookings found.</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="booking-card">
//   <div><strong>Train Name:</strong> {booking.name}</div>
//   <div>
//     <strong>Route:</strong> {booking.source} &rarr; {booking.destination}
//   </div>
//   <div><strong>Arrival:</strong> {booking.arrival}</div>
//   <div><strong>Booked Time:</strong> {booking.bookingTime}</div>
//   <div><strong>Status:</strong> {booking.bookingStatus}</div>
//   <button className="delete-btn" onClick={() => handleDelete(booking.id)}>
//     Delete
//   </button>
// </div>

//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




////////////////////////////////////////finalcode////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import "./BookedTrainsPage.css";

// export default function BookedTrainsPage() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingId, setEditingId] = useState(null);
//   const [newDueDate, setNewDueDate] = useState("");

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/bookings");
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setBookings(data);
//       } catch (err) {
//         console.error("Error fetching bookings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       try {
//         const res = await fetch(`http://localhost:3000/api/bookings/${id}`, {
//           method: "DELETE",
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           alert(`Failed to delete booking: ${errorData.message || "Unknown error"}`);
//           return;
//         }

//         setBookings(bookings.filter((b) => b.id !== id));
//         alert(`Delete Successful`);
//       } catch (error) {
//         console.error("Delete error:", error);
//         alert("Failed to delete booking due to network/server error");
//       }
//     }
//   };

//   const handleEditClick = (booking) => {
//     setEditingId(booking.id);
//     setNewDueDate(booking.duedate ? booking.duedate.split("T")[0] : ""); // format if datetime
//   };

//   const handleCancelEdit = () => {
//     setEditingId(null);
//     setNewDueDate("");
//   };

//   const handleSave = async (id) => {
//     if (!newDueDate) {
//       alert("Please select a valid due date.");
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:3000/api/bookings/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ duedate: newDueDate }),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         alert(`Failed to update due date: ${errorData.message || "Unknown error"}`);
//         return;
//       }

//       // Update local bookings state with new due date
//       setBookings(
//         bookings.map((b) =>
//           b.id === id ? { ...b, duedate: newDueDate } : b
//         )
//       );

//       alert("Due date updated successfully");
//       setEditingId(null);
//       setNewDueDate("");
//     } catch (error) {
//       console.error("Error updating due date:", error);
//       alert("Failed to update due date due to network/server error");
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="booked-page">
//       <h2>My Booked Trains</h2>
//       {bookings.length === 0 ? (
//         <p className="no-bookings">No bookings found.</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="booking-card">
//               <div><strong>Train Name:</strong> {booking.train_name}</div>
//               <div>
//                 <strong>Route:</strong> {booking.source} &rarr; {booking.destination}
//               </div>
//               <div><strong>Arrival:</strong> {booking.arrival}</div>
//               <div><strong>Booked Time:</strong> {booking.booking_date}</div>
//               <div><strong>Status:</strong> {booking.status}</div>
//               <div>
//                 <strong>Due Date:</strong>{" "}
//                 {editingId === booking.id ? (
//                   <>
//                     <input
//                       type="date"
//                       value={newDueDate}
//                       onChange={(e) => setNewDueDate(e.target.value)}
//                       min={new Date().toISOString().split("T")[0]}
//                     />
//                     <button onClick={() => handleSave(booking.id)}>Save</button>
//                     <button onClick={handleCancelEdit}>Cancel</button>
//                   </>
//                 ) : (
//                   <>
//                     {booking.duedate ? booking.duedate.split("T")[0] : "Not set"}
//                     <button onClick={() => handleEditClick(booking)}>Edit</button>
//                   </>
//                 )}
//               </div>
//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(booking.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


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
        alert(`Delete Successful`);
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





// import React, { useState, useEffect } from "react";
// import "./BookedTrainsPage.css";

// export default function BookedTrainsPage() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingId, setEditingId] = useState(null);
//   const [newDueDate, setNewDueDate] = useState("");

//   useEffect(() => {
//     // Fetch data from backend
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/bookings");
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setBookings(data);
//       } catch (err) {
//         console.error("Error fetching bookings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       try {
//         const res = await fetch(`http://localhost:3000/api/bookings/${id}`, {
//           method: "DELETE",
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           alert(`Failed to delete booking: ${errorData.message || "Unknown error"}`);
//           return;
//         }

//         setBookings(bookings.filter((b) => b.id !== id));
//         alert("Delete Successful");
//       } catch (error) {
//         console.error("Delete error:", error);
//         alert("Failed to delete booking due to network/server error");
//       }
//     }
//   };

//   const startEditing = (id, currentDueDate) => {
//     setEditingId(id);
//     setNewDueDate(currentDueDate ? currentDueDate.split("T")[0] : ""); // format date for input[type=date]
//   };

//   const cancelEditing = () => {
//     setEditingId(null);
//     setNewDueDate("");
//   };

//   const saveDueDate = async (id) => {
//     if (!newDueDate) {
//       alert("Please select a valid date");
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:3000/api/bookings/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ duedate: newDueDate }),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         alert(`Failed to update due date: ${errorData.message || "Unknown error"}`);
//         return;
//       }

//       // Update local state with new duedate
//       setBookings(bookings.map(b => 
//         b.id === id ? { ...b, duedate: newDueDate } : b
//       ));

//       alert("Due date updated successfully");
//       cancelEditing();
//     } catch (error) {
//       console.error("Update error:", error);
//       alert("Failed to update due date due to network/server error");
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="booked-page">
//       <h2>My Booked Trains</h2>
//       {bookings.length === 0 ? (
//         <p className="no-bookings">No bookings found.</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="booking-card">
//               <div><strong>Train Name:</strong> {booking.train_name}</div>
//               <div>
//                 <strong>Route:</strong> {booking.source} &rarr; {booking.destination}
//               </div>
//               <div><strong>Arrival:</strong> {booking.arrival}</div>
//               <div><strong>Booked Time:</strong> {booking.booking_date}</div>
//               <div><strong>Status:</strong> {booking.status}</div>
//               <div>
//                 <strong>Due Date:</strong>{" "}
//                 {editingId === booking.id ? (
//                   <>
//                     <input
//                       type="date"
//                       value={newDueDate}
//                       onChange={(e) => setNewDueDate(e.target.value)}
//                     />
//                     <button onClick={() => saveDueDate(booking.id)}>Save</button>
//                     <button onClick={cancelEditing}>Cancel</button>
//                   </>
//                 ) : (
//                   <>
//                     {booking.duedate ? booking.duedate.split("T")[0] : "Not set"}{" "}
//                     <button onClick={() => startEditing(booking.id, booking.duedate)}>
//                       Edit
//                     </button>
//                   </>
//                 )}
//               </div>
//               <button className="delete-btn" onClick={() => handleDelete(booking.id)}>
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
