import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Carrusel (){

  

    return (
      <>
      <div className="inicio" id="inicio">
      <h1 className="welcome">Bienvenidos a Vikal</h1>
    </div>
        
  
    <Carousel>
      <Carousel.Item interval={3000}>
        <center>
        <Image className="imgCarousel" src="../img/airConditioning.jpeg" rounded/>
        </center>
        <Carousel.Caption className="info">
          <h3>Aire Acondicionado</h3>
          <button className="btnProduct">
              <Link to="/products" className="product">
               Nuestros productos
              </Link>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <center>
      <Image className="imgCarousel" src="../img/airConditioning.jpeg" rounded/>
      </center>
        <Carousel.Caption className="info">
          <h3>Radiadores</h3>
          <button className="btnProduct">
              <Link to="/products" className="product">
               Nuestros productos
              </Link>
            </button>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <center>
      <Image className="imgCarousel" src="../img/airConditioning.jpeg" rounded/>
      </center>
        <Carousel.Caption className="info">
          <h3>Fitting</h3>
          <button className="btnProduct">
              <Link to="/products" className="product">
               Nuestros productos
              </Link>
            </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
        
    )
}
export default Carrusel;