import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 3 additional hooks for storing the different states of your application
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");
    //  hook for navigation
    const navigate = useNavigate();
    // function to handle submit events
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading("connecting...");
      try {
        // fetching data from form
        const data = new FormData();
        data.append("email", email);

        data.append("password", password);
        // posting data
        const response = await axios.post(
          "https://avgdestr.pythonanywhere.com/api/signin",
          data
        );
        // set loading back to default
        setLoading("");

        // if statement to check on existence of the user
        if (response.data.user) {
          setSuccess(response.data.message);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          // redirect the user to another page
          navigate("/");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };


  return (
    <div className="row justify-content-center mt-4 ">
      <div className="card shadow col-md-6 p-4">
        <h1>Sign in</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />{" "}
          <br />
          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />{" "}
          <br />
          <button type="submit" className="btn btn-outline-danger">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
