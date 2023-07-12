const routes = require('express-promise-router')();
const favoritoController = require('../controllers/favoritos.controller');

// ADICIONA FAVORITO
routes.post('/favorito', favoritoController.createFavorito);

//LISTA TODOS OS FAVORITO
routes.get('/favoritos', favoritoController.listAllFavorito);

//MOSTRA APENAS O FAVORITO SELECIONADO PELO ISBN E CPF
routes.get('/favorito', favoritoController.showFavorito);

//ATUALIZA O FAVORITO PELO ISBN E CPF
routes.put('/favorito', favoritoController.updateFavorito);    

//DELETE UMA FAVORITO PELO ISBN E CPF
routes.delete('/favorito', favoritoController.deleteFavorito);

module.exports = routes;