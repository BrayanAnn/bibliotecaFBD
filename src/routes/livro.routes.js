const routes = require('express-promise-router')();
const libreController = require('../controllers/livro.controller');
// ==> Definindo as rotas do CRUD - 'Product':

// ADICIONA LIVRO
routes.post('/livro', libreController.createLibre);

//LISTA TODOS OS LIVROS
routes.get('/livros', libreController.listAllLibres);

//MOSTRA APENAS O LIVRO SELECIONADO PELO ISBN
routes.get('/livro', libreController.showLibre);

//ATUALIZA O LIVRO PELO ISBN
routes.put('/livro', libreController.updateLibre);    

//DELETE UM LIVRO PELO ID
routes.delete('/livro', libreController.deleteLibreByISBN);

module.exports = routes;

