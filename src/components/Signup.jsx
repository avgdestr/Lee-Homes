import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [phone, SetPhone] = useState("");

  const[loading,SetLoading] = useState('')
  const[success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();
    SetLoading('please wait...')
    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("username", username);
      formdata.append("phone", phone);
      formdata.append("password", password);
      const response = await axios.post("https://avgdestr.pythonanywhere.com/api/signup", formdata);
      SetLoading('')
      setSuccess(response.data.success)
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <div className="row justify-content-center mt-4 ">
      <div className="card shadow col-md-6 p-4">
        <h1>Sign up</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handlesubmit}>
          <input
            type="email"
            placeholder="email"
            className="form-control"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="username"
            className="form-control"
            value={username}
            required
            onChange={(e) => SetUsername(e.target.value)}
          />{" "}
          <br />
          <input
            type="tel"
            placeholder="phone number"
            className="form-control"
            value={phone}
            required
            onChange={(e) => SetPhone(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={password}
            required
            onChange={(e) => SetPassword(e.target.value)}
          />{" "}
          <br />
          <button onClick={()=>  navigate('/signin')} type="submit" className="btn btn-outline-danger">
            submit
          </button>
          <p>
            already have an account? <Link to="/signin">sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
