import React from "react";

function Register() {
  return (
    <div className="container mt-5">

      <h2>Register</h2>

      <form>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button
          className="btn btn-success"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;