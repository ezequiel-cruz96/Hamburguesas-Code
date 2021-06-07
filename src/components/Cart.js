import React, { useState, useContext, Children } from 'react';
import {AppContext} from '../context/CartContext';
import { useHistory } from 'react-router-dom'
import './Cart.css';
import Orders from '../components/Orders';


export default function Cart (){


    const {cart,EstadoCarrito,CleanCart,EstadoCarrito2,EliminarItem}  = useContext(AppContext);

    const [form, setForm] = useState({  name:'',email:'',phone:'' })

    const [ docRef, setDocRef ] = useState('')

    function enviar(){
        Orders(cart, form, 10)
            .then(res => setDocRef(res),  
        )
         
    }

    const enviarFormulario = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value }
    )
    }
    
    let history = useHistory()

    function seguirComprando(){
        history.push('/Catalogo')
    }

    function CartEmpty(){
        return(
            <>

            <h2 className="titulo">Parece que no hay productos en el carrito</h2>

            <button onClick={seguirComprando} className="btn3">Comprar Productos</button>
            
            </>

        )
    }

    function Eliminar(id){
        return(EliminarItem(id))
    }

   function CartFull(id,Producto,Descripcion,Precio,PrecioTotal,Cantidad,Imagen){

    return(
        <>
            <div className="contenedor__carrito">
                <div className="card-text">
                    <img src={Imagen} alt="" className="Imagen__logo"/>
                    <p>Producto: {Producto}</p>
                    <p>Descripcion: {Descripcion}</p>
                    <p>Precio: {Precio}$</p>
                    <p>Cantidad: {Cantidad}</p>
                    <p>Precio Total:{PrecioTotal}$</p>
                    <button onClick={
                            function Eliminar(){
                            return(EliminarItem(id))
                        }
                    } className="btn btn-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" className="tacho">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
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
        <>
        <button className="btn6" onClick={seguirComprando}>Seguir agregando productos</button>
        <button className="btn1 " onClick={CleanCart}>Vaciar Carrito</button>

        <h2>Formulario de compra</h2>

        <form >
                <label>
                    <input type="text"  onChange={enviarFormulario} name="name"  placeholder="Nombre y Apellido" className="formulario" /> 
                    <br/>
                    <input type="text"  onChange={enviarFormulario} name="email"  placeholder="Burgercode@gmail.com" className="formulario" /> 
                    <br/>
                    <input type="text"  onChange={enviarFormulario} name="phone"  placeholder="Teléfono" className="formulario" /> 
                    <br/>
                </label>
        </form>
        <button onClick={enviar} className="bt4">Terminar pedido</button>

        <h3>Retirar por N de orden :{docRef}</h3> 

        <h4>Sus pedidos :</h4> 

        </>
)

: ("")

}
     </div>

     <div className="Contenedor">
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


