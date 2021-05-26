import db from '../firebase/index';

function getProducts(){

    const productosCollection = db.collection('Productos')

    let Productos =[]

    productosCollection.get()
    .then(snapshot =>{
        Productos = snapshot.docs.map(doc =>{
            console.log(doc.data);

            let producto= doc.data() /* Aca esta la info */
            return{
                id: doc.id,
                ...producto 
            }
        })
    })
    return Productos
}

export default getProducts;

