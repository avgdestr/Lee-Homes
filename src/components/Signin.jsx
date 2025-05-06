import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ onLogin }) => {
  // Accept the onLogin callback prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://avgdestr.pythonanywhere.com/api/signin",
        data
      );

      setLoading(false);

      if (response.data.user) {
        setSuccess(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Pass the user data to the parent component using onLogin callback
        onLogin(response.data.user); // Pass the logged-in user to App.js

        navigate("/"); // Redirect to home page
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="card shadow col-md-6 p-4 mb-5 mt-5">
        <h1>Sign In</h1>

        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button
            type="submit"
            className="btn btn-outline-danger"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
