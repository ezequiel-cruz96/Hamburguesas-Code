import React, { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
import {useParams} from 'react-router-dom';
import getProducts from '../service/getProducts';
import db from '../firebase/index';



function ItemListContainer() {

    const{categoria}= useParams();

    const [productosFirebase, setProductosFirebase] = useState([]);

    useEffect(()=>{

        function getProducts(){

            const productosCollection = db.collection('Productos')

            let Productos=[]
        
            productosCollection
            .get()
            .then(snapshot =>{
                Productos = snapshot.docs.map(doc =>{
        
                    let producto= doc.data() /* Aca esta la info */
                    return{
                        id: doc.id,
                        ...producto 
                    }
                })
                setProductosFirebase(Productos)
            })
        }

        getProducts()

    },[])
        

    //Filtrado de Hamburguesas

    const Hamburguesas= productosFirebase.filter((el)=>
    el.Categoria==="Hamburguesa"
    )

    //Filtrado de papas

    const Papas= productosFirebase.filter((el)=>
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
                <ItemList ItemProductos={productosFirebase}/>
            ):("")
                }
        </div>

        </div>
       
    )

    }
export default ItemListContainer