import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/products" />
          <Route element={<SingleProduct />} path="/products/:id" />
          <Route element={<About />} path="/about" />
          <Route element={<Cart />} path="/cart" />
          <Route
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
            path="/checkout"
          />
          <Route element={<Error />} path="*" />
        </Routes>
        <Footer />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
