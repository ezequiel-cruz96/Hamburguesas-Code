import React from 'react';
import Item from './Item';
import {useParams} from 'react-router-dom';



export default function ItemList({ItemProductos}){



    return(
        <div>
            
            {
                    ItemProductos.map((items) => {
                        return(
                            <Item key={items.id} items={items} />
                        )
                    })
                }
        </div>
      
    )
}
