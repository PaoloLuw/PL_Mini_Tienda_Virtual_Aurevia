import React, { useState, useEffect } from 'react';

   const ProductList = ({ addToCart }) => {
     const [products, setProducts] = useState([]);

     // Obtener los productos del backend al cargar el componente
useEffect(() => {
  fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => {
      console.log("Datos recibidos:", data); // 👈 Agrega esto
      setProducts(data);
    })
    .catch(error => console.error('Error:', error));
}, []);

     return (
       <div className="container">
         <h1>Catálogo de Productos</h1>
         <div className="row">
           {products.map(product => (
             <div key={product.id} className="col-md-4">
               <div className="card mb-4">
                 <img src={product.image} className="card-img-top" alt={product.name} />
                 <div className="card-body">
                   <h5 className="card-title">{product.name}</h5>
                   <p className="card-text">Precio: ${product.price}</p>
                   <button className="btn btn-primary" onClick={() => addToCart(product)}>
                     Agregar al carrito
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default ProductList;