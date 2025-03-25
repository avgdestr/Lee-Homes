import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [phone, setPhone] = useState("");
  const { product } = useLocation().state || {};
  const img_url = "https://avgdestr.pythonanywhere.com/static/images/";

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = async (e) => {
    setLoading("sending prompt to your phone...");
    e.preventDefault();
    try {
      const formdata = new FormData();

      formdata.append("amount", product.product_cost);
      formdata.append("phone", phone);
      const response = await axios.post(
        "https://avgdestr.pythonanywhere.com/api/mpesa_payment",
        formdata
      );
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <h1 className="m-2">Mpesa payment - lipa na mpesa</h1>
      <div className="card shadow col-md-6 p-2">
        <h1 className="text-success">lipa na mpesa</h1>
        {loading}
        {success}
        {error}
        <h3>{product.product_name}</h3>
        <p className="text-danger">Ksh. {product.product_cost}</p>
        <img
          src={img_url + product.product_photo}
          id="card-image"
          alt={product.product_photo}
        />
        <br />
        <form action="" onSubmit={handlesubmit}>
          <input
            type="tel"
            placeholder="enter 254*********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />{" "}
          <br />
          <button className="btn btn-outline-success">purchase now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
