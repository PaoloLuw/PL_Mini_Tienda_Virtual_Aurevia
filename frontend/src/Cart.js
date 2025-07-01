import React from 'react';

const Cart = ({ cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.name}</td>
                  <td>S/.{item.product.price}</td>
                  <td>
                    <button className="btn-laser" onClick={() => decrementQuantity(index)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn-laser" onClick={() => incrementQuantity(index)}>+</button>
                  </td>
                  <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn-laser" onClick={() => removeFromCart(index)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total a pagar: <strong>${total.toFixed(2)}</strong></p>
          <button className="btn-laser" onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;