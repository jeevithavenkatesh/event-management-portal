import React from "react";

function Events() {
  return (
    <div className="container mt-5">

      <h2>Upcoming Events</h2>

      <div className="card p-3 mt-3">
        <h4>Tech Conference 2026</h4>
        <p>Location: Chennai</p>
        <p>Date: 25 July 2026</p>

        <button
          className="btn btn-primary"
        >
          Register
        </button>
      </div>

    </div>
  );
}

export default Events;