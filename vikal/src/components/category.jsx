import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Productos from "../data/productos.json"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const categoria1 = Productos.Categoria1
const categoria2 = Productos.Categoria2
const categoria3 = Productos.Categoria3


function Category() {

    const [Products, setProductos] = useState("productos")

  return (
    <>
      <Container>
          <div className="title-holder"> 
             <h2>Categorias </h2> 
              </div>
      <Row>
        <Col>
            <div className="holder">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../img/categorias.png" />
      <Card.Body>
      <button onClick={() => { setProductos("categoria1") }}>Categoria 1</button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../img/categorias.png" />
      <Card.Body>
      <Card.Link href="#">Categoria 2</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../img/categorias.png" />
      <Card.Body>
      <Card.Link href="#">Categoria 3</Card.Link>
      </Card.Body>
    </Card>
            </div>
        </Col>
      </Row>
    </Container>

    
    </>
  );
}
export default Category;
