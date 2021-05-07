import React, { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
import {useParams} from 'react-router-dom';
import ItemDetail from "../components/ItemDetail";



function ItemListContainer() {

    
   const{categoria}= useParams();
 
    const [productos, setProductos] = useState([]);


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

        <div>{ 
                categoria ==="Papas"? (
                <ItemList ItemProductos={Papas}/>
            ):("")
                }
        </div>
        <div>{ 
                categoria ==="Hamburguesas"? (
                <ItemList ItemProductos={Hamburguesas}/>
            ):("")
                }
        </div>
        <div>{ 
                categoria === undefined ? (
                <ItemList ItemProductos={productos}/>
            ):("")
                }
        </div>

        </div>
       
    )

    }
export default ItemListContainer