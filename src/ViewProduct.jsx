import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useLocation, useParams } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { env } from "./Config";



function ViewProduct ({count,addToCart,cart}) {


  const params = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    loadProduct();
  }, []);

  let loadProduct = async () => {
    try {
      let product = await axios.get(`${env.api}/product/${params.id}`);
      console.log(product.data)
      setProductData(product.data);
    } catch (error) {
      console.log(error)
    }
  };


  // let location = useLocation();
  // console.log(location)
// let handleToBuy = (product) => {
//   AddToCart(product)
// }

  return (<>
<Navbar count={count}/>

<div className="container mt-5" style={{height:"100vh"}}>
  <div className="row ">
  <div className="card cards1">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={productData.image} className="img-fluid rounded-start" alt="..."/>
    </div>


    <div className="col-md-8 mb-5 ">
      <div className="card-body ">
        <p className="card-title display-4 fw-normal ">{productData.title}</p>
        <p className="card-title lead fw-normal fs-2 ">Price : ₹ {productData.price}</p>
        <p className="card-text lead fw-normal ">Capacity : <span className="lead fst-italic ">{productData.Memory}</span></p>
        <p className="card-text lead fw-normal  ">Display : <span className="lead fst-italic ">{productData.Display}</span></p>
        <p className="card-text lead fw-normal ">Camera : <span className="lead fst-italic ">{productData.Camera}</span></p>
        <p className="card-text lead fw-normal ">Processor : <span className="lead fst-italic ">{productData.Processor}</span></p>
        <p className="card-text lead fw-normal ">Battery : <span className="lead fst-italic ">{productData.Battery}</span></p>
        <p className="card-text lead fw-normal ">Security(Lock) : <span className="lead fst-italic ">{productData.Security}</span></p>
        <p className="card-text lead fw-normal ">ZestMoney : <span className="lead fst-italic ">Upto 1000/- Cashback at 3 months No Cost EMI</span></p>
        <p className="card-text lead fw-normal ">Mobikwik : <span className="lead fst-italic "> Get Upto Rs. 500 cashback</span></p>
      </div>
      <button
           disabled={cart.find((obj) => obj._id === productData._id)}
           onClick={() => {addToCart(productData)}}
            className="btn btn-md btn-warning cards1 ms-3"
            style={{boxShadow:"3px 3px 20px lightgray"}}
          >
            <i className="fa-solid fa-cart-shopping me-1"></i>Add to Cart
          </button>
    </div>
  </div>
</div>
  </div>
</div>



    










  </>);
}

export default ViewProduct;
