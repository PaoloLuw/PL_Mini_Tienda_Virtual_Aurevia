import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    toast.success(`${product.name} agregado al carrito`);
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    } else {
      removeFromCart(index);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.info('Producto eliminado del carrito');
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Carrito vaciado');
  };

  return (
    <div>
      <header>
        <h1>Mini tienda Aurevia</h1>
      </header>
      <ProductList addToCart={addToCart} />
      <Cart
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;