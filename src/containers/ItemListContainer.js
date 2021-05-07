import React, { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
import {useParams} from 'react-router-dom';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import ItemDetail from "../components/ItemDetail";



function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const{categoria}= useParams();

    console.log(categoria)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://my-json-server.typicode.com/ezequiel-cruz96/Api-Rest--Base-de-datos--Hamburguesas/Hamburguesas')
                .then((response) => response.json())
                .then((data) => setProductos(data));
        }, 0);
        
    }, [])
    

    //Filtrado de Hamburguesas
    const Hamburguesas= productos.filter((el)=>
    el.Categoria==="Hamburguesa"
    )

    //Filtrado de papas

    const Papas= productos.filter((el)=>
    el.Categoria==="Papas"
    )

    return(
       <div>
            <ItemDetail ItemProductos={productos}/>

       </div>
      
    
    )

    }
export default ItemListContainer