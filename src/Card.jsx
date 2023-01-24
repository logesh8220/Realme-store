import React from "react";
import { Link } from "react-router-dom";

function Card({ res, handleAddToCart, cart ,index }) {
  return (
    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
      <div className="card  text-center cards" style={{ width: "20rem" }}>
          <h5 className="card-title text-dark my-3">{res.title}</h5>
        <img src={res.image} className="card-img-top" alt="photos" />
        <div className="card-body ">
          <p className="card-text" style={{color:"gray"}}>₹ {res.price}</p>
          <Link
            to={`/product/${res._id}`} 
            className="btn btn-warning text-light  btn-sm me-3"
          >
            <i class="fa-solid fa-eye me-1"></i>View Product
          </Link>
          <button
            disabled={cart.find((obj) => obj._id === res._id)}
            onClick={() => {handleAddToCart(res, index)}}
            className="btn btn-warning text-light  btn-sm me-1"
          >
            <i className="fa-solid fa-cart-shopping me-1"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
