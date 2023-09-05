import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body">
          <Container fluid>
            <div className="menu">
            <Navbar.Brand href="/">
              <img
                src="../img/vikalLogo.png"
                className="App-logo"
                alt="logo"
              />
            </Navbar.Brand>

            <Form className="buscar">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Search"
              />
              <button className="btnBuscar"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfBJREFUaEPtmWFOBDEIhdmTqSfTPZl6Mg3JkjQEWh7Q3Zlk5s+q6VA+eNAt3ujkz+3k/tMF8OoMVjPwTkSfAwT/zs/P4/P38fm1CzQL8E1E4mzUtzsRtYOgAOzAGPGo8+O6VhAEIBN1D5Al9pGh1+9EAETnlmRE6xzVUfu8VtbPMsYQYiPFEwH4Myzzpux0dHNPeuVMrAAs2VQ2tUAq9qYHmbVZRwG22p1lQEunw3lRo5XZlRrMGvFesqKU2mBSmRoiJSXPqZ3RFybuUgwxPnCQrBeeEX1PSnBbjQB0al8rqiwjC0Ab3QmgZQTXQQQATitwpG4B0AUMFxYAwEtL+1nOlQyCzm8B0DXwTAkxEJTxV9eAbtlbihg2CshIA8Adz8pAuTMAAOUTP/pVYkcdtJz4HkD5hAxkoRz9VcXrDTproSX6K4DWi8eQkVa7q55rXTzgTjE47002Vn64ioy86G2KgMwmG+wcYgu+QFgXj9HIOFKRKYUeqUSmeCmISAZm99hAszGXMKgFBUMgAOxJ52jRswVBoAASzgyINQwrQ2QBRhD++e3xBz1elwKdTfBKEFWAbA3o99IQRwGY1de0Jo4EMINwv0weDcCCOFUGdJdbttQjZkAguKMt//9wZIBQh7sAQmHauOjKwMbghkyfPgP/ceZ8MX3RV60AAAAASUVORK5CYII=" className="imgSearch"/></button>
            </Form>

            <Nav.Link href=""><Link to="/Products" className="product">
              Productos
            </Link></Nav.Link>
            <Nav.Link href="">Nosotros</Nav.Link>

            <Nav.Link href=""><Link to="/Contact" className="contact">
              Contactanos
            </Link></Nav.Link>
            </div>
          </Container>
        </Navbar>
      </header>
      <hr />
    </>
  );
}
export default Menu;
