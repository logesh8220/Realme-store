import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'

function Navbar({count}) {

  let navigate= useNavigate()
  let logout = () => {
    window.localStorage.clear()
    navigate("/")
}

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className="container">
      <span className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg/2560px-Realme-realme-_logo_box-RGB-01_with_out_back_ground.svg.png"
          alt="logo"
          style={{ width: "150px", height: "40px" }}
          className="d-inline-block align-text-bottom me-2"
          loading="lazy"
        />
      </span>

      {/* <!-- Toggle button --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Menu --> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-2">

        <li className="nav-item d-flex justify-content-center">
                <Link to={"/dashboard"} className="nav-link active me-2 text-center mt-2">
                  Home
                </Link>
              </li>
              
          <Link
            type="button"
            className="btn text-light mt-2 me-2 "
            to= {"/cart"}>
            
            <i className="fa-solid fa-cart-shopping me-2"></i>
            Cart <span className='badge text-black rounded-circle bg-light fw-bolder'>{count}</span> 
       
          </Link>
          <li className="nav-item d-flex justify-content-center">
                <Link to={"/orders"} className="nav-link active me-2 text-center mt-2">
                  Orders
                </Link>
              </li>



          <button onClick={logout}
           
            type="button"
            className="btn text-light me-2 mt-2 "
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;