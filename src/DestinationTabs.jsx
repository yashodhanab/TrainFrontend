import "./DestinationTabs.css";

const destinations = [
  {
    name: "Ella",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kandy",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1526483360614-2fa4e0d7d8e9?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Galle",
    image: "https://images.unsplash.com/photo-1503256207526-0d342beefbd2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jaffna",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
  },
];

export default function DestinationTabs() {
  const handleClick = (name) => {
    alert(`You clicked on ${name}`);
    // You can replace this with navigation or other logic
  };

  return (
    <div className="destination-tabs">
      {destinations.map((dest) => (
        <div
          key={dest.name}
          className="tab"
          onClick={() => handleClick(dest.name)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleClick(dest.name);
          }}
        >
          <div
            className="tab-image"
            style={{ backgroundImage: `url(${dest.image})` }}
            aria-label={dest.name}
          />
          <div className="tab-name">{dest.name}</div>
        </div>
      ))}
    </div>
  );
}
