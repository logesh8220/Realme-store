import React, { useState } from "react";
import { env } from "./Config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function CartSummary({ total,product,setCount}) {
  let navigate = useNavigate();
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  
  let newdate = year + "/" + month + "/" + day;

  const handleSubmit  = async () => {
    if (total === 0) {
      alert("Cart is empty");
    } else {
      var options = {
        key: `${env.KEY}`,
        key_secret: `${env.SECRET}`,
        amount: total * 100,
        currency: "INR",
        name: "Realme Store",
        description: "For Testing purpose",

        handler: function (response) {
          toast.success(`Transaction ID : ${response.razorpay_payment_id}  Order placed successfully ! `, {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/dashboard");
          setCount(0)
        },
       
        prefill: {
          name: "logesh Thirumurugan",
          email: "logeshthirumurugan@gmail.com",
          contact: "8220739131",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "rgb(49, 91, 194)",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    try {
     let order = {
        price:product.price,
        title:product.title,
        capacity:product.Memory,
        image:product.image,
        newdate
      }
      let item = await axios.post(`${env.api}/orders`,order);
      console.log(item)
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <>
      {total === 0 ? (
        <div className="text-center text-white display-5 fst-italic fw-normal ">
          No items in the cart
        </div>
      ) : (
        <div className="col-md-9 mx-auto">
          <div className="card bg-black">
            <div className="card-header">
              <h2 className="mb-0 text-center text-white">Order Summary</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush bg-transparent">
                <li className="list-group-item bg-transparent h5 text-white d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products price
                  <span className="fw-normal lead fst-italic">₹ {total}</span>
                </li>
                <li className="list-group-item bg-transparent h5 text-white d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span className="fw-normal lead fst-italic">
                    Free Shipping
                  </span>
                </li>
                <li className="list-group-item bg-transparent h5 text-white d-flex justify-content-between border-0 px-0 mb-3">
                  <div>
                    <span className="fs-4 fw-bolder ">Total amount</span>

                    <p className="mb-0 fw-light fst-italic">(including GST)</p>
                  </div>
                  <span className=" fs-4 fw-bolder fst-italic">₹ {total}</span>
                </li>
              </ul>

              <button
                onClick={() => handleSubmit()}
                type="button"
                className="btn btn-lg text-black w-100 fw-bold  color fs-4"
              >
                Place your order
              </button>
              <div className="mt-3 bg-white rounded img-fluid mb-3">
                {" "}
                <img
                  style={{ width: "300px", height: "80px" }}
                  src="assets/razorpayf.png"
                  alt="razorpay"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartSummary;