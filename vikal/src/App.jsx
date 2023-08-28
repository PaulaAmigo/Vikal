import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom"
import MainPage from "./view/mainPage"
import Menu from "./components/menu";
import Products from "./components/products";
import AboutUs from "./components/AboutUs";
import Carrusel from "./components/carrusel"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/Carrusel" element={<Carrusel></Carrusel>}></Route>
    </Routes>
    </>
  );
}

export default App;
