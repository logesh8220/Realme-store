
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { env } from "./Config";

function Signup() {
let navigate = useNavigate()
let [isloading,setloading] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullName:"",
      mobileNumber:"",
      emailAddress: "",
      password: "",
    },
    validate: (values) => {
      let errors = {}

      
      if(values.fullName.length < 3){
          errors.fullName = "Please enter the fullname"
      }
    
      if(values.emailAddress.length <5 ){
        errors.emailAddress = "Please provide a valid email address"
      }

      if(values.mobileNumber.length <= 9){
        errors.mobileNumber = "Please provide a valid mobile number"
      }

      if(values.password.length < 8){
        errors.password = "Password must contain atleast 8 characters"
      }

      return errors
    },

    onSubmit: async (values) => {
      console.log(values);

      try {
        setloading(true)
        let registerData = await axios.post(`${env.api}/register`, values)
        // console.log(registerData)
         setloading(false)
        if(registerData.status === 200) {
          alert("User registered successfully")
          navigate("/login");
        }
         
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
        
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
       <div className="container col-lg-4 ">
       <div className="addproduct">
            <h3 className=" text-muted fw-normal text-center mt-4 " id="login">
        Register Form
      </h3>
              <div className="">

                <form onSubmit={formik.handleSubmit}>
                  {/* <!-- Full name --> */}
                  <div className="mb-3">
                    <label for="name" className="form-label lead ">
                      Full name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={formik.values.fullName}
                                  onChange={formik.handleChange}
                                  name="fullName"
                      className="form-control formtrans"
                      id="name"
                      aria-describedby="emailHelp"

                      placeholder="Enter your full name"
                      required
                    />
                    <span className="text-warning">{formik.errors.fullName}</span>
                  </div>
                  

                  {/* <!-- Mobile number --> */}
                  <div className="mb-3">
                    <label for="number" className="form-label  lead">
                      Mobile number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control formtrans"
                      id="number"
                      pattern="[789][0-9]{9}"

                      value={formik.values.mobileNumber}
                                  onChange={formik.handleChange}
                                  name="mobileNumber"

                      aria-describedby="emailHelp"
                      placeholder="Enter your mobile number"
                      required
                    />
                 
                  <span className="text-warning">{formik.errors.mobileNumber}</span>
                  </div>

                  {/* <!-- Email --> */}
                  <div className="mb-3">
                    <label for="email" className="form-label  lead">
                      Email address<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      value={formik.values.emailAddress}
                          onChange={formik.handleChange}
                          name="emailAddress"

                      className="form-control formtrans"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      required
                    />
               
                  <span className="text-warning">{formik.errors.emailAddress}</span>
                  </div>
                  {/* <!-- Password --> */}
                  <div className="my-3">
                    <label for="exampleInputPassword1" className="form-label e lead">
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                      className="form-control formtrans"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                      pattern=".{8,}"
                      required
                    />
           
                  <span className="text-warning">{formik.errors.password}</span>
                  </div>

                  {/* <!-- Terms and Condition checkbox --> */}
                  <div className="mb-3 form-check  lead">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      required
                    />
                    <label className="form-check-label fs-6" for="exampleCheck1">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className="d-grid gap-2 pt-2">
                    {
                       isloading?<button type="submit" className="btn btn-warning">
                       <div class="spinner-border ms-auto text-light" role="status" aria-hidden="true"></div>
                       </button> :
                       <button type="submit" className="btn btn-warning">
                       <i className="fa-solid fa-lock me-1"></i>
                       <span className="lead fw-normal">SignUp</span>
                     </button>
                            }
                  </div>
                </form>
              </div>
              <p class="text-center fs-5  lead ">Already a member, Click here for <Link to={"/login"} class="text-primary fw-normal tdn">Login</Link></p>

            </div>
          </div>

     
    </>
  );
}

export default Signup;
