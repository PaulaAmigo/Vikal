import React from "react";
import Menu from "../components/menu"
import {Link} from "react-router-dom"
import Carrusel from "../components/carrusel"

function MainPage() {
    return (
        <div className="mainPage">
        <Menu />
        <Carrusel />
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
        </div>
    )
}
 export default MainPage;