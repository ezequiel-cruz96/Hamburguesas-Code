import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from  './ItemCount';
import { Context} from '../context/CartContext.js';
import db from '../firebase/index';


function ItemDetail(){
    
    const [detalle, setDetalle] = useState([]);
    const{id}= useParams();

    let [Onadd, setOnadd] = useState();
  
        useEffect(()=>{

            function getProduct(id){
    
                const productoCollection = db.collection('Productos').doc(id)
                
                productoCollection
                .get()
                .then(doc =>{
                    const producto =doc.data()
                    setDetalle({id : doc.id, ...producto})
                })
            }
            getProduct(id)
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
                           <ItemCount stock={5} inicial={0} id ={detalle.id} Producto={detalle.Producto} Onadd={Onadd} Descripcion={detalle.Descripcion} Precio={detalle.Precio} Imagen={detalle.Img}/> 
                        </div>
                    </div>
            </div>
           
        </div>
    )
}

export default ItemDetail;
