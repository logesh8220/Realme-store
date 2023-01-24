import React, { useState } from "react";
import {  useFormik } from "formik";
import {  Link, useNavigate } from "react-router-dom";
import './App.css';
import { env } from "./Config";
import axios from "axios";
import { toast } from "react-toastify";


function Login() {

    let navigate = useNavigate()
    let [isloading,setloading] = useState(false)
 
  let formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        setloading(true)
        let loginData = await axios.post(`${env.api}/login`, values)
        console.log(loginData.data)
       setloading(false)
        if(loginData.status === 200) {
          if(loginData.data.user.Type === "Admin"){
              window.localStorage.setItem("apptoken", loginData.data.token)
              navigate("/adminpage")
              toast.success(`Welcome! ${loginData.data.user.fullName}`, {
                position: toast.POSITION.TOP_CENTER,
              });
          }
              else {
                window.localStorage.setItem("apptoken", loginData.data.token)
                navigate("/dashboard")
                toast.success(`Welcome! ${loginData.data.user.fullName}`, {
                  position: toast.POSITION.TOP_CENTER,
                });
              }
          
          }
          
        }
       catch (error) {
        alert(error.response.data.message);
        console.log(error);
        
      }
    },
  });

  return (
    <>
 
 <nav className="navbar navbar-expand-lg navbar-dark bg-warning ">
    <div className="container d-flex justify-content-center ">
      <span className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg/2560px-Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg.png"
          alt="logo"
          style={{ width: "140px"}}
          className="d-inline-block align-text-bottom me-2"
          loading="lazy"
        />
      </span>
    </div>
  </nav>
     
      <div className="container col-lg-4">
        <div className="addproduct mt-5">
      <h1 className="text-muted fw-normal text-center " id="login">
        Login
      </h1>
                <form onSubmit={formik.handleSubmit} >

                  {/* <!-- Username --> */}
                  <div className="my-2">
                    <label for="username" className="form-label  lead">
                      Username<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="Username">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        id="username"
                        type="email"
                        className="form-control formtrans"
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="Enter the email"

                        value={formik.values.emailAddress}
                        onChange={formik.handleChange}
                        name="emailAddress"

                        aria-label="Username"
                        aria-describedby="Username"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- Password --> */}
                  <div className="my-2">
                    <label for="Password1" className="form-label  lead">
                      Password<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="password">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <input
                        type="password"
                        id="Password1"
                        className="form-control formtrans"
                        placeholder="Enter your password"
                        aria-label="password"

                        value={formik.values.password}
                        onChange={formik.handleChange}
                        name="password"

                        aria-describedby="password"
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        // title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className="d-grid gap-2 pt-2">
                    {
                       isloading?<button type="submit" className="btn btn-warning">
                       <div class="spinner-border ms-auto text-light" role="status" aria-hidden="true"></div>
                       </button> :
                       <button type="submit" className="btn btn-warning">
                       <i className="fa-solid fa-lock me-1"></i>
                       <span className="lead fw-normal">Login</span>
                     </button>
                            }
                  </div>
                </form>

        </div>
                <div>
          <p class="text-center  lead fs-5 mt-3">Don't have an account? <Link to={"/"} class="text-primary fw-normal tdn">Register now</Link></p>
        </div>
              </div>
              <div className="text-center text-muted container p-3 mb-5" style={{boxShadow:"1px 1px 10px lightgray"}}>
                <h1 className="text-muted">Login Credentials</h1>
                <div>
                  <h5>Admin</h5>
                  <h6>Admindemo@gmail.com</h6>
                  <h6>Admindemo</h6>
                </div>
                <div>
                  <h5>User</h5>
                  <h6>guvidemo@gmail.com</h6>
                  <h6>guvidemo</h6>
                </div>
              </div>
    </>
  );
}

export default Login;
