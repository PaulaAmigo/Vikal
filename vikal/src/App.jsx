import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom"
import MainPage from "./view/mainPage"
import Menu from "./components/menu";
import Products from "./components/products";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
    </Routes>
    </>
  );
}

export default App;
