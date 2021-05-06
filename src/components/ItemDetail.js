import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ItemDetail.css';


function ItemDetail(){
    
    const [detalle, setDetalle] = useState([]);
    const{id}= useParams();
    
    
    

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ezequiel-cruz96/Api-Rest--Base-de-datos--Hamburguesas/Hamburguesas/${id}`)
        .then((response) => response.json())
        .then((data) => setDetalle(data));   
        },[])

    return(
        <div>

            <div className="card" >
                <img className="imagen" src={detalle.Img} alt="Hamburguesas" className="carta2__imagen--tamaño"/>
                    <div className="card-body">
                        <div className="card-text">
                            <p>Producto: {detalle.Producto}</p>
                            <p>Descripcion: {detalle.Descripcion}</p>
                            <p>Precio: {detalle.Precio}</p>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
            </div>
           
        </div>
    )
}

export default ItemDetail;