import { useState } from "react";

export function ClassBindingDemo() {
  const [cities] = useState([
    "Mumbai",
    "Chennai",
    "Hyderabad",
    "Bangalore",
    "Delhi",
  ]);
  const [buttonClass, setButtonClass] = useState("bi bi-sort-alpha-down");

  function handleSortClick(e) {
    if (e.target.className == "bi bi-sort-alpha-down") {
      setButtonClass("bi bi-sort-alpha-up");
      cities.sort();
    } else {
      setButtonClass("bi bi-sort-alpha-down");
      cities.sort();
      cities.reverse();
    }
  }
  return (
    <>
      <div className="container-fluid mt-4">
        <h2>
          Cities List
          <button
            className="btn btn-success btn-sm ms-2"
            onClick={handleSortClick}
          >
            <span className={buttonClass}></span>
          </button>
        </h2>
        <ol>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
