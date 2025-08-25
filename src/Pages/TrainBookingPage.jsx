// import React from "react";
// import "./TrainBookingPage.css";

// const dummyTrains = [
//   {
//     id: 1,
//     from: "Colombo",
//     to: "Kandy",
//     departure: "08:00 AM",
//     arrival: "12:00 PM",
//     duration: "4h",
//     classType: "Economy",
//     price: 500,
//   },
//   {
//     id: 2,
//     from: "Colombo",
//     to: "Galle",
//     departure: "09:30 AM",
//     arrival: "11:30 AM",
//     duration: "2h",
//     classType: "Business",
//     price: 800,
//   },
//   {
//     id: 3,
//     from: "Colombo",
//     to: "Jaffna",
//     departure: "07:00 AM",
//     arrival: "05:00 PM",
//     duration: "10h",
//     classType: "First",
//     price: 1200,
//   },
// ];

// export default function TrainBookingPage() {
//   return (
//     <div className="booking-page">
//       <h2>Available Trains</h2>
//       <div className="train-list">
//         {dummyTrains.map((train) => (
//           <div key={train.id} className="train-card">
//             <div className="train-route">
//               <span>{train.from}</span> &rarr; <span>{train.to}</span>
//             </div>
//             <div className="train-details">
//               <span>
//                 <strong>Departure:</strong> {train.departure}
//               </span>
//               <span>
//                 <strong>Arrival:</strong> {train.arrival}
//               </span>
//               <span>
//                 <strong>Duration:</strong> {train.duration}
//               </span>
//             </div>
//             <div className="train-class-price">
//               <span>{train.classType} Class</span>
//               <span>Rs. {train.price}</span>
//             </div>
//             <button className="book-btn">Book Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./TrainBookingPage.css";

// export default function TrainBookingPage() {
//   const location = useLocation();
//   const trains = location.state?.trains || [];



//   function handleBook(train) {
//   // get existing bookings
//   const existing = JSON.parse(localStorage.getItem("bookedTrains")) || [];

//   // Add new booking with booking time and status
//   const newBooking = {
//     ...train,
//     bookingTime: new Date().toLocaleString(),
//     bookingStatus: "Confirmed",
//     id: train.id || Date.now(), // unique id if no train.id
//   };

//   localStorage.setItem("bookedTrains", JSON.stringify([...existing, newBooking]));

//   alert(`Train ${train.name} booked successfully!`);
// }



//   return (
//     <div className="booking-page">
//       <h2>Available Trains</h2>
//       {trains.length === 0 ? (
//         <p>No trains found.</p>
//       ) : (
//         <div className="train-list">
//           {trains.map((train) => (
//   <div key={train.id} className="train-card">
//   <div className="train-header">
//     <span className="train-number">{train.train_number}</span>
//     <span className="train-name">{train.name}</span>
//   </div>
//   <div className="train-route">
//     <strong>Route:</strong> {train.source} &rarr; {train.destination}
//   </div>
//   <div className="train-times">
//     <span><strong>Departure:</strong> {train.departure}</span>
//     <span><strong>Arrival:</strong> {train.arrival}</span>
//     <button 
//       className="book-btn" 
//       // onClick={() => alert(`Booking train ${train.train_number} - ${train.name}`)}
//       onClick={() => handleBook(train)}
//     >
//       Book Now
//     </button>
//   </div>
//   <div className="train-info">
//     {/* <span><strong>Duration:</strong> {train.duration}</span> */}
//     <span><strong>Class:</strong> {train.class}</span>
//     <span><strong>Price:</strong> Rs. {train.price}</span>
//   </div>
//   {/* <button 
//       className="book-btn" 
//       onClick={() => alert(`Booking train ${train.train_number} - ${train.name}`)}
//     >
//       Book Now
//     </button> */}
// </div>

// ))}

//         </div>
//       )}
//     </div>
//   );
// }














// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./TrainBookingPage.css";

// export default function TrainBookingPage() {
//   const location = useLocation();
//   const trains = location.state?.trains || [];

//   async function handleBook(train) {
//     try {
//       // Prepare booking data to send
//       const bookingData = {
//         trainId: train.id,
//         trainNumber: train.train_number,
//         name: train.name,
//         source: train.source,
//         destination: train.destination,
//         departure: train.departure,
//         arrival: train.arrival,
//         class: train.class,
//         price: train.price,
//         bookingTime: new Date().toISOString(),
//         bookingStatus: "Confirmed",
//         // you can add userId if you have user login implemented
//       };

//       // Send booking data to backend (adjust URL as needed)
//       const response = await fetch("http://localhost:3000/book-train", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert(`Booking failed: ${errorData.message || "Unknown error"}`);
//         return;
//       }

//       const result = await response.json();
//       alert(`Train ${train.name} booked successfully! Booking ID: ${result.bookingId || ""}`);
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("Booking failed due to a network or server error.");
//     }
//   }

//   return (
//     <div className="booking-page">
//       <h2>Available Trains</h2>
//       {trains.length === 0 ? (
//         <p>No trains found.</p>
//       ) : (
//         <div className="train-list">
//           {trains.map((train) => (
//             <div key={train.id} className="train-card">
//               <div className="train-header">
//                 <span className="train-number">{train.train_number}</span>
//                 <span className="train-name">{train.name}</span>
//               </div>
//               <div className="train-route">
//                 <strong>Route:</strong> {train.source} &rarr; {train.destination}
//               </div>
//               <div className="train-times">
//                 <span><strong>Departure:</strong> {train.departure}</span>
//                 <span><strong>Arrival:</strong> {train.arrival}</span>
//               </div>
//               <div className="train-info">
//                 <span><strong>Class:</strong> {train.class}</span>
//                 <span><strong>Price:</strong> Rs. {train.price}</span>
//               </div>
//               <button className="book-btn" onClick={() => handleBook(train)}>
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





import React from "react";
import { useLocation } from "react-router-dom";
import "./TrainBookingPage.css";

export default function TrainBookingPage() {
  const location = useLocation();
  const trains = location.state?.trains || [];
  const bookingDate = location.state?.bookingDate;

  async function handleBook(train) {
    try {
      // Get logged-in user ID from localStorage
      const userid = localStorage.getItem("userId");

      if (!userid) {
        alert("Please log in to book a train.");
        return;
      }

      // Prepare booking data to send
      const bookingData = {
        userid,               // add user id here
        trainid: train.id,    // use trainid to match DB
        seatclass: train.class,  // seat class chosen or from train data
        booking_date: new Date().toISOString(), // current date/time
        status: "Confirmed",  // booking status
        duedate: bookingDate,

        // you can add other train details here if needed
      };

      // Send booking data to backend (adjust URL as needed)
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
