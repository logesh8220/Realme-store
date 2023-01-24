import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import { env } from './Config';

function Orders() {
    const [data, setData] = useState([]);
    const [isloading,setloading] = useState(false)
    useEffect(() => {
      LoadData();
    }, []);
  
    let LoadData = async () => {
      setloading(true)
      let products = await axios.get(`${env.api}/orders`);
      setData(products.data);
      setloading(false)
      console.log(data)
  
    };
  return (
    <div>
    <Navbar/>
    {
        data.map((data)=>{
            return(
    <div className="card cardhove mb-3  mt-5">
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center">
        <img
          src={data.image}
          className="img-fluid rounded-start"
          style={{ height: "200px", width: "200px" }}
          alt="iphone"
        />
      </div>
      <div className="col-md-8 ">
        <div className="card-body text-md-start text-center">
          <h5 className="card-title fs-3 ">{data.title}</h5>
          <span className="card-text fw-normal lead ">
            Date : 
            <span className="lead fw-normal ">
              {" "}
              {data.newdate}
            </span>
          </span>
          <br></br>
          <span className="card-text fw-normal lead ">
            Price : ₹
            <span className="lead fw-normal ">
              {" "}
              {data.price}
            </span>
          </span>
          <p className="card-text lead fw-normal">
            Capacity :{" "}
            <span className="lead  fw-normal ">
              {data.capacity}
            </span>
          </p>
          
          
          
        </div>
      </div>
    </div>
  </div>
            )
        })
    }
        
  </div>
  )
}

export default Orders