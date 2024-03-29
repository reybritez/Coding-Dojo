import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCreateProduct from "./routes/ViewCreateProduct";
import ViewDetailProduct from "./routes/ViewDetailProduct";
import ViewShowProducts from "./routes/ViewShowProducts";
import ViewEditProduct from "./routes/ViewEditProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewShowProducts />} />
        <Route path="/create" element={<ViewCreateProduct />} />
        <Route path="/products/:id" element={<ViewDetailProduct />} />
        <Route path="/products/:id/edit" element={<ViewEditProduct />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
