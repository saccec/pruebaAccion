import express from 'express';

const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola! El servidor web en Node.js está funcionando correctamente.');
});

app.get('/buscar', (req, res) => {
  
  res.send('¡Hola! El servidor web en Node.js está buscando correctamente.');
});

app.get('/listar', (req, res) => {
  
  res.send('¡Hola! El servidor web en Node.js está listando correctamente.');
});
app.get('/revisar', (req, res) => {
  
  res.send('¡Hola! El servidor web en Node.js está revisando correctamente.');
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
