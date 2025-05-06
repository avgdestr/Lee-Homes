import axios from 'axios';
import React, { useState } from 'react'

const AddProducts = () => {
  const [product_name, setProductname] = useState("");
  const [product_description, setProductdescription] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductphoto] = useState("");

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading("adding product...");

    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);
      const response = await axios.post(
        "https://avgdestr.pythonanywhere.com/api/add_product",
        formData
      );
      if (response.data.Message) {
        setLoading("");
        setSuccess(response.data.Message);
        setProductname("");
        setProductdescription("");
        setProductcost("");
        setProductphoto("");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="card shadow col-md-6 p-4 mt-5 mb-5">
        <h1>Sell House</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="product name"
            className="form-control"
            value={product_name}
            onChange={(e) => setProductname(e.target.value)}
            required
          />{" "}
          <br />
          <textarea
            placeholder="Description"
            className="form-control"
            value={product_description}
            onChange={(e) => setProductdescription(e.target.value)}
            required
          ></textarea>
          <br />
          <input
            type="number"
            placeholder="cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => setProductcost(e.target.value)}
            required
          />{" "}
          <br />
          <input
            type="file"
            placeholder="photo"
            className="form-control"
            
            onChange={(e) => setProductphoto(e.target.files[0])}
          />{" "}
          <br />
          <button type="submit" className="btn btn-outline-danger">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts