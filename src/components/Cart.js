import React, { useState, useContext, Children } from 'react';
import {AppContext} from '../context/CartContext';
import { useHistory } from 'react-router-dom'
import './Cart.css';


export default function Cart (){


    const {cart,EstadoCarrito,CleanCart,EstadoCarrito2,EliminarItem}  = useContext(AppContext);
    

    let history = useHistory()

    function seguirComprando(){
        history.push('/Catalogo')
    }


    function CartEmpty(){
        return(
            <>
            <h2>Burguer Code</h2>

            <p>Parece que no hay productos en el carrito</p>

            <button onClick={seguirComprando}  className="btn btn-primary">Comprar Productos</button>

            </>

        )
    }

    function Eliminar(id){
        return(EliminarItem(id))
    }


   function CartFull(id,Producto,Descripcion,Precio,PrecioTotal,Cantidad,Imagen){

       

    return(<>

        <div className="Contenedor">
                <div className="contenedor__carrito">
                    <div className="card-text">
                        <img src={Imagen} alt="" className="Imagen__logo"/>
                        <p>Producto: {Producto}</p>
                        <p>Descripcion: {Descripcion}</p>
                        <p>Precio: {Precio}</p>
                        <p>Precio Total:{PrecioTotal}</p>
                        <p>Cantidad: {Cantidad}</p>
                        <button onClick={
                             function Eliminar(){
                                return(EliminarItem(id))
                            }
                        } className="btn btn-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" className="tacho">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>
                    </div>
                </div>
        </div> 
        </>
)

   }

    return(
     <>

     <h1>Carrito</h1>
     <div>
     { (EstadoCarrito2(cart))? (
     <button className="btn btn-primary" onClick={CleanCart}>Vaciar Carrito</button>
)

: ("")

}
     </div>

     <div>
         { (EstadoCarrito2(cart))? ( cart.map((items) => {

            if(EstadoCarrito(items.id)){
            return(
                    CartFull(items.id,items.item,items.Descripcion,items.Precio,items.PrecioTotal,items.quantity,items.Imagen)
                    
                )
            }
       }
) )
          : (CartEmpty())

         }
     </div>


    </>    
    )
}


