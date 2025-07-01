import React from 'react';

   const Cart = ({ cart }) => {
     return (
       <div className="container">
         <h1>Carrito de Compras</h1>
         {cart.length === 0 ? (
           <p>El carrito está vacío</p>
         ) : (
           <ul className="list-group">
             {cart.map((item, index) => (
               <li key={index} className="list-group-item">
                 {item.name} - ${item.price}
               </li>
             ))}
           </ul>
         )}
       </div>
     );
   };

   export default Cart;