import React from 'react';
import './ItemListContainer.css';
import html5 from '../assets/Hamburguesas/html5-cheddar.jpg';
import html5doble from '../assets/Hamburguesas/html5-doble-cheddar.jpg';
import {Link,useParams} from  'react-router-dom';

function ItemListContainer() {

    const{id}=useParams();


    return(
        <div>
    
        {/* Hamburguesa HTML5 */}
        <div className="card">
                <div className="card-body">
                    <img src={html5} className="Item__hamburguesa--tamaño"/>
                    <h5 className="card-title">Burger Code</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Hamburguesa HTML5</h6>
                    <p className="card-text">Hamburguesa simple con cheddar.</p>
                    <Link  exact to={'/item/:1'} className="eliminarEstilos"> <button type="button" className="btn btn-primary">Ver detalle</button>
                    </Link>
                </div>
            </div>

            

              {/* Hamburguesa HTML5 DOBLE */}
              <div className="card">
                <div className="card-body">
                    <img src={html5doble} className="Item__hamburguesa--tamaño"/>
                    <h5 className="card-title">Burger Code</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Hamburguesa HTML5 Doble</h6>
                    <p className="card-text">Hamburguesa con doble medallon de carne y salsa Burger Code.</p>
                    <Link  exact to={'/item/:2'} className="eliminarEstilos"> <button type="button" className="btn btn-primary">Ver detalle</button>
                    </Link>
                </div>
            </div>
    
            

        </div>
    )
    
}

export default ItemListContainer;