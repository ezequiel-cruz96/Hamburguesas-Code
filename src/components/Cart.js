import React, { useState, useContext } from 'react';
import {AppContext} from '../context/CartContext';
import './Cart.css';

export default function Cart (){


    const {cart,}  = useContext(AppContext);

   function Cartlist(id,Producto,Descripcion,Precio,PrecioTotal,Cantidad){

    return(

        <div className="card" >
                <div className="card-body">
                    <div className="card-text">
                        <p>Producto: {Producto}</p>
                        <p>Descripcion: {Descripcion}</p>
                        <p>Precio: {Precio}</p>
                        <p>Precio Total:{PrecioTotal}</p>
                        <p>Cantidad: {Cantidad}</p>
                    </div>
                </div>
        </div> 

)

   }

    return(
     <>

     <h1>Carrito</h1>
     <div>
         { cart.map((items) => {
                        return(
                            Cartlist(items.id,items.item,items.Descripcion,items.Precio,items.PrecioTotal,items.quantity)
                        )
                    })

         }
     </div>






    {/*  <div className="card" >
                    <div className="card-body">
                        <div className="card-text">
                            <p>Producto: {Producto}</p>
                            <p>Descripcion: {Descripcion}</p>
                            <p>Precio: {Precio}</p>
                            <p>Precio Total:{PrecioTotal}</p>
                            <p>Cantidad: {Cantidad}</p>
                        </div>
                    </div>
            </div> */}

    </>    
    )
}
