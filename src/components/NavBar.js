import React from 'react';
import './NavBar.css';
import logo from '../assets/logo-Hamburguesa.jpg';
import {Link} from  'react-router-dom';
import Carrito from './Carrito';


function NavBar() {

    return(
        <div>
            <div className="barraNavegacion__logo">
             <Link to={"/"}> <img src={logo}  className="logo--tamaño"/></Link>      
            </div>
            <div>
                <div className="barraNavegacion__items">
                    <div><a href="App.js" className="barraNavegacion__item">Inicio</a></div>
                    <div><a href="App.js" className="barraNavegacion__item">Componentes</a></div>
                    <div><a href="App.js" className="barraNavegacion__item">Comprar</a></div>
                    <div><a href="App.js" className="barraNavegacion__item">Ayuda</a></div>
                    <Carrito/>
                </div>
            </div>
        </div>
    )
    
}

export default NavBar;