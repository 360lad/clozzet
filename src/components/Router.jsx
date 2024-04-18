import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cartpage from "../pages/Cartpage";
import { useState } from "react";
function Router() {
  const [cart,setCart]=useState([]);                          
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout  cart={cart} setCart={setCart} >
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/Shop"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Shop  cart={cart} setCart={setCart}  />
            </Layout>
          }
        />
        <Route
          path="/Signup"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout cart={cart} setCart={setCart}> 
              <Cartpage  cart={cart} setCart={setCart}  />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout cart={cart} setCart={setCart}>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
