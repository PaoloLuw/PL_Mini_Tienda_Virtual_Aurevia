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
  { id: 1, name: 'Smartphone Neo', price: 599, image: 'https://media.falabella.com/falabellaPE/133671802_01/w=800,h=800,fit=pad' },
  { id: 2, name: 'Laptop Cyber', price: 1299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9plYZMOxfln827soZONjZL2VUhjDLunBA1w&s' },
  { id: 3, name: 'Tablet Nova', price: 399, image: 'https://i.blogs.es/f7a08b/redmagic-nova-gaming-tablet-4/650_1200.jpeg' },
  { id: 4, name: 'Smartwatch Pulse', price: 199, image: 'https://http2.mlstatic.com/D_Q_NP_914631-MLU78671079709_082024-O.webp' },
  { id: 5, name: 'Auriculares Sonic', price: 99, image: 'https://http2.mlstatic.com/D_Q_NP_651411-MLA79553168168_102024-O.webp' },
  { id: 6, name: 'Cámara Holo', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtoU24UBsSJKm-rY4uf71t5CHOCG1c0cOlqA&s' },
  { id: 7, name: 'Teclado Quantum', price: 89, image: 'https://api.compuusa.com.pe/uploads/products/7e192e01-7586-4164-ab7d-41aa085c579b.jpg' },
  { id: 8, name: 'Mouse Laser', price: 49, image: 'https://pe-media.hptiendaenlinea.com/wysiwyg/Mouse_para_Juegos.jpg' },
  { id: 9, name: 'Monitor Ultra', price: 399, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2gPYF5-HDPLql8WTEAxgG5nMBP5Uv27g7A&s' },
  { id: 10, name: 'Impresora 3D', price: 199, image: 'https://plazavea.vteximg.com.br/arquivos/ids/27194446-418-418/null.jpg' },
  { id: 11, name: 'Consola Vortex', price: 499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGFHpBf9iiMWNO0vKBeykg_T2xZLZmtptAQ&s' },
  { id: 12, name: 'Router Galaxy', price: 129, image: 'https://www.galaxysecurity.com/image/cache/catalog/0_GX/INDOOR%20ROUTER%208-500x500.jpg' },
  { id: 13, name: 'Altavoz Nebula', price: 79, image: 'https://m.media-amazon.com/images/I/81Ko6vVSmBL.jpg' },
  { id: 14, name: 'Proyector Star', price: 299, image: 'https://http2.mlstatic.com/D_Q_NP_967524-MLU54973037804_042023-O.webp' },
  { id: 15, name: 'Drone Sky', price: 499, image: 'https://http2.mlstatic.com/D_NQ_NP_919139-MLA47977930053_102021-O.webp' },
  { id: 16, name: 'Cargador Solar', price: 59, image: 'https://oechsle.vteximg.com.br/arquivos/ids/18994912/image-8aa5289f9f9346a4af5d25b56867d1f9.jpg?v=638652642969570000' },
  { id: 17, name: 'Disco SSD 1TB', price: 99, image: 'https://coolboxpe.vtexassets.com/arquivos/ids/348087/SNV2S1000G_2.jpg?v=638443063142570000' },
  { id: 18, name: 'Webcam HD', price: 69, image: 'https://oechsle.vteximg.com.br/arquivos/ids/4438843-1000-1000/image-c146e5de0af345d182652169a473b0fd.jpg?v=637638307030930000' },
  { id: 19, name: 'Micrófono Studio', price: 89, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9wbBNKUATwYtcnSaGoKF0eCaCXlSVApq5w&s' },
  { id: 20, name: 'Lámpara LED RGB', price: 39, image: 'https://westor.pe/wp-content/uploads/2021/08/OP-BT9W_1.jpg' },
  { id: 21, name: 'Mousepad XXL', price: 29, image: 'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4345/PMP20000325614/full_image-1.jpeg' },
  { id: 22, name: 'Hub USB-C', price: 49, image: 'https://m.media-amazon.com/images/I/61KRLch6voL.jpg' },
  { id: 23, name: 'Batería Externa', price: 69, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0flqAIiZYhIS7xjg-3gZJWc5ADQ4X_yMm9Q&s' },
  { id: 24, name: 'Ventilador Smart', price: 89, image: 'https://ilumina.pe/cdn/shop/files/FOCO-HELICES-CAJA-MARCA-DE-AGUA_9747d372-539a-4ba7-9679-53ca4340372f.jpg?v=1717707980&width=1214' },
  { id: 25, name: 'Termostato WiFi', price: 99, image: 'https://www.hotowell.com/Uploads/products/2021-03-08/es-Air-Conditioner-Wireless-Thermostat.jpg' },
  { id: 26, name: 'Reloj Digital', price: 59, image: 'https://datamercantil.com/wp-content/uploads/2024/11/reloj-digital-que-es-1024x683.jpg' },
  { id: 27, name: 'Candado Inteligente', price: 79, image: 'https://ismartperu.com/wp-content/uploads/2023/08/SH-PLG1_1.jpg' },
  { id: 28, name: 'Aspiradora Robot', price: 299, image: 'https://electroluxpe.vtexassets.com/arquivos/ids/159946-800-800?v=638757500391270000&width=800&height=800&aspect=true' },
  { id: 29, name: 'Cafetera Smart', price: 149, image: 'https://media.falabella.com/falabellaPE/136973263_02/w=800,h=800,fit=pad' },
  { id: 30, name: 'Drone 4K Pro', price: 499, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZB8KPunXPlZJFcjB8uRZ5omyC01NNMu-ikw&s' }

];

// Rutas
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});