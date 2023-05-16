import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react";
import { io } from "socket.io-client";
import Dashboard from "./Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Signup from "./Signup";
import ViewProduct from "./ViewProduct";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import Orders from "./Orders";
import AdminPage from "./AdminPage";
import { env } from "./Config";

function App() {

  const [count, setCount] = useState(0);

  // console.log(data);
  const socket = io.connect("https://realme-store-guvi.onrender.com")
  socket.on("recive-notification", message => {
    toast.success(message, {
    });
  })

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (res) => {
    setCount(count + 1);
    setCart([...cart, res]);
    setTotal(total + res.price);
    socket.emit("send-notification", "Product Added In Cart")

  };

  let removeCart = (res1) => {
    setCount(count - 1);
    let index = cart.findIndex((obj) => {
      return obj._id === res1._id;
    });
    cart.splice(index);
    setCart([...cart]);
    setTotal(total - res1.price);
    socket.emit("send-notification", "Product Removed from Cart")
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="dashboard"
              element={
                <Dashboard
                  count={count}
                  cart={cart}
                  addToCart={addToCart}
                />
              }
            />

            <Route
              path="cart"
              element={
                <Cart
                  count={count}
                  // increment={increment}
                  // decrement={decrement}
                  cart={cart}
                  total={total}
                  setTotal={setTotal}
                  removeCart={removeCart}
                  addToCart={addToCart}
                  setCount={setCount}
                />
              }
            />

            <Route
              path="product/:id"
              element={
                <ViewProduct count={count} addToCart={addToCart} cart={cart} />
              }
            />
            <Route
              path="orders"
              element={
                <Orders />
              }
            />
            <Route
              path="adminpage"
              element={
                <AdminPage />
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
export default App;
