const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Configuración para producción (Render)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// CORS (permite conexión con frontend)
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://tu-app-frontend.onrender.com' 
    : 'http://localhost:3000'
}));

// Base de datos simulada (30 productos)
const products = [
  { id: 1, name: 'Smartphone X', price: 599, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 2, name: 'Laptop Pro', price: 1299, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  // ... Agrega 28 productos más siguiendo el mismo formato
  { id: 30, name: 'Drone 4K', price: 499, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' }
];

// Rutas
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Sirve el frontend en producción
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});