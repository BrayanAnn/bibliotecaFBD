const express = require('express');
const router = express.Router();
router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL da discplina de Banco de dados',
    version: '1.0.0',
  });
});
// Array para armazenar os livros


module.exports = router;