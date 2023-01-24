import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { env } from './Config';

function AdminPage() {
    let navigate = useNavigate()

    const formik = useFormik({
      initialValues: {
        Battery:"",
        Camera:"",
        Display:"",
        Memory:"",
        Processor:"",
         Security:"",
         image:"",
         price:"",
         title:""
      },
      validate: (values) => {
        let errors = {}
  
        
        if(values.Battery.length < 6){
            errors.Battery = "Please Enter Value"
        }
      
        if(values.Camera.length < 8 ){
          errors.Camera = "Please Enter Value"
        }
  
        if(values.Display.length <10){
          errors.Display = "Please Enter Value"
        }
  
        if(values.Memory.length < 5){
          errors.Memory = "Please Enter Value"
        }
        if(values.Processor.length < 10){
            errors.Processor = "Please Enter Value"
        }
        if(values.Security.length < 6){
            errors.Security = "Please Enter Value"
        }
        if(values.image.length < 10){
            errors.image = "Please Enter Value"
        }
        if(values.price.length < 4){
            errors.price = "Please Enter Value"
        }
        if(values.title.length < 5){
            errors.title = "Please Enter Value"
        }
  
        return errors
      },
  
      onSubmit: async (values) => {
        console.log(values);
  
        try {
          let registerData = await axios.post(`${env.api}/products`, values)
          // console.log(registerData)
  
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
      <Navbar/>

         <div className="container col-lg-4 " style={{height:"100vh"}}>
                <div className="addproduct">
            <div className='text-center text-muted'>
<h3>Add Product</h3>
            </div>
  
                  <form onSubmit={formik.handleSubmit}>
                    {/* <!-- Full name --> */}
                    <div className="mb-3">
                      <label for="name" className="form-label lead ">
                        Battery<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.Battery}
                                    onChange={formik.handleChange}
                                    name="Battery"
                        className="form-control formtrans"
                        id="name"
                        aria-describedby="emailHelp"
  
                        placeholder="Enter Correct Specifactions"
                        required
                      />
                      <span className="text-warning">{formik.errors.Battery}</span>
                    </div>
                    
  
                    {/* <!-- Mobile number --> */}
                    <div className="mb-3">
                      <label for="number" className="form-label  lead">
                        Camera<span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control formtrans"
                        id="number"
                        pattern="[789][0-9]{9}"
  
                        value={formik.values.Camera}
                                    onChange={formik.handleChange}
                                    name="Camera"
  
                        aria-describedby="emailHelp"
                        placeholder="Enter Detials"
                        required
                      />
                   
                    <span className="text-warning">{formik.errors.Camera}</span>
                    </div>
  
                    {/* <!-- Email --> */}
                    <div className="mb-3">
                      <label for="email" className="form-label  lead">
                        Dispaly<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        value={formik.values.Dispaly}
                            onChange={formik.Dispaly}
                            name="Dispaly"
  
                        className="form-control formtrans"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Detials"
                        required
                      />
                 
                    <span className="text-warning">{formik.errors.Dispaly}</span>
                    </div>
                    {/* <!-- Password --> */}
                    <div className="my-3">
                      <label for="exampleInputPassword1" className="form-label e lead">
                        Memory<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.Memory}
                        onChange={formik.handleChange}
                        name="Memory"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Memory"
                        required
                      />
             
                    <span className="text-warning">{formik.errors.Memory}</span>
                    </div>

                       {/* <!-- Processor --> */}
                        <div className="mb-3">
                      <label for="name" className="form-label lead ">
                        Processor<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.Processor}
                                    onChange={formik.handleChange}
                                    name="Processor"
                        className="form-control formtrans"
                        id="name"
                        aria-describedby="emailHelp"
  
                        placeholder="Enter Correct Specifactions"
                        required
                      />
                      <span className="text-warning">{formik.errors.Processor}</span>
                    </div>
                         {/* <!-- Security --> */}
                         <div className="mb-3">
                      <label for="name" className="form-label lead ">
                      Security<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.Security}
                                    onChange={formik.handleChange}
                                    name="Security"
                        className="form-control formtrans"
                        id="name"
                        aria-describedby="emailHelp"
  
                        placeholder="Enter Specifactions"
                        required
                      />
                      <span className="text-warning">{formik.errors.Processor}</span>
                    </div>
                      {/* <!-- Image Url --> */}
                       <div className="mb-3">
                      <label for="name" className="form-label lead ">
                      image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.image}
                       onChange={formik.handleChange}
                          name="image"
                        className="form-control formtrans"
                        id="name"
                        aria-describedby="emailHelp"
  
                        placeholder="Enter Specifactions"
                        required
                      />
                      <span className="text-warning">{formik.errors.image}</span>
                    </div>
                         {/* <!-- Price --> */}
                        <div className="mb-3">
                      <label for="name" className="form-label lead ">
                      Price<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.image}
                       onChange={formik.handleChange}
                          name="Price"
                        className="form-control formtrans"
                        id="name"
                        aria-describedby="emailHelp"
  
                        placeholder="Enter Price"
                        required
                      />
                      <span className="text-warning">{formik.errors.Price}</span>
                    </div>
                    {/* <!-- Title --> */}
                        <div className="mb-3">
                      <label for="name" className="form-label lead ">
                      Title<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        value={formik.values.image}
                       onChange={formik.handleChange}
                          name="title"
                        className="form-control formtrans"
                        id="name"
                        aria-describedby="emailHelp"
  
                        placeholder="Enter title"
                        required
                      />
                      <span className="text-warning">{formik.errors.title}</span>
                    </div>
                    {/* <!-- Submit button --> */}
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-warning">
                          <span className="fw-normal lead">Submit</span>
              
                      </button>
                    </div>
                  </form>
                </div>
              </div>
        
      </>
    );
}

export default AdminPage