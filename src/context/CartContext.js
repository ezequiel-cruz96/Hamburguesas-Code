import React, { useState, useContext } from 'react';
import { createContext} from 'react';
import Carrito from '../components/Carrito';

export const AppContext = createContext(null);

export default function AppContextProvider({children}){


  const [cart, setCart] = useState([])
  

    function addItem(id,item,Descripcion,Precio,quantity) {

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
        setCart([...cart, {id,item,Descripcion,Precio,quantity,PrecioTotal:Precio*quantity}])
      }

    }

    //Me devuelve true si hay algo en el carrito

      function EstadoCarrito (id) {
        return cart.some(item => item.id === id)
      }




    
    
  
 

  return(
    <AppContext.Provider value={
        {addItem,EstadoCarrito,cart}
    }
    >
    
   


    {children}
    </AppContext.Provider>
    
  )
}