const routes = require('express-promise-router')();
const usuarioController = require('../controllers/usuario.controller');
// ==> Definindo as rotas do CRUD - 'Product':
// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/livro

// ADICIONA LIVRO
routes.post('/usuario', usuarioController.createUser);

//LISTA TODOS OS LIVROS
routes.get('/usuarios', usuarioController.listAllUsers);

//MOSTRA APENAS O LIVRO SELECIONADO PELO ISBN
routes.get('/usuario', usuarioController.showUser);

//ATUALIZA O LIVRO PELO ISBN
routes.put('/usuario', usuarioController.updateUser);

//DELETE UM LIVRO PELO ID
routes.delete('/usuario', usuarioController.deletUserByCPF);

module.exports = routes;
