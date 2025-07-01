import React, { useState, useEffect } from 'react';
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(response => {
        if (!response.ok) throw new Error("Error HTTP: " + response.status);
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Catálogo de Productos</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: S/.{product.price}</p>
                <button className="btn-neon" onClick={() => addToCart(product)}>
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