import React, { useState } from 'react';
   import ProductList from './ProductList';
   import Cart from './Cart';

   function App() {
     const [cart, setCart] = useState([]);

     // Función para agregar productos al carrito
     const addToCart = (product) => {
       setCart([...cart, product]);
     };

     return (
       <div>
         <ProductList addToCart={addToCart} />
         <Cart cart={cart} />
       </div>
     );
   }

   export default App;