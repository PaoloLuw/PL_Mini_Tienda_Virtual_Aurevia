const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Configuración de CORS para permitir React (puerto 3000)
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Datos simulados de productos
const products = [
  { id: 1, name: 'Producto 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Producto 2', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Producto 3', price: 30, image: 'https://via.placeholder.com/150' },
];

// Ruta para obtener productos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Backend corriendo en http://localhost:${port}`);
});