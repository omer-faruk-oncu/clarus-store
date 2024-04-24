import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
//import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
  return (
    // <BrowserRouter>

    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/products/:id" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

    //   </BrowserRouter>
  );
};

export default AppRouter;
