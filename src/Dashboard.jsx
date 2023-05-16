import "./App.css";
import Card from "./Card";
import Navbar from "./Components/Navbar";
import Productstitle from "./Components/Productstitle";
import Testimonials from "./Testimonials";
import Footer from "./Components/Footer";
import Services from "./Services";
import Listofproducts from "./Components/Listofproducts";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Components/Carousel";
import Pagination from "./Pagination";
import { env } from "./Config";



function Dashboard({cart, addToCart, count}) {

  // const location=useLocation();
  // let username=location.state
  const [data, setData] = useState([]);
  const [isloading,setloading] = useState(false)
  const [currentPage,setcurrentPage] = useState(1)
  const [postsPerPage,setPostPerPage] = useState(8)
  console.log(currentPage)
  useEffect(() => {
    LoadData();
  }, []);

  let LoadData = async () => {
    setloading(true)
    let products = await axios.get(`${env.api}/products`);
    setData(products.data);
    setloading(false)
    console.log(products.data)

  };
  const lastPOstIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPOstIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex,lastPOstIndex)

  return (<>
    
    

      <Navbar count={count}/>


      <Carousel/>
      <Productstitle/>
      <Listofproducts/>
      {/* Cards */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row g-5">
            <span className=" display-5 fw-bold" style={{color:"gray"}}><sapn><span className='text-black'>The Latest</span>Take a look at what’s new right now</sapn></span>
            

            
              {
                 isloading?<div class="d-flex justify-content-center">
                 <div className="spinner-border" role="status">
                   <span className="visually-hidden">Loading...</span>
                 </div>
               </div>:
                //etha loop pannanum products ah so products.map
                currentPost.map((item, index) => {
                  return (
                    <Card
                    key={index}
                      res={item}
                      handleAddToCart={addToCart}
                      cart={cart}
                      index={index}
                    ></Card>
                  )
                })
              }
            </div>
          </div>
        </div>
        </div>
        <Pagination
               totalPosts = {data.length}
               postPerPage={postsPerPage}
               setPage={setcurrentPage}
               currentPage={currentPage}
              />

      <Services/>

      <Testimonials/>
    
      <Footer/>
 
  
</>)
}

export default Dashboard;
