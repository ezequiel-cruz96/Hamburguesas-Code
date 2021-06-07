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
                    <div className="barraNavegacion__item"><Link to={'/'} className="estilosLink">Inicio</Link></div>
                    <div className="barraNavegacion__item"><Link to={'/quienesSomos'} className="estilosLink">¿Quienés somos?</Link></div>
                    <div>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="barraNavegacion__item--drop" >
                        Catálogo 
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to={'/Catalogo'} className="dropdown-item">Lista de productos</Link>
                            <Link to={'/Catalogo/Hamburguesas'} className="dropdown-item">Hamburguesas</Link>
                            <Link to={'/Catalogo/Papas'} className="dropdown-item">Papas</Link>
                        </div>
                    </div>
                    <div className="barraNavegacion__item"><Link to={'/Contacto'} className="estilosLink">Contacto</Link></div>
                    <div className="barraNavegacion__item"><Link to={'/cart'}> <Carrito/> </Link></div>
                </div>
            </div>
        </div>
    )
    
}

export default NavBar;