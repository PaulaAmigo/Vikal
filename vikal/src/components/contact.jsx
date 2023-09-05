import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Menu from "../components/menu"

function Contact () {
    return (
<>
<Menu />
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingresa tu correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Solicitud</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <hr />
        <h1>VIKAL</h1>
<footer>

<div>
    <h3>Dirección</h3>
    <p>xxxxxxxxxxxx</p>
</div>
<div>
    <h3>Horarios</h3>
    <p>Lunes a viernes 8:00 am hasta 18:30 pm</p>
</div>
<div>
    <h3>Telefonos</h3>
    <p>+56 9 1234 5678</p>
    <p>+56 2 3456 5678</p>
</div>
<div>
    <h3>Correos</h3>
    <p>contaco@vikal.cl</p>
    <p>ventas@vikal.cl</p>
    <p>postventa@vikal.cl</p>
</div>
<div>
    <h3>Marcas</h3>
    <p>una</p>
    <p>dos</p>
    <p>tres</p>
</div>
</footer>
</>
    )
}
export default Contact