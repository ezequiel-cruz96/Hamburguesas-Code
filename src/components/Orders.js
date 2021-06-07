import React from 'react';

import db from '../firebase/index';

 function Orders (cart, buyer, total) {
    
    return db.collection("order").add({
        buyer:{name: buyer.name, email: buyer.email, phone: buyer.phone},
        items:cart,
        date: Date(),
        total:total,

        }).then(function(docRef) {
            console.log("Id autogenerada: ", docRef.id);
            return docRef.id

        })
        .catch(function(error) {
            console.log("Error: ", error);
        })
}
export default Orders;
