import React, { useState, useContext } from 'react';
import { createContext} from 'react';
import Carrito from '../components/Carrito';

export const AppContext = createContext(null);

export default function AppContextProvider({children}){


  const [cart, setCart] = useState([])

  
    //Guardar productos en el carrito
    function addItem(id,item,Descripcion,Precio,quantity,Imagen) {
      
      let estado= EstadoCarrito(id);

      if(estado){
      
        let newCart= cart.map((el)=>{
    
        if(el.id===id){
          return{
            ...el,
            quantity,
            PrecioTotal: Precio*quantity
          }
        }
        return el
      }

    )
    return  setCart([...newCart])
        
      }else{
        setCart([...cart, {id,item,Descripcion,Precio,quantity,PrecioTotal:Precio*quantity,Imagen}])
      }

    }

    //Me devuelve true si hay algo en el carrito

      function EstadoCarrito (id) {
        return cart.some(item => item.id === id)
      }

      function EstadoCarrito2 (id) {
        return id.some(item => item.id === item.id)
      }

      //Limpiar carrito

      function CleanCart(){
        setCart([])
      }

      //Eliminar Item del carrito

      function EliminarItem(id){
        let CartNuevo= cart.filter((el)=>
        el.id!==id
        )
        setCart(CartNuevo)
      }


  return(
    <AppContext.Provider value={
        {addItem,EstadoCarrito,cart,CleanCart,EstadoCarrito2,EliminarItem}
    }
    >
    
   


    {children}
    </AppContext.Provider>
    
  )
}