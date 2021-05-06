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
                    <div className="barraNavegacion__item"><Link to={'/Inicio'} className="estilosLink">Inicio</Link></div>
                    <div className="barraNavegacion__item"><Link to={'/Quienés somos'} className="estilosLink">¿Quienés somos?</Link></div>
                    <div className="barraNavegacion__item"><Link to={'/Catalogo'} className="estilosLink">Catálogo</Link></div>
                    <div className="barraNavegacion__item"><Link to={'/Contacto'} className="estilosLink">Contacto</Link></div>
                    <div className="barraNavegacion__item"><Link to={'/carrito'}> <Carrito/> </Link></div>

                </div>
            </div>
        </div>
    )
    
}

export default NavBar;