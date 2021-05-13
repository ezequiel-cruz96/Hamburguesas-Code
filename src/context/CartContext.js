import React, { useState, useContext } from 'react';
import { createContext} from 'react';
import Carrito from '../components/Carrito';

export const AppContext = createContext(null);

export default function AppContextProvider({children}){


  const [cart, setCart] = useState([])
  


    function addItem(item,quantity) {

    let estado=EstadoCarrito(item.id);

      if(quantity>0){

                item.Cantidad=quantity;

                cart.push(item)
                
                console.log(cart);

                console.log("Cantidad de productos comprados "+quantity);
                
      }
      if(estado){

        cart.shift(item)

        item.Cantidad=quantity;

      }
      
    }

    //Me devuelve true si hay algo en el carrito

      function EstadoCarrito (id) {
        return cart.some(item => item.id === id)
      }

   
   
  

    
    
  
 

  return(
    <AppContext.Provider value={
        {addItem,EstadoCarrito}
    }
    >
    
   


    {children}
    </AppContext.Provider>
    
  )
}