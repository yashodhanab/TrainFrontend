// import { useState } from "react";
// import "./TrainSearch.css";

// export default function TrainSearch({ onSearch }) {
//   const [from, setFrom] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [trainClass, setTrainClass] = useState("Economy");

//   // Dummy station data
//   const stations = ["Colombo", "Kandy", "Galle"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSearch) {
//       onSearch({ from, destination, date, trainClass });
//     } else {
//       alert(`Searching trains from ${from} to ${destination} on ${date} (${trainClass} class)`);
//     }
//   };

//   return (
//     <form className="train-search-form" onSubmit={handleSubmit}>
//       {/* From Dropdown */}
//       <select
//         value={from}
//         onChange={(e) => setFrom(e.target.value)}
//         required
//       >
//         <option value="">From</option>
//         {stations.map((station, idx) => (
//           <option key={idx} value={station}>
//             {station}
//           </option>
//         ))}
//       </select>

//       {/* Destination Dropdown */}
//       <select
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//         required
//       >
//         <option value="">Destination</option>
//         {stations.map((station, idx) => (
//           <option key={idx} value={station}>
//             {station}
//           </option>
//         ))}
//       </select>

//       {/* Date Picker */}
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//         min={new Date().toISOString().split("T")[0]} // no past dates
//       />

//       {/* Train Class Dropdown */}
//       <select
//         value={trainClass}
//         onChange={(e) => setTrainClass(e.target.value)}
//       >
//         <option>Economy</option>
//         <option>Business</option>
//         <option>First</option>
//       </select>

//       <button type="submit">Search Trains</button>
//     </form>
//   );
// }








// import { useState } from "react";
// import "./TrainSearch.css";

// export default function TrainSearch({ onSearch }) {
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [trainClass, setTrainClass] = useState("Economy");

//   // Dummy station data
//   const stations = ["Colombo", "Kandy", "Galle"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSearch) {
//       onSearch({ source, destination, date, trainClass });
//     } else {
//       alert(`Searching trains from ${source} to ${destination} on ${date} (${trainClass} class)`);
//     }
//   };

//   return (
//     <form className="train-search-form" onSubmit={handleSubmit}>
//       {/* Source Dropdown */}
//       <select
//         value={source}
//         onChange={(e) => setSource(e.target.value)}
//         required
//       >
//         <option value="">Source</option>
//         {stations.map((station, idx) => (
//           <option key={idx} value={station}>
//             {station}
//           </option>
//         ))}
//       </select>

//       {/* Destination Dropdown */}
//       <select
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//         required
//       >
//         <option value="">Destination</option>
//         {stations.map((station, idx) => (
//           <option key={idx} value={station}>
//             {station}
//           </option>
//         ))}
//       </select>

//       {/* Date Picker */}
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//         min={new Date().toISOString().split("T")[0]} // no past dates
//       />

//       {/* Train Class Dropdown */}
//       <select
//         value={trainClass}
//         onChange={(e) => setTrainClass(e.target.value)}
//       >
//         <option>Economy</option>
//         <option>Business</option>
//         <option>First</option>
//       </select>

//       <button type="submit">Search Trains</button>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSearch.css";

export default function TrainSearch() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [trainClass, setTrainClass] = useState("Economy");

  const navigate = useNavigate();
  // const stations = ["Colombo", "Kandy", "Galle"];
  const stations = [
  "Colombo Fort",
  "Kandy",
  "Galle",
  "Badulla",
  "Nuwara Eliya",
  "Matara",
  "Anuradhapura",
  "Jaffna"
];


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://train-book-backend.vercel.app/search-trains", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source, destination, date, trainClass }),
    });

    const data = await res.json();

    if (data.trains && data.trains.length > 0) {
      navigate("/available-trains", { 
        state: { 
          trains: data.trains,
          bookingDate: date
        } 
      });
    } else {
      navigate("/available-trains", { 
        state: { 
          trains: [],
          bookingDate: date
        } 
      });
    }
  } catch (err) {
    console.error(err);
    alert("Error searching trains");
  }
};


  return (
    <form className="train-search-form" onSubmit={handleSubmit}>
      {/* Source Dropdown */}
      <select value={source} onChange={(e) => setSource(e.target.value)} required>
        <option value="">From</option>
        {stations.map((station, idx) => (
          <option key={idx} value={station}>{station}</option>
        ))}
      </select>

      {/* Destination Dropdown */}
      <select value={destination} onChange={(e) => setDestination(e.target.value)} required>
        <option value="">Destination</option>
        {stations.map((station, idx) => (
          <option key={idx} value={station}>{station}</option>
        ))}
      </select>

      {/* Date Picker */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        min={new Date().toISOString().split("T")[0]}
      />

      {/* Train Class Dropdown */}
      <select value={trainClass} onChange={(e) => setTrainClass(e.target.value)}>
        <option>1st Class</option>
        <option>2nd Class</option>
        <option>3rd Class</option>
      </select>

      <button type="submit">Search Trains</button>
    </form>
  );
}
