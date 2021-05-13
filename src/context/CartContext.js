import React, { useState, useContext } from 'react';
import { createContext} from 'react';
import Carrito from '../components/Carrito';

export const AppContext = createContext(null);

export default function AppContextProvider({children}){


  const [cart, setCart] = useState([])
  

    function addItem(id,item,Descripcion,Precio,quantity) {

      let PrecioMax=Precio*quantity;

      let estado= EstadoCarrito(id)

      if(quantity>0){

                setCart([{id,item,Descripcion,PrecioMax,quantity}])

                console.log(cart);

                console.log("Cantidad de productos comprados: "+quantity);
                
      }
      if(estado){

        let Newcart=[{
          id:id,
          item:item,
          Descripcion: Descripcion,
          PrecioMax: PrecioMax,
          quantity: quantity}]

          setCart([...Newcart])
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