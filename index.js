const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>App Teste</title>
      <style>
        body { font-family: Arial; text-align: center; padding: 50px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>🚀 Deploy Funcionou!</h1>
      <p>Aplicação rodando no Azure</p>
      <p>Hora: ${new Date().toLocaleString('pt-BR')}</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});