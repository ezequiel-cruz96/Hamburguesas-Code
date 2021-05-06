import React, { useState, useEffect } from "react";
import ItemList from '../components/ItemList';

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://my-json-server.typicode.com/ezequiel-cruz96/Api-Rest--Base-de-datos--Hamburguesas/Hamburguesas')
                .then((response) => response.json())
                .then((data) => setProductos(data));
        }, 0);
        
    }, [])

    return(
        <div>
            <ItemList ItemProductos={productos}/>
        </div>
    )
    
}

export default ItemListContainer