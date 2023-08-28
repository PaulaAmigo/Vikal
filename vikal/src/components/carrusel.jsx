import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


function Carrusel (){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <>
      <div className="inicio" id="inicio">
      <h1 className="welcome">Bienvenidos a Vikal</h1>
    </div>
        
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="img-fluid" src="../img/airConditioning.jpeg" alt="" />
        <Carousel.Caption>
          <h1 className="infoImg">Productos</h1>
          <button className="btnAppoint">
          <Link to="/Products" className="product">
              Productos
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="img-fluid" src="../img/airConditioning.jpeg" alt="" />
        <Carousel.Caption>
          <h1 className="infoImg">Productos 2</h1>
          <button className="btnAppoint">
          <Link to="/Products" className="product">
              Productos
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="img-fluid" src="../img/airConditioning.jpeg" alt="" />
        <Carousel.Caption>
          <h1 className="infoImg">Productos 3</h1>
          <button className="btnAppoint">
            <Link to="/Products" className="product">
              Productos
            </Link>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </>
        
    )
}
export default Carrusel;