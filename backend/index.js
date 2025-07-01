const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// CORS (permite conexión con frontend)
app.use(cors({
  origin: [
    'https://mi-tienda-frontend-zl5y.onrender.com', // Producción
    'http://localhost:3000'                         // Desarrollo
  ]
}));

// Base de datos simulada (30 productos)
const products = [
  { id: 1, name: 'Smartphone Neo', price: 599, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 2, name: 'Laptop Cyber', price: 1299, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 3, name: 'Tablet Nova', price: 399, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 4, name: 'Smartwatch Pulse', price: 199, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 5, name: 'Auriculares Sonic', price: 99, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 6, name: 'Cámara Holo', price: 299, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 7, name: 'Teclado Quantum', price: 89, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 8, name: 'Mouse Laser', price: 49, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 9, name: 'Monitor Ultra', price: 399, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 10, name: 'Impresora 3D', price: 199, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 11, name: 'Consola Vortex', price: 499, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 12, name: 'Router Galaxy', price: 129, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 13, name: 'Altavoz Nebula', price: 79, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 14, name: 'Proyector Star', price: 299, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 15, name: 'Drone Sky', price: 499, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 16, name: 'Cargador Solar', price: 59, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 17, name: 'Disco SSD 1TB', price: 99, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 18, name: 'Webcam HD', price: 69, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 19, name: 'Micrófono Studio', price: 89, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 20, name: 'Lámpara LED RGB', price: 39, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 21, name: 'Mousepad XXL', price: 29, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 22, name: 'Hub USB-C', price: 49, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 23, name: 'Batería Externa', price: 69, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 24, name: 'Ventilador Smart', price: 89, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 25, name: 'Termostato WiFi', price: 99, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 26, name: 'Reloj Digital', price: 59, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 27, name: 'Candado Inteligente', price: 79, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 28, name: 'Aspiradora Robot', price: 299, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 29, name: 'Cafetera Smart', price: 149, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' },
  { id: 30, name: 'Drone 4K Pro', price: 499, image: 'https://w.wallhaven.cc/full/w8/wallhaven-w8y3y6.png' }
];

// Rutas
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});