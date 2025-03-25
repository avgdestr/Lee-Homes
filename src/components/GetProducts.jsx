import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetProducts = () => {
  
const [products,setProducts] = useState([])
const [search,setSearch] = useState('')
const img_url = "https://avgdestr.pythonanywhere.com/static/images/";


const  [loading,setLoading] = useState('')
const [error,setError] = useState('')
const navigate = useNavigate ();

const getproducts = async()=>{
  setLoading('in a bit gang...')
  try {
   const response = await axios.get(
     "https://avgdestr.pythonanywhere.com/api/getproducts"
   );
   setLoading("");
    console.log(response.data)
    setProducts(response.data.products)
    
  } catch (error) {
    setError(error.message)
    
  }
  
}

useEffect (()=>{
  getproducts();
},[])
const filteredproducts= products.filter((product)=> product.product_name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="container-fluid row">
      <h1 className="p-2">Buy House</h1>
      <input type="text" className="form-control mb-4" placeholder="search for house" value={search} onChange={(e)=> setSearch(e.target.value)} />

      {loading}
      {error}

      {filteredproducts.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card shadow p-1 bg-dark text-light">
            <div className="card-header p-2">
              <h5 className="mt-2">{product.product_name}</h5>
            </div>

            <div className="card-body">
              <img
                src={img_url + product.product_photo}
                alt={product.product_photo}
                id="card-image"
                className="mt-4"
              />
            </div>
            <div className="card-footer">
              <p>{product.product_description}</p>
              <b className="text-warning">ksh{product.product_cost}</b> <br />
              <button
                onClick={() => {
                  navigate("/payment", { state: { product } });
                }}
                className="btn btn-outline-light mt-2 w-100"
              >
                buy now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetProducts;
