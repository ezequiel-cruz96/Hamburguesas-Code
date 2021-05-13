import React, { useState, useContext } from 'react';
import { createContext} from 'react';
import Carrito from '../components/Carrito';

export const AppContext = createContext(null);

export default function AppContextProvider({children}){


    let cart=[];

    function addItem(item, quantity) {

      cart.shift(item)

      if(quantity>0){
        
                cart.push(item)
                
                console.log(cart);

                console.log("Cantidad de productos comprados "+quantity);
                
      }
      

    }

   
    function EstadoCarrito(){
      console.log(cart);
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