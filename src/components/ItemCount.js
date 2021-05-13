import React, { useState, useContext } from 'react';
import './ItemCount.css';
import { Link} from 'react-router-dom';
import {AppContext} from '../context/CartContext';




export default function ItemCount ({stock,inicial,Onadd,id,item,Descripcion,Precio}){ 


    let {addItem} = useContext(AppContext);

    const {cart, setCartItem} = useContext(AppContext)


    let [count, setCount] = useState(inicial);


    Onadd=count;

    let infoProducto={id,item,Descripcion,Precio}
    

    function onClick(){
        addItem(infoProducto,count)
    }

    
    function onAdd() {
        if (count > stock)
        return; 
        setCount(count + 1);
       }
       
       function offAdd() {
        if (count <= inicial)
        return; 
        setCount(count - 1) 
       }


    return(
        <div>

            <div className="item__titulo">{item}</div>
            <div className="item__estructura">
            
                <div>
                    <button onClick= {offAdd} className="restar">-</button>
                </div>

                <div>
                    
                { 
                count>stock? (
                    
                    <div className="stock"> No hay más stock </div>
                    
                )
                : (<div>{count}</div>) 
            }
                </div>
                <div>
                    <button onClick= {onAdd} className="sumar" >+</button>
                </div>
            </div>

            <div>
                    
                { 
                (Onadd>0)&&(Onadd<=stock)? (
                    
                    (<Link to= '/cart'>
                    <button className="item__titulo--añadirCarrito" >  Terminar mi compra</button>
                </Link>) 
                    
                )
                : ("") 
            }
                </div>
                
                <div>
                <button type="button" className="btn btn-primary" onClick= {onClick}>Comprar</button>
                                                                

                </div>

        </div>
    )
 
      
   }
 