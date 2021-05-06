import React from 'react'
import './Item.css';

export default function Item ({items}){



    return(
        <div>
            <div className="contenedor__carta">

                <div className="card">
                    <div className="card-body">
                    <img class="card-img-top" src={items.Img} alt="Productos" className="carta__imagen--tamaño"/>
                        <h5 className="card-title">Burguer Code</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{items.Producto}</h6>
                        <p className="card-text"> Descripción:{items.Descripcion}</p>
                        <p>Precio:{items.Precio}</p>
                    </div>
                </div>
            </div>
            
        </div>
        
       
    )
}