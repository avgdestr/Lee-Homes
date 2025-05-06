import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const img_url = "https://avgdestr.pythonanywhere.com/static/images/";
  const phoneNumber = "0794927995";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const getproducts = async () => {
    setLoading("in a bit gang...");
    try {
      const response = await axios.get(
        "https://avgdestr.pythonanywhere.com/api/getproducts"
      );
      setLoading("");
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const filteredproducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid row">
      <h1 className="p-2">Buy House</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="search for house"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>{loading}</p>}
      {error && <p className="text-danger">{error}</p>}

      {filteredproducts.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div
            className="card shadow p-1 bg-dark text-light d-flex flex-column"
            style={{ height: "500px" }}
          >
            <div className="card-header p-2">
              <h5 className="mt-2">{product.product_name}</h5>
            </div>

            <div className="card-body d-flex flex-column">
              <img
                src={img_url + product.product_photo}
                alt={product.product_photo}
                id="card-image"
                className="mb-3 img-fluid"
              />

              <div
                style={{
                  maxHeight: "80px",
                  overflowY: "auto",
                  fontSize: "0.9rem",
                }}
              >
                {product.product_description}
              </div>
            </div>

            <div className="card-footer mt-auto">
              <b className="text-warning">ksh{product.product_cost}</b>
              <br />
              <button
                onClick={() => {
                  navigate("/payment", { state: { product } });
                }}
                className="btn btn-outline-light mt-2 w-100"
              >
                buy now
              </button>

              <button
                onClick={handleCall}
                className="btn btn-outline-success mt-2 w-100"
              >
                <i class="bi bi-telephone"></i>Call Us
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetProducts;
